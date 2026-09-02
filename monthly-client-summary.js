function monthlyClientSummary() {
const materialRecords = JSON.parse(
localStorage.getItem("materialRecords") || "[]"
  );

const legacyClientRecords = JSON.parse(
localStorage.getItem("clientMaterialRecords") || "[]"
  );

const records = [...materialRecords];
cons texistingIds = new Set(
materialRecords.map(record => String(record.id))
  );

legacyClientRecords.forEach(record => {
    if (!existingIds.has(String(record.id))) {
records.push(record);
    }
  });

const years = new Set();
const currentYear = new Date().getFullYear();

records.forEach(record => {
    if (record.date) {
const year = Number(String(record.date).slice(0, 4));
      if (year >= 2000) {
years.add(year);
      }
    }
  });

years.add(currentYear);

const sortedYears = Array.from(years).sort((a, b) => b - a);

  let selectedYear = currentYear;

  function calculateYear(year) {
const months = [];

    for (let month = 1; month <= 12; month++) {
const washingTotals = {};
const pelletTotals = {};

records.forEach(record => {
        if (!record.date) return;

const dateString = String(record.date);
const recordYear = Number(dateString.slice(0, 4));
const recordMonth = Number(dateString.slice(5, 7));

        if (recordYear !== year || recordMonth !== month) {
          return;
        }

const name =
record.clientName ||
record.customerName ||
record.client ||
record.customer ||
          "";

        if (!name) return;

const source = String(
record.materialSource ||
record.source ||
          ""
        ).toLowerCase();

const service = String(
record.clientService ||
record.service ||
record.serviceType ||
          ""
        ).toLowerCase();

const isClient =
          source === "client" ||
          !!record.clientName ||
          !!record.customerName ||
          !!record.client;

        if (!isClient) return;

const gross = Number(
record.washingGrossWeight ??
record.grossWeight ??
record.receivedWeight ??
record.weight ??
          0
        );

const pellets = Number(
record.actualPelletWeight ??
record.pelletWeight ??
record.pelletsProduced ??
record.pelletKg ??
          0
        );

        if (
service.includes("washing") ||
service.includes("wash")
        ) {
          if (gross > 0) {
washingTotals[name] =
              (washingTotals[name] || 0) + gross;
          }
        }

        if (
service.includes("pellet") ||
service.includes("washing_pelletizing")
        ) {
          if (pellets > 0) {
pelletTotals[name] =
              (pelletTotals[name] || 0) + pellets;
          }
        }
      });

const bestWashing =
Object.entries(washingTotals)
          .sort((a, b) => b[1] - a[1])[0] || null;

const bestPellet =
Object.entries(pelletTotals)
          .sort((a, b) => b[1] - a[1])[0] || null;

months.push({
        month: month,
        washing: bestWashing,
        pellet: bestPellet
      });
    }

    return months;
  }

  function render() {
const months = calculateYear(selectedYear);

const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    let rows = "";

months.forEach(item => {
const washing = item.washing
        ? item.washing[0] +
          " (" +
item.washing[1].toLocaleString() +
          " kg)"
        : "—";

const pellet = item.pellet
        ? item.pellet[0] +
          " (" +
item.pellet[1].toLocaleString() +
          " kg)"
        : "—";

      rows += `
<tr>
<td style="padding:11px;border-bottom:1px solid #edf2ef">
<b>${monthNames[item.month - 1]}</b>
</td>
<td style="padding:11px;border-bottom:1px solid #edf2ef">
            ${washing}
</td>
<td style="padding:11px;border-bottom:1px solid #edf2ef">
            ${pellet}
</td>
</tr>
      `;
    });

const yearOptions = sortedYears
      .map(year => `
<option value="${year}" ${
          year === selectedYear ? "selected" : ""
        }>
          ${year}
</option>
      `)
      .join("");

const modal = document.createElement("div");

modal.id = "monthlyClientSummaryModal";

modal.style.cssText = `
position:fixed;
      inset:0;
background:rgba(0,0,0,.55);
      z-index:9999;
display:flex;
align-items:center;
justify-content:center;
      padding:15px;
    `;

modal.innerHTML = `
<div style="
        background:#fff;
        width:100%;
        max-width:900px;
        max-height:90vh;
overflow:auto;
        border-radius:14px;
        padding:20px;
        box-shadow:0 10px 40px rgba(0,0,0,.25);
      ">

<div style="
display:flex;
justify-content:space-between;
align-items:center;
          gap:10px;
          margin-bottom:18px;
        ">

<div>
<h2 style="margin:0">
              Monthly Client Performance
</h2>

<div style="
              color:#6b7d75;
              font-size:13px;
              margin-top:5px;
            ">
              Best client by monthly washing and pelletizing volume
</div>
</div>

<button id="closeMonthlySummary"
            style="
              border:0;
              background:#eee;
              border-radius:8px;
              padding:8px 12px;
cursor:pointer;
              font-size:18px;
            ">
            ×
</button>

</div>

<div style="
display:flex;
align-items:center;
          gap:10px;
          margin-bottom:18px;
        ">
<label><b>Year:</b></label>

<select id="summaryYear"
            style="
              padding:9px 12px;
              border:1px solid #ccd9d2;
              border-radius:8px;
              font-size:14px;
            ">
            ${yearOptions}
</select>
</div>

<div style="overflow-x:auto">

<table style="
            width:100%;
border-collapse:collapse;
            font-size:14px;
          ">

<thead>
<tr style="background:#eef8f2">
<th style="padding:11px;text-align:left">
                  Month
</th>

<th style="padding:11px;text-align:left">
                  Best Washing Client
</th>

<th style="padding:11px;text-align:left">
                  Best Pelletizing Client
</th>
</tr>
</thead>

<tbody>
              ${rows}
</tbody>

</table>

</div>

<div style="
          margin-top:18px;
          padding:12px;
          background:#f5f8f6;
          border-radius:8px;
          font-size:12px;
          color:#5f7069;
        ">
          Washing is ranked using the client's actual gross
          weight received before washing. Pelletizing is ranked
          using the actual pellet weight produced.
</div>

</div>
    `;

document.body.appendChild(modal);

    document
      .getElementById("closeMonthlySummary")
      .onclick = function () {
modal.remove();
      };

    document
      .getElementById("summaryYear")
      .onchange = function () {
selectedYear = Number(this.value);
modal.remove();
        render();
      };
  }

  render();
}
