# Instructor Feedback — Week 01 Engineering Evidence

**Course:** Yazılım Geliştirme Süreçleri  
**Project:** Campus Operations — Team 5206  
**Team:** Halil Erdem Gül · Abdurrahman Furkan Şıkoğlu  
**Review:** Week 01 Engineering Evidence

---

## Overall Assessment

Takımınızın Week 01 çalışmasını başarılı buldum.

Çalışmanızın en güçlü tarafı, asansör yoğunluğu problemini gördükten sonra
hemen bir yazılım veya fiziksel çözüm seçmek yerine önce problemi
**ölçülebilir ve doğrulanabilir hale getirmeye** çalışmanızdır.

Repository genelinde şu mühendislik düşüncesi açık biçimde görülmektedir:

> **Gözlem ≠ Kanıt → Varsayım → Evidence Needed → Doğrulama → Karar**

Bu yaklaşım dersimizin temel Engineering Evidence anlayışıyla uyumludur.

---

## 1. Problem Statement — Strong

`docs/problem-statement-v0.md` iyi yapılandırılmıştır.

Problemi yalnızca:

> “Asansörler yetersiz.”

şeklinde tanımlamak yerine öğrenciler, öğretim elemanları ve kampüs
personeli açısından ele almanız; ardından **Known Unknowns,
Assumptions ve Required Evidence** ayrımını yapmanız güçlü bir
problem-analysis yaklaşımıdır.

Özellikle 7–8 dakikalık bekleme süresinin sistematik bir ölçüm sonucu
olmadığını açıkça belirtmeniz önemlidir.

Bu ayrım mühendislik açısından kritiktir:

> **Observation ≠ Verified Evidence**

### Engineering Challenge

Bir sonraki aşamada şu iddiayı özellikle test etmeye çalışın:

> “0. ve 2. katlarda diğer katlara göre daha yüksek asansör
> yoğunluğu bulunmaktadır.”

Bu şu anda makul bir gözlemdir; fakat henüz doğrulanmış bir sonuç değildir.

Bunu gerçek evidence'a dönüştürmek için:

- farklı günler,
- farklı saatler,
- farklı katlar

üzerinden karşılaştırılabilir ölçüm gerekir.

---

## 2. AI → Human → Evidence — Very Strong

`evidence/ai-human-evidence.md` çalışmanız Week 01 hedefleriyle
oldukça uyumludur.

AI tarafından sunulan dört öneriye:

- **ACCEPT**
- **UNCERTAIN**
- **MODIFY**
- **REJECT**

kararlarının tamamını kullanmanız, AI çıktısını otomatik olarak doğru
kabul etmediğinizi göstermektedir.

Özellikle yeni asansör ekleme önerisini:

> “Asansör sayısının gerçekten kök neden olduğu henüz kanıtlanmadı.”

gerekçesiyle reddetmeniz güçlü bir **Human Judgment** örneğidir.

Benzer şekilde ders başlangıç saatlerinin değiştirilmesini doğrudan
kabul etmek yerine **UNCERTAIN** bırakmanız da doğrudur.

Burada önemli olan hangi etiketi kullandığınız değil, kararın
arkasındaki rationale ve ihtiyaç duyduğunuz evidence'dır.

> **YZ önerir → İnsan değerlendirir → Kanıt doğrular veya yanlışlar.**

Bu yaklaşımı dönem boyunca koruyun.

---

## 3. Premature Solution Selection — Excellent Observation

Çalışmanızda özellikle güçlü bulduğum mühendislik düşüncelerinden biri:

> **Kök neden doğrulanmadan çözüm seçmeyelim.**

Asansör yoğunluğu;

- asansör sayısından,
- kapasiteden,
- ders programlarından,
- öğrenci hareketlerinden,
- kat dağılımından,
- veya bunların birleşiminden

kaynaklanabilir.

Dolayısıyla henüz problemi ölçmeden “yeni asansör yapalım”,
“ders saatlerini değiştirelim” veya “asansörleri yeniden programlayalım”
demek **Solution before Problem** hatasına dönüşebilir.

Bu ayrımı fark etmiş olmanız değerlidir.

---

## 4. Important Artifact Note — incident-diagnosis.md

Burada küçük ama önemli bir noktaya dikkat etmenizi istiyorum.

`evidence/incident-diagnosis.md` dosyanızın içeriği kendi Campus
Operations asansör probleminizin analizine dönüştürülmüş.

Analiziniz kendi içinde başarılıdır ve Engineering Evidence açısından
değerlidir.

Ancak Week 01 assignment'ında `incident-diagnosis.md` artifact'ının
temel amacı derste incelediğimiz **YerimVar incident timeline**
üzerindeki kritik kırılma noktalarını analiz etmekti.

Bu nedenle burada şu mühendislik dersini çıkaralım:

> **İyi bir çalışma üretmek kadar, beklenen artifact'ın specification'ına
> uygun çıktı üretmek de önemlidir.**

Mevcut analizinizi silmeyin.

Engineering history korunmalıdır.

İsterseniz mevcut Campus Operations analizini ileride ayrı bir artifact
olarak değerlendirebiliriz; ancak assignment specification ile
repository artifact'ı arasındaki traceability'yi bundan sonraki
çalışmalarda özellikle koruyun.

---

## 5. Repository as Engineering Memory — Good Start

Repository yapınız temiz ve anlaşılır:

```text
campus-operations-team-5206/
├── README.md
├── docs/
│   └── problem-statement-v0.md
└── evidence/
    ├── incident-diagnosis.md
    └── ai-human-evidence.md
