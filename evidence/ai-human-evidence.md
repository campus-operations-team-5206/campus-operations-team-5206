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

## AI Usage Record (AI Kullanım Kaydı)

**AI Tool(s):** ChatGPT / Gemini  
**AI Role:** Drafting / Structuring / Reviewing  
**Human Review:** Completed  
**Final Decision:** Team
