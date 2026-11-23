# Bug Tracking Log — Week 07

**Project:** Campus Operations — Elevator Congestion Analytics MVP  
**Team:** Team 5206 (Halil Erdem Gül, Abdurrahman Furkan Şıkoğlu)  

---

## 1. Doğrulanmış Kusurlar ve Gereksinim Tutarsızlıkları

### [BUG-01] Floor range validation rejects floors 14 and 15 despite 0-15 specification
- **İlgili Gereksinim:** `REQ-01`
- **İlgili Test Vakası:** `TC-13`
- **Tür:** Gereksinim Tutarsızlığı ve Sınır Değer Kusuru
- **Çevre:** Local Browser (`index.html`, `js/app.js`)
- **Ön Koşullar:** Yetkili bina spesifikasyonunun `0–15` kat aralığı olarak onaylanmış olması.
- **Çoğaltma Adımları:**
  1. `index.html` dosyasını tarayıcıda açın.
  2. Kat Numarası alanına `14` veya `15` girin.
  3. Diğer alanları geçerli değerlerle doldurup "Kaydı Ekle" butonuna basın.
- **Beklenen Sonuç:** `14` ve `15` numaralı katlar geçerli bina katı olarak kaydedilmelidir.
- **Gerçek Sonuç:** `index.html` (`max="13"`) ve `js/app.js` (`floor > 13` ve filtre döngüsü `f <= 13`) `14` ve `15` değerlerini reddetmektedir.
- **Şiddet:** Yüksek
- **Kök Neden:** İlk geliştirme yinelemesinde bina kat sayısının `13` varsayılması ve `docs/mvp-requirements.md` (`0–15`) ile senkronize edilmemesi.
- **Düzeltme ve Durum:** Öğrenci onayı ile `index.html` ve `js/app.js` üst sınırı `15` olarak güncellendi (`FIXED — Browser Re-test Pending`).

---

### [BUG-02] Decimal wait time values (e.g. 12.5) bypass integer input validation
- **İlgili Gereksinim:** `REQ-01`
- **İlgili Test Vakası:** `TC-12`
- **Tür:** Yazılım Kusuru (Input Validation Defect)
- **Çevre:** Local Browser (`js/app.js`)
- **Ön Koşullar:** Gözlem giriş formu açık.
- **Çoğaltma Adımları:**
  1. Bekleme Süresi (Saniye) alanına `12.5` girin.
  2. Diğer alanları geçerli doldurup "Kaydı Ekle" butonuna basın.
- **Beklenen Sonuç:** Saniye cinsinden tam sayı girişi beklenirken kesirli değer reddedilmeli ve hata uyarısı gösterilmelidir.
- **Gerçek Sonuç:** `js/app.js` içindeki `validateInput()` fonksiyonu `Number.isNaN(waitTime)` kontrolü kullandığı için `12.5` değerini geçerli saymaktadır.
- **Şiddet:** Orta
- **Kök Neden:** `floor` ve `peopleCount` alanlarında `Number.isInteger()` kullanılmasına rağmen `waitTime` alanında yalnızca `Number.isNaN()` kontrolü bırakılması.
- **Düzeltme ve Durum:** `!Number.isInteger(waitTime)` kontrolü eklendi (`FIXED — Browser Re-test Pending`).

---

### [BUG-03] Canvas bar chart top labels overlap when more than 8 bars are rendered
- **İlgili Gereksinim:** `REQ-06`
- **İlgili Test Vakası:** `TC-21`
- **Tür:** Görsel Arayüz Kusuru (UI Layout Defect)
- **Çevre:** Local Browser (`js/charts.js`, `520x260` Canvas)
- **Ön Koşullar:** 9 veya daha fazla farklı kata ait gözlem kaydı mevcut.
- **Çoğaltma Adımları:**
  1. `0` ile `15` arasındaki 10 farklı kata gözlem kaydı ekleyin.
  2. Bölüm 3'teki "Katlara Göre Ortalama Bekleme Süresi" grafiğini inceleyin.
- **Beklenen Sonuç:** Çubuk üzerindeki etiketler okunaklı kalmalı ve yan çubukların yazılarıyla çakışmamalıdır.
- **Gerçek Sonuç:** Dar sütun genişliğinde `${item.value}s (n=${item.count})` metinleri yatayda birbirinin üzerine binmektedir.
- **Şiddet:** Düşük
- **Kök Neden:** Sabit genişlikli (`520px`) tuvalde çubuk sayısına göre dinamik etiket kısaltması yapılmaması.
- **Düzeltme ve Durum:** `items.length > 8` durumunda çubuk üstü metin `${item.value}s` olarak kısaltıldı (`FIXED — Browser Re-test Pending`).
