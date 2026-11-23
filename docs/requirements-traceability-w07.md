# Requirements Traceability Matrix — Week 07

**Project:** Campus Operations — Elevator Congestion Analytics MVP  
**Team:** Team 5206 (Halil Erdem Gül, Abdurrahman Furkan Şıkoğlu)  

| Gereksinim ID | Gereksinim Özeti | Uygulama Modülleri | Test Vakaları | Hata Kaydı | Doğrulama Durumu |
|---|---|---|---|---|---|
| **REQ-01** | Gözlem kaydı oluşturma, girdi doğrulama (`0–15` kat) ve `LocalStorage` kalıcılığı | `index.html`, `js/app.js` (`validateInput`), `js/storage.js` | `TC-01`..`TC-04`, `TC-11`..`TC-14` | `BUG-01`, `BUG-02` | **VERIFIED (Logic) / Browser Re-test Pending** |
| **REQ-02** | Gözlem kayıtlarını tablo hâlinde anlık listeleme | `index.html`, `js/app.js` (`renderObservationsTable`) | `TC-01`, `TC-11` | — | **VERIFIED (Logic) / Browser Re-test Pending** |
| **REQ-03** | Tarih, kat ve saat aralığına göre birleşik filtreleme ve sıfırlama | `index.html`, `js/app.js` (`getFilteredRecords`) | `TC-05`, `TC-06`, `TC-15`, `TC-16` | — | **VERIFIED** |
| **REQ-04** | Ortalama, min, maks bekleme süresi hesaplama ve sıfıra bölme koruması | `js/analytics.js` (`calculateSummaryStats`) | `TC-07`, `TC-08`, `TC-17`, `TC-18` | — | **VERIFIED** |
| **REQ-05** | Kat bazlı yoğunluk, `0.` & `2.` kat karşılaştırması ve `n < 5` uyarısı | `js/analytics.js` (`calculateFloorAnalytics`), `js/app.js` | `TC-05`, `TC-08`, `TC-19`, `TC-20` | — | **VERIFIED** |
| **REQ-06** | Dinamik HTML5 Canvas grafikleri (Kat ve Saat dağılımı) | `js/charts.js` (`ChartRenderer.drawBarChart`) | `TC-08`, `TC-10`, `TC-21` | `BUG-03` | **FIXED — Browser Re-test Pending** |
| **REQ-07** | Tekil hatalı kayıtları ve toplu DEMO kayıtlarını silme | `js/storage.js`, `js/app.js` | `TC-10`, `TC-22`, `TC-23` | — | **VERIFIED** |
| **REQ-08** | `DEMO` ve `OBSERVED` verilerinin ayrıştırılması ve kopyasız DEMO yükleme | `js/storage.js`, `js/app.js` (`renderSourceHeader`) | `TC-09`, `TC-23`, `TC-24`, `TC-25` | — | **VERIFIED (Logic) / Browser Re-test Pending** |
