# Incident Diagnosis (Olay Teşhisi): YerimVar Vakası Analizi

YerimVar vakasındaki kırılmalar yalnızca kod hatalarından değil, aynı zamanda mühendislik süreçlerindeki eksikliklerden kaynaklanmıştır. Sunulan vaka zaman çizelgesi incelenerek 3 kritik kopma noktası (breakpoint) belirlenmiş, bu noktalar için süreç boşlukları ve eksik mühendislik kanıtları tanımlanmıştır.

---

## Breakpoint 1: İki Farklı Gerçeklik ve Durum Yönetiminin Çökmesi (Two Realities)

### What happened? (Ne oldu?)

Deniz ve Ege'nin ekranlarında aynı sınıf (**Sınıf 204**) için farklı durumlar gösterilmiştir. Deniz'in ekranında sınıf **“DOLU”**, Ege'nin ekranında ise **“BOŞ”** olarak görünmüştür.

Bu durum, kullanıcıların aynı kaynak hakkında farklı bilgiler görmesine ve rezervasyon sistemindeki durum bilgisinin güvenilirliğinin kaybolmasına neden olmuştur.

### Process Gap (Süreç Boşluğu)

- **Eşzamanlılık (Concurrency) ve Senkronizasyon Yönetimi Eksikliği:** Birden fazla kullanıcının aynı kaynağa erişmesini ve durum güncellemelerini eşzamanlı olarak yöneten merkezi bir durum yönetimi yaklaşımı yeterince tasarlanmamıştır.
- **Gerçek Zamanlı Veri Doğrulama Süreç Boşluğu:** İstemciler arasındaki durum senkronizasyonunu kontrol eden ve doğrulayan yeterli entegrasyon testleri yapılmamıştır.

### Missing Evidence (Eksik Kanıt)

- Sınıf rezervasyon durumlarının eşzamanlı güncellendiğini doğrulayan **Concurrency Test Logs**
- Durum yönetimi ve senkronizasyon mimarisini açıklayan **State Management Architecture Document**

---

## Breakpoint 2: Ortam Bağımlılığı ve “Benim Bilgisayarımda Çalışıyordu” Yanılgısı (Environment Failure & Localhost)

### What happened? (Ne oldu?)

Uygulama çalıştırılmak istendiğinde:

`ModuleNotFoundError: No module named 'flask'`

hatası alınmıştır.

Bu durum, uygulamanın yalnızca Deniz'in bilgisayarında çalıştığını ve gerekli bağımlılıkların proje içerisinde yeterince tanımlanmadığını göstermiştir.

Ayrıca uygulamanın canlı bir sunucu yerine **`localhost:8000`** adresi üzerinden çalıştırılmaya/dağıtılmaya çalışıldığı görülmüştür.

### Process Gap (Süreç Boşluğu)

- **Dependency Management Eksikliği:** `requirements.txt`, `Dockerfile` veya benzeri bağımlılık ve ortam yönetimi mekanizmaları kullanılmamıştır.
- **CI/CD Süreç Boşluğu:** Uygulamanın farklı bilgisayarlarda ve canlı sunucuda tutarlı şekilde çalışmasını sağlayacak otomatik build, test ve deployment süreçleri oluşturulmamıştır.

### Missing Evidence (Eksik Kanıt)

- `requirements.txt`
- `Dockerfile`
- CI/CD pipeline çalışma ve test logları
- Ortam kurulumunun nasıl yapılacağını açıklayan dokümantasyon

---

## Breakpoint 3: Yapay Zekâ Kodunun Sahiplenilememesi ve Açıklanamaması (Unexplained AI Code)

### What happened? (Ne oldu?)

Kritik algoritma olan `optimize_reservation` fonksiyonuna:

`// YZ yazdı. Çalışır gibi. Dokunmayın.`

şeklinde bir yorum eklenmiştir.

Bu yaklaşım sonucunda kodun neden bu şekilde tasarlandığı, hangi varsayımlara dayandığı ve doğru çalışıp çalışmadığı ekip tarafından yeterince anlaşılamamıştır.

Böylece yapay zekâ tarafından üretilen kodun sorumluluğu ve sahipliği ekip içerisinde kaybolmuştur.

### Process Gap (Süreç Boşluğu)

- **Code Review ve Ownership Eksikliği:** Yapay zekâ tarafından üretilen kodun ekip tarafından anlaşıldığını, doğrulandığını ve sahiplenildiğini garanti eden bir peer review süreci uygulanmamıştır.
- **ADR Eksikliği:** Kodun hangi problem için üretildiğini, hangi alternatiflerin değerlendirildiğini ve neden mevcut çözümün seçildiğini açıklayan bir **ADR (Architecture Decision Record)** bulunmamaktadır.

### Missing Evidence (Eksik Kanıt)

- Pull Request (PR) code review kayıtları
- `optimize_reservation` algoritmasına ilişkin test sonuçları
- ADR dokümanı
- AI tarafından üretilen kodun insan tarafından incelendiğini gösteren kayıtlar

---

## Genel Sonuç (Overall Conclusion)

YerimVar vakasında ortaya çıkan sorunlar yalnızca tek tek kod hataları olarak değerlendirilmemelidir. Olayın temelinde;

- durum ve senkronizasyon yönetiminin yeterince doğrulanmaması,
- bağımlılık ve çalışma ortamının standartlaştırılmaması,
- CI/CD süreçlerinin bulunmaması,
- yapay zekâ tarafından üretilen kodun ekip tarafından yeterince incelenmemesi ve sahiplenilmemesi

gibi mühendislik süreç boşlukları bulunmaktadır.

Bu nedenle benzer problemlerin önlenmesi için yalnızca kodun düzeltilmesi değil, **test, dokümantasyon, code review, dependency management ve AI-generated code ownership** süreçlerinin de geliştirilmesi gerekmektedir.

---

## AI Usage Record (AI Kullanım Kaydı)

**AI Tool(s):** ChatGPT / Gemini  
**AI Role:** Drafting / Structuring / Reviewing  
**Human Review:** Completed  
**Final Decision:** Team
