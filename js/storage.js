/**
 * storage.js
 * LocalStorage veri yönetimi ve başlangıç DEMO veri seti.
 * REQ-01, REQ-07, REQ-08 ile uyumludur.
 */

const StorageService = (() => {
  const STORAGE_KEY = "campus_ops_5206_observations_v1";
  const INIT_FLAG_KEY = "campus_ops_5206_initialized_v1";

  // Başlangıç simülasyon verileri (Kesinlikle DEMO olarak işaretlenir)
  const INITIAL_DEMO_DATA = [
    {
      id: "demo-1",
      date: "2026-11-10",
      time: "08:50",
      floor: 0,
      waitTime: 420,
      peopleCount: 18,
      sourceType: "DEMO",
      note: "Örnek simülasyon: Sabah ilk ders öncesi zemin kat yoğunluğu"
    },
    {
      id: "demo-2",
      date: "2026-11-10",
      time: "08:55",
      floor: 2,
      waitTime: 390,
      peopleCount: 14,
      sourceType: "DEMO",
      note: "Örnek simülasyon: 2. kat ders değişim saati"
    },
    {
      id: "demo-3",
      date: "2026-11-10",
      time: "10:15",
      floor: 5,
      waitTime: 110,
      peopleCount: 4,
      sourceType: "DEMO",
      note: "Örnek simülasyon: Ara saat tek kat asansörü"
    },
    {
      id: "demo-4",
      date: "2026-11-11",
      time: "12:50",
      floor: 0,
      waitTime: 310,
      peopleCount: 15,
      sourceType: "DEMO",
      note: "Örnek simülasyon: Öğle arası dönüşü"
    },
    {
      id: "demo-5",
      date: "2026-11-11",
      time: "13:55",
      floor: 2,
      waitTime: 260,
      peopleCount: 11,
      sourceType: "DEMO",
      note: "Örnek simülasyon: Öğleden sonra ders başlangıcı"
    },
    {
      id: "demo-6",
      date: "2026-11-11",
      time: "15:20",
      floor: 8,
      waitTime: 95,
      peopleCount: 3,
      sourceType: "DEMO",
      note: "Örnek simülasyon: Sakin saat ölçümü"
    }
  ];

  function getObservations() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        // İlk açılışta demo verisini bir kez yükle
        if (!localStorage.getItem(INIT_FLAG_KEY)) {
          localStorage.setItem(INIT_FLAG_KEY, "true");
          saveObservations(INITIAL_DEMO_DATA);
          return [...INITIAL_DEMO_DATA];
        }
        return [];
      }
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      console.error("LocalStorage okuma hatası:", err);
      return [];
    }
  }

  function saveObservations(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function addObservation(record) {
    const current = getObservations();
    const newRecord = {
      id: "obs-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
      ...record
    };
    current.unshift(newRecord);
    saveObservations(current);
    return newRecord;
  }

  function deleteObservation(id) {
    const current = getObservations();
    const updated = current.filter((item) => item.id !== id);
    saveObservations(updated);
    return updated;
  }

  function clearDemoObservations() {
    const current = getObservations();
    const onlyObserved = current.filter((item) => item.sourceType !== "DEMO");
    saveObservations(onlyObserved);
    return onlyObserved;
  }

  function restoreDemoObservations() {
    const current = getObservations();
    const existingIds = new Set(current.map((item) => item.id));
    const toAdd = INITIAL_DEMO_DATA.filter((d) => !existingIds.has(d.id));
    const merged = [...current, ...toAdd];
    saveObservations(merged);
    return merged;
  }

  return {
    getObservations,
    addObservation,
    deleteObservation,
    clearDemoObservations,
    restoreDemoObservations
  };
})();
