# TEAM 5206 — CURSOR PROMPT 01
## Campus Operations: Elevator Congestion Analytics MVP

**Course:** Yazılım Geliştirme Süreçleri  
**Team:** Team 5206  
**Members:** Halil Erdem Gül, Abdurrahman Furkan Şıkoğlu  
**Repository:** https://github.com/campus-operations-team-5206/campus-operations-team-5206

### 1. Rolün ve temel hedef

Sen, ikinci sınıf Yazılım Geliştirme Süreçleri dersi kapsamında çalışan bir öğrenci takımına rehberlik eden deneyimli bir yazılım mühendisisin.

Amacın, Esenyurt Üniversitesi kampüsündeki asansör bekleme sürelerinin ve kat bazlı yoğunluğun analiz edilmesini destekleyen, küçük, çalışan ve test edilebilir bir MVP geliştirmektir.

Bu aşamada asansörlerin fiziksel kontrolünü gerçekleştiren veya bekleme süresini doğrudan azaltan bir sistem geliştirmeyeceğiz.

**Temel mühendislik yaklaşımı:**

Observation → Data Collection → Analysis → Verification → Engineering Decision

### 2. Repository analizi

Kod yazmadan önce şu dosyaları dikkatlice incele:

- `README.md`
- `docs/problem-statement-v0.md`
- `docs/software-development-process.md`
- `FEEDBACK_w01.md`
- `FEEDBACK_w04.md`
- `evidence/ai-human-evidence.md`
- `evidence/incident-diagnosis.md`

Mevcut mühendislik belgelerini ve Git geçmişini koru.

Özellikle önceki öğretim elemanı geri bildirimlerini dikkate al:

- Henüz doğrulanmayan bekleme sürelerini kesin sonuç gibi sunma.
- 0. ve 2. katlardaki yoğunluğu kanıtlanmış kabul etme.
- Kök neden doğrulanmadan çözüm seçme.
- Iterative Development ve Kanban yaklaşımını koru.
- Engineering Evidence ve Human Oversight ilkelerini uygula.

### 3. MVP kapsamı

Basit bir web tabanlı **Elevator Congestion Analytics Dashboard** oluştur.

İlk sürümde yalnızca gözlem kayıtları ve temel analizler yer alsın.

#### A. Observation Entry – Gözlem girişi

Kullanıcı aşağıdaki bilgileri girebilsin:

- Gözlem tarihi
- Gözlem saati
- Kat numarası
- Bekleme süresi (saniye)
- Bekleyen kişi sayısı
- İsteğe bağlı açıklama

Geçersiz değerler kontrol edilsin.

Bekleme süresi veya kişi sayısı negatif olamasın.

#### B. Observation List – Gözlem listesi

Girilen kayıtlar tablo hâlinde görüntülensin.

Kayıtlar:

- Tarihe
- Kata
- Saat aralığına

göre filtrelenebilsin.

Kullanıcı yanlış girilen bir demo kaydını silebilsin.

#### C. Waiting Time Analysis – Bekleme süresi analizi

Sistem, kayıtlı veriler üzerinden:

- Ortalama bekleme süresini
- Minimum bekleme süresini
- Maksimum bekleme süresini
- Toplam gözlem sayısını

hesaplasın.

Hiç gözlem bulunmadığında sıfırla bölme veya hatalı sonuç üretme.

#### D. Floor-Based Congestion – Kat bazlı yoğunluk

Her kat için:

- Gözlem sayısı
- Ortalama bekleme süresi
- Ortalama bekleyen kişi sayısı

hesaplansın.

Katlar arasında karşılaştırma yapılabilsin.

Özellikle 0. ve 2. katlarla diğer katların karşılaştırılmasına olanak sağla.

Ancak az sayıda gözleme dayanan sonuçların sınırlı güvenilirliğini belirt.

#### E. Data Visualization – Veri görselleştirme

En az iki temel grafik oluştur:

1. Katlara göre ortalama bekleme süresi
2. Saat aralığına göre ortalama bekleme süresi

Grafiklerin dayandığı gözlem sayısını da göster.

Grafiklerde örnek veriler kullanılıyorsa bunu açıkça belirt.

### 4. Veri yaklaşımı

İlk sürüm gerçek asansör kontrol sistemlerine bağlanmayacak.

Başlangıçta örnek/simülasyon verileri kullanılabilir.

Ancak örnek veriler ve öğrencilerin gerçekten topladığı gözlemler kesinlikle birbirinden ayrılmalıdır.

Her kayıt için `sourceType` alanı kullan:

- DEMO
- OBSERVED

Gerçek gözlem olarak işaretlenen bir kaydın gerçekten ölçülmüş olması gerekir.

Uygulamanın üst kısmında veri kaynağının durumunu açıkça göster.

**Demo Verisi ≠ Doğrulanmış Saha Kanıtı**

### 5. Teknoloji seçimi

İlk sürümde:

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage

kullan.

Grafikleri mümkünse sade ve bağımlılığı düşük yöntemlerle oluştur.

Gerçek zamanlı sensör bağlantıları, makine öğrenmesi modelleri, karmaşık backend servisleri ve bina otomasyon sistemleri entegrasyonu geliştirme.

Kod anlaşılır, modüler ve ikinci sınıf öğrencilerinin inceleyebileceği düzeyde olsun.

### 6. Requirements ve Acceptance Criteria

`docs/mvp-requirements.md` dosyasını oluştur.

Aşağıdaki gereksinimleri tanımla:

- REQ-01: Kullanıcı gözlem kaydı oluşturabilir.
- REQ-02: Kullanıcı kayıtları listeleyebilir.
- REQ-03: Kullanıcı gözlemleri kat ve saate göre filtreleyebilir.
- REQ-04: Sistem ortalama, minimum ve maksimum bekleme süresini hesaplar.
- REQ-05: Sistem kat bazlı karşılaştırma sunar.
- REQ-06: Sistem grafikleri kayıtlı verilerden üretir.
- REQ-07: Kullanıcı demo gözlem kayıtlarını silebilir.
- REQ-08: Sistem demo ve gerçek gözlem verilerini ayırt eder.

Her gereksinim için ölçülebilir kabul kriterleri hazırla.

### 7. Testing ve Verification

`docs/test-cases.md` dosyasında en az 10 test senaryosu oluştur.

Testler şunları kapsasın:

- Geçerli gözlem ekleme
- Negatif bekleme süresinin reddedilmesi
- Negatif kişi sayısının reddedilmesi
- Geçersiz kat numarasının reddedilmesi
- Kat filtreleme
- Saat filtreleme
- Ortalama bekleme süresi hesaplama
- Boş veri kümesinde güvenli davranış
- Demo verisinin gerçek gözlem olarak gösterilmemesi
- Kayıt silindikten sonra grafiklerin güncellenmesi

Her test senaryosunda şu alanları kullan:

Test ID, Requirement ID, Preconditions, Test Steps, Expected Result, Actual Result, Status.

Çalıştırılmayan testleri PASS olarak işaretleme.

### 8. Engineering Evidence

`docs/engineering-evidence.md` dosyasını oluştur.

Şu konuları belgele:

- MVP kapsamı
- Gereksinimler ve uygulama ilişkisi
- Veri kaynağı ve güvenilirlik sınırlamaları
- Gerçekleştirilmiş testler
- Henüz doğrulanmamış varsayımlar
- AI kullanım kayıtları
- İnsan tarafından alınan mühendislik kararları
- Gelecek geliştirme ihtiyaçları

Özellikle şu varsayımların durumunu açıkça takip et:

1. 0. ve 2. katlar daha yoğun olabilir.
2. Ders başlangıç saatleri yoğunluğu artırabilir.
3. Bekleme süreleri belirli dönemlerde artabilir.

Bu varsayımlar yeterli ve karşılaştırılabilir gözlem olmadan doğrulanmış olarak işaretlenmemelidir.

### 9. Software Development Process

Takımın daha önce seçtiği yaklaşımı koru:

- **Development Approach:** Iterative Development
- **Workflow Management:** Kanban

İlk yinelemenin hedefi:

**Gözlem verilerinin kaydedilmesi ve temel analizlerin gerçekleştirilmesi.**

Kanban iş akışı:

Backlog → To Do → In Progress → Review → Done

İki kişilik takım için In Progress WIP limitini başlangıçta en fazla 2 görev olarak öner.

Görevlerin GitHub Issues ile takip edilmesini tavsiye et.

### 10. Definition of Done

Bir geliştirme görevi aşağıdaki koşullar karşılanmadan tamamlanmış kabul edilmemelidir:

- Kabul kriterleri karşılanmış olmalı.
- İlgili testler uygulanmış olmalı.
- Test sonuçları kaydedilmiş olmalı.
- Kod sürüm kontrolünde izlenebilir olmalı.
- Dokümantasyon güncellenmiş olmalı.
- İnsan kod incelemesi gerçekleştirilmiş olmalı.
- Verilerin kaynağı ve sınırlamaları açıklanmış olmalı.

### 11. Çalışma sırası

Şu sırayı izle:

1. Repository ve önceki geri bildirimleri analiz et.
2. İlk yinelemenin hedefini belirle.
3. MVP gereksinimlerini ve kabul kriterlerini oluştur.
4. Basit proje dosya yapısını hazırla.
5. Çalışan web prototipini geliştir.
6. Test senaryolarını oluştur ve uygulanabilenleri çalıştır.
7. Mühendislik kanıtlarını kaydet.
8. README'yi çalıştırma talimatlarıyla güncelle.
9. Gerçekleştirilen çalışmaları ve eksikleri raporla.

Benim açık onayım olmadan Commit, Push, Pull Request veya Merge gerçekleştirme.

### 12. Akademik ilke

**Observation ≠ Verified Evidence**

**AI-Generated Code ≠ Verified Software**

**Evidence → Engineering Decision → Implementation**

Bu çalışmanın amacı yalnızca bir gösterge paneli oluşturmak değildir.

Asıl amaç, veri temelli problem analizi, izlenebilir gereksinimler, test edilebilir yazılım ve insan denetiminde mühendislik kararları geliştirmektir.
