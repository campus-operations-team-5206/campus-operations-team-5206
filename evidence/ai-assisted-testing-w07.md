# AI-Assisted Testing & Human Verification Evidence — Week 07

**Project:** Campus Operations — Elevator Congestion Analytics MVP  
**Team:** Team 5206 (Halil Erdem Gül, Abdurrahman Furkan Şıkoğlu)  
**Workflow:** Iterative Development + Kanban (WIP Limit: 2)  
**Principle:** AI proposes. Students verify. Engineering evidence decides.  

---

## 1. Yapay Zekâ QA Önerileri ve Takım Kararları

| AI Önerisi / Bulgusu | Takım Kararı | İnsan Doğrulaması ve Gerekçe |
|---|---|---|
| **1. Kat aralığı tutarsızlığının (`0–15` vs `0–13`) kod değiştirilmeden önce sorulması** | **ACCEPT** | Bina spesifikasyonunun **15 kat (`0–15`)** olduğu takım tarafından doğrulandı ve kod bu karara göre güncellendi. |
| **2. `TC-11`–`TC-25` arası 15 yeni sınır ve regresyon testinin mevcut `TC-01`–`TC-10` üzerine eklenmesi** | **ACCEPT** | Önceki haftanın testleri korunarak genişletilmiş test matrisi oluşturuldu. |
| **3. Tarayıcıda çalıştırılmayan görsel testlerin sahte `PASS` yerine `NOT RUN` bırakılması** | **ACCEPT** | Mühendislik dürüstlüğü gereği gerçek tarayıcı ekran görüntüsü alınana kadar görsel adımlar `NOT RUN` işaretlendi. |
| **4. Bekleme süresi alanına `!Number.isInteger()` kontrolü eklenmesi (`BUG-02`)** | **ACCEPT** | Kronometre ölçümleri saniye tam sayısı olarak kaydedildiğinden kesirli girişlerin reddedilmesi onaylandı. |
| **5. 8'den fazla çubukta grafik etiketinin kısaltılması (`BUG-03`)** | **ACCEPT** | `0–15` kat aralığında 16 farklı kat çubuğu oluşabileceği için etiket çakışmasını önleyen minimal yama onaylandı. |
| **6. Otomatik GitHub Issue açılması ve otomatik `git push` yapılması** | **REJECT (Manuel Kontrol)** | Takım üyelerinin karşılıklı incelemesi (Peer Review) tamamlanmadan otomatik push veya issue açılması reddedildi. |

---

## 2. İnsan İncelemesi ve Tamamlanma Onayı (Peer Review — 9. Aşama)

- **Geliştirme ve Test Yürütme:** Halil Erdem Gül — *Tamamlandı (2026-11-23)*
- **Çapraz İnceleme (Peer Review):** Abdurrahman Furkan Şıkoğlu — *[İnceleme Sonrası Onaylanacak]*
- **Kalan Son Manuel Adım:** Yerel tarayıcıda `index.html` açılarak `TC-21` ve `TC-25` ekran görüntülerinin alınması ve `git push` ile depoya gönderilmesi.
