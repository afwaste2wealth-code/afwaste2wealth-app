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
  if (name === "System Settings") {
    systemSettings();
  return;
  }
  alert(
    name +
      " module selected. This prototype is ready to be connected to the A&F data and backend."
  );
} 
/* =========================================================
   SYSTEM SETTINGS
   ========================================================= */

function systemSettings() {

const modal = document.createElement("div");

modal.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.55);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    font-family: Arial, sans-serif;
  `;

modal.innerHTML = `
<div style="
background:white;
      width:720px;
      max-width:94%;
      max-height:92vh;
overflow:auto;
      border-radius:14px;
      padding:24px;
      box-shadow:0 10px 40px rgba(0,0,0,.3);
    ">

<div style="
display:flex;
justify-content:space-between;
align-items:center;
        margin-bottom:20px;
      ">
<div>
<h2 style="margin:0;color:#0b5d3b;">
            System Settings
</h2>

<div style="
            margin-top:5px;
            color:#666;
            font-size:13px;
          ">
            Factory administration and configuration
</div>
</div>

<button id="closeSystemSettings"
          style="
            border:0;
            background:#eee;
            padding:8px 12px;
            border-radius:7px;
cursor:pointer;
font-weight:bold;
          ">
✕ Close
</button>
</div>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(210px,1fr));
        gap:14px;
      ">

<button id="teamSettingsBtn"
          style="${systemSettingsButtonStyle()}">
👥
<strong>Teams & Team Leaders</strong>
<span>Create teams, leaders and members</span>
</button>

<button id="employeeAccountsBtn"
          style="${systemSettingsButtonStyle()}">
👤
<strong>Employee Accounts</strong>
<span>Employee IDs and login accounts</span>
</button>

<button id="rolesPermissionsBtn"
          style="${systemSettingsButtonStyle()}">
🔐
<strong>Roles & Permissions</strong>
<span>Director, Manager, Leader and Employee</span>
</button>

<button id="shiftSettingsBtn"
          style="${systemSettingsButtonStyle()}">
🕒
<strong>Shift & Working Hours</strong>
<span>Day/Night shifts and working hours</span>
</button>

<button id="poleWeightsBtn"
          style="${systemSettingsButtonStyle()}">
🏗️
<strong>Pole Standard Weights</strong>
<span>Configure standard pole weights</span>
</button>

<button id="teamPerformanceBtn"
          style="${systemSettingsButtonStyle()}">
🏆
<strong>Team Performance Settings</strong>
<span>Configure Team of the Month scoring</span>
</button>

</div>

</div>
  `;

document.body.appendChild(modal);

modal.querySelector("#closeSystemSettings").onclick = () => {
modal.remove();
  };

modal.querySelector("#teamSettingsBtn").onclick = () => {
modal.remove();
manageTeams();
  };

modal.querySelector("#poleWeightsBtn").onclick = () => {
modal.remove();

    if (typeofmanagePoleStandardWeights === "function") {
managePoleStandardWeights();
    } else {
      alert("Pole Standard Weights module could not be found.");
    }
  };

modal.querySelector("#teamPerformanceBtn").onclick = () => {
modal.remove();
manageTeamPerformanceSettings();
  };

modal.querySelector("#employeeAccountsBtn").onclick = () => {
    alert(
      "Employee Accounts will be connected next.\n\n" +
      "Employees will receive an Employee ID and activate their own password."
    );
  };

modal.querySelector("#rolesPermissionsBtn").onclick = () => {
    alert(
      "Roles & Permissions will be connected next.\n\n" +
      "Roles: Director, Manager, Team Leader and Employee."
    );
  };

modal.querySelector("#shiftSettingsBtn").onclick = () => {
    alert(
      "Shift & Working Hours will be connected next.\n\n" +
      "This will control Day Shift, Night Shift, attendance, shortfall and overtime."
    );
  };
}


function systemSettingsButtonStyle() {
  return `
    min-height:120px;
    border:1px solid #d9e5de;
    background:#f7fbf9;
    border-radius:12px;
    padding:15px;
cursor:pointer;
text-align:left;
display:flex;
flex-direction:column;
    gap:6px;
    font-size:16px;
    box-shadow:0 2px 8px rgba(0,0,0,.04);
  `;
}


/* =========================================================
   TEAM MANAGEMENT
   ========================================================= */

function getTeams() {
  return JSON.parse(
localStorage.getItem("factoryTeams") || "[]"
  );
}


function saveTeams(teams) {
localStorage.setItem(
    "factoryTeams",
JSON.stringify(teams)
  );
}


function manageTeams() {

const teams = getTeams();

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
      width:700px;
      max-width:94%;
      max-height:92vh;
overflow:auto;
      border-radius:14px;
      padding:24px;
      box-shadow:0 10px 40px rgba(0,0,0,.3);
    ">

<h2 style="margin-top:0;color:#0b5d3b;">
        Teams & Team Leaders
</h2>

<div style="
        background:#eef8f2;
        padding:14px;
        border-radius:9px;
        margin-bottom:18px;
        font-size:14px;
      ">
        A team is separate from a shift.
        For example, Team 1 may work the Day Shift today
        and Night Shift on another schedule.
</div>

<label>Team Name</label>
<input id="teamName"
        type="text"
        placeholder="Example: Team 1"
        style="${settingsInputStyle()}">

<label>Team Leader</label>
<input id="teamLeader"
        type="text"
        placeholder="Enter team leader name"
        style="${settingsInputStyle()}">

<label>Team Members</label>
<textarea id="teamMembers"
        rows="4"
        placeholder="Enter employee names separated by commas"
        style="${settingsInputStyle()}"></textarea>

<label>Status</label>
<select id="teamStatus"
        style="${settingsInputStyle()}">
<option value="active">Active</option>
<option value="inactive">Inactive</option>
</select>

<button id="saveTeam"
        style="
          width:100%;
          padding:12px;
          border:0;
          border-radius:8px;
          background:#0b5d3b;
color:white;
font-weight:bold;
cursor:pointer;
          margin-bottom:22px;
        ">
        Save Team
</button>

<h3 style="color:#0b5d3b;">
        Existing Teams
</h3>

<div id="teamsList"></div>

<div style="
display:flex;
        gap:10px;
        margin-top:20px;
      ">

<button id="backToSettings"
          style="
            flex:1;
            padding:11px;
            border:1px solid #0b5d3b;
background:white;
            color:#0b5d3b;
            border-radius:8px;
cursor:pointer;
          ">
          Back to System Settings
</button>

<button id="closeTeams"
          style="
            flex:1;
            padding:11px;
            border:0;
            background:#555;
color:white;
            border-radius:8px;
cursor:pointer;
          ">
          Close
</button>

</div>

</div>
  `;

document.body.appendChild(modal);

  function renderTeams() {

const list = modal.querySelector("#teamsList");
const currentTeams = getTeams();

    if (!currentTeams.length) {
list.innerHTML = `
<div style="
          padding:15px;
          background:#f5f5f5;
          border-radius:8px;
          color:#666;
        ">
          No teams have been created yet.
</div>
      `;
      return;
    }

list.innerHTML = currentTeams.map(team => `
<div style="
        border:1px solid #ddd;
        border-radius:9px;
        padding:14px;
        margin-bottom:10px;
      ">

<div style="
display:flex;
justify-content:space-between;
          gap:10px;
align-items:center;
        ">

<div>
<strong style="font-size:17px;">
              ${escapeSettingsText(team.name)}
</strong>

<div style="margin-top:5px;">
              Leader:
<b>${escapeSettingsText(team.leader)}</b>
</div>

<div style="
              margin-top:5px;
              font-size:13px;
              color:#666;
            ">
              Members:
              ${
team.members.length
                  ? team.members
                      .map(member =>escapeSettingsText(member))
                      .join(", ")
                  : "No members assigned"
              }
</div>

<div style="
              margin-top:7px;
              font-size:13px;
            ">
              Status:
<b>${team.status === "active" ? "ACTIVE" : "INACTIVE"}</b>
</div>
</div>

<button
            data-delete-team="${team.id}"
            style="
              border:0;
              background:#b42318;
color:white;
              padding:8px 10px;
              border-radius:7px;
cursor:pointer;
            ">
            Delete
</button>

</div>
</div>
    `).join("");

    list
      .querySelectorAll("[data-delete-team]")
      .forEach(button => {

button.onclick = () => {

const teamId =
            Number(button.dataset.deleteTeam);

const team =
getTeams().find(item =>item.id === teamId);

          if (!team) return;

const confirmed = confirm(
            "Delete " +
team.name +
            "?\n\n" +
            "Only delete a team if it was created by mistake."
          );

          if (!confirmed) return;

const updated =
getTeams().filter(
              item =>item.id !== teamId
            );

saveTeams(updated);
renderTeams();
        };
      });
  }


modal.querySelector("#saveTeam").onclick = () => {

const name =
modal.querySelector("#teamName").value.trim();

const leader =
modal.querySelector("#teamLeader").value.trim();

const membersText =
modal.querySelector("#teamMembers").value.trim();

const status =
modal.querySelector("#teamStatus").value;

    if (!name) {
      alert("Please enter the Team Name.");
      return;
    }

    if (!leader) {
      alert("Please enter the Team Leader.");
      return;
    }

const existingTeams = getTeams();

const alreadyExists =
existingTeams.some(
        team =>
team.name.toLowerCase() ===
name.toLowerCase()
      );

    if (alreadyExists) {
      alert("A team with this name already exists.");
      return;
    }

const members =
membersText
        ? membersText
            .split(",")
            .map(member =>member.trim())
            .filter(Boolean)
        : [];

existingTeams.push({
      id: Date.now(),
      name: name,
      leader: leader,
      members: members,
      status: status,
createdAt: new Date().toISOString()
    });

saveTeams(existingTeams);

modal.querySelector("#teamName").value = "";
modal.querySelector("#teamLeader").value = "";
modal.querySelector("#teamMembers").value = "";
modal.querySelector("#teamStatus").value = "active";

renderTeams();

    alert("Team saved successfully.");
  };


modal.querySelector("#backToSettings").onclick = () => {
modal.remove();
systemSettings();
  };

modal.querySelector("#closeTeams").onclick = () => {
modal.remove();
  };

renderTeams();
}


/* =========================================================
   TEAM PERFORMANCE SETTINGS
   ========================================================= */

function getTeamPerformanceSettings() {

const saved = JSON.parse(
localStorage.getItem(
      "teamPerformanceSettings"
    ) || "{}"
  );

  return {
outputWeight:
      Number(saved.outputWeight ?? 50),

attendanceWeight:
      Number(saved.attendanceWeight ?? 25),

wasteWeight:
      Number(saved.wasteWeight ?? 15),

qualityWeight:
      Number(saved.qualityWeight ?? 10)
  };
}


function manageTeamPerformanceSettings() {

const settings =
getTeamPerformanceSettings();

const modal =
document.createElement("div");

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
      max-width:94%;
      border-radius:14px;
      padding:24px;
      box-shadow:0 10px 40px rgba(0,0,0,.3);
    ">

<h2 style="
        margin-top:0;
        color:#0b5d3b;
      ">
        Team Performance Settings
</h2>

<p style="
        background:#eef8f2;
        padding:12px;
        border-radius:8px;
        font-size:13px;
      ">
        These percentages will later be used to calculate
        Best Performing Team and Team of the Month.
        The total must equal 100%.
</p>

<label>
        Production / Washing Achievement (%)
</label>

<input id="outputWeight"
        type="number"
        min="0"
        max="100"
        value="${settings.outputWeight}"
        style="${settingsInputStyle()}">

<label>
        Attendance & Punctuality (%)
</label>

<input id="attendanceWeight"
        type="number"
        min="0"
        max="100"
        value="${settings.attendanceWeight}"
        style="${settingsInputStyle()}">

<label>
        Low Waste / Shortfall (%)
</label>

<input id="wasteWeight"
        type="number"
        min="0"
        max="100"
        value="${settings.wasteWeight}"
        style="${settingsInputStyle()}">

<label>
        Quality / Discipline (%)
</label>

<input id="qualityWeight"
        type="number"
        min="0"
        max="100"
        value="${settings.qualityWeight}"
        style="${settingsInputStyle()}">

<div id="performanceTotal"
        style="
          padding:12px;
          background:#f5f5f5;
          border-radius:8px;
          margin-bottom:15px;
font-weight:bold;
        ">
</div>

<div style="
display:flex;
        gap:10px;
      ">

<button id="savePerformanceSettings"
          style="
            flex:1;
            padding:12px;
            border:0;
            border-radius:8px;
            background:#0b5d3b;
color:white;
font-weight:bold;
cursor:pointer;
          ">
          Save
</button>

<button id="cancelPerformanceSettings"
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

const output =
modal.querySelector("#outputWeight");

const attendance =
modal.querySelector("#attendanceWeight");

const waste =
modal.querySelector("#wasteWeight");

const quality =
modal.querySelector("#qualityWeight");

const totalDisplay =
modal.querySelector("#performanceTotal");


  function updateTotal() {

const total =
      (Number(output.value) || 0) +
      (Number(attendance.value) || 0) +
      (Number(waste.value) || 0) +
      (Number(quality.value) || 0);

totalDisplay.textContent =
      "Total Weight: " + total + "%";

totalDisplay.style.color =
      total === 100
        ? "#0b5d3b"
        : "#b42318";
  }


  [output, attendance, waste, quality]
    .forEach(input => {
input.addEventListener(
        "input",
updateTotal
      );
    });


modal.querySelector(
    "#savePerformanceSettings"
  ).onclick = () => {

const values = {
outputWeight:
        Number(output.value) || 0,

attendanceWeight:
        Number(attendance.value) || 0,

wasteWeight:
        Number(waste.value) || 0,

qualityWeight:
        Number(quality.value) || 0
    };

const total =
values.outputWeight +
values.attendanceWeight +
values.wasteWeight +
values.qualityWeight;

    if (total !== 100) {
      alert(
        "The performance percentages must total exactly 100%."
      );
      return;
    }

localStorage.setItem(
      "teamPerformanceSettings",
JSON.stringify(values)
    );

    alert(
      "Team Performance Settings saved successfully."
    );

modal.remove();
systemSettings();
  };


modal.querySelector(
    "#cancelPerformanceSettings"
  ).onclick = () => {
modal.remove();
systemSettings();
  };

updateTotal();
}


/* =========================================================
   SYSTEM SETTINGS HELPERS
   ========================================================= */

function settingsInputStyle() {
  return `
    width:100%;
box-sizing:border-box;
    padding:10px;
    margin:6px 0 14px;
    border:1px solid #ccc;
    border-radius:7px;
font-family:Arial,sans-serif;
  `;
}


function escapeSettingsText(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
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
const newBatchNumber = getNextMaterialBatchNumber();
const record = {

      id: Date.now(),
batchNumber: newBatchNumber,
washingCycleNumber:
washingCycleFromBatch(newBatchNumber),
batchStatus: "AVAILABLE FOR WASHING",
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

const savedWeights = JSON.parse(
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
   WASHING DEPARTMENT - BATCH BASED
   Material Batch KB001 -> Washing Cycle WCKB001
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
Math.max(Number(kg) || 0, 0).toFixed(2)
  );
}
/* =========================================================
   WASHED KAVERA STOCK BY OWNER
   Separates A&F stock from Client stock
   ========================================================= */

function getCompanyWashedKaveraStock() {
  return Number(
localStorage.getItem("companyWashedKaveraStock") || 0
  );
}

function setCompanyWashedKaveraStock(kg) {
localStorage.setItem(
    "companyWashedKaveraStock",
Math.max(Number(kg) || 0, 0).toFixed(2)
  );
}

function getClientWashedKaveraStock() {
  return Number(
localStorage.getItem("clientWashedKaveraStock") || 0
  );
}

function setClientWashedKaveraStock(kg) {
localStorage.setItem(
    "clientWashedKaveraStock",
Math.max(Number(kg) || 0, 0).toFixed(2)
  );
}

function getBatchOwnerType(batchNumber) {

const records = JSON.parse(
localStorage.getItem("materialRecords") || "[]"
  );

const batch = records.find(
    record =>record.batchNumber === batchNumber
  );

  if (!batch) {
    return "unknown";
  }

  return batch.materialSource === "client"
    ? "client"
    : "company";
}
/* =========================================================
   MATERIAL BATCH NUMBER
   KB001, KB002, KB003...
   ========================================================= */

function formatBatchNumber(number) {
  return "KB" +
    String(number).padStart(3, "0");
}


/* =========================================================
   WASHING CYCLE NUMBER
   KB001 -> WCKB001
   ========================================================= */

function washingCycleFromBatch(batchNumber) {
  return batchNumber
    ? "WC" + batchNumber
    : "";
}


/* =========================================================
   GET NEXT MATERIAL BATCH
   ========================================================= */

function getNextMaterialBatchNumber() {

const records = JSON.parse(
localStorage.getItem("materialRecords") || "[]"
  );

  let highest = 0;

records.forEach(record => {

const match =
      String(
record.batchNumber || ""
      ).match(/^KB(\d+)$/i);

    if (match) {
      highest = Math.max(
        highest,
        Number(match[1]) || 0
      );
    }

  });

  return formatBatchNumber(
    highest + 1
  );
}


/* =========================================================
   ALL MATERIAL BATCHES COMPANY + CLIENT
   ========================================================= */

function getMaterialBatchRecords() {

const records = JSON.parse(
localStorage.getItem("materialRecords") || "[]"
  );

  return records.filter(record =>
record.batchNumber
  );
}


/* =========================================================
   TOTAL KAVERA FOR WASHING

   IMPORTANT:
   We use NET USABLE KG.
   Example:
   Gross = 5,000 KG
   Net after dirt = 4,000 KG
   WCKB total = 4,000 KG
   ========================================================= */

function getBatchTotalKg(batch) {

  if (!batch) {
    return 0;
  }

  return Number(
batch.netWeight ??
batch.grossWeight ??
    0
  ) || 0;
}


/* =========================================================
   FIND WASHING CYCLE
   ========================================================= */

function getWashingCycleForBatch(
batchNumber
) {

const cycles =
getWashingCycles();

  return cycles.find(
    cycle =>
cycle.batchNumber ===
batchNumber
  ) || null;
}


/* =========================================================
   TOTAL ACTUAL WASHED FOR BATCH
   ========================================================= */

function getBatchWashedKg(
batchNumber
) {

  return getWashingShiftRecords()

    .filter(record =>

record.batchNumber ===
batchNumber&&

record.targetStatus ===
        "COMPLETED" &&

record.status !==
        "CANCELLED"
    )

    .reduce(
      (sum, record) =>
        sum +
        (
          Number(
record.actualWashedKg
          ) || 0
        ),
      0
    );
}


/* =========================================================
   PENDING WASHING KG

   Pending =
   Net usable batch KG -
   Actual washed so far
   ========================================================= */

function getBatchPendingKg(
batchNumber
) {

const batch =
getMaterialBatchRecords()
      .find(
        record =>
record.batchNumber ===
batchNumber
      );

  if (!batch) {
    return 0;
  }

  return Math.max(

getBatchTotalKg(batch) -

getBatchWashedKg(
batchNumber
    ),

    0
  );
}


/* =========================================================
   CREATE WASHING CYCLE FOR MATERIAL BATCH
   ========================================================= */

function ensureWashingCycleForBatch(
  batch
) {

  let cycles =
getWashingCycles();

  let cycle =
cycles.find(
      item =>
item.batchNumber ===
batch.batchNumber
    );

  if (cycle) {
    return cycle;
  }

  cycle = {

    id: Date.now(),

batchId:
batch.id,

batchNumber:
batch.batchNumber,

cycleNumber:
washingCycleFromBatch(
batch.batchNumber
      ),

totalBatchKg:
      Number(
getBatchTotalKg(batch)
          .toFixed(2)
      ),

totalActualWashedKg: 0,

pendingKg:
      Number(
getBatchTotalKg(batch)
          .toFixed(2)
      ),

closingVarianceKg: 0,

manualComplete: false,

    status:
      "ACTIVE",

startedAt:
      new Date().toISOString(),

completedAt: null
  };

cycles.push(cycle);

saveWashingCycles(
    cycles
  );

  return cycle;
}


/* =========================================================
   RECALCULATE WASHING CYCLE
   ========================================================= */

function recalculateWashingCycle(
batchNumber
) {

const batches =
getMaterialBatchRecords();

const batch =
batches.find(
      item =>
item.batchNumber ===
batchNumber
    );

  if (!batch) {
    return null;
  }

  let cycle =
ensureWashingCycleForBatch(
      batch
    );

const cycles =
getWashingCycles();

const index =
cycles.findIndex(
      item =>
item.batchNumber ===
batchNumber
    );

  if (index === -1) {
    return cycle;
  }

const totalBatchKg =
getBatchTotalKg(
      batch
    );

const totalWashedKg =
getBatchWashedKg(
batchNumber
    );

const pendingKg =
Math.max(
totalBatchKg -
totalWashedKg,
      0
    );

  cycles[index].totalBatchKg =
    Number(
totalBatchKg.toFixed(2)
    );

  cycles[index]
    .totalActualWashedKg =
    Number(
totalWashedKg.toFixed(2)
    );

  cycles[index].pendingKg =
    Number(
pendingKg.toFixed(2)
    );


  if (
pendingKg<= 0.01
  ) {

    cycles[index].status =
      "WASHING COMPLETE";

    cycles[index].completedAt =
      cycles[index].completedAt ||
      new Date().toISOString();

    cycles[index]
      .closingVarianceKg = 0;

  } else if (
    !cycles[index]
      .manualComplete
  ) {

    cycles[index].status =
      "ACTIVE";

    cycles[index].completedAt =
      null;

    cycles[index]
      .closingVarianceKg = 0;
  }


saveWashingCycles(
    cycles
  );

  return cycles[index];
}


/* =========================================================
   MANUALLY CLOSE WASHING CYCLE

   Used when physical kavera is finished but
   the weighing figures leave a small balance.
   ========================================================= */

function markWashingCycleComplete(
batchNumber
) {

const batch =
getMaterialBatchRecords()
      .find(
        item =>
item.batchNumber ===
batchNumber
      );

  if (!batch) {
    return null;
  }


ensureWashingCycleForBatch(
    batch
  );


const cycles =
getWashingCycles();


const index =
cycles.findIndex(
      item =>
item.batchNumber ===
batchNumber
    );


  if (index === -1) {
    return null;
  }


const pendingKg =
getBatchPendingKg(
batchNumber
    );


  cycles[index]
    .manualComplete = true;


  cycles[index].status =
    "WASHING COMPLETE";


  cycles[index].pendingKg =
    Number(
pendingKg.toFixed(2)
    );


  cycles[index]
    .closingVarianceKg =
    Number(
pendingKg.toFixed(2)
    );


  cycles[index]
    .completedAt =
    new Date().toISOString();


saveWashingCycles(
    cycles
  );


  return cycles[index];
}


/* =========================================================
   GET BATCHES STILL AVAILABLE FOR WASHING
   ========================================================= */

function getOpenMaterialBatches() {

  return getMaterialBatchRecords()
    .filter(batch => {

const cycle =
getWashingCycleForBatch(
batch.batchNumber
        );

const pending =
getBatchPendingKg(
batch.batchNumber
        );

      return (
        pending > 0.01 &&
        (
          !cycle ||
cycle.status !==
            "WASHING COMPLETE"
        )
      );

    });
}


/* =========================================================
   DIRECTOR - SET WASHING TARGET
   ========================================================= */

function setWashingTarget() {

const batches =
getOpenMaterialBatches();


  if (
batches.length === 0
  ) {

    alert(
      "There is no open company material batch available for washing.\n\n" +
      "Record new company material first so the system can create a batch such as KB001."
    );

    return;
  }


const modal =
document.createElement(
      "div"
    );


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


const batchOptions =
batches.map(batch => `

<option
        value="${batch.batchNumber}"
>

        ${batch.batchNumber}
        -
        ${batch.materialType || "Kavera"}
        -
        ${getBatchTotalKg(batch).toLocaleString()}
        KG

</option>

    `).join("");


modal.innerHTML = `

<div style="
background:white;
      width:94%;
      max-width:760px;
      max-height:92vh;
overflow:auto;
      padding:28px;
      border-radius:16px;
      box-shadow:
      0 12px 35px
rgba(0,0,0,.25);
    ">

<h2 style="
        margin-top:0;
      ">
        Set Washing Target
</h2>

<p style="
        color:#666;
      ">
        Director sets a fresh target
        for each shift from an open
        material batch.
</p>


<label style="
display:block;
        margin-bottom:6px;
        font-weight:600;
      ">
        Material Batch
</label>

<select
        id="washingBatch"
        style="
          width:100%;
          padding:10px;
          margin-bottom:18px;
          border:1px solid #ccc;
          border-radius:8px;
        "
>

        ${batchOptions}

</select>


<div style="
display:grid;
        grid-template-columns:
        repeat(2,1fr);
        gap:14px;
        margin-bottom:20px;
      ">


<div>

<label style="
display:block;
            margin-bottom:6px;
            font-weight:600;
          ">
            Washing Cycle
</label>

<input
            id="targetCycleNumber"
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

<label style="
display:block;
            margin-bottom:6px;
            font-weight:600;
          ">
            Total WC Kavera (KG)
</label>

<input
            id="targetTotalKg"
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

<label style="
display:block;
            margin-bottom:6px;
            font-weight:600;
          ">
            Total Washed So Far (KG)
</label>

<input
            id="targetWashedKg"
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

<label style="
display:block;
            margin-bottom:6px;
            font-weight:600;
          ">
            Pending WC Kavera (KG)
</label>

<input
            id="targetPendingKg"
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
display:grid;
        grid-template-columns:
        1fr 1fr;
        gap:14px;
      ">


<div>

<label style="
display:block;
            margin-bottom:6px;
            font-weight:600;
          ">
            Date
</label>

<input
            id="washingTargetDate"
            type="date"
            value="${
              new Date()
                .toISOString()
                .split("T")[0]
            }"
            style="
              width:100%;
              padding:10px;
              margin-bottom:18px;
              border:1px solid #ccc;
              border-radius:8px;
            "
>

</div>


<div>

<label style="
display:block;
            margin-bottom:6px;
            font-weight:600;
          ">
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

<option value="">
              Select Shift
</option>

<option value="Day">
              Day
</option>

<option value="Night">
              Night
</option>

</select>

</div>

</div>


<label style="
display:block;
        margin-bottom:6px;
        font-weight:600;
      ">
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


document.body.appendChild(
    modal
  );


  function refreshBatchSummary() {

const batchNumber =
modal.querySelector(
        "#washingBatch"
      ).value;


const batch =
batches.find(
        item =>
item.batchNumber ===
batchNumber
      );


    if (!batch) {
      return;
    }


const cycle =
ensureWashingCycleForBatch(
        batch
      );


const totalKg =
getBatchTotalKg(
        batch
      );


const washedKg =
getBatchWashedKg(
batchNumber
      );


const pendingKg =
Math.max(
totalKg -
washedKg,
        0
      );


modal.querySelector(
      "#targetCycleNumber"
    ).value =
cycle.cycleNumber;


modal.querySelector(
      "#targetTotalKg"
    ).value =
totalKg.toFixed(2);


modal.querySelector(
      "#targetWashedKg"
    ).value =
washedKg.toFixed(2);


modal.querySelector(
      "#targetPendingKg"
    ).value =
pendingKg.toFixed(2);
  }


modal.querySelector(
    "#washingBatch"
  ).onchange =
refreshBatchSummary;


modal.querySelector(
    "#closeWashingTargetBtn"
  ).onclick =
    () =>modal.remove();


modal.querySelector(
    "#saveWashingTargetBtn"
  ).onclick =
    function () {


const batchNumber =
modal.querySelector(
          "#washingBatch"
        ).value;


const batch =
batches.find(
          item =>
item.batchNumber ===
batchNumber
        );


const date =
modal.querySelector(
          "#washingTargetDate"
        ).value;


const shift =
modal.querySelector(
          "#washingTargetShift"
        ).value;


const targetKg =
        Number(
modal.querySelector(
            "#washingTargetKg"
          ).value
        ) || 0;


      if (!batch) {

        alert(
          "Please select a material batch."
        );

        return;
      }


      if (!date) {

        alert(
          "Please select the washing date."
        );

        return;
      }


      if (!shift) {

        alert(
          "Please select the washing shift."
        );

        return;
      }


      if (
targetKg<= 0
      ) {

        alert(
          "Please enter the target KG."
        );

        return;
      }


const pendingKg =
getBatchPendingKg(
batchNumber
        );


      if (
targetKg>
pendingKg + 0.01
      ) {

        alert(
          "Target KG cannot be greater than the Pending WC Kavera of " +
pendingKg.toFixed(2) +
          " KG."
        );

        return;
      }


const records =
getWashingShiftRecords();


const duplicate =
records.some(
          record =>

record.batchNumber ===
batchNumber&&

record.date ===
              date &&

record.shift ===
              shift &&

record.targetStatus !==
              "CANCELLED"
        );


      if (duplicate) {

        alert(
          "A washing target already exists for " +
batchNumber +
          " on this date and shift."
        );

        return;
      }


const cycle =
ensureWashingCycleForBatch(
          batch
        );


records.push({

        id: Date.now(),

batchId:
batch.id,

batchNumber,

cycleId:
cycle.id,

cycleNumber:
cycle.cycleNumber,

        date,

        shift,

targetKg:
          Number(
targetKg.toFixed(2)
          ),

actualWashedKg: 0,

discardedKg: 0,

achievementPercent: 0,

        staff: "",

targetStatus:
          "TARGET SET",

washingComplete: false,

correctionHistory: [],

createdAt:
          new Date().toISOString()
      });


saveWashingShiftRecords(
        records
      );


      alert(
        "Washing target saved successfully.\n\n" +

        "Batch: " +
batchNumber +
        "\n" +

        "Cycle: " +
cycle.cycleNumber +
        "\n" +

        "Target: " +
targetKg.toFixed(2) +
        " KG"
      );


modal.remove();
    };


refreshBatchSummary();
}


/* =========================================================
   MANAGER - RECORD ACTUAL WASHING
   ========================================================= */

function recordWashing() {

const records =
getWashingShiftRecords();


const pendingTargets =
records.filter(
      record =>
record.targetStatus ===
        "TARGET SET"
    );


  if (
pendingTargets.length === 0
  ) {

    alert(
      "There is no washing target waiting for the Manager."
    );

    return;
  }


const modal =
document.createElement(
      "div"
    );


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


const targetOptions =
pendingTargets.map(
      record => `

<option
          value="${record.id}"
>

          ${
record.batchNumber ||
            "Legacy"
          }

          -

          ${
record.cycleNumber ||
            ""
          }

          -

          ${record.date}

          -

          ${record.shift}

          -

          Target
          ${
            Number(
record.targetKg
            ).toLocaleString()
          }
          KG

</option>

      `
    ).join("");


modal.innerHTML = `

<div style="
background:white;
      width:94%;
      max-width:850px;
      max-height:92vh;
overflow:auto;
      padding:30px;
      border-radius:16px;
      box-shadow:
      0 12px 35px
rgba(0,0,0,.25);
    ">

<h2 style="
        margin-top:0;
      ">
        Record Washing
</h2>


<label style="
display:block;
        margin-bottom:6px;
        font-weight:600;
      ">
        Washing Target
</label>


<select
        id="washingTargetRecord"
        style="
          width:100%;
          padding:10px;
          margin-bottom:20px;
          border:1px solid #ccc;
          border-radius:8px;
        "
>

        ${targetOptions}

</select>


<div style="
display:grid;
        grid-template-columns:
        repeat(2,1fr);
        gap:14px;
        margin-bottom:20px;
      ">


<div>

<label style="
display:block;
            margin-bottom:6px;
            font-weight:600;
          ">
            Material Batch
</label>

<input
            id="washingDisplayBatch"
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

<label style="
display:block;
            margin-bottom:6px;
            font-weight:600;
          ">
            Washing Cycle
</label>

<input
            id="washingDisplayCycle"
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

<label style="
display:block;
            margin-bottom:6px;
            font-weight:600;
          ">
            Total WC Kavera (KG)
</label>

<input
            id="washingTotalCycleKg"
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

<label style="
display:block;
            margin-bottom:6px;
            font-weight:600;
          ">
            Total Washed So Far (KG)
</label>

<input
            id="washingTotalWashedKg"
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

<label style="
display:block;
            margin-bottom:6px;
            font-weight:600;
          ">
            Pending WC Kavera (KG)
</label>

<input
            id="washingPendingCycleKg"
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

<label style="
display:block;
            margin-bottom:6px;
            font-weight:600;
          ">
            Current Washed Kavera Stock
            (KG)
</label>

<input
            id="currentWashedStock"
readonly
            value="${
getWashedKaveraStock()
                .toFixed(2)
            }"
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
display:grid;
        grid-template-columns:
        1fr 1fr;
        gap:14px;
        margin-bottom:18px;
      ">


<div>

<label style="
display:block;
            margin-bottom:6px;
            font-weight:600;
          ">
            Current Shift Target (KG)
</label>

<input
            id="washingDisplayTargetKg"
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

<label style="
display:block;
            margin-bottom:6px;
            font-weight:600;
          ">
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


<label style="
display:block;
        margin-bottom:6px;
        font-weight:600;
      ">
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
        grid-template-columns:
        1fr 1fr;
        gap:14px;
        margin-bottom:20px;
      ">


<div>

<label style="
display:block;
            margin-bottom:6px;
            font-weight:600;
          ">
            KG Not Washed
</label>

<input
            id="washingDiscardedKg"
readonly
            value="0"
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

<label style="
display:block;
            margin-bottom:6px;
            font-weight:600;
          ">
            Achievement %
</label>

<input
            id="washingAchievement"
readonly
            value="0"
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


<label style="
display:flex;
align-items:flex-start;
        gap:10px;
        margin-bottom:24px;
        padding:12px;
        background:#fff8e1;
        border-radius:8px;
      ">


<input
          id="washingCycleComplete"
          type="checkbox"
          style="
            margin-top:3px;
          "
>


<span>

<strong>
            All kavera in this material
            batch is now finished.
</strong>

<br>

<small>
            Tick only when the physical
            batch is finished. Any remaining
            system balance will be recorded
            as the cycle closing variance.
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


document.body.appendChild(
    modal
  );


  function getSelectedRecord() {

const selectedId =
      Number(
modal.querySelector(
          "#washingTargetRecord"
        ).value
      );


    return records.find(
      record =>
        Number(record.id) ===
selectedId
    ) || null;
  }


  function loadSelectedTarget() {

const record =
getSelectedRecord();


    if (!record) {
      return;
    }


const batch =
getMaterialBatchRecords()
        .find(
          item =>
item.batchNumber ===
record.batchNumber
        );


const totalKg =
      batch
        ? getBatchTotalKg(batch)
        : 0;


const washedKg =
record.batchNumber
        ? getBatchWashedKg(
record.batchNumber
          )
        : 0;


const pendingKg =
record.batchNumber
        ? getBatchPendingKg(
record.batchNumber
          )
        : 0;


modal.querySelector(
      "#washingDisplayBatch"
    ).value =
record.batchNumber ||
      "Legacy Record";


modal.querySelector(
      "#washingDisplayCycle"
    ).value =
record.cycleNumber ||
      "Legacy Cycle";


modal.querySelector(
      "#washingTotalCycleKg"
    ).value =
totalKg.toFixed(2);


modal.querySelector(
      "#washingTotalWashedKg"
    ).value =
washedKg.toFixed(2);


modal.querySelector(
      "#washingPendingCycleKg"
    ).value =
pendingKg.toFixed(2);


modal.querySelector(
      "#washingDisplayTargetKg"
    ).value =
      Number(
record.targetKg || 0
      ).toFixed(2);


modal.querySelector(
      "#washingActualKg"
    ).value = "";


modal.querySelector(
      "#washingStaff"
    ).value = "";


modal.querySelector(
      "#washingCycleComplete"
    ).checked = false;


calculateWashingResults();
  }


  function calculateWashingResults() {

const targetKg =
      Number(
modal.querySelector(
          "#washingDisplayTargetKg"
        ).value
      ) || 0;


const actualKg =
      Number(
modal.querySelector(
          "#washingActualKg"
        ).value
      ) || 0;


const notWashedKg =
Math.max(
targetKg -
actualKg,
        0
      );


const achievement =
targetKg> 0
        ? (
actualKg /
targetKg
          ) * 100
        : 0;


modal.querySelector(
      "#washingDiscardedKg"
    ).value =
notWashedKg.toFixed(2);


modal.querySelector(
      "#washingAchievement"
    ).value =
achievement.toFixed(2);
  }


modal.querySelector(
    "#washingTargetRecord"
  ).onchange =
loadSelectedTarget;


modal.querySelector(
    "#washingActualKg"
  ).oninput =
calculateWashingResults;


modal.querySelector(
    "#closeWashingBtn"
  ).onclick =
    () =>modal.remove();


modal.querySelector(
    "#saveWashingBtn"
  ).onclick =
    function () {


const selectedRecord =
getSelectedRecord();


      if (!selectedRecord) {

        alert(
          "Please select a washing target."
        );

        return;
      }


const targetKg =
        Number(
selectedRecord.targetKg
        ) || 0;


const actualKg =
        Number(
modal.querySelector(
            "#washingActualKg"
          ).value
        ) || 0;


const staff =
modal.querySelector(
          "#washingStaff"
        ).value.trim();


const completeCycle =
modal.querySelector(
          "#washingCycleComplete"
        ).checked;


      if (!staff) {

        alert(
          "Please enter the staff who worked."
        );

        return;
      }


      if (
actualKg<= 0
      ) {

        alert(
          "Please enter the actual KG washed."
        );

        return;
      }


      if (
actualKg>
targetKg + 0.01
      ) {

        alert(
          "Actual KG washed cannot be greater than the Director's target."
        );

        return;
      }


      if (
selectedRecord.batchNumber
      ) {

const batchPending =
getBatchPendingKg(
selectedRecord.batchNumber
          );


        if (
actualKg>
batchPending + 0.01
        ) {

          alert(
            "Actual KG washed cannot be greater than the Pending WC Kavera of " +
batchPending.toFixed(2) +
            " KG."
          );

          return;
        }
      }


const notWashedKg =
Math.max(
targetKg -
actualKg,
          0
        );


const achievement =
targetKg> 0
          ? (
actualKg /
targetKg
            ) * 100
          : 0;


selectedRecord
        .actualWashedKg =
        Number(
actualKg.toFixed(2)
        );


selectedRecord
        .discardedKg =
        Number(
notWashedKg.toFixed(2)
        );


selectedRecord
        .achievementPercent =
        Number(
achievement.toFixed(2)
        );


selectedRecord.staff =
        staff;


selectedRecord
        .targetStatus =
        "COMPLETED";


selectedRecord
        .washingComplete =
        true;


selectedRecord
        .completedAt =
        new Date().toISOString();


saveWashingShiftRecords(
        records
      );


      let cycle = null;


      if (
selectedRecord.batchNumber
      ) {

        cycle =
recalculateWashingCycle(
selectedRecord.batchNumber
          );


        if (completeCycle) {

          cycle =
markWashingCycleComplete(
selectedRecord.batchNumber
            );
        }
      }


const ownerType =
getBatchOwnerType(
selectedRecord.batchNumber
);

let ownerStockAfter = 0;

if (ownerType === "client") {

const currentClientStock =
getClientWashedKaveraStock();

ownerStockAfter =
currentClientStock +
actualKg;

setClientWashedKaveraStock(
ownerStockAfter
  );

} else {

const currentCompanyStock =
getCompanyWashedKaveraStock();

ownerStockAfter =
currentCompanyStock +
actualKg;

setCompanyWashedKaveraStock(
ownerStockAfter
  );
}


/*
 * Keep the old combined stock temporarily
 * because some existing screens still use it.
 */
const newStock =
getWashedKaveraStock() +
actualKg;

setWashedKaveraStock(
newStock
);

const pendingAfter =
selectedRecord.batchNumber
          ? getBatchPendingKg(
selectedRecord.batchNumber
            )
          : 0;


      let message =

        "Washing record saved successfully.\n\n" +

        "Batch: " +
        (
selectedRecord.batchNumber ||
          "Legacy"
        ) +
        "\n" +

        "Cycle: " +
        (
selectedRecord.cycleNumber ||
          "Legacy"
        ) +
        "\n" +

        "Target: " +
targetKg.toFixed(2) +
        " KG\n" +

        "Actual Washed: " +
actualKg.toFixed(2) +
        " KG\n" +

        "KG Not Washed: " +
notWashedKg.toFixed(2) +
        " KG\n" +

        "Achievement: " +
achievement.toFixed(2) +
        "%\n" +

        "Pending WC: " +
pendingAfter.toFixed(2) +
        " KG\n\n" +

        "Washed Kavera Stock: " +
newStock.toFixed(2) +
        " KG";


      if (
        cycle &&
cycle.status ===
          "WASHING COMPLETE"
      ) {

        message +=

          "\n\nWashing Cycle " +
cycle.cycleNumber +
          " is WASHING COMPLETE.";


        if (
          Number(
cycle.closingVarianceKg ||
            0
          ) > 0
        ) {

          message +=

            "\nClosing variance: " +

            Number(
cycle.closingVarianceKg
            ).toFixed(2) +

            " KG.";
        }
      }


      alert(message);

modal.remove();
    };


loadSelectedTarget();
}


/* =========================================================
   DIRECTOR - CORRECT SAVED WASHING RECORD
   ========================================================= */

function editWashingRecord(
recordId
) {

const records =
getWashingShiftRecords();


const record =
records.find(
      item =>
        Number(item.id) ===
        Number(recordId)
    );


  if (!record) {

    alert(
      "Washing record not found."
    );

    return;
  }


const modal =
document.createElement(
      "div"
    );


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


modal.innerHTML = `

<div style="
background:white;
      width:94%;
      max-width:720px;
      max-height:92vh;
overflow:auto;
      padding:28px;
      border-radius:16px;
    ">

<h2 style="
        margin-top:0;
      ">
        Director Correction -
        Washing Record
</h2>


<p style="
        background:#fff8e1;
        padding:12px;
        border-radius:8px;
        color:#6b5200;
      ">
        Every correction keeps
        the old figures and the
        reason in the correction history.
</p>


<div style="
display:grid;
        grid-template-columns:
        1fr 1fr;
        gap:14px;
      ">


<div>

<label>
            Material Batch
</label>

<input
readonly
            value="${
record.batchNumber ||
              "Legacy"
            }"
            style="
              width:100%;
              padding:10px;
              background:#f3f5f4;
              border:1px solid #ccc;
              border-radius:8px;
            "
>

</div>


<div>

<label>
            Washing Cycle
</label>

<input
readonly
            value="${
record.cycleNumber ||
              "Legacy"
            }"
            style="
              width:100%;
              padding:10px;
              background:#f3f5f4;
              border:1px solid #ccc;
              border-radius:8px;
            "
>

</div>


<div>

<label>
            Date
</label>

<input
            id="editWashDate"
            type="date"
            value="${
record.date || ""
            }"
            style="
              width:100%;
              padding:10px;
              border:1px solid #ccc;
              border-radius:8px;
            "
>

</div>


<div>

<label>
            Shift
</label>

<select
            id="editWashShift"
            style="
              width:100%;
              padding:10px;
              border:1px solid #ccc;
              border-radius:8px;
            "
>

<option
              value="Day"
              ${
record.shift ===
                "Day"
                  ? "selected"
                  : ""
              }
>
              Day
</option>

<option
              value="Night"
              ${
record.shift ===
                "Night"
                  ? "selected"
                  : ""
              }
>
              Night
</option>

</select>

</div>


<div>

<label>
            Target KG
</label>

<input
            id="editWashTarget"
            type="number"
            min="0"
            step="0.01"
            value="${
              Number(
record.targetKg ||
                0
              )
            }"
            style="
              width:100%;
              padding:10px;
              border:1px solid #ccc;
              border-radius:8px;
            "
>

</div>


<div>

<label>
            Actual KG Washed
</label>

<input
            id="editWashActual"
            type="number"
            min="0"
            step="0.01"
            value="${
              Number(
record.actualWashedKg ||
                0
              )
            }"
            style="
              width:100%;
              padding:10px;
              border:1px solid #ccc;
              border-radius:8px;
            "
>

</div>

</div>


<label style="
display:block;
        margin-top:16px;
      ">
        Staff Who Worked
</label>


<input
        id="editWashStaff"
        value="${
          String(
record.staff || ""
          ).replace(
            /"/g,
            "&quot;"
          )
        }"
        style="
          width:100%;
          padding:10px;
          border:1px solid #ccc;
          border-radius:8px;
        "
>


<label style="
display:block;
        margin-top:16px;
        font-weight:600;
      ">
        Reason for Correction *
</label>


<textarea
        id="editWashReason"
        rows="3"
        placeholder="Example: Actual weight was typed as 8,000 KG instead of 800 KG"
        style="
          width:100%;
          padding:10px;
          border:1px solid #ccc;
          border-radius:8px;
        "
></textarea>


<div style="
display:flex;
justify-content:flex-end;
        gap:12px;
        margin-top:22px;
      ">


<button
          id="cancelWashEdit"
          type="button"
          style="
background:white;
            border:1px solid #ccc;
            padding:10px 18px;
            border-radius:8px;
          "
>
          Cancel
</button>


<button
          id="saveWashEdit"
          type="button"
          style="
            background:#0b5d3b;
color:white;
border:none;
            padding:10px 18px;
            border-radius:8px;
            font-weight:600;
          "
>
          Save Director Correction
</button>

</div>

</div>
  `;


document.body.appendChild(
    modal
  );


modal.querySelector(
    "#cancelWashEdit"
  ).onclick =
    () =>modal.remove();


modal.querySelector(
    "#saveWashEdit"
  ).onclick =
    function () {


const newDate =
modal.querySelector(
          "#editWashDate"
        ).value;


const newShift =
modal.querySelector(
          "#editWashShift"
        ).value;


const newTarget =
        Number(
modal.querySelector(
            "#editWashTarget"
          ).value
        ) || 0;


const newActual =
        Number(
modal.querySelector(
            "#editWashActual"
          ).value
        ) || 0;


const newStaff =
modal.querySelector(
          "#editWashStaff"
        ).value.trim();


const reason =
modal.querySelector(
          "#editWashReason"
        ).value.trim();


      if (!newDate) {

        alert(
          "Please enter the date."
        );

        return;
      }


      if (
newTarget<= 0
      ) {

        alert(
          "Target KG must be greater than zero."
        );

        return;
      }


      if (
newActual< 0
      ) {

        alert(
          "Actual KG cannot be negative."
        );

        return;
      }


      if (
newActual>
newTarget + 0.01
      ) {

        alert(
          "Actual KG washed cannot be greater than the target KG."
        );

        return;
      }


      if (!newStaff) {

        alert(
          "Please enter the staff who worked."
        );

        return;
      }


      if (!reason) {

        alert(
          "Please enter the reason for the correction."
        );

        return;
      }


const duplicate =
records.some(
          item =>

            Number(item.id) !==
              Number(record.id) &&

item.batchNumber ===
record.batchNumber&&

item.date ===
newDate&&

item.shift ===
newShift&&

item.targetStatus !==
              "CANCELLED"
        );


      if (duplicate) {

        alert(
          "Another washing record already exists for this batch, date and shift."
        );

        return;
      }


const oldActual =
        Number(
record.actualWashedKg ||
          0
        );


const stockDelta =
newActual -
oldActual;


const proposedStock =
getWashedKaveraStock() +
stockDelta;


      if (
proposedStock< -0.01
      ) {

        alert(
          "This correction would make Washed Kavera Stock negative. Check whether some washed stock has already been used in Production."
        );

        return;
      }


const oldValues = {

        date:
record.date,

        shift:
record.shift,

targetKg:
          Number(
record.targetKg ||
            0
          ),

actualWashedKg:
oldActual,

        staff:
record.staff || "",

discardedKg:
          Number(
record.discardedKg ||
            0
          ),

achievementPercent:
          Number(
record.achievementPercent ||
            0
          )
      };


const notWashedKg =
Math.max(
newTarget -
newActual,
          0
        );


const achievement =
newTarget> 0
          ? (
newActual /
newTarget
            ) * 100
          : 0;


record.date =
newDate;


record.shift =
newShift;


record.targetKg =
        Number(
newTarget.toFixed(2)
        );


record.actualWashedKg =
        Number(
newActual.toFixed(2)
        );


record.staff =
newStaff;


record.discardedKg =
        Number(
notWashedKg.toFixed(2)
        );


record.achievementPercent =
        Number(
achievement.toFixed(2)
        );


record.correctedAt =
        new Date().toISOString();


      if (
        !Array.isArray(
record.correctionHistory
        )
      ) {

record.correctionHistory =
          [];
      }


record.correctionHistory
        .push({

correctedAt:
record.correctedAt,

correctedBy:
            "Director",

          reason,

oldValues,

newValues: {

            date:
record.date,

            shift:
record.shift,

targetKg:
record.targetKg,

actualWashedKg:
record.actualWashedKg,

            staff:
record.staff,

discardedKg:
record.discardedKg,

achievementPercent:
record.achievementPercent
          }

        });


saveWashingShiftRecords(
        records
      );


setWashedKaveraStock(
proposedStock
      );


      if (
record.batchNumber
      ) {

recalculateWashingCycle(
record.batchNumber
        );
      }


      alert(

        "Washing record corrected successfully.\n\n" +

        "Old Actual: " +
oldActual.toFixed(2) +
        " KG\n" +

        "New Actual: " +
newActual.toFixed(2) +
        " KG\n" +

        "Washed Stock adjustment: " +

        (
stockDelta>= 0
            ? "+"
            : ""
        ) +

stockDelta.toFixed(2) +
        " KG"
      );


modal.remove();


      document
        .querySelectorAll(
          "[data-washing-records-modal='true']"
        )
        .forEach(
          item =>
item.remove()
        );


viewWashingRecords();
    };
}


/* =========================================================
   VIEW DIRECTOR CORRECTION HISTORY
   ========================================================= */

function viewWashingCorrectionHistory(
recordId
) {

const record =
getWashingShiftRecords()
      .find(
        item =>
          Number(item.id) ===
          Number(recordId)
      );


  if (!record) {

    alert(
      "Washing record not found."
    );

    return;
  }


const history =
Array.isArray(
record.correctionHistory
    )
      ? record.correctionHistory
      : [];


  if (
history.length === 0
  ) {

    alert(
      "This washing record has no corrections."
    );

    return;
  }


const text =
history.map(
      (item, index) =>

        "Correction " +
        (index + 1) +
        "\n" +

        "Date: " +
        new Date(
item.correctedAt
        ).toLocaleString() +
        "\n" +

        "By: " +
        (
item.correctedBy ||
          "Director"
        ) +
        "\n" +

        "Reason: " +
item.reason +
        "\n" +

        "Actual KG: " +

        Number(
item.oldValues
            ?.actualWashedKg ||
          0
        ).toFixed(2) +

        " -> " +

        Number(
item.newValues
            ?.actualWashedKg ||
          0
        ).toFixed(2) +

        "\n" +

        "Target KG: " +

        Number(
item.oldValues
            ?.targetKg ||
          0
        ).toFixed(2) +

        " -> " +

        Number(
item.newValues
            ?.targetKg ||
          0
        ).toFixed(2)

    ).join(
      "\n\n--------------------\n\n"
    );


  alert(text);
}


/* =========================================================
   VIEW WASHING RECORDS
   ========================================================= */

function viewWashingRecords() {

const records =
getWashingShiftRecords();


const modal =
document.createElement(
      "div"
    );


modal.setAttribute(
    "data-washing-records-modal",
    "true"
  );


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


const rows =
records.length

      ? records.map(
          record => {


const cycle =
record.batchNumber

                ? getWashingCycleForBatch(
record.batchNumber
                  )

                : null;


const historyCount =
Array.isArray(
record.correctionHistory
              )

                ? record
                    .correctionHistory
                    .length

                : 0;


            return `

<tr>

<td>
                  ${
record.date ||
                    ""
                  }
</td>

<td>
                  ${
record.shift ||
                    ""
                  }
</td>

<td>
                  ${
record.batchNumber ||
                    "Legacy"
                  }
</td>

<td>
                  ${
record.cycleNumber ||
                    "Legacy"
                  }
</td>

<td>
                  ${
                    Number(
record.targetKg ||
                      0
                    ).toLocaleString()
                  }
</td>

<td>
                  ${
                    Number(
record.actualWashedKg ||
                      0
                    ).toLocaleString()
                  }
</td>

<td>
                  ${
                    Number(
record.discardedKg ||
                      0
                    ).toLocaleString()
                  }
</td>

<td>
                  ${
                    Number(
record.achievementPercent ||
                      0
                    ).toFixed(2)
                  }%
</td>

<td>
                  ${
record.staff ||
                    ""
                  }
</td>

<td>
                  ${
record.targetStatus ||
                    ""
                  }
</td>

<td>
                  ${
                    cycle
                      ? cycle.status
                      : "Legacy"
                  }
</td>

<td style="
white-space:nowrap;
                ">

                  ${
record.targetStatus ===
                    "COMPLETED"

                      ? `
<button
                          type="button"
onclick="editWashingRecord(${record.id})"
                          style="
                            padding:6px 9px;
                            margin:2px;
cursor:pointer;
                          "
>
                          Director Edit
</button>
                      `

                      : ""
                  }


                  ${
historyCount> 0

                      ? `
<button
                          type="button"
onclick="viewWashingCorrectionHistory(${record.id})"
                          style="
                            padding:6px 9px;
                            margin:2px;
cursor:pointer;
                          "
>
                          History
                          (${historyCount})
</button>
                      `

                      : ""
                  }

</td>

</tr>
            `;
          }
        ).join("")

      : `

<tr>

<td
colspan="12"
            style="
text-align:center;
            "
>
            No washing records found.
</td>

</tr>
      `;


const activeCycles =
getWashingCycles()
      .filter(
        cycle =>
cycle.batchNumber
      );


const cycleSummary =
activeCycles.length

      ? activeCycles.map(
          cycle => `

<div style="
              border:1px solid #e1e7e3;
              border-radius:8px;
              padding:10px;
              min-width:210px;
            ">

<strong>
                ${cycle.cycleNumber}
</strong>

<br>

<small>
                ${cycle.batchNumber}
                •
                ${cycle.status}
</small>

<br>

<span>
                Total:
                ${
                  Number(
cycle.totalBatchKg ||
                    0
                  ).toLocaleString()
                }
                KG
</span>

<br>

<span>
                Washed:
                ${
                  Number(
cycle.totalActualWashedKg ||
                    0
                  ).toLocaleString()
                }
                KG
</span>

<br>

<span>
                Pending:
                ${
                  Number(
cycle.pendingKg ||
                    0
                  ).toLocaleString()
                }
                KG
</span>

</div>

          `
        ).join("")

      : `

<span style="
          color:#666;
        ">
          No KB/WCKB cycles created yet.
</span>

      `;


modal.innerHTML = `

<div style="
background:white;
      width:97%;
      max-width:1400px;
      max-height:92vh;
overflow:auto;
      padding:28px;
      border-radius:16px;
    ">


<h2 style="
        margin-top:0;
      ">
        Washing Records
</h2>


<div style="
        margin-bottom:18px;
        padding:12px;
        background:#eef8f2;
        border-radius:8px;
      ">

<strong>
          Current Washed Kavera Stock:
</strong>

        ${
getWashedKaveraStock()
            .toLocaleString()
        }
        KG

</div>


<h3 style="
        font-size:15px;
        margin-bottom:10px;
      ">
        Washing Cycle Summary
</h3>


<div style="
display:flex;
        gap:10px;
        overflow-x:auto;
        margin-bottom:20px;
      ">

        ${cycleSummary}

</div>


<div style="
        overflow-x:auto;
      ">

<table style="
          width:100%;
border-collapse:collapse;
          min-width:1250px;
        ">


<thead>

<tr>

<th>
                Date
</th>

<th>
                Shift
</th>

<th>
                Batch
</th>

<th>
                Cycle
</th>

<th>
                Target KG
</th>

<th>
                Actual Washed KG
</th>

<th>
                KG Not Washed
</th>

<th>
                Achievement
</th>

<th>
                Staff
</th>

<th>
                Record Status
</th>

<th>
                Cycle Status
</th>

<th>
                Director Controls
</th>

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


document.body.appendChild(
    modal
  );


modal.querySelectorAll(
    "th,td"
  ).forEach(
    cell => {

cell.style.border =
        "1px solid #ddd";

cell.style.padding =
        "9px";

cell.style.textAlign =
        "center";
    }
  );


modal.querySelector(
    "#closeWashingRecordsBtn"
  ).onclick =
    () =>modal.remove();
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



