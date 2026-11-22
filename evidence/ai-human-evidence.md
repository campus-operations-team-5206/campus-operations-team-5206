# AI-Human Evidence (Yapay Zekâ ve İnsan Kanıtı)

## Amaç (Purpose)

Bu dokümanın amacı, Esenyurt Üniversitesi kampüsündeki asansör yoğunluğu problemi için yapay zekâ tarafından üretilen çözüm önerilerini incelemek ve bu önerilerin takım tarafından değerlendirilmesini göstermektir.

Yapay zekâ tarafından oluşturulan öneriler doğrudan doğru kabul edilmemiştir. Her öneri takım tarafından incelenmiş, **ACCEPT (Kabul), REJECT (Ret), MODIFY (Değiştir) veya UNCERTAIN (Belirsiz)** olarak değerlendirilmiştir.

---

## Problem Özeti (Problem Summary)

Esenyurt Üniversitesi kampüsünün dikey mimarisi nedeniyle özellikle sabah saatlerinde ve ders başlangıç/bitiş zamanlarında asansörlerin önünde yoğunluk oluşmaktadır.

Takım gözlemlerine göre asansör bekleme süresi yaklaşık **7–8 dakika** olabilmekte ve yoğunluğun arttığı zamanlarda bu süre daha da uzayabilmektedir. Özellikle **0. ve 2. katlarda** yoğunluk daha belirgin gözlemlenmiştir.

Ancak asansör sayısının kesin olarak yetersiz olduğu henüz kanıtlanmamıştır. Sorunun asansör kapasitesi, öğrenci yoğunluğu, ders saatlerinin aynı zamana denk gelmesi veya bu faktörlerin birlikte etkisinden kaynaklanıp kaynaklanmadığı araştırılmalıdır.

---

## AI Proposal 1: Asansör Kullanım Verilerinin Ölçülmesi (Measuring Elevator Usage Data)

### AI Önerisi (AI Proposal)

Yapay zekâ, öncelikle asansörlerin hangi saatlerde ne kadar kullanıldığının ölçülmesini önermiştir.

Ölçülebilecek veriler:

- Asansör bekleme süresi
- Asansör başına düşen öğrenci sayısı
- Saatlik kullanım yoğunluğu
- En yoğun katlar
- Ders başlangıç ve bitiş saatleri
- Asansörlerin doluluk oranı

### Takım Kararı (Team Decision)

**ACCEPT — KABUL**

### Gerekçe (Reason)

Bu öneri problemin temel bilinmeyenlerinden birini araştırmaktadır. Şu anda 7–8 dakikalık bekleme süresine ilişkin gözlemimiz bulunmasına rağmen günün tamamını kapsayan sistematik bir veri bulunmamaktadır.

Ölçüm yapılması, yoğunluğun hangi saatlerde ve hangi katlarda oluştuğunu daha doğru şekilde anlamamızı sağlayacaktır.

### Gerekli Kanıt (Required Evidence)

- Farklı saatlerde yapılan bekleme süresi ölçümleri
- Kat bazında öğrenci yoğunluğu
- Asansör kullanım sayıları
- Ders başlangıç/bitiş saatleri ile yoğunluk karşılaştırması

---

## AI Proposal 2: Ders Başlangıç Saatlerinin Dağıtılması (Staggering Class Start Times)

### AI Önerisi (AI Proposal)

Yapay zekâ, derslerin aynı saatlerde başlamasının asansör yoğunluğunu artırabileceğini ve ders başlangıç saatlerinin farklılaştırılmasının yoğunluğu azaltabileceğini önermiştir.

Örneğin derslerin tamamının aynı saatte başlaması yerine farklı zaman aralıklarına dağıtılması önerilmektedir.

### Takım Kararı (Team Decision)

**UNCERTAIN — BELİRSİZ**

### Gerekçe (Reason)

Bu önerinin teorik olarak yoğunluğu azaltabileceği düşünülmektedir. Ancak ders programlarının değiştirilmesinin uygulanabilir olup olmadığı ve asansör yoğunluğunu ne kadar azaltacağı henüz bilinmemektedir.

Ayrıca sorunun yalnızca ders başlangıç saatlerinden kaynaklandığına dair yeterli kanıt bulunmamaktadır.

Bu nedenle öneri şu aşamada doğrudan kabul edilmemiş ve önce veri toplanmasına karar verilmiştir.

### Gerekli Kanıt (Required Evidence)

- Ders başlangıç saatleri ile asansör yoğunluğu arasındaki ilişki
- Aynı anda farklı katlara hareket eden öğrenci sayısı
- Ders saatlerinin değiştirilmesinin uygulanabilirliği
- Ders saatleri değiştirildiğinde yoğunluğun nasıl değişeceğine ilişkin ölçüm veya simülasyon

---

## AI Proposal 3: Asansör Kullanımının Katlara Göre Düzenlenmesi (Organizing Elevator Usage by Floors)

### AI Önerisi (AI Proposal)

Yapay zekâ, yoğun saatlerde asansör kullanımının belirli katlara göre düzenlenmesini önermiştir.

Örneğin bazı asansörlerin belirli katlara öncelikli hizmet vermesi veya yoğun kullanılan katlara yönelik farklı bir kullanım düzeni oluşturulması düşünülebilir.

### Takım Kararı (Team Decision)

**MODIFY — DEĞİŞTİR**

### Gerekçe (Reason)

Öneri problem açısından mantıklı görünmektedir ancak mevcut asansör sisteminin teknik olarak böyle bir yönlendirmeyi destekleyip desteklemediği bilinmemektedir.

Ayrıca hangi katların gerçekten daha yoğun olduğu konusunda şu anda yalnızca gözlemsel bilgi bulunmaktadır.

Bu nedenle önerinin doğrudan uygulanması yerine önce yoğunluk verilerinin toplanmasına karar verilmiştir.

Öneri şu şekilde değiştirilmiştir:

> Öncelikle yoğun kullanılan katlar ve saatler ölçülecek, daha sonra asansörlerin kullanımının katlara göre düzenlenmesinin uygulanabilirliği değerlendirilecektir.

### Gerekli Kanıt (Required Evidence)

- Kat bazında kullanım yoğunluğu
- Asansörlerin mevcut teknik özellikleri
- Asansörlerin bağımsız olarak yönlendirilebilir olup olmadığı
- Yapılacak düzenlemenin bekleme süresine etkisi

---

## AI Proposal 4: Yeni Asansör Eklenmesi (Adding a New Elevator)

### AI Önerisi (AI Proposal)

Yapay zekâ, mevcut asansör kapasitesinin yetersiz olması durumunda kampüse yeni bir asansör eklenmesini önermiştir.

### Takım Kararı (Team Decision)

**REJECT — REDDET**

### Gerekçe (Reason)

Bu öneri ilk bakışta doğrudan bir çözüm gibi görünse de mevcut kampüs yapısında yeni bir asansör eklemek için uygun fiziksel alan bulunup bulunmadığı bilinmemektedir.

Ayrıca asansör sayısının gerçekten problemin temel nedeni olduğu da henüz kanıtlanmamıştır.

Bu nedenle mevcut kanıtlar yeterli olmadığı için yeni asansör eklenmesi önerisi şu aşamada reddedilmiştir.

### Gerekli Kanıt (Required Evidence)

Önerinin tekrar değerlendirilebilmesi için:

- Mevcut asansörlerin kapasite kullanım oranı
- Yoğun saatlerde oluşan talep
- Yeni asansör için fiziksel alan bulunup bulunmadığı
- İnşaat ve maliyet uygulanabilirliği
- Yeni asansörün bekleme süresini ne kadar azaltacağı

gibi kanıtların elde edilmesi gerekir.

---

## İnsan Kararı ve Sonraki Adım (Human Decision and Next Step)

Yapay zekâ tarafından üretilen öneriler doğrudan uygulanmamıştır. Takım tarafından yapılan değerlendirme sonucunda:

| AI Önerisi | Takım Kararı | Karar Nedeni |
|---|---|---|
| Asansör kullanım verilerinin ölçülmesi | **ACCEPT** | Problemin gerçek boyutunu anlamak için gerekli |
| Ders başlangıç saatlerinin dağıtılması | **UNCERTAIN** | Uygulanabilirliği ve etkisi henüz kanıtlanmadı |
| Katlara göre asansör kullanımının düzenlenmesi | **MODIFY** | Önce yoğunluk verileri ve teknik uygunluk araştırılmalı |
| Yeni asansör eklenmesi | **REJECT** | Kök neden ve fiziksel uygulanabilirlik kanıtlanmadı |

Bu değerlendirmeye göre takımın ilk önceliği herhangi bir çözümü doğrudan uygulamak değil, **asansör yoğunluğuna ilişkin güvenilir veri toplamaktır**.

Özellikle aşağıdaki soruların cevaplanması hedeflenmektedir:

1. Ortalama asansör bekleme süresi gerçekten kaç dakikadır?
2. En yoğun saatler hangileridir?
3. En yoğun katlar hangileridir?
4. Yoğunluğun temel nedeni asansör kapasitesi midir?
5. Ders başlangıç saatleri yoğunluğu ne kadar etkilemektedir?
6. Öğrencilerin ne kadarı asansör yoğunluğu nedeniyle derse geç kalmaktadır?

Bu veriler elde edildikten sonra çözüm seçenekleri yeniden değerlendirilmelidir.

---

---

## Iteration 1 (MVP) — Yazılım Mimarisi ve Uygulama Kararları (AI vs. Human Evidence)

MVP geliştirme sürecinde yapay zekâ araçlarından (ChatGPT, Gemini) mimari, veri görselleştirme ve arayüz bileşenleri için öneriler alınmış; ancak her teknik öneri takım tarafından değerlendirilerek filtrelenmiştir.

### AI Proposal 5: Harici Grafik Kütüphanesi Kullanımı (Chart.js / ApexCharts)
- **AI Önerisi:** Kat ve saat bazlı grafikler için CDN üzerinden harici bir grafik kütüphanesi (Chart.js) entegre edilmesi.
- **Takım Kararı:** **REJECT — REDDET**
- **Gerekçe:** Harici kütüphaneler gereksiz bağımlılık yaratmakta, internet bağlantısı olmayan yerel test ortamlarında (offline local test) kırılma riski taşımakta ve kod okunabilirliğini azaltmaktadır. Bunun yerine takım kararıyla sıfır bağımlılıklı saf HTML5 Canvas (`js/charts.js`) modülü yazılmıştır.

### AI Proposal 6: Uygulama Açılışında Gerçekçi Örnek Veri Gösterimi
- **AI Önerisi:** Uygulama ilk açıldığında boş görünmemesi için örnek bekleme süresi verilerinin otomatik yüklenmesi.
- **Takım Kararı:** **MODIFY — DEĞİŞTİR**
- **Gerekçe:** Boş ekran yerine örnek veri gösterimi kullanıcı deneyimi açısından kabul edilmiş, ancak simülasyon verilerinin gerçek saha ölçümü sanılması riskine karşı `sourceType: "DEMO" | "OBSERVED"` veri modeli ayrımı, üst uyarı şeridi (*"Demo Verisi ≠ Doğrulanmış Saha Kanıtı"*) ve tek tıkla *"Tüm DEMO Kayıtlarını Sil"* özelliği zorunlu kılınmıştır.

### AI Proposal 7: Kat Yoğunluğu Karşılaştırmasında Doğrudan Ortalama Sıralaması
- **AI Önerisi:** Tüm katların ortalama bekleme süresine göre sıralanıp en yoğun katın doğrudan ilan edilmesi.
- **Takım Kararı:** **MODIFY — DEĞİŞTİR**
- **Gerekçe:** Tek bir ölçüme (ör. `n = 1`) dayanarak bir katı "en yoğun kat" ilan etmek istatistiksel olarak yanıltıcıdır. Takım kararıyla minimum örneklem eşiği (`MIN_RELIABLE_SAMPLE = 5`) tanımlanmış ve 5'in altındaki kayıtlar arayüzde *"Sınırlı Güvenilirlik"* uyarısıyla işaretlenmiştir.

### AI Proposal 8: Backend Veritabanı ve Kullanıcı Giriş Sistemi Kurulumu
- **AI Önerisi:** Gözlemleri saklamak için Node.js/PHP backend ve MySQL veritabanı kurulması.
- **Takım Kararı:** **REJECT (Iteration 1 Kapsam Dışı)**
- **Gerekçe:** Iteration 1 hedefi hızlı prototipleme ve yerel tarayıcıda çalışan bir MVP doğrulamasıdır. Sunucu kurulumu yerine istemci taraflı `LocalStorage` (`js/storage.js`) tercih edilerek `index.html` dosyasının tek tıkla her bilgisayarda çalıştırılabilmesi sağlanmıştır.

---

## Güncel AI Kullanım Özeti (Iteration 1 Dahil)

- **AI Tool(s):** ChatGPT, Gemini
- **AI Role:** Taslak oluşturma, modüler JS yapılandırma, test senaryosu önerisi, dokümantasyon inceleme
- **Human Review:** Halil Erdem Gül & Abdurrahman Furkan Şıkoğlu tarafından tamamlandı
- **Final Decision:** Team 5206
