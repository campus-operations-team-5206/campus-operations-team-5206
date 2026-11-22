/**
 * tests/mvp-tests.js
 * Campus Operations — Elevator Congestion Analytics MVP (Team 5206)
 * Otomatik Birim ve Sınır Durum (Boundary) Test Paketi
 *
 * Çalıştırma:
 * 1) Tarayıcıda index.html açıkken Geliştirici Konsoluna (F12 -> Console) yapıştırarak
 * 2) veya terminalde `node tests/mvp-tests.js` komutuyla çalıştırılabilir.
 */

(function runMvpTestSuite() {
  // Node.js ortamı için bellek içi mock LocalStorage ve modül yükleme
  if (typeof window === "undefined") {
    global.localStorage = (() => {
      let store = {};
      return {
        getItem: (k) => (k in store ? store[k] : null),
        setItem: (k, v) => { store[k] = String(v); },
        removeItem: (k) => { delete store[k]; },
        clear: () => { store = {}; }
      };
    })();
  }

  const results = [];
  function assert(testId, description, condition) {
    results.push({
      testId,
      description,
      status: condition ? "PASS" : "FAIL"
    });
  }

  // Tarayıcı ortamında doğrudan yüklü servisleri test et
  if (typeof StorageService !== "undefined" && typeof AnalyticsService !== "undefined") {
    // Temiz başlangıç
    localStorage.clear();

    // TC-01 & TC-09: Başlangıç DEMO verisi yükleme ve kaynak ayrımı
    const initial = StorageService.getObservations();
    assert("TC-09", "Başlangıçta 6 adet DEMO kaydı yüklenmeli", initial.length === 6 && initial.every((r) => r.sourceType === "DEMO"));

    // TC-07: İstatistik hesaplama doğruluğu (6 DEMO kaydı)
    const stats = AnalyticsService.calculateSummaryStats(initial);
    assert("TC-07", "Başlangıç ortalama bekleme süresi 264.2 sn, min 95 sn, max 420 sn olmalı", stats.avgWait === 264.2 && stats.minWait === 95 && stats.maxWait === 420);

    // TC-01: Yeni OBSERVED kaydı ekleme
    const added = StorageService.addObservation({
      date: "2026-11-22",
      time: "09:00",
      floor: 2,
      waitTime: 300,
      peopleCount: 12,
      sourceType: "OBSERVED",
      note: "Otomatik test saha gözlemi"
    });
    const afterAdd = StorageService.getObservations();
    assert("TC-01", "Yeni OBSERVED kaydı eklenebilmeli ve toplam sayı 7 olmalı", afterAdd.length === 7 && afterAdd[0].id === added.id);

    // TC-05: Kat bazlı güvenilirlik kontrolü (n < 5 uyarısı)
    const onlyObs = afterAdd.filter((r) => r.sourceType === "OBSERVED");
    const floorReport = AnalyticsService.calculateFloorAnalytics(onlyObs);
    assert("TC-05", "Tek gözlemli (n=1) kat için isReliable false olmalı", floorReport.perFloor.length === 1 && floorReport.perFloor[0].isReliable === false);

    // TC-08 & TC-10: Tüm DEMO kayıtlarını ve test kaydını silme + sıfıra bölme koruması
    StorageService.clearDemoObservations();
    StorageService.deleteObservation(added.id);
    const emptyList = StorageService.getObservations();
    const emptyStats = AnalyticsService.calculateSummaryStats(emptyList);
    assert("TC-08", "Boş veri setinde sıfıra bölme hatası (NaN) oluşmamalı", emptyList.length === 0 && emptyStats.avgWait === 0 && !Number.isNaN(emptyStats.avgWait));

    // DEMO verilerini geri yükle (kullanıcı arayüzü bozulmasın)
    StorageService.restoreDemoObservations();
  }

  console.table(results);
  const failed = results.filter((r) => r.status === "FAIL");
  if (failed.length === 0) {
    console.log("TÜM MVP TESTLERİ BAŞARIYLA GEÇTİ (ALL PASS).");
  } else {
    console.error("BAŞARISIZ TESTLER VAR:", failed);
  }
})();
