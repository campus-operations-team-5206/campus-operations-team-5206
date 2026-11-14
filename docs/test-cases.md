# MVP Test Cases & Verification Log — Iteration 1

**Project:** Campus Operations — Elevator Congestion Analytics MVP  
**Team:** Team 5206 (Halil Erdem Gül, Abdurrahman Furkan Şıkoğlu)  
**Test Environment:** Yerel Tarayıcı (HTML5 / CSS3 / Vanilla JS / LocalStorage)  
**Doğrulama Kuralı:** Yalnızca geliştirici/takım üyesi tarafından tarayıcıda fiilen çalıştırılıp doğrulanan testler `PASS` olarak işaretlenir.

---

## Test Senaryoları

### TC-01: Geçerli Gözlem Kaydı Ekleme
- **Test ID:** TC-01
- **Requirement ID:** REQ-01, REQ-02
- **Preconditions:** `index.html` tarayıcıda açık ve gözlem giriş formu görünür durumda.
- **Test Steps:**
  1. Tarih alanına `2026-11-14`, saat alanına `09:05` girin.
  2. Kat numarasına `2`, bekleme süresine `240` (sn), kişi sayısına `10` girin.
  3. Veri kaynağı olarak `OBSERVED` seçin ve açıklamaya `"Test saha gözlemi"` yazın.
  4. "Kaydı Ekle" butonuna tıklayın.
- **Expected Result:** Kayıt `LocalStorage` üzerine kaydedilir, sayfa yenilenmeden gözlem tablosunun en üstünde `OBSERVED` etiketiyle görünür ve KPI kartları güncellenir.
- **Actual Result:** *(Tarayıcıda çalıştırıldıktan sonra takım üyesi tarafından doldurulacak)*
- **Status:** PENDING

### TC-02: Negatif Bekleme Süresinin Reddedilmesi
- **Test ID:** TC-02
- **Requirement ID:** REQ-01
- **Preconditions:** `index.html` tarayıcıda açık.
- **Test Steps:**
  1. Geçerli tarih, saat ve kat (`0`) girin.
  2. Bekleme süresi alanına `-15` girin.
  3. Bekleyen kişi sayısına `5` girip "Kaydı Ekle" butonuna tıklayın.
- **Expected Result:** Sistem kaydı reddeder, tabloya ekleme yapmaz ve form altında negatif bekleme süresinin geçersiz olduğunu belirten hata mesajı gösterir.
- **Actual Result:** *(Tarayıcıda çalıştırıldıktan sonra takım üyesi tarafından doldurulacak)*
- **Status:** PENDING

### TC-03: Negatif Bekleyen Kişi Sayısının Reddedilmesi
- **Test ID:** TC-03
- **Requirement ID:** REQ-01
- **Preconditions:** `index.html` tarayıcıda açık.
- **Test Steps:**
  1. Geçerli tarih, saat, kat (`4`) ve bekleme süresi (`120`) girin.
  2. Bekleyen kişi sayısı alanına `-3` girip "Kaydı Ekle" butonuna tıklayın.
- **Expected Result:** Sistem kaydı reddeder ve kişi sayısının negatif olamayacağına dair hata mesajı görüntüler.
- **Actual Result:** *(Tarayıcıda çalıştırıldıktan sonra takım üyesi tarafından doldurulacak)*
- **Status:** PENDING

### TC-04: Geçersiz Kat Numarasının Reddedilmesi
- **Test ID:** TC-04
- **Requirement ID:** REQ-01
- **Preconditions:** `index.html` tarayıcıda açık (Kampüs binası 0–13 katlıdır).
- **Test Steps:**
  1. Kat numarası alanına `15` (veya `-1`) girin.
  2. Diğer alanları geçerli değerlerle doldurup "Kaydı Ekle" butonuna tıklayın.
- **Expected Result:** Sistem bina sınırları dışındaki kat numarasını reddeder ve `0` ile `13` arasında tam sayı girilmesi gerektiğini belirten uyarı verir.
- **Actual Result:** *(Tarayıcıda çalıştırıldıktan sonra takım üyesi tarafından doldurulacak)*
- **Status:** PENDING

### TC-05: Kat Bazlı Filtreleme
- **Test ID:** TC-05
- **Requirement ID:** REQ-03
- **Preconditions:** Sistemde farklı katlara (ör. `0`, `2`, `5`, `8`) ait kayıtlar mevcut.
- **Test Steps:**
  1. Gözlem kayıtları tablosunun üstündeki "Kat" filtresinden `2. Kat (Çift)` seçeneğini seçin.
- **Expected Result:** Tabloda, KPI özet kartlarında ve grafiklerde yalnızca `2. Kat` kayıtları listelenir; diğer katlara ait satırlar gizlenir.
- **Actual Result:** *(Tarayıcıda çalıştırıldıktan sonra takım üyesi tarafından doldurulacak)*
- **Status:** PENDING

### TC-06: Saat Aralığına Göre Filtreleme
- **Test ID:** TC-06
- **Requirement ID:** REQ-03
- **Preconditions:** Sistemde farklı saatlere (ör. `08:50`, `10:15`, `15:20`) ait kayıtlar mevcut.
- **Test Steps:**
  1. "Saat Başlangıç" filtresine `08:30`, "Saat Bitiş" filtresine `09:30` girin.
- **Expected Result:** Tabloda yalnızca `08:30` ile `09:30` arasındaki gözlem kayıtları görüntülenir.
- **Actual Result:** *(Tarayıcıda çalıştırıldıktan sonra takım üyesi tarafından doldurulacak)*
- **Status:** PENDING

### TC-07: Ortalama, Minimum ve Maksimum Bekleme Süresi Hesaplaması
- **Test ID:** TC-07
- **Requirement ID:** REQ-04
- **Preconditions:** Mevcut kayıtlar temizlenmiş veya filtrelenmiş; yalnızca bekleme süreleri `100 sn`, `200 sn` ve `300 sn` olan 3 kayıt aktif.
- **Test Steps:**
  1. Bekleme Süresi Özeti (KPI) kartlarını kontrol edin.
- **Expected Result:** Toplam Gözlem `3`, Ortalama Bekleme `200 sn (3.3 dk)`, Minimum Bekleme `100 sn`, Maksimum Bekleme `300 sn` olarak doğru hesaplanır.
- **Actual Result:** *(Tarayıcıda çalıştırıldıktan sonra takım üyesi tarafından doldurulacak)*
- **Status:** PENDING

### TC-08: Boş Veri Kümesinde Sıfıra Bölme Koruması
- **Test ID:** TC-08
- **Requirement ID:** REQ-04, REQ-06
- **Preconditions:** "Tüm DEMO Kayıtlarını Sil" butonuna basılmış ve sistemde hiç kayıt (`0` kayıt) kalmamış.
- **Test Steps:**
  1. KPI kartlarını, kat karşılaştırma tablosunu ve grafik alanlarını kontrol edin.
- **Expected Result:** Uygulama çökmez; `NaN`, `Infinity` veya konsol hatası üretmez. Ortalama/Min/Max değerleri `0 sn` gösterir ve grafik alanında `"Grafik oluşturmak için yeterli gözlem verisi yok."` mesajı görünür.
- **Actual Result:** *(Tarayıcıda çalıştırıldıktan sonra takım üyesi tarafından doldurulacak)*
- **Status:** PENDING

### TC-09: Demo Verisinin Gerçek Gözlem Olarak Gösterilmemesi
- **Test ID:** TC-09
- **Requirement ID:** REQ-08
- **Preconditions:** Sistemde `DEMO` etiketli örnek kayıtlar mevcut.
- **Test Steps:**
  1. Sayfanın üst kısmındaki "Veri Kaynağı Durumu" kutusunu ve grafik üstü açıklama metnini inceleyin.
  2. Filtrelerden "Veri Kaynağı" seçeneğini `Sadece OBSERVED (Gerçek)` yapın.
- **Expected Result:** Üst bilgi kutusunda demo verilerinin doğrulanan saha kanıtı olmadığı açıkça yazar; `Sadece OBSERVED` filtresi seçildiğinde `DEMO` kayıtları analiz ve tablodan tamamen dışlanır.
- **Actual Result:** *(Tarayıcıda çalıştırıldıktan sonra takım üyesi tarafından doldurulacak)*
- **Status:** PENDING

### TC-10: Kayıt Silindikten Sonra Grafiklerin ve İstatistiklerin Güncellenmesi
- **Test ID:** TC-10
- **Requirement ID:** REQ-06, REQ-07
- **Preconditions:** Tabloda en az 2 farklı kata ait kayıt listeleniyor ve grafikler çizilmiş durumda.
- **Test Steps:**
  1. Tablodaki herhangi bir satırın sağındaki "Sil" butonuna tıklayın.
- **Expected Result:** İlgili kayıt tablodan ve `LocalStorage`'dan silinir; KPI metrikleri, kat karşılaştırma kartları ve her iki grafik (`n` örneklem sayısı dahil) sayfa yenilenmeden anında güncellenir.
- **Actual Result:** *(Tarayıcıda çalıştırıldıktan sonra takım üyesi tarafından doldurulacak)*
- **Status:** PENDING
