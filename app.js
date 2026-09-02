function showMessage(name) { 
  if (name === "Record Material In") {
recordMaterialIn();
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



