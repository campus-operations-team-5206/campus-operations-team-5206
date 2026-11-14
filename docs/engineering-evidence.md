# Engineering Evidence Report — Iteration 1 (MVP)

**Project:** Campus Operations — Elevator Congestion Analytics MVP  
**Course:** Yazılım Geliştirme Süreçleri  
**Team:** Team 5206 (Halil Erdem Gül, Abdurrahman Furkan Şıkoğlu)  
**Repository:** https://github.com/campus-operations-team-5206/campus-operations-team-5206

---

## 1. MVP Kapsamı ve Mühendislik Yaklaşımı

Bu yinelemede (Iteration 1), Esenyurt Üniversitesi'nin 13 katlı kampüs binasındaki (2 tek kat asansörü, 2 çift kat asansörü) asansör yoğunluğunu ölçmek ve temel istatistiksel analizleri gerçekleştirmek amacıyla istemci taraflı (client-side) bir web uygulaması geliştirilmiştir.

**Temel Mühendislik Akışı:**  
`Observation → Data Collection → Analysis → Verification → Engineering Decision`

- **Kapsam İçi:** Gözlem kaydı ekleme, girdi doğrulama, `DEMO` / `OBSERVED` kaynak ayrımı, tarih/kat/saat filtreleme, ortalama/min/maks bekleme süresi hesaplama, 0. ve 2. kat karşılaştırması ve bağımlılıksız HTML5 Canvas grafikleri.
- **Kapsam Dışı:** Asansör donanım kontrolü, sensör entegrasyonu, makine öğrenmesi tahminleri ve harici sunucu/veritabanı sistemleri.

---

## 2. Gereksinimler ve Uygulama İzlenebilirliği (Traceability Matrix)

| Gereksinim ID | Tanım | Uygulama Modülü | Doğrulama Testi |
|---|---|---|---|
| **REQ-01** | Gözlem kaydı oluşturma ve girdi doğrulama | `index.html`, `js/app.js`, `js/storage.js` | TC-01, TC-02, TC-03, TC-04 |
| **REQ-02** | Gözlem kayıtlarını tablo hâlinde listeleme | `index.html`, `js/app.js` | TC-01 |
| **REQ-03** | Tarih, kat ve saat aralığına göre filtreleme | `js/app.js` (`getFilteredRecords`) | TC-05, TC-06 |
| **REQ-04** | Ortalama, min, maks bekleme süresi ve sıfıra bölme koruması | `js/analytics.js` (`calculateSummaryStats`) | TC-07, TC-08 |
| **REQ-05** | Kat bazlı yoğunluk ve 0. & 2. kat karşılaştırması | `js/analytics.js` (`calculateFloorAnalytics`) | TC-05, TC-08 |
| **REQ-06** | Dinamik veri görselleştirme (Kat ve Saat grafikleri) | `js/charts.js` (`ChartRenderer.drawBarChart`) | TC-08, TC-10 |
| **REQ-07** | Demo veya hatalı gözlem kayıtlarını silme | `js/storage.js`, `js/app.js` | TC-10 |
| **REQ-08** | `DEMO` ve `OBSERVED` verilerinin ayrıştırılması | `js/storage.js`, `js/app.js` (`renderSourceHeader`) | TC-09 |

---

## 3. Veri Kaynağı ve Güvenilirlik Sınırlamaları

- **Demo Verisi ≠ Doğrulanmış Saha Kanıtı:** Uygulama ilk açıldığında kullanıcıya arayüzü göstermek amacıyla `DEMO` etiketli örnek simülasyon verileri yüklenir. Bu veriler gerçek ölçümleri temsil etmez ve arayüzün üst kısmında uyarı mesajıyla belirtilir.
- **Örneklem Büyüklüğü Sınırı (`n < 5`):** Bir kat veya saat aralığı için toplanan gözlem sayısı 5'in altındaysa sistem bu sonucu *"Sınırlı Güvenilirlik"* olarak işaretler. Az sayıda gözleme dayanarak kesin mühendislik kararı alınamaz.
- **Tarayıcı Depolama Sınırı:** Veriler `LocalStorage` üzerinde tutulmaktadır; farklı cihazlar arası merkezi veri birleştirme henüz mevcut değildir.

---

## 4. Gerçekleştirilmiş Testler

Tüm fonksiyonel ve sınır durum (edge-case) testleri `docs/test-cases.md` dosyasında 10 ayrı senaryo (`TC-01` – `TC-10`) olarak tanımlanmıştır. Test sonuçları takım üyelerinin tarayıcı doğrulaması sonrasında `docs/test-cases.md` üzerinde kayıt altına alınmaktadır.

---

## 5. Henüz Doğrulanmamış Varsayımlar (Unverified Assumptions)

Önceki dokümanlarda (`docs/problem-statement-v0.md`, `FEEDBACK_w01.md`) tanımlanan aşağıdaki hipotezler **henüz doğrulanmamış** durumdadır ve yeterli `OBSERVED` saha verisi toplanana kadar kanıtlanmış kabul edilmemektedir:

| Varsayım | Mevcut Durum | Doğrulama İçin Gereken Kanıt |
|---|---|---|
| **1. 0. ve 2. katlar diğer katlara göre daha yoğundur.** | **DOĞRULANMADI (Varsayım)** | Farklı gün ve saatlerde 0, 2 ve diğer katlardan alınmış en az `n ≥ 5` karşılaştırılabilir `OBSERVED` kaydı. |
| **2. Ders başlangıç saatleri yoğunluğu belirgin biçimde artırır.** | **DOĞRULANMADI (Varsayım)** | Ders başlangıç dakikaları (ör. `:50–:05`) ile ara saatlerin `OBSERVED` bekleme süresi karşılaştırması. |
| **3. Ortalama bekleme süresi belirli dönemlerde 7–8 dakikaya (420–480 sn) ulaşır.** | **DOĞRULANMADI (Ön Gözlem)** | Sistematik kronometre ölçümleriyle kaydedilmiş çok günlük saha veri seti. |

---

## 6. Yapay Zekâ Kullanım Kayıtları (AI Usage Log)

- **Kullanılan AI Araçları:** Gemini, ChatGPT, Claude
- **AI Rolü:** Gereksinim taslağı oluşturma, modüler JavaScript mimarisi önerisi, test senaryosu yapılandırma ve dokümantasyon düzenleme.
- **İnsan İncelemesi ve Mühendislik Kararları:**
  - AI tarafından önerilen harici grafik kütüphaneleri (Chart.js vb.) yerine, sıfır bağımlılık ve kod okunabilirliği sağlamak amacıyla takım kararıyla saf HTML5 Canvas (`js/charts.js`) tercih edildi.
  - Kampüs binasının 13 katlı fiziksel yapısı ve 2 tek / 2 çift kat asansör kuralı (`README.md`) doğrudan takım tarafından doğrulama ve analiz mantığına eklendi.
  - AI tarafından üretilen başlangıç verilerinin kesin kanıt sanılmaması için `sourceType: "DEMO" | "OBSERVED"` ayrımı ve üst uyarı şeridi zorunlu kılındı.

---

## 7. Gelecek Geliştirme İhtiyaçları (Iteration 2 Backlog)

1. Sahada gerçek `OBSERVED` verilerinin toplanıp JSON/CSV formatında dışa/içe aktarılabilmesi (takım üyelerinin verilerini birleştirmesi için).
2. Tek kat asansörleri ile çift kat asansörlerinin yoğunluk performansını karşılaştıran ek analiz görünümü.
3. GitHub Issues ve Kanban panosu üzerinden saha ölçüm görevlerinin takibi.
