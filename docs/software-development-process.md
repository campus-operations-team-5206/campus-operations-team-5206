# Software Development Process Selection

## 1. Proje Bilgileri

- **Proje adı:** Kampüs Operasyonları – Asansör Yoğunluğu
- **Takım adı:** Campus Operations Team
- **Takım üyeleri:**
  - Abdurrahman Furkan Şıkoğlu
  - Halil Erdem Gül

## 2. Proje Genel Bakışı

Bu projenin amacı, Esenyurt Üniversitesi kampüsünde yaşanan asansör yoğunluğunu incelemek ve bekleme sürelerini azaltmaya yönelik uygulanabilir çözümler geliştirmektir.

Mevcut gözlemlere göre özellikle 0. ve 2. katlarda asansör bekleme süresi yaklaşık 7–8 dakikaya ulaşabilmektedir. Ancak yoğunluğun kesin nedeni henüz doğrulanmamıştır. Sorunun asansör kapasitesinden, öğrencilerin kullanım alışkanlıklarından veya ders saatlerinin aynı zamana denk gelmesinden kaynaklanma ihtimali bulunmaktadır.

Bu nedenle proje sürecinde önce veri ve gözlem toplanması, ardından çözüm alternatiflerinin değerlendirilmesi ve uygun çözümün aşamalı olarak geliştirilmesi hedeflenmektedir.

## 3. Projenin Özellikleri

Projenin geliştirme sürecini etkileyen başlıca özellikler şunlardır:

- **Belirsizlik:** Asansör yoğunluğunun temel nedeni henüz kesin olarak bilinmemektedir.
- **Değişebilen gereksinimler:** Yeni gözlemler toplandıkça proje gereksinimleri ve çözüm önerileri değişebilir.
- **Sınırlı ekip büyüklüğü:** Proje iki kişilik bir öğrenci ekibi tarafından yürütülmektedir.
- **Veri ihtiyacı:** Kararların yalnızca varsayımlara değil, mümkün olduğunca gözlem ve kanıtlara dayanması gerekir.
- **Düşük maliyet ihtiyacı:** Çözümler geliştirilirken uygulanabilirlik ve maliyet dikkate alınmalıdır.
- **Geri bildirim ihtiyacı:** Her aşamada elde edilen sonuçların değerlendirilmesi ve gerekli düzenlemelerin yapılması önemlidir.

Bu özellikler, baştan sona değişmeden ilerleyen bir süreç yerine gerektiğinde güncellenebilen bir geliştirme yaklaşımını daha uygun hâle getirmektedir.

## 4. Değerlendirilen Yazılım Geliştirme Süreçleri

### 4.1. Waterfall (Şelale Modeli)

Waterfall modelinde gereksinim analizi, tasarım, geliştirme ve test aşamaları belirli bir sırayla yürütülür.

**Avantajları:**
- Aşamalar ve teslimatlar açıkça tanımlanabilir.
- Dokümantasyon ve planlama düzenlidir.
- Gereksinimleri baştan kesin olarak bilinen projelerde kullanışlıdır.

**Dezavantajları:**
- Gereksinimler değiştiğinde önceki aşamalara dönmek zorlaşabilir.
- Sorunun temel nedeni henüz bilinmediği için tüm gereksinimleri başlangıçta belirlemek güçtür.
- Erken geri bildirim almak daha zor olabilir.

**Projeye uygunluğu:** Bu proje için tek başına en uygun seçenek değildir. Çünkü asansör yoğunluğunun nedenleri araştırma sırasında netleşebilir.

### 4.2. Scrum

Scrum, işlerin kısa sprintlere bölündüğü, düzenli planlama ve değerlendirme toplantılarının yapıldığı çevik bir yaklaşımdır.

**Avantajları:**
- İşler küçük parçalara ayrılabilir.
- Düzenli geri bildirim ve değerlendirme yapılabilir.
- Görevler ve sprint hedefleri takip edilebilir.

**Dezavantajları:**
- Sprint planlama ve toplantılar küçük bir ekip için ek iş yükü oluşturabilir.
- İki kişilik ekipte bazı rollerin ayrıştırılması zor olabilir.
- Sabit sprint yapısı, sürekli değişen küçük görevler için gereğinden fazla süreç oluşturabilir.

**Projeye uygunluğu:** Kullanılabilir bir yaklaşımdır; ancak iki kişilik ekipte tüm Scrum uygulamalarını eksiksiz yürütmek yerine daha hafif bir süreç tercih edilebilir.

### 4.3. Kanban

Kanban, işleri görsel bir görev panosu üzerinde takip etmeyi ve devam eden iş miktarını kontrol etmeyi sağlayan bir yaklaşımdır.

**Avantajları:**
- Öğrenmesi ve uygulaması kolaydır.
- İki kişilik ekip için uygundur.
- Görevlerin durumu kolayca görülebilir.
- Yeni gözlem ve ihtiyaçlara göre işler güncellenebilir.

**Dezavantajları:**
- Tek başına kullanıldığında uzun vadeli planlama yeterince belirgin olmayabilir.
- Görev öncelikleri ve tamamlanma ölçütleri tanımlanmazsa işler birikebilir.
- Düzenli değerlendirme yapılmazsa iyileştirme fırsatları kaçabilir.

**Projeye uygunluğu:** Görev takibi için uygundur. Ancak proje geliştirme yaklaşımıyla birlikte kullanıldığında daha etkili olacaktır.

### 4.4. Iterative Development (Yinelemeli Geliştirme)

Yinelemeli geliştirmede proje küçük aşamalar hâlinde ilerler. Her aşamada bir problem veya ihtiyaç ele alınır, sonuç değerlendirilir ve elde edilen bilgilere göre sonraki aşama planlanır.

**Avantajları:**
- Belirsiz gereksinimlerle çalışmaya uygundur.
- Yeni kanıtlar geldikçe çözüm güncellenebilir.
- Erken aşamalarda eksikler fark edilebilir.
- Çözümler aşamalı biçimde değerlendirilebilir.

**Dezavantajları:**
- Her aşamanın hedefi belirlenmezse proje dağılabilir.
- Sürekli değişiklik yapılması zaman kaybına yol açabilir.
- Her yinelemenin sonunda değerlendirme yapılması gerekir.

**Projeye uygunluğu:** Projenin temel nedeni henüz kesinleşmediği için uygundur. Kanban ile birlikte kullanılması, hem geliştirme aşamalarını hem de günlük görevleri yönetmeyi kolaylaştıracaktır.

## 5. Seçilen Yaklaşım ve Gerekçesi

Takımımızın seçtiği yaklaşım **Yinelemeli Geliştirme (Iterative Development) ve Kanban görev takibinin birlikte kullanılmasıdır.**

Bu seçimde aşağıdaki gerekçeler etkili olmuştur:

1. **Belirsizliğe uyum:** Asansör yoğunluğunun kesin nedeni henüz doğrulanmadığından, yeni gözlemlere göre çözümümüzü güncelleyebiliriz.
2. **Küçük ekip yapısı:** İki kişilik ekipte ağır toplantı ve süreç yükü oluşturmadan çalışmamızı sağlar.
3. **Görevlerin görünürlüğü:** Kanban panosu sayesinde hangi işin beklediği, devam ettiği veya tamamlandığı izlenebilir.
4. **Aşamalı değerlendirme:** Önce problem araştırılabilir, ardından çözüm alternatifleri değerlendirilebilir ve seçilen çözüm küçük adımlarla geliştirilebilir.
5. **Geri bildirim:** Her aşamanın sonunda sonuçlar incelenerek sonraki aşama buna göre planlanabilir.

Waterfall modeli gereksinimlerin baştan net olmasını beklediği için daha az uygundur. Scrum ise yararlı özelliklere sahip olsa da iki kişilik ekip için ek süreç yükü oluşturabilir. Bu nedenlerle yinelemeli geliştirme ve Kanban birleşiminin projemize daha uygun olduğuna karar verilmiştir.

## 6. Takım Organizasyonu

Takım iki üyeden oluşmaktadır. Görevler başlangıçta aşağıdaki şekilde paylaşılmıştır. Gerektiğinde üyeler birbirlerinin çalışmalarını inceleyerek destek olacaktır.

### Abdurrahman Furkan Şıkoğlu
- Proje koordinasyonuna katkıda bulunmak.
- Gereksinimleri değerlendirmek ve görevleri takip etmek.
- Teknik araştırma ve çözüm alternatiflerinin analizine katılmak.
- Geliştirme sürecindeki ilerlemeyi izlemek.

### Halil Erdem Gül
- Problem araştırmasına ve gözlemlerin düzenlenmesine katkıda bulunmak.
- Kanıtları ve varsayımları dokümante etmek.
- GitHub üzerindeki dokümantasyonun düzenlenmesine katkı sağlamak.
- Kalite kontrolü ve görev incelemelerini yürütmek.

### Ortak sorumluluklar
- Süreç ve çözüm kararlarını birlikte değerlendirmek.
- Birbirlerinin çalışmalarını gözden geçirmek.
- Gerektiğinde görev paylaşımını yeniden düzenlemek.
- Sonuçların doğruluğunu ve projenin gereksinimlerini karşıladığını kontrol etmek.

## 7. İş Akışı

Görevler GitHub Projects veya benzer bir Kanban panosu üzerinde takip edilecektir.

Kullanılacak temel iş akışı:

**Backlog → To Do → In Progress → Review → Done**

- **Backlog:** Henüz önceliklendirilmemiş veya daha sonra yapılacak işler.
- **To Do:** Yapılmasına karar verilmiş ve sıraya alınmış görevler.
- **In Progress:** Üzerinde aktif olarak çalışılan görevler.
- **Review:** Tamamlanan işin diğer takım üyesi tarafından incelendiği aşama.
- **Done:** İncelemesi tamamlanmış ve kabul ölçütlerini karşılayan işler.

### Uygulama adımları

1. Problem ve gereksinimler belirlenir.
2. Yapılacak işler küçük görevlere ayrılır.
3. Görevler önceliklendirilir ve ekip üyeleri arasında paylaşılır.
4. Görev üzerinde çalışılır ve gerekli değişiklikler GitHub deposuna eklenir.
5. Tamamlanan çalışma diğer takım üyesi tarafından incelenir.
6. Eksikler varsa görev yeniden düzenlenir.
7. Kabul ölçütleri karşılandığında görev tamamlandı olarak işaretlenir.
8. Her aşamanın sonunda sonuçlar değerlendirilerek sonraki işler belirlenir.

## 8. Kalite Güvencesi ve Definition of Done

Proje çıktılarının kalitesini korumak için görevlerin tamamlanma ölçütleri önceden belirlenmelidir.

Bir görev aşağıdaki koşulları karşıladığında tamamlanmış kabul edilecektir:

- [ ] Görevin amacı ve gereksinimleri karşılanmıştır.
- [ ] Kullanılan bilgiler, gözlemler ve varsayımlar açıkça belirtilmiştir.
- [ ] Çalışma diğer takım üyesi tarafından gözden geçirilmiştir.
- [ ] İnceleme sırasında bulunan önemli eksikler giderilmiştir.
- [ ] Doküman doğru dosya yoluna eklenmiştir.
- [ ] Değişiklikler GitHub deposuna kaydedilmiştir.
- [ ] Sonuç takım üyeleri tarafından anlaşılabilir ve açıklanabilir durumdadır.

Projede ölçüm veya gözlem sonuçları kullanıldığında, bunların gerçek gözlem mi yoksa varsayım mı olduğu açıkça yazılacaktır. Doğrulanmamış bir çözüm, etkisi kanıtlanmış gibi sunulmayacaktır.

## 9. Sürecin Değerlendirilmesi ve İyileştirilmesi

Yinelemeli geliştirme sürecinde her aşamanın sonunda takım çalışması ve elde edilen sonuçlar değerlendirilecektir.

Değerlendirmede şu sorular kullanılacaktır:

- Bu aşamada hangi görevler tamamlandı?
- Hangi görevler gecikti ve neden?
- Yeni gözlemler problem hakkındaki anlayışımızı değiştirdi mi?
- Kullanılan çözüm önerisinin yeterli kanıtı var mı?
- Görev paylaşımında veya iş akışında değişiklik gerekiyor mu?
- Bir sonraki aşamada hangi işe öncelik verilmeli?

Bu değerlendirmeler sonucunda görevlerin öncelikleri, görev paylaşımı ve çözüm yaklaşımı gerektiğinde güncellenecektir.

Başarı yalnızca görevlerin tamamlanmasıyla değil, problemin daha iyi anlaşılması, kararların kanıtlarla desteklenmesi ve geliştirilen çözümün gereksinimleri karşılamasıyla değerlendirilecektir.

## 10. Yapay Zekâ Kullanım Beyanı

Bu dokümanın hazırlanmasında ChatGPT, yazılım geliştirme süreçlerinin karşılaştırılması, doküman yapısının oluşturulması ve ifadelerin düzenlenmesi amacıyla kullanılmıştır.

Yapay zekâ tarafından oluşturulan öneriler doğrudan kesin veya doğrulanmış bilgi olarak kabul edilmemelidir. Proje kapsamına uygunlukları takım üyeleri tarafından değerlendirilmelidir. Projeyle ilgili gerçek gözlemler, kanıtlar, son kararlar ve teslim edilen çalışmanın doğruluğu takımın sorumluluğundadır.

Yapay zekâdan yararlanılması, takım üyelerinin karar verme, araştırma, inceleme ve sonuçları açıklama sorumluluğunu ortadan kaldırmaz.

## 11. Takım Kararı

Takımımız, proje gereksinimlerini ve ekip büyüklüğünü değerlendirerek **Yinelemeli Geliştirme (Iterative Development) ve Kanban görev takibinin birlikte kullanılmasını** önerilen süreç olarak belirlemiştir.

Bu yaklaşımın seçilme nedenleri; problemdeki belirsizliğe uyum sağlaması, iki kişilik ekip için uygulanabilir olması, görevlerin görünür biçimde takip edilmesini sağlaması ve her aşamada geri bildirim alınmasına imkân vermesidir.

Nihai takım onayı, her iki üyenin bu yaklaşımı birlikte değerlendirip kabul etmesinden sonra verilmelidir.

| Takım üyesi | Karar durumu |
|---|---|
| Abdurrahman Furkan Şıkoğlu | Takım onayı bekleniyor |
| Halil Erdem Gül | Takım onayı bekleniyor |

**Sonuç:** Takım onayının ardından bu süreç proje boyunca uygulanacak ve ihtiyaç duyulursa elde edilen geri bildirimlere göre iyileştirilecektir.
