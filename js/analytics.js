/**
 * analytics.js
 * Bekleme süresi istatistikleri, kat bazlı yoğunluk ve saat aralığı analizleri.
 * Sıfıra bölme hatalarına karşı korumalıdır (REQ-04, REQ-05).
 */

const AnalyticsService = (() => {
  const MIN_RELIABLE_SAMPLE = 5;

  // Esenyurt Üniversitesi kampüsündeki 4 asansörün fiziksel kuralı (README.md)
  function getElevatorGroupLabel(floor) {
    return floor % 2 === 0 ? "Çift Kat Asansörü (2 adet)" : "Tek Kat Asansörü (2 adet)";
  }

  // Genel bekleme süresi metrikleri (REQ-04)
  function calculateSummaryStats(records) {
    const count = records.length;
    const observedCount = records.filter((r) => r.sourceType === "OBSERVED").length;
    const demoCount = records.filter((r) => r.sourceType === "DEMO").length;

    if (count === 0) {
      return {
        count: 0,
        observedCount: 0,
        demoCount: 0,
        avgWait: 0,
        minWait: 0,
        maxWait: 0
      };
    }

    let sum = 0;
    let min = records[0].waitTime;
    let max = records[0].waitTime;

    for (const r of records) {
      sum += r.waitTime;
      if (r.waitTime < min) min = r.waitTime;
      if (r.waitTime > max) max = r.waitTime;
    }

    return {
      count,
      observedCount,
      demoCount,
      avgWait: Math.round((sum / count) * 10) / 10,
      minWait: min,
      maxWait: max
    };
  }

  // Kat bazlı yoğunluk ve 0. & 2. kat karşılaştırması (REQ-05)
  function calculateFloorAnalytics(records) {
    const map = new Map();

    for (const r of records) {
      if (!map.has(r.floor)) {
        map.set(r.floor, {
          floor: r.floor,
          count: 0,
          totalWait: 0,
          totalPeople: 0
        });
      }
      const entry = map.get(r.floor);
      entry.count += 1;
      entry.totalWait += r.waitTime;
      entry.totalPeople += r.peopleCount;
    }

    const perFloor = Array.from(map.values())
      .map((item) => ({
        floor: item.floor,
        elevatorGroup: getElevatorGroupLabel(item.floor),
        count: item.count,
        avgWait: Math.round((item.totalWait / item.count) * 10) / 10,
        avgPeople: Math.round((item.totalPeople / item.count) * 10) / 10,
        isReliable: item.count >= MIN_RELIABLE_SAMPLE
      }))
      .sort((a, b) => a.floor - b.floor);

    // 0. Kat vs 2. Kat vs Diğer Katlar karşılaştırması
    const floor0Records = records.filter((r) => r.floor === 0);
    const floor2Records = records.filter((r) => r.floor === 2);
    const otherRecords = records.filter((r) => r.floor !== 0 && r.floor !== 2);

    return {
      perFloor,
      comparison: {
        floor0: calculateSummaryStats(floor0Records),
        floor2: calculateSummaryStats(floor2Records),
        others: calculateSummaryStats(otherRecords)
      },
      minReliableSample: MIN_RELIABLE_SAMPLE
    };
  }

  // Saat aralığına göre gruplama (REQ-06 Grafik 2)
  function calculateHourlyAnalytics(records) {
    const hourMap = new Map();

    for (const r of records) {
      const hourPrefix = (r.time || "00:00").slice(0, 2);
      const slotLabel = `${hourPrefix}:00-${hourPrefix}:59`;

      if (!hourMap.has(slotLabel)) {
        hourMap.set(slotLabel, {
          slot: slotLabel,
          count: 0,
          totalWait: 0
        });
      }
      const entry = hourMap.get(slotLabel);
      entry.count += 1;
      entry.totalWait += r.waitTime;
    }

    return Array.from(hourMap.values())
      .map((item) => ({
        slot: item.slot,
        count: item.count,
        avgWait: Math.round((item.totalWait / item.count) * 10) / 10
      }))
      .sort((a, b) => a.slot.localeCompare(b.slot));
  }

  return {
    getElevatorGroupLabel,
    calculateSummaryStats,
    calculateFloorAnalytics,
    calculateHourlyAnalytics,
    MIN_RELIABLE_SAMPLE
  };
})();
