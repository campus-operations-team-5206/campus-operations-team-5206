/**
 * charts.js
 * Harici kütüphane bağımlılığı olmayan HTML5 Canvas çubuk grafik modülü (REQ-06).
 */

const ChartRenderer = (() => {
  function drawBarChart(canvasId, items, options) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    // Arka plan
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);

    if (!items || items.length === 0) {
      ctx.fillStyle = "#64748b";
      ctx.font = "14px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Grafik oluşturmak için yeterli gözlem verisi yok.", width / 2, height / 2);
      return;
    }

    const padding = { top: 28, right: 20, bottom: 44, left: 52 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    const maxVal = Math.max(...items.map((d) => d.value), 10);

    // Y ekseni ve yatay kılavuz çizgileri
    ctx.strokeStyle = "#e2e8f0";
    ctx.fillStyle = "#475569";
    ctx.font = "11px sans-serif";
    ctx.textAlign = "right";

    const steps = 4;
    for (let i = 0; i <= steps; i++) {
      const val = Math.round((maxVal / steps) * i);
      const y = padding.top + chartH - (chartH / steps) * i;

      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(padding.left + chartW, y);
      ctx.stroke();

      ctx.fillText(`${val}s`, padding.left - 8, y + 4);
    }

    // Çubuklar (Bars)
    const slotWidth = chartW / items.length;
    const barWidth = Math.min(44, slotWidth * 0.6);

    items.forEach((item, idx) => {
      const barH = (item.value / maxVal) * chartH;
      const x = padding.left + idx * slotWidth + (slotWidth - barWidth) / 2;
      const y = padding.top + chartH - barH;

      ctx.fillStyle = item.highlight ? "#d97706" : options.barColor || "#2563eb";
      ctx.fillRect(x, y, barWidth, barH);

      // Çubuk üstü değer ve örneklem sayısı (n)
      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 11px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`${item.value}s (n=${item.count})`, x + barWidth / 2, y - 6);

      // X ekseni etiketi
      ctx.fillStyle = "#334155";
      ctx.font = "11px sans-serif";
      ctx.fillText(item.label, x + barWidth / 2, padding.top + chartH + 18);
    });
  }

  return {
    drawBarChart
  };
})();
