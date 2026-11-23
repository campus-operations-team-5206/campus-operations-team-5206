# Test Execution Report — Week 07 (MVP QA & Verification)

**Project:** Campus Operations — Elevator Congestion Analytics MVP  
**Team:** Team 5206 (Halil Erdem Gül, Abdurrahman Furkan Şıkoğlu)  
**Course:** Yazılım Geliştirme Süreçleri  
**Repository:** https://github.com/campus-operations-team-5206/campus-operations-team-5206  
**Principle:** Working Software ≠ Verified Software  

---

## 1. Test Ortamı ve Kapsam

- **Uygulama Modülleri:** `index.html`, `js/app.js`, `js/storage.js`, `js/analytics.js`, `js/charts.js`
- **İlk Koşum Tarihi:** 2026-11-23
- **Ortam:** İzole JS Mantık Doğrulama Ortamı + Yerel Tarayıcı (`HTML5 / LocalStorage`)
- **Önceki Paket:** `TC-01` – `TC-10` korunmuş, üzerine `TC-11` – `TC-25` eklenmiştir.

---

## 2. Genişletilmiş Test Senaryoları ve Yürütme Sonuçları (`TC-11` – `TC-25`)

| Test ID | İlgili Req | Test Amacı | Ön Koşullar | Test Verileri | Beklenen Sonuç | Gerçek Sonuç (İlk Koşum) | Durum | Delil Ref. |
|---|---|---|---|---|---|---|---|---|
| **TC-11** | REQ-01, REQ-02 | Geçerli gözlem girişi ve anında güncelleme | `index.html` açık | Tarih: `2026-11-23`, Saat: `09:10`, Kat: `4`, Süre: `150`, Kişi: `7`, Tip: `OBSERVED` | Kayıt listeye ve `LocalStorage`'a eklenir, KPI güncellenir. | Mantık katmanında `obs-7` kaydı `index 0` konumuna eklendi; toplam kayıt `7` oldu. | **PASS** | `EXEC-W07-11` |
| **TC-12** | REQ-01 | Negatif, boş, kesirli ve geçersiz sayısal girdiler | Form görünür | Süre: `-5`, `""`, `12.5`; Kişi: `-2`, `3.4`; Kat: `2.5` | Tüm geçersiz/kesirli girdiler reddedilir. | `-5`, `""`, `-2`, `3.4`, `2.5` reddedildi; `12.5` kesirli süresi kabul edildi (`BUG-02`). | **FAIL → FIXED** | `BUG-02` |
| **TC-13** | REQ-01 | Kat sınır değerleri (`0–15` yetkili aralık) | Form görünür | Kat: `-1`, `0`, `13`, `14`, `15`, `16` | `0–15` kabul edilir; `-1` ve `16` reddedilir. | İlk koşumda `14` ve `15` katları `floor > 13` kuralı nedeniyle reddedildi (`BUG-01`). | **FAIL → FIXED** | `BUG-01` |
| **TC-14** | REQ-01 | Yenileme sonrası `LocalStorage` kalıcılığı | `TC-11` kaydı ekli | `campus_ops_5206_observations_v1` | Sayfa yenilendikten sonra `OBSERVED` kaydı korunur. | Yeniden okuma sonucunda `7` kayıt ve `obs-7` doğrulandı. | **PASS** | `EXEC-W07-14` |
| **TC-15** | REQ-03 | Birleşik tarih, kat, saat ve kaynak filtreleri | `DEMO` + `OBSERVED` kayıtlar var | `DEMO` + `2026-11-10` + `0. Kat` + `08:30–09:00` | Yalnızca tüm koşulları sağlayan `demo-1` listelenir. | Filtreleme sonucunda yalnızca `demo-1` (`1` kayıt) döndü. | **PASS** | `EXEC-W07-15` |
| **TC-16** | REQ-03 | Tüm aktif filtreleri sıfırlama | `TC-15` filtreleri aktif | "Filtreleri Temizle" butonu | Tüm filtreler sıfırlanır, `7` kayıt geri gelir. | Filtre sıfırlama sonrası `7` kaydın tamamı döndü. | **PASS** | `EXEC-W07-16` |
| **TC-17** | REQ-04 | Kesin ortalama, min, maks hesaplaması | 3 kontrollü kayıt | Süreler: `120`, `180`, `300` sn | Ort: `200 sn`, Min: `120 sn`, Maks: `300 sn`, Sayı: `3`. | `count: 3, avgWait: 200, minWait: 120, maxWait: 300` üretildi. | **PASS** | `EXEC-W07-17` |
| **TC-18** | REQ-04 | Boş veri seti ve sıfıra bölme koruması | `0` kayıt mevcut | `[]` boş dizi | `NaN` veya `Infinity` oluşmaz, tüm değerler `0` döner. | Tüm metrikler güvenli biçimde `0` döndü. | **PASS** | `EXEC-W07-18` |
| **TC-19** | REQ-05 | Kat 0, Kat 2 ve diğer kat karşılaştırması | 6 `DEMO` kaydı yüklü | Kat 0: `420, 310`; Kat 2: `390, 260`; Diğer: `110, 95` | Kat 0: `365 sn`, Kat 2: `325 sn`, Diğer: `102.5 sn`. | `floor0: 365, floor2: 325, others: 102.5` hesaplandı. | **PASS** | `EXEC-W07-19` |
| **TC-20** | REQ-05 | `n < 5` örneklem boyutu uyarısı | Kat 2 için `4` ve `5` kayıt | `n = 4` vs. `n = 5` | `n = 4` iken `isReliable: false`, `n = 5` iken `true`. | `n=4 -> false`, `n=5 -> true` olarak doğrulandı. | **PASS** | `EXEC-W07-20` |
| **TC-21** | REQ-06 | Ekleme, filtreleme ve silme sonrası grafik tutarlılığı | 10+ kat verisi | Canvas (`520x260`) | Grafikler güncellenir, çubuk etiketleri çakışmaz. | 8'den fazla çubukta etiket çakışması tespit edildi (`BUG-03`); tarayıcı görsel doğrulaması bekleniyor. | **NOT RUN** | `BUG-03` |
| **TC-22** | REQ-07 | Tekil gözlem silme ve güncelleme | En az 2 kayıt var | `deleteObservation("demo-3")` | Kayıt silinir, toplam kayıt `1` azalır. | Toplam kayıt `7`'den `6`'ya düştü. | **PASS** | `EXEC-W07-22` |
| **TC-23** | REQ-07, REQ-08 | `OBSERVED` kayıtları silmeden `DEMO` temizleme | `6 DEMO` + `1 OBSERVED` | `clearDemoObservations()` | `6 DEMO` silinir, `1 OBSERVED` korunur. | Yalnızca `1 OBSERVED` kaydı kaldı. | **PASS** | `EXEC-W07-23` |
| **TC-24** | REQ-08 | Kopya üretmeden tekrarlı DEMO yükleme | `6 DEMO` yüklü | `restoreDemoObservations()` × 2 | Kopya oluşmaz, toplam DEMO `6` kalır. | `existingIds` kontrolü kopyaları engelledi, DEMO sayısı `6` kaldı. | **PASS** | `EXEC-W07-24` |
| **TC-25** | REQ-08 | Tablo, grafik ve KPI'larda `DEMO`/`OBSERVED` ayrımı | Karma veri seti | Görsel arayüz rozetleri ve uyarı banner'ı | `DEMO` ve `OBSERVED` görsel olarak ayrışır. | Veri sayacı doğrulandı; tarayıcı arayüz ekran görüntüsü bekleniyor. | **NOT RUN** | `EXEC-W07-25` |
