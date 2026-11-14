# Campus Operations — Elevator Congestion Analytics MVP (Team 5206)

**Course:** Yazılım Geliştirme Süreçleri  
**Team Members:** Halil Erdem Gül, Abdurrahman Furkan Şıkoğlu  
**Process Model:** Iterative Development + Kanban (WIP Limit: 2)

---

## Problem Tanımı ve Mühendislik Yaklaşımı

Esenyurt Üniversitesi'nin **15 katlı kampüs binasında** 4 asansör bulunmaktadır: **2 tanesi tek katlara**, **2 tanesi çift katlara** hizmet vermektedir. Ön gözlemlerde özellikle sabah saatlerinde, ders başlangıçlarında ve 0. ile 2. katlarda yoğun kuyruklar oluştuğu görülmüştür.

Ancak bu aşamada yoğunluğun temel nedeni kesin olarak kanıtlanmamıştır. Bu MVP, erken çözüm üretmek yerine veriye dayalı analiz yapmayı hedefler:

> **Observation → Data Collection → Analysis → Verification → Engineering Decision**  
> **Demo Verisi ≠ Doğrulanmış Saha Kanıtı**

---

## Proje Dosya Yapısı

```text
campus-operations-team-5206/
├── index.html                          # Ana web dashboard arayüzü
├── css/
│   └── style.css                       # Uygulama stilleri
├── js/
│   ├── storage.js                      # LocalStorage yönetimi ve DEMO/OBSERVED ayrımı
│   ├── analytics.js                    # İstatistik hesaplamaları ve kat karşılaştırma mantığı
│   ├── charts.js                       # Bağımlılıksız HTML5 Canvas grafik çizim modülü
│   └── app.js                          # Form doğrulama, filtreleme ve DOM yönetimi
├── docs/
│   ├── problem-statement-v0.md         # İlk problem analizi ve varsayımlar
│   ├── software-development-process.md # Iterative + Kanban süreç seçimi
│   ├── mvp-requirements.md             # Iteration 1 gereksinimleri ve kabul kriterleri (REQ-01..08)
│   ├── test-cases.md                   # 10 fonksiyonel ve sınır durum test senaryosu
│   └── engineering-evidence.md         # İzlenebilirlik, varsayımlar ve mühendislik kanıtları
└── evidence/
    ├── ai-human-evidence.md            # AI önerileri ve insan değerlendirme kararları
    └── incident-diagnosis.md           # Süreç kopma noktaları analizi
