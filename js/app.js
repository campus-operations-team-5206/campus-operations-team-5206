/**
 * app.js
 * Kullanıcı etkileşimleri, girdi doğrulama, filtreleme ve arayüz senkronizasyonu.
 */

document.addEventListener("DOMContentLoaded", () => {
  // DOM Referansları
  const form = document.getElementById("observationForm");
  const formError = document.getElementById("formError");
  const obsDate = document.getElementById("obsDate");
  const obsTime = document.getElementById("obsTime");
  const obsFloor = document.getElementById("obsFloor");
  const obsWaitTime = document.getElementById("obsWaitTime");
  const obsPeopleCount = document.getElementById("obsPeopleCount");
  const obsSourceType = document.getElementById("obsSourceType");
  const obsNote = document.getElementById("obsNote");

  const loadDemoBtn = document.getElementById("loadDemoBtn");
  const clearDemoBtn = document.getElementById("clearDemoBtn");

  // Filtre referansları
  const filterSource = document.getElementById("filterSource");
  const filterDate = document.getElementById("filterDate");
  const filterFloor = document.getElementById("filterFloor");
  const filterTimeFrom = document.getElementById("filterTimeFrom");
  const filterTimeTo = document.getElementById("filterTimeTo");
  const resetFiltersBtn = document.getElementById("resetFiltersBtn");

  // Kat filtresi seçeneklerini doldur (0 - 13)
  for (let f = 0; f <= 13; f++) {
    const opt = document.createElement("option");
    opt.value = String(f);
    opt.textContent = `${f}. Kat (${f % 2 === 0 ? "Çift" : "Tek"})`;
    filterFloor.appendChild(opt);
  }

  // Varsayılan tarih/saati bugüne ayarla
  const now = new Date();
  obsDate.value = now.toISOString().split("T")[0];
  obsTime.value = now.toTimeString().slice(0, 5);

  function showFormError(msg) {
    formError.textContent = msg;
    formError.classList.remove("hidden");
  }

  function clearFormError() {
    formError.textContent = "";
    formError.classList.add("hidden");
  }

  // Girdi doğrulama (REQ-01)
  function validateInput() {
    if (!obsDate.value) return "Lütfen geçerli bir gözlem tarihi seçin.";
    if (!obsTime.value) return "Lütfen geçerli bir gözlem saati girin.";

    const floorRaw = obsFloor.value.trim();
    const floor = Number(floorRaw);
    if (floorRaw === "" || !Number.isInteger(floor) || floor < 0 || floor > 13) {
      return "Geçersiz kat numarası: Kampüs binası için 0 ile 13 arasında tam sayı girmelisiniz.";
    }

    const waitRaw = obsWaitTime.value.trim();
    const waitTime = Number(waitRaw);
    if (waitRaw === "" || Number.isNaN(waitTime) || waitTime < 0) {
      return "Geçersiz bekleme süresi: Bekleme süresi 0 veya pozitif bir sayı olmalıdır.";
    }

    const peopleRaw = obsPeopleCount.value.trim();
    const peopleCount = Number(peopleRaw);
    if (peopleRaw === "" || !Number.isInteger(peopleCount) || peopleCount < 0) {
      return "Geçersiz kişi sayısı: Bekleyen kişi sayısı 0 veya pozitif tam sayı olmalıdır.";
    }

    return null;
  }

  // Aktif filtrelere göre kayıtları süz (REQ-03)
  function getFilteredRecords(allRecords) {
    return allRecords.filter((item) => {
      if (filterSource.value !== "ALL" && item.sourceType !== filterSource.value) {
        return false;
      }
      if (filterDate.value && item.date !== filterDate.value) {
        return false;
      }
      if (filterFloor.value !== "ALL" && item.floor !== Number(filterFloor.value)) {
        return false;
      }
      if (filterTimeFrom.value && item.time < filterTimeFrom.value) {
        return false;
      }
      if (filterTimeTo.value && item.time > filterTimeTo.value) {
        return false;
      }
      return true;
    });
  }

  // Üst veri kaynağı durum kutusunu güncelle (REQ-08)
  function renderSourceHeader(allRecords) {
    const box = document.getElementById("sourceStatusBox");
    const observedCount = allRecords.filter((r) => r.sourceType === "OBSERVED").length;
    const demoCount = allRecords.filter((r) => r.sourceType === "DEMO").length;

    let statusText = "Henüz kayıt bulunmuyor.";
    if (observedCount > 0 && demoCount > 0) {
      statusText = `Karma Veri Seti (${observedCount} OBSERVED + ${demoCount} DEMO)`;
    } else if (observedCount > 0) {
      statusText = `Saha Gözlem Verisi (${observedCount} OBSERVED)`;
    } else if (demoCount > 0) {
      statusText = `Yalnızca Simülasyon Verisi (${demoCount} DEMO — Doğrulanmış Kanıt Değil)`;
    }

    box.innerHTML = `
      <div style="font-weight:700; color:#f8fafc; margin-bottom:2px;">Veri Kaynağı Durumu</div>
      <div style="color:#fde68a;">${statusText}</div>
    `;
  }

  // KPI kartlarını güncelle (REQ-04)
  function renderSummaryKPIs(filteredRecords) {
    const stats = AnalyticsService.calculateSummaryStats(filteredRecords);
    document.getElementById("kpiTotal").textContent = stats.count;
    document.getElementById("kpiBreakdown").textContent = `${stats.observedCount} OBSERVED / ${stats.demoCount} DEMO`;
    document.getElementById("kpiAvg").textContent = `${stats.avgWait} sn`;
    document.getElementById("kpiAvgMin").textContent = `(${(stats.avgWait / 60).toFixed(1)} dk)`;
    document.getElementById("kpiMin").textContent = `${stats.minWait} sn`;
    document.getElementById("kpiMax").textContent = `${stats.maxWait} sn`;

    const isFiltered =
      filterSource.value !== "ALL" ||
      filterDate.value !== "" ||
      filterFloor.value !== "ALL" ||
      filterTimeFrom.value !== "" ||
      filterTimeTo.value !== "";

    document.getElementById("activeScopeLabel").textContent = isFiltered
      ? "Filtrelenmiş Görünüm"
      : "Tüm Kayıtlar";
  }

  // Grafikleri çiz (REQ-06)
  function renderCharts(filteredRecords) {
    const floorData = AnalyticsService.calculateFloorAnalytics(filteredRecords).perFloor;
    const hourlyData = AnalyticsService.calculateHourlyAnalytics(filteredRecords);
    const hasDemo = filteredRecords.some((r) => r.sourceType === "DEMO");

    document.getElementById("floorChartMeta").textContent = `n = ${filteredRecords.length}`;
    document.getElementById("hourChartMeta").textContent = `n = ${filteredRecords.length}`;

    document.getElementById("chartDataDisclaimer").innerHTML = hasDemo
      ? `<strong>Uyarı:</strong> Grafiklerde <strong>DEMO (örnek)</strong> veriler yer almaktadır. Kesin saha kanıtı için filtrelerden "Sadece OBSERVED" seçiniz.`
      : `Grafikler yalnızca <strong>OBSERVED</strong> (veya boş) veri seti üzerinden üretilmiştir (n = ${filteredRecords.length}).`;

    ChartRenderer.drawBarChart(
      "floorChart",
      floorData.map((f) => ({
        label: `${f.floor}. Kat`,
        value: f.avgWait,
        count: f.count,
        highlight: f.floor === 0 || f.floor === 2
      })),
      { barColor: "#2563eb" }
    );

    ChartRenderer.drawBarChart(
      "hourChart",
      hourlyData.map((h) => ({
        label: h.slot.slice(0, 5),
        value: h.avgWait,
        count: h.count,
        highlight: false
      })),
      { barColor: "#0d9488" }
    );
  }

  // Kat bazlı yoğunluk ve 0. & 2. kat karşılaştırması (REQ-05)
  function renderFloorComparison(filteredRecords) {
    const result = AnalyticsService.calculateFloorAnalytics(filteredRecords);
    const { floor0, floor2, others } = result.comparison;
    const minSample = result.minReliableSample;

    const compContainer = document.getElementById("floorComparisonCards");
    const cards = [
      { title: "0. Kat (Zemin — Çift Asansör)", data: floor0, highlight: true },
      { title: "2. Kat (Çift Asansör)", data: floor2, highlight: true },
      { title: "Diğer Tüm Katlar (1, 3–13)", data: others, highlight: false }
    ];

    compContainer.innerHTML = cards
      .map((c) => {
        const reliabilityNote =
          c.data.count === 0
            ? "Gözlem kaydı bulunmuyor."
            : c.data.count < minSample
            ? `Sınırlı veri (n=${c.data.count} < ${minSample}) — henüz kanıtlanmadı.`
            : `Yeterli örneklem (n=${c.data.count}).`;

        return `
          <div class="comp-card ${c.highlight ? "highlight" : ""}">
            <h4>${c.title}</h4>
            <div class="comp-metric">${c.data.avgWait} sn <span style="font-size:0.85rem; font-weight:400;">ort.</span></div>
            <div class="comp-note">Gözlem Sayısı: <strong>${c.data.count}</strong> | Maks: ${c.data.maxWait} sn</div>
            <div class="comp-note" style="margin-top:4px;">${reliabilityNote}</div>
          </div>
        `;
      })
      .join("");

    const tbody = document.getElementById("floorStatsBody");
    if (result.perFloor.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" class="empty-row">Kat bazlı analiz için kayıt bulunamadı.</td></tr>`;
      return;
    }

    tbody.innerHTML = result.perFloor
      .map((row) => {
        const floorLabel =
          row.floor === 0 || row.floor === 2
            ? `<strong>${row.floor}. Kat</strong> (Hipotez Katı)`
            : `${row.floor}. Kat`;

        const reliabilityBadge = row.isReliable
          ? `<span class="reliability-ok">Yeterli Örneklem (n ≥ ${minSample})</span>`
          : `<span class="reliability-low">Sınırlı Güvenilirlik (n = ${row.count} &lt; ${minSample})</span>`;

        return `
          <tr>
            <td>${floorLabel}</td>
            <td>${row.elevatorGroup}</td>
            <td>${row.count}</td>
            <td><strong>${row.avgWait} sn</strong> (${(row.avgWait / 60).toFixed(1)} dk)</td>
            <td>${row.avgPeople} kişi</td>
            <td>${reliabilityBadge}</td>
          </tr>
        `;
      })
      .join("");
  }

  // Gözlem kayıtları tablosunu güncelle (REQ-02, REQ-07)
  function renderObservationsTable(filteredRecords) {
    const tbody = document.getElementById("observationsTableBody");
    document.getElementById("filteredCountBadge").textContent = `${filteredRecords.length} kayıt listeleniyor`;

    if (filteredRecords.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" class="empty-row">Seçilen kriterlere uygun gözlem kaydı bulunamadı.</td></tr>`;
      return;
    }

    tbody.innerHTML = filteredRecords
      .map((item) => {
        const badgeClass = item.sourceType === "OBSERVED" ? "badge-observed" : "badge-demo";
        const elevatorType = item.floor % 2 === 0 ? "Çift" : "Tek";
        const safeNote = item.note ? escapeHtml(item.note) : "-";

        return `
          <tr>
            <td>${escapeHtml(item.date)}</td>
            <td>${escapeHtml(item.time)}</td>
            <td><strong>${item.floor}. Kat</strong> (${elevatorType})</td>
            <td>${item.waitTime} sn</td>
            <td>${item.peopleCount}</td>
            <td><span class="badge-source ${badgeClass}">${item.sourceType}</span></td>
            <td>${safeNote}</td>
            <td>
              <button type="button" class="btn-delete-row" data-id="${item.id}">Sil</button>
            </td>
          </tr>
        `;
      })
      .join("");
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  // Tüm Dashboard bileşenlerini yeniden çiz
  function refreshDashboard() {
    const allRecords = StorageService.getObservations();
    const filteredRecords = getFilteredRecords(allRecords);

    renderSourceHeader(allRecords);
    renderSummaryKPIs(filteredRecords);
    renderCharts(filteredRecords);
    renderFloorComparison(filteredRecords);
    renderObservationsTable(filteredRecords);
  }

  // Form gönderimi
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearFormError();

    const errorMsg = validateInput();
    if (errorMsg) {
      showFormError(errorMsg);
      return;
    }

    StorageService.addObservation({
      date: obsDate.value,
      time: obsTime.value,
      floor: Number(obsFloor.value),
      waitTime: Number(obsWaitTime.value),
      peopleCount: Number(obsPeopleCount.value),
      sourceType: obsSourceType.value,
      note: obsNote.value.trim()
    });

    obsWaitTime.value = "";
    obsPeopleCount.value = "";
    obsNote.value = "";
    refreshDashboard();
  });

  // Tekil kayıt silme (Event Delegation)
  document.getElementById("observationsTableBody").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete-row")) {
      const id = e.target.getAttribute("data-id");
      StorageService.deleteObservation(id);
      refreshDashboard();
    }
  });

  // Demo verileri toplu sil / geri yükle
  clearDemoBtn.addEventListener("click", () => {
    StorageService.clearDemoObservations();
    refreshDashboard();
  });

  loadDemoBtn.addEventListener("click", () => {
    StorageService.restoreDemoObservations();
    refreshDashboard();
  });

  // Filtre olay dinleyicileri
  [filterSource, filterDate, filterFloor, filterTimeFrom, filterTimeTo].forEach((el) => {
    el.addEventListener("change", refreshDashboard);
  });

  resetFiltersBtn.addEventListener("click", () => {
    filterSource.value = "ALL";
    filterDate.value = "";
    filterFloor.value = "ALL";
    filterTimeFrom.value = "";
    filterTimeTo.value = "";
    refreshDashboard();
  });

  // İlk render
  refreshDashboard();
});
