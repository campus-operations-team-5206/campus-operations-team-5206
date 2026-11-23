# Regression Testing Report — Week 07

**Project:** Campus Operations — Elevator Congestion Analytics MVP  
**Team:** Team 5206 (Halil Erdem Gül, Abdurrahman Furkan Şıkoğlu)  
**Principle:** Bug Fixed ≠ Bug Verified  

---

## 1. Değişiklik Etki Analizi (Impact Analysis)

Uygulanan 3 düzeltmenin (`BUG-01`, `BUG-02`, `BUG-03`) mevcut çalışan modüller üzerindeki etki alanı:
- `index.html` ve `js/app.js` kat sınırı (`13 → 15`) değişikliği: Gözlem girişi, girdi doğrulama, kat filtresi ve kat karşılaştırma görünümünü etkiler.
- `js/app.js` tam sayı süre kontrolü: Gözlem girişi ve form hata mesajlarını etkiler.
- `js/charts.js` etiket kısaltması: Kat ve saat çubuk grafiklerinin çizimini etkiler.

---

## 2. Regresyon Kontrol Listesi

| Regresyon Alanı | İlgili Testler | Etki Durumu | Mantık Doğrulama Sonucu | Tarayıcı Sonucu |
|---|---|---|---|---|
| **1. Gözlem Girişi (`REQ-01`)** | `TC-01`, `TC-11` | Değişiklikten etkilendi | **PASS** (`0–15` tam sayılar ekleniyor) | `NOT RUN` |
| **2. Girdi Doğrulaması (`REQ-01`)** | `TC-02..04`, `TC-12`, `TC-13` | Hedeflenen düzeltme | **PASS** (`12.5` ve `16` reddedildi; `14`, `15` kabul edildi) | `NOT RUN` |
| **3. LocalStorage Kalıcılığı (`REQ-01`)** | `TC-01`, `TC-14` | Etkilenmedi | **PASS** (Veri şeması korundu) | `NOT RUN` |
| **4. Filtreleme (`REQ-03`)** | `TC-05`, `TC-06`, `TC-15`, `TC-16` | Kat listesi `0–15` güncellendi | **PASS** (14 ve 15. katlar filtrelenebiliyor) | `NOT RUN` |
| **5. KPI Hesaplamaları (`REQ-04`)** | `TC-07`, `TC-08`, `TC-17`, `TC-18` | Etkilenmedi | **PASS** (Ortalama, min, maks ve `0` koruması sağlam) | `NOT RUN` |
| **6. Kat Analitiği (`REQ-05`)** | `TC-05`, `TC-19`, `TC-20` | Etkilenmedi | **PASS** (`n < 5` uyarısı ve `0/2` kat karşılaştırması sağlam) | `NOT RUN` |
| **7. Tuval Grafikleri (`REQ-06`)** | `TC-08`, `TC-10`, `TC-21` | Hedeflenen düzeltme | **PASS** (`items.length <= 8` eski formatı korudu) | `NOT RUN` |
| **8. Kayıt Silme (`REQ-07`)** | `TC-10`, `TC-22`, `TC-23` | Etkilenmedi | **PASS** (Tekil ve toplu DEMO silme sağlam) | `NOT RUN` |
| **9. DEMO / OBSERVED Bütünlüğü (`REQ-08`)** | `TC-09`, `TC-24`, `TC-25` | Etkilenmedi | **PASS** (Tekrarlı yükleme kopya üretmiyor) | `NOT RUN` |
