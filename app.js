function showMessage(name) { 
  if (name === "Record Material In") {
recordMaterialIn();
    return;
  }
  if (name == "Record Production") {
    recordProduction();
    return;
  }
  if (name === "Reports") {
    monthlyClientSummary();
    return;
  }
if (name === "Material & Production") { 
  viewMaterialRecords();
  return;
}
  alert(
    name +
      " module selected. This prototype is ready to be connected to the A&F data and backend."
  );
} 
  
 
/* =========================================================
   RECORD MATERIAL IN
   ========================================================= */

function recordMaterialIn() {
const modal = document.createElement("div");

modal.style.cssText = `
position:fixed;
    inset:0;
background:rgba(0,0,0,.55);
display:flex;
align-items:center;
justify-content:center;
    z-index:9999;
font-family:Arial,sans-serif;
  `;

modal.innerHTML = `
<div style="
background:white;
      width:560px;
      max-width:94%;
      max-height:92vh;
overflow:auto;
      border-radius:14px;
      padding:24px;
      box-shadow:0 10px 40px rgba(0,0,0,.3);
    ">

<h2 style="margin-top:0;color:#0b5d3b">
        Record Material In
</h2>

<label>Material Source</label>
<select id="materialSource"
        style="width:100%;padding:10px;margin:6px 0 14px">
<option value="company">A&F / Company Material</option>
<option value="client">Client Material</option>
</select>

<div id="clientSection" style="display:none">

<label>Client Name</label>
<input id="clientName" type="text"
          placeholder="Client name"
          style="width:100%;padding:10px;margin:6px 0 14px">

<label>Client Phone</label>
<input id="clientPhone" type="text"
          placeholder="Phone number"
          style="width:100%;padding:10px;margin:6px 0 14px">

<label>Client Address</label>
<input id="clientAddress" type="text"
          placeholder="Client address"
          style="width:100%;padding:10px;margin:6px 0 14px">

<label>Client Service</label>
<select id="clientService"
          style="width:100%;padding:10px;margin:6px 0 14px">
<option value="washing">Washing Only</option>
<option value="washing_pelletizing">
            Washing + Pelletizing
</option>
</select>

</div>

<label>Date</label>
<input id="materialDate" type="date"
        value="${new Date().toISOString().split("T")[0]}"
        style="width:100%;padding:10px;margin:6px 0 14px">

<label>Material Type</label>
<select id="materialType"
        style="width:100%;padding:10px;margin:6px 0 14px">
<option>HDPE</option>
<option>LDPE</option>
<option>PP</option>
<option>Mixed Plastic</option>
</select>

<label>Gross Weight Received (kg)</label>
<input id="grossWeight" type="number"
        min="0"
        placeholder="e.g. 3000"
        style="width:100%;padding:10px;margin:6px 0 14px">

<div id="companySection">

<label>Dirt / Waste (%)</label>
<input id="dirtPercent" type="number"
          min="0"
          max="100"
          value="0"
          style="width:100%;padding:10px;margin:6px 0 14px">

<label>Purchase Price per kg (UGX)</label>
<input id="pricePerKg" type="number"
          min="0"
          placeholder="Existing company material rate"
          style="width:100%;padding:10px;margin:6px 0 14px">

<label>Transport Cost (UGX)</label>
<input id="transportCost" type="number"
          min="0"
          value="0"
          style="width:100%;padding:10px;margin:6px 0 14px">

</div>

<div id="pelletSection" style="display:none">

<label>Actual Pellets Produced / Received (kg)</label>
<input id="pelletWeight" type="number"
          min="0"
          placeholder="Actual pellets after pelletizing"
          style="width:100%;padding:10px;margin:6px 0 14px">

<p style="
          background:#fff7e6;
          padding:10px;
          border-radius:7px;
          font-size:13px;
          color:#765400;
        ">
          Pelletizing billing will use the actual pellet weight,
          not the gross material weight.
</p>

</div>

<div id="companySummary" style="
        background:#eef8f2;
        padding:15px;
        border-radius:8px;
        margin:15px 0;
      ">
<b>Net Usable Weight:</b>
<span id="netWeight">0 kg</span><br><br>

<b>Material Cost:</b>
<span id="materialCost">UGX 0</span><br><br>

<b>Total Cost:</b>
<span id="totalCost">UGX 0</span>
</div>

<div style="display:flex;gap:10px">

<button id="saveMaterial"
          style="
            flex:1;
            padding:12px;
            border:0;
            border-radius:8px;
            background:#0b5d3b;
color:white;
cursor:pointer;
font-weight:bold;
          ">
          Save Material
</button>

<button id="cancelMaterial"
          style="
            flex:1;
            padding:12px;
            border:1px solid #ccc;
            border-radius:8px;
background:white;
cursor:pointer;
          ">
          Cancel
</button>

</div>

</div>
  `;

document.body.appendChild(modal);

const source = modal.querySelector("#materialSource");
const clientSection = modal.querySelector("#clientSection");
const clientService = modal.querySelector("#clientService");
const companySection = modal.querySelector("#companySection");
const pelletSection = modal.querySelector("#pelletSection");
const companySummary = modal.querySelector("#companySummary");

const gross = modal.querySelector("#grossWeight");
const dirt = modal.querySelector("#dirtPercent");
const price = modal.querySelector("#pricePerKg");
const transport = modal.querySelector("#transportCost");
const pelletWeight = modal.querySelector("#pelletWeight");

  function updateForm() {

const isClient = source.value === "client";

clientSection.style.display = isClient ? "block" : "none";

companySection.style.display = isClient ? "none" : "block";

companySummary.style.display = isClient ? "none" : "block";

    if (isClient) {
pelletSection.style.display =
clientService.value === "washing_pelletizing"
          ? "block"
          : "none";
    } else {
pelletSection.style.display = "none";
    }
  }

  function calculateCompanyMaterial() {

const g = Number(gross.value) || 0;
const d = Number(dirt.value) || 0;
const p = Number(price.value) || 0;
const t = Number(transport.value) || 0;

const net = g * (1 - d / 100);
const materialCost = net * p;
const total = materialCost + t;

modal.querySelector("#netWeight").textContent =
net.toLocaleString() + " kg";

modal.querySelector("#materialCost").textContent =
      "UGX " + materialCost.toLocaleString();

modal.querySelector("#totalCost").textContent =
      "UGX " + total.toLocaleString();
  }

source.addEventListener("change", updateForm);
clientService.addEventListener("change", updateForm);

  [gross, dirt, price, transport].forEach(input => {
input.addEventListener("input", calculateCompanyMaterial);
  });

modal.querySelector("#cancelMaterial").onclick = () => {
modal.remove();
  };

modal.querySelector("#saveMaterial").onclick = () => {

const isClient = source.value === "client";

const clientName =
modal.querySelector("#clientName").value.trim();

const clientPhone =
modal.querySelector("#clientPhone").value.trim();

const clientAddress =
modal.querySelector("#clientAddress").value.trim();

const grossKg = Number(gross.value) || 0;

    if (grossKg<= 0) {
      alert("Please enter the gross weight received.");
      return;
    }

    if (isClient&& !clientName) {
      alert("Please enter the client name.");
      return;
    }

    let actualPelletKg = 0;

    if (
isClient&&
clientService.value === "washing_pelletizing"
    ) {
actualPelletKg = Number(pelletWeight.value) || 0;

      if (actualPelletKg<= 0) {
        alert("Please enter the actual pellet weight received.");
        return;
      }
    }

const dirtPercentValue =
      Number(dirt.value) || 0;

const netKg =
grossKg * (1 - dirtPercentValue / 100);

const record = {

      id: Date.now(),

      date:
modal.querySelector("#materialDate").value ||
        new Date().toISOString().split("T")[0],

materialSource:
isClient ? "client" : "company",

materialType:
modal.querySelector("#materialType").value,

      /* CLIENT INFORMATION */
clientName: isClient ? clientName : "",
clientPhone: isClient ? clientPhone : "",
clientAddress: isClient ? clientAddress : "",

      /* CLIENT SERVICE */
clientService:
isClient ? clientService.value : "",

      /*
       * WASHING BILLING BASIS
       * Always gross weight received from client.
       */
grossWeight: grossKg,

washingGrossWeight:
isClient ? grossKg : 0,

      /*
       * PELLETIZING BILLING BASIS
       * Actual pellets after pelletizing.
       */
pelletWeight:
isClient ? actualPelletKg : 0,

actualPelletWeight:
isClient ? actualPelletKg : 0,

      /* COMPANY MATERIAL DATA */
dirtPercent:
isClient ? 0 : dirtPercentValue,

netWeight:
isClient ? grossKg : netKg,

pricePerKg:
isClient ? 0 : Number(price.value) || 0,

transportCost:
isClient ? 0 : Number(transport.value) || 0,

totalCost:
isClient
          ? 0
          : (
netKg * (Number(price.value) || 0)
            ) +
            (Number(transport.value) || 0)
    };

    /*
     * SAVE ALL MATERIAL RECORDS
     */
const records = JSON.parse(
localStorage.getItem("materialRecords") || "[]"
    );

records.push(record);

localStorage.setItem(
      "materialRecords",
JSON.stringify(records)
    );

    /*
     * ALSO SAVE CLIENT RECORDS SEPARATELY.
     * This makes Best Client calculations easy.
     */
    if (isClient) {

const clientRecords = JSON.parse(
localStorage.getItem("clientMaterialRecords") || "[]"
      );

clientRecords.push(record);

localStorage.setItem(
        "clientMaterialRecords",
JSON.stringify(clientRecords)
      );
    }

modal.remove();

    if (isClient) {

      let message =
        "Client material received successfully!\n\n" +
        "Client: " + clientName + "\n" +
        "Gross received: " +
grossKg.toLocaleString() + " kg\n" +
        "Service: " +
        (
clientService.value === "washing"
            ? "Washing Only"
            : "Washing + Pelletizing"
        );

      if (
clientService.value === "washing_pelletizing"
      ) {
        message +=
          "\nActual pellets: " +
actualPelletKg.toLocaleString() +
          " kg";
      }

      alert(message);

    } else {

      alert(
        "Company material received successfully!\n\n" +
        "Net usable weight: " +
netKg.toLocaleString() +
        " kg"
      );
    }

    /*
     * Refresh Best Client information immediately.
     */
    if (typeof updateClientPerformance === "function") {
updateClientPerformance();
    }
  };

updateForm();
calculateCompanyMaterial();
}



/* =========================================================
   BEST CLIENT PERFORMANCE
   ========================================================= */

function updateClientPerformance() {

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

const washingTotals = {};
const pelletTotals = {};

records.forEach(record => {

const name =
record.clientName ||
record.customerName ||
record.client ||
record.customer ||
      "";

    if (!name) return;

const source =
record.materialSource ||
record.source ||
      "";

const service =
      String(
record.clientService ||
record.service ||
record.serviceType ||
        ""
      ).toLowerCase();

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

const isClient =
      source === "client" ||
      source === "Client" ||
      !!record.clientName ||
      !!record.customerName ||
      !!record.client;

    if (!isClient) return;

    /* BEST WASHING CLIENT */
    if (
service.includes("washing") ||
service.includes("wash") ||
service.includes("washing_pelletizing")
    ) {
      if (gross > 0) {
washingTotals[name] =
          (washingTotals[name] || 0) + gross;
      }
    }

    /* BEST PELLETIZING CLIENT */
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

const bestWashingClient =
Object.entries(washingTotals)
      .sort((a, b) => b[1] - a[1])[0] || null;

const bestPelletClient =
Object.entries(pelletTotals)
      .sort((a, b) => b[1] - a[1])[0] || null;

const performance = {
bestWashingClient: bestWashingClient
      ? {
          name: bestWashingClient[0],
          kg: bestWashingClient[1]
        }
      : null,

bestPelletClient: bestPelletClient
      ? {
          name: bestPelletClient[0],
          kg: bestPelletClient[1]
        }
      : null
  };

localStorage.setItem(
    "clientPerformance",
JSON.stringify(performance)
  );

const washingElement =
document.getElementById("bestWashingClient");

const pelletElement =
document.getElementById("bestPelletClient");

  if (washingElement) {
washingElement.textContent = bestWashingClient
      ? bestWashingClient[0] +
        " — " +
bestWashingClient[1].toLocaleString() +
        " kg"
      : "-";
  }

  if (pelletElement) {
pelletElement.textContent = bestPelletClient
      ? bestPelletClient[0] +
        " — " +
bestPelletClient[1].toLocaleString() +
        " kg"
      : "-";
  }
}


/* =========================================================
   RUN DASHBOARD UPDATES WHEN PAGE LOADS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

if (typeof updateDashboardMaterialTotals === "function") {
  updateDashboardMaterialTotals(
    );
}
  updateClientPerformance();

});
/* =========================================================
   VIEW MATERIAL RECORDS
   ========================================================= */

function viewMaterialRecords() {

const records = JSON.parse(
localStorage.getItem("materialRecords") || "[]"
  );

const modal = document.createElement("div");

modal.style.cssText = `
position:fixed;
    inset:0;
background:rgba(0,0,0,.55);
display:flex;
align-items:center;
justify-content:center;
    z-index:9999;
font-family:Arial,sans-serif;
  `;

  let rows = "";

  if (records.length === 0) {
    rows = `
<tr>
<td colspan="8" style="text-align:center;padding:25px">
          No material records found.
</td>
</tr>
    `;
  } else {

records.slice().reverse().forEach(record => {

const source =
record.materialSource === "client"
          ? "Client"
          : "A&F / Company";

const service =
record.clientService === "washing"
          ? "Washing Only"
          : record.clientService === "washing_pelletizing"
          ? "Washing + Pelletizing"
          : "Company Material";

      rows += `
<tr>
<td>${record.date || "-"}</td>

<td>${source}</td>

<td>
            ${
record.clientName ||
record.materialType ||
              "-"
            }
</td>

<td>
            ${Number(record.grossWeight || 0).toLocaleString()} kg
</td>

<td>
            ${Number(record.netWeight || 0).toLocaleString()} kg
</td>

<td>${service}</td>

<td>
            ${
              Number(
record.actualPelletWeight ||
record.pelletWeight ||
                0
              ).toLocaleString()
            } kg
</td>

<td>
<button
onclick="editMaterialRecord(${record.id})"
              style="
                padding:7px 12px;
                border:0;
                border-radius:6px;
                background:#0b5d3b;
color:white;
cursor:pointer;
              "
>
✏ Edit
</button>
<button
onclick="deleteMaterialRecord(${record.id})"
  style="
    padding:7px 12px;
    border:0;
    border-radius:6px;
    background:#b42318;
color:white;
cursor:pointer;
    margin-left:5px;
  "
>
🗑 Delete
</button>
</td>
</tr>
      `;
    });
  }

modal.innerHTML = `
<div style="
background:white;
      width:1100px;
      max-width:96%;
      max-height:92vh;
overflow:auto;
      border-radius:14px;
      padding:22px;
      box-shadow:0 10px 40px rgba(0,0,0,.3);
    ">

<div style="
display:flex;
justify-content:space-between;
align-items:center;
        margin-bottom:15px;
      ">

<h2 style="
          margin:0;
          color:#0b5d3b;
        ">
          Material Records
</h2>

<button id="closeMaterialRecords"
          style="
            padding:8px 14px;
            border:1px solid #ccc;
            border-radius:7px;
background:white;
cursor:pointer;
          "
>
✕ Close
</button>

</div>

<div style="overflow:auto">

<table style="
          width:100%;
border-collapse:collapse;
          font-size:13px;
        ">

<thead>
<tr style="background:#eef8f2">

<th style="padding:10px;text-align:left">
                Date
</th>

<th style="padding:10px;text-align:left">
                Source
</th>

<th style="padding:10px;text-align:left">
                Client / Material
</th>

<th style="padding:10px;text-align:left">
                Gross kg
</th>

<th style="padding:10px;text-align:left">
                Net kg
</th>

<th style="padding:10px;text-align:left">
                Service
</th>

<th style="padding:10px;text-align:left">
                Pellets kg
</th>

<th style="padding:10px;text-align:left">
                Action
</th>

</tr>
</thead>

<tbody>
            ${rows}
</tbody>

</table>

</div>

</div>
  `;

document.body.appendChild(modal);

modal.querySelector("#closeMaterialRecords").onclick = () => {
modal.remove();
  };
}
/*============================================================
   PRODUCTION RECORDS   
 =============================================================*/
function managePoleStandardWeights() {

constsavedWeights = JSON.parse(
localStorage.getItem("poleStandardWeights") || "{}"
  );

const modal = document.createElement("div");

modal.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    font-family: Arial, sans-serif;
  `;

modal.innerHTML = `
<div style="
background:white;
      width:95%;
      max-width:650px;
      max-height:90vh;
overflow:auto;
      padding:24px;
      border-radius:12px;
    ">

<h2 style="margin-top:0;">
        Pole Standard Weights
</h2>

<p>
        Director sets the approved standard weight
        for one pole in each category.
</p>

<label>4"x4"x7ft Square - KG per Pole</label>
<input
        id="weight4X4X7Square"
        type="number"
        min="0"
        step="0.01"
        value="${savedWeights.pole4X4X7Square ?? ""}"
>

<br><br>

<label>3"x3"x6ft Square - KG per Pole</label>
<input
        id="weight3X3X6Square"
        type="number"
        min="0"
        step="0.01"
        value="${savedWeights.pole3X3X6Square ?? ""}"
>

<br><br>

<label>4"x7ft Round - KG per Pole</label>
<input
        id="weight4x7Round"
        type="number"
        min="0"
        step="0.01"
        value="${savedWeights.pole4x7Round ?? ""}"
>

<br><br>

<label>3"x3"x2ft Square - KG per Pole</label>
<input
        id="weight3X3X2Square"
        type="number"
        min="0"
        step="0.01"
        value="${savedWeights.pole3X3X2Square ?? ""}"
>

<br><br>

<label>4"x4"x2ft Square - KG per Pole</label>
<input
        id="weight4x4X2Square"
        type="number"
        min="0"
        step="0.01"
        value="${savedWeights.pole4x4X2Square ?? ""}"
>

<br><br>

<label>4"x2ft Round - KG per Pole</label>
<input
        id="weight4x2Round"
        type="number"
        min="0"
        step="0.01"
        value="${savedWeights.pole4x2Round ?? ""}"
>

<br><br>

<button id="savePoleWeightsBtn" type="button">
        Save Standard Weights
</button>

<button id="closePoleWeightsBtn" type="button">
        Close
</button>

</div>
  `;

document.body.appendChild(modal);

document.getElementById("closePoleWeightsBtn").onclick = function() {
modal.remove();
  };

document.getElementById("savePoleWeightsBtn").onclick = function() {

const weights = {
      pole4X4X7Square:
        Number(document.getElementById("weight4X4X7Square").value) || 0,

      pole3X3X6Square:
        Number(document.getElementById("weight3X3X6Square").value) || 0,

      pole4x7Round:
        Number(document.getElementById("weight4x7Round").value) || 0,

      pole3X3X2Square:
        Number(document.getElementById("weight3X3X2Square").value) || 0,

      pole4x4X2Square:
        Number(document.getElementById("weight4x4X2Square").value) || 0,

      pole4x2Round:
        Number(document.getElementById("weight4x2Round").value) || 0,

updatedAt: new Date().toISOString()
    };

localStorage.setItem(
      "poleStandardWeights",
JSON.stringify(weights)
    );

    alert("Pole standard weights saved successfully.");

modal.remove();
  };
}
/* =========================================================
   WASHING DEPARTMENT
   Director Target -> Manager Actual -> Washed Kavera Stock
   ========================================================= */

function getWashingShiftRecords() {
  return JSON.parse(
localStorage.getItem("washingShiftRecords") || "[]"
  );
}

function saveWashingShiftRecords(records) {
localStorage.setItem(
    "washingShiftRecords",
JSON.stringify(records)
  );
}

function getWashingCycles() {
  return JSON.parse(
localStorage.getItem("washingCycles") || "[]"
  );
}

function saveWashingCycles(cycles) {
localStorage.setItem(
    "washingCycles",
JSON.stringify(cycles)
  );
}

function getWashedKaveraStock() {
  return Number(
localStorage.getItem("washedKaveraStock") || 0
  );
}

function setWashedKaveraStock(kg) {
localStorage.setItem(
    "washedKaveraStock",
    Number(kg).toFixed(2)
  );
}

function getActiveWashingCycle() {
const cycles = getWashingCycles();

  return cycles.find(cycle =>
cycle.status === "ACTIVE"
  ) || null;
}

function createWashingCycle() {
const cycles = getWashingCycles();

const cycleNumber =
    "WC-" + String(cycles.length + 1).padStart(3, "0");

const cycle = {
    id: Date.now(),
cycleNumber,
startedAt: new Date().toISOString(),
completedAt: null,
totalTargetKg: 0,
totalActualWashedKg: 0,
totalDiscardedKg: 0,
    status: "ACTIVE"
  };

cycles.push(cycle);
saveWashingCycles(cycles);

  return cycle;
}


/* =========================================================
   DIRECTOR - SET WASHING TARGET
   ========================================================= */

function setWashingTarget() {
const modal = document.createElement("div");

modal.style.cssText = `
position:fixed;
    inset:0;
background:rgba(0,0,0,0.55);
display:flex;
align-items:center;
justify-content:center;
    z-index:9999;
font-family:Arial,sans-serif;
  `;

modal.innerHTML = `
<div style="
background:white;
      width:90%;
      max-width:600px;
      padding:28px;
      border-radius:16px;
      box-shadow:0 12px 35px rgba(0,0,0,0.25);
    ">

<h2 style="margin-top:0;">
        Set Washing Target
</h2>

<p style="color:#666;">
        Director sets the kavera target for a specific shift.
</p>

<label style="display:block;margin-bottom:6px;font-weight:600;">
        Date
</label>

<input
        id="washingTargetDate"
        type="date"
        style="
          width:100%;
          padding:10px;
          margin-bottom:18px;
          border:1px solid #ccc;
          border-radius:8px;
        "
>

<label style="display:block;margin-bottom:6px;font-weight:600;">
        Shift
</label>

<select
        id="washingTargetShift"
        style="
          width:100%;
          padding:10px;
          margin-bottom:18px;
          border:1px solid #ccc;
          border-radius:8px;
        "
>
<option value="">Select Shift</option>
<option value="Day">Day</option>
<option value="Night">Night</option>
</select>

<label style="display:block;margin-bottom:6px;font-weight:600;">
        Target Kavera To Wash (KG)
</label>

<input
        id="washingTargetKg"
        type="number"
        min="0"
        step="0.01"
        placeholder="Enter target KG"
        style="
          width:100%;
          padding:10px;
          margin-bottom:24px;
          border:1px solid #ccc;
          border-radius:8px;
        "
>

<div style="
display:flex;
justify-content:flex-end;
        gap:12px;
      ">

<button
          id="closeWashingTargetBtn"
          type="button"
          style="
background:white;
            border:1px solid #ccc;
            padding:10px 18px;
            border-radius:8px;
cursor:pointer;
          "
>
          Close
</button>

<button
          id="saveWashingTargetBtn"
          type="button"
          style="
            background:#1976d2;
color:white;
border:none;
            padding:10px 18px;
            border-radius:8px;
            font-weight:600;
cursor:pointer;
          "
>
          Save Target
</button>

</div>
</div>
  `;

document.body.appendChild(modal);

document.getElementById(
    "closeWashingTargetBtn"
  ).onclick = function () {
modal.remove();
  };

document.getElementById(
    "saveWashingTargetBtn"
  ).onclick = function () {

const date =
document.getElementById(
        "washingTargetDate"
      ).value;

const shift =
document.getElementById(
        "washingTargetShift"
      ).value;

const targetKg = Number(
document.getElementById(
        "washingTargetKg"
      ).value
    );

    if (!date) {
      alert("Please select the washing date.");
      return;
    }

    if (!shift) {
      alert("Please select the washing shift.");
      return;
    }

    if (targetKg<= 0) {
      alert("Please enter the target KG.");
      return;
    }

const records = getWashingShiftRecords();

const duplicate = records.some(record =>
record.date === date &&
record.shift === shift &&
record.status !== "CANCELLED"
    );

    if (duplicate) {
      alert(
        "A washing target already exists for this date and shift."
      );
      return;
    }

records.push({
      id: Date.now(),
      date,
      shift,
targetKg,
actualWashedKg: 0,
discardedKg: 0,
achievementPercent: 0,
      staff: "",
cycleId: null,
cycleNumber: "",
targetStatus: "TARGET SET",
washingComplete: false,
createdAt: new Date().toISOString()
    });

saveWashingShiftRecords(records);

    alert(
      "Washing target saved successfully."
    );

modal.remove();
  };
}


/* =========================================================
   MANAGER - RECORD ACTUAL WASHING
   ========================================================= */

function recordWashing() {
const records = getWashingShiftRecords();

const pendingTargets = records.filter(record =>
record.targetStatus === "TARGET SET"
  );

  if (pendingTargets.length === 0) {
    alert(
      "There is no washing target waiting for the Manager."
    );
    return;
  }

const modal = document.createElement("div");

modal.style.cssText = `
position:fixed;
    inset:0;
background:rgba(0,0,0,0.55);
display:flex;
align-items:center;
justify-content:center;
    z-index:9999;
font-family:Arial,sans-serif;
  `;

const targetOptions = pendingTargets
    .map(record => `
<option value="${record.id}">
        ${record.date} - ${record.shift} Shift - Target ${Number(record.targetKg).toLocaleString()} KG
</option>
    `)
    .join("");

modal.innerHTML = `
<div style="
background:white;
      width:92%;
      max-width:750px;
      max-height:90vh;
overflow:auto;
      padding:30px;
      border-radius:16px;
      box-shadow:0 12px 35px rgba(0,0,0,0.25);
    ">

<h2 style="margin-top:0;">
        Record Washing
</h2>

<label style="display:block;margin-bottom:6px;font-weight:600;">
        Washing Target
</label>

<select
        id="washingTargetRecord"
        style="
          width:100%;
          padding:10px;
          margin-bottom:18px;
          border:1px solid #ccc;
          border-radius:8px;
        "
>
        ${targetOptions}
</select>

<div style="
display:grid;
        grid-template-columns:1fr 1fr;
        gap:18px;
        margin-bottom:18px;
      ">

<div>
<label style="display:block;margin-bottom:6px;font-weight:600;">
            Target KG
</label>

<input
            id="washingDisplayTargetKg"
            type="number"
readonly
            style="
              width:100%;
              padding:10px;
              border:1px solid #ccc;
              border-radius:8px;
              background:#f3f5f4;
            "
>
</div>

<div>
<label style="display:block;margin-bottom:6px;font-weight:600;">
            Actual KG Washed
</label>

<input
            id="washingActualKg"
            type="number"
            min="0"
            step="0.01"
            placeholder="Enter actual KG washed"
            style="
              width:100%;
              padding:10px;
              border:1px solid #ccc;
              border-radius:8px;
            "
>
</div>

</div>

<label style="display:block;margin-bottom:6px;font-weight:600;">
        Staff Who Worked
</label>

<input
        id="washingStaff"
        type="text"
        placeholder="Enter staff names"
        style="
          width:100%;
          padding:10px;
          margin-bottom:18px;
          border:1px solid #ccc;
          border-radius:8px;
        "
>

<div style="
display:grid;
        grid-template-columns:1fr 1fr;
        gap:18px;
        margin-bottom:20px;
      ">

<div>
<label style="display:block;margin-bottom:6px;font-weight:600;">
            KG Not Washed KG
</label>

<input
            id="washingDiscardedKg"
            type="number"
            value="0"
readonly
            style="
              width:100%;
              padding:10px;
              border:1px solid #ccc;
              border-radius:8px;
              background:#f3f5f4;
            "
>
</div>

<div>
<label style="display:block;margin-bottom:6px;font-weight:600;">
            Achievement %
</label>

<input
            id="washingAchievement"
            type="number"
            value="0"
readonly
            style="
              width:100%;
              padding:10px;
              border:1px solid #ccc;
              border-radius:8px;
              background:#f3f5f4;
            "
>
</div>

</div>

<div style="
        padding:14px;
        background:#f7f9f8;
        border-radius:8px;
        margin-bottom:20px;
      ">

<strong>
          Current Washed Kavera Stock:
</strong>

<span id="currentWashedStock">
          ${getWashedKaveraStock().toLocaleString()} KG
</span>

</div>

<label style="
display:flex;
align-items:flex-start;
        gap:10px;
        margin-bottom:24px;
      ">

<input
          id="washingCycleComplete"
          type="checkbox"
          style="margin-top:3px;"
>

<span>
<strong>
            All kavera available for washing is now finished.
</strong>
<br>
<small>
            Tick this only when the Manager confirms the current washing cycle is complete.
</small>
</span>

</label>

<div style="
display:flex;
justify-content:flex-end;
        gap:12px;
      ">

<button
          id="closeWashingBtn"
          type="button"
          style="
background:white;
            border:1px solid #ccc;
            padding:11px 20px;
            border-radius:8px;
cursor:pointer;
          "
>
          Close
</button>

<button
          id="saveWashingBtn"
          type="button"
          style="
            background:#1976d2;
color:white;
border:none;
            padding:11px 20px;
            border-radius:8px;
            font-weight:600;
cursor:pointer;
          "
>
          Save Washing Record
</button>

</div>

</div>
  `;

document.body.appendChild(modal);


  function loadSelectedTarget() {
const selectedId = Number(
document.getElementById(
        "washingTargetRecord"
      ).value
    );

const selectedRecord = records.find(
      record => Number(record.id) === selectedId
    );

    if (!selectedRecord) return;

document.getElementById(
      "washingDisplayTargetKg"
    ).value = selectedRecord.targetKg;

calculateWashingResults();
  }


  function calculateWashingResults() {
const targetKg = Number(
document.getElementById(
        "washingDisplayTargetKg"
      ).value
    ) || 0;

const actualKg = Number(
document.getElementById(
        "washingActualKg"
      ).value
    ) || 0;

const discardedKg =
Math.max(targetKg - actualKg, 0);

const achievement =
targetKg> 0
        ? (actualKg / targetKg) * 100
        : 0;

document.getElementById(
      "washingDiscardedKg"
    ).value = discardedKg.toFixed(2);

document.getElementById(
      "washingAchievement"
    ).value = achievement.toFixed(2);
  }


document.getElementById(
    "washingTargetRecord"
  ).onchange = loadSelectedTarget;

document.getElementById(
    "washingActualKg"
  ).oninput = calculateWashingResults;

document.getElementById(
    "closeWashingBtn"
  ).onclick = function () {
modal.remove();
  };

loadSelectedTarget();


document.getElementById(
    "saveWashingBtn"
  ).onclick = function () {

const selectedId = Number(
document.getElementById(
        "washingTargetRecord"
      ).value
    );

const selectedRecord = records.find(
      record => Number(record.id) === selectedId
    );

    if (!selectedRecord) {
      alert("Please select a washing target.");
      return;
    }

const targetKg =
      Number(selectedRecord.targetKg) || 0;

const actualKg = Number(
document.getElementById(
        "washingActualKg"
      ).value
    ) || 0;

const staff =
document.getElementById(
        "washingStaff"
      ).value.trim();

const completeCycle =
document.getElementById(
        "washingCycleComplete"
      ).checked;

    if (!staff) {
      alert(
        "Please enter the staff who worked."
      );
      return;
    }

    if (actualKg<= 0) {
      alert(
        "Please enter the actual KG washed."
      );
      return;
    }

    if (actualKg>targetKg) {
      alert(
        "Actual KG washed cannot be greater than the Director's target."
      );
      return;
    }

const discardedKg =
Math.max(targetKg - actualKg, 0);

const achievement =
targetKg> 0
        ? (actualKg / targetKg) * 100
        : 0;


    let activeCycle = getActiveWashingCycle();

    if (!activeCycle) {
activeCycle = createWashingCycle();
    }


selectedRecord.actualWashedKg =
      Number(actualKg.toFixed(2));

selectedRecord.discardedKg =
      Number(discardedKg.toFixed(2));

selectedRecord.achievementPercent =
      Number(achievement.toFixed(2));

selectedRecord.staff = staff;

selectedRecord.cycleId =
activeCycle.id;

selectedRecord.cycleNumber =
activeCycle.cycleNumber;

selectedRecord.targetStatus =
      "COMPLETED";

selectedRecord.washingComplete = true;

selectedRecord.completedAt =
      new Date().toISOString();


saveWashingShiftRecords(records);


const cycles = getWashingCycles();

const cycleIndex = cycles.findIndex(
      cycle =>
        Number(cycle.id) ===
        Number(activeCycle.id)
    );

    if (cycleIndex !== -1) {

      cycles[cycleIndex].totalTargetKg =
        Number(cycles[cycleIndex].totalTargetKg || 0)
        + targetKg;

      cycles[cycleIndex].totalActualWashedKg =
        Number(
          cycles[cycleIndex].totalActualWashedKg || 0
        ) + actualKg;

      cycles[cycleIndex].totalDiscardedKg =
        Number(
          cycles[cycleIndex].totalDiscardedKg || 0
        ) + discardedKg;


      if (completeCycle) {
        cycles[cycleIndex].status =
          "WASHING COMPLETE";

        cycles[cycleIndex].completedAt =
          new Date().toISOString();
      }

saveWashingCycles(cycles);
    }


const currentStock =
getWashedKaveraStock();

const newStock =
currentStock + actualKg;

setWashedKaveraStock(newStock);


    let message =
      "Washing record saved successfully.\n\n" +
      "Target: " +
targetKg.toFixed(2) +
      " KG\n" +

      "Actual Washed: " +
actualKg.toFixed(2) +
      " KG\n" +

      "Discarded: " +
discardedKg.toFixed(2) +
      " KG\n" +

      "Achievement: " +
achievement.toFixed(2) +
      "%\n\n" +

      "Washed Kavera Stock: " +
newStock.toFixed(2) +
      " KG";


    if (completeCycle) {
      message +=
        "\n\nWashing Cycle " +
activeCycle.cycleNumber +
        " is COMPLETE.";
    }


    alert(message);

modal.remove();
  };
}


/* =========================================================
   VIEW WASHING RECORDS
   ========================================================= */

function viewWashingRecords() {
const records = getWashingShiftRecords();

const modal = document.createElement("div");

modal.style.cssText = `
position:fixed;
    inset:0;
background:rgba(0,0,0,0.55);
display:flex;
align-items:center;
justify-content:center;
    z-index:9999;
font-family:Arial,sans-serif;
  `;

const rows = records.length
    ? records.map(record => `
<tr>
<td>${record.date || ""}</td>
<td>${record.shift || ""}</td>
<td>${record.cycleNumber || "-"}</td>
<td>${Number(record.targetKg || 0).toLocaleString()}</td>
<td>${Number(record.actualWashedKg || 0).toLocaleString()}</td>
<td>${Number(record.discardedKg || 0).toLocaleString()}</td>
<td>${Number(record.achievementPercent || 0).toFixed(2)}%</td>
<td>${record.staff || ""}</td>
<td>${record.targetStatus || ""}</td>
</tr>
    `).join("")
    : `
<tr>
<td colspan="9" style="text-align:center;">
          No washing records found.
</td>
</tr>
    `;

modal.innerHTML = `
<div style="
background:white;
      width:95%;
      max-width:1100px;
      max-height:90vh;
overflow:auto;
      padding:28px;
      border-radius:16px;
    ">

<h2 style="margin-top:0;">
        Washing Records
</h2>

<div style="
        margin-bottom:18px;
        padding:12px;
        background:#f3f5f4;
        border-radius:8px;
      ">
<strong>
          Current Washed Kavera Stock:
</strong>
        ${getWashedKaveraStock().toLocaleString()} KG
</div>

<div style="overflow-x:auto;">
<table style="
          width:100%;
border-collapse:collapse;
        ">

<thead>
<tr>
<th>Date</th>
<th>Shift</th>
<th>Cycle</th>
<th>Target KG</th>
<th>Actual Washed KG</th>
<th>Discarded KG</th>
<th>Achievement</th>
<th>Staff</th>
<th>Status</th>
</tr>
</thead>

<tbody>
            ${rows}
</tbody>

</table>
</div>

<div style="
text-align:right;
        margin-top:20px;
      ">
<button
          id="closeWashingRecordsBtn"
          type="button"
          style="
            padding:10px 18px;
            border:1px solid #ccc;
            border-radius:8px;
background:white;
cursor:pointer;
          "
>
          Close
</button>
</div>

</div>
  `;

document.body.appendChild(modal);

modal.querySelectorAll("th,td").forEach(cell => {
cell.style.border =
      "1px solid #ddd";

cell.style.padding =
      "9px";

cell.style.textAlign =
      "center";
  });

document.getElementById(
    "closeWashingRecordsBtn"
  ).onclick = function () {
modal.remove();
  };
}

function recordProduction() {
  const poleStandardWeights = JSON.parse(localStorage.getItem("poleStandardWeights") || "{}");
const modal = document.createElement("div");

modal.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    font-family: Arial, sans-serif;
  `;

modal.innerHTML = `
<div style="
background:white;
      width:92%;
      max-width:950px;
      max-height:90vh;
overflow:auto;
      padding:30px;
      border-radius:16px;
      box-shadow:0 12px 35px
      rgba(0,0,0,0.25);
    ">

<h2 style="margin-top:0;">Record Production</h2>

<div style="
display:grid;
  grid-template-columns:1fr 1fr;
  gap:20px;
  margin-bottom:18px;
">
<div>
<label style="display:block;margin-bottom:6px;font-weight:600;">Date</label>
<input id="productionDate" type="date"
      style="width:100%;padding:10px;border:1px solid #ccc;border-radius:8px;">
</div>

<div>
<label style="display:block;margin-bottom:6px;font-weight:600;">Shift</label>
<select id="productionShift"
      style="width:100%;padding:10px;border:1px solid #ccc;border-radius:8px;">
<option value="">Select Shift</option>
<option value="Day">Day</option>
<option value="Night">Night</option>
</select>
</div>
</div>

<div style="
display:grid;
  grid-template-columns:1fr 1fr;
  gap:20px;
  margin-bottom:18px;
">
<div>
<label style="display:block;margin-bottom:6px;font-weight:600;">
      Staff Who Worked
</label>
<input id="productionStaff" type="text"
      placeholder="Enter staff names"
      style="width:100%;padding:10px;border:1px solid #ccc;border-radius:8px;">
</div>

<div>
<label style="display:block;margin-bottom:6px;font-weight:600;">
      Washed Kavera Available (KG)
</label>
<input id="productionAvailableKg"
      type="number"
      min="0"
      step="0.01"
readonly
      style="width:100%;padding:10px;border:1px solid #ccc;border-radius:8px;background:#f3f5f4;">
</div>
</div>

<div style="margin-bottom:22px;">
<label style="display:block;margin-bottom:6px;font-weight:600;">
    KG Taken Into Production
</label>
<input id="productionInputKg"
    type="number"
    min="0"
    step="0.01"
    placeholder="Enter KG processed"
    style="width:100%;padding:10px;border:1px solid #ccc;border-radius:8px;">
</div>

<h3 style="margin:5px 0 14px;font-size:16px;">
  Pole Quantities Produced
</h3>
<div style=" display:grid; grid-template-columns:repeat(3,1fr);
gap:16px;
margin-bottom:24px;
">
<label>4"x4"x7ft Square - Number of Poles</label>
<input id="pole4X4X7Square"
             type="number"
             min="0"
             value="0">

<label>3"x3"x6ft Square - Number of Poles</label>
<input id="pole3X3X6Square"
             type="number"
             min="0"
             value="0">

<label>4"x7ft Round - Number of Poles</label>
<input id="pole4x7Round"
             type="number"
             min="0"
             value="0">

<label>3"x3"x2ft Square - Number of Poles</label>
<input id="pole3X3X2Square"
             type="number"
             min="0"
             value="0">

<label>4"x4"x2ft Square - Number of Poles</label>
<input id="pole4x4X2Square"
             type="number"
             min="0"
             value="0">

<label>4"x2ft Round - Number of Poles</label>
<input id="pole4x2Round"
             type="number"
             min="0"
             value="0">
</div>
<h3 style="margin:8px 0 14px; font-size:16px;">
Production Summary
</h3>
<div style="display:grid; grid-template-columns:repeat(3 1fr);
gap:16px;
margin-bottom:20px;
">
<label>Total Poles Produced</label>
<input id="totalPolesProduced"
             type="number"
             value="0"
readonly>

<label>Total Production Weight (KG)</label>
<input id="totalProductionWeight"
             type="number"
             value="0"
             step="0.01"
readonly>

<label>Production Pending (KG)</label>
<input id="productionPendingKg"
             type="number"
             value="0"
             step="0.01"
readonly>

<label>Production Completion (%)</label>
<input id="productionCompletion"
             type="number"
             value="0"
             step="0.01"
readonly>

<label>Production Status</label>
<input id="productionStatus"
             type="text"
             value="PENDING"
readonly>
</div>
<div style="display:flex;
justify-content:flex-end;
gap:12px;
margin-top:24px;
">
<button id="saveProductionBtn" type="button"
style="
background:#1976d2;
color:white;
border:none;
padding:11px 20px;
border-radius:8px;
font-weight:600;
cursor:pointer;
">
        Save Production Record
</button>
<button id="closeProductionBtn" type="button"
style="
background:white;
color:#333;
border:1px solid #ccc;
padding:11px 20px;
border-radius:8px;
font-weight:600;
cursor:pointer;
">
        Close
</button>
</div>
  `;
document.body.appendChild(modal);

document.getElementById("closeProductionBtn").onclick = function() {
modal.remove();
  };
document.getElementById("saveProductionBtn").onclick = function() {

calculateTotalPoles();

const date = document.getElementById("productionDate").value;
const shift = document.getElementById("productionShift").value;
const staff = document.getElementById("productionStaff").value.trim();

const productionAvailableKg =
    Number(document.getElementById("productionAvailableKg").value) || 0;

const productionInputKg =
    Number(document.getElementById("productionInputKg").value) || 0;

const pole4X4X7Square =
    Number(document.getElementById("pole4X4X7Square").value) || 0;

const pole3X3X6Square =
    Number(document.getElementById("pole3X3X6Square").value) || 0;

const pole4x7Round =
    Number(document.getElementById("pole4x7Round").value) || 0;

const pole3X3X2Square =
    Number(document.getElementById("pole3X3X2Square").value) || 0;

const pole4x4X2Square =
    Number(document.getElementById("pole4x4X2Square").value) || 0;

const pole4x2Round =
    Number(document.getElementById("pole4x2Round").value) || 0;

const totalPoles =
    Number(document.getElementById("totalPolesProduced").value) || 0;

const productionWeight =
    Number(document.getElementById("totalProductionWeight").value) || 0;

const productionPendingKg =
    Number(document.getElementById("productionPendingKg").value) || 0;

const productionCompletion =
    Number(document.getElementById("productionCompletion").value) || 0;

const productionStatus =
document.getElementById("productionStatus").value;

  if (!date) {
    alert("Please enter the production date.");
    return;
  }

  if (!shift) {
    alert("Please select the shift.");
    return;
  }

  if (!staff) {
    alert("Please enter the staff who worked.");
    return;
  }

  if (productionInputKg<= 0) {
    alert("Please enter KG taken into production.");
    return;
  }
  if (productionInputkg > productionAvailablekg) {
    alert("KG taken into production cannot be greater than Washed kavera Available.");
    return;
  }

const records = JSON.parse(
localStorage.getItem("productionRecords") || "[]"
  );

records.push({
    id: Date.now(),
    date,
    shift,
    staff,
productionAvailableKg,
productionInputKg,
    pole4X4X7Square,
    pole3X3X6Square,
    pole4x7Round,
    pole3X3X2Square,
    pole4x4X2Square,
    pole4x2Round,
totalPoles,
productionWeight,
productionPendingKg,
productionCompletion,
productionStatus,

standardWeightsUsed: {
      pole4X4X7Square:
        Number(poleStandardWeights.pole4X4X7Square || 0),

      pole3X3X6Square:
        Number(poleStandardWeights.pole3X3X6Square || 0),

      pole4x7Round:
        Number(poleStandardWeights.pole4x7Round || 0),

      pole3X3X2Square:
        Number(poleStandardWeights.pole3X3X2Square || 0),

      pole4x4X2Square:
        Number(poleStandardWeights.pole4x4X2Square || 0),

      pole4x2Round:
        Number(poleStandardWeights.pole4x2Round || 0)
    },

createdAt: new Date().toISOString()
  });

localStorage.setItem(
    "productionRecords",
JSON.stringify(records)
  );

  alert("Production record saved successfully.");

modal.remove();
};

  function calculateTotalPoles() {
const pole4X4X7 =
      Number(document.getElementById("pole4X4X7Square").value) || 0;

const pole3X3X6 =
      Number(document.getElementById("pole3X3X6Square").value) || 0;

const pole4x7Round =
      Number(document.getElementById("pole4x7Round").value) || 0;

const pole3X3X2 =
      Number(document.getElementById("pole3X3X2Square").value) || 0;

const pole4x4X2 =
      Number(document.getElementById("pole4x4X2Square").value) || 0;

const pole4x2Round =
      Number(document.getElementById("pole4x2Round").value) || 0;
 
const totalPoles =
      pole4X4X7 +
      pole3X3X6 +
      pole4x7Round +
      pole3X3X2 +
      pole4x4X2 +
      pole4x2Round;

document.getElementById("totalPolesProduced").value = totalPoles;
    const totalProductionWeight =
  (pole4X4X7 * Number(poleStandardWeights.pole4X4X7Square || 0)) +
  (pole3X3X6 * Number(poleStandardWeights.pole3X3X6Square || 0)) +
  (pole4x7Round * Number(poleStandardWeights.pole4x7Round || 0)) +
  (pole3X3X2 * Number(poleStandardWeights.pole3X3X2Square || 0)) +
  (pole4x4X2 * Number(poleStandardWeights.pole4x4X2Square || 0)) +
  (pole4x2Round * Number(poleStandardWeights.pole4x2Round || 0));

document.getElementById("totalProductionWeight").value =
totalProductionWeight.toFixed(2);

const productionInputKg =
  Number(document.getElementById("productionInputKg").value) || 0;

const productionPendingKg =
Math.max(productionInputKg - totalProductionWeight, 0);

document.getElementById("productionPendingKg").value =
productionPendingKg.toFixed(2);

const productionCompletion =
productionInputKg> 0
    ? Math.min((totalProductionWeight / productionInputKg) * 100, 100)
    : 0;

document.getElementById("productionCompletion").value =
productionCompletion.toFixed(2);

document.getElementById("productionStatus").value =
productionInputKg> 0 &&productionPendingKg<= 0
    ? "ALL KAVERA COMPLETE"
    : "PENDING";

  }

const poleInputs = [
    "pole4X4X7Square",
    "pole3X3X6Square",
    "pole4x7Round",
    "pole3X3X2Square",
    "pole4x4X2Square",
    "pole4x2Round"
  ];

poleInputs.forEach(function(id) {
document.getElementById(id).addEventListener(
      "input",
calculateTotalPoles
    );
  });
  document.getElementById("productionInputKg").addEventListener("input",calculateTotalPoles);
}
function viewProductionRecords() {
const records = JSON.parse(
localStorage.getItem("productionRecords") || "[]"
  );

const modal = document.createElement("div");

modal.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    font-family: Arial, sans-serif;
  `;

modal.innerHTML = `
<div style="
background:white;
      width:95%;
      max-width:1200px;
      max-height:90vh;
overflow:auto;
      padding:20px;
      border-radius:10px;
    ">

<h2 style="margin-top:0;">
        Production Records
</h2>

<button
        id="closeProductionRecords"
        type="button"
        style="
float:right;
          padding:8px 14px;
          border-radius:6px;
cursor:pointer;
        "
>
        Close
</button>

<table style="
        width:100%;
border-collapse:collapse;
        margin-top:20px;
      ">
<thead>
<tr>
<th>Date</th>
<th>Shift</th>
<th>Staff</th>
<th>Production KG</th>
<th>4"x4"x7ft Square</th>
<th>3"x3"x6ft Square</th>
<th>4"x7ft Round</th>
<th>3"x3"x2ft Square</th>
<th>4"x4"x2ft Square</th>
<th>4"x2ft Round</th>
<th>Total Poles</th>
</tr>
</thead>

<tbody id="productionRecordsBody">
</tbody>
</table>

</div>
  `;

document.body.appendChild(modal);

const productionRecordsBody =
modal.querySelector("#productionRecordsBody");

records.forEach(record => {
const row = document.createElement("tr");

row.innerHTML = `
<td>${record.date || ""}</td>
<td>${record.shift || ""}</td>
<td>${record.staff || ""}</td>
<td>${Number(record.productionWeight || 0).toFixed(2)}</td>
<td>${record.pole4X4X7Square || 0}</td>
<td>${record.pole3X3X6Square || 0}</td>
<td>${record.pole4x7Round || 0}</td>
<td>${record.pole3X3X2Square || 0}</td>
<td>${record.pole4x4X2Square || 0}</td>
<td>${record.pole4x2Round || 0}</td>
<td>${record.totalPoles || 0}</td>
    `;

productionRecordsBody.appendChild(row);
  });

modal.querySelector("#closeProductionRecords").onclick = function() {
modal.remove();
  };
}


/* =========================================================
   EDIT MATERIAL RECORD
   ========================================================= */

function editMaterialRecord(id) {

const records = JSON.parse(
localStorage.getItem("materialRecords") || "[]"
  );

const record = records.find(
    r => String(r.id) === String(id)
  );

  if (!record) {
    alert("Material record not found.");
    return;
  }
const modal = document.createElement("div");
modal.style.cssText = `
position:fixed;
    inset:0;
background:rgba(0,0,0,.55);
display:flex;
align-items:center;
justify-content:center;
    z-index:10000;
font-family:Arial,sans-serif;
  `;

const isClient =
record.materialSource === "client";

modal.innerHTML = `
<div style="
background:white;
      width:560px;
      max-width:94%;
      max-height:92vh;
overflow:auto;
      border-radius:14px;
      padding:24px;
      box-shadow:0 10px 40px rgba(0,0,0,.3);
    ">

<h2 style="
        margin-top:0;
        color:#0b5d3b;
      ">
        Edit Material Record
</h2>

<label>Date</label>

<input
        id="editMaterialDate"
        type="date"
        value="${record.date || ""}"
        style="width:100%;padding:10px;margin:6px 0 14px"
>

<label>Material Source</label>

<select
        id="editMaterialSource"
        style="width:100%;padding:10px;margin:6px 0 14px"
>

<option value="company"
          ${!isClient ? "selected" : ""}>
          A&F / Company Material
</option>

<option value="client"
          ${isClient ? "selected" : ""}>
          Client Material
</option>

</select>

<div id="editClientSection"
        style="${isClient ? "display:block" : "display:none"}">

<label>Client Name</label>

<input
          id="editClientName"
          type="text"
          value="${record.clientName || ""}"
          style="width:100%;padding:10px;margin:6px 0 14px"
>

<label>Client Phone</label>

<input
          id="editClientPhone"
          type="text"
          value="${record.clientPhone || ""}"
          style="width:100%;padding:10px;margin:6px 0 14px"
>

<label>Client Address</label>

<input
          id="editClientAddress"
          type="text"
          value="${record.clientAddress || ""}"
          style="width:100%;padding:10px;margin:6px 0 14px"
>

<label>Client Service</label>

<select
          id="editClientService"
          style="width:100%;padding:10px;margin:6px 0 14px"
>

<option value="washing"
            ${record.clientService === "washing" ? "selected" : ""}>
            Washing Only
</option>

<option value="washing_pelletizing"
            ${record.clientService === "washing_pelletizing" ? "selected" : ""}>
            Washing + Pelletizing
</option>

</select>

</div>

<label>Material Type</label>

<select
        id="editMaterialType"
        style="width:100%;padding:10px;margin:6px 0 14px"
>

<option ${record.materialType === "HDPE" ? "selected" : ""}>
          HDPE
</option>

<option ${record.materialType === "LDPE" ? "selected" : ""}>
          LDPE
</option>

<option ${record.materialType === "PP" ? "selected" : ""}>
          PP
</option>

<option ${record.materialType === "Mixed Plastic" ? "selected" : ""}>
          Mixed Plastic
</option>

</select>

<label>Gross Weight Received (kg)</label>

<input
        id="editGrossWeight"
        type="number"
        min="0"
        value="${record.grossWeight || 0}"
        style="width:100%;padding:10px;margin:6px 0 14px"
>

<div id="editCompanySection"
        style="${isClient ? "display:none" : "display:block"}">

<label>Dirt / Waste (%)</label>

<input
          id="editDirtPercent"
          type="number"
          min="0"
          max="100"
          value="${record.dirtPercent || 0}"
          style="width:100%;padding:10px;margin:6px 0 14px"
>

<label>Purchase Price per kg (UGX)</label>

<input
          id="editPricePerKg"
          type="number"
          min="0"
          value="${record.pricePerKg || 0}"
          style="width:100%;padding:10px;margin:6px 0 14px"
>

<label>Transport Cost (UGX)</label>

<input
          id="editTransportCost"
          type="number"
          min="0"
          value="${record.transportCost || 0}"
          style="width:100%;padding:10px;margin:6px 0 14px"
>

</div>

<div id="editPelletSection"
        style="
          ${isClient&&
record.clientService === "washing_pelletizing"
            ? "display:block"
            : "display:none"}
        "
>

<label>Actual Pellets Produced / Received (kg)</label>

<input
          id="editPelletWeight"
          type="number"
          min="0"
          value="${
record.actualPelletWeight ||
record.pelletWeight ||
            0
          }"
          style="width:100%;padding:10px;margin:6px 0 14px"
>

</div>

<div style="
display:flex;
        gap:10px;
        margin-top:15px;
      ">

<button id="updateMaterialRecord"
          style="
            flex:1;
            padding:12px;
            border:0;
            border-radius:8px;
            background:#0b5d3b;
color:white;
cursor:pointer;
font-weight:bold;
          "
>
💾 Update Record
</button>

<button id="cancelEditMaterial"
          style="
            flex:1;
            padding:12px;
            border:1px solid #ccc;
            border-radius:8px;
background:white;
cursor:pointer;
          "
>
          Cancel
</button>

</div>

</div>
  `;

document.body.appendChild(modal);

const source =
modal.querySelector("#editMaterialSource");

const clientSection =
modal.querySelector("#editClientSection");

const companySection =
modal.querySelector("#editCompanySection");

const pelletSection =
modal.querySelector("#editPelletSection");

const clientService =
modal.querySelector("#editClientService");


  function updateEditForm() {

const client =
source.value === "client";

clientSection.style.display =
      client ? "block" : "none";

companySection.style.display =
      client ? "none" : "block";

pelletSection.style.display =
      client &&
clientService.value === "washing_pelletizing"
        ? "block"
        : "none";
  }


source.addEventListener(
    "change",
updateEditForm
  );

clientService.addEventListener(
    "change",
updateEditForm
  );


modal.querySelector(
    "#cancelEditMaterial"
  ).onclick = () => {
modal.remove();
  };


modal.querySelector(
    "#updateMaterialRecord"
  ).onclick = () => {

const client =
source.value === "client";

const grossKg =
      Number(
modal.querySelector("#editGrossWeight").value
      ) || 0;

    if (grossKg<= 0) {
      alert("Please enter the gross weight received.");
      return;
    }

    if (
      client &&
      !modal.querySelector("#editClientName").value.trim()
    ) {
      alert("Please enter the client name.");
      return;
    }

const dirtPercent =
      Number(
modal.querySelector("#editDirtPercent").value
      ) || 0;

const pricePerKg =
      Number(
modal.querySelector("#editPricePerKg").value
      ) || 0;

const transportCost =
      Number(
modal.querySelector("#editTransportCost").value
      ) || 0;

const netKg =
grossKg *
      (1 - dirtPercent / 100);

const pelletKg =
      Number(
modal.querySelector("#editPelletWeight").value
      ) || 0;


record.date =
modal.querySelector("#editMaterialDate").value;

record.materialSource =
      client ? "client" : "company";

record.materialType =
modal.querySelector("#editMaterialType").value;

record.clientName =
      client
        ? modal.querySelector("#editClientName").value.trim()
        : "";

record.clientPhone =
      client
        ? modal.querySelector("#editClientPhone").value.trim()
        : "";

record.clientAddress =
      client
        ? modal.querySelector("#editClientAddress").value.trim()
        : "";

record.clientService =
      client
        ? modal.querySelector("#editClientService").value
        : "";

record.grossWeight =
grossKg;

record.washingGrossWeight =
      client ? grossKg : 0;

record.dirtPercent =
      client ? 0 : dirtPercent;

record.netWeight =
      client ? grossKg : netKg;

record.pricePerKg =
      client ? 0 : pricePerKg;

record.transportCost =
      client ? 0 : transportCost;

record.totalCost =
      client
        ? 0
        : (netKg * pricePerKg) +
transportCost;

record.pelletWeight =
      client ? pelletKg : 0;

record.actualPelletWeight =
      client ? pelletKg : 0;


    /*
     * SAVE UPDATED MASTER RECORD
     */

localStorage.setItem(
      "materialRecords",
JSON.stringify(records)
    );


    /*
     * REBUILD CLIENT RECORDS FROM MASTER RECORDS
     */

const clientRecords =
records.filter(
        r =>r.materialSource === "client"
      );

localStorage.setItem(
      "clientMaterialRecords",
JSON.stringify(clientRecords)
    );


    /*
     * REFRESH DASHBOARD
     */

    if (
typeof updateDashboardMaterialTotals ===
      "function"
    ) {
updateDashboardMaterialTotals();
    }

    if (
typeof updateClientPerformance ===
      "function"
    ) {
updateClientPerformance();
    }


modal.remove();

    alert(
      "Material record updated successfully."
    );

viewMaterialRecords();
  };
}

function deleteMaterialRecord(id) {
const confirmed = confirm(
    "Are you sure you want to delete this material record?"
  );

  if (!confirmed) {
    return;
  }

const materialRecords = JSON.parse(
localStorage.getItem("materialRecords") || "[]"
  );

const legacyClientRecords = JSON.parse(
localStorage.getItem("clientMaterialRecords") || "[]"
  );

const updatedMaterialRecords = materialRecords.filter(
    record => String(record.id) !== String(id)
  );

const updatedLegacyClientRecords = legacyClientRecords.filter(
    record => String(record.id) !== String(id)
  );

localStorage.setItem(
    "materialRecords",
JSON.stringify(updatedMaterialRecords)
  );

localStorage.setItem(
    "clientMaterialRecords",
JSON.stringify(updatedLegacyClientRecords)
  );

updateClientPerformance();

  if (typeof updateDashboardMaterialTotals === "function") {
updateDashboardMaterialTotals();
  }

viewMaterialRecords();

  alert("Material record deleted successfully.");
}



