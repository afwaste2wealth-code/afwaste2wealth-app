function showMessage(name) {
  if (name === "Record Material In") {
recordMaterialIn();
    return;
  }

  alert(name + " module selected. This prototype is ready to be connected to the A&F data and backend.");
}

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
      width:520px;
      max-width:92%;
      max-height:90vh;
overflow:auto;
      border-radius:14px;
      padding:24px;
      box-shadow:0 10px 40px rgba(0,0,0,.3);
    ">
<h2 style="margin-top:0;color:#0b5d3b">
        Record Material In
</h2>

<p style="color:#6b7d75;font-size:13px">
        Enter details of the plastic waste received at the factory.
</p>

<label>Date</label>
<input id="materialDate" type="date"
        value="${new Date().toISOString().split("T")[0]}"
        style="width:100%;padding:10px;margin:6px 0 14px">

<label>Supplier / Source</label>
<input id="supplier" type="text"
        placeholder="Supplier name"
        style="width:100%;padding:10px;margin:6px 0 14px">

<label>Material Type</label>
<select id="materialType"
        style="width:100%;padding:10px;margin:6px 0 14px">
<option>HDPE</option>
<option>LDPE</option>
<option>PP</option>
<option>Mixed Plastic</option>
</select>

<label>Gross Weight (kg)</label>
<input id="grossWeight" type="number"
        placeholder="e.g. 6500"
        style="width:100%;padding:10px;margin:6px 0 14px">

<label>Dirt / Waste (%)</label>
<input id="dirtPercent" type="number"
        placeholder="e.g. 40"
        value="0"
        style="width:100%;padding:10px;margin:6px 0 14px">

<label>Purchase Price per kg (UGX)</label>
<input id="pricePerKg" type="number"
        placeholder="e.g. 250"
        style="width:100%;padding:10px;margin:6px 0 14px">

<label>Transport Cost (UGX)</label>
<input id="transportCost" type="number"
        placeholder="e.g. 200000"
        value="0"
        style="width:100%;padding:10px;margin:6px 0 14px">

<div style="
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

const gross = modal.querySelector("#grossWeight");
const dirt = modal.querySelector("#dirtPercent");
const price = modal.querySelector("#pricePerKg");
const transport = modal.querySelector("#transportCost");

  function calculate() {
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

  [gross, dirt, price, transport].forEach(input => {
input.addEventListener("input", calculate);
  });

modal.querySelector("#cancelMaterial").onclick = () => {
modal.remove();
  };

modal.querySelector("#saveMaterial").onclick = () => {
const record = {
      date: modal.querySelector("#materialDate").value || new Date().toISOString().split("T")[0],
      supplier: modal.querySelector("#supplier").value,
materialType: modal.querySelector("#materialType").value,
grossWeight: Number(gross.value) || 0,
dirtPercent: Number(dirt.value) || 0,
netWeight: Number(gross.value) * (1 - (Number(dirt.value) || 0) / 100),
pricePerKg: Number(price.value) || 0,
transportCost: Number(transport.value) || 0,
totalCost:
        ((Number(gross.value) || 0) *
        (1 - (Number(dirt.value) || 0) / 100) *
        (Number(price.value) || 0)) +
        (Number(transport.value) || 0)
    };

const records =
JSON.parse(localStorage.getItem("materialRecords") || "[]");

records.push(record);

localStorage.setItem(
      "materialRecords",
JSON.stringify(records)
    );

const totalKavera = records.reduce(
  (sum, item) => sum + Number(item.grossWeight || 0),
  0
);
const totalNetUsable = records.reduce(sum, item) => sum + Number(item.netWeight || 0), 0); 
const kaveraElement = document.getElementById("kaveraReceived");

if (kaveraElement) {
kaveraElement.textContent =
totalKavera.toLocaleString() + " kg";
}
modal.remove();

    alert(
      "Material received successfully!\n\n" +
      "Net usable weight: " +
record.netWeight.toLocaleString() +
      " kg"
    );
  };
}

window.addEventListener("DOMContentLoaded", () => {
const records =
JSON.parse(localStorage.getItem("materialRecords") || "[]");

const totalKavera = records.reduce(
    (sum, item) => sum + Number(item.grossWeight || 0),
    0
  );

const kaveraElement =
document.getElementById("kaveraReceived");

  if (kaveraElement) {
kaveraElement.textContent =
totalKavera.toLocaleString() + " kg";
  }
  
const today = new Date().toISOString().split("T")[0];

const deliveriesToday = records.filter(
  item =>String(item.date).split("T")[0] === today
).length;

const deliveriesElement =
document.getElementById("deliveriesToday");

if (deliveriesElement) {
deliveriesElement.textContent = deliveriesToday;
 }
});

