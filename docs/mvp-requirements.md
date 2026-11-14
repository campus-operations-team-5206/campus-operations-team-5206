# MVP Requirements & Acceptance Criteria — Iteration 1

**Project:** Campus Operations — Elevator Congestion Analytics MVP  
**Team:** Team 5206 (Halil Erdem Gül, Abdurrahman Furkan Şıkoğlu)  
**Development Approach:** Iterative Development + Kanban (WIP Limit: 2)  
**Iteration 1 Goal:** Gözlem verilerinin sistematik olarak kaydedilmesi ve temel analizlerin gerçekleştirilmesi.

---

## 1. Kapsam ve Temel Mühendislik İlkeleri

Bu MVP, Esenyurt Üniversitesi'nin 13 katlı kampüs binasındaki (2 tek kat, 2 çift kat asansörü) asansör bekleme sürelerini ve kat bazlı yoğunluk verilerini toplamak ve analiz etmek amacıyla geliştirilmiştir.

- **Observation ≠ Verified Evidence:** Uygulamadaki ön gözlemler ve demo verileri kesin saha kanıtı olarak sunulmaz.
- **Kapsam Dışı (Out of Scope):** Fiziksel asansör kontrolü, gerçek zamanlı sensör entegrasyonu, makine öğrenmesi tahminleri ve harici backend sunucuları bu yinelemenin kapsamı dışındadır.

---

## 2. Fonksiyonel Gereksinimler ve Kabul Kriterleri

### REQ-01: Gözlem Kaydı Oluşturma (Observation Entry)
**Tanım:** Kullanıcı tarih, saat, kat numarası, bekleme süresi (saniye), bekleyen kişi sayısı ve isteğe bağlı açıklama bilgilerini girerek yeni bir gözlem kaydı oluşturabilmelidir.
- **Kabul Kriteri 1.1:** Form; tarih, saat, kat numarası (`0`–`15` arası tam sayı), bekleme süresi (saniye, `>= 0`), bekleyen kişi sayısı (`>= 0`) ve veri kaynağı (`OBSERVED` veya `DEMO`) alanlarını içermelidir.
- **Kabul Kriteri 1.2:** Bekleme süresi veya bekleyen kişi sayısı negatif girildiğinde sistem kaydı reddetmeli ve anlaşılır bir hata mesajı göstermelidir.
- **Kabul Kriteri 1.3:** Kampüs bina sınırları dışındaki geçersiz kat numaraları (ör. `< 0` veya `> 15` ya da boş değer) reddedilmelidir.
- **Kabul Kriteri 1.4:** Geçerli bir kayıt eklendiğinde veri `LocalStorage` üzerine kaydedilmeli ve sayfa yenilense dahi korunmalıdır.

### REQ-02: Gözlem Kayıtlarını Listeleme (Observation List)
**Tanım:** Kaydedilen tüm gözlemler yapılandırılmış bir tablo hâlinde kullanıcıya gösterilmelidir.
- **Kabul Kriteri 2.1:** Tablo; Tarih, Saat, Kat (ve ilgili asansör grubu: Tek/Çift), Bekleme Süresi (sn), Bekleyen Kişi Sayısı, Veri Kaynağı (`DEMO` / `OBSERVED`) ve Açıklama sütunlarını göstermelidir.
- **Kabul Kriteri 2.2:** Yeni eklenen her kayıt sayfa yenilenmesine gerek kalmadan tabloda anında görünmelidir.

### REQ-03: Gözlemleri Kat ve Saate Göre Filtreleme
**Tanım:** Kullanıcı kayıtlı gözlemleri tarihe, kat numarasına ve saat aralığına göre filtreleyebilmelidir.
- **Kabul Kriteri 3.1:** Kullanıcı belirli bir katı seçtiğinde tabloda yalnızca o kata ait kayıtlar listelenmelidir.
- **Kabul Kriteri 3.2:** Kullanıcı belirli bir tarih veya saat aralığı (başlangıç–bitiş saati) seçtiğinde yalnızca ilgili zaman dilimindeki kayıtlar görüntülenmelidir.
- **Kabul Kriteri 3.3:** "Filtreleri Temizle" seçeneği ile tüm kayıtlar tek tıkla geri getirilebilmelidir.

### REQ-04: Bekleme Süresi İstatistiklerinin Hesaplanması
**Tanım:** Sistem kayıtlı veriler üzerinden ortalama, minimum, maksimum bekleme süresini ve toplam gözlem sayısını hesaplamalıdır.
- **Kabul Kriteri 4.1:** En az 1 kayıt varken sistem ortalama bekleme süresini (saniye ve dakika karşılığıyla), en düşük (min) süreyi, en yüksek (max) süreyi ve toplam kayıt adedini doğru hesaplamalıdır.
- **Kabul Kriteri 4.2:** Kayıt listesi tamamen boş olduğunda (`0` kayıt) sistem sıfıra bölme (`NaN` veya `Infinity`) hatası üretmemeli, tüm metrikleri güvenli biçimde `0` veya `"Veri yok"` olarak göstermelidir.

### REQ-05: Kat Bazlı Yoğunluk ve Karşılaştırma Analizi
**Tanım:** Sistem her kat için gözlem sayısı, ortalama bekleme süresi ve ortalama bekleyen kişi sayısını hesaplamalı; özellikle ön gözlemde öne çıkan 0. ve 2. katların diğer katlarla karşılaştırılmasına imkân tanımalıdır.
- **Kabul Kriteri 5.1:** Kat bazlı özet tablosunda her katın gözlem sayısı, ortalama bekleme süresi ve ortalama kişi sayısı ayrı ayrı gösterilmelidir.
- **Kabul Kriteri 5.2:** 0. ve 2. katların ortalamaları ile diğer katların genel ortalaması yan yana karşılaştırılabilmelidir.
- **Kabul Kriteri 5.3:** Gözlem sayısı düşük olan katlar için (ör. `< 5` gözlem) sistem *"Sınırlı veri – henüz doğrulanmış kanıt değildir"* uyarısını açıkça göstermelidir.

### REQ-06: Dinamik Veri Görselleştirme
**Tanım:** Sistem katlara göre ve saat aralığına göre ortalama bekleme sürelerini gösteren en az iki grafik üretmelidir.
- **Kabul Kriteri 6.1:** "Katlara Göre Ortalama Bekleme Süresi" ve "Saat Aralığına Göre Ortalama Bekleme Süresi" grafikleri harici ağır kütüphanelere bağımlı olmadan (HTML5 Canvas / SVG / CSS bar) tarayıcıda hatasız çizilmelidir.
- **Kabul Kriteri 6.2:** Her grafik üzerinde veya altında analizin kaç gözlem kaydına (`n = ...`) dayandığı açıkça belirtilmelidir.
- **Kabul Kriteri 6.3:** Veri eklendiğinde, filtrelendiğinde veya silindiğinde grafikler anında yeniden hesaplanıp güncellenmelidir.

### REQ-07: Demo veya Hatalı Gözlem Kayıtlarını Silme
**Tanım:** Kullanıcı yanlış girilen veya artık ihtiyaç duyulmayan demo/test kayıtlarını sistemden silebilmelidir.
- **Kabul Kriteri 7.1:** Her satırda yer alan "Sil" butonu tıklandığında ilgili kayıt `LocalStorage` üzerinden kaldırılmalıdır.
- **Kabul Kriteri 7.2:** Kayıt silindiğinde özet istatistikler, kat karşılaştırma tablosu ve grafikler anında güncellenmelidir.

### REQ-08: Demo ve Gerçek Gözlem Verilerinin Ayrıştırılması
**Tanım:** Sistem başlangıç/simülasyon verileri (`DEMO`) ile sahada gerçekten ölçülen gözlemleri (`OBSERVED`) kesin olarak ayırt etmelidir.
- **Kabul Kriteri 8.1:** Sayfanın üst kısmında mevcut veri setinin durumu (kaç adet `DEMO`, kaç adet `OBSERVED` kayıt olduğu ve *"Demo Verisi ≠ Doğrulanmış Saha Kanıtı"* uyarısı) sürekli görünür olmalıdır.
- **Kabul Kriteri 8.2:** Tabloda ve grafik bilgilendirmelerinde demo verilerinin varlığı görsel etiketlerle (badge) açıkça belirtilmelidir.
- **Kabul Kriteri 8.3:** Kullanıcı tek tıkla yalnızca gerçek gözlemleri (`OBSERVED`) görüntüleyebilmeli veya tüm demo verilerini temizleyebilmelidir.

---

## 3. Kanban İş Akışı ve Süreç Kuralları (Iteration 1)

- **İş Akışı:** `Backlog → To Do → In Progress → Review → Done`
- **WIP (Work in Progress) Limiti:** 2 kişilik takım için `In Progress` sütununda aynı anda en fazla **2 görev** bulunabilir.
- **Görev Takibi:** Her gereksinim (`REQ-01`..`REQ-08`) GitHub Issues üzerinde ayrı bir kart/görev olarak açılır ve peer review (diğer takım üyesinin incelemesi) tamamlanmadan `Done` sütununa taşınmaz.
