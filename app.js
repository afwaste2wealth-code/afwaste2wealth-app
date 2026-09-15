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
<span id="shiftSettingsSummary">
${getShiftSettingsSummary()}
</span>
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
modal.remove();
manageEmployeeAccounts();
  };

modal.querySelector("#rolesPermissionsBtn").onclick = () => {
    alert(
      "Roles & Permissions will be connected next.\n\n" +
      "Roles: Director, Manager, Secretary, Team Leader and Employee."
    );
  };
modal.querySelector("#shiftSettingsBtn").onclick = () => {
modal.remove();
manageShiftSettings();
};
}
/* =========================================================
   SHIFT & WORKING HOURS SETTINGS
   ========================================================= */

function getShiftSettings() {
  return JSON.parse(
localStorage.getItem("shiftSettings") || "[]"
  );
}

function saveShiftSettings(shifts) {
localStorage.setItem(
    "shiftSettings",
JSON.stringify(shifts)
  );
}

function manageShiftSettings() {

const shifts = getShiftSettings();

const modal =
document.createElement("div");

modal.style.cssText = `
position:fixed;
    inset:0;
background:rgba(0,0,0,.55);
display:flex;
align-items:center;
justify-content:center;
    z-index:10000;
font-family:Arial,sans-serif;
    padding:10px;
  `;

modal.innerHTML = `
<div style="
background:white;
      width:760px;
      max-width:95%;
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
        Shift & Working Hours
</h2>

<div style="
        background:#eef8f2;
        padding:12px;
        border-radius:8px;
        margin-bottom:18px;
      ">
        Configure the official working times used by attendance,
        shortfall and overtime calculations.
</div>

<label>Shift Name</label>
<input
        id="shiftName"
        type="text"
        placeholder="Example: Day Shift"
        style="${settingsInputStyle()}"
>

<br><br>

<label>Start Time</label>
<div style="display:flex;gap:8px;">
<select
    id="shiftStartHour"
    style="${settingsInputStyle()}"
>
    ${Array.from({ length: 12 }, (_, i) =>
      `<option value="${i + 1}">${i + 1}</option>`
    ).join("")}
</select>

<select
    id="shiftStartMinute"
    style="${settingsInputStyle()}"
>
    ${Array.from({ length: 12 }, (_, i) => {
const minute = String(i * 5).padStart(2, "0");
      return `<option value="${minute}">${minute}</option>`;
    }).join("")}
</select>

<select
    id="shiftStartPeriod"
    style="${settingsInputStyle()}"
>
<option value="AM">AM</option>
<option value="PM">PM</option>
</select>
</div>

<br><br>

<label>End Time</label>
<div style="display:flex;gap:8px;">
<select
    id="shiftEndHour"
    style="${settingsInputStyle()}"
>
    ${Array.from({ length: 12 }, (_, i) =>
      `<option value="${i + 1}">${i + 1}</option>`
    ).join("")}
</select>

<select
    id="shiftEndMinute"
    style="${settingsInputStyle()}"
>
    ${Array.from({ length: 12 }, (_, i) => {
const minute = String(i * 5).padStart(2, "0");
      return `<option value="${minute}">${minute}</option>`;
    }).join("")}
</select>

<select
    id="shiftEndPeriod"
    style="${settingsInputStyle()}"
>
<option value="AM">AM</option>
<option value="PM">PM</option>
</select>
</div>

<br><br>

<label>Break Duration (Minutes)</label>
<input
        id="shiftBreakMinutes"
        type="number"
        min="0"
        value="60"
        style="${settingsInputStyle()}"
>

<br><br>

<label>Grace Period for Late Arrival (Minutes)</label>
<input
        id="shiftGraceMinutes"
        type="number"
        min="0"
        value="10"
        style="${settingsInputStyle()}"
>

<br><br>

<label>Status</label>
<select
        id="shiftStatus"
        style="${settingsInputStyle()}"
>
<option value="active">Active</option>
<option value="inactive">Inactive</option>
</select>

<br><br>

<button
        id="saveShift"
        style="
          width:100%;
          padding:12px;
          border:0;
          border-radius:8px;
          background:#0b5d3b;
color:white;
font-weight:bold;
cursor:pointer;
        "
>
        Save Shift
</button>

<h3 style="
        color:#0b5d3b;
        margin-top:24px;
      ">
        Existing Shifts
</h3>

<div id="shiftList"></div>

<div style="
display:flex;
        gap:10px;
        margin-top:20px;
      ">

<button
          id="backToSystemSettingsFromShift"
          style="
            flex:1;
            padding:11px;
            border:1px solid #0b5d3b;
background:white;
            color:#0b5d3b;
            border-radius:8px;
cursor:pointer;
          "
>
          Back to System Settings
</button>

<button
          id="closeShiftSettings"
          style="
            flex:1;
            padding:11px;
            border:0;
            background:#555;
color:white;
            border-radius:8px;
cursor:pointer;
          "
>
          Close
</button>

</div>

</div>
  `;

document.body.appendChild(modal);

function convert12HourTo24(timeValue, period) {
const value = String(timeValue || "").trim();

const match = value.match(
    /^(0?[1-9]|1[0-2]):([0-5]\d)$/
  );

  if (!match) {
    return "";
  }

  let hour = Number(match[1]);
const minute = match[2];

  if (period === "AM") {
    if (hour === 12) {
      hour = 0;
    }
  } else if (period === "PM") {
    if (hour !== 12) {
      hour += 12;
    }
  } else {
    return "";
  }

  return (
    String(hour).padStart(2, "0") +
    ":" +
    minute
  );
}
function convert24HourTo12(timeValue) {
const value = String(timeValue || "").trim();

const match = value.match(/^([01]\d|2[0-3]):([0-5]\d)$/);

  if (!match) {
    return value;
  }

  let hour = Number(match[1]);
const minute = match[2];

const period = hour >= 12 ? "PM" : "AM";

  hour = hour % 12;

  if (hour === 0) {
    hour = 12;
  }

  return hour + ":" + minute + " " + period;
}

  function calculateShiftHours(
startTime,
endTime,
breakMinutes
  ) {

    if (!startTime || !endTime) {
      return 0;
    }

const [startHour, startMinute] =
startTime.split(":").map(Number);

const [endHour, endMinute] =
endTime.split(":").map(Number);

    let start =
startHour * 60 + startMinute;

    let end =
endHour * 60 + endMinute;

    /*
     * Night shift:
     * if end time is earlier than start time,
     * the shift finishes the following day.
     */
    if (end <= start) {
      end += 24 * 60;
    }

const totalMinutes =
Math.max(
        end -
        start -
        Number(breakMinutes || 0),
        0
      );

    return totalMinutes / 60;
  }


  function renderShifts() {

const list =
modal.querySelector("#shiftList");

const currentShifts =
getShiftSettings();

    if (!currentShifts.length) {
list.innerHTML = `
<div style="
          padding:14px;
          background:#f5f5f5;
          border-radius:8px;
          color:#666;
        ">
          No shifts have been created yet.
</div>
      `;
      return;
    }

list.innerHTML =
currentShifts.map(shift => `

<div style="
          border:1px solid #ddd;
          border-radius:10px;
          padding:14px;
          margin-bottom:10px;
display:flex;
justify-content:space-between;
          gap:15px;
align-items:center;
        ">

<div>
<strong>
              ${escapeSettingsText(shift.name)}
</strong>

<div style="
              margin-top:5px;
              font-size:13px;
              line-height:1.6;
            ">
              Time:
              ${escapeSettingsText(convert24HourTo12(shift.startTime))}
              -
              ${escapeSettingsText(convert24HourTo12(shift.endTime))}
<br>

              Break:
              ${Number(shift.breakMinutes || 0)}
              minutes
<br>

              Normal Working Hours:
              ${Number(shift.normalHours || 0).toFixed(2)}
              hours
<br>

              Grace Period:
              ${Number(shift.graceMinutes || 0)}
              minutes
<br>

              Status:
<strong>
                ${String(shift.status || "").toUpperCase()}
</strong>
</div>
</div>

<button
            class="deleteShiftBtn"
            data-id="${shift.id}"
            style="
              border:0;
              background:#b53b3b;
color:white;
              padding:8px 12px;
              border-radius:6px;
cursor:pointer;
            "
>
            Delete
</button>

</div>

      `).join("");


list.querySelectorAll(
      ".deleteShiftBtn"
    ).forEach(button => {

button.onclick = () => {

const shiftId =
button.dataset.id;

const confirmed =
          confirm(
            "Delete this shift?"
          );

        if (!confirmed) return;

const updated =
getShiftSettings().filter(
            shift =>
              String(shift.id) !==
              String(shiftId)
          );

saveShiftSettings(updated);

renderShifts();
      };
    });
  }


modal.querySelector(
    "#saveShift"
  ).onclick = () => {

const name =
modal.querySelector(
        "#shiftName"
      ).value.trim();

const startHour =
modal.querySelector(
  "#shiftStartHour"
).value;

const startMinute =
modal.querySelector(
  "#shiftStartMinute"
).value;

const startPeriod =
modal.querySelector(
  "#shiftStartPeriod"
).value;

const endHour =
modal.querySelector(
  "#shiftEndHour"
).value;

const endMinute =
modal.querySelector(
  "#shiftEndMinute"
).value;
const startTimeInput =
startHour + ":" + startMinute;

const endTimeInput =
endHour + ":" + endMinute;

const endPeriod =
modal.querySelector(
  "#shiftEndPeriod"
).value;

const startTime =
convert12HourTo24(
startTimeInput,
startPeriod
);

const endTime =
convert12HourTo24(
endTimeInput,
endPeriod
);

const breakMinutes =
      Number(
modal.querySelector(
          "#shiftBreakMinutes"
        ).value
      );

const graceMinutes =
      Number(
modal.querySelector(
          "#shiftGraceMinutes"
        ).value
      );

const status =
modal.querySelector(
        "#shiftStatus"
      ).value;


    if (!name) {
      alert(
        "Please enter the Shift Name."
      );
      return;
    }

    if (!startTime) {
      alert(
        "Please enter the Start Time."
      );
      return;
    }

    if (!endTime) {
      alert(
        "Please enter the End Time."
      );
      return;
    }


const existingShifts =
getShiftSettings();

const duplicate =
existingShifts.some(
        shift =>
          String(shift.name)
            .toLowerCase() ===
name.toLowerCase()
      );

    if (duplicate) {
      alert(
        "A shift with this name already exists."
      );
      return;
    }


const normalHours =
calculateShiftHours(
startTime,
endTime,
breakMinutes
      );


existingShifts.push({
      id: Date.now(),
      name: name,
startTime: startTime,
endTime: endTime,
breakMinutes:
Math.max(breakMinutes || 0, 0),
graceMinutes:
Math.max(graceMinutes || 0, 0),
normalHours:
normalHours,
      status: status,
createdAt:
        new Date().toISOString()
    });


saveShiftSettings(
existingShifts
    );


modal.querySelector(
      "#shiftName"
    ).value = "";

modal.querySelector("#shiftStartHour").value = "1";
modal.querySelector("#shiftStartMinute").value = "00";
modal.querySelector("#shiftStartPeriod").value = "AM";

modal.querySelector("#shiftEndHour").value = "1";
modal.querySelector("#shiftEndMinute").value = "00";
modal.querySelector("#shiftEndPeriod").value = "AM";

modal.querySelector(
      "#shiftBreakMinutes"
    ).value = "60";

modal.querySelector(
      "#shiftGraceMinutes"
    ).value = "10";

modal.querySelector(
      "#shiftStatus"
    ).value = "active";


renderShifts();

    alert(
      "Shift saved successfully."
    );
  };


modal.querySelector(
    "#backToSystemSettingsFromShift"
  ).onclick = () => {
modal.remove();
systemSettings();
  };


modal.querySelector(
    "#closeShiftSettings"
  ).onclick = () => {
modal.remove();
  };


renderShifts();
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

function getShiftSettingsSummary() {
const shifts = JSON.parse(
localStorage.getItem("shiftSettings") || "[]"
  );

const activeShifts = shifts.filter(
    shift =>shift.status === "active"
  );

  if (activeShifts.length === 0) {
    return "No working shifts configured";
  }

  return activeShifts.map(shift => {
    return `${shift.name}: ${shift.startTime} - ${shift.endTime}`;
  }).join(" | ");
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

const employees = 
 getEmployees().filter( 
   employee => 
     employee.employmentStatus === "active");
  const shifts = getShiftSettings().filter(
    shift => shift.status === 
      "active"
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
<br><br>

<label>Assigned Shift</label>
<select
  id="teamShift"
  style="${settingsInputStyle()}"
>
<option value="">Select working shift</option>

  ${shifts.map(shift => `
<option value="${escapeSettingsText(shift.id)}">
      ${escapeSettingsText(shift.name)}
</option>
  `).join("")}
</select>

<br><br>

<label>Team Leader</label>
<select id="teamLeader"
        style="${settingsInputStyle()}">
<option value="">Select registered employee</option>
  ${employees.map(employee => `
<option value="${escapeSettingsText(employee.employeeId)}">
      ${escapeSettingsText(employee.employeeId)} - ${escapeSettingsText(employee.fullName)}
</option>
  `).join("")}
</select>

<label>Team Members</label>

<div id="teamMembers"
     style="
       border:1px solid #ccc;
       border-radius:8px;
       padding:10px;
       margin-bottom:12px;
       max-height:180px;
       overflow-y:auto;
background:white;
     ">

  ${employees.map(employee => `
<label style="
display:flex;
align-items:center;
      gap:10px;
      padding:7px 4px;
cursor:pointer;
      border-bottom:1px solid #eee;
    ">
<input
        type="checkbox"
        class="teamMemberCheckbox"
        value="${escapeSettingsText(employee.employeeId)}"
        style="
          width:18px;
          height:18px;
cursor:pointer;
        "
>
<span>
        ${escapeSettingsText(employee.employeeId)}
        - ${escapeSettingsText(employee.fullName)}
</span>
</label>
  `).join("")}

</div>

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
<button id="transferEmployeeBtn"
        style="
          flex:1;
          padding:11px;
          border:0;
          background:#0b5d3b;
color:white;
          border-radius:8px;
cursor:pointer;
font-weight:bold;
        ">
  Transfer Employee
</button>

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
<div style="margin-top:5px;">
  Shift:
<b>${
team.shiftName
      ? escapeSettingsText(team.shiftName)
      : "Not assigned"
  }</b>
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
  data-edit-team="${team.id}"
  style="
    border:0;
    background:#0b5d3b;
color:white;
    padding:8px 10px;
    border-radius:7px;
cursor:pointer;
    margin-right:6px;
  "
>
  Edit
</button>

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
  .querySelectorAll("[data-edit-team]")
  .forEach(button => {

button.onclick = () => {

const teamId =
        Number(button.dataset.editTeam);

const team =
getTeams().find(
          item =>item.id === teamId
        );

      if (!team) return;

modal.querySelector("#teamName").value =
team.name || "";

modal.querySelector("#teamLeader").value =
team.leaderEmployeeId || "";

modal.querySelector("#teamShift").value =
team.shiftId || "";

modal.querySelector("#teamStatus").value =
team.status || "active";

      modal
        .querySelectorAll(
          '#teamMembers input[type="checkbox"]'
        )
        .forEach(checkbox => {
checkbox.checked =
            (team.memberEmployeeIds || [])
              .includes(checkbox.value);
        });

modal.querySelector("#saveTeam")
        .dataset.editTeamId = team.id;

modal.querySelector("#teamName")
        .scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
    };
  });

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

const leaderEmployeeId =
modal.querySelector("#teamLeader").value;
const shiftId = 
  modal.querySelector("#teamShift").value;
const selectedShift = shifts.find(
  shift => String(shift.id)
    === String(shiftId)
    );
  
const leaderEmployee =
employees.find(
    employee =>
employee.employeeId === leaderEmployeeId
  );

const memberEmployeeIds =
Array.from(
modal.querySelectorAll('#teamMembers input[type="checkbox"]:checked')
  ).map(checkbox => 
  checkbox.value
);

const status =
modal.querySelector("#teamStatus").value;

    if (!name) {
      alert("Please enter the Team Name.");
      return;
    }

    if (!leaderEmployee) {
      alert("Please select a registered Team Leader.");
      return;
    }

const existingTeams = getTeams();
const editTeamId = Number(
  modal.querySelector("#saveTeam")
  .dataset.editTeamId || 0
  );
const alreadyExists =
existingTeams.some(
        team =>
team.name.toLowerCase() ===
name.toLowerCase() && 
          Number(team.id) !== editTeamId
      );

    if (alreadyExists) {
      alert("A team with this name already exists.");
      return;
    }
const selectedEmployeeIds = Array.from(
  new Set([
leaderEmployeeId,
    ...memberEmployeeIds
  ])
);

const conflictingTeam =
existingTeams.find(team => {
if (
  editTeamId && Number(team.id) ===
  editTeamId
) {
  return false;
}
  if (
    String(team.status || "").toLowerCase()
    !== "active"
  ) {
    return false;
  }

const assignedEmployeeIds =
Array.from(
    new Set([
team.leaderEmployeeId,
      ...(
Array.isArray(team.memberEmployeeIds)
          ? team.memberEmployeeIds
          : []
      )
    ])
  );

  return selectedEmployeeIds.some(
employeeId =>
assignedEmployeeIds.includes(employeeId)
  );
});

if (conflictingTeam) {

const assignedEmployeeIds =
Array.from(
    new Set([
conflictingTeam.leaderEmployeeId,
      ...(
Array.isArray(
conflictingTeam.memberEmployeeIds
        )
          ? conflictingTeam.memberEmployeeIds
          : []
      )
    ])
  );

const conflictingEmployeeId =
selectedEmployeeIds.find(
employeeId =>
assignedEmployeeIds.includes(employeeId)
  );

const conflictingEmployee =
employees.find(
    employee =>
employee.employeeId ===
conflictingEmployeeId
  );

const employeeName =
conflictingEmployee
      ? conflictingEmployee.fullName
      : conflictingEmployeeId;

  alert(
employeeName +
    " already belongs to " +
conflictingTeam.name +
    ". Remove or transfer the employee from that team first."
  );

  return;
}

const members = memberEmployeeIds
  .map(employeeId =>
employees.find(
      employee =>
employee.employeeId === employeeId
    )
  )
  .filter(Boolean);

const memberNames =
members.map(employee =>employee.fullName);

if (editTeamId) {

const teamIndex = existingTeams.findIndex(
    team => Number(team.id) === editTeamId
  );

  if (teamIndex !== -1) {

existingTeams[teamIndex] = {
      ...existingTeams[teamIndex],

      name: name,

shiftId: shiftId,

shiftName: selectedShift
        ? selectedShift.name
        : "",

leaderEmployeeId:
leaderEmployee.employeeId,

      leader:
leaderEmployee.fullName,

memberEmployeeIds:
memberEmployeeIds,

      members:
memberNames,

      status:
        status,

updatedAt:
        new Date().toISOString()
    };
  }

} else {

existingTeams.push({
    id: Date.now(),

    name: name,

shiftId: shiftId,

shiftName: selectedShift
      ? selectedShift.name
      : "",

leaderEmployeeId:
leaderEmployee.employeeId,

    leader:
leaderEmployee.fullName,

memberEmployeeIds:
memberEmployeeIds,

    members:
memberNames,

    status:
      status,

createdAt:
      new Date().toISOString()
  });
}

saveTeams(existingTeams);

modal.querySelector("#teamName").value = "";
modal.querySelector("#teamLeader").value = "";
  modal.querySelector("#teamShift").value = "";
modal.querySelectorAll('#teamMembers input[type="checkbox"]')
  .forEach(checkbox => {
checkbox.checked = false;
  });

  modal.querySelector("#teamStatus").value = "active";
delete
  modal.querySelector("#saveTeam")
  .dataset.editTeamId;
renderTeams();

    alert("Team saved successfully.");
  };

modal.querySelector("#transferEmployeeBtn").onclick = () => {
modal.remove();
transferEmployeeBetweenTeams();
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

/* =========================================================
   EMPLOYEE TEAM TRANSFER
   ========================================================= */

function transferEmployeeBetweenTeams() {

const teams = getTeams().filter(
    team =>
      String(team.status || "").toLowerCase() === "active"
  );

const employees = getEmployees().filter(
    employee =>employee.employmentStatus === "active"
  );

  if (teams.length< 2) {
    alert(
      "At least two active teams are required before an employee can be transferred."
    );
    return;
  }

const modal =
document.createElement("div");

modal.style.cssText = `
position:fixed;
    inset:0;
background:rgba(0,0,0,.55);
display:flex;
align-items:center;
justify-content:center;
    z-index:10000;
font-family:Arial,sans-serif;
    padding:10px;
  `;

modal.innerHTML = `
<div style="
background:white;
      width:650px;
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
        Transfer Employee
</h2>

<div style="
        background:#eef8f2;
        padding:12px;
        border-radius:8px;
        margin-bottom:18px;
      ">
        Move an employee from one active team to another.
        The transfer will be recorded in the transfer history.
</div>

<label>Employee</label>

<select
        id="transferEmployee"
        style="${settingsInputStyle()}"
>
<option value="">
          Select employee
</option>

        ${employees.map(employee => `
<option value="${
escapeSettingsText(
employee.employeeId
            )
          }">
            ${
escapeSettingsText(
employee.employeeId
              )
            } - ${
escapeSettingsText(
employee.fullName
              )
            }
</option>
        `).join("")}

</select>

<br><br>

<label>From Team</label>

<select
        id="transferFromTeam"
        style="${settingsInputStyle()}"
>
<option value="">
          Select current team
</option>

        ${teams.map(team => `
<option value="${
escapeSettingsText(team.id)
          }">
            ${escapeSettingsText(team.name)}
</option>
        `).join("")}

</select>

<br><br>

<label>To Team</label>

<select
        id="transferToTeam"
        style="${settingsInputStyle()}"
>
<option value="">
          Select new team
</option>

        ${teams.map(team => `
<option value="${
escapeSettingsText(team.id)
          }">
            ${escapeSettingsText(team.name)}
</option>
        `).join("")}

</select>

<br><br>

<div
        id="replacementLeaderArea"
        style="
display:none;
          background:#fff8e6;
          padding:12px;
          border-radius:8px;
          margin-bottom:16px;
        "
>

<strong>
          Replacement Team Leader Required
</strong>

<p style="
          font-size:13px;
          margin:8px 0;
        ">
          The employee being transferred is the current
          Team Leader. Select another member of the old
          team to become Team Leader.
</p>

<select
          id="replacementLeader"
          style="${settingsInputStyle()}"
>
<option value="">
            Select replacement leader
</option>
</select>

</div>

<label>Reason for Transfer *</label>

<textarea
        id="transferReason"
        rows="3"
        placeholder="Enter reason for transfer"
        style="${settingsInputStyle()}"
></textarea>

<br><br>

<div style="
display:flex;
        gap:10px;
      ">

<button
          id="confirmTransfer"
          style="
            flex:1;
            padding:12px;
            border:0;
            border-radius:8px;
            background:#0b5d3b;
color:white;
font-weight:bold;
cursor:pointer;
          "
>
          Transfer Employee
</button>

<button
          id="cancelTransfer"
          style="
            flex:1;
            padding:12px;
            border:0;
            border-radius:8px;
            background:#555;
color:white;
cursor:pointer;
          "
>
          Cancel
</button>

</div>

</div>
  `;

document.body.appendChild(modal);


  function findTeamById(teamId) {
    return getTeams().find(
      team =>
        String(team.id) === String(teamId)
    );
  }


  function employeeBelongsToTeam(
employeeId,
    team
  ) {

    if (!team) return false;

    if (
      String(team.leaderEmployeeId) ===
      String(employeeId)
    ) {
      return true;
    }

    return (
Array.isArray(team.memberEmployeeIds) &&
team.memberEmployeeIds.some(
        id =>
          String(id) === String(employeeId)
      )
    );
  }


  function updateReplacementLeaderBox() {

const employeeId =
modal.querySelector(
        "#transferEmployee"
      ).value;

const fromTeamId =
modal.querySelector(
        "#transferFromTeam"
      ).value;

const area =
modal.querySelector(
        "#replacementLeaderArea"
      );

const replacementSelect =
modal.querySelector(
        "#replacementLeader"
      );

area.style.display = "none";

replacementSelect.innerHTML = `
<option value="">
        Select replacement leader
</option>
    `;

    if (!employeeId || !fromTeamId) {
      return;
    }

const fromTeam =
findTeamById(fromTeamId);

    if (!fromTeam) return;

const isLeader =
      String(
fromTeam.leaderEmployeeId
      ) === String(employeeId);

    if (!isLeader) return;

const possibleReplacementIds =
Array.isArray(
fromTeam.memberEmployeeIds
      )
        ? fromTeam.memberEmployeeIds.filter(
            id =>
              String(id) !==
              String(employeeId)
          )
        : [];

const possibleReplacements =
possibleReplacementIds
        .map(id =>
employees.find(
            employee =>
              String(employee.employeeId) ===
              String(id)
          )
        )
        .filter(Boolean);

area.style.display = "block";

possibleReplacements.forEach(
      employee => {

const option =
document.createElement("option");

option.value =
employee.employeeId;

option.textContent =
employee.employeeId +
          " - " +
employee.fullName;

replacementSelect.appendChild(
          option
        );
      }
    );
  }


modal.querySelector(
    "#transferEmployee"
  ).onchange =
updateReplacementLeaderBox;

modal.querySelector(
    "#transferFromTeam"
  ).onchange =
updateReplacementLeaderBox;


modal.querySelector(
    "#cancelTransfer"
  ).onclick = () => {
modal.remove();
  };


modal.querySelector(
    "#confirmTransfer"
  ).onclick = () => {

const employeeId =
modal.querySelector(
        "#transferEmployee"
      ).value;

const fromTeamId =
modal.querySelector(
        "#transferFromTeam"
      ).value;

const toTeamId =
modal.querySelector(
        "#transferToTeam"
      ).value;

const reason =
modal.querySelector(
        "#transferReason"
      ).value.trim();

const replacementLeaderId =
modal.querySelector(
        "#replacementLeader"
      ).value;


    if (!employeeId) {
      alert("Please select an employee.");
      return;
    }

    if (!fromTeamId) {
      alert("Please select the current team.");
      return;
    }

    if (!toTeamId) {
      alert("Please select the new team.");
      return;
    }

    if (
      String(fromTeamId) ===
      String(toTeamId)
    ) {
      alert(
        "The current team and new team cannot be the same."
      );
      return;
    }

    if (!reason) {
      alert(
        "Please enter the reason for the transfer."
      );
      return;
    }


const allTeams = getTeams();

const fromTeamIndex =
allTeams.findIndex(
        team =>
          String(team.id) ===
          String(fromTeamId)
      );

const toTeamIndex =
allTeams.findIndex(
        team =>
          String(team.id) ===
          String(toTeamId)
      );

    if (
fromTeamIndex === -1 ||
toTeamIndex === -1
    ) {
      alert("Team record not found.");
      return;
    }

const fromTeam =
allTeams[fromTeamIndex];

const toTeam =
allTeams[toTeamIndex];


    if (
      !employeeBelongsToTeam(
employeeId,
fromTeam
      )
    ) {
      alert(
        "This employee does not belong to " +
fromTeam.name +
        "."
      );
      return;
    }


const employee =
employees.find(
        item =>
          String(item.employeeId) ===
          String(employeeId)
      );

    if (!employee) {
      alert("Employee record not found.");
      return;
    }


const employeeWasLeader =
      String(
fromTeam.leaderEmployeeId
      ) === String(employeeId);


    if (employeeWasLeader) {

      if (!replacementLeaderId) {
        alert(
          "Please select a replacement Team Leader for " +
fromTeam.name +
          "."
        );
        return;
      }

const replacementLeader =
employees.find(
          item =>
            String(item.employeeId) ===
            String(replacementLeaderId)
        );

      if (!replacementLeader) {
        alert(
          "Replacement Team Leader record not found."
        );
        return;
      }

fromTeam.leaderEmployeeId =
replacementLeader.employeeId;

fromTeam.leader =
replacementLeader.fullName;
    }


fromTeam.memberEmployeeIds =
Array.isArray(
fromTeam.memberEmployeeIds
      )
        ? fromTeam.memberEmployeeIds.filter(
            id =>
              String(id) !==
              String(employeeId)
          )
        : [];

fromTeam.members =
Array.isArray(fromTeam.members)
        ? fromTeam.members.filter(
            name =>
              String(name) !==
              String(employee.fullName)
          )
        : [];


    if (
      !Array.isArray(
toTeam.memberEmployeeIds
      )
    ) {
toTeam.memberEmployeeIds = [];
    }

    if (
      !toTeam.memberEmployeeIds.some(
        id =>
          String(id) ===
          String(employeeId)
      )
    ) {
toTeam.memberEmployeeIds.push(
employee.employeeId
      );
    }


    if (!Array.isArray(toTeam.members)) {
toTeam.members = [];
    }

    if (
      !toTeam.members.includes(
employee.fullName
      )
    ) {
toTeam.members.push(
employee.fullName
      );
    }


allTeams[fromTeamIndex] =
fromTeam;

allTeams[toTeamIndex] =
toTeam;

saveTeams(allTeams);


const transferHistory =
JSON.parse(
localStorage.getItem(
          "teamTransferHistory"
        ) || "[]"
      );

transferHistory.push({
      id: Date.now(),
employeeId:
employee.employeeId,
employeeName:
employee.fullName,
fromTeamId:
fromTeam.id,
fromTeamName:
fromTeam.name,
toTeamId:
toTeam.id,
toTeamName:
toTeam.name,
      reason:
        reason,
wasTeamLeader:
employeeWasLeader,
replacementLeaderId:
employeeWasLeader
          ? replacementLeaderId
          : "",
transferredAt:
        new Date().toISOString()
    });

localStorage.setItem(
      "teamTransferHistory",
JSON.stringify(
transferHistory
      )
    );


    alert(
employee.fullName +
      " transferred successfully from " +
fromTeam.name +
      " to " +
toTeam.name +
      "."
    );

modal.remove();

manageTeams();
  };
}

/* =========================================================
   EMPLOYEE ATTENDANCE, SHORTFALL, OVERTIME & ALLOWANCE
   ========================================================= */

function getAttendanceRecords() {
  return JSON.parse(
localStorage.getItem("attendanceRecords") || "[]"
  );
}

function saveAttendanceRecords(records) {
localStorage.setItem(
    "attendanceRecords",
JSON.stringify(records)
  );
}

function attendanceTimeToMinutes(time) {
  if (!time) return null;

const parts = String(time).split(":");
  if (parts.length< 2) return null;

  return (
    Number(parts[0]) * 60 +
    Number(parts[1])
  );
}

function getEmployeeTeamForAttendance(employeeId) {
const teams = getTeams();

  return teams.find(team => {
const leaderMatch =
      String(team.leaderEmployeeId || "") ===
      String(employeeId);

const memberMatch =
Array.isArray(team.memberEmployeeIds) &&
team.memberEmployeeIds.some(
        id => String(id) === String(employeeId)
      );

    return leaderMatch || memberMatch;
  }) || null;
}

function getAttendanceShift(team) {
  if (!team) return null;

const shifts =
typeofgetShiftSettings === "function"
      ? getShiftSettings()
      : [];

  if (!Array.isArray(shifts)) return null;

  return shifts.find(shift =>
    String(shift.id || "") ===
      String(team.shiftId || "") ||
    String(shift.name || "").toLowerCase() ===
      String(team.shiftName || "").toLowerCase()
  ) || null;
}

function calculateAttendanceTimes(
  shift,
timeIn,
timeOut,
  status
) {
  if (
    String(status).toLowerCase() === "absent"
  ) {
    return {
workedMinutes: 0,
shortfallMinutes: 0,
overtimeMinutes: 0,
lateMinutes: 0,
earlyLeaveMinutes: 0
    };
  }

  if (!shift || !timeIn || !timeOut) {
    return {
workedMinutes: 0,
shortfallMinutes: 0,
overtimeMinutes: 0,
lateMinutes: 0,
earlyLeaveMinutes: 0
    };
  }

const shiftStart =
attendanceTimeToMinutes(
shift.startTime || shift.start
    );

  let shiftEnd =
attendanceTimeToMinutes(
shift.endTime || shift.end
    );

  let actualIn =
attendanceTimeToMinutes(timeIn);

  let actualOut =
attendanceTimeToMinutes(timeOut);

  if (
shiftStart === null ||
shiftEnd === null ||
actualIn === null ||
actualOut === null
  ) {
    return {
workedMinutes: 0,
shortfallMinutes: 0,
overtimeMinutes: 0,
lateMinutes: 0,
earlyLeaveMinutes: 0
    };
  }

  /*
   * Handles night shifts crossing midnight.
   */
  if (shiftEnd<= shiftStart) {
shiftEnd += 1440;

    if (actualOut<= actualIn) {
actualOut += 1440;
    }

    if (actualIn<shiftStart) {
actualIn += 1440;
actualOut += 1440;
    }
  } else if (actualOut<actualIn) {
actualOut += 1440;
  }

const graceMinutes =
    Number(
shift.gracePeriod ??
shift.graceMinutes ??
      0
    ) || 0;

const breakMinutes =
    Number(
shift.breakDuration ??
shift.breakMinutes ??
      0
    ) || 0;

const scheduledMinutes =
Math.max(
shiftEnd -
shiftStart -
breakMinutes,
      0
    );

const workedMinutes =
Math.max(
actualOut -
actualIn -
breakMinutes,
      0
    );

const rawLate =
Math.max(actualIn - shiftStart, 0);

const lateMinutes =
rawLate<= graceMinutes
      ? 0
      : rawLate;

const earlyLeaveMinutes =
Math.max(shiftEnd - actualOut, 0);

const shortfallMinutes =
Math.max(
lateMinutes + earlyLeaveMinutes,
      0
    );

const overtimeMinutes =
Math.max(
workedMinutes -
scheduledMinutes,
      0
    );

  return {
workedMinutes,
shortfallMinutes,
overtimeMinutes,
lateMinutes,
earlyLeaveMinutes
  };
}

function getEmployeeMonthlyAttendanceSummary(
employeeId,
  year,
  month
) {
const employee = getEmployees().find(
    item =>
      String(item.employeeId) ===
      String(employeeId)
  );

  if (!employee) return null;

const records =
getAttendanceRecords().filter(record => {
const date = new Date(
record.date + "T00:00:00"
      );

      return (
        String(record.employeeId) ===
          String(employeeId) &&
date.getFullYear() === Number(year) &&
date.getMonth() === Number(month)
      );
    });

const totalOvertimeMinutes =
records.reduce(
      (sum, record) =>
        sum +
        Number(record.overtimeMinutes || 0),
      0
    );

const totalShortfallMinutes =
records.reduce(
      (sum, record) =>
        sum +
        Number(record.shortfallMinutes || 0),
      0
    );

const absentDays =
records.filter(
      record =>
        String(record.status)
          .toLowerCase() === "absent"
    ).length;

const netOvertimeMinutes =
Math.max(
totalOvertimeMinutes -
totalShortfallMinutes,
      0
    );

const monthlyAllowance =
    Number(employee.monthlyAllowance || 0);

  /*
 * Daily allowance is based on the actual calenda days in the selected month.
 * Every absence causes the same deduction,
 * whether approved or unapproved.
 */

const daysInMonth =
  new Date(number(year),
           Number(month)+1,
           0).getDate();

const dailyAllowance = 
daysInMonth> 0
    ? monthlyAllowance / daysInMonth
    : 0;

const absenceDeduction =
dailyAllowance * absentDays;

const earnedAllowance =
Math.max(
monthlyAllowance - absenceDeduction,
    0
  );

  return {
employeeId: employee.employeeId,
employeeName: employee.fullName,
monthlyAllowance,
daysInMonth,
absentDays,
absenceDeduction,
earnedAllowance,
totalOvertimeMinutes,
totalShortfallMinutes,
netOvertimeMinutes
  };
}

function recordAttendance() {
const employees = getEmployees().filter(
    employee =>
      String(
employee.employmentStatus || ""
      ).toLowerCase() === "active"
  );

  if (!employees.length) {
    alert(
      "No active employees are registered."
    );
    return;
  }

const modal =
document.createElement("div");

modal.style.cssText = `
position:fixed;
    inset:0;
background:rgba(0,0,0,.55);
display:flex;
align-items:center;
justify-content:center;
    z-index:100000;
font-family:Arial,sans-serif;
    padding:10px;
  `;

modal.innerHTML = `
<div style="
background:white;
      width:700px;
      max-width:96%;
      max-height:94vh;
overflow:auto;
      border-radius:14px;
      padding:24px;
      box-shadow:0 10px 40px rgba(0,0,0,.3);
    ">

<h2 style="
        margin-top:0;
        color:#0b5d3b;
      ">
        Employee Attendance
</h2>

<p style="
        background:#eef8f2;
        padding:12px;
        border-radius:8px;
      ">
        Record the employee's actual attendance.
        Working hours, shortfall and overtime are
        calculated automatically.
</p>

<label>Date</label>
<input
        id="attendanceDate"
        type="date"
        style="${settingsInputStyle()}"
>

<br><br>

<label>Employee</label>
<select
        id="attendanceEmployee"
        style="${settingsInputStyle()}"
>
<option value="">
          Select employee
</option>

        ${employees.map(employee => `
<option value="${
escapeSettingsText(
employee.employeeId
            )
          }">
            ${
escapeSettingsText(
employee.employeeId
              )
            } - ${
escapeSettingsText(
employee.fullName
              )
            }
</option>
        `).join("")}
</select>

<br><br>

<div
        id="attendanceEmployeeInfo"
        style="
          background:#f7f7f7;
          padding:12px;
          border-radius:8px;
        "
>
        Select an employee to view Team and Shift.
</div>

<br>

<label>Attendance Status</label>
<select
        id="attendanceStatus"
        style="${settingsInputStyle()}"
>
<option value="Present">
          Present
</option>
<option value="Absent">
          Absent
</option>
</select>

<br><br>

<div id="attendanceTimeArea">

<label>Time In</label>
<input
          id="attendanceTimeIn"
          type="time"
          style="${settingsInputStyle()}"
>

<br><br>

<label>Time Out</label>
<input
          id="attendanceTimeOut"
          type="time"
          style="${settingsInputStyle()}"
>

</div>

<div
        id="absenceReasonArea"
        style="display:none;"
>
<label>Absence Reason</label>

<select
          id="absenceReason"
          style="${settingsInputStyle()}"
>
<option value="">
            Select reason
</option>
<option value="Sick">
            Sick
</option>
<option value="Approved Leave">
            Approved Leave
</option>
<option value="Permission">
            Permission
</option>
<option value="Unapproved Absence">
            Unapproved Absence
</option>
<option value="Other">
            Other
</option>
</select>
</div>

<br>

<label>Manager Remarks</label>
<textarea
        id="attendanceRemarks"
        rows="3"
        style="${settingsInputStyle()}"
        placeholder="Optional remarks"
></textarea>

<br><br>

<button
        id="saveAttendance"
        style="
          border:0;
          background:#0b5d3b;
color:white;
          padding:12px 18px;
          border-radius:8px;
cursor:pointer;
font-weight:bold;
        "
>
        Save Attendance
</button>

<button
        id="viewAttendanceSummary"
        style="
          border:0;
          background:#0d6efd;
color:white;
          padding:12px 18px;
          border-radius:8px;
cursor:pointer;
font-weight:bold;
          margin-left:6px;
        "
>
        Monthly Summary
</button>

<button
        id="closeAttendance"
        style="
          border:0;
          background:#6c757d;
color:white;
          padding:12px 18px;
          border-radius:8px;
cursor:pointer;
font-weight:bold;
          margin-left:6px;
        "
>
        Close
</button>

</div>
  `;

document.body.appendChild(modal);

const dateInput =
modal.querySelector("#attendanceDate");

dateInput.value =
    new Date().toISOString().slice(0, 10);

const employeeSelect =
modal.querySelector(
      "#attendanceEmployee"
    );

const statusSelect =
modal.querySelector(
      "#attendanceStatus"
    );

const timeArea =
modal.querySelector(
      "#attendanceTimeArea"
    );

const reasonArea =
modal.querySelector(
      "#absenceReasonArea"
    );

  function updateEmployeeInfo() {
const employeeId =
employeeSelect.value;

const info =
modal.querySelector(
        "#attendanceEmployeeInfo"
      );

    if (!employeeId) {
info.innerHTML =
        "Select an employee to view Team and Shift.";
      return;
    }

const team =
getEmployeeTeamForAttendance(
employeeId
      );

const shift =
getAttendanceShift(team);

info.innerHTML = `
<strong>Team:</strong>
      ${
        team
          ? escapeSettingsText(team.name)
          : "Not Assigned"
      }
<br>

<strong>Shift:</strong>
      ${
        shift
          ? escapeSettingsText(
shift.name ||
team.shiftName ||
              "Assigned"
            )
          : (
              team &&
team.shiftName
                ? escapeSettingsText(
team.shiftName
                  )
                : "Not Assigned"
            )
      }
    `;
  }

employeeSelect.onchange =
updateEmployeeInfo;

statusSelect.onchange = () => {
const absent =
statusSelect.value === "Absent";

timeArea.style.display =
      absent ? "none" : "block";

reasonArea.style.display =
      absent ? "block" : "none";
  };

modal.querySelector(
    "#closeAttendance"
  ).onclick = () => {
modal.remove();
  };

modal.querySelector(
    "#saveAttendance"
  ).onclick = () => {
const employeeId =
employeeSelect.value;

const date =
dateInput.value;

const status =
statusSelect.value;

    if (!employeeId || !date) {
      alert(
        "Please select employee and date."
      );
      return;
    }

const employee =
employees.find(
        item =>
          String(item.employeeId) ===
          String(employeeId)
      );

const team =
getEmployeeTeamForAttendance(
employeeId
      );

const shift =
getAttendanceShift(team);

    if (!team) {
      alert(
        "This employee is not assigned to a team."
      );
      return;
    }

    if (!shift) {
      alert(
        "The employee's team does not have a valid shift."
      );
      return;
    }

    let timeIn = "";
    let timeOut = "";
    let absenceReason = "";

    if (status === "Present") {
timeIn =
modal.querySelector(
          "#attendanceTimeIn"
        ).value;

timeOut =
modal.querySelector(
          "#attendanceTimeOut"
        ).value;

      if (!timeIn || !timeOut) {
        alert(
          "Please enter Time In and Time Out."
        );
        return;
      }
    } else {
absenceReason =
modal.querySelector(
          "#absenceReason"
        ).value;

      if (!absenceReason) {
        alert(
          "Please select the absence reason."
        );
        return;
      }
    }

const records =
getAttendanceRecords();

const duplicate =
records.some(record =>
        String(record.employeeId) ===
          String(employeeId) &&
record.date === date
      );

    if (duplicate) {
      alert(
        "Attendance for this employee has already been recorded for this date."
      );
      return;
    }

const calculations =
calculateAttendanceTimes(
        shift,
timeIn,
timeOut,
        status
      );

const record = {
      id: Date.now(),
      date,
employeeId:
employee.employeeId,
employeeName:
employee.fullName,
teamId:
team.id || "",
teamName:
team.name || "",
shiftId:
shift.id || "",
shiftName:
shift.name ||
team.shiftName ||
        "",
      status,
absenceReason,
timeIn,
timeOut,
workedMinutes:
calculations.workedMinutes,
shortfallMinutes:
calculations.shortfallMinutes,
overtimeMinutes:
calculations.overtimeMinutes,
lateMinutes:
calculations.lateMinutes,
earlyLeaveMinutes:
calculations.earlyLeaveMinutes,
      remarks:
modal.querySelector(
          "#attendanceRemarks"
        ).value.trim(),
recordedAt:
        new Date().toISOString()
    };

records.push(record);
saveAttendanceRecords(records);

    alert(
      "Attendance saved successfully.\n\n" +
      "Worked: " +
      (
record.workedMinutes / 60
      ).toFixed(2) +
      " hrs\n" +
      "Shortfall: " +
      (
record.shortfallMinutes / 60
      ).toFixed(2) +
      " hrs\n" +
      "Overtime: " +
      (
record.overtimeMinutes / 60
      ).toFixed(2) +
      " hrs"
    );

modal.remove();
  };

modal.querySelector(
    "#viewAttendanceSummary"
  ).onclick = () => {
const employeeId =
employeeSelect.value;

    if (!employeeId) {
      alert(
        "Select an employee first."
      );
      return;
    }

const selectedDate =
      new Date(
dateInput.value + "T00:00:00"
      );

const summary =
getEmployeeMonthlyAttendanceSummary(
employeeId,
selectedDate.getFullYear(),
selectedDate.getMonth()
      );

    if (!summary) {
      alert(
        "Unable to calculate summary."
      );
      return;
    }

    alert(
summary.employeeName +
      "\n\nMonthly Allowance: UGX " +
summary.monthlyAllowance
        .toLocaleString() +
      "\nRecorded Days: " +
summary.recordedDays +
      "\nAbsent Days: " +
summary.absentDays +
      "\nAbsence Deduction: UGX " +
Math.round(
summary.absenceDeduction
      ).toLocaleString() +
      "\nAllowance Earned: UGX " +
Math.round(
summary.earnedAllowance
      ).toLocaleString() +
      "\nTotal Overtime: " +
      (
summary.totalOvertimeMinutes /
        60
      ).toFixed(2) +
      " hrs" +
      "\nTotal Shortfall: " +
      (
summary.totalShortfallMinutes /
        60
      ).toFixed(2) +
      " hrs" +
      "\nNet Overtime: " +
      (
summary.netOvertimeMinutes /
        60
      ).toFixed(2) +
      " hrs"
    );
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
   EMPLOYEE ACCOUNTS
   ========================================================= */

function getEmployees() {
  return JSON.parse(
localStorage.getItem("employees") || "[]"
  );
}


function saveEmployees(employees) {
localStorage.setItem(
    "employees",
JSON.stringify(employees)
  );
}


function getNextEmployeeId() {

const employees = getEmployees();

  let highest = 0;

employees.forEach(employee => {

const match =
      String(employee.employeeId || "")
        .match(/^EMP(\d+)$/i);

    if (match) {
      highest = Math.max(
        highest,
        Number(match[1])
      );
    }
  });

  return "EMP" +
    String(highest + 1).padStart(3, "0");
}

function getEmployeeBirthdayReminders() {
const employees = getEmployees();
const today = new Date();

today.setHours(0, 0, 0, 0);

const reminders = [];

employees.forEach(employee => {
    if (!employee.dateOfBirth) return;

const parts = employee.dateOfBirth.split("-");
    if (parts.length !== 3) return;

const birthMonth = Number(parts[1]) - 1;
const birthDay = Number(parts[2]);

    let nextBirthday = new Date(
today.getFullYear(),
birthMonth,
birthDay
    );

nextBirthday.setHours(0, 0, 0, 0);

    if (nextBirthday< today) {
nextBirthday = new Date(
today.getFullYear() + 1,
birthMonth,
birthDay
      );
    }

const daysRemaining = Math.round(
      (nextBirthday - today) /
      (1000 * 60 * 60 * 24)
    );

    if (
daysRemaining === 0 ||
daysRemaining === 1 ||
daysRemaining === 7
    ) {
reminders.push({
employeeId: employee.employeeId,
fullName: employee.fullName,
dateOfBirth: employee.dateOfBirth,
daysRemaining: daysRemaining
      });
    }
  });

  return reminders;
}

function manageEmployeeAccounts() {

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
      width:800px;
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
        gap:15px;
        margin-bottom:20px;
      ">

<div>
<h2 style="
            margin:0;
            color:#0b5d3b;
          ">
            Employee Accounts
</h2>

<div style="
            color:#666;
            font-size:13px;
            margin-top:5px;
          ">
            Register and manage company employees
</div>
</div>

${getEmployeeBirthdayReminders().length > 0 ? `
<div style="
    margin:14px 0;
    padding:12px 14px;
    background:#fff8e1;
    border:1px solid #f0c36d;
    border-radius:8px;
  ">
<div style="
font-weight:bold;
      color:#8a5a00;
      margin-bottom:8px;
    ">
🎂 Birthday Reminders
</div>

    ${getEmployeeBirthdayReminders()
      .map(reminder => `
<div style="
          padding:5px 0;
          font-size:14px;
          color:#333;
        ">
          ${
reminder.daysRemaining === 0
              ? `🎉 Today is ${escapeSettingsText(reminder.fullName)}'s birthday!`
              : reminder.daysRemaining === 1
                ? `🎂 ${escapeSettingsText(reminder.fullName)}'s birthday is tomorrow.`
                : `🎂 ${escapeSettingsText(reminder.fullName)}'s birthday is in ${reminder.daysRemaining} days.`
          }
</div>
      `)
      .join("")}
</div>
` : ""}

<button id="registerNewEmployee"
          style="
            border:0;
            background:#0b5d3b;
color:white;
            padding:11px 15px;
            border-radius:8px;
cursor:pointer;
font-weight:bold;
          ">
          + Register New Employee
</button>
<button id="printBlankEmployeeForm"
  style="
    border:0;
    background:#198754;
color:white;
    padding:11px 15px;
    border-radius:8px;
cursor:pointer;
font-weight:bold;
    margin-left:8px;
  ">
📄 Print Blank Employee Form
</button>

</div>

<div id="employeeList"></div>

<div style="
display:flex;
        gap:10px;
        margin-top:20px;
      ">

<button id="backEmployeeSettings"
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

<button id="closeEmployeeAccounts"
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


  function renderEmployees() {

const list =
modal.querySelector("#employeeList");

const employees =
getEmployees();

    if (!employees.length) {

list.innerHTML = `
<div style="
          padding:25px;
text-align:center;
          background:#f5f5f5;
          border-radius:9px;
          color:#666;
        ">
          No employees registered yet.<br><br>
          Click <b>+ Register New Employee</b>
          to add the first employee.
</div>
      `;

      return;
    }


list.innerHTML = `
<div style="
overflow:auto;
        border:1px solid #ddd;
        border-radius:9px;
      ">

<table style="
          width:100%;
border-collapse:collapse;
          font-size:13px;
        ">

<thead>
<tr style="
              background:#eef8f2;
text-align:left;
            ">
<th style="padding:10px;">ID</th>
<th style="padding:10px;">Employee</th>
<th style="padding:10px;">Position</th>
<th style="padding:10px;">Role</th>
<th style="padding:10px;">Status</th>
<th style="padding:10px;">Login</th>
<th style="padding:10px;">Action</th>
</tr>
</thead>

<tbody>

            ${employees.map(employee => `
<tr style="
                border-top:1px solid #eee;
              ">

<td style="padding:10px;">
<b>
                    ${escapeSettingsText(
employee.employeeId
                    )}
</b>
</td>

<td style="padding:10px;">
                  ${escapeSettingsText(
employee.fullName
                  )}

<div style="
                    color:#777;
                    font-size:11px;
                    margin-top:3px;
                  ">
                    ${escapeSettingsText(
employee.phone
                    )}
</div>
</td>

<td style="padding:10px;">
                  ${escapeSettingsText(
employee.position
                  )}
</td>

<td style="padding:10px;">
                  ${escapeSettingsText(
employee.role
                  )}
</td>

<td style="padding:10px;">
                  ${
employee.employmentStatus === "active"
                      ? "Active"
                      : "Inactive"
                  }
</td>

<td style="padding:10px;">
                  ${
employee.accountStatus === "activated"
                      ? "Activated"
                      : "Not Activated"
                  }
</td>

<td style="padding:10px;">
<button
    type="button"
onclick="editEmployeeAsDirector('${employee.employeeId}')"
    style="
      border:0;
      background:#0b5d3b;
color:white;
      padding:7px 12px;
      border-radius:6px;
cursor:pointer;
font-weight:bold;
    "
>
    Edit
</button>
</td>


</tr>
            `).join("")}

</tbody>

</table>

</div>
    `;
  }


modal.querySelector(
    "#registerNewEmployee"
  ).onclick = () => {

modal.remove();
registerNewEmployee();
  };

modal.querySelector(
  "#printBlankEmployeeForm"
).onclick = () => {
printBlankEmployeeForm();
};

modal.querySelector(
    "#backEmployeeSettings"
  ).onclick = () => {

modal.remove();
systemSettings();
  };


modal.querySelector(
    "#closeEmployeeAccounts"
  ).onclick = () => {

modal.remove();
  };


renderEmployees();
}
function printBlankEmployeeForm() {
const printWindow = window.open("", "_blank");

  if (!printWindow) {
    alert("Please allow pop-ups to print the employee form.");
    return;
  }

printWindow.document.write(`
<!DOCTYPE html>
<html>
<head>
<title>Employee Registration Form</title>

<style>
    @page {
      size: A4;
      margin: 12mm;
    }

    * {
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      color: #111;
      margin: 0;
      font-size: 12px;
    }

    .header {
      text-align: center;
      border-bottom: 2px solid #0b5d3b;
      padding-bottom: 8px;
      margin-bottom: 12px;
    }

    .header h1 {
      margin: 0;
      font-size: 20px;
      color: #0b5d3b;
    }

    .header h2 {
      margin: 5px 0 0;
      font-size: 15px;
    }

    .top-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
    }

    .employee-id {
      width: 65%;
    }

    .photo-box {
      width: 110px;
      height: 130px;
      border: 1px solid #333;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .section {
      margin-top: 12px;
      page-break-inside: avoid;
    }

    .section-title {
      background: #e7f3ed;
      border: 1px solid #999;
      padding: 6px;
      font-weight: bold;
      font-size: 13px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px 18px;
      padding-top: 8px;
    }

    .field {
      min-height: 32px;
    }

    .label {
      font-weight: bold;
      margin-bottom: 14px;
    }

    .line {
      border-bottom: 1px solid #333;
      height: 10px;
    }

    .full {
      grid-column: 1 / -1;
    }

    .declaration {
      line-height: 1.5;
      margin-top: 8px;
    }

    .signature-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-top: 28px;
    }

    .signature {
      border-top: 1px solid #333;
      padding-top: 4px;
    }

    .no-print {
      text-align: center;
      margin: 15px 0;
    }

    .print-button {
      padding: 10px 22px;
      background: #0b5d3b;
      color: white;
      border: 0;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
    }

    @media print {
      .no-print {
        display: none;
      }
    }
</style>
</head>

<body>

<div class="no-print">
<button
      class="print-button"
onclick="window.print()"
>
      Print / Save as PDF
</button>
</div>

<div class="header">
<h1>A&F WEKAVERA LTD</h1>
<h2>EMPLOYEE REGISTRATION FORM</h2>
</div>

<div class="top-row">

<div class="employee-id">
<strong>Employee ID:</strong>
      ___________________________

<br><br>

<strong>Date of Registration:</strong>
      ___________________________
</div>

<div class="photo-box">
      Attach<br>
      Passport<br>
      Photo
</div>

</div>

<div class="section">

<div class="section-title">
      1. BASIC INFORMATION
</div>

<div class="grid">

<div class="field">
<div class="label">Full Name</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Gender</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Date of Birth</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Nationality</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">NIN / National ID</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Phone Number</div>
<div class="line"></div>
</div>

<div class="field full">
<div class="label">Residential Address</div>
<div class="line"></div>
</div>

</div>
</div>

<div class="section">

<div class="section-title">
      2. FAMILY & EMERGENCY INFORMATION
</div>

<div class="grid">

<div class="field">
<div class="label">Son / Daughter of</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Parent / Guardian Contact</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Next of Kin</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Relationship</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Next-of-Kin Contact</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Emergency Contact Name</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Emergency Relationship</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Emergency Primary Phone</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Emergency Alternative Phone</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Emergency Contact Address</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Referred By</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Referee Contact Number</div>
<div class="line"></div>
</div>

</div>
</div>

<div class="section">

<div class="section-title">
      3. EMPLOYMENT INFORMATION
</div>

<div class="grid">

<div class="field">
<div class="label">Date Joined</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Job / Position</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Department / Work Area</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Employment Type</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">System Role</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Employment Status</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Monthly Allowance (UGX)</div>
<div class="line"></div>
</div>

</div>
</div>

<div class="section">

<div class="section-title">
      4. EMPLOYEE DECLARATION
</div>

<div class="declaration">
      I declare that the information provided in this
      employee registration form is true and correct
      to the best of my knowledge.
</div>

<div class="signature-grid">

<div class="signature">
        Employee Signature / Thumbprint
</div>

<div class="signature">
        Date
</div>

</div>
</div>

<div class="section">

<div class="section-title">
      5. FOR OFFICIAL USE
</div>

<div class="grid">

<div class="field">
<div class="label">Registered / Checked By</div>
<div class="line"></div>
</div>

<div class="field">
<div class="label">Designation</div>
<div class="line"></div>
</div>

</div>

<div class="signature-grid">

<div class="signature">
        Authorized Signature
</div>

<div class="signature">
        Date
</div>

</div>
</div>

</body>
</html>
  `);

printWindow.document.close();
printWindow.focus();
}

function editEmployeeAsDirector(employeeId) {

const employees = getEmployees();

const employeeIndex = employees.findIndex(
    item =>item.employeeId === employeeId
  );

  if (employeeIndex === -1) {
    alert("Employee record not found.");
    return;
  }

const employee = employees[employeeIndex];

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
    padding:10px;
box-sizing:border-box;
  `;

modal.innerHTML = `
<div style="
background:white;
      width:100%;
      max-width:900px;
      max-height:94vh;
overflow:auto;
      border-radius:14px;
      padding:20px;
box-sizing:border-box;
      box-shadow:0 10px 40px rgba(0,0,0,.3);
    ">

<h2 style="
        margin-top:0;
        color:#0b5d3b;
text-align:center;
      ">
        Edit Employee
</h2>

<div style="
        background:#fff3cd;
        color:#664d03;
        padding:10px;
        border-radius:8px;
        margin-bottom:15px;
text-align:center;
font-weight:bold;
      ">
        Director Only
</div>

<div style="
display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(240px,1fr));
        gap:12px;
      ">

<div>
<label>Employee ID</label>
<input
            value="${escapeSettingsText(employee.employeeId)}"
            disabled
            style="${settingsInputStyle()}"
>
</div>

<div>
<label>Full Name *</label>
<input
            id="editEmployeeName"
            value="${escapeSettingsText(employee.fullName)}"
            style="${settingsInputStyle()}"
>
</div>

<div>
<label>Phone Number *</label>
<input
            id="editEmployeePhone"
            value="${escapeSettingsText(employee.phone)}"
            style="${settingsInputStyle()}"
>
</div>

<div>
<label>Gender</label>
<select
            id="editEmployeeGender"
            style="${settingsInputStyle()}"
>
<option value="">Select Gender</option>
<option ${employee.gender === "Male" ? "selected" : ""}>
              Male
</option>
<option ${employee.gender === "Female" ? "selected" : ""}>
              Female
</option>
</select>
</div>

<div>
<label>Date of Birth</label>
<input
            id="editEmployeeDob"
            type="date"
            value="${escapeSettingsText(employee.dateOfBirth || "")}"
            style="${settingsInputStyle()}"
>
</div>

<div>
<label>Nationality</label>
<input
            id="editEmployeeNationality"
            value="${escapeSettingsText(employee.nationality || "")}"
            style="${settingsInputStyle()}"
>
</div>

<div>
<label>NIN / National ID</label>
<input
            id="editEmployeeNin"
            value="${escapeSettingsText(employee.nin || "")}"
            style="${settingsInputStyle()}"
>
</div>

<div>
<label>Residential Address</label>
<input
            id="editEmployeeAddress"
            value="${escapeSettingsText(employee.residentialAddress || "")}"
            style="${settingsInputStyle()}"
>
</div>

<div>
<label>Job / Position *</label>
<input
            id="editEmployeePosition"
            value="${escapeSettingsText(employee.position)}"
            style="${settingsInputStyle()}"
>
</div>

<div>
<label>Department / Work Area</label>
<input
            id="editEmployeeDepartment"
            value="${escapeSettingsText(employee.department || "")}"
            style="${settingsInputStyle()}"
>
</div>

<div>
<label>Employment Type</label>
<input
            id="editEmployeeEmploymentType"
            value="${escapeSettingsText(employee.employmentType || "")}"
            style="${settingsInputStyle()}"
>
</div>

<div>
<label>Date Joined</label>
<input
            id="editEmployeeDateJoined"
            type="date"
            value="${escapeSettingsText(employee.dateJoined || "")}"
            style="${settingsInputStyle()}"
>
</div>

<div>
<label>System Role</label>
<select
            id="editEmployeeRole"
            style="${settingsInputStyle()}"
>
            ${["Employee","TeamLeader","Secretary","Manager","Director"]
              .map(role => `
<option
                  ${employee.role === role ? "selected" : ""}
>
                  ${role}
</option>
              `).join("")}
</select>
</div>

<div>
<label>Employment Status</label>
<select
            id="editEmployeeStatus"
            style="${settingsInputStyle()}"
>
<option
              value="active"
              ${employee.employmentStatus === "active" ? "selected" : ""}
>
              Active
</option>

<option
              value="inactive"
              ${employee.employmentStatus === "inactive" ? "selected" : ""}
>
              Inactive
</option>
</select>
</div>

<div>
<label>Monthly Allowance (UGX)</label>
<input
            id="editEmployeeMonthlyAllowance"
            type="number"
            min="0"
            value="${Number(employee.monthlyAllowance || 0)}"
            style="${settingsInputStyle()}"
>
</div>

</div>

<hr style="margin:20px 0;">

<label>
        Reason for Correction *
</label>

<textarea
        id="editEmployeeReason"
        placeholder="Director must explain why this employee record is being changed."
        style="${settingsInputStyle()};
          min-height:80px;
resize:vertical;
        "
></textarea>

<div style="
display:flex;
        gap:10px;
justify-content:space-between;
        margin-top:18px;
flex-wrap:wrap;
      ">

<button
          id="cancelEmployeeEdit"
          type="button"
          style="
            border:0;
            background:#6c757d;
color:white;
            padding:10px 18px;
            border-radius:7px;
cursor:pointer;
font-weight:bold;
          "
>
          Cancel
</button>

<button
          id="saveEmployeeEdit"
          type="button"
          style="
            border:0;
            background:#0b5d3b;
color:white;
            padding:10px 18px;
            border-radius:7px;
cursor:pointer;
font-weight:bold;
          "
>
          Save Changes
</button>

</div>
</div>
  `;

document.body.appendChild(modal);


modal.querySelector(
    "#cancelEmployeeEdit"
  ).onclick = () => {
modal.remove();
  };


modal.querySelector(
    "#saveEmployeeEdit"
  ).onclick = () => {

const reason =
modal.querySelector(
        "#editEmployeeReason"
      ).value.trim();

    if (!reason) {
      alert(
        "Please enter the reason for this correction."
      );
      return;
    }

const updatedEmployee = {
      ...employee,

fullName:
modal.querySelector(
          "#editEmployeeName"
        ).value.trim(),

      phone:
modal.querySelector(
          "#editEmployeePhone"
        ).value.trim(),

      gender:
modal.querySelector(
          "#editEmployeeGender"
        ).value,

dateOfBirth:
modal.querySelector(
          "#editEmployeeDob"
        ).value,

      nationality:
modal.querySelector(
          "#editEmployeeNationality"
        ).value.trim(),

nin:
modal.querySelector(
          "#editEmployeeNin"
        ).value.trim(),

residentialAddress:
modal.querySelector(
          "#editEmployeeAddress"
        ).value.trim(),

      position:
modal.querySelector(
          "#editEmployeePosition"
        ).value.trim(),

      department:
modal.querySelector(
          "#editEmployeeDepartment"
        ).value.trim(),

employmentType:
modal.querySelector(
          "#editEmployeeEmploymentType"
        ).value.trim(),

dateJoined:
modal.querySelector(
          "#editEmployeeDateJoined"
        ).value,

      role:
modal.querySelector(
          "#editEmployeeRole"
        ).value,

employmentStatus:
modal.querySelector(
          "#editEmployeeStatus"
        ).value,

monthlyAllowance:
        Number(
modal.querySelector(
            "#editEmployeeMonthlyAllowance"
          ).value
        ) || 0
    };

    if (
      !updatedEmployee.fullName ||
      !updatedEmployee.phone ||
      !updatedEmployee.position
    ) {
      alert(
        "Full Name, Phone Number and Job / Position are required."
      );
      return;
    }

const history =
JSON.parse(
localStorage.getItem(
          "employeeChangeHistory"
        ) || "[]"
      );

history.push({
      id: Date.now(),
employeeId: employee.employeeId,
employeeName: employee.fullName,
oldValues: employee,
newValues: updatedEmployee,
      reason: reason,
correctedBy: "Director",
correctedAt:
        new Date().toISOString()
    });

localStorage.setItem(
      "employeeChangeHistory",
JSON.stringify(history)
    );

    employees[employeeIndex] =
updatedEmployee;

saveEmployees(
      employees
    );

    alert(
      "Employee record updated successfully."
    );

modal.remove();

manageEmployeeAccounts();
  };
}

/* =========================================================
   REGISTER NEW EMPLOYEE
   ========================================================= */

function registerNewEmployee() {

const employeeId =
getNextEmployeeId();

  let passportPhotoData = "";

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
    padding:10px;
box-sizing:border-box;
  `;

modal.innerHTML = `
<div style="
background:white;
      width:100%;
      max-width:900px;
      max-height:94vh;
overflow:auto;
      border-radius:14px;
      padding:20px;
box-sizing:border-box;
      box-shadow:0 10px 40px rgba(0,0,0,.3);
    ">

<h2 style="
        margin-top:0;
        color:#0b5d3b;
text-align:center;
      ">
        Register New Employee
</h2>

<!-- ==================================
           PASSPORT PHOTO
           ================================== -->

<div style="
text-align:center;
        margin-bottom:18px;
      ">

<div
          id="employeePhotoPreview"
          style="
            width:120px;
            height:140px;
            margin:0 auto 10px;
            border:2px dashed #bbb;
            border-radius:10px;
display:flex;
align-items:center;
justify-content:center;
overflow:hidden;
            background:#f7f7f7;
            color:#777;
            font-size:13px;
          "
>
          Passport Photo
</div>

<label
          for="newEmployeePhoto"
          style="
display:inline-block;
            background:#0d6efd;
color:white;
            padding:9px 16px;
            border-radius:7px;
cursor:pointer;
font-weight:bold;
          "
>
          Upload Passport Photo
</label>

<input
          id="newEmployeePhoto"
          type="file"
          accept="image/*"
          style="display:none"
>

<div style="
          margin-top:6px;
          font-size:12px;
          color:#666;
        ">
          JPG or PNG recommended.
</div>

</div>


<!-- ==================================
           SECTION 1 - BASIC INFORMATION
           ================================== -->

<div style="
        border:1px solid #cfe2ff;
        border-radius:10px;
        margin-bottom:16px;
overflow:hidden;
      ">

<div style="
          background:#eaf3ff;
          padding:11px 14px;
          color:#084298;
font-weight:bold;
          font-size:17px;
        ">
          1. Basic Information
</div>

<div style="
display:grid;
          grid-template-columns:
            repeat(auto-fit,minmax(240px,1fr));
          gap:12px;
          padding:14px;
        ">

<div>
<label>Employee ID</label>
<input
              value="${employeeId}"
              disabled
              style="${settingsInputStyle()}"
>
</div>

<div>
<label>Full Name *</label>
<input
              id="newEmployeeName"
              type="text"
              placeholder="Enter full name"
              style="${settingsInputStyle()}"
>
</div>

<div>
<label>Gender</label>
<select
              id="newEmployeeGender"
              style="${settingsInputStyle()}"
>
<option value="">Select Gender</option>
<option>Male</option>
<option>Female</option>
</select>
</div>

<div>
<label>Date of Birth</label>
<input
              id="newEmployeeDob"
              type="date"
              style="${settingsInputStyle()}"
>
</div>

<div>
<label>Nationality</label>
<input
              id="newEmployeeNationality"
              type="text"
              value="Ugandan"
              placeholder="Example: Ugandan"
              style="${settingsInputStyle()}"
>
</div>

<div>
<label>NIN / National ID</label>
<input
              id="newEmployeeNin"
              type="text"
              placeholder="Enter NIN"
              style="${settingsInputStyle()}"
>
</div>

<div>
<label>Phone Number *</label>
<input
              id="newEmployeePhone"
              type="text"
              placeholder="Example: 07XXXXXXXX"
              style="${settingsInputStyle()}"
>
</div>

<div style="
            grid-column:
              span 1;
          ">
<label>Residential Address</label>
<textarea
              id="newEmployeeAddress"
              placeholder="Village, town, district"
              style="${settingsInputStyle()};
                min-height:70px;
resize:vertical;
              "
></textarea>
</div>

</div>
</div>


<!-- ==================================
           SECTION 2 - PRIVATE INFORMATION
           ================================== -->

<div style="
        border:1px solid #f5c2c7;
        border-radius:10px;
        margin-bottom:16px;
overflow:hidden;
      ">

<div style="
          background:#f8d7da;
          padding:11px 14px;
          color:#842029;
font-weight:bold;
          font-size:17px;
        ">
🔒 2. Family & Emergency Information
<div style="
            font-size:12px;
            margin-top:3px;
font-weight:normal;
          ">
            Director & Secretary Only
</div>
</div>

<div style="
display:grid;
          grid-template-columns:
            repeat(auto-fit,minmax(240px,1fr));
          gap:12px;
          padding:14px;
        ">

<div>
<label>Son / Daughter of</label>
<input
              id="newEmployeeParent"
              type="text"
              placeholder="Parent / guardian name"
              style="${settingsInputStyle()}"
>
</div>

<div>
<label>Parent / Guardian Contact</label>
<input
              id="newEmployeeParentPhone"
              type="text"
              placeholder="Phone number"
              style="${settingsInputStyle()}"
>
</div>

<div>
<label>Next of Kin</label>
<input
              id="newEmployeeNextKin"
              type="text"
              placeholder="Next of kin name"
              style="${settingsInputStyle()}"
>
</div>

<div>
<label>Relationship</label>
<input
              id="newEmployeeNextKinRelationship"
              type="text"
              placeholder="Example: Wife, Brother, Mother"
              style="${settingsInputStyle()}"
>
</div>

<div>
<label>Next-of-Kin Contact</label>
<input
              id="newEmployeeNextKinPhone"
              type="text"
              placeholder="Phone number"
              style="${settingsInputStyle()}"
>
</div>

<div style="
display:flex;
align-items:center;
            padding-top:22px;
          ">
<label style="
display:flex;
align-items:center;
              gap:8px;
cursor:pointer;
            ">
<input
                id="sameAsNextKin"
                type="checkbox"
>
              Emergency contact is same as Next of Kin
</label>
</div>

<div>
<label>Emergency Contact Name</label>
<input
              id="newEmployeeEmergencyName"
              type="text"
              placeholder="Emergency contact name"
              style="${settingsInputStyle()}"
>
</div>

<div>
<label>Emergency Relationship</label>
<input
              id="newEmployeeEmergencyRelationship"
              type="text"
              placeholder="Relationship"
              style="${settingsInputStyle()}"
>
</div>

<div>
<label>Emergency Primary Phone</label>
<input
              id="newEmployeeEmergencyPhone"
              type="text"
              placeholder="Primary phone"
              style="${settingsInputStyle()}"
>
</div>

<div>
<label>Emergency Alternative Phone</label>
<input
              id="newEmployeeEmergencyAltPhone"
              type="text"
              placeholder="Alternative phone"
              style="${settingsInputStyle()}"
>
</div>

<div>
<label>Emergency Contact Address</label>
<input
              id="newEmployeeEmergencyAddress"
              type="text"
              placeholder="Village / location"
              style="${settingsInputStyle()}"
>
</div>

<div>
<label>Referred By</label>
<input
              id="newEmployeeReferredBy"
              type="text"
              placeholder="Referee name"
              style="${settingsInputStyle()}"
>
</div>

<div>
<label>Referee Contact Number</label>
<input
              id="newEmployeeRefereePhone"
              type="text"
              placeholder="Phone number"
              style="${settingsInputStyle()}"
>
</div>

</div>
</div>


<!-- ==================================
           SECTION 3 - EMPLOYMENT
           ================================== -->

<div style="
        border:1px solid #badbcc;
        border-radius:10px;
        margin-bottom:16px;
overflow:hidden;
      ">

<div style="
          background:#d1e7dd;
          padding:11px 14px;
          color:#0f5132;
font-weight:bold;


          font-size:17px;
        ">
          3. Employment Information
</div>

<div style="
display:grid;
          grid-template-columns:
            repeat(auto-fit,minmax(240px,1fr));
          gap:12px;
          padding:14px;
        ">

<div>
<label>Date Joined *</label>
<input
              id="newEmployeeDateJoined"
              type="date"
              value="${
                new Date()
                  .toISOString()
                  .split("T")[0]
              }"
              style="${settingsInputStyle()}"
>
</div>

<div>
<label>Job / Position *</label>
<input
              id="newEmployeePosition"
              type="text"
              placeholder="Example: Machine Operator"
              style="${settingsInputStyle()}"
>
</div>

<div>
<label>Department / Work Area</label>
<select
              id="newEmployeeDepartment"
              style="${settingsInputStyle()}"
>
<option value="">
                Select Department
</option>
<option>Sorting</option>
<option>Washing</option>
<option>Production</option>
<option>Pelletizing</option>
<option>Maintenance</option>
<option>Administration</option>
<option>Sales & Marketing</option>
<option>Security</option>
<option>Other</option>
</select>
</div>

<div>
<label>Employment Type</label>
<select
              id="newEmployeeEmploymentType"
              style="${settingsInputStyle()}"
>
<option value="">
                Select Employment Type
</option>
<option>Permanent</option>
<option>Temporary</option>
<option>Casual</option>
<option>Probation</option>
</select>
</div>

<div>
<label>System Role *</label>
<select
              id="newEmployeeRole"
              style="${settingsInputStyle()}"
>
<option>Employee</option>
<option>Team Leader</option>
<option>Secretary</option>
<option>Manager</option>
<option>Director</option>
</select>
</div>

<div>
<label>Employment Status *</label>
<select
              id="newEmployeeStatus"
              style="${settingsInputStyle()}"
>
<option value="active">
                Active
</option>
<option value="inactive">
                Inactive
</option>
</select>
</div>

<div>
<label>Monthly Allowance (UGX)</label>
<input
              id="newEmployeeMonthlyAllowance"
              type="number"
              min="0"
              step="1000"
              value="0"
              placeholder="Example: 100000"
              style="${settingsInputStyle()}"
>

<div style="
              font-size:11px;
              color:#666;
              margin-top:3px;
            ">
              Normal monthly allowance rate.
              Payments and balances will be recorded separately.
</div>
</div>

</div>
</div>


<!-- ==================================
           SECTION 4 - LOGIN
           ================================== -->

<div style="
        border:1px solid #d3c2f3;
        border-radius:10px;
        margin-bottom:18px;
overflow:hidden;
      ">

<div style="
          background:#eee5ff;
          padding:11px 14px;
          color:#59359a;
font-weight:bold;
          font-size:17px;
        ">
          4. Employee Login Account
</div>

<div style="
          padding:14px;
          background:#faf8ff;
        ">

<div style="margin-bottom:7px;">
<strong>Account Status:</strong>
<span style="
              background:#ffc107;
              padding:3px 8px;
              border-radius:12px;
              font-size:12px;
            ">
              Not Activated
</span>
</div>

<div style="margin-bottom:7px;">
<strong>Employee Login ID:</strong>
            ${employeeId}
</div>

<div style="
            font-size:13px;
            color:#555;
          ">
            The employee will use this Employee ID
            to activate their account and create
            their own private password later.
</div>

</div>
</div>


<!-- BUTTONS -->

<div style="
display:flex;
flex-wrap:wrap;
        gap:10px;
justify-content:space-between;
      ">

<button
          id="cancelNewEmployee"
          type="button"
          style="
            padding:11px 18px;
            border:0;
            border-radius:7px;
            background:#6c757d;
color:white;
cursor:pointer;
font-weight:bold;
          "
>
          Cancel
</button>

<button
          id="saveEmployeeBtn"
          type="button"
          style="
            padding:11px 20px;
            border:0;
            border-radius:7px;
            background:#0d6efd;
color:white;
cursor:pointer;
font-weight:bold;
          "
>
          Save Employee
</button>

</div>

</div>
  `;

document.body.appendChild(modal);


  /* ==================================
     PASSPORT PHOTO
     ================================== */

modal.querySelector(
    "#newEmployeePhoto"
  ).onchange = event => {

const file =
event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert(
        "Please select an image file."
      );
event.target.value = "";
      return;
    }

const reader =
      new FileReader();

reader.onload = e => {

const image =
        new Image();

image.onload = () => {

const canvas =
document.createElement("canvas");

const size = 300;

canvas.width = size;
canvas.height = size;

const ctx =
canvas.getContext("2d");

const scale =
Math.max(
            size / image.width,
            size / image.height
          );

const width =
image.width * scale;

const height =
image.height * scale;

const x =
          (size - width) / 2;

const y =
          (size - height) / 2;

ctx.drawImage(
          image,
          x,
          y,
          width,
          height
        );

passportPhotoData =
canvas.toDataURL(
            "image/jpeg",
            0.72
          );

modal.querySelector(
          "#employeePhotoPreview"
        ).innerHTML = `
<img
src="${passportPhotoData}"
            style="
              width:100%;
              height:100%;
object-fit:cover;
            "
>
        `;
      };

image.src = e.target.result;
    };

reader.readAsDataURL(file);
  };


  /* ==================================
     SAME AS NEXT OF KIN
     ================================== */

modal.querySelector(
    "#sameAsNextKin"
  ).onchange = event => {

    if (!event.target.checked) {
      return;
    }

modal.querySelector(
      "#newEmployeeEmergencyName"
    ).value =
modal.querySelector(
        "#newEmployeeNextKin"
      ).value;

modal.querySelector(
      "#newEmployeeEmergencyRelationship"
    ).value =
modal.querySelector(
        "#newEmployeeNextKinRelationship"
      ).value;

modal.querySelector(
      "#newEmployeeEmergencyPhone"
    ).value =
modal.querySelector(
        "#newEmployeeNextKinPhone"
      ).value;
  };


  /* ==================================
     SAVE EMPLOYEE
     ================================== */

modal.querySelector(
    "#saveEmployeeBtn"
  ).onclick = () => {

const fullName =
modal.querySelector(
        "#newEmployeeName"
      ).value.trim();

const phone =
modal.querySelector(
        "#newEmployeePhone"
      ).value.trim();

const position =
modal.querySelector(
        "#newEmployeePosition"
      ).value.trim();

const dateJoined =
modal.querySelector(
        "#newEmployeeDateJoined"
      ).value;

const role =
modal.querySelector(
        "#newEmployeeRole"
      ).value;

const employmentStatus =
modal.querySelector(
        "#newEmployeeStatus"
      ).value;

    if (!fullName) {
      alert(
        "Please enter the employee's full name."
      );
      return;
    }

    if (!phone) {
      alert(
        "Please enter the employee's phone number."
      );
      return;
    }

    if (!position) {
      alert(
        "Please enter the employee's job or position."
      );
      return;
    }

    if (!dateJoined) {
      alert(
        "Please enter the date joined."
      );
      return;
    }

const employees =
getEmployees();

const cleanPhone =
phone.replace(/\s/g, "");

const duplicatePhone =
employees.some(employee =>
        String(employee.phone || "")
          .replace(/\s/g, "") ===
cleanPhone
      );

    if (duplicatePhone) {
      alert(
        "An employee with this phone number is already registered."
      );
      return;
    }

employees.push({

      id: Date.now(),

employeeId:
employeeId,

passportPhoto:
passportPhotoData,

fullName:
fullName,

      gender:
modal.querySelector(
          "#newEmployeeGender"
        ).value,

dateOfBirth:
modal.querySelector(
          "#newEmployeeDob"
        ).value,

      nationality:
modal.querySelector(
          "#newEmployeeNationality"
        ).value.trim(),

nin:
modal.querySelector(
          "#newEmployeeNin"
        ).value.trim(),

      phone:
        phone,

residentialAddress:
modal.querySelector(
          "#newEmployeeAddress"
        ).value.trim(),

parentGuardianName:
modal.querySelector(
          "#newEmployeeParent"
        ).value.trim(),

parentGuardianPhone:
modal.querySelector(
          "#newEmployeeParentPhone"
        ).value.trim(),

nextOfKinName:
modal.querySelector(
          "#newEmployeeNextKin"
        ).value.trim(),

nextOfKinRelationship:
modal.querySelector(
          "#newEmployeeNextKinRelationship"
        ).value.trim(),

nextOfKinPhone:
modal.querySelector(
          "#newEmployeeNextKinPhone"
        ).value.trim(),

emergencyContactName:
modal.querySelector(
          "#newEmployeeEmergencyName"
        ).value.trim(),

emergencyRelationship:
modal.querySelector(
          "#newEmployeeEmergencyRelationship"
        ).value.trim(),

emergencyPhone:
modal.querySelector(
          "#newEmployeeEmergencyPhone"
        ).value.trim(),

emergencyAlternativePhone:
modal.querySelector(
          "#newEmployeeEmergencyAltPhone"
        ).value.trim(),

emergencyAddress:
modal.querySelector(
          "#newEmployeeEmergencyAddress"
        ).value.trim(),

referredBy:
modal.querySelector(
          "#newEmployeeReferredBy"
        ).value.trim(),

refereePhone:
modal.querySelector(
          "#newEmployeeRefereePhone"
        ).value.trim(),

      position:
        position,

      department:
modal.querySelector(
          "#newEmployeeDepartment"
        ).value,

employmentType:
modal.querySelector(
          "#newEmployeeEmploymentType"
        ).value,

dateJoined:
dateJoined,

      role:
        role,

employmentStatus:
employmentStatus,

monthlyAllowance:
        Number(
modal.querySelector(
            "#newEmployeeMonthlyAllowance"
          ).value
        ) || 0,

accountStatus:
        "not_activated",

teamId:
        null,

teamName:
        "",

createdAt:
        new Date().toISOString()

    });

saveEmployees(
      employees
    );

    alert(
      "Employee registered successfully!\\n\\n" +
      "Employee: " + fullName + "\\n" +
      "Employee ID: " + employeeId + "\\n" +
      "Role: " + role
    );

modal.remove();

manageEmployeeAccounts();
  };


  /* ==================================
     CANCEL
     ================================== */

modal.querySelector(
    "#cancelNewEmployee"
  ).onclick = () => {

modal.remove();

manageEmployeeAccounts();
  };
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



