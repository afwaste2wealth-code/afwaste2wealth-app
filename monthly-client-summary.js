function monthlyClientSummary() {

const materialRecords = JSON.parse(
localStorage.getItem("materialRecords") || "[]"
  );

const legacyClientRecords = JSON.parse(
localStorage.getItem("clientMaterialRecords") || "[]"
  );

const records = [...materialRecords];

const existingIds = new Set(
materialRecords.map(record => String(record.id))
  );

legacyClientRecords.forEach(record => {
    if (!existingIds.has(String(record.id))) {
records.push(record);
    }
  });

const currentYear = new Date().getFullYear();

const years = new Set();

records.forEach(record => {
    if (record.date) {
const year = Number(String(record.date).slice(0, 4));

      if (year >= 2000) {
years.add(year);
      }
    }
  });

years.add(currentYear);

const sortedYears = Array.from(years).sort(
    (a, b) => b - a
  );

  let selectedYear = currentYear;

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

  function calculateYear(year) {

const months = [];

    for (let month = 1; month <= 12; month++) {

const washingTotals = {};
const pelletTotals = {};

records.forEach(record => {

        if (!record.date) return;

const dateString = String(record.date);

const recordYear =
          Number(dateString.slice(0, 4));

const recordMonth =
          Number(dateString.slice(5, 7));

        if (
recordYear !== year ||
recordMonth !== month
        ) {
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
          !!record.client ||
          !!record.customer;

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
service.includes("pellet")
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


  function buildReport(year) {

const months = calculateYear(year);

    let rows = "";

months.forEach(item => {

const washingName =
item.washing
          ? item.washing[0]
          : "—";

const washingKg =
item.washing
          ? item.washing[1].toLocaleString()
          : "—";

const pelletName =
item.pellet
          ? item.pellet[0]
          : "—";

const pelletKg =
item.pellet
          ? item.pellet[1].toLocaleString()
          : "—";

      rows += `
<tr>

<td class="report-cell month-cell">
            ${monthNames[item.month - 1]}
</td>

<td class="report-cell">
            ${washingName}
</td>

<td class="report-cell number-cell">
            ${washingKg}
</td>

<td class="report-cell">
            ${pelletName}
</td>

<td class="report-cell number-cell">
            ${pelletKg}
</td>

</tr>
      `;
    });


    return `
<div class="report-heading">

<h2>
          Monthly Client Performance
</h2>

<p>
          Best washing and pelletizing clients
          for ${year}
</p>

</div>


<div class="table-wrapper">

<table class="performance-table">

<thead>

<tr>

<th>Month</th>

<th>
                Best Washing Client
</th>

<th>
                Washing KG
</th>

<th>
                Best Pelletizing Client
</th>

<th>
                Pelletizing KG
</th>

</tr>

</thead>

<tbody>

            ${rows}

</tbody>

</table>

</div>


<div class="report-note">

<strong>How the report is calculated:</strong>

<br><br>

        Washing is ranked using the client's
        actual gross weight received before washing.

<br><br>

        Pelletizing is ranked using the actual
        pellet weight produced.

</div>
    `;
  }


const modal = document.createElement("div");

modal.id = "monthlyClientSummaryModal";


modal.innerHTML = `

<div class="report-window">


<div class="report-top">

<div>

<h1>
            Reports
</h1>

<div class="report-subtitle">
            A&F Waste2Wealth Solutions
</div>

</div>


<button
          id="closeMonthlySummary"
          class="close-report"
>
          ×
</button>

</div>


<div class="report-controls">


<div class="control-group">

<label>
            Year
</label>

<select id="summaryYear">

            ${sortedYears
              .map(year => `
<option
                  value="${year}"
                  ${year === selectedYear
                    ? "selected"
                    : ""}
>
                  ${year}
</option>
              `)
              .join("")}

</select>

</div>


<div class="control-group">

<label>
            Report
</label>

<select id="reportType">

<option value="clientPerformance">
              Monthly Client Performance
</option>

</select>

</div>


<div class="report-buttons">

<button
            id="printMonthlySummary"
            class="print-button"
>
🖨 Print Report
</button>


<button
            id="downloadMonthlyCSV"
            class="download-button"
>
⬇ Download CSV
</button>

</div>


</div>


<div
        id="reportContent"
        class="report-content"
>
</div>


</div>

  `;


const style = document.createElement("style");


style.textContent = `

    #monthlyClientSummaryModal {

      position: fixed;

      inset: 0;

      z-index: 99999;

      background:
rgba(0,0,0,0.65);

      display: flex;

      justify-content: center;

      align-items: center;

      padding: 20px;

      box-sizing: border-box;

    }


    .report-window {

      background: #ffffff;

      width: 100%;

      max-width: 1100px;

      max-height: 94vh;

      overflow-y: auto;

      border-radius: 16px;

      box-shadow:
        0 15px 50px
rgba(0,0,0,0.3);

      padding: 25px;

      box-sizing: border-box;

    }


    .report-top {

      display: flex;

      justify-content: space-between;

      align-items: flex-start;

      border-bottom:
        1px solid #e1e8e4;

      padding-bottom: 18px;

      margin-bottom: 20px;

    }


    .report-top h1 {

      margin: 0;

      font-size: 26px;

      color: #183c2c;

    }


    .report-subtitle {

      margin-top: 5px;

      color: #718078;

      font-size: 14px;

    }


    .close-report {

      border: none;

      background: #f0f2f1;

      width: 38px;

      height: 38px;

      border-radius: 8px;

      font-size: 24px;

      cursor: pointer;

    }


    .report-controls {

      display: flex;

      align-items: flex-end;

      gap: 15px;

      flex-wrap: wrap;

      background: #f5f8f6;

      padding: 16px;

      border-radius: 12px;

      margin-bottom: 25px;

    }


    .control-group {

      display: flex;

      flex-direction: column;

      gap: 6px;

    }


    .control-group label {

      font-size: 13px;

      font-weight: bold;

      color: #52645b;

    }


    .control-group select {

      min-width: 150px;

      padding: 10px 12px;

      border:
        1px solid #ccd8d1;

      border-radius: 8px;

      background: white;

      font-size: 14px;

    }


    .report-buttons {

      display: flex;

      gap: 10px;

      flex-wrap: wrap;

    }


    .report-buttons button {

      border: none;

      border-radius: 8px;

      padding: 10px 15px;

      font-weight: bold;

      cursor: pointer;

      color: white;

    }


    .print-button {

      background: #2e7d32;

    }


    .download-button {

      background: #1976d2;

    }


    .report-heading {

      margin-bottom: 18px;

    }


    .report-heading h2 {

      margin: 0;

      font-size: 21px;

      color: #183c2c;

    }


    .report-heading p {

      margin: 5px 0 0;

      color: #718078;

      font-size: 13px;

    }


    .table-wrapper {

      width: 100%;

      overflow-x: auto;

      border:
        1px solid #dfe7e2;

      border-radius: 10px;

    }


    .performance-table {

      width: 100%;

      border-collapse: collapse;

      min-width: 750px;

      font-size: 14px;

    }


    .performance-table th {

      background: #e9f4ed;

      color: #244c38;

      padding: 13px 12px;

      text-align: left;

      border-bottom:
        2px solid #cbdacf;

      white-space: nowrap;

    }


    .report-cell {

      padding: 13px 12px;

      border-bottom:
        1px solid #e8eeeb;

    }


    .performance-table tbodytr:nth-child(even) {

      background: #fafcfb;

    }


    .performance-table tbodytr:hover { 

      background: #f1f7f3;

    }


    .month-cell {

      font-weight: bold;

      color: #244c38;

    }


    .number-cell {

      text-align: right;

      font-weight: 600;

    }


    .report-note {

      margin-top: 20px;

      background: #f5f8f6;

      border-left:
        4px solid #2e7d32;

      padding: 14px;

      border-radius: 6px;

      color: #5c6c64;

      font-size: 12px;

      line-height: 1.5;

    }


    @media (max-width: 700px) {

      #monthlyClientSummaryModal {

        padding: 8px;

      }


      .report-window {

        padding: 15px;

        max-height: 96vh;

        border-radius: 12px;

      }


      .report-top h1 {

        font-size: 22px;

      }


      .report-controls {

        align-items: stretch;

        flex-direction: column;

      }


      .control-group select {

        width: 100%;

      }


      .report-buttons {

        width: 100%;

      }


      .report-buttons button {

        flex: 1;

      }

    }

  `;


document.head.appendChild(style);

document.body.appendChild(modal);


const reportContent =
modal.querySelector("#reportContent");


  function renderReport() {

reportContent.innerHTML =
buildReport(selectedYear);

  }


renderReport();


  modal
    .querySelector("#closeMonthlySummary")
    .onclick = function () {

modal.remove();

style.remove();

    };


  modal
    .querySelector("#summaryYear")
    .onchange = function () {

selectedYear =
        Number(this.value);

renderReport();

    };


  modal
    .querySelector("#printMonthlySummary")
    .onclick = function () {

const reportHTML =
reportContent.innerHTML;

const printWindow =
window.open("", "_blank");

      if (!printWindow) {

        alert(
          "Please allow pop-ups in your browser to print the report."
        );

        return;

      }


printWindow.document.write(`

<html>

<head>

<title>
            A&F Monthly Client Performance
            ${selectedYear}
</title>


<style>

            body {

              font-family:
                Arial, sans-serif;

              padding: 30px;

              color: #222;

            }


            h1 {

              font-size: 24px;

              margin-bottom: 5px;

            }


            h2 {

              margin-bottom: 4px;

            }


            .report-heading p {

              color: #666;

            }


            .table-wrapper {

              width: 100%;

            }


            table {

              width: 100%;

              border-collapse: collapse;

              margin-top: 20px;

            }


th {

              background: #e9f4ed;

              font-weight: bold;

            }


th, td {

              border:
                1px solid #bbb;

              padding: 10px;

              text-align: left;

            }


            .number-cell {

              text-align: right;

            }


            .report-note {

              margin-top: 20px;

              padding: 12px;

              border: 1px solid #ccc;

              font-size: 12px;

            }

</style>

</head>


<body>

<h1>
            A&F Waste2Wealth Solutions
</h1>

          ${reportHTML}

</body>

</html>

      `);


printWindow.document.close();

printWindow.focus();


setTimeout(function () {

printWindow.print();

      }, 400);

    };


  modal
    .querySelector("#downloadMonthlyCSV")
    .onclick = function () {

const months =
calculateYear(selectedYear);


      let csv =
        "Month,Best Washing Client,WashingKG,Best Pelletizing Client,Pelletizing KG\n";


months.forEach(item => {

const washingName =
item.washing
            ? item.washing[0]
            : "";

const washingKg =
item.washing
            ? item.washing[1]
            : "";

const pelletName =
item.pellet
            ? item.pellet[0]
            : "";

const pelletKg =
item.pellet
            ? item.pellet[1]
            : "";


        csv +=
          `"${monthNames[item.month - 1]}","${washingName}",${washingKg},"${pelletName}",${pelletKg}\n`;

      });


const blob =
        new Blob(
          [csv],
          {
            type:
              "text/csv;charset=utf-8;"
          }
        );


consturl =
URL.createObjectURL(blob);


const link =
document.createElement("a");


link.href = url;


link.download =
        "A&F_Monthly_Client_Performance_" +
selectedYear +
        ".csv";


document.body.appendChild(link);

link.click();

document.body.removeChild(link);

URL.revokeObjectURL(url);

    };

}
