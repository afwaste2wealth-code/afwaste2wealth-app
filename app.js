/* =========================================================
   A&F STAFF & HR LOGIN SCREEN
   ========================================================= */

function showAFLoginScreen() {

  /* Remove any existing login screen */
const oldLogin = document.getElementById("afLoginScreen");

  if (oldLogin) {
oldLogin.remove();
  }

const loginScreen = document.createElement("div");

loginScreen.id = "afLoginScreen";

loginScreen.style.cssText = `
position:fixed;
  inset:0;
  z-index:999999;
font-family:Arial,sans-serif;
box-sizing:border-box;
overflow:auto;
  background:
    linear-gradient(
      135deg,
rgba(4,45,30,.96),
rgba(11,93,59,.92)
    );
display:flex;
align-items:center;
justify-content:center;
  padding:24px;
`;

loginScreen.innerHTML = `

<div style="
  width:960px;
  max-width:100%;
  min-height:570px;
  background:#ffffff;
  border-radius:22px;
overflow:hidden;
display:grid;
  grid-template-columns:1.05fr .95fr;
  box-shadow:0 24px 70px rgba(0,0,0,.38);
">

<!-- LEFT COMPANY PANEL -->
<div style="
    background:
      linear-gradient(
        145deg,
        #073e29 0%,
        #0b5d3b 55%,
        #14835a 100%
      );
color:white;
    padding:55px 48px;
display:flex;
flex-direction:column;
justify-content:space-between;
  ">

<div>

<div style="
        width:82px;
        height:82px;
        border-radius:18px;
background:rgba(255,255,255,.14);
        border:1px solid rgba(255,255,255,.28);
display:flex;
align-items:center;
justify-content:center;
        font-size:29px;
        font-weight:800;
        margin-bottom:30px;
      ">
        A&F
</div>

<div style="
        font-size:13px;
        letter-spacing:2px;
        color:#bce7d1;
font-weight:bold;
        margin-bottom:10px;
      ">
        WASTE2WEALTH SOLUTIONS
</div>

<h1 style="
        margin:0;
        font-size:34px;
        line-height:1.15;
        font-weight:800;
      ">
        A&F Wekavera Ltd
</h1>

<div style="
        width:55px;
        height:4px;
        background:#ffffff;
        border-radius:20px;
        margin:22px 0;
        opacity:.85;
      "></div>

<p style="
        margin:0;
        max-width:350px;
        font-size:16px;
        line-height:1.7;
        color:#e1f2e9;
      ">
        Factory Management System for efficient,
        accountable and sustainable operations.
</p>

</div>

<div style="
      font-size:12px;
      line-height:1.7;
      color:#bce7d1;
    ">
      Turning Waste into Value<br>
Mbalala • Mukono
</div>

</div>


<!-- RIGHT LOGIN PANEL -->
<div style="
    padding:55px 52px;
display:flex;
flex-direction:column;
justify-content:center;
    background:#ffffff;
  ">

<div style="
      color:#0b5d3b;
      font-size:13px;
font-weight:bold;
      letter-spacing:1.5px;
      margin-bottom:9px;
    ">
      STAFF & HR PORTAL
</div>

<h2 style="
      margin:0;
      color:#173027;
      font-size:30px;
    ">
      Welcome Back
</h2>

<div style="
      color:#6b7d75;
      font-size:14px;
      margin-top:9px;
      margin-bottom:34px;
      line-height:1.5;
    ">
      Sign in with your employee account to continue.
</div>


<!-- EMPLOYEE ID -->

<label style="
display:block;
      color:#263c33;
      font-size:13px;
font-weight:bold;
      margin-bottom:8px;
    ">
      Employee ID
</label>

<input
      id="afLoginEmployeeId"
      type="text"
      placeholder="e.g. EMP001"
      autocomplete="username"
      style="
        width:100%;
        height:50px;
        padding:0 15px;
box-sizing:border-box;
        border:1px solid #d7e2dc;
        border-radius:10px;
        background:#f8faf9;
        color:#173027;
        font-size:15px;
outline:none;
        margin-bottom:20px;
      "
>


<!-- PASSWORD -->

<label style="
display:block;
      color:#263c33;
      font-size:13px;
font-weight:bold;
      margin-bottom:8px;
    ">
      Password
</label>

<div style="
position:relative;
      margin-bottom:12px;
    ">

<input
        id="afLoginPassword"
        type="password"
        placeholder="Enter your password"
        autocomplete="current-password"
        style="
          width:100%;
          height:50px;
          padding:0 50px 0 15px;
box-sizing:border-box;
          border:1px solid #d7e2dc;
          border-radius:10px;
          background:#f8faf9;
          color:#173027;
          font-size:15px;
outline:none;
        "
>

<button
        id="afTogglePassword"
        type="button"
        title="Show password"
        style="
position:absolute;
          right:8px;
          top:7px;
          width:36px;
          height:36px;
          border:0;
          border-radius:8px;
background:transparent;
cursor:pointer;
          font-size:18px;
        "
>
👁
</button>

</div>


<!-- LOGIN MESSAGE -->

<div
      id="afLoginMessage"
      style="
        min-height:20px;
        margin:3px 0 10px;
        font-size:13px;
text-align:center;
      "
></div>


<!-- LOGIN BUTTON -->

<button
      id="afLoginButton"
      type="button"
      style="
        width:100%;
        height:50px;
        border:0;
        border-radius:10px;
        background:#0b5d3b;
color:white;
        font-size:15px;
        font-weight:800;
        letter-spacing:.5px;
cursor:pointer;
        box-shadow:0 7px 18px rgba(11,93,59,.22);
      "
>
      SIGN IN
</button>


<!-- FORGOT PASSWORD -->

<button
      id="afForgotPasswordButton"
      type="button"
      style="
display:block;
        margin:18px auto 0;
        padding:5px;
        border:0;
background:transparent;
        color:#0b5d3b;
        font-size:13px;
        font-weight:600;
cursor:pointer;
      "
>
      Forgot Password?
</button>


<div style="
      margin-top:32px;
      padding-top:18px;
      border-top:1px solid #edf2ef;
text-align:center;
      color:#8a9992;
      font-size:11px;
      line-height:1.5;
    ">
      Authorized staff access only<br>
      A&F Wekavera Ltd • Waste2Wealth Solutions
</div>

</div>

</div>

<style>
  @media (max-width: 760px) {
    #afLoginScreen > div {
      grid-template-columns: 1fr !important;
    }

    #afLoginScreen > div >div:first-child {
      display: none !important;
    }

    #afLoginScreen > div >div:last-child {
      padding: 36px 25px !important;
    }
  }
</style>

`;

document.body.appendChild(loginScreen);


  /* ---------- SHOW / HIDE PASSWORD ---------- */

loginScreen.querySelector("#afTogglePassword").onclick = () => {

const passwordInput =
loginScreen.querySelector("#afLoginPassword");

const toggleButton =
loginScreen.querySelector("#afTogglePassword");

    if (passwordInput.type === "password") {

passwordInput.type = "text";
toggleButton.textContent = "🙈";
toggleButton.title = "Hide password";

    } else {

passwordInput.type = "password";
toggleButton.textContent = "👁";
toggleButton.title = "Show password";

    }
  };


  /* ---------- LOGIN BUTTON ---------- */

loginScreen.querySelector("#afLoginButton").onclick = async () => {

const employeeId =
loginScreen.querySelector("#afLoginEmployeeId")
      .value
      .trim();

const password =
loginScreen.querySelector("#afLoginPassword")
      .value;

const message =
loginScreen.querySelector("#afLoginMessage");

  if (!employeeId) {

message.style.color = "#b00020";
message.textContent =
      "Please enter your Employee ID.";

    return;
  }

  if (!password) {

message.style.color = "#b00020";
message.textContent =
      "Please enter your password.";

    return;
  }

const employees = getEmployees();

const employee = employees.find(
    employee =>
      String(employee.employeeId).toLowerCase() ===
employeeId.toLowerCase()
  );

  if (!employee) {

message.style.color = "#b00020";
message.textContent =
      "Employee ID not found.";

    return;
  }

  if (employee.accountStatus === "not_activated") {

message.style.color = "#b00020";
message.textContent =
      "This account has not yet been activated.";

    return;
  }

  if (employee.accountStatus === "deactivated") {

message.style.color = "#b00020";
message.textContent =
      "This account has been deactivated. Please contact HR or the Director.";

    return;
  }

  if (employee.accountStatus === "activated") {

    if (!employee.passwordHash) {
showAFCreatePasswordScreen(employee);

      return;
    }

try {

const encoder = new TextEncoder();
const data = encoder.encode(password);

const hashBuffer =
    await crypto.subtle.digest("SHA-256", data);

const hashArray =
Array.from(new Uint8Array(hashBuffer));

const enteredPasswordHash =
hashArray
      .map(byte =>byte.toString(16).padStart(2, "0"))
      .join("");

  if (enteredPasswordHash !== employee.passwordHash) {
message.style.color = "#b00020";
message.textContent =
      "Incorrect password.";
    return;
  }
localStorage.setItem(
   "currentUser",
JSON.stringify({
employeeId: employee.employeeId,
fullName: employee.fullName,
    role: employee.role
  })
);
 
message.style.color = "#0b5d3b";
message.textContent =
    "Login successful. Opening dashboard...";

setTimeout(() => {

const loginScreen =
document.getElementById("afLoginScreen");

  if (loginScreen) {
loginScreen.remove();
  }

const dashboard =
document.getElementById("mainApplication");

  if (dashboard) {
dashboard.style.display = "";
  }

  /* Refresh logged-in user's dashboard details */
  if (typeof updateLoggedInUserHeader === "function") {
updateLoggedInUserHeader();
  }

  /* Apply dashboard access according to employee role */
  if (typeof applyAFRoleDashboard === "function") {
applyAFRoleDashboard();
  }

}, 500);


} catch (error) {

console.error("Login verification error:", error);

message.style.color = "#b00020";
message.textContent =
    "Unable to verify password. Please try again.";

}

  }

};

  /* ---------- FORGOT PASSWORD ---------- */

loginScreen.querySelector("#afForgotPasswordButton").onclick = () => {

    alert(
      "Password recovery will be connected to the Employee Account system."
    );

  };


  /* ---------- ENTER KEY ---------- */

loginScreen.querySelector("#afLoginPassword").addEventListener(
    "keydown",
    function(event) {

      if (event.key === "Enter") {

loginScreen
          .querySelector("#afLoginButton")
          .click();

      }

    }
  );

}
function showAFCreatePasswordScreen(employee) {

const screen = document.createElement("div");

screen.id = "afCreatePasswordScreen";

screen.style.cssText = `
position:fixed;
    inset:0;
    background:#f4f7f5;
    z-index:999999;
display:flex;
align-items:center;
justify-content:center;
    padding:20px;
font-family:Arial,sans-serif;
  `;

screen.innerHTML = `

<div style="
      width:100%;
      max-width:430px;
background:white;
      border-radius:14px;
      padding:30px;
      box-shadow:0 8px 30px rgba(0,0,0,0.12);
    ">

<div style="
text-align:center;
        margin-bottom:25px;
      ">

<div style="
          font-size:42px;
          margin-bottom:10px;
        ">
🔐
</div>

<h2 style="
          margin:0;
          color:#0b5d3b;
        ">
          Create Your Password
</h2>

<p style="
          color:#666;
          margin-top:8px;
        ">
          Welcome, ${employee.fullName}.
</p>

</div>

<label style="
display:block;
font-weight:bold;
        margin-bottom:6px;
      ">
        New Password
</label>

<input
        id="afNewPassword"
        type="password"
        autocomplete="new-password"
        placeholder="Enter your password"
        style="
          width:100%;
box-sizing:border-box;
          padding:12px;
          border:1px solid #ccc;
          border-radius:7px;
          margin-bottom:15px;
          font-size:15px;
        "
>

<label style="
display:block;
font-weight:bold;
        margin-bottom:6px;
      ">
        Confirm Password
</label>

<input
        id="afConfirmPassword"
        type="password"
        autocomplete="new-password"
        placeholder="Re-enter your password"
        style="
          width:100%;
box-sizing:border-box;
          padding:12px;
          border:1px solid #ccc;
          border-radius:7px;
          margin-bottom:15px;
          font-size:15px;
        "
>

<div
        id="afCreatePasswordMessage"
        style="
          min-height:22px;
          margin-bottom:15px;
          font-size:14px;
text-align:center;
        "
></div>

<button
        id="afCreatePasswordButton"
        type="button"
        style="
          width:100%;
          border:0;
          background:#0b5d3b;
color:white;
          padding:13px;
          border-radius:7px;
cursor:pointer;
          font-size:16px;
font-weight:bold;
        "
>
        CREATE PASSWORD
</button>

</div>
  `;

document.body.appendChild(screen);

// Handle password creation
screen.querySelector("#afCreatePasswordButton").onclick = async () => {

const newPassword =
screen.querySelector("#afNewPassword").value;

const confirmPassword =
screen.querySelector("#afConfirmPassword").value;

const message =
screen.querySelector("#afCreatePasswordMessage");

  if (!newPassword || !confirmPassword) {

message.style.color = "#b00020";
message.textContent =
      "Please complete both password fields.";

    return;
  }

  if (newPassword.length< 6) {

message.style.color = "#b00020";
message.textContent =
      "Password must contain at least 6 characters.";

    return;
  }

  if (newPassword !== confirmPassword) {

message.style.color = "#b00020";
message.textContent =
      "Passwords do not match.";

    return;
  }

  try {

const encoder = new TextEncoder();

const data = encoder.encode(newPassword);

const hashBuffer =
      await crypto.subtle.digest("SHA-256", data);

const hashArray =
Array.from(new Uint8Array(hashBuffer));

const passwordHash =
hashArray
        .map(byte =>byte.toString(16).padStart(2, "0"))
        .join("");

const employees = getEmployees();

const savedEmployee = employees.find(
      item =>item.employeeId === employee.employeeId
    );

    if (!savedEmployee) {

message.style.color = "#b00020";
message.textContent =
        "Employee account could not be found.";

      return;
    }

savedEmployee.passwordHash = passwordHash;

saveEmployees(employees);

message.style.color = "#0b5d3b";
message.textContent =
      "Password created successfully.";

setTimeout(() => {

screen.remove();

showAFLoginScreen();

    }, 1000);

  } catch (error) {

console.error("Password creation error:", error);

message.style.color = "#b00020";
message.textContent =
      "Unable to create password. Please try again.";

  }

};

}
function showMessage(name) {

  if (name === "Record Material In") { 
recordMaterialIn();
    return;
  }

  if (name === "Record Production") {
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

  if (name === "Staff & HR") {
staffHR();
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
   STAFF & HR
   ========================================================= */

function staffHR() {

const staffHRPermissions = [
    "employeeAccounts",
    "teams",
    "attendance",
    "allowance",
    "advances",
    "payroll",
    "performance",
    "portal",
    "documents",
    "birthdays",
    "hrReports"
  ];

const canAccessStaffHR =
staffHRPermissions.some(permissionKey =>
hasPermission(permissionKey)
    );

  if (!canAccessStaffHR) {
requirePermission("employeeAccounts");
    return;
  }

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
    padding: 10px;
  `;

modal.innerHTML = `
<div style="
background:white;
      width:820px;
      max-width:96%;
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
<h2 style="
            margin:0;
            color:#0b5d3b;
          ">
            Staff & HR
</h2>

<div style="
            margin-top:5px;
            color:#666;
            font-size:13px;
          ">
            Employees, teams, attendance and payroll management
</div>
</div>

<button id="closeStaffHR"
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
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
        gap:14px;
      ">

<button id="employeeAccountsHRBtn"
          style="${systemSettingsButtonStyle()}">
👤
<strong>Employee Accounts</strong>
<span>Register and manage employees</span>
</button>

<button id="teamsHRBtn"
          style="${systemSettingsButtonStyle()}">
👥
<strong>Teams & Team Leaders</strong>
<span>Manage teams, leaders and members</span>
</button>

<button id="shiftsHRBtn"
          style="${systemSettingsButtonStyle()}">
🕒
<strong>Shift & Working Hours</strong>
<span>Manage official working shifts</span>
</button>

<button id="attendanceHRBtn"
          style="${systemSettingsButtonStyle()}">
📋
<strong>Attendance</strong>
<span>Record and review employee attendance</span>
</button>

<button id="allowanceHRBtn"
          style="${systemSettingsButtonStyle()}">
💰
<strong>Employee Allowance</strong>
<span>Manage monthly allowance and earnings</span>
</button>

<button id="advancesHRBtn"
          style="${systemSettingsButtonStyle()}">
💳
<strong>Advances & Deductions</strong>
<span>Manage employee advances and recoveries</span>
</button>

<button id="payrollHRBtn"
          style="${systemSettingsButtonStyle()}">
📒
<strong>Payroll Ledger</strong>
<span>Track payable, paid and carried-forward balances</span>
</button>

<button id="performanceHRBtn"
          style="${systemSettingsButtonStyle()}">
🏆
<strong>Employee & Team Performance</strong>
<span>Targets, overtime and Team of the Month</span>
</button>

<button id="rolesHRBtn"
          style="${systemSettingsButtonStyle()}">
🔐
<strong>Roles & Permissions</strong>
<span>Director, Manager, Secretary, Team Leader and Employee</span>
</button>

<button id="portalHRBtn"
          style="${systemSettingsButtonStyle()}">
📱
<strong>Employee Portal</strong>
<span>Employee login and personal information</span>
</button>

<button id="documentsHRBtn"
          style="${systemSettingsButtonStyle()}">
📄
<strong>Employee Documents & Records</strong>
<span>Manage employee documents and records</span>
</button>

<button id="birthdayHRBtn"
          style="${systemSettingsButtonStyle()}">
🎂
<strong>Birthday Reminders</strong>
<span>View upcoming employee birthdays</span>
</button>

<button id="hrReportsBtn"
          style="${systemSettingsButtonStyle()}">
📊
<strong>HR Reports</strong>
<span>Attendance, allowance and staff reports</span>
</button>

</div>

</div>
  `; 

document.body.appendChild(modal);

/* Apply Staff & HR visibility according to logged-in role */
if (typeof applyStaffHRRoleVisibility === "function") {
applyStaffHRRoleVisibility(modal);
}

modal.querySelector("#closeStaffHR").onclick = () => {
   modal.remove();
}

modal.querySelector("#employeeAccountsHRBtn").onclick = () => {

  if (!hasPermission("employeeAccounts")) {
requirePermission("employeeAccounts");
    return;
  }

modal.remove();
manageEmployeeAccounts();
};

modal.querySelector("#teamsHRBtn").onclick = () => {

  if (!hasPermission("teams")) {
requirePermission("teams");
    return;
  }

modal.remove();
manageTeams();
};

modal.querySelector("#shiftsHRBtn").onclick = () => {

  if (!hasPermission("attendance")) {
requirePermission("attendance");
    return;
  }

modal.remove();
manageShiftSettings();
};


modal.querySelector("#attendanceHRBtn").onclick = () => {

  if (!hasPermission("attendance")) {
requirePermission("attendance");
    return;
  }

modal.remove();
recordAttendance();
};


modal.querySelector("#allowanceHRBtn").onclick = () => {

  if (!hasPermission("allowance")) {
requirePermission("allowance");
    return;
  }

modal.remove();
manageEmployeeAllowance();
};


modal.querySelector("#advancesHRBtn").onclick = () => {

  if (!hasPermission("advances")) {
requirePermission("advances");
    return;
  }

modal.remove();
manageEmployeeAdvancesAndDeductions();
};


modal.querySelector("#payrollHRBtn").onclick = () => {

  if (!hasPermission("payroll")) {
requirePermission("payroll");
    return;
  }

modal.remove();
managePayrollLedger();
};


modal.querySelector("#performanceHRBtn").onclick = () => {

  if (!hasPermission("performance")) {
requirePermission("performance");
    return;
  }

modal.remove();
manageTeamPerformanceSettings();
};

modal.querySelector("#rolesHRBtn").onclick = () => {
const currentUser = JSON.parse(
localStorage.getItem("currentUser") || "null"
);

if (!currentUser || currentUser.role !== "Director") {
  alert(
    "Access Denied\n\n" +
    "Only the Director can manage Roles & Permissions."
  );
  return;
}

const roles = [
    "Director",
    "Manager",
    "HR",
    "Secretary",
    "Team Leader",
    "Employee"
  ];

const permissions = [
    ["employeeAccounts", "Employee Accounts"],
    ["teams", "Teams & Team Leaders"],
    ["attendance", "Attendance"],
    ["allowance", "Employee Allowance"],
    ["advances", "Advances & Deductions"],
    ["payroll", "Payroll Ledger"],
    ["performance", "Employee & Team Performance"],
    ["portal", "Employee Portal"],
    ["documents", "Employee Documents & Records"],
    ["birthdays", "Birthday Reminders"],
    ["hrReports", "HR Reports"]
  ];

const defaultPermissions = {
    Director: {
employeeAccounts: true,
      teams: true,
      attendance: true,
      allowance: true,
      advances: true,
      payroll: true,
      performance: true,
      portal: true,
      documents: true,
      birthdays: true,
hrReports: true
    },

    Manager: {
employeeAccounts: false,
      teams: true,
      attendance: true,
      allowance: false,
      advances: false,
      payroll: true,
      performance: true,
      portal: false,
      documents: false,
      birthdays: false,
hrReports: true
    },

    HR: {
employeeAccounts: true,
      teams: true,
      attendance: true,
      allowance: true,
      advances: true,
      payroll: true,
      performance: true,
      portal: true,
      documents: true,
      birthdays: true,
hrReports: true
    },

    Secretary: {
employeeAccounts: true,
      teams: false,
      attendance: true,
      allowance: true,
      advances: true,
      payroll: true,
      performance: false,
      portal: true,
      documents: true,
      birthdays: true,
hrReports: true
    },

    "Team Leader": {
employeeAccounts: false,
      teams: false,
      attendance: true,
      allowance: false,
      advances: false,
      payroll: false,
      performance: true,
      portal: true,
      documents: false,
      birthdays: false,
hrReports: false
    },

    Employee: {
employeeAccounts: false,
      teams: false,
      attendance: false,
      allowance: false,
      advances: false,
      payroll: false,
      performance: false,
      portal: true,
      documents: true,
      birthdays: false,
hrReports: false
    }
  };

  let savedPermissions = JSON.parse(
localStorage.getItem("afRolePermissions") || "null"
  );

  if (!savedPermissions) {
savedPermissions = JSON.parse(
JSON.stringify(defaultPermissions)
    );

localStorage.setItem(
      "afRolePermissions",
JSON.stringify(savedPermissions)
    );
  }

const permissionModal = document.createElement("div");

permissionModal.style.cssText = `
position:fixed;
    inset:0;
background:rgba(0,0,0,.6);
display:flex;
align-items:center;
justify-content:center;
    z-index:10000;
font-family:Arial,sans-serif;
  `;

permissionModal.innerHTML = `
<div style="
background:white;
      width:900px;
      max-width:95%;
      max-height:92vh;
overflow:auto;
      border-radius:14px;
      padding:24px;
      box-shadow:0 10px 40px rgba(0,0,0,.35);
    ">

<h2 style="
        margin-top:0;
        color:#0b5d3b;
      ">
        Roles & Permissions
</h2>

<div style="
        background:#eef8f2;
        padding:13px;
        border-radius:9px;
        margin-bottom:18px;
        font-size:14px;
      ">
        Select a system role and choose the Staff & HR modules
        that the role is allowed to access.
</div>

<label style="
font-weight:bold;
display:block;
        margin-bottom:7px;
      ">
        Select Role
</label>

<select id="permissionRole"
        style="
          width:100%;
          padding:11px;
          border:1px solid #ccc;
          border-radius:7px;
          margin-bottom:20px;
          font-size:15px;
        ">
        ${roles.map(role => `
<option value="${escapeSettingsText(role)}">
            ${escapeSettingsText(role)}
</option>
        `).join("")}
</select>

<div style="
        overflow-x:auto;
        border:1px solid #ddd;
        border-radius:9px;
      ">

<table style="
          width:100%;
border-collapse:collapse;
          min-width:650px;
        ">

<thead>
<tr style="
              background:#0b5d3b;
color:white;
            ">
<th style="padding:11px;text-align:left;">
                Module
</th>

<th style="padding:11px;text-align:center;">
                Access
</th>
</tr>
</thead>

<tbody id="permissionTableBody">
</tbody>

</table>

</div>

<div style="
display:flex;
        gap:10px;
justify-content:flex-end;
        margin-top:20px;
      ">

<button id="cancelPermissions"
          style="
            padding:10px 18px;
            border:1px solid #aaa;
            border-radius:7px;
background:white;
cursor:pointer;
          ">
          Cancel
</button>

<button id="savePermissions"
          style="
            padding:10px 18px;
border:none;
            border-radius:7px;
            background:#0b5d3b;
color:white;
cursor:pointer;
          ">
          Save Permissions
</button>

</div>

</div>
  `;

document.body.appendChild(permissionModal);

const roleSelect =
permissionModal.querySelector("#permissionRole");

const tableBody =
permissionModal.querySelector("#permissionTableBody");

  function renderPermissions() {

const selectedRole = roleSelect.value;

const rolePermissions =
savedPermissions[selectedRole] ||
defaultPermissions[selectedRole];

tableBody.innerHTML = permissions.map(
      ([key, label]) => {

const checked =
rolePermissions[key] === true
            ? "checked"
            : "";

        return `
<tr style="
            border-bottom:1px solid #eee;
          ">

<td style="
              padding:11px;
              font-weight:500;
            ">
              ${escapeSettingsText(label)}
</td>

<td style="
              padding:11px;
text-align:center;
            ">

<input
                type="checkbox"
                class="permissionCheckbox"
                data-permission="${key}"
                ${checked}
                style="
                  width:19px;
                  height:19px;
cursor:pointer;
                "
>

</td>

</tr>
        `;
      }
    ).join("");
  }

roleSelect.onchange = renderPermissions;

renderPermissions();

permissionModal.querySelector(
    "#savePermissions"
  ).onclick = () => {

const selectedRole = roleSelect.value;

const updatedPermissions = {};

permissions.forEach(([key]) => {

const checkbox =
permissionModal.querySelector(
          `.permissionCheckbox[data-permission="${key}"]`
        );

updatedPermissions[key] =
checkbox.checked;
    });

savedPermissions[selectedRole] =
updatedPermissions;

localStorage.setItem(
      "afRolePermissions",
JSON.stringify(savedPermissions)
    );

    alert(
      "Permissions saved successfully for " +
selectedRole + "."
    );

permissionModal.remove();
  };

permissionModal.querySelector(
    "#cancelPermissions"
  ).onclick = () => {
permissionModal.remove();
  };
};
   
modal.querySelector("#portalHRBtn").onclick = () => {

  if (!hasPermission("portal")) {
requirePermission("portal");
    return;
  }

  alert(
    "Employee Portal will be connected to employee login and personal records."
  );
};

modal.querySelector("#documentsHRBtn").onclick = () => {

  if (!hasPermission("documents")) {
requirePermission("documents");
    return;
  }

  alert(
    "Employee Documents & Records module will be connected next."
  );
};

modal.querySelector("#birthdayHRBtn").onclick = () => {
if (!hasPermission("birthdays")) {
requirePermission("birthdays");
    return;
  }

const reminders =
typeof getEmployeeBirthdayReminders === "function"
      ? getEmployeeBirthdayReminders()
      : [];

  if (!reminders.length) {
    alert("There are no upcoming employee birthdays.");
    return;
  }

  alert(
    reminders
      .map(
        reminder =>
reminder.message ||
          (
reminder.fullName +
            " — " +
reminder.daysRemaining +
            " day(s)"
          )
      )
      .join("\n")
  );
};

modal.querySelector("#hrReportsBtn").onclick = () => {
   if (!hasPermission("hrReports")) {
requirePermission("hrReports");
    return;
  }

modal.remove();

  alert(
    "HR Reports will include:\n\n" +
    "• Attendance reports\n" +
    "• Employee allowance reports\n" +
    "• Overtime and shortfall reports\n" +
    "• Advances and deductions\n" +
    "• Payroll ledger\n" +
    "• Employee and team performance"
  );
};
}
/* =========================================================
   A&F CENTRAL ROLE ACCESS & DASHBOARD CONTROLLER
   ========================================================= */

const AF_ROLE_ACCESS = {

  Director: {

    sidebar: [
      "navDashboard",
      "navMaterialProduction",
      "navStockInventory",
      "navSalesCustomers",
      "navSuppliers",
      "navExpenses",
      "navStaffHR",
      "navReports",
      "navSystemSettings",
      "navPoleStandardWeights",
      "navWashingTarget",
      "navWashingRecords"
    ],

    actions: [
      "actionMaterialIn",
      "actionWashing",
      "actionProduction",
      "actionCheckStock",
      "actionPlanProduction",
      "actionDelivery"
    ],

    subtitle:
      "Full Company Control & Management Access",

accessText:
      "Full company access • View • Record • Edit • Delete • Control"

  },


  Manager: {

    sidebar: [
      "navDashboard",
      "navStaffHR"
    ],

    actions: [
      "actionWashing",
      "actionProduction",
      "actionCheckStock"
    ],

    subtitle:
      "Operations Supervision & Administrative Oversight",

accessText:
      "Supervisory access • Mainly read-only • Limited operational recording"

  },


  HR: {

    sidebar: [
      "navDashboard",
      "navStaffHR",
      "navReports"
    ],

    actions: [],

    subtitle:
      "Human Resources & Employee Management",

accessText:
      "HR access • Employee administration • Attendance • Payroll • HR records"

  },


  Secretary: {

    sidebar: [
      "navDashboard",
      "navSalesCustomers",
      "navSuppliers",
      "navExpenses",
      "navStaffHR",
      "navReports"
    ],

    actions: [
       "actionMaterialIn"
    ],

    subtitle:
      "Administration, Accounts & Company Records",

accessText:
      "Administrative access • View & Record • Saved records cannot be edited or deleted"

  },


  "Team Leader": {

    sidebar: [
      "navDashboard",
      "navStaffHR"
    ],

    actions: [],

    subtitle:
      "Team Supervision & Performance",

accessText:
      "View-only access • Team attendance • Working hours • Team & employee performance"

  },


  Employee: {

    sidebar: [
      "navDashboard"
    ],

    actions: [],

    subtitle:
      "Employee Personal Portal",

accessText:
      "Personal access • View your own employment information"

  }

};


/* =========================================================
   GET CURRENT USER
   ========================================================= */

function getAFCurrentUser() {

  try {

    return JSON.parse(
localStorage.getItem("currentUser") || "null"
    );

  } catch (error) {

console.error(
      "Unable to read current user:",
      error
    );

    return null;

  }

}


/* =========================================================
   GET CURRENT ROLE
   ========================================================= */

function getAFCurrentRole() {

const currentUser = getAFCurrentUser();

  if (
    !currentUser ||
    !currentUser.role
  ) {

    return null;

  }

  return currentUser.role;

}


/* =========================================================
   CHECK ROLE
   ========================================================= */

function isAFRole() {

const allowedRoles =
Array.from(arguments);

const role =
getAFCurrentRole();

  return allowedRoles.includes(role);

}


/* =========================================================
   RESET DASHBOARD VISIBILITY
   ========================================================= */

function resetAFRoleDashboard() {

const sidebarIds = [
    "navDashboard",
    "navMaterialProduction",
    "navStockInventory",
    "navSalesCustomers",
    "navSuppliers",
    "navExpenses",
    "navStaffHR",
    "navReports",
    "navSystemSettings",
    "navPoleStandardWeights",
    "navWashingTarget",
    "navWashingRecords"
  ];

sidebarIds.forEach(id => {

const element =
document.getElementById(id);

    if (element) {
element.style.display = "none";
    }

  });


const actionIds = [
    "actionMaterialIn",
    "actionWashing",
    "actionProduction",
    "actionCheckStock",
    "actionPlanProduction",
    "actionDelivery"
  ];

actionIds.forEach(id => {

const element =
document.getElementById(id);

    if (element) {
element.style.display = "none";
    }

  });


const factoryKpis =
document.getElementById("factoryKpis");

const dashboardGrid =
document.getElementById("factoryDashboardGrid");

const operations =
document.getElementById("operationsOverview");

const quickActions =
document.getElementById("quickActionsCard");

const integration =
document.getElementById("systemIntegrationCard");


  if (factoryKpis) {
factoryKpis.style.display = "";
  }

  if (dashboardGrid) {
dashboardGrid.style.display = "";
  }

  if (operations) {
operations.style.display = "";
  }

  if (quickActions) {
quickActions.style.display = "";
  }

  if (integration) {
integration.style.display = "";
  }

}


/* =========================================================
   APPLY ROLE DASHBOARD
   ========================================================= */

function applyAFRoleDashboard() {

const currentUser =
getAFCurrentUser();

  if (
    !currentUser ||
    !currentUser.role
  ) {

    return;

  }


const role =
currentUser.role;

const roleAccess =
    AF_ROLE_ACCESS[role];


  if (!roleAccess) {

    alert(
      "This employee account does not have a recognised system role."
    );

    return;

  }


resetAFRoleDashboard();
if (
typeof refreshAFDashboardBirthdays ===
  "function"
) {
refreshAFDashboardBirthdays();
}


  /* ---------- SIDEBAR ---------- */

roleAccess.sidebar.forEach(id => {

const element =
document.getElementById(id);

    if (element) {
element.style.display = "";
    }

  });


  /* ---------- QUICK ACTIONS ---------- */

roleAccess.actions.forEach(id => {

const element =
document.getElementById(id);

    if (element) {
element.style.display = "";
    }

  });


  /* ---------- TITLE ---------- */

const title =
document.getElementById("dashboardTitle");

  if (title) {

title.textContent =
      role + " Dashboard";

  }


  /* ---------- SUBTITLE ---------- */

const subtitle =
document.getElementById(
      "dashboardSubtitle"
    );

  if (subtitle) {

subtitle.textContent =
roleAccess.subtitle;

  }


  /* ---------- ACCESS NOTICE ---------- */

const notice =
document.getElementById(
      "roleAccessNotice"
    );

  if (notice) {

notice.style.display = "block";

notice.textContent =
roleAccess.accessText;

  }


  /* =======================================================
     DIRECTOR
     ======================================================= */

  if (role === "Director") {

    return;

  }


  /* =======================================================
     MANAGER
     Keep Operations Overview.
     Show only approved operational actions.
     ======================================================= */

  if (role === "Manager") {

const factoryKpis =
document.getElementById(
        "factoryKpis"
      );

const integration =
document.getElementById(
        "systemIntegrationCard"
      );

    if (factoryKpis) {
factoryKpis.style.display = "none";
    }

    if (integration) {
integration.style.display = "none";
    }

    return;

  }


  /* =======================================================
     HR
     Role-specific HR dashboard comes in next stage.
     Hide factory production dashboard for now.
     ======================================================= */

  if (role === "HR") {

hideAFFactoryDashboard();

    return;

  }


/* =======================================================
   SECRETARY DASHBOARD

   Administrative overview of factory activity.
   Secretary = View + Record.
   Saved records remain Director-controlled for corrections.
   ======================================================= */

  if (role === "Secretary") {

hideAFFactoryDashboard();

renderAFSecretaryDashboard();

    return;
  }


  /* =======================================================
     TEAM LEADER
     VIEW ONLY.
     Performance dashboard comes in next stage.
     ======================================================= */

  if (role === "Team Leader") {

hideAFFactoryDashboard();

    return;

  }


  /* =======================================================
     EMPLOYEE
     Personal dashboard comes in next stage.
     ======================================================= */

  if (role === "Employee") {

hideAFFactoryDashboard();

  }

}


/* =========================================================
   HIDE FACTORY DASHBOARD CONTENT
   ========================================================= */

function hideAFFactoryDashboard() {

const ids = [
    "factoryKpis",
    "factoryDashboardGrid",
    "systemIntegrationCard"
  ];

ids.forEach(id => {

const element =
document.getElementById(id);

    if (element) {
element.style.display = "none";
    }

  });

}
/* =========================================================
   SECRETARY DASHBOARD
   ========================================================= */

function renderAFSecretaryDashboard() {

  /*
   * Remove an older Secretary dashboard before rebuilding.
   */
const oldDashboard =
document.getElementById(
      "afSecretaryDashboard"
    );

  if (oldDashboard) {
oldDashboard.remove();
  }


const main =
document.querySelector(
      "#mainApplication .main"
    );

  if (!main) {
    return;
  }


  /* =======================================================
     READ REAL FACTORY DATA
     ======================================================= */

const materialRecords =
JSON.parse(
localStorage.getItem(
        "materialRecords"
      ) || "[]"
    );


const washingRecords =
JSON.parse(
localStorage.getItem(
        "washingShiftRecords"
      ) || "[]"
    );


const productionRecords =
JSON.parse(
localStorage.getItem(
        "productionRecords"
      ) || "[]"
    );


  /*
   * Company-owned kavera only.
   * Client washing material must not be counted as
   * company purchased stock.
   */
const companyMaterials =
materialRecords.filter(
      record =>
record.materialSource !==
        "client"
    );


const grossReceivedKg =
companyMaterials.reduce(
      (sum, record) =>
        sum +
        (
          Number(
record.grossWeight
          ) || 0
        ),
      0
    );


const netUsableKg =
companyMaterials.reduce(
      (sum, record) =>
        sum +
        (
          Number(
record.openingBatchKg ??
record.netWeight ??
            0
          ) || 0
        ),
      0
    );


const unwashedBalanceKg =
companyMaterials.reduce(
      (sum, record) =>
        sum +
        (
          Number(
record.batchBalanceKg ??
record.openingBatchKg ??
record.netWeight ??
            0
          ) || 0
        ),
      0
    );


const companyWashedKg =
    Number(
localStorage.getItem(
        "companyWashedKaveraStock"
      ) || 0
    );


const completedWashing =
washingRecords.filter(
      record =>
record.targetStatus ===
        "COMPLETED" &&
record.status !==
        "CANCELLED"
    );


const totalWashedKg =
completedWashing.reduce(
      (sum, record) =>
        sum +
        (
          Number(
record.actualWashedKg
          ) || 0
        ),
      0
    );


  /*
   * Production totals.
   * These use real saved production records.
   */
const totalPolesProduced =
productionRecords.reduce(
      (sum, record) =>
        sum +
        (
          Number(
record.totalPoles
          ) || 0
        ),
      0
    );


const totalProductionWeight =
productionRecords.reduce(
      (sum, record) =>
        sum +
        (
          Number(
record.productionWeight
          ) || 0
        ),
      0
    );


  /*
   * Latest operational activity.
   */
const latestWashing =
completedWashing.length
      ? completedWashing[
completedWashing.length - 1
        ]
      : null;


const latestProduction =
productionRecords.length
      ? productionRecords[
productionRecords.length - 1
        ]
      : null;


const openBatches =
companyMaterials.filter(
      record =>
        Number(
record.batchBalanceKg ??
record.openingBatchKg ??
record.netWeight ??
          0
        ) > 0.01
    ).length;


  /* =======================================================
     BUILD SECRETARY DASHBOARD
     ======================================================= */

const dashboard =
document.createElement("div");

dashboard.id =
    "afSecretaryDashboard";

dashboard.style.cssText = `
    margin-top:16px;
  `;


dashboard.innerHTML = `

<!-- ===============================================
         TODAY / FACTORY AT A GLANCE
         =============================================== -->

<section
      class="card"
      style="margin-bottom:16px;"
>

<div style="
display:flex;
justify-content:space-between;
align-items:flex-start;
        gap:15px;
flex-wrap:wrap;
        margin-bottom:16px;
      ">

<div>

<div class="title"
               style="margin-bottom:4px;">
            Factory at a Glance
</div>

<div class="sub">
            Administrative overview of material,
            washing, production and stock movement
</div>

</div>

<button
          type="button"
onclick="runRoleAction('recordMaterialIn')"
          style="
            border:0;
            background:#0b5d3b;
color:white;
            padding:11px 16px;
            border-radius:8px;
font-weight:bold;
cursor:pointer;
          "
>
＋ Record Kavera Purchase
</button>

</div>


<div style="
display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(170px,1fr));
        gap:12px;
      ">


<div style="
          padding:15px;
          border:1px solid #dce8e2;
          border-radius:10px;
          background:#f8fbf9;
        ">

<div class="kt">
Kavera Received
</div>

<div class="kv">
            ${grossReceivedKg.toLocaleString()}
<span style="font-size:13px;">kg</span>
</div>

<div class="note">
            Gross company purchases
</div>

</div>


<div style="
          padding:15px;
          border:1px solid #dce8e2;
          border-radius:10px;
          background:#f8fbf9;
        ">

<div class="kt">
            Net Usable Kavera
</div>

<div class="kv">
            ${netUsableKg.toLocaleString()}
<span style="font-size:13px;">kg</span>
</div>

<div class="note">
            After dirt deduction
</div>

</div>


<div style="
          padding:15px;
          border:1px solid #dce8e2;
          border-radius:10px;
          background:#f8fbf9;
        ">

<div class="kt">
Kavera In Stock
</div>

<div class="kv">
            ${unwashedBalanceKg.toLocaleString()}
<span style="font-size:13px;">kg</span>
</div>

<div class="note">
            ${openBatches} open KB batch(es)
</div>

</div>


<div style="
          padding:15px;
          border:1px solid #dce8e2;
          border-radius:10px;
          background:#f8fbf9;
        ">

<div class="kt">
Kavera Washed
</div>

<div class="kv">
            ${totalWashedKg.toLocaleString()}
<span style="font-size:13px;">kg</span>
</div>

<div class="note">
            Total successfully washed
</div>

</div>


<div style="
          padding:15px;
          border:1px solid #dce8e2;
          border-radius:10px;
          background:#f8fbf9;
        ">

<div class="kt">
            Washed Stock
</div>

<div class="kv">
            ${companyWashedKg.toLocaleString()}
<span style="font-size:13px;">kg</span>
</div>

<div class="note">
            Company washed material
</div>

</div>


<div style="
          padding:15px;
          border:1px solid #dce8e2;
          border-radius:10px;
          background:#f8fbf9;
        ">

<div class="kt">
            Poles Produced
</div>

<div class="kv">
            ${totalPolesProduced.toLocaleString()}
</div>

<div class="note">
            ${totalProductionWeight.toLocaleString()}
            kg finished weight
</div>

</div>

</div>

</section>


<!-- ===============================================
         OPERATIONS + SECRETARY WORK
         =============================================== -->

<div style="
display:grid;
      grid-template-columns:
        repeat(auto-fit,minmax(320px,1fr));
      gap:16px;
      margin-bottom:16px;
    ">


<!-- MANAGER ACTIVITY -->

<section class="card">

<div class="title">
          Manager Activities
</div>

<div style="
          border-bottom:1px solid #edf2ef;
          padding:10px 0;
        ">

<b>Latest Washing</b>

<div class="sub"
               style="margin-top:6px;">

            ${
latestWashing
                ? (
                    (latestWashing.washingSubBatchNumber ||
latestWashing.cycleNumber ||
latestWashing.batchNumber) +
                    " • " +
                    Number(
latestWashing.actualWashedKg || 0
                    ).toLocaleString() +
                    " kg washed • " +
                    Number(
latestWashing.achievementPercent || 0
                    ).toFixed(1) +
                    "%"
                  )
                : "No completed washing record yet"
            }

</div>

</div>


<div style="
          border-bottom:1px solid #edf2ef;
          padding:12px 0;
        ">

<b>Latest Production</b>

<div class="sub"
               style="margin-top:6px;">

            ${
latestProduction
                ? (
                    Number(
latestProduction.totalPoles || 0
                    ).toLocaleString() +
                    " poles • " +
                    Number(
latestProduction.productionWeight || 0
                    ).toLocaleString() +
                    " kg"
                  )
                : "No production record yet"
            }

</div>

</div>


<div style="
          padding:12px 0 2px;
        ">

<b>
            Inspection & Equipment Verification
</b>

<div class="sub"
               style="margin-top:6px;">
            Manager → Secretary verification
            workflow will appear here as records
            are connected.
</div>

</div>

</section>


<!-- SECRETARY ADMINISTRATION -->

<section class="card">

<div class="title">
          Secretary Administration
</div>

<div style="
display:grid;
          grid-template-columns:1fr 1fr;
          gap:10px;
        ">

<button
            class="action"
            type="button"
onclick="runRoleAction('recordMaterialIn')"
>
♻Kavera Purchase
</button>

<button
            class="action"
            type="button"
onclick="openRoleModule('salesCustomers')"
>
▱ Sales & Customers
</button>

<button
            class="action"
            type="button"
onclick="openRoleModule('suppliers')"
>
♻ Suppliers
</button>

<button
            class="action"
            type="button"
onclick="openRoleModule('expenses')"
>
◈ Expenses
</button>

</div>

</section>

</div>


<!-- ===============================================
         SALES, STOCK & DISPATCH
         =============================================== -->

<section
      class="card"
      style="margin-bottom:16px;"
>

<div class="title">
        Sales, Stock & Dispatch
</div>

<div style="
display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(180px,1fr));
        gap:12px;
      ">

<div style="
          padding:14px;
          border:1px solid #edf2ef;
          border-radius:9px;
        ">
<div class="kt">
            Poles Sold
</div>
<div class="kv">—</div>
<div class="note">
            Sales records to be connected
</div>
</div>


<div style="
          padding:14px;
          border:1px solid #edf2ef;
          border-radius:9px;
        ">
<div class="kt">
            Poles Dispatched
</div>
<div class="kv">—</div>
<div class="note">
            Kept separate from poles sold
</div>
</div>


<div style="
          padding:14px;
          border:1px solid #edf2ef;
          border-radius:9px;
        ">
<div class="kt">
            Pole Balance At Factory
</div>
<div class="kv">—</div>
<div class="note">
            Finished-stock records to be connected
</div>
</div>


<div style="
          padding:14px;
          border:1px solid #edf2ef;
          border-radius:9px;
        ">
<div class="kt">
            Orders / Quotations
</div>
<div class="kv">—</div>
<div class="note">
            Commercial records to be connected
</div>
</div>

</div>

</section>


<!-- ===============================================
         UPCOMING / COMPANY RECORDS
         =============================================== -->

<div style="
display:grid;
      grid-template-columns:
        repeat(auto-fit,minmax(320px,1fr));
      gap:16px;
      margin-bottom:16px;
    ">


<section class="card">

<div class="title">
          Upcoming & Follow-up
</div>

<table>
<tbody>

<tr>
<td>Upcoming Clients</td>
<td style="text-align:right;">
<b>To connect</b>
</td>
</tr>

<tr>
<td>Upcoming Events</td>
<td style="text-align:right;">
<b>To connect</b>
</td>
</tr>

<tr>
<td>Customer Follow-ups</td>
<td style="text-align:right;">
<b>To connect</b>
</td>
</tr>

<tr>
<td>Pending Verification</td>
<td style="text-align:right;">
<b>To connect</b>
</td>
</tr>

</tbody>
</table>

</section>


<section class="card">

<div class="title">
          Company Records & Marketing
</div>

<table>
<tbody>

<tr>
<td>Company Meetings</td>
<td style="text-align:right;">
<b>To connect</b>
</td>
</tr>

<tr>
<td>Adverts & Campaigns</td>
<td style="text-align:right;">
<b>To connect</b>
</td>
</tr>

<tr>
<td>Facebook</td>
<td style="text-align:right;">
<b>Social Media</b>
</td>
</tr>

<tr>
<td>TikTok</td>
<td style="text-align:right;">
<b>Social Media</b>
</td>
</tr>

<tr>
<td>WhatsApp</td>
<td style="text-align:right;">
<b>Social Media</b>
</td>
</tr>

</tbody>
</table>

</section>

</div>


<!-- ===============================================
         ALERTS
         =============================================== -->

<section class="card">

<div class="title">
        Alerts & Pending Work
</div>

<div style="
        background:#eef8f2;
        border:1px solid #cfe6d8;
        border-radius:9px;
        padding:14px;
        color:#0b5d3b;
        font-size:13px;
        line-height:1.7;
      ">

        This area will automatically show records
        requiring Secretary attention, including
        Manager verification requests, customer
        follow-ups, dispatches, supplier matters
        and administrative exceptions.

</div>

</section>

  `;


  /*
   * Insert Secretary dashboard before birthday card.
   * This keeps the working birthday card below it.
   */
const birthdayCard =
document.getElementById(
      "dashboardBirthdayCard"
    );


  if (
birthdayCard&&
birthdayCard.parentNode
  ) {

birthdayCard.parentNode.insertBefore(
      dashboard,
birthdayCard
    );

  } else {

main.appendChild(
      dashboard
    );
  }
}


/* =========================================================
   CHECK MAIN MODULE ACCESS
   ========================================================= */

function canAFRoleAccessModule(moduleName) {

const role =
getAFCurrentRole();

  if (!role) {
    return false;
  }


const moduleAccess = {

materialProduction: [
      "Director"
    ],

stockInventory: [
      "Director"
    ],

salesCustomers: [
      "Director",
      "Secretary"
    ],

    suppliers: [
      "Director",
      "Secretary"
    ],

    expenses: [
      "Director",
      "Secretary"
    ],

staffHR: [
      "Director",
      "Manager",
      "HR",
      "Secretary",
      "Team Leader"
    ],

    reports: [
      "Director",
      "HR",
      "Secretary"
    ],

systemSettings: [
      "Director"
    ],

washingTarget: [
      "Director"
    ],

washingRecords: [
      "Director"
    ],
   poleStandardWeights: [
      "Director"
   ],

  };


const allowedRoles =
moduleAccess[moduleName] || [];


  return allowedRoles.includes(role);

}


/* =========================================================
   OPEN MAIN MODULE SAFELY
   ========================================================= */

function openRoleModule(moduleName) {

  if (
    !canAFRoleAccessModule(moduleName)
  ) {

const role =
getAFCurrentRole() ||
      "This user";

    alert(
      "Access Denied\n\n" +
      role +
      " does not have access to this module."
    );

    return;

  }


  switch (moduleName) {

    case "materialProduction":

showMessage(
        "Material & Production"
      );

      break;


    case "stockInventory":

showMessage(
        "Stock & Inventory"
      );

      break;


    case "salesCustomers":

clientRegistration();

      break;


    case "suppliers":

supplierManagement();

      break;


    case "expenses":

showMessage(
        "Expenses"
      );

      break;


    case "staffHR":

staffHR();

      break;


    case "reports":

monthlyClientSummary();

      break;


    case "systemSettings":

systemSettings();

      break;


    case "washingTarget":

setWashingTarget();

      break;


   case "washingRecords":

viewWashingRecords();

      break;


    case "poleStandardWeights":

managePoleStandardWeights();
closeAFMobileMenu();

      break;

  }

}

/* =========================================================
   CHECK QUICK ACTION ACCESS
   ========================================================= */

function canAFRoleRunAction(actionName) {

const role =
getAFCurrentRole();

  if (!role) {
    return false;
  }


const actionAccess = {

recordMaterialIn: [
      "Director",
      "Secretary"
    ],

recordWashing: [
      "Director",
      "Manager"
    ],
recordProduction: [
      "Director",
      "Manager"
    ],

checkStock: [
      "Director",
      "Manager"
    ],

planProduction: [
      "Director"
    ],

recordDelivery: [
      "Director"
    ]

  };


const allowedRoles =
actionAccess[actionName] || [];


  return allowedRoles.includes(role);

}


/* =========================================================
   RUN QUICK ACTION SAFELY
   ========================================================= */

function runRoleAction(actionName) {

  if (
    !canAFRoleRunAction(actionName)
  ) {

const role =
getAFCurrentRole() ||
      "This user";

    alert(
      "Access Denied\n\n" +
      role +
      " is not authorised to perform this action."
    );

    return;

  }


  switch (actionName) {

    case "recordMaterialIn":

recordMaterialIn();

      break;


    case "recordWashing":

recordWashing();

      break;


    case "recordProduction":

recordProduction();

      break;


    case "checkStock":

showMessage(
        "Check Stock"
      );

      break;


    case "planProduction":

showMessage(
        "Plan Production"
      );

      break;


    case "recordDelivery":

showMessage(
        "Record Delivery"
      );

      break;

  }

}


/* =========================================================
   RECORD / EDIT / DELETE AUTHORITY
   ========================================================= */

function canAFRecord(recordArea) {

const role =
getAFCurrentRole();


  if (role === "Director") {
    return true
  }


  if (role === "Secretary") {

const secretaryRecordAreas = [
      "accounts",
      "expenses",
      "sales",
      "customers",
      "suppliers",
      "attendance",
      "allowance",
      "advances",
      "payroll",
      "documents",
      "administration",
      "marketing"
    ];

    return secretaryRecordAreas.includes(
recordArea
    );

  }


  if (role === "HR") {

const hrRecordAreas = [
      "employees",
      "teams",
      "attendance",
      "allowance",
      "advances",
      "payroll",
      "documents",
      "hr"
    ];

    return hrRecordAreas.includes(
recordArea
    );

  }


  if (role === "Manager") {

const managerRecordAreas = [
      "washing",
      "production"
    ];

    return managerRecordAreas.includes(
recordArea
    );

  }


  return false;

}


/* =========================================================
   EDIT AUTHORITY
   Director controls saved-record editing.
   ========================================================= */

function canAFEditSavedRecord() {

  return getAFCurrentRole() ===
    "Director";

}


/* =========================================================
   DELETE AUTHORITY
   Director only.
   ========================================================= */

function canAFDeleteSavedRecord() {

  return getAFCurrentRole() ===
    "Director";

}


/* =========================================================
   REQUIRE EDIT AUTHORITY
   ========================================================= */

function requireAFEditAuthority() {

  if (canAFEditSavedRecord()) {
    return true;
  }


  alert(
    "Access Denied\n\n" +
    "Only the Director can edit saved records."
  );


  return false;

}


/* =========================================================
   REQUIRE DELETE AUTHORITY
   ========================================================= */

function requireAFDeleteAuthority() {

  if (canAFDeleteSavedRecord()) {
    return true;
  }


  alert(
    "Access Denied\n\n" +
    "Only the Director can delete saved records."
  );


  return false;

}
/* =========================================================
   A&F STAFF & HR ROLE VISIBILITY CONTROLLER
   ========================================================= */

function applyStaffHRRoleVisibility(modal) {

  if (!modal) {
    return;
  }

const currentUser = JSON.parse(
localStorage.getItem("currentUser") || "null"
  );

  if (!currentUser || !currentUser.role) {
    return;
  }

const role = currentUser.role;


  /* -------------------------------------------------------
     ALL STAFF & HR BUTTONS
     ------------------------------------------------------- */

const allButtons = [
    "employeeAccountsHRBtn",
    "teamsHRBtn",
    "shiftsHRBtn",
    "attendanceHRBtn",
    "allowanceHRBtn",
    "advancesHRBtn",
    "payrollHRBtn",
    "performanceHRBtn",
    "rolesHRBtn",
    "portalHRBtn",
    "documentsHRBtn",
    "birthdayHRBtn",
    "hrReportsBtn"
  ];


  /* Hide everything first */

allButtons.forEach(id => {

const button =
modal.querySelector("#" + id);

    if (button) {
button.style.display = "none";
    }

  });


  /* -------------------------------------------------------
     ROLE BUTTON CONFIGURATION
     ------------------------------------------------------- */

const roleButtons = {

    Director: [
      "employeeAccountsHRBtn",
      "teamsHRBtn",
      "shiftsHRBtn",
      "attendanceHRBtn",
      "allowanceHRBtn",
      "advancesHRBtn",
      "payrollHRBtn",
      "performanceHRBtn",
      "rolesHRBtn",
      "portalHRBtn",
      "documentsHRBtn",
      "birthdayHRBtn",
      "hrReportsBtn"
    ],


    Manager: [
      "teamsHRBtn",
      "shiftsHRBtn",
      "attendanceHRBtn",
      ],


    HR: [
      "employeeAccountsHRBtn",
      "teamsHRBtn",
      "shiftsHRBtn",
      "attendanceHRBtn",
      "allowanceHRBtn",
      "advancesHRBtn",
      "payrollHRBtn",
      "performanceHRBtn",
      "portalHRBtn",
      "documentsHRBtn",
      "birthdayHRBtn",
      "hrReportsBtn"
    ],


    Secretary: [
      "employeeAccountsHRBtn",
      "attendanceHRBtn",
      "allowanceHRBtn",
      "advancesHRBtn",
      "payrollHRBtn",
      "portalHRBtn",
      "documentsHRBtn",
      "birthdayHRBtn",
      "hrReportsBtn"
    ],


    "Team Leader": [
      "teamsHRBtn",
      "shiftsHRBtn",
      "attendanceHRBtn",
      "performanceHRBtn",
      "portalHRBtn"
    ],


    Employee: [
      "portalHRBtn",
      "documentsHRBtn"
    ]

  };


const visibleButtons =
roleButtons[role] || [];


  /* -------------------------------------------------------
     SHOW ONLY AUTHORIZED BUTTONS
     ------------------------------------------------------- */

visibleButtons.forEach(id => {

const button =
modal.querySelector("#" + id);

    if (button) {
button.style.display = "";
    }

  });


  /* -------------------------------------------------------
     MANAGER — VIEW ONLY
     ------------------------------------------------------- */

  if (role === "Manager") {

setStaffHRButtonViewOnly(
      modal,
      "teamsHRBtn",
      "View teams and employees"
    );

setStaffHRButtonViewOnly(
      modal,
      "shiftsHRBtn",
      "View shifts and working hours"
    );

setStaffHRButtonViewOnly(
      modal,
      "attendanceHRBtn",
      "View employee attendance"
    );

  }


  /* -------------------------------------------------------
     TEAM LEADER — VIEW ONLY
     ------------------------------------------------------- */

  if (role === "Team Leader") {

setStaffHRButtonViewOnly(
      modal,
      "teamsHRBtn",
      "View my team"
    );

setStaffHRButtonViewOnly(
      modal,
      "shiftsHRBtn",
      "View shift and working hours"
    );

setStaffHRButtonViewOnly(
      modal,
      "attendanceHRBtn",
      "View attendance"
    );

setStaffHRButtonViewOnly(
      modal,
      "performanceHRBtn",
      "View team and employee performance"
    );

setStaffHRButtonViewOnly(
      modal,
      "portalHRBtn",
      "View employee portal"
    );

  }


  /* -------------------------------------------------------
     EMPLOYEE — PERSONAL VIEW ONLY
     ------------------------------------------------------- */

  if (role === "Employee") {

setStaffHRButtonViewOnly(
      modal,
      "portalHRBtn",
      "View my personal information"
    );

setStaffHRButtonViewOnly(
      modal,
      "documentsHRBtn",
      "View my documents"
    );

  }

}


/* =========================================================
   CHANGE STAFF & HR BUTTON TEXT TO VIEW ONLY
   ========================================================= */

function setStaffHRButtonViewOnly(
  modal,
buttonId,
  description
) {

const button =
modal.querySelector("#" + buttonId);

  if (!button) {
    return;
  }


const strong =
button.querySelector("strong");

const span =
button.querySelector("span");


  if (
    strong &&
    !strong.textContent.includes("View Only")
  ) {

strong.textContent =
strong.textContent + " — View Only";

  }


  if (span) {

span.textContent =
      description;

  }


button.style.background =
    "#f4f7f5";

button.style.border =
    "1px solid #dce8e2";

}


/* =========================================================
   CHECK WHETHER STAFF & HR ROLE IS VIEW ONLY
   ========================================================= */

function isStaffHRViewOnly() {

const currentUser = JSON.parse(
localStorage.getItem("currentUser") || "null"
  );

  if (!currentUser) {
    return false;
  }


  return [
    "Manager",
    "Team Leader",
    "Employee"
  ].includes(currentUser.role);

}


/* =========================================================
   CHECK WHETHER MANAGER IS VIEWING HR
   ========================================================= */

function isManagerHRViewOnly() {

const currentUser = JSON.parse(
localStorage.getItem("currentUser") || "null"
  );

  return Boolean(
currentUser&&
currentUser.role === "Manager"
  );

}


/* =========================================================
   CHECK WHETHER TEAM LEADER IS VIEWING HR
   ========================================================= */

function isTeamLeaderViewOnly() {

const currentUser = JSON.parse(
localStorage.getItem("currentUser") || "null"
  );

  return Boolean(
currentUser&&
currentUser.role === "Team Leader"
  );

}

/* =========================================================
   A&F DASHBOARD - 4 WEEK BIRTHDAY REMINDERS
   ========================================================= */

function getAFDashboardBirthdays() {

const employees =
typeof getEmployees === "function"
      ? getEmployees()
      : [];

const today = new Date();

today.setHours(
    0,
    0,
    0,
    0
  );

const birthdays = [];


employees.forEach(employee => {

    if (!employee.dateOfBirth) {
      return;
    }


const parts =
      String(employee.dateOfBirth)
        .split("-");


    if (parts.length !== 3) {
      return;
    }


const month =
      Number(parts[1]) - 1;

const day =
      Number(parts[2]);


    if (
Number.isNaN(month) ||
Number.isNaN(day)
    ) {
      return;
    }


    let nextBirthday =
      new Date(
today.getFullYear(),
        month,
        day
      );


nextBirthday.setHours(
      0,
      0,
      0,
      0
    );


    if (nextBirthday< today) {

nextBirthday =
        new Date(
today.getFullYear() + 1,
          month,
          day
        );

nextBirthday.setHours(
        0,
        0,
        0,
        0
      );

    }


const difference =
nextBirthday.getTime() -
today.getTime();


const daysRemaining =
Math.round(
        difference /
        (1000 * 60 * 60 * 24)
      );


    /*
     * Dashboard birthday window:
     * Today up to the next 28 days.
     */

    if (
daysRemaining>= 0 &&
daysRemaining< 28
    ) {

birthdays.push({

employeeId:
employee.employeeId || "",

fullName:
employee.fullName ||
          "Employee",

passportPhoto:
employee.passportPhoto || "",

dateOfBirth:
employee.dateOfBirth,

nextBirthday:
nextBirthday,

daysRemaining:
daysRemaining

      });

    }

  });


birthdays.sort(
    (a, b) =>
a.daysRemaining -
b.daysRemaining
  );


  return birthdays;

}


/* =========================================================
   BIRTHDAY DISPLAY HELPERS
   ========================================================= */

function afBirthdayEscape(value) {

  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


function afBirthdayDateText(date) {

  if (!(date instanceof Date)) {
    return "";
  }


  return date.toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "short"
    }
  );

}


function afBirthdayRemainingText(days) {

  if (days === 0) {
    return "🎉 Birthday Today";
  }


  if (days === 1) {
    return "Tomorrow";
  }


  return days + " days";

}


/* =========================================================
   RENDER ONE BIRTHDAY WEEK
   ========================================================= */

function renderAFBirthdayWeek(
  title,
  birthdays
) {

  let content = "";


  if (!birthdays.length) {

    content = `
<div style="
        color:#8a9992;
        font-size:12px;
        padding:10px 0;
      ">
        No birthdays
</div>
    `;

  } else {

    content =
birthdays.map(
        birthday => {

const isToday =
birthday.daysRemaining === 0;


const background =
isToday
              ? "#fff7dc"
              : "#f8faf9";


const border =
isToday
              ? "#f0cf66"
              : "#e4ece7";


          return `
<div style="
  padding:10px;
  margin-top:8px;
  border:1px solid ${border};
  border-radius:9px;
  background:${background};
">

<div style="
display:flex;
align-items:center;
  gap:10px;
">

<div style="
  width:48px;
  height:48px;
  min-width:48px;
  border-radius:50%;
overflow:hidden;
  background:#e9f1ed;
  border:2px solid #d8e7df;
display:flex;
align-items:center;
justify-content:center;
  color:#6b7d75;
  font-size:20px;
">

${
birthday.passportPhoto
    ? `
<img
src="${birthday.passportPhoto}"
        alt="${afBirthdayEscape(
birthday.fullName
        )}"
        style="
          width:100%;
          height:100%;
object-fit:cover;
        "
>
    `
    : "👤"
}

</div>

<div style="
  flex:1;
  min-width:0;
">

<div style="
  font-size:13px;
font-weight:bold;
  color:#173027;
  line-height:1.4;
">
  ${afBirthdayEscape(
birthday.fullName
  )}
</div>

<div style="
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
  gap:5px 8px;
  margin-top:5px;
  font-size:11px;
  color:#6b7d75;
">

<span>
  ${afBirthdayDateText(
birthday.nextBirthday
  )}
</span>

<strong style="
  color:${
isToday
      ? "#a36b00"
      : "#0b5d3b"
  };
">
  ${afBirthdayRemainingText(
birthday.daysRemaining
  )}
</strong>

</div>

</div>

</div>

</div>
          `;

        }
      ).join("");

  }


  return `
<div style="
      border:1px solid #e1ebe5;
      border-radius:11px;
      padding:12px;
      background:#ffffff;
      min-height:115px;
    ">

<div style="
        color:#0b5d3b;
        font-size:13px;
font-weight:bold;
        padding-bottom:7px;
        border-bottom:1px solid #edf2ef;
      ">
        ${title}
</div>

      ${content}

</div>
  `;

}


/* =========================================================
   UPDATE DASHBOARD BIRTHDAY CARD
   ========================================================= */

function updateAFDashboardBirthdays() {

const card =
document.getElementById(
      "dashboardBirthdayCard"
    );


const container =
document.getElementById(
      "dashboardBirthdayWeeks"
    );


const count =
document.getElementById(
      "dashboardBirthdayCount"
    );


  if (
    !card ||
    !container ||
    !count
  ) {
    return;
  }


const currentUser =
typeof getAFCurrentUser === "function"
      ? getAFCurrentUser()
      : null;


  /*
   * Company-wide birthday dashboard
   * is visible only to these roles.
   */

const allowedRoles = [
    "Director",
    "Manager",
    "HR",
    "Secretary"
  ];


  if (
    !currentUser ||
    !allowedRoles.includes(
currentUser.role
    )
  ) {

card.style.display =
      "none";

    return;

  }


card.style.display =
    "block";


const birthdays =
getAFDashboardBirthdays();


count.textContent =
birthdays.length === 1
      ? "1 upcoming"
      : birthdays.length +
        " upcoming";


const thisWeek =
birthdays.filter(
      item =>
item.daysRemaining>= 0 &&
item.daysRemaining<= 6
    );


const nextWeek =
birthdays.filter(
      item =>
item.daysRemaining>= 7 &&
item.daysRemaining<= 13
    );


const weekThree =
birthdays.filter(
      item =>
item.daysRemaining>= 14 &&
item.daysRemaining<= 20
    );


const weekFour =
birthdays.filter(
      item =>
item.daysRemaining>= 21 &&
item.daysRemaining<= 27
    );


container.innerHTML =

renderAFBirthdayWeek(
      "This Week",
thisWeek
    ) +

renderAFBirthdayWeek(
      "Next Week",
nextWeek
    ) +

renderAFBirthdayWeek(
      "Week 3",
weekThree
    ) +

renderAFBirthdayWeek(
      "Week 4",
weekFour
    );

}


/* =========================================================
   REFRESH BIRTHDAYS AFTER ROLE DASHBOARD LOAD
   ========================================================= */

function refreshAFDashboardBirthdays() {

  if (
typeof updateAFDashboardBirthdays ===
    "function"
  ) {

updateAFDashboardBirthdays();

  }

}

function updateLoggedInUserHeader() {
const date = document.getElementById("dashboardDate");
   if (date) {
      date.textContent = new Date().toLocaleDateString("en-GB", {
         day: "numeric",
         month: "long",
         year: "numeric"
      });
   }
const currentUser =
JSON.parse(
localStorage.getItem("currentUser") || "null"
    );

  if (!currentUser) {
    return;
  }

const title =
document.getElementById("dashboardTitle");

const name =
document.getElementById("dashboardUserName");

const role =
document.getElementById("dashboardUserRole");

  if (title) {
title.textContent =
currentUser.role + " Dashboard";
  }

  if (name) {
name.textContent =
currentUser.fullName;
  }

  if (role) {
role.textContent =
currentUser.role;
  }
}
function logoutAFUser() {
  // Remove only the active login session
localStorage.removeItem("currentUser");

  // Hide the main application
const dashboard =
document.getElementById("mainApplication");

  if (dashboard) {
dashboard.style.display = "none";
  }

  // Clear dashboard user details
const userName =
document.getElementById("dashboardUserName");

const userRole =
document.getElementById("dashboardUserRole");

  if (userName) {
userName.textContent = "";
  }

  if (userRole) {
userRole.textContent = "";
  }

  // Remove an existing login screen if present
const existingLogin =
document.getElementById("afLoginScreen");

  if (existingLogin) {
existingLogin.remove();
  }

  // Return to the A&F login screen
showAFLoginScreen();
}

function hasPermission(permissionKey) {

const currentUser =
JSON.parse(
localStorage.getItem("currentUser") || "null"
    );

  if (!currentUser || !currentUser.role) {
    return false;
  }

const savedPermissions =
JSON.parse(
localStorage.getItem("afRolePermissions") || "{}"
    );

const rolePermissions =
savedPermissions[currentUser.role];

  if (!rolePermissions) {
    return false;
  }

  return rolePermissions[permissionKey] === true;
}
 function requirePermission(permissionKey, actionFunction) {
  if (!hasPermission(permissionKey)) {
const currentUser = JSON.parse(
localStorage.getItem("currentUser") || "null"
    );

const role =
currentUser&&currentUser.role
        ? currentUser.role
        : "This user";

    alert(
      "Access Denied\n\n" +
      role +
      " does not have permission to use this function.\n\n" +
      "Please contact the Director or HR if access is required."
    );

    return false;
  }

  if (typeof actionFunction === "function") {
actionFunction();
  }

  return true;
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

/* Apply Staff & HR visibility according to logged-in role */
if (typeof applyStaffHRRoleVisibility === "function") {
applyStaffHRRoleVisibility(modal);
}

modal.querySelector("#closeStaffHR").onclick = () => {
modal.remove();
  };

modal.querySelector("#teamSettingsBtn").onclick = () => {
modal.remove();
manageTeams();
  };

modal.querySelector("#poleWeightsBtn").onclick = () => {
modal.remove();

    if (typeof managePoleStandardWeights === "function") {
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
typeof getShiftSettings === "function"
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
  new Date(Number(year),
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
/* =========================================================
   MANAGER READ-ONLY STAFF & HR VIEWS
   Teams • Shifts • Attendance
   ========================================================= */

/*
 * Keep references to the existing working functions.
 * Director, HR and other authorised roles continue using
 * the original screens exactly as before.
 */
const afOriginalManageTeams = manageTeams;
const afOriginalManageShiftSettings = manageShiftSettings;
const afOriginalRecordAttendance = recordAttendance;


/* =========================================================
   GENERAL HELPERS
   ========================================================= */

function afManagerIsLoggedIn() {
const user =
typeof getAFCurrentUser === "function"
      ? getAFCurrentUser()
      : JSON.parse(
localStorage.getItem("currentUser") || "null"
        );

  return !!(
    user &&
user.role === "Manager"
  );
}


function afManagerEscape(value) {
  if (
typeof escapeSettingsText === "function"
  ) {
    return escapeSettingsText(
      String(value ?? "")
    );
  }

const div =
document.createElement("div");

div.textContent =
    String(value ?? "");

  return div.innerHTML;
}


function afManagerFormatMinutes(minutes) {
const total =
Math.max(
      Number(minutes || 0),
      0
    );

const hours =
Math.floor(total / 60);

const mins =
Math.round(total % 60);

  return (
    hours +
    "h " +
mins +
    "m"
  );
}


function afManagerFormatTime(time) {
  if (!time) {
    return "—";
  }

const parts =
    String(time).split(":");

  if (parts.length< 2) {
    return afManagerEscape(time);
  }

  let hour =
    Number(parts[0]);

const minute =
    parts[1];

const period =
    hour >= 12 ? "PM" : "AM";

  hour =
    hour % 12;

  if (hour === 0) {
    hour = 12;
  }

  return (
    hour +
    ":" +
    minute +
    " " +
    period
  );
}


function afManagerPercent(
  value,
  total
) {
const number =
    Number(value || 0);

const denominator =
    Number(total || 0);

  if (denominator <= 0) {
    return "0.0%";
  }

  return (
    (
      number /
      denominator *
      100
    ).toFixed(1) +
    "%"
  );
}


function afManagerDateString(date) {
const year =
date.getFullYear();

const month =
    String(
date.getMonth() + 1
    ).padStart(2, "0");

const day =
    String(
date.getDate()
    ).padStart(2, "0");

  return (
    year +
    "-" +
    month +
    "-" +
    day
  );
}


function afManagerReadableDate(
dateString
) {
  if (!dateString) {
    return "—";
  }

const date =
    new Date(
dateString +
      "T00:00:00"
    );

  if (
Number.isNaN(
date.getTime()
    )
  ) {
    return afManagerEscape(
dateString
    );
  }

  return date.toLocaleDateString(
    undefined,
    {
      day: "numeric",
      month: "short",
      year: "numeric"
    }
  );
}


function afManagerCreateModal(
  title,
  subtitle
) {
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
      width:950px;
      max-width:97%;
      max-height:94vh;
overflow:auto;
      border-radius:14px;
      padding:24px;
      box-shadow:0 10px 40px rgba(0,0,0,.3);
    ">

<div style="
display:flex;
justify-content:space-between;
align-items:flex-start;
        gap:15px;
        margin-bottom:18px;
      ">

<div>
<h2 style="
            margin:0;
            color:#0b5d3b;
          ">
            ${afManagerEscape(title)}
</h2>

<div style="
            margin-top:6px;
            color:#666;
            font-size:13px;
          ">
            ${afManagerEscape(subtitle)}
</div>

<div style="
display:inline-block;
            margin-top:8px;
            padding:5px 9px;
            border-radius:20px;
            background:#eef8f2;
            color:#0b5d3b;
            font-size:12px;
font-weight:bold;
          ">
            MANAGER • VIEW ONLY
</div>
</div>

<button
          class="afManagerClose"
          style="
            border:0;
            background:#eee;
            padding:9px 13px;
            border-radius:7px;
cursor:pointer;
font-weight:bold;
          "
>
✕ Close
</button>

</div>

<div class="afManagerContent"></div>

</div>
  `;

document.body.appendChild(
    modal
  );

  modal
    .querySelector(
      ".afManagerClose"
    )
    .onclick = () => {
modal.remove();
    };

  return modal;
}


/* =========================================================
   MANAGER — TEAMS & TEAM LEADERS
   VIEW ONLY
   ========================================================= */

function viewManagerTeamsReadOnly() {

const teams =
typeof getTeams === "function"
      ? getTeams()
      : [];

const employees =
typeof getEmployees === "function"
      ? getEmployees()
      : [];

const modal =
afManagerCreateModal(
      "Teams & Team Leaders",
      "View teams, Team Leaders, members and assigned shifts."
    );

const content =
modal.querySelector(
      ".afManagerContent"
    );

  if (
    !Array.isArray(teams) ||
teams.length === 0
  ) {

content.innerHTML = `
<div style="
        padding:18px;
        background:#f5f5f5;
        border-radius:9px;
        color:#666;
      ">
        No teams have been created yet.
</div>
    `;

    return;
  }


  function employeeName(
employeeId
  ) {

const employee =
employees.find(
        item =>
          String(
item.employeeId
          ) ===
          String(employeeId)
      );

    return employee
      ? employee.fullName
      : employeeId;
  }


content.innerHTML =
teams.map(team => {

const memberIds =
Array.isArray(
team.memberEmployeeIds
        )
          ? team.memberEmployeeIds
          : [];

const memberNames =
memberIds.length
          ? memberIds
              .map(employeeName)
              .filter(Boolean)
          : (
Array.isArray(
team.members
              )
                ? team.members
                : []
            );

const leaderName =
team.leader ||
employeeName(
team.leaderEmployeeId
        ) ||
        "Not assigned";

      return `
<div style="
          border:1px solid #dfe5e1;
          border-radius:11px;
          padding:16px;
          margin-bottom:12px;
          background:#fff;
        ">

<div style="
display:flex;
justify-content:space-between;
            gap:15px;
align-items:flex-start;
          ">

<div style="flex:1;">

<strong style="
                color:#0b5d3b;
                font-size:18px;
              ">
                ${afManagerEscape(
team.name ||
                  "Unnamed Team"
                )}
</strong>

<div style="
                margin-top:10px;
                line-height:1.8;
                font-size:14px;
              ">

<div>
<strong>
                    Team Leader:
</strong>
                  ${afManagerEscape(
leaderName
                  )}
</div>

<div>
<strong>
                    Assigned Shift:
</strong>
                  ${afManagerEscape(
team.shiftName ||
                    "Not assigned"
                  )}
</div>

<div>
<strong>
                    Members:
</strong>
                  ${
memberNames.length
                      ? memberNames
                          .map(
                            name =>
afManagerEscape(
                                name
                              )
                          )
                          .join(", ")
                      : "No members assigned"
                  }
</div>

<div>
<strong>
                    Number of Members:
</strong>
                  ${memberNames.length}
</div>

</div>
</div>

<span style="
              padding:6px 10px;
              border-radius:20px;
              background:#eef8f2;
              color:#0b5d3b;
              font-size:12px;
font-weight:bold;
            ">
              ${afManagerEscape(
                String(
team.status ||
                  "active"
                ).toUpperCase()
              )}
</span>

</div>

</div>
      `;

    }).join("");
}


/* =========================================================
   MANAGER — SHIFT & WORKING HOURS
   VIEW ONLY
   ========================================================= */

function viewManagerShiftsReadOnly() {

const shifts =
typeof getShiftSettings ===
      "function"
      ? getShiftSettings()
      : [];

const modal =
afManagerCreateModal(
      "Shift & Working Hours",
      "View official shifts and working hours. Manager cannot change shift settings."
    );

const content =
modal.querySelector(
      ".afManagerContent"
    );

  if (
    !Array.isArray(shifts) ||
shifts.length === 0
  ) {

content.innerHTML = `
<div style="
        padding:18px;
        background:#f5f5f5;
        border-radius:9px;
        color:#666;
      ">
        No working shifts have been configured.
</div>
    `;

    return;
  }


content.innerHTML =
shifts.map(shift => `
<div style="
        border:1px solid #dfe5e1;
        border-radius:11px;
        padding:16px;
        margin-bottom:12px;
      ">

<div style="
display:flex;
justify-content:space-between;
          gap:15px;
align-items:flex-start;
        ">

<div>

<strong style="
              color:#0b5d3b;
              font-size:18px;
            ">
              ${afManagerEscape(
shift.name ||
                "Unnamed Shift"
              )}
</strong>

<div style="
              margin-top:10px;
              line-height:1.9;
              font-size:14px;
            ">

<div>
<strong>
                  Start Time:
</strong>
                ${afManagerFormatTime(
shift.startTime
                )}
</div>

<div>
<strong>
                  End Time:
</strong>
                ${afManagerFormatTime(
shift.endTime
                )}
</div>

<div>
<strong>
                  Break:
</strong>
                ${Number(
shift.breakMinutes || 0
                )}
                minutes
</div>

<div>
<strong>
                  Normal Working Hours:
</strong>
                ${Number(
shift.normalHours || 0
                ).toFixed(2)}
                hours
</div>

<div>
<strong>
                  Grace Period:
</strong>
                ${Number(
shift.graceMinutes || 0
                )}
                minutes
</div>

</div>

</div>

<span style="
            padding:6px 10px;
            border-radius:20px;
            background:#eef8f2;
            color:#0b5d3b;
            font-size:12px;
font-weight:bold;
          ">
            ${afManagerEscape(
              String(
shift.status ||
                "active"
              ).toUpperCase()
            )}
</span>

</div>

</div>
    `).join("");
}


/* =========================================================
   MANAGER — ATTENDANCE
   DAILY • WEEKLY • MONTHLY
   VIEW ONLY + PERCENTAGES
   ========================================================= */

function viewManagerAttendanceReadOnly() {

const modal =
afManagerCreateModal(
      "Employee Attendance",
      "Daily, weekly and monthly attendance with figures and percentages."
    );

const content =
modal.querySelector(
      ".afManagerContent"
    );

const today =
afManagerDateString(
      new Date()
    );


content.innerHTML = `

<div style="
display:flex;
flex-wrap:wrap;
      gap:10px;
      margin-bottom:16px;
    ">

<button
        data-attendance-view="daily"
        class="afAttendancePeriodBtn"
        style="
          padding:10px 18px;
          border:0;
          border-radius:8px;
cursor:pointer;
font-weight:bold;
        "
>
        Daily
</button>

<button
        data-attendance-view="weekly"
        class="afAttendancePeriodBtn"
        style="
          padding:10px 18px;
          border:0;
          border-radius:8px;
cursor:pointer;
font-weight:bold;
        "
>
        Weekly
</button>

<button
        data-attendance-view="monthly"
        class="afAttendancePeriodBtn"
        style="
          padding:10px 18px;
          border:0;
          border-radius:8px;
cursor:pointer;
font-weight:bold;
        "
>
        Monthly
</button>

</div>


<div style="
      background:#f7f9f8;
      border-radius:10px;
      padding:14px;
      margin-bottom:16px;
    ">

<label style="
font-weight:bold;
      ">
        Select Date
</label>

<input
        id="afManagerAttendanceDate"
        type="date"
        value="${today}"
        style="
          width:100%;
box-sizing:border-box;
          margin-top:7px;
          padding:10px;
          border:1px solid #ccc;
          border-radius:7px;
        "
>

<div
        id="afAttendancePeriodDescription"
        style="
          margin-top:8px;
          color:#666;
          font-size:13px;
        "
></div>

</div>


<div
      id="afAttendanceSummaryCards"
      style="
display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(145px,1fr));
        gap:10px;
        margin-bottom:18px;
      "
></div>


<div style="
      overflow-x:auto;
      border:1px solid #e1e5e2;
      border-radius:10px;
    ">

<table style="
        width:100%;
border-collapse:collapse;
        min-width:900px;
        font-size:13px;
      ">

<thead>
<tr style="
            background:#0b5d3b;
color:white;
          ">
<th style="padding:10px;text-align:left;">
              Date
</th>
<th style="padding:10px;text-align:left;">
              Employee
</th>
<th style="padding:10px;text-align:left;">
              Team
</th>
<th style="padding:10px;text-align:left;">
              Shift
</th>
<th style="padding:10px;text-align:left;">
              Status
</th>
<th style="padding:10px;text-align:left;">
              Time In
</th>
<th style="padding:10px;text-align:left;">
              Time Out
</th>
<th style="padding:10px;text-align:left;">
              Worked
</th>
<th style="padding:10px;text-align:left;">
              Late
</th>
<th style="padding:10px;text-align:left;">
              Shortfall
</th>
<th style="padding:10px;text-align:left;">
              Overtime
</th>
</tr>
</thead>

<tbody
          id="afManagerAttendanceRows"
></tbody>

</table>

</div>

  `;


  let currentView =
    "daily";


const dateInput =
content.querySelector(
      "#afManagerAttendanceDate"
    );

const description =
content.querySelector(
      "#afAttendancePeriodDescription"
    );

const cards =
content.querySelector(
      "#afAttendanceSummaryCards"
    );

const rows =
content.querySelector(
      "#afManagerAttendanceRows"
    );


  function getSelectedRange() {

const selected =
      new Date(
dateInput.value +
        "T00:00:00"
      );

    let start =
      new Date(selected);

    let end =
      new Date(selected);


    if (
currentView === "weekly"
    ) {

const day =
start.getDay();

const difference =
        day === 0
          ? -6
          : 1 - day;

start.setDate(
start.getDate() +
        difference
      );

      end =
        new Date(start);

end.setDate(
start.getDate() + 6
      );
    }


    if (
currentView === "monthly"
    ) {

      start =
        new Date(
selected.getFullYear(),
selected.getMonth(),
          1
        );

      end =
        new Date(
selected.getFullYear(),
selected.getMonth() + 1,
          0
        );
    }


    return {
      start:
afManagerDateString(
          start
        ),

      end:
afManagerDateString(
          end
        )
    };
  }


  function attendanceCategory(
    record
  ) {

const status =
      String(
record.status || ""
      ).toLowerCase();

const reason =
      String(
record.absenceReason || ""
      ).toLowerCase();


    if (
      status === "present"
    ) {
      return "present";
    }


    if (
reason.includes("leave")
    ) {
      return "leave";
    }


    if (
reason.includes("permission")
    ) {
      return "permission";
    }


    return "absent";
  }


  function summaryCard(
    label,
    number,
    percentage
  ) {

    return `
<div style="
        border:1px solid #dfe5e1;
        border-radius:10px;
        padding:13px;
background:white;
      ">

<div style="
          color:#666;
          font-size:12px;
        ">
          ${afManagerEscape(label)}
</div>

<div style="
          margin-top:5px;
          font-size:21px;
font-weight:bold;
          color:#0b5d3b;
        ">
          ${number}
</div>

<div style="
          margin-top:3px;
          font-size:13px;
font-weight:bold;
        ">
          ${percentage}
</div>

</div>
    `;
  }


  function renderAttendance() {

const range =
getSelectedRange();

const allRecords =
typeof getAttendanceRecords ===
        "function"
        ? getAttendanceRecords()
        : [];


const records =
allRecords
        .filter(record =>
record.date>=
range.start&&
record.date<=
range.end
        )
        .sort((a, b) =>
          String(b.date)
            .localeCompare(
              String(a.date)
            )
        );


    if (
currentView === "daily"
    ) {
description.textContent =
        "Daily attendance: " +
afManagerReadableDate(
range.start
        );
    }


    if (
currentView === "weekly"
    ) {
description.textContent =
        "Weekly attendance: " +
afManagerReadableDate(
range.start
        ) +
        " to " +
afManagerReadableDate(
range.end
        );
    }


    if (
currentView === "monthly"
    ) {
const selected =
        new Date(
dateInput.value +
          "T00:00:00"
        );

description.textContent =
        "Monthly attendance: " +
selected.toLocaleDateString(
          undefined,
          {
            month: "long",
            year: "numeric"
          }
        );
    }


const total =
records.length;

const present =
records.filter(
        record =>
attendanceCategory(
            record
          ) === "present"
      ).length;

const absent =
records.filter(
        record =>
attendanceCategory(
            record
          ) === "absent"
      ).length;

const leave =
records.filter(
        record =>
attendanceCategory(
            record
          ) === "leave"
      ).length;

const permission =
records.filter(
        record =>
attendanceCategory(
            record
          ) === "permission"
      ).length;

const late =
records.filter(
        record =>
attendanceCategory(
            record
          ) === "present" &&
          Number(
record.lateMinutes || 0
          ) > 0
      ).length;


const totalWorkedMinutes =
records.reduce(
        (sum, record) =>
          sum +
          Number(
record.workedMinutes || 0
          ),
        0
      );

const totalShortfall =
records.reduce(
        (sum, record) =>
          sum +
          Number(
record.shortfallMinutes || 0
          ),
        0
      );

const totalOvertime =
records.reduce(
        (sum, record) =>
          sum +
          Number(
record.overtimeMinutes || 0
          ),
        0
      );


cards.innerHTML =

summaryCard(
        "Recorded Attendance",
        total,
        total
          ? "100%"
          : "0%"
      ) +

summaryCard(
        "Present",
        present,
afManagerPercent(
          present,
          total
        )
      ) +

summaryCard(
        "Absent",
        absent,
afManagerPercent(
          absent,
          total
        )
      ) +

summaryCard(
        "Leave",
        leave,
afManagerPercent(
          leave,
          total
        )
      ) +

summaryCard(
        "Permission",
        permission,
afManagerPercent(
          permission,
          total
        )
      ) +

summaryCard(
        "Late",
        late,
afManagerPercent(
          late,
          present
        )
      ) +

summaryCard(
        "Hours Worked",
        (
totalWorkedMinutes /
          60
        ).toFixed(2),
        "hrs"
      ) +

summaryCard(
        "Shortfall",
        (
totalShortfall /
          60
        ).toFixed(2),
        "hrs"
      ) +

summaryCard(
        "Overtime",
        (
totalOvertime /
          60
        ).toFixed(2),
        "hrs"
      );


    if (!records.length) {

rows.innerHTML = `
<tr>
<td
colspan="11"
            style="
              padding:20px;
text-align:center;
              color:#666;
            "
>
            No attendance records found
            for this period.
</td>
</tr>
      `;

      return;
    }


rows.innerHTML =
records.map(record => {

const category =
attendanceCategory(
            record
          );

        let statusLabel =
record.status ||
          "—";

        if (
          category === "leave"
        ) {
statusLabel =
            "Leave";
        }

        if (
          category ===
          "permission"
        ) {
statusLabel =
            "Permission";
        }


        return `
<tr style="
            border-bottom:
              1px solid #eee;
          ">

<td style="padding:9px;">
              ${afManagerReadableDate(
record.date
              )}
</td>

<td style="padding:9px;">
<strong>
                ${afManagerEscape(
record.employeeName ||
record.employeeId ||
                  "—"
                )}
</strong>
</td>

<td style="padding:9px;">
              ${afManagerEscape(
record.teamName ||
                "—"
              )}
</td>

<td style="padding:9px;">
              ${afManagerEscape(
record.shiftName ||
                "—"
              )}
</td>

<td style="padding:9px;">
              ${afManagerEscape(
statusLabel
              )}
</td>

<td style="padding:9px;">
              ${afManagerFormatTime(
record.timeIn
              )}
</td>

<td style="padding:9px;">
              ${afManagerFormatTime(
record.timeOut
              )}
</td>

<td style="padding:9px;">
              ${afManagerFormatMinutes(
record.workedMinutes
              )}
</td>

<td style="padding:9px;">
              ${afManagerFormatMinutes(
record.lateMinutes
              )}
</td>

<td style="padding:9px;">
              ${afManagerFormatMinutes(
record.shortfallMinutes
              )}
</td>

<td style="padding:9px;">
              ${afManagerFormatMinutes(
record.overtimeMinutes
              )}
</td>

</tr>
        `;

      }).join("");
  }


  function updatePeriodButtons() {

    content
      .querySelectorAll(
        ".afAttendancePeriodBtn"
      )
      .forEach(button => {

const selected =
button.dataset
            .attendanceView ===
currentView;

button.style.background =
          selected
            ? "#0b5d3b"
            : "#eeeeee";

button.style.color =
          selected
            ? "white"
            : "#333";

      });
  }


  content
    .querySelectorAll(
      ".afAttendancePeriodBtn"
    )
    .forEach(button => {

button.onclick = () => {

currentView =
button.dataset
            .attendanceView;

updatePeriodButtons();
renderAttendance();
      };

    });


dateInput.onchange = () => {
renderAttendance();
  };


updatePeriodButtons();
renderAttendance();
}


/* =========================================================
   ROUTE EXISTING STAFF & HR FUNCTIONS BY ROLE

   Manager:
   READ ONLY.

   Other authorised roles:
   Existing working functions remain unchanged.
   ========================================================= */

manageTeams = function () {

  if (
afManagerIsLoggedIn()
  ) {
viewManagerTeamsReadOnly();
    return;
  }

  return afOriginalManageTeams();
};


manageShiftSettings = function () {

  if (
afManagerIsLoggedIn()
  ) {
viewManagerShiftsReadOnly();
    return;
  }

  return afOriginalManageShiftSettings();
};


recordAttendance = function () {

  if (
afManagerIsLoggedIn()
  ) {
viewManagerAttendanceReadOnly();
    return;
  }

  return afOriginalRecordAttendance();
};


/* =========================================================
   END MANAGER READ-ONLY STAFF & HR VIEWS
   ========================================================= */

 /* =========================================================
   EMPLOYEE ALLOWANCE + ADVANCES + DEDUCTIONS + PAYROLL
   ========================================================= */

function getPayrollRecords() {
  return JSON.parse(
localStorage.getItem("payrollRecords") || "[]"
  );
}

function savePayrollRecords(records) {
localStorage.setItem(
    "payrollRecords",
JSON.stringify(records)
  );
}

function getEmployeeAdvances() {
  return JSON.parse(
localStorage.getItem("employeeAdvances") || "[]"
  );
}

function saveEmployeeAdvances(records) {
localStorage.setItem(
    "employeeAdvances",
JSON.stringify(records)
  );
}

function getAdvanceRecoveries() {
  return JSON.parse(
localStorage.getItem("advanceRecoveries") || "[]"
  );
}

function saveAdvanceRecoveries(records) {
localStorage.setItem(
    "advanceRecoveries",
JSON.stringify(records)
  );
}

function getEmployeeDeductions() {
  return JSON.parse(
localStorage.getItem("employeeDeductions") || "[]"
  );
}

function saveEmployeeDeductions(records) {
localStorage.setItem(
    "employeeDeductions",
JSON.stringify(records)
  );
}

function payrollMonthName(year, month) {
  return new Date(
    Number(year),
    Number(month),
    1
  ).toLocaleString("en-US", {
    month: "long"
  }) + " " + year;
}

function formatPayrollMoney(amount) {
  return "UGX " +
    Number(amount || 0).toLocaleString();
}

function getPayrollPeriodValues() {
const now = new Date();

  return {
    year: now.getFullYear(),
    month: now.getMonth()
  };
}

function getEmployeePayrollAdjustments(
employeeId,
  year,
  month
) {
const deductions =
getEmployeeDeductions().filter(
      item =>
item.employeeId === employeeId&&
        Number(item.year) === Number(year) &&
        Number(item.month) === Number(month) &&
        String(item.status || "APPROVED")
          .toUpperCase() === "APPROVED"
    );

const deductionTotal =
deductions.reduce(
      (total, item) =>
        total + Number(item.amount || 0),
      0
    );

const recoveries =
getAdvanceRecoveries().filter(
      item =>
item.employeeId === employeeId&&
        Number(item.year) === Number(year) &&
        Number(item.month) === Number(month)
    );

const recoveryTotal =
recoveries.reduce(
      (total, item) =>
        total + Number(item.amount || 0),
      0
    );

  return {
    deductions,
    recoveries,
deductionTotal,
recoveryTotal
  };
}

function getEmployeeAdvanceOutstanding(
advanceId
) {
const advances = getEmployeeAdvances();

const advance = advances.find(
    item =>item.id === advanceId
  );

  if (!advance) return 0;

const recoveries =
getAdvanceRecoveries().filter(
      item =>item.advanceId === advanceId
    );

const recovered =
recoveries.reduce(
      (total, item) =>
        total + Number(item.amount || 0),
      0
    );

  return Math.max(
    Number(advance.amount || 0) -
    recovered,
    0
  );
}

function calculateEmployeePayroll(
employeeId,
  year,
  month
) {
const employees = getEmployees();

const employee = employees.find(
    item =>item.employeeId === employeeId
  );

  if (!employee) {
    return null;
  }

const attendance =
getEmployeeMonthlyAttendanceSummary(
employeeId,
      year,
      month
    );

const monthlyAllowance =
    Number(
employee.monthlyAllowance || 0
    );

const daysInMonth =
    new Date(
      Number(year),
      Number(month) + 1,
      0
    ).getDate();

const absentDays =
    Number(
      attendance?.absentDays || 0
    );

const dailyAllowance =
daysInMonth> 0
      ? monthlyAllowance / daysInMonth
      : 0;

const absenceDeduction =
dailyAllowance * absentDays;

const earnedAllowance =
Math.max(
monthlyAllowance -
absenceDeduction,
      0
    );

const adjustments =
getEmployeePayrollAdjustments(
employeeId,
      year,
      month
    );

const approvedDeductions =
adjustments.deductionTotal;

const advanceRecovery =
adjustments.recoveryTotal;

const netPayable =
Math.max(
earnedAllowance -
approvedDeductions -
advanceRecovery,
      0
    );

const netOvertimeMinutes =
    Number(
      attendance?.netOvertimeMinutes || 0
    );

const netOvertimeHours =
netOvertimeMinutes / 60;

const payrollRecords =
getPayrollRecords();

const existing =
payrollRecords.find(
      item =>
item.employeeId === employeeId&&
        Number(item.year) === Number(year) &&
        Number(item.month) === Number(month)
    );

const amountPaid =
    Number(existing?.amountPaid || 0);

const balance =
Math.max(
netPayable - amountPaid,
      0
    );

  let status = "UNPAID";

  if (balance <= 0 &&netPayable> 0) {
    status = "PAID";
  } else if (amountPaid> 0) {
    status = "PARTIALLY PAID";
  }

  return {
employeeId,
employeeName:
employee.fullName || "",
    employee,
    year: Number(year),
    month: Number(month),
monthName:
payrollMonthName(year, month),
monthlyAllowance,
daysInMonth,
dailyAllowance,
absentDays,
absenceDeduction,
earnedAllowance,
approvedDeductions,
advanceRecovery,
netPayable,
amountPaid,
    balance,
    status,
totalOvertimeMinutes:
      Number(
        attendance?.totalOvertimeMinutes || 0
      ),
totalShortfallMinutes:
      Number(
        attendance?.totalShortfallMinutes || 0
      ),
netOvertimeMinutes,
netOvertimeHours,
createdAt:
      existing?.createdAt ||
      new Date().toISOString()
  };
}

function getPreviousUnpaidPayrollBalance(
employeeId,
  year,
  month
) {
const records =
getPayrollRecords();

  return records
    .filter(item => {
const itemPeriod =
        Number(item.year) * 12 +
        Number(item.month);

const currentPeriod =
        Number(year) * 12 +
        Number(month);

      return (
item.employeeId === employeeId&&
itemPeriod<currentPeriod&&
        Number(item.balance || 0) > 0
      );
    })
    .reduce(
      (total, item) =>
        total + Number(item.balance || 0),
      0
    );
}

function saveCalculatedPayroll(
  payroll
) {
const records =
getPayrollRecords();

const index =
records.findIndex(
      item =>
item.employeeId ===
payroll.employeeId&&
        Number(item.year) ===
          Number(payroll.year) &&
        Number(item.month) ===
          Number(payroll.month)
    );

const record = {
    id:
      index >= 0
        ? records[index].id
        : Date.now(),
employeeId:
payroll.employeeId,
employeeName:
payroll.employeeName,
    year:
payroll.year,
    month:
payroll.month,
monthName:
payroll.monthName,
monthlyAllowance:
payroll.monthlyAllowance,
daysInMonth:
payroll.daysInMonth,
absentDays:
payroll.absentDays,
absenceDeduction:
payroll.absenceDeduction,
earnedAllowance:
payroll.earnedAllowance,
approvedDeductions:
payroll.approvedDeductions,
advanceRecovery:
payroll.advanceRecovery,
netPayable:
payroll.netPayable,
amountPaid:
payroll.amountPaid,
    balance:
payroll.balance,
    status:
payroll.status,
totalOvertimeMinutes:
payroll.totalOvertimeMinutes,
totalShortfallMinutes:
payroll.totalShortfallMinutes,
netOvertimeMinutes:
payroll.netOvertimeMinutes,
netOvertimeHours:
payroll.netOvertimeHours,
createdAt:
payroll.createdAt,
updatedAt:
      new Date().toISOString()
  };

  if (index >= 0) {
    records[index] = record;
  } else {
records.push(record);
  }

savePayrollRecords(records);

  return record;
}


/* =========================================================
   EMPLOYEE ALLOWANCE
   ========================================================= */

function manageEmployeeAllowance() {
const employees = getEmployees();

  if (!employees.length) {
    alert(
      "No employees have been registered yet."
    );
    return;
  }

const period =
getPayrollPeriodValues();

const modal =
document.createElement("div");

modal.style.cssText = `
position:fixed;
    inset:0;
background:rgba(0,0,0,.65);
    z-index:9999;
display:flex;
align-items:center;
justify-content:center;
    padding:20px;
  `;

modal.innerHTML = `
<div style="
background:white;
width:min(950px,100%);
      max-height:92vh;
overflow:auto;
      border-radius:14px;
      padding:22px;
      box-shadow:0 20px 50px rgba(0,0,0,.25);
    ">
<h2 style="margin-top:0;">
        Employee Allowance & Monthly Earnings
</h2>

<div style="
display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(180px,1fr));
        gap:10px;
        margin-bottom:15px;
      ">
<div>
<label>Employee</label>
<select id="allowanceEmployee"
            style="width:100%;padding:10px;">
            ${employees.map(employee => `
<option value="${employee.employeeId}">
                ${employee.fullName}
                (${employee.employeeId})
</option>
            `).join("")}
</select>
</div>

<div>
<label>Year</label>
<input id="allowanceYear"
            type="number"
            value="${period.year}"
            style="width:100%;padding:10px;">
</div>

<div>
<label>Month</label>
<select id="allowanceMonth"
            style="width:100%;padding:10px;">
            ${Array.from(
              {length:12},
              (_,i) => `
<option value="${i}"
                  ${i === period.month ? "selected" : ""}>
                  ${new Date(
                    2020,i,1
                  ).toLocaleString(
                    "en-US",
                    {month:"long"}
                  )}
</option>
              `
            ).join("")}
</select>
</div>
</div>

<button id="calculateAllowance"
        style="
          background:#198754;
color:white;
          border:0;
          padding:11px 18px;
          border-radius:7px;
font-weight:bold;
cursor:pointer;
        ">
        Calculate Allowance
</button>

<div id="allowanceResult"
        style="margin-top:18px;"></div>

<div style="text-align:right;margin-top:18px;">
<button id="closeAllowance"
          style="
            padding:10px 18px;
            border:0;
            border-radius:7px;
cursor:pointer;
          ">
          Close
</button>
</div>
</div>
  `;

document.body.appendChild(modal);

modal.querySelector(
    "#calculateAllowance"
  ).onclick = () => {
const employeeId =
modal.querySelector(
        "#allowanceEmployee"
      ).value;

const year =
      Number(
modal.querySelector(
          "#allowanceYear"
        ).value
      );

const month =
      Number(
modal.querySelector(
          "#allowanceMonth"
        ).value
      );

const payroll =
calculateEmployeePayroll(
employeeId,
        year,
        month
      );

    if (!payroll) {
      alert(
        "Unable to calculate allowance."
      );
      return;
    }

const previousBalance =
getPreviousUnpaidPayrollBalance(
employeeId,
        year,
        month
      );

modal.querySelector(
      "#allowanceResult"
    ).innerHTML = `
<div style="
display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(200px,1fr));
        gap:10px;
      ">
<div style="padding:15px;background:#f5f5f5;border-radius:8px;">
<b>Monthly Allowance</b>
<div>${formatPayrollMoney(
payroll.monthlyAllowance
          )}</div>
</div>

<div style="padding:15px;background:#f5f5f5;border-radius:8px;">
<b>Absent Days</b>
<div>${payroll.absentDays}</div>
</div>

<div style="padding:15px;background:#f5f5f5;border-radius:8px;">
<b>Absence Deduction</b>
<div>${formatPayrollMoney(
payroll.absenceDeduction
          )}</div>
</div>

<div style="padding:15px;background:#f5f5f5;border-radius:8px;">
<b>Earned Allowance</b>
<div>${formatPayrollMoney(
payroll.earnedAllowance
          )}</div>
</div>

<div style="padding:15px;background:#f5f5f5;border-radius:8px;">
<b>Approved Deductions</b>
<div>${formatPayrollMoney(
payroll.approvedDeductions
          )}</div>
</div>

<div style="padding:15px;background:#f5f5f5;border-radius:8px;">
<b>Advance Recovery</b>
<div>${formatPayrollMoney(
payroll.advanceRecovery
          )}</div>
</div>

<div style="padding:15px;background:#e8f5e9;border-radius:8px;">
<b>Net Payable</b>
<div style="font-size:20px;font-weight:bold;">
            ${formatPayrollMoney(
payroll.netPayable
            )}
</div>
</div>

<div style="padding:15px;background:#fff3cd;border-radius:8px;">
<b>Previous Unpaid Balance</b>
<div>${formatPayrollMoney(
previousBalance
          )}</div>
</div>

<div style="padding:15px;background:#eef4ff;border-radius:8px;">
<b>Net Overtime</b>
<div>
            ${payroll.netOvertimeHours.toFixed(2)}
            hours
</div>
</div>
</div>

<p style="
        margin-top:15px;
        padding:12px;
        background:#f8f9fa;
        border-radius:8px;
      ">
<b>Total Amount Due Including Previous
        Unpaid Balance:</b>
        ${formatPayrollMoney(
previousBalance +
payroll.netPayable
        )}
</p>
    `;
  };

modal.querySelector(
    "#closeAllowance"
  ).onclick = () =>modal.remove();
}


/* =========================================================
   ADVANCES & DEDUCTIONS
   ========================================================= */

function manageEmployeeAdvancesAndDeductions() {
const employees = getEmployees();

const modal =
document.createElement("div");

modal.style.cssText = `
position:fixed;
    inset:0;
background:rgba(0,0,0,.65);
    z-index:9999;
display:flex;
align-items:center;
justify-content:center;
    padding:20px;
  `;

modal.innerHTML = `
<div style="
background:white;
width:min(1100px,100%);
      max-height:94vh;
overflow:auto;
      border-radius:14px;
      padding:22px;
    ">
<h2 style="margin-top:0;">
        Employee Advances & Deductions
</h2>

<div style="
display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(180px,1fr));
        gap:10px;
      ">
<div>
<label>Employee</label>
<select id="payrollEmployee"
            style="width:100%;padding:9px;">
            ${employees.map(employee => `
<option value="${employee.employeeId}">
                ${employee.fullName}
                (${employee.employeeId})
</option>
            `).join("")}
</select>
</div>

<div>
<label>Type</label>
<select id="adjustmentType"
            style="width:100%;padding:9px;">
<option value="advance">
              Advance
</option>
<option value="deduction">
              Deduction
</option>
</select>
</div>

<div>
<label>Date</label>
<input id="adjustmentDate"
            type="date"
            value="${new Date()
              .toISOString()
              .slice(0,10)}"
            style="width:100%;padding:9px;">
</div>

<div>
<label>Amount (UGX)</label>
<input id="adjustmentAmount"
            type="number"
            min="0"
            style="width:100%;padding:9px;">
</div>

<div>
<label>Payroll Year</label>
<input id="adjustmentYear"
            type="number"
            value="${new Date().getFullYear()}"
            style="width:100%;padding:9px;">
</div>

<div>
<label>Payroll Month</label>
<select id="adjustmentMonth"
            style="width:100%;padding:9px;">
            ${Array.from(
              {length:12},
              (_,i) => `
<option value="${i}">
                  ${new Date(
                    2020,i,1
                  ).toLocaleString(
                    "en-US",
                    {month:"long"}
                  )}
</option>
              `
            ).join("")}
</select>
</div>

<div>
<label>Reason</label>
<input id="adjustmentReason"
            type="text"
            style="width:100%;padding:9px;">
</div>

<div>
<label>Approved By</label>
<input id="adjustmentApprovedBy"
            type="text"
            style="width:100%;padding:9px;">
</div>

<div style="grid-column:1/-1;">
<label>Remarks</label>
<textarea id="adjustmentRemarks"
            style="width:100%;padding:9px;"></textarea>
</div>
</div>

<button id="saveAdjustment"
        style="
          margin-top:14px;
          background:#198754;
color:white;
          border:0;
          padding:11px 18px;
          border-radius:7px;
font-weight:bold;
        ">
        Save Transaction
</button>

<h3 style="margin-top:25px;">
        Current Advances
</h3>

<div style="overflow:auto;">
<table style="
          width:100%;
border-collapse:collapse;
        ">
<thead>
<tr>
<th style="padding:8px;text-align:left;">Employee</th>
<th style="padding:8px;">Date</th>
<th style="padding:8px;">Amount</th>
<th style="padding:8px;">Recovered This Month</th>
<th style="padding:8px;">Outstanding</th>
<th style="padding:8px;">Reason</th>
</tr>
</thead>
<tbody id="advanceTableBody"></tbody>
</table>
</div>

<h3 style="margin-top:25px;">
        Deductions
</h3>

<div style="overflow:auto;">
<table style="
          width:100%;
border-collapse:collapse;
        ">
<thead>
<tr>
<th style="padding:8px;">Employee</th>
<th style="padding:8px;">Month</th>
<th style="padding:8px;">Amount</th>
<th style="padding:8px;">Reason</th>
<th style="padding:8px;">Approved By</th>
</tr>
</thead>
<tbody id="deductionTableBody"></tbody>
</table>
</div>

<div style="text-align:right;margin-top:20px;">
<button id="closeAdjustments"
          style="
            padding:10px 18px;
            border:0;
            border-radius:7px;
          ">
          Close
</button>
</div>
</div>
  `;

document.body.appendChild(modal);

  function refreshTables() {
const employeeMap = {};

employees.forEach(employee => {
employeeMap[employee.employeeId] =
employee.fullName;
    });

const advances =
getEmployeeAdvances();

const recoveries =
getAdvanceRecoveries();

const year =
      Number(
modal.querySelector(
          "#adjustmentYear"
        ).value
      );

const month =
      Number(
modal.querySelector(
          "#adjustmentMonth"
        ).value
      );

modal.querySelector(
      "#advanceTableBody"
    ).innerHTML =
advances.map(advance => {
const recoveredThisMonth =
          recoveries
            .filter(
              item =>
item.advanceId ===
advance.id&&
                Number(item.year) === year &&
                Number(item.month) === month
            )
            .reduce(
              (total,item) =>
                total +
                Number(item.amount || 0),
              0
            );

const outstanding =
getEmployeeAdvanceOutstanding(
advance.id
          );

        return `
<tr style="border-top:1px solid #ddd;">
<td style="padding:8px;">
              ${employeeMap[
advance.employeeId
              ] || advance.employeeName}
</td>
<td style="padding:8px;">
              ${advance.date || ""}
</td>
<td style="padding:8px;">
              ${formatPayrollMoney(
advance.amount
              )}
</td>
<td style="padding:8px;">
              ${formatPayrollMoney(
recoveredThisMonth
              )}
</td>
<td style="
              padding:8px;
font-weight:bold;
            ">
              ${formatPayrollMoney(
                outstanding
              )}
</td>
<td style="padding:8px;">
              ${advance.reason || ""}
</td>
</tr>
        `;
      }).join("");

const deductions =
getEmployeeDeductions()
        .filter(
          item =>
            Number(item.year) === year &&
            Number(item.month) === month
        );

modal.querySelector(
      "#deductionTableBody"
    ).innerHTML =
deductions.map(item => `
<tr style="border-top:1px solid #ddd;">
<td style="padding:8px;">
            ${employeeMap[
item.employeeId
            ] || item.employeeName}
</td>
<td style="padding:8px;">
            ${payrollMonthName(
              year,
              month
            )}
</td>
<td style="padding:8px;">
            ${formatPayrollMoney(
item.amount
            )}
</td>
<td style="padding:8px;">
            ${item.reason || ""}
</td>
<td style="padding:8px;">
            ${item.approvedBy || ""}
</td>
</tr>
      `).join("");
  }

modal.querySelector(
    "#adjustmentMonth"
  ).value =
    new Date().getMonth();

modal.querySelector(
    "#saveAdjustment"
  ).onclick = () => {
const employeeId =
modal.querySelector(
        "#payrollEmployee"
      ).value;

const employee =
employees.find(
        item =>
item.employeeId ===
employeeId
      );

const type =
modal.querySelector(
        "#adjustmentType"
      ).value;

const amount =
      Number(
modal.querySelector(
          "#adjustmentAmount"
        ).value
      );

    if (!amount || amount <= 0) {
      alert(
        "Please enter a valid amount."
      );
      return;
    }

const date =
modal.querySelector(
        "#adjustmentDate"
      ).value;

const year =
      Number(
modal.querySelector(
          "#adjustmentYear"
        ).value
      );

const month =
      Number(
modal.querySelector(
          "#adjustmentMonth"
        ).value
      );

const reason =
modal.querySelector(
        "#adjustmentReason"
      ).value.trim();

const approvedBy =
modal.querySelector(
        "#adjustmentApprovedBy"
      ).value.trim();

const remarks =
modal.querySelector(
        "#adjustmentRemarks"
      ).value.trim();

    if (type === "advance") {
const advances =
getEmployeeAdvances();

const advance = {
        id: Date.now(),
employeeId,
employeeName:
          employee?.fullName || "",
        date,
        amount,
        reason,
approvedBy,
        remarks,
createdAt:
          new Date().toISOString()
      };

advances.push(advance);
saveEmployeeAdvances(advances);

const initialRecovery =
        prompt(
          "Enter advance recovery for this month, or enter 0:",
          "0"
        );

const recoveryAmount =
        Number(initialRecovery || 0);

      if (
recoveryAmount> 0
      ) {
const recoveries =
getAdvanceRecoveries();

recoveries.push({
          id: Date.now() + 1,
advanceId:
advance.id,
employeeId,
employeeName:
            employee?.fullName || "",
          year,
          month,
          amount:
Math.min(
recoveryAmount,
              amount
            ),
          date,
approvedBy,
          remarks,
createdAt:
            new Date().toISOString()
        });

saveAdvanceRecoveries(
          recoveries
        );
      }
    } else {
const deductions =
getEmployeeDeductions();

deductions.push({
        id: Date.now(),
employeeId,
employeeName:
          employee?.fullName || "",
        date,
        year,
        month,
        amount,
        reason,
approvedBy,
        remarks,
        status: "APPROVED",
createdAt:
          new Date().toISOString()
      });

saveEmployeeDeductions(
        deductions
      );
    }

    alert(
      type === "advance"
        ? "Employee advance saved successfully."
        : "Employee deduction saved successfully."
    );

refreshTables();
  };

modal.querySelector(
    "#adjustmentYear"
  ).onchange = refreshTables;

modal.querySelector(
    "#adjustmentMonth"
  ).onchange = refreshTables;

modal.querySelector(
    "#closeAdjustments"
  ).onclick = () =>modal.remove();

refreshTables();
}


/* =========================================================
   PAYROLL LEDGER
   ========================================================= */

function managePayrollLedger() {
const employees = getEmployees();

const period =
getPayrollPeriodValues();

const modal =
document.createElement("div");

modal.style.cssText = `
position:fixed;
    inset:0;
background:rgba(0,0,0,.65);
    z-index:9999;
display:flex;
align-items:center;
justify-content:center;
    padding:20px;
  `;

modal.innerHTML = `
<div style="
background:white;
width:min(1200px,100%);
      max-height:94vh;
overflow:auto;
      border-radius:14px;
      padding:22px;
    ">
<h2 style="margin-top:0;">
        Payroll Ledger
</h2>

<div style="
display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(180px,1fr));
        gap:10px;
        margin-bottom:15px;
      ">
<div>
<label>Employee</label>
<select id="ledgerEmployee"
            style="width:100%;padding:9px;">
<option value="">
              Select Employee
</option>

            ${employees.map(employee => `
<option value="${employee.employeeId}">
                ${employee.fullName}
                (${employee.employeeId})
</option>
            `).join("")}
</select>
</div>

<div>
<label>Year</label>
<input id="ledgerYear"
            type="number"
            value="${period.year}"
            style="width:100%;padding:9px;">
</div>

<div>
<label>Month</label>
<select id="ledgerMonth"
            style="width:100%;padding:9px;">
            ${Array.from(
              {length:12},
              (_,i) => `
<option value="${i}"
                  ${i === period.month ? "selected" : ""}>
                  ${new Date(
                    2020,i,1
                  ).toLocaleString(
                    "en-US",
                    {month:"long"}
                  )}
</option>
              `
            ).join("")}
</select>
</div>
</div>

<button id="calculatePayroll"
        style="
          background:#198754;
color:white;
          border:0;
          padding:11px 18px;
          border-radius:7px;
font-weight:bold;
        ">
        Calculate & Save Payroll
</button>

<div id="payrollResult"
        style="margin-top:18px;"></div>

<h3 style="margin-top:30px;">
        Payroll History
</h3>

<div style="overflow:auto;">
<table style="
          width:100%;
border-collapse:collapse;
          min-width:900px;
        ">
<thead>
<tr>
<th style="padding:8px;">Month</th>
<th style="padding:8px;">Employee</th>
<th style="padding:8px;">Earned</th>
<th style="padding:8px;">Deductions</th>
<th style="padding:8px;">Advance Recovery</th>
<th style="padding:8px;">Net Payable</th>
<th style="padding:8px;">Paid</th>
<th style="padding:8px;">Balance</th>
<th style="padding:8px;">Status</th>
<th style="padding:8px;">Action</th>
</tr>
</thead>

<tbody id="payrollLedgerBody"></tbody>
</table>
</div>

<div style="
text-align:right;
        margin-top:20px;
      ">
<button id="closeLedger"
          style="
            padding:10px 18px;
            border:0;
            border-radius:7px;
          ">
          Close
</button>
</div>
</div>
  `;

document.body.appendChild(modal);

  function refreshLedger() {
const records =
getPayrollRecords();

const employeeMap = {};

employees.forEach(employee => {
employeeMap[employee.employeeId] =
employee.fullName;
    });

modal.querySelector(
      "#payrollLedgerBody"
    ).innerHTML =
      records
        .slice()
        .sort(
          (a,b) =>
            Number(b.year) * 12 +
            Number(b.month) -
            (
              Number(a.year) * 12 +
              Number(a.month)
            )
        )
        .map(record => `
<tr style="
            border-top:1px solid #ddd;
          ">
<td style="padding:8px;">
              ${record.monthName}
</td>

<td style="padding:8px;">
              ${employeeMap[
record.employeeId
              ] || record.employeeName}
</td>

<td style="padding:8px;">
              ${formatPayrollMoney(
record.earnedAllowance
              )}
</td>

<td style="padding:8px;">
              ${formatPayrollMoney(
record.approvedDeductions
              )}
</td>

<td style="padding:8px;">
              ${formatPayrollMoney(
record.advanceRecovery
              )}
</td>

<td style="
              padding:8px;
font-weight:bold;
            ">
              ${formatPayrollMoney(
record.netPayable
              )}
</td>

<td style="padding:8px;">
              ${formatPayrollMoney(
record.amountPaid
              )}
</td>

<td style="
              padding:8px;
font-weight:bold;
            ">
              ${formatPayrollMoney(
record.balance
              )}
</td>

<td style="padding:8px;">
              ${record.status}
</td>

<td style="padding:8px;">
              ${
                Number(record.balance || 0) > 0
                  ? `
<button
onclick="recordPayrollPayment(
                        '${record.id}'
                      )"
                      style="
                        background:#198754;
color:white;
                        border:0;
                        padding:7px 10px;
                        border-radius:6px;
                      ">
                      Record Payment
</button>
                  `
                  : "—"
              }
</td>
</tr>
        `)
        .join("");
  }

modal.querySelector(
    "#calculatePayroll"
  ).onclick = () => {
const employeeId =
modal.querySelector(
        "#ledgerEmployee"
      ).value;

    if (!employeeId) {
      alert(
        "Please select an employee."
      );
      return;
    }

const year =
      Number(
modal.querySelector(
          "#ledgerYear"
        ).value
      );

const month =
      Number(
modal.querySelector(
          "#ledgerMonth"
        ).value
      );

const payroll =
calculateEmployeePayroll(
employeeId,
        year,
        month
      );

    if (!payroll) {
      alert(
        "Payroll could not be calculated."
      );
      return;
    }

const saved =
saveCalculatedPayroll(
        payroll
      );

const previousBalance =
getPreviousUnpaidPayrollBalance(
employeeId,
        year,
        month
      );

modal.querySelector(
      "#payrollResult"
    ).innerHTML = `
<div style="
        padding:16px;
        background:#f8f9fa;
        border-radius:10px;
      ">
<h3>
          ${saved.employeeName}
          — ${saved.monthName}
</h3>

<p>
          Monthly allowance:
<b>${formatPayrollMoney(
saved.monthlyAllowance
          )}</b>
</p>

<p>
          Absence deduction:
<b>${formatPayrollMoney(
saved.absenceDeduction
          )}</b>
</p>

<p>
          Earned allowance:
<b>${formatPayrollMoney(
saved.earnedAllowance
          )}</b>
</p>

<p>
          Approved deductions:
<b>${formatPayrollMoney(
saved.approvedDeductions
          )}</b>
</p>

<p>
          Advance recovery:
<b>${formatPayrollMoney(
saved.advanceRecovery
          )}</b>
</p>

<p style="
          font-size:20px;
font-weight:bold;
          color:#198754;
        ">
          Net payable:
          ${formatPayrollMoney(
saved.netPayable
          )}
</p>

<p>
          Previous unpaid balance:
<b>${formatPayrollMoney(
previousBalance
          )}</b>
</p>

<p>
          Total amount due including
          previous unpaid balance:
<b>${formatPayrollMoney(
previousBalance +
saved.netPayable
          )}</b>
</p>

<p>
          Net overtime:
<b>
            ${saved.netOvertimeHours.toFixed(2)}
            hours
</b>
</p>
</div>
    `;

refreshLedger();
  };

modal.querySelector(
    "#closeLedger"
  ).onclick = () =>modal.remove();

refreshLedger();
}


/* =========================================================
   RECORD PAYROLL PAYMENT
   ========================================================= */

function recordPayrollPayment(
payrollId
) {
const records =
getPayrollRecords();

const index =
records.findIndex(
      item =>
        String(item.id) ===
        String(payrollId)
    );

  if (index < 0) {
    alert(
      "Payroll record not found."
    );
    return;
  }

const record =
    records[index];

const payment =
    Number(
      prompt(
        "Enter amount paid in UGX:",
        String(
record.balance || 0
        )
      )
    );

  if (!payment || payment <= 0) {
    return;
  }

  if (
    payment >
    Number(record.balance || 0)
  ) {
    alert(
      "Payment cannot exceed the outstanding balance for this payroll month."
    );
    return;
  }

record.amountPaid =
    Number(record.amountPaid || 0) +
    payment;

record.balance =
Math.max(
      Number(record.netPayable || 0) -
record.amountPaid,
      0
    );

record.paymentDate =
    new Date().toISOString();

record.status =
record.balance<= 0
      ? "PAID"
      : "PARTIALLY PAID";

record.updatedAt =
    new Date().toISOString();

  records[index] = record;

savePayrollRecords(records);

  alert(
    "Payroll payment recorded successfully."
  );

managePayrollLedger();
}


/* =========================================================
   END PAYROLL SYSTEM
   ========================================================= */

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
function activateEmployeeAccount(employeeId) {

const employees = getEmployees();

const employee = employees.find(
    employee =>employee.employeeId === employeeId
  );

  if (!employee) {
    alert("Employee account could not be found.");
    return;
  }

const confirmed = confirm(
    `Activate the login account for ${employee.fullName} (${employee.employeeId})?`
  );

  if (!confirmed) {
    return;
  }

employee.accountStatus = "activated";

saveEmployees(employees);

  alert(
    `${employee.fullName}'s account has been activated.`
  );

manageEmployeeAccounts();
}


function deactivateEmployeeAccount(employeeId) {

const employees = getEmployees();

const employee = employees.find(
    employee =>employee.employeeId === employeeId
  );

  if (!employee) {
    alert("Employee account could not be found.");
    return;
  }

const confirmed = confirm(
    `Deactivate the login account for ${employee.fullName} (${employee.employeeId})?\n\n` +
    `The employee's records will be kept, but the account will no longer be allowed to log in.`
  );

  if (!confirmed) {
    return;
  }

employee.accountStatus = "deactivated";

saveEmployees(employees);

  alert(
    `${employee.fullName}'s account has been deactivated.`
  );

manageEmployeeAccounts();
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
daysRemaining === 2 ||
daysRemaining === 3 ||
daysRemaining === 4 ||
daysRemaining === 5 ||
daysRemaining === 6 ||
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
                      : employee.accountStatus === "deactivated"
                      ? "Deactivated"
                      : "Not Activated"
                  }
</td>

<td style="padding:10px;">
<div style="
display:flex;
    gap:6px;
flex-wrap:wrap;
  ">

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

    ${
employee.accountStatus === "activated"
        ? `
<button
            type="button"
onclick="deactivateEmployeeAccount('${employee.employeeId}')"
            style="
              border:0;
              background:#dc3545;
color:white;
              padding:7px 12px;
              border-radius:6px;
cursor:pointer;
font-weight:bold;
            "
>
            Deactivate
</button>
        `
        : `
<button
            type="button"
onclick="activateEmployeeAccount('${employee.employeeId}')"
            style="
              border:0;
              background:#198754;
color:white;
              padding:7px 12px;
              border-radius:6px;
cursor:pointer;
font-weight:bold;
            "
>
            Activate
</button>
        `
    }

</div>
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

/* Keep the existing passport photo unless
   the Director selects a replacement. */
let editedPassportPhotoData =
employee.passportPhoto || "";

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

<!-- ==================================
     PASSPORT PHOTO
     ================================== -->

<div style="
text-align:center;
        margin-bottom:20px;
        padding:15px;
        background:#f8f9fa;
        border:1px solid #e1e5e8;
        border-radius:10px;
      ">

<div
  id="editEmployeePhotoPreview"
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
background:white;
    color:#777;
    font-size:13px;
  "
>
  ${
employee.passportPhoto
      ? `
<img
src="${employee.passportPhoto}"
          style="
            width:100%;
            height:100%;
object-fit:cover;
          "
>
      `
      : "No Passport Photo"
  }
</div>

<label
  for="editEmployeePhoto"
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
  ${
employee.passportPhoto
      ? "Replace Passport Photo"
      : "Add Passport Photo"
  }
</label>

<input
  id="editEmployeePhoto"
  type="file"
  accept="image/*"
  style="display:none"
>

<div style="
  margin-top:7px;
  font-size:12px;
  color:#666;
">
  The current photo remains unchanged unless
  a new photo is selected.
</div>

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

/* ==================================
   EDIT EMPLOYEE PASSPORT PHOTO
   ================================== */

modal.querySelector(
  "#editEmployeePhoto"
).onchange = event => {

const file =
event.target.files[0];

  if (!file) {
    return;
  }

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

editedPassportPhotoData =
canvas.toDataURL(
          "image/jpeg",
          0.72
        );

modal.querySelector(
        "#editEmployeePhotoPreview"
      ).innerHTML = `
<img
src="${editedPassportPhotoData}"
          style="
            width:100%;
            height:100%;
object-fit:cover;
          "
>
      `;
    };

image.src =
e.target.result;
  };

reader.readAsDataURL(file);
};

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
passportPhoto:editedPassportPhotoData,
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
<option>HR</option>
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
         passwordHash: "",

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
<b>Gross Weight:</b>
<span id="summaryGrossWeight">0 kg</span><br><br>

<b>Dirt Deduction:</b>
<span id="dirtWeight">0 kg</span><br><br>

<b>Net Usable Weight / Opening KB Stock:</b>
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

const dirtKg = g * (d / 100);
const net = g - dirtKg;
const materialCost = net * p;
const total = materialCost + t;

modal.querySelector("#summaryGrossWeight").textContent =
g.toLocaleString() + " kg";

modal.querySelector("#dirtWeight").textContent =
dirtKg.toLocaleString() +
    " kg (" +
d.toLocaleString() +
    "%)";

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

const dirtKg =
isClient
    ? 0
    : grossKg * (dirtPercentValue / 100);

const netKg =
isClient
    ? grossKg
    : grossKg - dirtKg;

const newBatchNumber =
getNextMaterialBatchNumber();

const currentUser =
JSON.parse(
localStorage.getItem("currentUser") || "{}"
  );
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

dirtWeightKg:
isClient ? 0 : Number(dirtKg.toFixed(2)),

netWeight:
  Number(netKg.toFixed(2)),

openingBatchKg:
  Number(netKg.toFixed(2)),

batchBalanceKg:
  Number(netKg.toFixed(2)),

recordedByEmployeeId:
currentUser.employeeId || "",

recordedByName:
currentUser.fullName || "",

recordedByRole:
currentUser.role || "",

recordedAt:
  new Date().toISOString(),

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

const currentUser = JSON.parse(
localStorage.getItem("currentUser") || "{}"
  );

  if (
    String(currentUser.role || "").toLowerCase() !==
    "director"
  ) {
    alert(
      "Only the Director can set or change pole standard weights."
    );
    return;
  }

const poleCategories = [
    {
      key: "pole3X3X6Square",
      name: '3"x3"x6ft Square'
    },
    {
      key: "pole3X3X6_5Square",
      name: '3"x3"x6.5ft Square'
    },
    {
      key: "pole4X4X6Square",
      name: '4"x4"x6ft Square'
    },
    {
      key: "pole4X4X7Square",
      name: '4"x4"x7ft Square'
    },
    {
      key: "pole3x6Round",
      name: '3" Round x 6ft'
    },
    {
      key: "pole4x7Round",
      name: '4" Round x 7ft'
    },
    {
      key: "pole3X3X2Square",
      name: '3"x3"x2ft Square'
    },
    {
      key: "pole4x4X2Square",
      name: '4"x4"x2ft Square'
    },
    {
      key: "pole4x2Round",
      name: '4" Round x 2ft'
    }
  ];

  function getSavedWeights() {
    return JSON.parse(
localStorage.getItem(
        "poleStandardWeights"
      ) || "{}"
    );
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
      width:94%;
      max-width:760px;
      max-height:92vh;
overflow:auto;
      padding:26px;
      border-radius:16px;
      box-shadow:0 12px 35px rgba(0,0,0,.25);
    ">

<h2 style="
        margin-top:0;
        color:#0b5d3b;
      ">
        Director Pole Standard Weights
</h2>

<div style="
        background:#eef8f2;
        border:1px solid #cfe6d8;
        padding:12px;
        border-radius:8px;
        margin-bottom:20px;
        line-height:1.5;
      ">
        Select a pole category and enter the
        Director-approved finished weight for
        one pole.
</div>

<label>
<b>Pole Category</b>
</label>

<select
        id="standardPoleCategory"
        style="
          width:100%;
          padding:11px;
          margin:6px 0 16px;
        "
>
<option value="">
          Select Pole Category
</option>

        ${poleCategories.map(category => `
<option value="${category.key}">
            ${category.name}
</option>
        `).join("")}
</select>

<label>
<b>Standard Weight — KG per Pole</b>
</label>

<input
        id="standardPoleWeight"
        type="number"
        min="0"
        step="0.01"
        placeholder="Enter approved KG per pole"
        style="
          width:100%;
box-sizing:border-box;
          padding:11px;
          margin:6px 0 16px;
        "
>

<div
        id="standardWeightStatus"
        style="
          min-height:20px;
          margin-bottom:16px;
          color:#666;
          font-size:13px;
        "
></div>

<button
        id="saveSelectedPoleWeight"
        type="button"
        style="
          padding:11px 18px;
          background:#0b5d3b;
color:white;
          border:0;
          border-radius:8px;
font-weight:bold;
cursor:pointer;
        "
>
        Save / Update Standard
</button>

<hr style="
        margin:24px 0 18px;
        border:0;
        border-top:1px solid #ddd;
      ">

<h3>
        Current Approved Standards
</h3>

<div style="overflow-x:auto;">

<table style="
          width:100%;
border-collapse:collapse;
          min-width:500px;
        ">

<thead>
<tr>
<th style="
                border:1px solid #ddd;
                padding:9px;
text-align:left;
              ">
                Pole Category
</th>

<th style="
                border:1px solid #ddd;
                padding:9px;
text-align:center;
              ">
                Standard KG / Pole
</th>
</tr>
</thead>

<tbody id="poleStandardsTable">
</tbody>

</table>

</div>

<div style="
text-align:right;
        margin-top:22px;
      ">

<button
          id="closePoleWeightsBtn"
          type="button"
          style="
            padding:10px 18px;
background:white;
            border:1px solid #ccc;
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

const categorySelect =
modal.querySelector(
      "#standardPoleCategory"
    );

const weightInput =
modal.querySelector(
      "#standardPoleWeight"
    );

const status =
modal.querySelector(
      "#standardWeightStatus"
    );

const tableBody =
modal.querySelector(
      "#poleStandardsTable"
    );

  function renderStandardsTable() {

const savedWeights =
getSavedWeights();

tableBody.innerHTML =
poleCategories.map(category => {

const weight =
          Number(
savedWeights[category.key] || 0
          );

        return `
<tr>
<td style="
              border:1px solid #ddd;
              padding:9px;
            ">
              ${category.name}
</td>

<td style="
              border:1px solid #ddd;
              padding:9px;
text-align:center;
font-weight:bold;
            ">
              ${
                weight > 0
                  ? weight.toFixed(2) + " KG"
                  : "Not Set"
              }
</td>
</tr>
        `;
      }).join("");
  }

  function loadSelectedStandard() {

const key =
categorySelect.value;

    if (!key) {

weightInput.value = "";

status.textContent =
        "Select a pole category.";

      return;
    }

const savedWeights =
getSavedWeights();

const currentWeight =
      Number(
savedWeights[key] || 0
      );

    if (currentWeight> 0) {

weightInput.value =
currentWeight;

status.textContent =
        "Current approved standard: " +
currentWeight.toFixed(2) +
        " KG per pole.";

    } else {

weightInput.value = "";

status.textContent =
        "No standard weight has been set for this category.";
    }
  }

categorySelect.onchange =
loadSelectedStandard;

modal.querySelector(
    "#saveSelectedPoleWeight"
  ).onclick = function () {

const key =
categorySelect.value;

const category =
poleCategories.find(
        item =>item.key === key
      );

const weight =
      Number(weightInput.value) || 0;

    if (!category) {

      alert(
        "Please select a pole category."
      );

      return;
    }

    if (weight <= 0) {

      alert(
        "Please enter a valid standard weight greater than zero."
      );

      return;
    }

const savedWeights =
getSavedWeights();

savedWeights[key] =
      Number(weight.toFixed(2));

savedWeights.updatedAt =
      new Date().toISOString();

savedWeights.updatedByEmployeeId =
currentUser.employeeId || "";

savedWeights.updatedByName =
currentUser.fullName || "";

savedWeights.updatedByRole =
currentUser.role || "";

localStorage.setItem(
      "poleStandardWeights",
JSON.stringify(savedWeights)
    );

status.textContent =
category.name +
      " saved at " +
weight.toFixed(2) +
      " KG per pole.";

renderStandardsTable();

    alert(
      "Pole standard weight saved successfully.\n\n" +
category.name +
      "\n" +
weight.toFixed(2) +
      " KG per pole"
    );
  };

modal.querySelector(
    "#closePoleWeightsBtn"
  ).onclick = function () {
modal.remove();
  };

renderStandardsTable();
}
/* =========================================================
   WASHING DEPARTMENT - SOURCE BATCH + WASHING SUB-BATCH

   Example:
   Purchase batch: KB001
   First washing issue:  KBW0011
   Second washing issue: KBW0012

   RULE:
   KG Taken = Actual Washed + Returned KG

   Returned KG goes back to the source KB batch.
   Only Actual Washed KG leaves the unwashed stock.
   ========================================================= */


/* =========================================================
   BASIC WASHING STORAGE
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


/*
 * Keep washingCycles storage because older reports and
 * Director correction functions may still refer to it.
 */
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


/* =========================================================
   WASHED KAVERA STOCK
   ========================================================= */

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


/* =========================================================
   MATERIAL BATCH HELPERS
   ========================================================= */

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


function formatBatchNumber(number) {
  return "KB" + String(number).padStart(3, "0");
}


function getNextMaterialBatchNumber() {

const records = JSON.parse(
localStorage.getItem("materialRecords") || "[]"
  );

  let highest = 0;

records.forEach(record => {

const match = String(
record.batchNumber || ""
    ).match(/^KB(\d+)$/i);

    if (match) {
      highest = Math.max(
        highest,
        Number(match[1]) || 0
      );
    }
  });

  return formatBatchNumber(highest + 1);
}


function getMaterialBatchRecords() {

const records = JSON.parse(
localStorage.getItem("materialRecords") || "[]"
  );

  return records.filter(
    record =>record.batchNumber
  );
}


function getBatchTotalKg(batch) {

  if (!batch) {
    return 0;
  }

  return Number(
batch.openingBatchKg ??
batch.netWeight ??
batch.grossWeight ??
    0
  ) || 0;
}


/* =========================================================
   CURRENT KB BALANCE

   New records use batchBalanceKg.

   Older records without batchBalanceKg are calculated from:
   opening/net weight - actual washed.
   ========================================================= */

function getBatchPendingKg(batchNumber) {

const batch = getMaterialBatchRecords().find(
    record =>record.batchNumber === batchNumber
  );

  if (!batch) {
    return 0;
  }

  if (
batch.batchBalanceKg !== undefined &&
batch.batchBalanceKg !== null
  ) {
    return Math.max(
      Number(batch.batchBalanceKg) || 0,
      0
    );
  }

  return Math.max(
getBatchTotalKg(batch) -
getBatchWashedKg(batchNumber),
    0
  );
}


function getBatchWashedKg(batchNumber) {

  return getWashingShiftRecords()
    .filter(record =>
record.batchNumber === batchNumber&&
record.targetStatus === "COMPLETED" &&
record.status !== "CANCELLED"
    )
    .reduce(
      (sum, record) =>
        sum +
        (Number(record.actualWashedKg) || 0),
      0
    );
}


/* =========================================================
   AUTOMATIC WASHING SUB-BATCH NUMBER

   KB001 -> KBW0011
   KB001 -> KBW0012
   KB002 -> KBW0021
   ========================================================= */

function getNextWashingSubBatchNumber(batchNumber) {

const match = String(
batchNumber || ""
  ).match(/^KB(\d+)$/i);

  if (!match) {
    return "";
  }

const sourceDigits = match[1];

const prefix =
    "KBW" + sourceDigits;

  let highestSequence = 0;

getWashingShiftRecords().forEach(record => {

const subBatch =
      String(
record.washingSubBatchNumber ||
record.cycleNumber ||
        ""
      );

const subMatch =
subBatch.match(
        new RegExp(
          "^KBW" +
sourceDigits +
          "(\\d+)$",
          "i"
        )
      );

    if (subMatch) {
highestSequence = Math.max(
highestSequence,
        Number(subMatch[1]) || 0
      );
    }
  });

  return prefix + (highestSequence + 1);
}


/*
 * Compatibility function.
 * Older parts of the application may still call this name.
 *
 * It no longer creates WCKB001.
 */
function washingCycleFromBatch(batchNumber) {
  return getNextWashingSubBatchNumber(
batchNumber
  );
}


/* =========================================================
   COMPATIBILITY CYCLE HELPERS

   These remain so existing reports and Director correction
   code do not break.
   ========================================================= */

function getWashingCycleForBatch(batchNumber) {

const cycles = getWashingCycles();

  return cycles.find(
    cycle =>
cycle.batchNumber === batchNumber
  ) || null;
}


function ensureWashingCycleForBatch(batch) {

  let cycles = getWashingCycles();

  let cycle = cycles.find(
    item =>
item.batchNumber === batch.batchNumber
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

    /*
     * Source-level tracking only.
     * Individual washing records receive KBW numbers.
     */
cycleNumber:
batch.batchNumber,

totalBatchKg:
      Number(
getBatchTotalKg(batch).toFixed(2)
      ),

totalActualWashedKg: 0,

pendingKg:
      Number(
getBatchPendingKg(
batch.batchNumber
        ).toFixed(2)
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

saveWashingCycles(cycles);

  return cycle;
}


function recalculateWashingCycle(batchNumber) {

const batch =
getMaterialBatchRecords().find(
      item =>
item.batchNumber === batchNumber
    );

  if (!batch) {
    return null;
  }

ensureWashingCycleForBatch(batch);

const cycles =
getWashingCycles();

const index =
cycles.findIndex(
      item =>
item.batchNumber === batchNumber
    );

  if (index === -1) {
    return null;
  }

const totalBatchKg =
getBatchTotalKg(batch);

const totalWashedKg =
getBatchWashedKg(batchNumber);

const pendingKg =
getBatchPendingKg(batchNumber);

  cycles[index].totalBatchKg =
    Number(totalBatchKg.toFixed(2));

  cycles[index].totalActualWashedKg =
    Number(totalWashedKg.toFixed(2));

  cycles[index].pendingKg =
    Number(pendingKg.toFixed(2));

  cycles[index].closingVarianceKg = 0;

  if (pendingKg<= 0.01) {

    cycles[index].status =
      "WASHING COMPLETE";

    cycles[index].completedAt =
      cycles[index].completedAt ||
      new Date().toISOString();

  } else {

    cycles[index].status =
      "ACTIVE";

    cycles[index].completedAt =
      null;
  }

saveWashingCycles(cycles);

  return cycles[index];
}


/*
 * IMPORTANT:
 * Completing a batch does NOT turn the remaining balance
 * into a washing loss.
 */
function markWashingCycleComplete(batchNumber) {

const batch =
getMaterialBatchRecords().find(
      item =>
item.batchNumber === batchNumber
    );

  if (!batch) {
    return null;
  }

const balance =
getBatchPendingKg(batchNumber);

  if (balance > 0.01) {

    alert(
      "This source batch still has " +
balance.toFixed(2) +
      " KG available.\n\n" +
      "Returned or unwashed kavera remains in the source KB batch and cannot be written off as washing loss."
    );

    return recalculateWashingCycle(
batchNumber
    );
  }

const cycles =
getWashingCycles();

const index =
cycles.findIndex(
      item =>
item.batchNumber === batchNumber
    );

  if (index === -1) {
    return null;
  }

  cycles[index].manualComplete = true;
  cycles[index].status =
    "WASHING COMPLETE";

  cycles[index].pendingKg = 0;
  cycles[index].closingVarianceKg = 0;

  cycles[index].completedAt =
    new Date().toISOString();

saveWashingCycles(cycles);

  return cycles[index];
}


/* =========================================================
   OPEN SOURCE BATCHES
   ========================================================= */

function getOpenMaterialBatches() {

  return getMaterialBatchRecords()
    .filter(batch => {

      return (
getBatchPendingKg(
batch.batchNumber
        ) > 0.01
      );
    });
}


/* =========================================================
   DIRECTOR - SET WASHING TARGET

   Target is a PERFORMANCE TARGET.
   It does NOT remove stock from KB.
   ========================================================= */

function setWashingTarget() {

const batches =
getOpenMaterialBatches();

  if (batches.length === 0) {

    alert(
      "There is no material batch available for washing."
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
    z-index:9999;
font-family:Arial,sans-serif;
  `;

const batchOptions =
batches.map(batch => {

const balance =
getBatchPendingKg(
batch.batchNumber
        );

      return `
<option value="${batch.batchNumber}">
          ${batch.batchNumber}
          - ${batch.materialType || "Kavera"}
          - Balance ${balance.toLocaleString()} KG
</option>
      `;
    }).join("");

modal.innerHTML = `
<div style="
background:white;
      width:94%;
      max-width:700px;
      max-height:92vh;
overflow:auto;
      padding:28px;
      border-radius:16px;
    ">

<h2 style="margin-top:0">
        Set Washing Target
</h2>

<p style="color:#666">
        Director sets the expected washing output.
        The Manager will separately record the actual
        KG physically taken from the source batch.
</p>

<label><b>Material Batch</b></label>

<select
        id="washingBatch"
        style="width:100%;padding:10px;margin:6px 0 16px"
>
        ${batchOptions}
</select>

<label><b>Available KB Balance</b></label>

<input
        id="targetAvailableKg"
readonly
        style="
          width:100%;
          padding:10px;
          margin:6px 0 16px;
          background:#f3f5f4;
          border:1px solid #ccc;
          border-radius:8px;
        "
>

<label><b>Date</b></label>

<input
        id="washingTargetDate"
        type="date"
        value="${new Date().toISOString().split("T")[0]}"
        style="width:100%;padding:10px;margin:6px 0 16px"
>


<label><b>Target KG To Wash</b></label>

<input
        id="washingTargetKg"
        type="number"
        min="0"
        step="0.01"
        placeholder="Enter target KG"
        style="width:100%;padding:10px;margin:6px 0 22px"
>

<div style="
display:flex;
justify-content:flex-end;
        gap:12px;
      ">

<button
          id="closeWashingTargetBtn"
          type="button"
          style="padding:10px 18px"
>
          Close
</button>

<button
          id="saveWashingTargetBtn"
          type="button"
          style="
            padding:10px 18px;
            background:#1976d2;
color:white;
            border:0;
            border-radius:8px;
font-weight:bold;
          "
>
          Save Target
</button>

</div>
</div>
  `;

document.body.appendChild(modal);


  function refreshTargetBatch() {

const batchNumber =
modal.querySelector(
        "#washingBatch"
      ).value;

modal.querySelector(
      "#targetAvailableKg"
    ).value =
getBatchPendingKg(
batchNumber
      ).toFixed(2) + " KG";
  }


modal.querySelector(
    "#washingBatch"
  ).onchange =
refreshTargetBatch;


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

     
      if (targetKg<= 0) {
        alert(
          "Please enter the washing target."
        );
        return;
      }

const availableKg =
getBatchPendingKg(
batchNumber
        );

      if (
targetKg>
availableKg + 0.01
      ) {
        alert(
          "Target cannot be greater than the available KB balance of " +
availableKg.toFixed(2) +
          " KG."
        );
        return;
      }

const records =
getWashingShiftRecords();

const duplicate =
records.some(record =>
record.batchNumber === batchNumber&&
record.date === date &&
record.targetStatus === "TARGET SET"
        );

      if (duplicate) {

        alert(
          "A washing target already exists for " +
batchNumber +
          " on this date and shift."
        );

        return;
      }

const currentUser =
JSON.parse(
localStorage.getItem(
            "currentUser"
          ) || "{}"
        );

records.push({

        id: Date.now(),

batchId:
batch.id,

batchNumber:
batchNumber,

        /*
         * KBW number is deliberately NOT generated here.
         * It is generated only when Manager actually
         * issues physical material to washing.
         */
washingSubBatchNumber: "",

cycleNumber: "",

        date:
          date,

        shift:"",
          shiftId:"",

targetKg:
          Number(
targetKg.toFixed(2)
          ),

kgTaken: 0,

actualWashedKg: 0,

returnedKg: 0,

        /*
         * Keep this legacy field at zero.
         * Returned material is NOT discarded.
         */
discardedKg: 0,

achievementPercent: 0,

        staff: "",

staffEmployeeIds: [],

staffEmployees: [],

targetStatus:
          "TARGET SET",

washingComplete: false,

correctionHistory: [],

targetSetByEmployeeId:
currentUser.employeeId || "",

targetSetByName:
currentUser.fullName || "",

targetSetByRole:
currentUser.role || "",

createdAt:
          new Date().toISOString()
      });

saveWashingShiftRecords(
        records
      );

      alert(
        "Washing target saved successfully.\n\n" +
        "Source Batch: " +
batchNumber +
        "\nTarget: " +
targetKg.toFixed(2) +
        " KG\n\n" +
        "The KBW sub-batch will be generated when the Manager records the physical KG taken."
      );

modal.remove();
    };


refreshTargetBatch();
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


const targetOptions =
pendingTargets.map(
      record => `
<option value="${record.id}">
          ${record.batchNumber}
          - ${record.date}
          - Target ${Number(record.targetKg || 0).toLocaleString()} KG
</option>
      `
    ).join("");


modal.innerHTML = `
<div style="
background:white;
      width:94%;
      max-width:820px;
      max-height:92vh;
overflow:auto;
      padding:28px;
      border-radius:16px;
    ">

<h2 style="margin-top:0">
        Record Washing
</h2>

<label><b>Washing Target</b></label>

<select
        id="washingTargetRecord"
        style="width:100%;padding:10px;margin:6px 0 18px"
>
        ${targetOptions}
</select>
<label style="
display:block;
  margin-top:4px;
">
<b>Working Shift</b>
</label>

<select
  id="washingWorkingShift"
  style="
    width:100%;
    padding:10px;
    margin:6px 0 18px;
  "
>
<option value="">
    Select Working Shift
</option>
</select>


<div style="
display:grid;
        grid-template-columns:1fr 1fr;
        gap:14px;
      ">

<div>
<label><b>Source Batch</b></label>
<input
            id="washingDisplayBatch"
readonly
            style="width:100%;padding:10px;background:#f3f5f4"
>
</div>

<div>
<label><b>Next Washing Sub-Batch</b></label>
<input
            id="washingDisplaySubBatch"
readonly
            style="width:100%;padding:10px;background:#f3f5f4"
>
</div>

<div>
<label><b>Current KB Balance</b></label>
<input
            id="washingCurrentBalance"
readonly
            style="width:100%;padding:10px;background:#f3f5f4"
>
</div>

<div>
<label><b>Director Target</b></label>
<input
            id="washingDisplayTargetKg"
readonly
            style="width:100%;padding:10px;background:#f3f5f4"
>
</div>

<div>
<label><b>KG Taken / Re-weighed</b></label>
<input
            id="washingKgTaken"
            type="number"
            min="0"
            step="0.01"
            placeholder="Physical KG taken from source batch"
            style="width:100%;padding:10px"
>
</div>

<div>
<label><b>Actual KG Washed</b></label>
<input
            id="washingActualKg"
            type="number"
            min="0"
            step="0.01"
            placeholder="Actual KG successfully washed"
            style="width:100%;padding:10px"
>
</div>

<div>
<label><b>KG Returned to Source Batch</b></label>
<input
            id="washingReturnedKg"
readonly
            value="0"
            style="width:100%;padding:10px;background:#eef8f2"
>
</div>

<div>
<label><b>Achievement %</b></label>
<input
            id="washingAchievement"
readonly
            value="0"
            style="width:100%;padding:10px;background:#f3f5f4"
>
</div>

</div>


<div style="
  margin-top:18px;
  margin-bottom:18px;
  border:1px solid #d9e5de;
  border-radius:10px;
  padding:15px;
">

<b>Staff Who Actually Worked</b>

<div style="
    font-size:13px;
    color:#666;
    margin:6px 0 12px;
  ">
    Staff are loaded automatically from the team assigned
    to this washing target's shift.
</div>

<div
    id="washingStaffList"
    style="
      max-height:220px;
overflow:auto;
    "
>
<div style="
      padding:12px;
      background:#f5f5f5;
      border-radius:8px;
      color:#666;
    ">
      Loading shift staff...
</div>
</div>

</div>

<div style="
        background:#eef8f2;
        padding:12px;
        border-radius:8px;
        margin-bottom:18px;
      ">
<b>Stock Rule</b><br>
        KG Taken = Actual Washed + KG Returned.<br>
        Returned KG goes back to the source KB batch.
</div>


<label style="
display:flex;
        gap:10px;
        padding:12px;
        background:#fff8e1;
        border-radius:8px;
        margin-bottom:20px;
      ">

<input
          id="washingSourceComplete"
          type="checkbox"
>

<span>
<b>Source KB batch is completely finished</b><br>
<small>
            This can only close the source batch when its
            remaining balance reaches zero.
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
          style="padding:11px 20px"
>
          Close
</button>

<button
          id="saveWashingBtn"
          type="button"
          style="
            padding:11px 20px;
            background:#1976d2;
color:white;
            border:0;
            border-radius:8px;
font-weight:bold;
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
   function renderWashingStaff() {

const staffContainer =
modal.querySelector(
      "#washingStaffList"
    );

const shiftSelect =
modal.querySelector(
      "#washingWorkingShift"
    );

  if (
    !staffContainer ||
    !shiftSelect
  ) {
    return;
  }

const selectedShiftId =
    String(
shiftSelect.value || ""
    );

  if (!selectedShiftId) {

staffContainer.innerHTML = `
<div style="
        padding:12px;
        background:#f5f5f5;
        border-radius:8px;
        color:#666;
      ">
        Select the working shift first.
</div>
    `;

    return;
  }

const employees =
typeof getEmployees === "function"
      ? getEmployees()
      : JSON.parse(
localStorage.getItem(
            "employees"
          ) || "[]"
        );

const teams =
typeof getTeams === "function"
      ? getTeams()
      : JSON.parse(
localStorage.getItem(
            "factoryTeams"
          ) || "[]"
        );

const matchingTeams =
teams.filter(team =>
      String(team.shiftId || "") ===
selectedShiftId&&
      String(team.status || "")
        .toLowerCase() === "active"
    );

  if (!matchingTeams.length) {

staffContainer.innerHTML = `
<div style="
        padding:12px;
        background:#fff4e5;
        border:1px solid #f0d7aa;
        border-radius:8px;
        color:#8a5a00;
      ">
        No active team is assigned
        to this shift.
</div>
    `;

    return;
  }

const staffMap =
    new Map();

matchingTeams.forEach(team => {

const employeeIds =
Array.from(
        new Set([
team.leaderEmployeeId,
          ...(
Array.isArray(
team.memberEmployeeIds
            )
              ? team.memberEmployeeIds
              : []
          )
        ].filter(Boolean))
      );

employeeIds.forEach(
employeeId => {

const employee =
employees.find(item =>
            String(
item.employeeId
            ) ===
            String(employeeId)
          );

        if (!employee) {
          return;
        }

        if (
          String(
employee.employmentStatus ||
            ""
          ).toLowerCase() !==
          "active"
        ) {
          return;
        }

        if (
          !staffMap.has(
            String(employeeId)
          )
        ) {

staffMap.set(
            String(employeeId),
            {
employeeId:
employee.employeeId,

fullName:
employee.fullName,

teamId:
team.id,

teamName:
team.name,

isTeamLeader:
                String(
team.leaderEmployeeId
                ) ===
                String(
employee.employeeId
                )
            }
          );
        }
      }
    );
  });

const staff =
Array.from(
staffMap.values()
    );

  if (!staff.length) {

staffContainer.innerHTML = `
<div style="
        padding:12px;
        background:#fff4e5;
        border-radius:8px;
      ">
        The assigned team has no
        active registered employees.
</div>
    `;

    return;
  }

staffContainer.innerHTML =
staff.map(person => `

<label style="
display:flex;
align-items:flex-start;
        gap:10px;
        padding:9px 6px;
        border-bottom:1px solid #eee;
cursor:pointer;
      ">

<input
          type="checkbox"
          class="washingStaffCheckbox"
          value="${String(
person.employeeId || ""
          ).replace(/"/g, "&quot;")}"
          data-name="${String(
person.fullName || ""
          ).replace(/"/g, "&quot;")}"
          data-team-id="${String(
person.teamId || ""
          ).replace(/"/g, "&quot;")}"
          data-team-name="${String(
person.teamName || ""
          ).replace(/"/g, "&quot;")}"
          data-team-leader="${
person.isTeamLeader
              ? "yes"
              : "no"
          }"
          style="
            width:18px;
            height:18px;
            margin-top:2px;
          "
>

<span>
<b>
            ${person.fullName || ""}
</b>

<br>

<span style="
            color:#666;
            font-size:12px;
          ">
            ${person.employeeId || ""}
            • ${person.teamName || ""}
            ${
person.isTeamLeader
                ? " • Team Leader"
                : ""
            }
</span>
</span>

</label>

    `).join("");
}
function loadWashingShifts() {

const shiftSelect =
modal.querySelector(
      "#washingWorkingShift"
    );

  if (!shiftSelect) {
    return;
  }

const shifts =
typeof getShiftSettings === "function"
      ? getShiftSettings().filter(
          shift =>
            String(
shift.status || ""
            ).toLowerCase() ===
            "active"
        )
      : [];

shiftSelect.innerHTML = `
<option value="">
      Select Working Shift
</option>

    ${shifts.map(shift => `
<option value="${shift.id}">
        ${shift.name}
</option>
    `).join("")}
  `;
}
modal.querySelector(
  "#washingWorkingShift"
).onchange =
renderWashingStaff;

  function loadSelectedTarget() {

const record =
getSelectedRecord();

    if (!record) {
      return;
    }

const balance =
getBatchPendingKg(
record.batchNumber
      );

modal.querySelector(
      "#washingDisplayBatch"
    ).value =
record.batchNumber || "";

modal.querySelector(
      "#washingDisplaySubBatch"
    ).value =
getNextWashingSubBatchNumber(
record.batchNumber
      );

modal.querySelector(
      "#washingCurrentBalance"
    ).value =
balance.toFixed(2) +
      " KG";

modal.querySelector(
      "#washingDisplayTargetKg"
    ).value =
      Number(
record.targetKg || 0
      ).toFixed(2) +
      " KG";

modal.querySelector(
      "#washingKgTaken"
    ).value = "";

modal.querySelector(
      "#washingActualKg"
    ).value = "";

modal.querySelector(
      "#washingReturnedKg"
    ).value = "0.00";

modal.querySelector(
      "#washingAchievement"
    ).value = "0.00";
modal.querySelector(
      "#washingWorkingShift"
    ).value = "";

renderWashingStaff();
modal.querySelector(
      "#washingSourceComplete"
    ).checked = false;
  }


  function calculateWashingResults() {

const record =
getSelectedRecord();

    if (!record) {
      return;
    }

const kgTaken =
      Number(
modal.querySelector(
          "#washingKgTaken"
        ).value
      ) || 0;

const actualKg =
      Number(
modal.querySelector(
          "#washingActualKg"
        ).value
      ) || 0;

const returnedKg =
Math.max(
kgTaken - actualKg,
        0
      );

const targetKg =
      Number(
record.targetKg || 0
      );

const achievement =
targetKg> 0
        ? (actualKg / targetKg) * 100
        : 0;

modal.querySelector(
      "#washingReturnedKg"
    ).value =
returnedKg.toFixed(2);

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
    "#washingKgTaken"
  ).oninput =
calculateWashingResults;


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
       const workingShiftId =
modal.querySelector(
    "#washingWorkingShift"
  ).value;

const activeShifts =
typeof getShiftSettings === "function"
    ? getShiftSettings()
    : [];

const workingShift =
activeShifts.find(
    shift =>
      String(shift.id) ===
      String(workingShiftId)
  );


      if (!selectedRecord) {

        alert(
          "Please select a washing target."
        );

        return;
      }


const kgTaken =
        Number(
modal.querySelector(
            "#washingKgTaken"
          ).value
        ) || 0;


const actualKg =
        Number(
modal.querySelector(
            "#washingActualKg"
          ).value
        ) || 0;


const selectedStaff =
Array.from(
modal.querySelectorAll(
      ".washingStaffCheckbox:checked"
    )
  ).map(checkbox => ({

employeeId:
checkbox.value,

fullName:
checkbox.dataset.name || "",

teamId:
checkbox.dataset.teamId || "",

teamName:
checkbox.dataset.teamName || "",

isTeamLeader:
checkbox.dataset.teamLeader === "yes"
  }));

const staff =
selectedStaff
    .map(person =>person.fullName)
    .join(", ");


const sourceComplete =
modal.querySelector(
          "#washingSourceComplete"
        ).checked;


const availableBefore =
getBatchPendingKg(
selectedRecord.batchNumber
        );


      if (kgTaken<= 0) {

        alert(
          "Please enter the physical KG taken from the source batch."
        );

        return;
      }


      if (
kgTaken>
availableBefore + 0.01
      ) {

        alert(
          "KG Taken cannot be greater than the current " +
selectedRecord.batchNumber +
          " balance of " +
availableBefore.toFixed(2) +
          " KG."
        );

        return;
      }


      if (actualKg<= 0) {

        alert(
          "Please enter the actual KG washed."
        );

        return;
      }


      if (
actualKg>
kgTaken + 0.01
      ) {

        alert(
          "Actual KG Washed cannot be greater than KG Taken."
        );

        return;
      }


      if (!selectedStaff.length) {

        alert(
          "Please select the employees who actually worked in washing."
        );

        return;
      }


const returnedKg =
Math.max(
kgTaken - actualKg,
          0
        );


const targetKg =
        Number(
selectedRecord.targetKg || 0
        );


const achievement =
targetKg> 0
          ? (actualKg / targetKg) * 100
          : 0;


      /*
       * IMPORTANT:
       *
       * Physically we take KG from the batch,
       * but returned KG comes back.
       *
       * Therefore the permanent reduction is
       * ONLY actual washed KG.
       */
const balanceAfter =
Math.max(
availableBefore - actualKg,
          0
        );


      if (
sourceComplete&&
balanceAfter> 0.01
      ) {

        alert(
          "The source batch cannot be marked complete yet.\n\n" +
selectedRecord.batchNumber +
          " will still have " +
balanceAfter.toFixed(2) +
          " KG after this washing record.\n\n" +
          "Returned/unwashed material remains in the source batch."
        );

        return;
      }


const washingSubBatchNumber =
getNextWashingSubBatchNumber(
selectedRecord.batchNumber
        );


const currentUser =
JSON.parse(
localStorage.getItem(
            "currentUser"
          ) || "{}"
        );


      /*
       * Update the original target record.
       */
selectedRecord.washingSubBatchNumber =
washingSubBatchNumber;

      /*
       * Keep cycleNumber for compatibility with
       * existing reports and Director correction.
       */
selectedRecord.cycleNumber =
washingSubBatchNumber;
if(!workingShift) {
   alert(
      "Please select the working shift."
      );
   return;
}
       selectedRecord.shiftId =
           workingShift.id;
       selectedRecord.shift = workingShift.name;
          
selectedRecord.kgTaken =
        Number(
kgTaken.toFixed(2)
        );

selectedRecord.actualWashedKg =
        Number(
actualKg.toFixed(2)
        );

selectedRecord.returnedKg =
        Number(
returnedKg.toFixed(2)
        );

      /*
       * Returned KG is not discarded.
       */
selectedRecord.discardedKg = 0;

selectedRecord.achievementPercent =
        Number(
achievement.toFixed(2)
        );

selectedRecord.staff =
        staff;
       selectedRecord.staffEmployeeIds =
selectedStaff.map(
    person =>person.employeeId
  );

selectedRecord.staffEmployees =
selectedStaff;


selectedRecord.targetStatus =
        "COMPLETED";

selectedRecord.washingComplete =
        true;

selectedRecord.sourceBatchComplete =
sourceComplete;

selectedRecord.sourceBalanceBeforeKg =
        Number(
availableBefore.toFixed(2)
        );

selectedRecord.sourceBalanceAfterKg =
        Number(
balanceAfter.toFixed(2)
        );

selectedRecord.recordedByEmployeeId =
currentUser.employeeId || "";

selectedRecord.recordedByName =
currentUser.fullName || "";

selectedRecord.recordedByRole =
currentUser.role || "";

selectedRecord.completedAt =
        new Date().toISOString();


      /*
       * Save source KB balance.
       */
const materialRecords =
JSON.parse(
localStorage.getItem(
            "materialRecords"
          ) || "[]"
        );


const batchIndex =
materialRecords.findIndex(
          batch =>
batch.batchNumber ===
selectedRecord.batchNumber
        );


      if (batchIndex === -1) {

        alert(
          "Source material batch could not be found. Washing record was not saved."
        );

        return;
      }


materialRecords[
batchIndex
      ].batchBalanceKg =
        Number(
balanceAfter.toFixed(2)
        );


materialRecords[
batchIndex
      ].totalWashedKg =
        Number(
          (
            Number(
materialRecords[
batchIndex
              ].totalWashedKg || 0
            ) +
actualKg
          ).toFixed(2)
        );


materialRecords[
batchIndex
      ].batchStatus =
balanceAfter<= 0.01
          ? "WASHING COMPLETE"
          : "AVAILABLE FOR WASHING";


materialRecords[
batchIndex
      ].lastWashingAt =
        new Date().toISOString();


localStorage.setItem(
        "materialRecords",
JSON.stringify(
materialRecords
        )
      );


      /*
       * Save washing record.
       */
saveWashingShiftRecords(
        records
      );


      /*
       * Add only ACTUAL WASHED KG
       * to washed stock.
       */
const ownerType =
getBatchOwnerType(
selectedRecord.batchNumber
        );


      if (ownerType === "client") {

setClientWashedKaveraStock(
getClientWashedKaveraStock() +
actualKg
        );

      } else {

setCompanyWashedKaveraStock(
getCompanyWashedKaveraStock() +
actualKg
        );
      }


      /*
       * Legacy combined stock.
       */
setWashedKaveraStock(
getWashedKaveraStock() +
actualKg
      );


recalculateWashingCycle(
selectedRecord.batchNumber
      );


const equationDifference =
Math.abs(
kgTaken -
          (
actualKg +
returnedKg
          )
        );


      if (
equationDifference> 0.01
      ) {

        alert(
          "Washing balance error detected. Record was not balanced correctly."
        );

        return;
      }


      alert(
        "Washing record saved successfully.\n\n" +

        "Source Batch: " +
selectedRecord.batchNumber +
        "\n" +

        "Washing Sub-Batch: " +
washingSubBatchNumber +
        "\n\n" +

        "Director Target: " +
targetKg.toFixed(2) +
        " KG\n" +

        "KG Taken: " +
kgTaken.toFixed(2) +
        " KG\n" +

        "Actual Washed: " +
actualKg.toFixed(2) +
        " KG\n" +

        "Returned to " +
selectedRecord.batchNumber +
        ": " +
returnedKg.toFixed(2) +
        " KG\n\n" +

        "Achievement: " +
achievement.toFixed(2) +
        "%\n" +

        "New " +
selectedRecord.batchNumber +
        " Balance: " +
balanceAfter.toFixed(2) +
        " KG\n\n" +

        "Washed Kavera Stock: " +
getWashedKaveraStock().toFixed(2) +
        " KG"
      );


modal.remove();
    };


loadWashingShifts();
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

const poleStandardWeights = JSON.parse(
localStorage.getItem("poleStandardWeights") || "{}"
  );

const productionRecords = JSON.parse(
localStorage.getItem("productionRecords") || "[]"
  );

const washingRecords =
typeof getWashingShiftRecords === "function"
      ? getWashingShiftRecords()
      : JSON.parse(
localStorage.getItem("washingShiftRecords") || "[]"
        );

const employees =
typeof getEmployees === "function"
      ? getEmployees()
      : JSON.parse(
localStorage.getItem("employees") || "[]"
        );

const teams =
typeof getTeams === "function"
      ? getTeams()
      : JSON.parse(
localStorage.getItem("factoryTeams") || "[]"
        );

const shifts =
typeof getShiftSettings === "function"
      ? getShiftSettings().filter(
          shift =>
            String(shift.status || "").toLowerCase() === "active"
        )
      : [];

const currentUser = JSON.parse(
localStorage.getItem("currentUser") || "{}"
  );


  /* =========================================================
     BASIC HELPERS
     ========================================================= */

  function escapeProductionText(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function roundProductionKg(value) {
    return Number(
      (Number(value) || 0).toFixed(2)
    );
  }


  function getProductionSourceNumber(record) {
    return String(
record.washingSubBatchNumber ||
record.subBatchNumber ||
record.cycleNumber ||
      ""
    ).trim();
  }


  function getProductionSourceBatch(record) {
    return String(
record.batchNumber ||
record.sourceBatchNumber ||
record.masterBatchNumber ||
      ""
    ).trim();
  }


  function isCompletedWashingRecord(record) {

const status = String(
record.status || ""
    ).toUpperCase();

const targetStatus = String(
record.targetStatus || ""
    ).toUpperCase();

    return (
      status === "COMPLETED" ||
targetStatus === "COMPLETED"
    );
  }


  function isCompanyWashingRecord(record) {

    /*
     * New washing records should identify their owner.
     * For older records, use the source KB to determine ownership.
     */

const ownerType = String(
record.ownerType ||
record.batchOwnerType ||
record.materialOwnerType ||
      ""
    ).toLowerCase();

    if (ownerType) {
      return ownerType !== "client";
    }

const batchNumber =
getProductionSourceBatch(record);

    if (
batchNumber&&
typeof getBatchOwnerType === "function"
    ) {

      return String(
getBatchOwnerType(batchNumber) || "company"
      ).toLowerCase() !== "client";
    }

    /*
     * Historical company records without owner fields
     * remain usable.
     */
    return true;
  }


  function getUsedKgForWashingSource(sourceNumber) {

    if (!sourceNumber) {
      return 0;
    }

    return productionRecords.reduce(
      (total, record) => {

const sources =
Array.isArray(record.washedSources)
            ? record.washedSources
            : [];

const usedInRecord =
sources.reduce(
            (sourceTotal, source) => {

const number = String(
source.washingSubBatchNumber ||
source.subBatchNumber ||
source.cycleNumber ||
                ""
              ).trim();

              if (number !== sourceNumber) {
                return sourceTotal;
              }

              return (
sourceTotal +
                Number(
source.kgUsed ||
source.productionInputKg ||
                  0
                )
              );
            },
            0
          );

        return total + usedInRecord;
      },
      0
    );
  }


  function getAvailableWashedSources() {

    return washingRecords
      .filter(record => {

        if (!isCompletedWashingRecord(record)) {
          return false;
        }

        if (!isCompanyWashingRecord(record)) {
          return false;
        }

const sourceNumber =
getProductionSourceNumber(record);

/*
 * Only new traceable KBW washing
 * sub-batches can enter new production.
 */
if (!/^KBW\d+$/i.test(sourceNumber)) {
  return false;
}

const washedKg =
  Number(record.actualWashedKg || 0);

if (washedKg<= 0) {
  return false;
}

const alreadyUsed =
getUsedKgForWashingSource(sourceNumber);

        return (
washedKg - alreadyUsed> 0.01
        );
      })
      .map(record => {

const sourceNumber =
getProductionSourceNumber(record);

const washedKg =
          Number(record.actualWashedKg || 0);

const alreadyUsed =
getUsedKgForWashingSource(sourceNumber);

const availableKg =
Math.max(
washedKg - alreadyUsed,
            0
          );

        return {
          record,
sourceNumber,
sourceBatchNumber:
getProductionSourceBatch(record),
washedKg:
roundProductionKg(washedKg),
alreadyUsedKg:
roundProductionKg(alreadyUsed),
availableKg:
roundProductionKg(availableKg)
        };
      })
      .sort((a, b) =>
a.sourceNumber.localeCompare(
b.sourceNumber,
          undefined,
          {
            numeric: true,
            sensitivity: "base"
          }
        )
      );
  }


const availableWashedSources =
getAvailableWashedSources();


  /* =========================================================
     CREATE MODAL
     ========================================================= */

const modal =
document.createElement("div");

modal.style.cssText = `
position:fixed;
    inset:0;
background:rgba(0,0,0,0.55);
display:flex;
align-items:center;
justify-content:center;
    z-index:9999;
font-family:Arial,sans-serif;
    padding:10px;
  `;


modal.innerHTML = `
<div style="
background:white;
      width:94%;
      max-width:1050px;
      max-height:92vh;
overflow:auto;
      padding:26px;
      border-radius:16px;
      box-shadow:0 12px 35px rgba(0,0,0,0.25);
    ">

<h2 style="
        margin-top:0;
        color:#0b5d3b;
      ">
        Record Production
</h2>

<div style="
        background:#eef8f2;
        border:1px solid #cfe6d8;
        padding:13px;
        border-radius:9px;
        margin-bottom:20px;
        color:#0b5d3b;
        line-height:1.5;
      ">
<b>Production Control</b><br>
        Select the working shift, the employees who actually worked,
        and the washed KBW material taken into production.
        Finished production weight is calculated automatically using
        Director-approved pole standard weights.
</div>


<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
        gap:18px;
        margin-bottom:20px;
      ">

<div>
<label style="
display:block;
            margin-bottom:6px;
            font-weight:600;
          ">
            Production Date
</label>

<input
            id="productionDate"
            type="date"
            value="${new Date().toISOString().split("T")[0]}"
            style="
              width:100%;
box-sizing:border-box;
              padding:10px;
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
            Working Shift
</label>

<select
            id="productionShift"
            style="
              width:100%;
box-sizing:border-box;
              padding:10px;
              border:1px solid #ccc;
              border-radius:8px;
            "
>
<option value="">
              Select Shift
</option>

            ${shifts.map(shift => `
<option value="${escapeProductionText(shift.id)}">
                ${escapeProductionText(shift.name)}
</option>
            `).join("")}
</select>
</div>

</div>


<div style="
        border:1px solid #d9e5de;
        border-radius:10px;
        padding:15px;
        margin-bottom:20px;
      ">

<h3 style="
          margin:0 0 8px;
          color:#0b5d3b;
          font-size:17px;
        ">
          Staff Who Actually Worked
</h3>

<div style="
          font-size:13px;
          color:#666;
          margin-bottom:12px;
        ">
          Select a shift first. Only employees assigned to the
          active team or teams working that shift will appear.
</div>

<div
          id="productionStaffList"
          style="
            max-height:220px;
overflow:auto;
          "
>
<div style="
            padding:12px;
            background:#f5f5f5;
            border-radius:8px;
            color:#666;
          ">
            Select the working shift.
</div>
</div>

</div>


<div style="
        border:1px solid #d9e5de;
        border-radius:10px;
        padding:15px;
        margin-bottom:20px;
      ">

<h3 style="
          margin:0 0 8px;
          color:#0b5d3b;
          font-size:17px;
        ">
          Washed Kavera Issued to Production
</h3>

<div style="
          font-size:13px;
          color:#666;
          margin-bottom:12px;
          line-height:1.45;
        ">
          Select one or more completed company KBW washing
          sub-batches and enter only the KG actually taken from each.
          Unused KG remains available for future production.
</div>

<div id="productionWashedSources"></div>

<div style="
          margin-top:15px;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:14px;
        ">

<div>
<label style="
display:block;
              margin-bottom:6px;
              font-weight:600;
            ">
              Total Company Washed Kavera Available
</label>

<input
              id="productionAvailableKg"
              type="number"
readonly
              value="0"
              style="
                width:100%;
box-sizing:border-box;
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
              Total KG Taken Into Production
</label>

<input
              id="productionInputKg"
              type="number"
readonly
              value="0"
              style="
                width:100%;
box-sizing:border-box;
                padding:10px;
                border:1px solid #ccc;
                border-radius:8px;
                background:#f3f5f4;
font-weight:bold;
              "
>
</div>

</div>

</div>


<h3 style="
        margin:5px 0 14px;
        color:#0b5d3b;
        font-size:17px;
      ">
        Pole Quantities Produced
</h3>

<div style="
        border:1px solid #d9e5de;
        border-radius:10px;
        padding:15px;
        margin-bottom:24px;
      ">

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
        gap:12px;
align-items:end;
        margin-bottom:14px;
      ">

<div>
<label style="
display:block;
          margin-bottom:6px;
          font-weight:600;
        ">
          Pole Category
</label>

<select
          id="productionPoleCategory"
          style="
            width:100%;
box-sizing:border-box;
            padding:10px;
            border:1px solid #ccc;
            border-radius:8px;
          "
>
<option value="">
            Select Pole Category
</option>

<option value="pole3X3X6Square">
            3"x3"x6ft Square
</option>

<option value="pole3X3X6_5Square">
            3"x3"x6.5ft Square
</option>

<option value="pole4X4X6Square">
            4"x4"x6ft Square
</option>

<option value="pole4X4X7Square">
            4"x4"x7ft Square
</option>

<option value="pole3x6Round">
            3" Round x 6ft
</option>

<option value="pole4x7Round">
            4" Round x 7ft
</option>

<option value="pole3X3X2Square">
            3"x3"x2ft Square
</option>

<option value="pole4x4X2Square">
            4"x4"x2ft Square
</option>

<option value="pole4x2Round">
            4" Round x 2ft
</option>

</select>
</div>


<div>
<label style="
display:block;
          margin-bottom:6px;
          font-weight:600;
        ">
          Quantity Produced
</label>

<input
          id="productionPoleQuantity"
          type="number"
          min="1"
          step="1"
          placeholder="Enter quantity"
          style="
            width:100%;
box-sizing:border-box;
            padding:10px;
            border:1px solid #ccc;
            border-radius:8px;
          "
>
</div>


<div>
<button
          id="addProductionPoleBtn"
          type="button"
          style="
            width:100%;
            background:#0b5d3b;
color:white;
border:none;
            padding:11px 16px;
            border-radius:8px;
            font-weight:600;
cursor:pointer;
          "
>
          Add Pole Category
</button>
</div>

</div>


<div style="
        font-size:13px;
        color:#666;
        margin-bottom:12px;
        line-height:1.4;
      ">
      The standard KG per pole will come automatically from
      the Director-approved Pole Standard Weights.
</div>


<div style="overflow-x:auto;">

<table style="
        width:100%;
border-collapse:collapse;
        min-width:650px;
      ">

<thead>

<tr>

<th style="
          border:1px solid #ddd;
          padding:8px;
text-align:left;
        ">
        Pole Category
</th>

<th style="
          border:1px solid #ddd;
          padding:8px;
text-align:center;
        ">
        Quantity
</th>

<th style="
          border:1px solid #ddd;
          padding:8px;
text-align:center;
        ">
        KG / Pole
</th>

<th style="
          border:1px solid #ddd;
          padding:8px;
text-align:center;
        ">
        Finished KG
</th>

<th style="
          border:1px solid #ddd;
          padding:8px;
text-align:center;
        ">
        Action
</th>

</tr>

</thead>


<tbody id="productionPoleEntriesTable">

<tr>

<td
colspan="5"
          style="
            border:1px solid #ddd;
            padding:12px;
text-align:center;
            color:#666;
          "
>
          No pole categories added yet.
</td>

</tr>

</tbody>

</table>

</div>

</div>



<div style="
        background:#f7fbf9;
        border:1px solid #d9e5de;
        border-radius:10px;
        padding:15px;
        margin-bottom:20px;
      ">

<h3 style="
          margin:0 0 14px;
          color:#0b5d3b;
          font-size:17px;
        ">
          Production Summary
</h3>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(190px,1fr));
          gap:14px;
        ">

<div>
<label>Total Poles</label>

<input
              id="totalPolesProduced"
              type="number"
readonly
              value="0"
              style="
                width:100%;
box-sizing:border-box;
                padding:10px;
                margin-top:5px;
              "
>
</div>


<div>
<label>
Kavera Input - Pre-Wash Weight (KG)
</label>

<input
              id="productionSummaryInputKg"
              type="number"
readonly
              value="0"
              step="0.01"
              style="
                width:100%;
box-sizing:border-box;
                padding:10px;
                margin-top:5px;
              "
>
</div>


<div>
<label>
              Finished Pole Weight (KG)
</label>

<input
              id="totalProductionWeight"
              type="number"
readonly
              value="0"
              step="0.01"
              style="
                width:100%;
box-sizing:border-box;
                padding:10px;
                margin-top:5px;
              "
>
</div>


<div>
<label>
              Process Loss (KG)
</label>

<input
              id="productionProcessLossKg"
              type="number"
readonly
              value="0"
              step="0.01"
              style="
                width:100%;
box-sizing:border-box;
                padding:10px;
                margin-top:5px;
              "
>
</div>


<div>
<label>
              Recovery %
</label>

<input
              id="productionRecoveryPercent"
              type="number"
readonly
              value="0"
              step="0.01"
              style="
                width:100%;
box-sizing:border-box;
                padding:10px;
                margin-top:5px;
              "
>
</div>


<div>
<label>
              Loss %
</label>

<input
              id="productionLossPercent"
              type="number"
readonly
              value="0"
              step="0.01"
              style="
                width:100%;
box-sizing:border-box;
                padding:10px;
                margin-top:5px;
              "
>
</div>


<div>
<label>
              Production Status
</label>

<input
              id="productionStatus"
              type="text"
readonly
              value="COMPLETED"
              style="
                width:100%;
box-sizing:border-box;
                padding:10px;
                margin-top:5px;
font-weight:bold;
              "
>
</div>

</div>

</div>


<div style="
        background:#eef8f2;
        border:1px solid #cfe6d8;
        padding:12px;
        border-radius:8px;
        margin-bottom:18px;
        font-size:13px;
        line-height:1.45;
      ">
<b>Production Accounting:</b>
        KBW KG represents the pre-wash kavera weight originally
        sent through washing. Kavera is not weighed again after
        washing. Process loss is therefore calculated when finished
        pole weight is recorded.
</div>


<div style="
display:flex;
justify-content:flex-end;
flex-wrap:wrap;
        gap:12px;
      ">

<button
          id="saveProductionBtn"
          type="button"
          style="
            background:#0b5d3b;
color:white;
border:none;
            padding:11px 20px;
            border-radius:8px;
            font-weight:600;
cursor:pointer;
          "
>
          Save Production Record
</button>

<button
          id="closeProductionBtn"
          type="button"
          style="
background:white;
            color:#333;
            border:1px solid #ccc;
            padding:11px 20px;
            border-radius:8px;
            font-weight:600;
cursor:pointer;
          "
>
          Close
</button>

</div>

</div>
  `;


document.body.appendChild(modal);


const productionShift =
modal.querySelector("#productionShift");

const productionStaffList =
modal.querySelector("#productionStaffList");

const productionWashedSources =
modal.querySelector("#productionWashedSources");

const productionAvailableInput =
modal.querySelector("#productionAvailableKg");

const productionInput =
modal.querySelector("#productionInputKg");


  /* =========================================================
     STAFF BY SHIFT
     ========================================================= */

  function renderProductionStaff() {

const selectedShiftId =
      String(productionShift.value || "");

    if (!selectedShiftId) {

productionStaffList.innerHTML = `
<div style="
          padding:12px;
          background:#f5f5f5;
          border-radius:8px;
          color:#666;
        ">
          Select the working shift.
</div>
      `;

      return;
    }


const matchingTeams =
teams.filter(team => {

        return (
          String(team.shiftId || "") ===
selectedShiftId&&

          String(
team.status || ""
          ).toLowerCase() === "active"
        );
      });


    if (!matchingTeams.length) {

productionStaffList.innerHTML = `
<div style="
          padding:12px;
          background:#fff4e5;
          border:1px solid #f0d7aa;
          border-radius:8px;
          color:#8a5a00;
        ">
          No active team is assigned to this shift.
          Assign a team to the shift first.
</div>
      `;

      return;
    }


const staffMap = new Map();


matchingTeams.forEach(team => {

const employeeIds =
Array.from(
          new Set([
team.leaderEmployeeId,
            ...(
Array.isArray(team.memberEmployeeIds)
                ? team.memberEmployeeIds
                : []
            )
          ].filter(Boolean))
        );


employeeIds.forEach(employeeId => {

const employee =
employees.find(
            item =>
              String(item.employeeId) ===
              String(employeeId)
          );

        if (!employee) {
          return;
        }


        if (
          String(
employee.employmentStatus || ""
          ).toLowerCase() !== "active"
        ) {
          return;
        }


        if (!staffMap.has(employeeId)) {

staffMap.set(
employeeId,
            {
employeeId:
employee.employeeId,

fullName:
employee.fullName,

teamId:
team.id,

teamName:
team.name,

isTeamLeader:
                String(team.leaderEmployeeId) ===
                String(employee.employeeId)
            }
          );
        }
      });
    });


const staff =
Array.from(staffMap.values());


    if (!staff.length) {

productionStaffList.innerHTML = `
<div style="
          padding:12px;
          background:#fff4e5;
          border-radius:8px;
        ">
          The team has no active registered employees.
</div>
      `;

      return;
    }


productionStaffList.innerHTML =
staff.map(person => `

<label style="
display:flex;
align-items:flex-start;
          gap:10px;
          padding:9px 6px;
          border-bottom:1px solid #eee;
cursor:pointer;
        ">

<input
            type="checkbox"
            class="productionStaffCheckbox"
            value="${escapeProductionText(person.employeeId)}"
            data-name="${escapeProductionText(person.fullName)}"
            data-team-id="${escapeProductionText(person.teamId)}"
            data-team-name="${escapeProductionText(person.teamName)}"
            data-team-leader="${person.isTeamLeader ? "yes" : "no"}"
            style="
              width:18px;
              height:18px;
              margin-top:2px;
            "
>

<span>
<b>
              ${escapeProductionText(person.fullName)}
</b>

<br>

<span style="
              color:#666;
              font-size:12px;
            ">
              ${escapeProductionText(person.employeeId)}
              •
              ${escapeProductionText(person.teamName)}
              ${person.isTeamLeader ? " • Team Leader" : ""}
</span>
</span>

</label>

      `).join("");
  }


  /* =========================================================
     KBW MATERIAL SOURCES
     ========================================================= */

  function renderProductionWashedSources() {

const totalAvailable =
availableWashedSources.reduce(
        (sum, source) =>
          sum + Number(source.availableKg || 0),
        0
      );


productionAvailableInput.value =
totalAvailable.toFixed(2);


    if (!availableWashedSources.length) {

productionWashedSources.innerHTML = `
<div style="
          padding:13px;
          background:#fff4e5;
          border:1px solid #f0d7aa;
          border-radius:8px;
          color:#8a5a00;
        ">
          No completed company KBW washed material is currently
          available for production.
</div>
      `;

      return;
    }


productionWashedSources.innerHTML =
availableWashedSources.map(
        (source, index) => `

<div style="
display:grid;
            grid-template-columns:
minmax(160px,1fr)
minmax(130px,0.7fr)
minmax(150px,0.8fr);
            gap:12px;
align-items:center;
            padding:11px 6px;
            border-bottom:1px solid #eee;
          ">

<label style="
display:flex;
align-items:center;
              gap:9px;
cursor:pointer;
            ">

<input
                type="checkbox"
                class="productionSourceCheckbox"
                data-index="${index}"
                style="
                  width:18px;
                  height:18px;
                "
>

<span>
<b>
                  ${escapeProductionText(source.sourceNumber)}
</b>

<br>

<span style="
                  color:#666;
                  font-size:12px;
                ">
                  Source:
                  ${escapeProductionText(
source.sourceBatchNumber || "—"
                  )}
</span>
</span>

</label>


<div style="
              font-size:13px;
            ">
              Available:
<br>
<b>
                ${source.availableKg.toFixed(2)} KG
</b>
</div>


<div>
<input
                type="number"
                class="productionSourceKg"
                data-index="${index}"
                min="0"
                max="${source.availableKg}"
                step="0.01"
                value="0"
                disabled
                placeholder="KG taken"
                style="
                  width:100%;
box-sizing:border-box;
                  padding:9px;
                  border:1px solid #ccc;
                  border-radius:7px;
                "
>
</div>

</div>

        `
      ).join("");
  }


  function calculateProductionInputKg() {

    let total = 0;


    modal
      .querySelectorAll(
        ".productionSourceCheckbox"
      )
      .forEach(checkbox => {

        if (!checkbox.checked) {
          return;
        }

const index =
          Number(checkbox.dataset.index);

const kgInput =
modal.querySelector(
            '.productionSourceKg[data-index="' +
            index +
            '"]'
          );

const source =
availableWashedSources[index];

        if (!kgInput || !source) {
          return;
        }


        let kg =
          Number(kgInput.value) || 0;


        if (kg < 0) {
          kg = 0;
        }


        if (kg >source.availableKg) {

          kg =
source.availableKg;

kgInput.value =
source.availableKg.toFixed(2);
        }


        total += kg;
      });


productionInput.value =
total.toFixed(2);


calculateProductionSummary();
  }


  /* =========================================================
     PRODUCTION CALCULATION
     ========================================================= */

let productionPoleEntries = [];


const productionPoleCategories = [

    {
      key: "pole3X3X6Square",
      name: '3"x3"x6ft Square'
    },

    {
      key: "pole3X3X6_5Square",
      name: '3"x3"x6.5ft Square'
    },

    {
      key: "pole4X4X6Square",
      name: '4"x4"x6ft Square'
    },

    {
      key: "pole4X4X7Square",
      name: '4"x4"x7ft Square'
    },

    {
      key: "pole3x6Round",
      name: '3" Round x 6ft'
    },

    {
      key: "pole4x7Round",
      name: '4" Round x 7ft'
    },

    {
      key: "pole3X3X2Square",
      name: '3"x3"x2ft Square'
    },

    {
      key: "pole4x4X2Square",
      name: '4"x4"x2ft Square'
    },

    {
      key: "pole4x2Round",
      name: '4" Round x 2ft'
    }

  ];


  function getPoleQuantities() {

const quantities = {};

productionPoleCategories.forEach(
      category => {

        quantities[category.key] = 0;

      }
    );


productionPoleEntries.forEach(
      entry => {

        quantities[entry.key] =
          (
            Number(
              quantities[entry.key]
            ) || 0
          ) +
          (
            Number(
entry.quantity
            ) || 0
          );

      }
    );


    return quantities;
  }


 function calculateProductionSummary() {

const totalPoles =
productionPoleEntries.reduce(
        (total, entry) => {

          return (
            total +
            Number(
entry.quantity || 0
            )
          );

        },
        0
      );


const productionWeight =
productionPoleEntries.reduce(
        (total, entry) => {

          return (
            total +
            Number(
entry.finishedKg || 0
            )
          );

        },
        0
      );


const productionInputKg =
      Number(
productionInput.value
      ) || 0;


const processLossKg =
Math.max(
productionInputKg -
productionWeight,
        0
      );


const recoveryPercent =
productionInputKg> 0
        ? (
productionWeight /
productionInputKg
          ) * 100
        : 0;


const lossPercent =
productionInputKg> 0
        ? (
processLossKg /
productionInputKg
          ) * 100
        : 0;


modal.querySelector(
      "#totalPolesProduced"
    ).value =
totalPoles;


modal.querySelector(
      "#productionSummaryInputKg"
    ).value =
productionInputKg.toFixed(2);


modal.querySelector(
      "#totalProductionWeight"
    ).value =
productionWeight.toFixed(2);


modal.querySelector(
      "#productionProcessLossKg"
    ).value =
processLossKg.toFixed(2);


modal.querySelector(
      "#productionRecoveryPercent"
    ).value =
recoveryPercent.toFixed(2);


modal.querySelector(
      "#productionLossPercent"
    ).value =
lossPercent.toFixed(2);


modal.querySelector(
      "#productionStatus"
    ).value =
      "COMPLETED";
  }


  function renderProductionPoleEntries() {

const tableBody =
modal.querySelector(
        "#productionPoleEntriesTable"
      );


    if (!productionPoleEntries.length) {

tableBody.innerHTML = `

<tr>

<td
colspan="5"
  style="
    border:1px solid #ddd;
    padding:12px;
text-align:center;
    color:#666;
  "
>
  No pole categories added yet.
</td>

</tr>

      `;


calculateProductionSummary();

      return;
    }


tableBody.innerHTML =
productionPoleEntries
        .map(
          (entry, index) => `

<tr>

<td style="
  border:1px solid #ddd;
  padding:8px;
">
  ${escapeProductionText(
entry.name
  )}
</td>


<td style="
  border:1px solid #ddd;
  padding:8px;
text-align:center;
">
  ${entry.quantity}
</td>


<td style="
  border:1px solid #ddd;
  padding:8px;
text-align:center;
">
  ${Number(
entry.standardWeight
  ).toFixed(2)}
</td>


<td style="
  border:1px solid #ddd;
  padding:8px;
text-align:center;
font-weight:bold;
">
  ${Number(
entry.finishedKg
  ).toFixed(2)}
</td>


<td style="
  border:1px solid #ddd;
  padding:8px;
text-align:center;
">

<button
  type="button"
  class="removeProductionPoleBtn"
  data-index="${index}"
  style="
background:white;
    color:#a00000;
    border:1px solid #cc7777;
    padding:6px 10px;
    border-radius:6px;
cursor:pointer;
  "
>
  Remove
</button>

</td>

</tr>

          `
        )
        .join("");


calculateProductionSummary();
  }


modal.querySelector(
    "#addProductionPoleBtn"
  ).onclick = function () {

const categoryKey =
      String(
modal.querySelector(
          "#productionPoleCategory"
        ).value || ""
      );


const quantity =
      Number(
modal.querySelector(
          "#productionPoleQuantity"
        ).value
      ) || 0;


const category =
productionPoleCategories.find(
        item =>
item.key === categoryKey
      );


    if (!category) {

      alert(
        "Please select a pole category."
      );

      return;
    }


    if (
      quantity <= 0 ||
      !Number.isInteger(quantity)
    ) {

      alert(
        "Please enter a valid whole-number quantity produced."
      );

      return;
    }


const standardWeight =
      Number(
poleStandardWeights[
categoryKey
        ] || 0
      );


    if (standardWeight<= 0) {

      alert(
        "This pole category has no Director-approved standard weight.\n\n" +
        "The Director must set the standard weight before it can be added to Production."
      );

      return;
    }


const existingEntry =
productionPoleEntries.find(
        entry =>
entry.key === categoryKey
      );


    if (existingEntry) {

existingEntry.quantity =
        Number(
existingEntry.quantity
        ) +
        quantity;


existingEntry.finishedKg =
roundProductionKg(
existingEntry.quantity *
standardWeight
        );

    } else {

productionPoleEntries.push({

        key:
category.key,

        name:
category.name,

        quantity:
          quantity,

standardWeight:
roundProductionKg(
standardWeight
          ),

finishedKg:
roundProductionKg(
            quantity *
standardWeight
          )

      });

    }


modal.querySelector(
      "#productionPoleCategory"
    ).value = "";


modal.querySelector(
      "#productionPoleQuantity"
    ).value = "";


renderProductionPoleEntries();
  };


modal.addEventListener(
    "click",
    function (event) {

const removeButton =
event.target.closest(
          ".removeProductionPoleBtn"
        );


      if (!removeButton) {
        return;
      }


const index =
        Number(
removeButton.dataset.index
        );


      if (
        index < 0 ||
        index >=
productionPoleEntries.length
      ) {
        return;
      }


productionPoleEntries.splice(
        index,
        1
      );


renderProductionPoleEntries();
    }
  );


  /* =========================================================
     EVENTS
     ========================================================= */

productionShift.addEventListener(
    "change",
renderProductionStaff
  );


modal.addEventListener(
    "change",
    function (event) {

      if (
event.target.classList.contains(
          "productionSourceCheckbox"
        )
      ) {

const index =
          Number(
event.target.dataset.index
          );

const kgInput =
modal.querySelector(
            '.productionSourceKg[data-index="' +
            index +
            '"]'
          );

const source =
availableWashedSources[index];


        if (kgInput&& source) {

kgInput.disabled =
            !event.target.checked;


          if (event.target.checked) {

            /*
             * Do not automatically consume the whole KBW.
             * Manager must enter the physical KG actually taken.
             */
kgInput.value = "";

kgInput.focus();

          } else {

kgInput.value = "0";
          }
        }


calculateProductionInputKg();
      }
    }
  );


modal.addEventListener(
    "input",
    function (event) {

      if (
event.target.classList.contains(
          "productionSourceKg"
        )
      ) {

calculateProductionInputKg();
      }
    }
  );

modal.querySelector(
    "#closeProductionBtn"
  ).onclick = function () {

modal.remove();
  };


  /* =========================================================
     SAVE PRODUCTION
     ========================================================= */

modal.querySelector(
    "#saveProductionBtn"
  ).onclick = function () {

calculateProductionInputKg();
calculateProductionSummary();


const date =
modal.querySelector(
        "#productionDate"
      ).value;


const selectedShiftId =
      String(
productionShift.value || ""
      );


const selectedShift =
shifts.find(
        shift =>
          String(shift.id) ===
selectedShiftId
      );


    if (!date) {

      alert(
        "Please enter the production date."
      );

      return;
    }


    if (!selectedShift) {

      alert(
        "Please select the working shift."
      );

      return;
    }


    /* -------------------------
       SELECTED STAFF
       ------------------------- */

const selectedStaff =
Array.from(
modal.querySelectorAll(
          ".productionStaffCheckbox:checked"
        )
      ).map(checkbox => ({

employeeId:
checkbox.value,

fullName:
checkbox.dataset.name || "",

teamId:
checkbox.dataset.teamId || "",

teamName:
checkbox.dataset.teamName || "",

isTeamLeader:
checkbox.dataset.teamLeader === "yes"
      }));


    if (!selectedStaff.length) {

      alert(
        "Please select the employees who actually worked in production."
      );

      return;
    }


    /* -------------------------
       SELECTED KBW SOURCES
       ------------------------- */

const washedSources = [];

    let productionInputKg = 0;


const checkedSources =
Array.from(
modal.querySelectorAll(
          ".productionSourceCheckbox:checked"
        )
      );


    if (!checkedSources.length) {

      alert(
        "Please select the washed KBW material taken into production."
      );

      return;
    }


    for (
const checkbox of checkedSources
    ) {

const index =
        Number(
checkbox.dataset.index
        );

const source =
availableWashedSources[index];

const kgInput =
modal.querySelector(
          '.productionSourceKg[data-index="' +
          index +
          '"]'
        );


      if (!source || !kgInput) {
        continue;
      }


const kgUsed =
        Number(kgInput.value) || 0;


      if (kgUsed<= 0) {

        alert(
          "Please enter the KG taken from " +
source.sourceNumber +
          "."
        );

        return;
      }


      /*
       * Recalculate usage from current production records
       * immediately before saving.
       */
const latestRecords =
JSON.parse(
localStorage.getItem(
            "productionRecords"
          ) || "[]"
        );


const latestUsed =
latestRecords.reduce(
          (total, record) => {

const sources =
Array.isArray(
record.washedSources
              )
                ? record.washedSources
                : [];

            return (
              total +
sources.reduce(
                (sourceTotal, savedSource) => {

const savedNumber =
                    String(
savedSource.washingSubBatchNumber ||
savedSource.subBatchNumber ||
savedSource.cycleNumber ||
                      ""
                    ).trim();


                  if (
savedNumber !==
source.sourceNumber
                  ) {
                    return sourceTotal;
                  }


                  return (
sourceTotal +
                    Number(
savedSource.kgUsed ||
savedSource.productionInputKg ||
                      0
                    )
                  );
                },
                0
              )
            );
          },
          0
        );


const latestAvailable =
Math.max(
          Number(source.washedKg) -
latestUsed,
          0
        );


      if (
kgUsed>
latestAvailable + 0.01
      ) {

        alert(
source.sourceNumber +
          " now has only " +
latestAvailable.toFixed(2) +
          " KG available.\n\n" +
          "Close and reopen Production to refresh the material."
        );

        return;
      }


washedSources.push({

washingSubBatchNumber:
source.sourceNumber,

sourceBatchNumber:
source.sourceBatchNumber,

washedKg:
roundProductionKg(
source.washedKg
          ),

availableBeforeKg:
roundProductionKg(
latestAvailable
          ),

kgUsed:
roundProductionKg(
kgUsed
          ),

availableAfterKg:
roundProductionKg(
latestAvailable -
kgUsed
          )
      });


productionInputKg +=
kgUsed;
    }


productionInputKg =
roundProductionKg(
productionInputKg
      );


    if (
productionInputKg<= 0
    ) {

      alert(
        "KG taken into production must be greater than zero."
      );

      return;
    }


    /* -------------------------
       POLE QUANTITIES
       ------------------------- */

const quantities =
getPoleQuantities();


const totalPoles =
productionPoleEntries.reduce(
        (total, entry) =>
          total +
          Number(
entry.quantity || 0
          ),
        0
      );


    if (totalPoles<= 0) {

      alert(
        "Please add at least one pole category and quantity produced."
      );

      return;
    }


    /* -------------------------
       DIRECTOR APPROVED WEIGHTS
       ------------------------- */

const missingWeights =
productionPoleEntries
        .filter(entry =>
          Number(
poleStandardWeights[
entry.key
            ] || 0
          ) <= 0
        )
        .map(entry =>
entry.name
        );


    if (missingWeights.length) {

      alert(
        "Production cannot be saved.\n\n" +
        "The Director must first approve the standard weight for:\n\n" +
missingWeights.join("\n")
      );

      return;
    }


const productionWeight =
productionPoleEntries.reduce(
        (total, entry) => {

          return (
            total +
            (
              Number(
entry.quantity || 0
              ) *
              Number(
poleStandardWeights[
entry.key
                ] || 0
              )
            )
          );

        },
        0
      );

    /*
     * Finished pole weight should not exceed
     * the washed material issued to this production run.
     */
    if (
productionWeight>
productionInputKg + 0.01
    ) {

      alert(
        "Production cannot be saved.\n\n" +
        "Finished pole weight: " +
productionWeight.toFixed(2) +
        " KG\n" +
        "Washed kavera issued: " +
productionInputKg.toFixed(2) +
        " KG\n\n" +
        "Finished weight cannot be greater than the material issued."
      );

      return;
    }


const productionProcessLossKg =
Math.max(
productionInputKg -
productionWeight,
        0
      );


const productionRecoveryPercent =
productionInputKg> 0
        ? (
productionWeight /
productionInputKg
          ) * 100
        : 0;
const productionLossPercent =
productionInputKg> 0
        ? (
productionProcessLossKg /
productionInputKg
          ) * 100
        : 0;


    /* -------------------------
       TEAM INFORMATION
       ------------------------- */

const selectedTeamIds =
Array.from(
        new Set(
selectedStaff
            .map(person =>
              String(person.teamId || "")
            )
            .filter(Boolean)
        )
      );


const selectedTeamNames =
Array.from(
        new Set(
selectedStaff
            .map(person =>
person.teamName
            )
            .filter(Boolean)
        )
      );


    /* -------------------------
       SAVE RECORD
       ------------------------- */

const latestProductionRecords =
JSON.parse(
localStorage.getItem(
          "productionRecords"
        ) || "[]"
      );


const productionRecord = {

      id:
Date.now(),

      date,

shiftId:
selectedShift.id,

      shift:
selectedShift.name,

shiftName:
selectedShift.name,

teamIds:
selectedTeamIds,

teamNames:
selectedTeamNames,

      staff:
selectedStaff
          .map(person =>person.fullName)
          .join(", "),

staffEmployeeIds:
selectedStaff
          .map(person =>person.employeeId),

staffWorked:
selectedStaff,

washedSources:
washedSources,

productionAvailableKg:
roundProductionKg(
washedSources.reduce(
            (sum, source) =>
              sum +
              Number(
source.availableBeforeKg || 0
              ),
            0
          )
        ),

productionInputKg:
roundProductionKg(
productionInputKg
        ),

      pole3X3X6Square:
        quantities.pole3X3X6Square || 0,

      pole3X3X6_5Square:
        quantities.pole3X3X6_5Square || 0,

      pole4X4X6Square:
        quantities.pole4X4X6Square || 0,

      pole4X4X7Square:
        quantities.pole4X4X7Square || 0,

      pole3x6Round:
        quantities.pole3x6Round || 0,

      pole4x7Round:
        quantities.pole4x7Round || 0,

      pole3X3X2Square:
        quantities.pole3X3X2Square || 0,

      pole4x4X2Square:
        quantities.pole4x4X2Square || 0,

      pole4x2Round:
        quantities.pole4x2Round || 0,

poleEntries:
productionPoleEntries.map(entry => ({

        key:
entry.key,

        name:
entry.name,

        quantity:
          Number(
entry.quantity || 0
          ),

standardWeight:
roundProductionKg(
poleStandardWeights[
entry.key
            ] || 0
          ),

finishedKg:
roundProductionKg(
            Number(
entry.quantity || 0
            ) *
            Number(
poleStandardWeights[
entry.key
              ] || 0
            )
          )

      })),

totalPoles:
totalPoles,

productionWeight:
roundProductionKg(
productionWeight
        ),

productionProcessLossKg:
roundProductionKg(
productionProcessLossKg
        ),

productionRecoveryPercent:
roundProductionKg(
productionRecoveryPercent
        ),

productionLossPercent:
roundProductionKg(
productionLossPercent
        ),

productionStatus:
        "COMPLETED",

standardWeightsUsed: {

        pole3X3X6Square:
          Number(
            poleStandardWeights.pole3X3X6Square || 0
          ),

        pole3X3X6_5Square:
          Number(
            poleStandardWeights.pole3X3X6_5Square || 0
          ),

        pole4X4X6Square:
          Number(
            poleStandardWeights.pole4X4X6Square || 0
          ),

        pole4X4X7Square:
          Number(
            poleStandardWeights.pole4X4X7Square || 0
          ),

        pole3x6Round:
          Number(
            poleStandardWeights.pole3x6Round || 0
          ),

        pole4x7Round:
          Number(
            poleStandardWeights.pole4x7Round || 0
          ),

        pole3X3X2Square:
          Number(
            poleStandardWeights.pole3X3X2Square || 0
          ),

        pole4x4X2Square:
          Number(
            poleStandardWeights.pole4x4X2Square || 0
          ),

        pole4x2Round:
          Number(
            poleStandardWeights.pole4x2Round || 0
          )

      },

recordedByEmployeeId:
currentUser.employeeId || "",

recordedByName:
currentUser.fullName || "",

recordedByRole:
currentUser.role || "",

createdAt:
        new Date().toISOString()
    };


latestProductionRecords.push(
productionRecord
    );


localStorage.setItem(
      "productionRecords",
JSON.stringify(
latestProductionRecords
      )
    );


    /*
     * Maintain the existing company washed-stock counters
     * for dashboard/report compatibility.
     *
     * KBW source-level consumption is now preserved in
     * productionRecord.washedSources.
     */

const companyStockBefore =
typeof getCompanyWashedKaveraStock === "function"
        ? Number(
getCompanyWashedKaveraStock()
          ) || 0
        : Number(
localStorage.getItem(
              "companyWashedKaveraStock"
            ) || 0
          );


const companyStockAfter =
Math.max(
companyStockBefore -
productionInputKg,
        0
      );


    if (
typeof setCompanyWashedKaveraStock === "function"
    ) {

setCompanyWashedKaveraStock(
companyStockAfter
      );

    } else {

localStorage.setItem(
        "companyWashedKaveraStock",
companyStockAfter.toFixed(2)
      );
    }


const legacyStockBefore =
typeof getWashedKaveraStock === "function"
        ? Number(
getWashedKaveraStock()
          ) || 0
        : Number(
localStorage.getItem(
              "washedKaveraStock"
            ) || 0
          );


const legacyStockAfter =
Math.max(
legacyStockBefore -
productionInputKg,
        0
      );


    if (
typeof setWashedKaveraStock === "function"
    ) {

setWashedKaveraStock(
legacyStockAfter
      );

    } else {

localStorage.setItem(
        "washedKaveraStock",
legacyStockAfter.toFixed(2)
      );
    }


   alert(
      "Production record saved successfully.\n\n" +

      "Shift: " +
selectedShift.name +
      "\n" +

      "Staff Selected: " +
selectedStaff.length +
      "\n" +

      "Kavera Input (Pre-Wash Weight): " +
productionInputKg.toFixed(2) +
      " KG\n" +

      "Finished Pole Weight: " +
productionWeight.toFixed(2) +
      " KG\n" +

      "Process Loss: " +
productionProcessLossKg.toFixed(2) +
      " KG\n" +

      "Recovery: " +
productionRecoveryPercent.toFixed(2) +
      "%\n" +

      "Loss: " +
productionLossPercent.toFixed(2) +
      "%\n" +

      "Total Poles: " +
totalPoles +
      "\n\n" +

      "Status: COMPLETED"
    );


modal.remove();
  };


  /* =========================================================
     INITIAL DISPLAY
     ========================================================= */

renderProductionStaff();
renderProductionWashedSources();
calculateProductionInputKg();
calculateProductionSummary();
}


function viewProductionRecords() {

const records =
JSON.parse(
localStorage.getItem(
      "productionRecords"
    ) || "[]"
  );


function escapeProductionRecordText(value) {

    return String(
      value ?? ""
    )
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


function getRecordSources(record) {

const sources =
Array.isArray(record.washedSources)
      ? record.washedSources
      : [];


    if (!sources.length) {
      return "—";
    }


    return sources
      .map(source => {

const kbw =
source.washingSubBatchNumber ||
source.subBatchNumber ||
source.cycleNumber ||
          "";


const kb =
source.sourceBatchNumber ||
          "";


        if (kbw&& kb) {
          return kbw + " / " + kb;
        }


        return kbw || kb || "—";
      })
      .join(", ");
  }


function getRecordPoleDetails(record) {

const entries =
Array.isArray(record.poleEntries)
      ? record.poleEntries
      : [];


    if (entries.length) {

      return entries
        .filter(entry =>
          Number(entry.quantity || 0) > 0
        )
        .map(entry => {

          return (
escapeProductionRecordText(
entry.name || entry.key || "Pole"
            ) +
            " × " +
            Number(entry.quantity || 0)
          );

        })
        .join("<br>");
    }


const legacyCategories = [

      [
        "pole3X3X6Square",
        '3"x3"x6ft Square'
      ],

      [
        "pole3X3X6_5Square",
        '3"x3"x6.5ft Square'
      ],

      [
        "pole4X4X6Square",
        '4"x4"x6ft Square'
      ],

      [
        "pole4X4X7Square",
        '4"x4"x7ft Square'
      ],

      [
        "pole3x6Round",
        '3" Round x 6ft'
      ],

      [
        "pole4x7Round",
        '4" Round x 7ft'
      ],

      [
        "pole3X3X2Square",
        '3"x3"x2ft Square'
      ],

      [
        "pole4x4X2Square",
        '4"x4"x2ft Square'
      ],

      [
        "pole4x2Round",
        '4" Round x 2ft'
      ]

    ];


const details =
legacyCategories
      .filter(item =>
        Number(record[item[0]] || 0) > 0
      )
      .map(item =>
escapeProductionRecordText(item[1]) +
        " × " +
        Number(record[item[0]] || 0)
      );


    return details.length
      ? details.join("<br>")
      : "—";
  }


function getInputKg(record) {

    return Number(
record.productionInputKg || 0
    );
  }


function getFinishedKg(record) {

    return Number(
record.productionWeight || 0
    );
  }


function getProcessLossKg(record) {

    if (
record.productionProcessLossKg !== undefined
    ) {

      return Number(
record.productionProcessLossKg || 0
      );
    }


    if (
record.productionPendingKg !== undefined
    ) {

      return Number(
record.productionPendingKg || 0
      );
    }


    return Math.max(
getInputKg(record) -
getFinishedKg(record),
      0
    );
  }


function getRecoveryPercent(record) {

    if (
record.productionRecoveryPercent !== undefined
    ) {

      return Number(
record.productionRecoveryPercent || 0
      );
    }


    if (
record.productionCompletion !== undefined
    ) {

      return Number(
record.productionCompletion || 0
      );
    }


const inputKg =
getInputKg(record);


    return inputKg> 0
      ? (
getFinishedKg(record) /
inputKg
        ) * 100
      : 0;
  }


function getLossPercent(record) {

    if (
record.productionLossPercent !== undefined
    ) {

      return Number(
record.productionLossPercent || 0
      );
    }


const inputKg =
getInputKg(record);


    return inputKg> 0
      ? (
getProcessLossKg(record) /
inputKg
        ) * 100
      : 0;
  }


const modal =
document.createElement("div");


modal.style.cssText = `
position:fixed;
    inset:0;
background:rgba(0,0,0,0.55);
display:flex;
align-items:center;
justify-content:center;
    z-index:9999;
font-family:Arial,sans-serif;
    padding:10px;
  `;


const sortedRecords =
records
    .slice()
    .sort((a, b) => {

const dateCompare =
String(b.date || "")
        .localeCompare(
String(a.date || "")
        );


      if (dateCompare !== 0) {
        return dateCompare;
      }


      return (
        Number(b.id || 0) -
        Number(a.id || 0)
      );
    });


const rowsHtml =
sortedRecords.length
    ? sortedRecords
        .map(record => {

const inputKg =
getInputKg(record);

const finishedKg =
getFinishedKg(record);

const lossKg =
getProcessLossKg(record);

const recovery =
getRecoveryPercent(record);

const lossPercent =
getLossPercent(record);


const status =
record.productionStatus ||
          (
inputKg> 0
              ? "COMPLETED"
              : "—"
          );


          return `

<tr>

<td style="padding:9px;border:1px solid #ddd;">
  ${escapeProductionRecordText(
record.date || ""
  )}
</td>

<td style="padding:9px;border:1px solid #ddd;">
  ${escapeProductionRecordText(
getRecordSources(record)
  )}
</td>

<td style="padding:9px;border:1px solid #ddd;">
  ${escapeProductionRecordText(
record.shiftName ||
record.shift ||
      ""
  )}
</td>

<td style="padding:9px;border:1px solid #ddd;">
  ${escapeProductionRecordText(
record.staff ||
      (
Array.isArray(record.staffWorked)
          ? record.staffWorked
              .map(person =>
person.fullName || ""
              )
              .filter(Boolean)
              .join(", ")
          : ""
      )
  )}
</td>

<td style="
  padding:9px;
  border:1px solid #ddd;
text-align:right;
">
  ${inputKg.toFixed(2)}
</td>

<td style="
  padding:9px;
  border:1px solid #ddd;
  min-width:190px;
">
  ${getRecordPoleDetails(record)}
</td>

<td style="
  padding:9px;
  border:1px solid #ddd;
text-align:center;
font-weight:bold;
">
  ${Number(
record.totalPoles || 0
  )}
</td>

<td style="
  padding:9px;
  border:1px solid #ddd;
text-align:right;
">
  ${finishedKg.toFixed(2)}
</td>

<td style="
  padding:9px;
  border:1px solid #ddd;
text-align:right;
">
  ${lossKg.toFixed(2)}
</td>

<td style="
  padding:9px;
  border:1px solid #ddd;
text-align:right;
">
  ${recovery.toFixed(2)}%
</td>

<td style="
  padding:9px;
  border:1px solid #ddd;
text-align:right;
">
  ${lossPercent.toFixed(2)}%
</td>

<td style="
  padding:9px;
  border:1px solid #ddd;
text-align:center;
font-weight:bold;
">
  ${escapeProductionRecordText(status)}
</td>

</tr>

          `;

        })
        .join("")
    : `

<tr>
<td
colspan="12"
  style="
    padding:18px;
text-align:center;
    border:1px solid #ddd;
    color:#666;
  "
>
  No production records found.
</td>
</tr>

      `;


modal.innerHTML = `

<div style="
background:white;
      width:97%;
      max-width:1500px;
      max-height:92vh;
overflow:auto;
      padding:22px;
      border-radius:12px;
      box-shadow:0 12px 35px rgba(0,0,0,0.25);
    ">

<div style="
display:flex;
justify-content:space-between;
align-items:center;
      gap:15px;
      margin-bottom:16px;
    ">

<div>

<h2 style="
          margin:0;
          color:#0b5d3b;
        ">
          Production Records
</h2>

<div style="
          margin-top:5px;
          color:#666;
          font-size:13px;
        ">
          Production traceability from KB / KBW input
          to finished poles, recovery and process loss.
</div>

</div>


<button
        id="closeProductionRecords"
        type="button"
        style="
          padding:9px 16px;
          border:1px solid #ccc;
          border-radius:7px;
background:white;
cursor:pointer;
        "
>
        Close
</button>

</div>


<div style="overflow-x:auto;">

<table style="
        width:100%;
border-collapse:collapse;
        min-width:1350px;
        font-size:13px;
      ">

<thead>

<tr style="
        background:#0b5d3b;
color:white;
      ">

<th style="padding:10px;border:1px solid #ddd;">
          Date
</th>

<th style="padding:10px;border:1px solid #ddd;">
          KBW / KB Source
</th>

<th style="padding:10px;border:1px solid #ddd;">
          Shift
</th>

<th style="padding:10px;border:1px solid #ddd;">
          Staff
</th>

<th style="padding:10px;border:1px solid #ddd;">
Kavera Input KG
</th>

<th style="padding:10px;border:1px solid #ddd;">
          Pole Production
</th>

<th style="padding:10px;border:1px solid #ddd;">
          Total Poles
</th>

<th style="padding:10px;border:1px solid #ddd;">
          Finished KG
</th>

<th style="padding:10px;border:1px solid #ddd;">
          Process Loss KG
</th>

<th style="padding:10px;border:1px solid #ddd;">
          Recovery %
</th>

<th style="padding:10px;border:1px solid #ddd;">
          Loss %
</th>

<th style="padding:10px;border:1px solid #ddd;">
          Status
</th>

</tr>

</thead>


<tbody>
        ${rowsHtml}
</tbody>

</table>

</div>

</div>
  `;


document.body.appendChild(modal);


modal.querySelector(
    "#closeProductionRecords"
  ).onclick = function () {

modal.remove();
  };
}
/* =========================================================
   MASTER KB BATCH SUMMARY
   ========================================================= */

function viewMasterBatchSummary() {

const materialRecords = JSON.parse(
localStorage.getItem("materialRecords") || "[]"
  );

const washingRecords =
typeof getWashingShiftRecords === "function"
      ? getWashingShiftRecords()
      : JSON.parse(
localStorage.getItem("washingShiftRecords") || "[]"
        );

const productionRecords = JSON.parse(
localStorage.getItem("productionRecords") || "[]"
  );


  function esc(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function roundKg(value) {
    return Math.round(
      (Number(value || 0) + Number.EPSILON) * 100
    ) / 100;
  }


const poleCategories = [
    ["pole3X3X6Square", '3"x3"x6ft Square'],
    ["pole3X3X6_5Square", '3"x3"x6.5ft Square'],
    ["pole4X4X6Square", '4"x4"x6ft Square'],
    ["pole4X4X7Square", '4"x4"x7ft Square'],
    ["pole3x6Round", '3" Round x 6ft'],
    ["pole4x7Round", '4" Round x 7ft'],
    ["pole3X3X2Square", '3"x3"x2ft Square'],
    ["pole4x4X2Square", '4"x4"x2ft Square'],
    ["pole4x2Round", '4" Round x 2ft']
  ];


const companyBatches =
materialRecords.filter(record => {

const batchNumber =
        String(record.batchNumber || "");

      return (
        /^KB\d+$/i.test(batchNumber) &&
        String(record.materialSource || "")
          .toLowerCase() !== "client"
      );
    });


const summaries =
companyBatches.map(batch => {

const batchNumber =
        String(batch.batchNumber || "");


const originalBatchKg =
        Number(
batch.openingBatchKg ??
batch.netWeight ??
batch.grossWeight ??
          0
        );


const batchWashingRecords =
washingRecords.filter(record =>
          String(record.batchNumber || "") ===
batchNumber&&
          (
            String(record.targetStatus || "")
              .toUpperCase() === "COMPLETED" ||
record.washingComplete === true
          )
        );


const totalWashedKg =
batchWashingRecords.reduce(
          (total, record) =>
            total +
            Number(record.actualWashedKg || 0),
          0
        );


const kbAwaitingWashingKg =
Math.max(
          Number(
batch.batchBalanceKg ??
            (
originalBatchKg -
totalWashedKg
            )
          ),
          0
        );


const kbwNumbers =
        new Set(
batchWashingRecords
            .map(record =>
              String(
record.washingSubBatchNumber ||
record.cycleNumber ||
                ""
              )
            )
            .filter(value =>
              /^KBW\d+$/i.test(value)
            )
        );


      let productionInputKg = 0;
      let finishedPoleKg = 0;
      let totalPoles = 0;

const poleTotals = {};


productionRecords.forEach(record => {

const sources =
Array.isArray(record.washedSources)
            ? record.washedSources
            : [];


const sourceKgForBatch =
sources.reduce(
            (total, source) => {

const sourceBatch =
                String(
source.sourceBatchNumber || ""
                );

const sourceKbw =
                String(
source.washingSubBatchNumber ||
source.subBatchNumber ||
source.cycleNumber ||
                  ""
                );


const belongsToBatch =
sourceBatch === batchNumber ||
kbwNumbers.has(sourceKbw);


              return belongsToBatch
                ? total +
                  Number(source.kgUsed || 0)
                : total;
            },
            0
          );


        if (sourceKgForBatch<= 0) {
          return;
        }


productionInputKg +=
sourceKgForBatch;


const recordInputKg =
          Number(record.productionInputKg || 0);

const recordFinishedKg =
          Number(record.productionWeight || 0);


const batchShare =
recordInputKg> 0
            ? Math.min(
sourceKgForBatch / recordInputKg,
                1
              )
            : 0;


finishedPoleKg +=
recordFinishedKg *
batchShare;


const entries =
Array.isArray(record.poleEntries)
            ? record.poleEntries
            : [];


        if (entries.length) {

entries.forEach(entry => {

const quantity =
              Number(entry.quantity || 0) *
batchShare;

            if (quantity <= 0) {
              return;
            }

const key =
              String(
entry.key ||
entry.name ||
                "pole"
              );

const name =
              String(
entry.name ||
entry.key ||
                "Pole"
              );

            if (!poleTotals[key]) {
poleTotals[key] = {
                name: name,
                quantity: 0
              };
            }

poleTotals[key].quantity +=
              quantity;
          });

        } else {

poleCategories.forEach(item => {

const key = item[0];
const name = item[1];

const quantity =
              Number(record[key] || 0) *
batchShare;

            if (quantity <= 0) {
              return;
            }

            if (!poleTotals[key]) {
poleTotals[key] = {
                name: name,
                quantity: 0
              };
            }

poleTotals[key].quantity +=
              quantity;
          });
        }
      });


Object.values(poleTotals)
        .forEach(item => {
totalPoles +=
            Number(item.quantity || 0);
        });


const processLossKg =
Math.max(
productionInputKg -
finishedPoleKg,
          0
        );


const recoveryPercent =
productionInputKg> 0
          ? (
finishedPoleKg /
productionInputKg
            ) * 100
          : 0;


const lossPercent =
productionInputKg> 0
          ? (
processLossKg /
productionInputKg
            ) * 100
          : 0;


const kbwAwaitingProductionKg =
Math.max(
totalWashedKg -
productionInputKg,
          0
        );


const poleDetails =
Object.values(poleTotals)
          .filter(item =>
            Number(item.quantity || 0) > 0
          )
          .map(item =>
            esc(item.name) +
            " × " +
roundKg(item.quantity)
          )
          .join("<br>") || "—";


      let status = "NOT STARTED";


      if (
kbAwaitingWashingKg<= 0.01 &&
kbwAwaitingProductionKg<= 0.01 &&
totalWashedKg> 0
      ) {
        status = "BATCH COMPLETE";
      } else if (
productionInputKg> 0
      ) {
        status = "IN PRODUCTION";
      } else if (
totalWashedKg> 0
      ) {
        status = "WASHING / AWAITING PRODUCTION";
      } else if (
originalBatchKg> 0
      ) {
        status = "AWAITING WASHING";
      }


      return {
batchNumber,
originalBatchKg:
roundKg(originalBatchKg),
totalWashedKg:
roundKg(totalWashedKg),
kbAwaitingWashingKg:
roundKg(kbAwaitingWashingKg),
productionInputKg:
roundKg(productionInputKg),
kbwAwaitingProductionKg:
roundKg(kbwAwaitingProductionKg),
totalPoles:
roundKg(totalPoles),
finishedPoleKg:
roundKg(finishedPoleKg),
processLossKg:
roundKg(processLossKg),
recoveryPercent:
roundKg(recoveryPercent),
lossPercent:
roundKg(lossPercent),
poleDetails,
        status
      };
    });


summaries.sort((a, b) =>
    String(a.batchNumber)
      .localeCompare(
        String(b.batchNumber),
        undefined,
        {
          numeric: true,
          sensitivity: "base"
        }
      )
  );


const rowsHtml =
summaries.length
      ? summaries.map(summary => `

<tr>

<td>${esc(summary.batchNumber)}</td>

<td style="text-align:right;">
  ${summary.originalBatchKg.toFixed(2)}
</td>

<td style="text-align:right;">
  ${summary.totalWashedKg.toFixed(2)}
</td>

<td style="text-align:right;">
  ${summary.kbAwaitingWashingKg.toFixed(2)}
</td>

<td style="text-align:right;">
  ${summary.productionInputKg.toFixed(2)}
</td>

<td style="text-align:right;">
  ${summary.kbwAwaitingProductionKg.toFixed(2)}
</td>

<td style="min-width:190px;">
  ${summary.poleDetails}
</td>

<td style="
text-align:center;
font-weight:bold;
">
  ${summary.totalPoles}
</td>

<td style="text-align:right;">
  ${summary.finishedPoleKg.toFixed(2)}
</td>

<td style="text-align:right;">
  ${summary.processLossKg.toFixed(2)}
</td>

<td style="text-align:right;">
  ${summary.recoveryPercent.toFixed(2)}%
</td>

<td style="text-align:right;">
  ${summary.lossPercent.toFixed(2)}%
</td>

<td style="
text-align:center;
font-weight:bold;
">
  ${esc(summary.status)}
</td>

</tr>

      `).join("")
      : `

<tr>
<td
colspan="13"
  style="
    padding:20px;
text-align:center;
    color:#666;
  "
>
  No company KB batches found.
</td>
</tr>

      `;


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
    padding:10px;
font-family:Arial,sans-serif;
  `;


modal.innerHTML = `

<div style="
background:white;
  width:98%;
  max-width:1550px;
  max-height:94vh;
overflow:auto;
  border-radius:14px;
  padding:22px;
  box-shadow:0 12px 35px rgba(0,0,0,.28);
">

<div style="
display:flex;
justify-content:space-between;
align-items:flex-start;
  gap:15px;
  margin-bottom:16px;
">

<div>

<h2 style="
  margin:0;
  color:#0b5d3b;
">
  KB Master Batch Summary
</h2>

<div style="
  margin-top:6px;
  color:#666;
  font-size:13px;
  line-height:1.45;
">
  Complete traceability from original KB batch
  through washing, KBW production input,
  finished poles, recovery and process loss.
</div>

</div>

<button
  id="closeMasterBatchSummary"
  type="button"
  style="
    padding:9px 16px;
    border:1px solid #ccc;
    border-radius:7px;
background:white;
cursor:pointer;
  "
>
  Close
</button>

</div>


<div style="
  background:#eef7f2;
  border:1px solid #cfe4d8;
  border-radius:9px;
  padding:11px 13px;
  margin-bottom:15px;
  font-size:13px;
  line-height:1.5;
">

<b>Stock interpretation:</b>
KB Awaiting Washing is material still in the original
master batch. KBW Awaiting Production is material already
processed through washing but not yet taken into production.
Neither is counted as production loss.

</div>


<div style="overflow-x:auto;">

<table
  id="masterBatchSummaryTable"
  style="
    width:100%;
    min-width:1250px;
border-collapse:collapse;
    font-size:12px;
  "
>

<thead>

<tr style="
  background:#0b5d3b;
color:white;
">

<th>KB Batch</th>
<th>Original Batch KG</th>
<th>Processed Through Washing KG</th>
<th>KB Awaiting Washing KG</th>
<th>KBW Used in Production KG</th>
<th>KBW Awaiting Production KG</th>
<th>Pole Production</th>
<th>Total Poles</th>
<th>Finished Pole KG</th>
<th>Process Loss KG</th>
<th>Recovery %</th>
<th>Loss %</th>
<th>Batch Status</th>

</tr>

</thead>

<tbody>
  ${rowsHtml}
</tbody>

</table>

</div>

</div>
  `;


modal.querySelectorAll(
    "#masterBatchSummaryTableth"
  ).forEach(cell => {

cell.style.padding = "6px 5px";
cell.style.border =
      "1px solid #d8e1dc";
cell.style.whiteSpace = "normal";
cell.style.lineHeight = "1.2";
  });


modal.querySelectorAll(
    "#masterBatchSummaryTable td"
  ).forEach(cell => {

cell.style.padding = "6px 5px";
cell.style.border =
      "1px solid #ddd";
cell.style.verticalAlign = "top";
cell.style.lineHeight = "1.25";
  });


document.body.appendChild(modal);


modal.querySelector(
    "#closeMasterBatchSummary"
  ).onclick = function () {

modal.remove();
  };
}
/* =========================================================
   KB PURCHASE & RECOVERY ANALYSIS
   ========================================================= */

function viewPurchaseRecoveryAnalysis() {

const materialRecords = JSON.parse(
localStorage.getItem("materialRecords") || "[]"
  );

const washingRecords =
typeof getWashingShiftRecords === "function"
      ? getWashingShiftRecords()
      : JSON.parse(
localStorage.getItem("washingShiftRecords") || "[]"
        );

const productionRecords = JSON.parse(
localStorage.getItem("productionRecords") || "[]"
  );


  function esc(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function round2(value) {
    return Math.round(
      (Number(value || 0) + Number.EPSILON) * 100
    ) / 100;
  }


const companyBatches = materialRecords.filter(record => {

const batchNumber =
      String(record.batchNumber || "");

    return (
      /^KB\d+$/i.test(batchNumber) &&
      String(record.materialSource || "")
        .toLowerCase() !== "client"
    );
  });


const summaries = companyBatches.map(batch => {

const batchNumber =
      String(batch.batchNumber || "");


const grossPurchasedKg =
      Number(
batch.grossWeight ??
batch.openingBatchKg ??
batch.netWeight ??
        0
      );


const netPaidKg =
      Number(
batch.netWeight ??
batch.openingBatchKg ??
grossPurchasedKg
      );


    let deductionKg =
      Number(batch.dirtWeightKg || 0);


    let deductionPercent =
      Number(batch.dirtPercent || 0);


    if (
deductionKg<= 0 &&
grossPurchasedKg>netPaidKg
    ) {
deductionKg =
grossPurchasedKg - netPaidKg;
    }


    if (
deductionPercent<= 0 &&
grossPurchasedKg> 0 &&
deductionKg> 0
    ) {
deductionPercent =
        (deductionKg / grossPurchasedKg) * 100;
    }


const batchWashingRecords =
washingRecords.filter(record =>
        String(record.batchNumber || "") ===
batchNumber&&
        (
          String(record.targetStatus || "")
            .toUpperCase() === "COMPLETED" ||
record.washingComplete === true
        )
      );


const processedThroughWashingKg =
batchWashingRecords.reduce(
        (total, record) =>
          total +
          Number(record.actualWashedKg || 0),
        0
      );


const kbAwaitingWashingKg =
Math.max(
        Number(
batch.batchBalanceKg ??
          (
netPaidKg -
processedThroughWashingKg
          )
        ),
        0
      );


const kbwNumbers =
      new Set(
batchWashingRecords
          .map(record =>
            String(
record.washingSubBatchNumber ||
record.cycleNumber ||
              ""
            )
          )
          .filter(value =>
            /^KBW\d+$/i.test(value)
          )
      );


    let productionInputKg = 0;
    let finishedPoleKg = 0;


productionRecords.forEach(record => {

const sources =
Array.isArray(record.washedSources)
          ? record.washedSources
          : [];


const sourceKgForBatch =
sources.reduce(
          (total, source) => {

const sourceBatch =
              String(
source.sourceBatchNumber || ""
              );

const sourceKbw =
              String(
source.washingSubBatchNumber ||
source.subBatchNumber ||
source.cycleNumber ||
                ""
              );


const belongsToBatch =
sourceBatch === batchNumber ||
kbwNumbers.has(sourceKbw);


            return belongsToBatch
              ? total +
                Number(source.kgUsed || 0)
              : total;
          },
          0
        );


      if (sourceKgForBatch<= 0) {
        return;
      }


productionInputKg +=
sourceKgForBatch;


const recordInputKg =
        Number(record.productionInputKg || 0);

const recordFinishedKg =
        Number(record.productionWeight || 0);


const batchShare =
recordInputKg> 0
          ? Math.min(
sourceKgForBatch / recordInputKg,
              1
            )
          : 0;


finishedPoleKg +=
recordFinishedKg * batchShare;
    });


const kbwAwaitingProductionKg =
Math.max(
processedThroughWashingKg -
productionInputKg,
        0
      );


const batchComplete =
netPaidKg> 0 &&
kbAwaitingWashingKg<= 0.01 &&
kbwAwaitingProductionKg<= 0.01;


    let batchStatus = "AWAITING WASHING";


    if (batchComplete) {

batchStatus = "BATCH COMPLETE";

    } else if (productionInputKg> 0) {

batchStatus = "IN PRODUCTION";

    } else if (processedThroughWashingKg> 0) {

batchStatus =
        "WASHING / AWAITING PRODUCTION";
    }


    let actualTotalLossKg = null;
    let actualLossPercent = null;
    let deductionDifference = null;


    /*
      IMPORTANT:
      Final purchase-to-poles loss is calculated
      ONLY after the entire KB batch has been
      converted into finished poles.
    */

    if (batchComplete) {

actualTotalLossKg =
Math.max(
grossPurchasedKg -
finishedPoleKg,
          0
        );


actualLossPercent =
grossPurchasedKg> 0
          ? (
actualTotalLossKg /
grossPurchasedKg
            ) * 100
          : 0;


deductionDifference =
actualLossPercent -
deductionPercent;
    }


    return {

batchNumber,

grossPurchasedKg:
        round2(grossPurchasedKg),

deductionPercent:
        round2(deductionPercent),

deductionKg:
        round2(deductionKg),

netPaidKg:
        round2(netPaidKg),

finishedPoleKg:
        round2(finishedPoleKg),

actualTotalLossKg:
actualTotalLossKg === null
          ? null
          : round2(actualTotalLossKg),

actualLossPercent:
actualLossPercent === null
          ? null
          : round2(actualLossPercent),

deductionDifference:
deductionDifference === null
          ? null
          : round2(deductionDifference),

batchStatus
    };
  });


summaries.sort((a, b) =>
    String(a.batchNumber)
      .localeCompare(
        String(b.batchNumber),
        undefined,
        {
          numeric: true,
          sensitivity: "base"
        }
      )
  );


const rowsHtml =
summaries.length
      ? summaries.map(summary => {

const completed =
summary.batchStatus ===
            "BATCH COMPLETE";


const lossKgDisplay =
            completed
              ? summary.actualTotalLossKg
                  .toFixed(2)
              : "Pending Batch Completion";


const lossPercentDisplay =
            completed
              ? summary.actualLossPercent
                  .toFixed(2) + "%"
              : "Pending Batch Completion";


          let differenceDisplay =
            "Pending Batch Completion";


          if (completed) {

const difference =
summary.deductionDifference;

differenceDisplay =
              (
                difference > 0
                  ? "+"
                  : ""
              ) +
difference.toFixed(2) +
              "%";
          }


          return `

<tr>

<td style="font-weight:bold;">
  ${esc(summary.batchNumber)}
</td>

<td style="text-align:right;">
  ${summary.grossPurchasedKg.toFixed(2)}
</td>

<td style="text-align:right;">
  ${summary.deductionPercent.toFixed(2)}%
</td>

<td style="text-align:right;">
  ${summary.deductionKg.toFixed(2)}
</td>

<td style="text-align:right;">
  ${summary.netPaidKg.toFixed(2)}
</td>

<td style="text-align:right;">
  ${summary.finishedPoleKg.toFixed(2)}
</td>

<td style="
text-align:right;
  ${completed ? "" : "color:#777;"}
">
  ${lossKgDisplay}
</td>

<td style="
text-align:right;
  ${completed ? "" : "color:#777;"}
">
  ${lossPercentDisplay}
</td>

<td style="
text-align:center;
font-weight:bold;
  ${completed ? "" : "color:#777;"}
">
  ${differenceDisplay}
</td>

<td style="
text-align:center;
font-weight:bold;
">
  ${esc(summary.batchStatus)}
</td>

</tr>

          `;
        }).join("")
      : `

<tr>

<td
colspan="10"
  style="
    padding:20px;
text-align:center;
    color:#666;
  "
>
  No company KB batches found.
</td>

</tr>

      `;


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
    padding:10px;
font-family:Arial,sans-serif;
  `;


modal.innerHTML = `

<div style="
background:white;
  width:98%;
  max-width:1450px;
  max-height:94vh;
overflow:auto;
  border-radius:14px;
  padding:22px;
  box-shadow:0 12px 35px rgba(0,0,0,.28);
">

<div style="
display:flex;
justify-content:space-between;
align-items:flex-start;
  gap:15px;
  margin-bottom:16px;
">

<div>

<h2 style="
  margin:0;
  color:#0b5d3b;
">
  KB Purchase vs Actual Recovery Analysis
</h2>

<div style="
  margin-top:6px;
  color:#666;
  font-size:13px;
  line-height:1.45;
">
  Comparison of the deduction made before
  purchasing with the actual final loss after
  the entire KB batch has been converted into poles.
</div>

</div>


<button
  id="closePurchaseRecoveryAnalysis"
  type="button"
  style="
    padding:9px 16px;
    border:1px solid #ccc;
    border-radius:7px;
background:white;
cursor:pointer;
  "
>
  Close
</button>

</div>


<div style="
  background:#eef7f2;
  border:1px solid #cfe4d8;
  border-radius:9px;
  padding:11px 13px;
  margin-bottom:15px;
  font-size:13px;
  line-height:1.5;
">

<b>Final-loss rule:</b>
Actual Total Loss KG, Actual Loss % and
Deduction Difference are calculated only when
the whole KB batch has been processed into finished poles.
Incomplete batches remain
<b>Pending Batch Completion</b>.

</div>


<div style="overflow-x:auto;">

<table
  id="purchaseRecoveryAnalysisTable"
  style="
    width:100%;
    min-width:1150px;
border-collapse:collapse;
    font-size:12px;
  "
>

<thead>

<tr style="
  background:#0b5d3b;
color:white;
">

<th>KB Batch</th>
<th>Gross Purchased KG</th>
<th>Deduction %</th>
<th>Deducted KG</th>
<th>Net Paid KG</th>
<th>Finished Pole KG</th>
<th>Actual Total Loss KG</th>
<th>Actual Loss %</th>
<th>Deduction Difference (%)</th>
<th>Batch Status</th>

</tr>

</thead>


<tbody>
  ${rowsHtml}
</tbody>

</table>

</div>

</div>
  `;


modal.querySelectorAll(
    "#purchaseRecoveryAnalysisTableth"
  ).forEach(cell => {

cell.style.padding = "7px 6px";
cell.style.border =
      "1px solid #d8e1dc";
cell.style.whiteSpace = "normal";
cell.style.lineHeight = "1.2";
  });


modal.querySelectorAll(
    "#purchaseRecoveryAnalysisTable td"
  ).forEach(cell => {

cell.style.padding = "7px 6px";
cell.style.border =
      "1px solid #ddd";
cell.style.verticalAlign = "top";
cell.style.lineHeight = "1.25";
  });


document.body.appendChild(modal);


modal.querySelector(
    "#closePurchaseRecoveryAnalysis"
  ).onclick = function () {

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
/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

function openAFMobileMenu() {

document.body.classList.add(
    "mobile-menu-open"
  );
}


function closeAFMobileMenu() {

document.body.classList.remove(
    "mobile-menu-open"
  );
}

/* =========================================================
   A&F LIVE DIRECTOR DASHBOARD
   Real Material → Washing → Production figures
   ========================================================= */

function refreshAFDirectorDashboard() {

const currentUser =
typeof getAFCurrentUser === "function"
      ? getAFCurrentUser()
      : JSON.parse(
localStorage.getItem("currentUser") || "null"
        );

  if (
    !currentUser ||
currentUser.role !== "Director"
  ) {
    return;
  }


  /* =======================================================
     READ REAL SAVED DATA
     ======================================================= */

const materialRecords =
JSON.parse(
localStorage.getItem("materialRecords") || "[]"
    );

const washingRecords =
typeof getWashingShiftRecords === "function"
      ? getWashingShiftRecords()
      : JSON.parse(
localStorage.getItem("washingShiftRecords") || "[]"
        );

const productionRecords =
JSON.parse(
localStorage.getItem("productionRecords") || "[]"
    );


  /* =======================================================
     HELPERS
     ======================================================= */

  function number(value) {
    return Number(value || 0);
  }


  function formatKg(value) {

    return number(value).toLocaleString(
      undefined,
      {
minimumFractionDigits: 0,
maximumFractionDigits: 2
      }
    ) + " kg";
  }


  function formatNumber(value) {

    return number(value).toLocaleString(
      undefined,
      {
minimumFractionDigits: 0,
maximumFractionDigits: 2
      }
    );
  }


  function percent(value, total) {

const actual =
      number(value);

const target =
      number(total);

    if (target <= 0) {
      return "—";
    }

    return (
      (
        actual /
        target
      ) * 100
    ).toFixed(1) + "%";
  }


  /* =======================================================
     COMPANY MATERIAL ONLY
     Exclude client-owned washing material.
     ======================================================= */

const companyMaterials =
materialRecords.filter(record =>
      String(
record.materialSource || ""
      ).toLowerCase() !== "client" &&
      /^KB\d+$/i.test(
        String(record.batchNumber || "")
      )
    );


  /* =======================================================
     PURCHASE TOTALS
     ======================================================= */

const grossReceivedKg =
companyMaterials.reduce(
      (total, record) =>
        total +
        number(record.grossWeight),
      0
    );


const netUsableKg =
companyMaterials.reduce(
      (total, record) =>
        total +
        number(
record.openingBatchKg ??
record.netWeight ??
record.grossWeight
        ),
      0
    );


const kbAwaitingWashingKg =
companyMaterials.reduce(
      (total, record) =>
        total +
Math.max(
          number(
record.batchBalanceKg ??
record.openingBatchKg ??
record.netWeight ??
            0
          ),
          0
        ),
      0
    );


const openKbBatches =
companyMaterials.filter(record =>
      number(
record.batchBalanceKg ??
record.openingBatchKg ??
record.netWeight ??
        0
      ) > 0.01
    ).length;


  /* =======================================================
     COMPANY WASHING RECORDS
     ======================================================= */

const companyBatchNumbers =
    new Set(
companyMaterials.map(record =>
        String(record.batchNumber || "")
      )
    );


const completedCompanyWashing =
washingRecords.filter(record => {

const completed =
        String(
record.targetStatus || ""
        ).toUpperCase() === "COMPLETED" ||
record.washingComplete === true;

const notCancelled =
        String(
record.status || ""
        ).toUpperCase() !== "CANCELLED";

const companyBatch =
companyBatchNumbers.has(
          String(record.batchNumber || "")
        );

      return (
        completed &&
notCancelled&&
companyBatch
      );
    });


  /*
   * IMPORTANT:
   * This is the pre-wash KG processed through washing.
   * Kavera is not weighed again after washing.
   */

const processedThroughWashingKg =
completedCompanyWashing.reduce(
      (total, record) =>
        total +
        number(record.actualWashedKg),
      0
    );


  /* =======================================================
     PRODUCTION INPUT
     ======================================================= */

const productionInputKg =
productionRecords.reduce(
      (total, record) =>
        total +
        number(record.productionInputKg),
      0
    );


const kbwAwaitingProductionKg =
Math.max(
processedThroughWashingKg -
productionInputKg,
      0
    );


  /* =======================================================
     FINISHED POLES
     ======================================================= */

const totalPolesProduced =
productionRecords.reduce(
      (total, record) =>
        total +
        number(record.totalPoles),
      0
    );


const finishedPoleKg =
productionRecords.reduce(
      (total, record) =>
        total +
        number(record.productionWeight),
      0
    );


const productionLossKg =
Math.max(
productionInputKg -
finishedPoleKg,
      0
    );


const recoveryPercent =
productionInputKg> 0
      ? (
finishedPoleKg /
productionInputKg
        ) * 100
      : 0;


const lossPercent =
productionInputKg> 0
      ? (
productionLossKg /
productionInputKg
        ) * 100
      : 0;


  /* =======================================================
     REBUILD LIVE KPI AREA
     ======================================================= */

const kpiArea =
document.getElementById("factoryKpis");


  if (kpiArea) {

kpiArea.style.display = "";

kpiArea.style.gridTemplateColumns =
      "repeat(auto-fit,minmax(165px,1fr))";


kpiArea.innerHTML = `

<div class="card">

<div class="kt">
Kavera Purchased
</div>

<div class="kv">
    ${formatKg(grossReceivedKg)}
</div>

<div class="note">
    Gross company purchases
</div>

</div>


<div class="card">

<div class="kt">
    Net Usable Material
</div>

<div class="kv">
    ${formatKg(netUsableKg)}
</div>

<div class="note">
    After purchase deduction
</div>

</div>


<div class="card">

<div class="kt">
    Processed Through Washing
</div>

<div class="kv">
    ${formatKg(processedThroughWashingKg)}
</div>

<div class="note">
    Pre-wash KG processed
</div>

</div>


<div class="card">

<div class="kt">
    KB Awaiting Washing
</div>

<div class="kv">
    ${formatKg(kbAwaitingWashingKg)}
</div>

<div class="note">
    ${openKbBatches} open KB batch(es)
</div>

</div>


<div class="card">

<div class="kt">
    KBW Awaiting Production
</div>

<div class="kv">
    ${formatKg(kbwAwaitingProductionKg)}
</div>

<div class="note">
    Processed material not yet used
</div>

</div>


<div class="card">

<div class="kt">
    Poles Produced
</div>

<div class="kv">
    ${formatNumber(totalPolesProduced)}
</div>

<div class="note">
    ${formatKg(finishedPoleKg)} finished
</div>

</div>


<div class="card">

<div class="kt">
    Finished Pole Weight
</div>

<div class="kv">
    ${formatKg(finishedPoleKg)}
</div>

<div class="note">
    Actual finished production
</div>

</div>


<div class="card">

<div class="kt">
    Production Recovery
</div>

<div class="kv">
    ${recoveryPercent.toFixed(1)}%
</div>

<div class="note">
    Loss ${lossPercent.toFixed(1)}%
</div>

</div>

    `;
  }


  /* =======================================================
     REBUILD OPERATIONS OVERVIEW
     No invented targets.
     Targets will be connected later to Director Targets.
     ======================================================= */

const operations =
document.getElementById(
      "operationsOverview"
    );


  if (operations) {

operations.innerHTML = `

<div class="title">
  Operations Overview
</div>

<div class="sub"
     style="margin-bottom:14px;">
  Live company material and production position
</div>


<table>

<thead>

<tr>

<th>
  Activity
</th>

<th style="text-align:right;">
  Actual
</th>

<th>
  Position
</th>

</tr>

</thead>


<tbody>

<tr>

<td>
  Gross Kavera Purchased
</td>

<td style="text-align:right;font-weight:bold;">
  ${formatKg(grossReceivedKg)}
</td>

<td>
  Purchase records
</td>

</tr>


<tr>

<td>
  Net Usable Material
</td>

<td style="text-align:right;font-weight:bold;">
  ${formatKg(netUsableKg)}
</td>

<td>
  After purchase deduction
</td>

</tr>


<tr>

<td>
  Processed Through Washing
</td>

<td style="text-align:right;font-weight:bold;">
  ${formatKg(processedThroughWashingKg)}
</td>

<td>
  KB → KBW
</td>

</tr>


<tr>

<td>
  KB Awaiting Washing
</td>

<td style="text-align:right;font-weight:bold;">
  ${formatKg(kbAwaitingWashingKg)}
</td>

<td>
  ${openKbBatches} open batch(es)
</td>

</tr>


<tr>

<td>
  KBW Awaiting Production
</td>

<td style="text-align:right;font-weight:bold;">
  ${formatKg(kbwAwaitingProductionKg)}
</td>

<td>
  Available for production
</td>

</tr>


<tr>

<td>
  KBW Used In Production
</td>

<td style="text-align:right;font-weight:bold;">
  ${formatKg(productionInputKg)}
</td>

<td>
  Production input
</td>

</tr>


<tr>

<td>
  Finished Poles
</td>

<td style="text-align:right;font-weight:bold;">
  ${formatNumber(totalPolesProduced)}
</td>

<td>
  ${formatKg(finishedPoleKg)}
</td>

</tr>


<tr>

<td>
  Production Process Loss
</td>

<td style="text-align:right;font-weight:bold;">
  ${formatKg(productionLossKg)}
</td>

<td>
  ${lossPercent.toFixed(2)}% loss
</td>

</tr>


<tr>

<td>
  Production Recovery
</td>

<td style="text-align:right;font-weight:bold;">
  ${recoveryPercent.toFixed(2)}%
</td>

<td>
  Finished KG ÷ production input KG
</td>

</tr>

</tbody>

</table>


<div style="
  margin-top:16px;
  padding:11px 13px;
  background:#eef8f2;
  border:1px solid #cfe6d8;
  border-radius:8px;
  color:#0b5d3b;
  font-size:12px;
  line-height:1.5;
">

<b>Live accounting:</b>
KB Awaiting Washing and KBW Awaiting Production
are stock positions and are not treated as loss.
Production loss is calculated only from material
actually taken into pole production.

</div>

    `;
  }


  /* =======================================================
     KEEP WORKING DASHBOARD FEATURES UPDATED
     ======================================================= */

  if (
typeof refreshAFDashboardBirthdays ===
    "function"
  ) {
refreshAFDashboardBirthdays();
  }

}


/* =========================================================
   CONNECT LIVE DIRECTOR DASHBOARD TO EXISTING ROLE SYSTEM
   without replacing the working role controller
   ========================================================= */

(function connectAFDirectorDashboard() {

  if (
typeof applyAFRoleDashboard !==
    "function"
  ) {
    return;
  }


const originalApplyAFRoleDashboard =
applyAFRoleDashboard;


applyAFRoleDashboard = function () {

const result =
originalApplyAFRoleDashboard.apply(
        this,
        arguments
      );


    if (
typeof getAFCurrentRole ===
        "function" &&
getAFCurrentRole() === "Director"
    ) {

refreshAFDirectorDashboard();
    }


    return result;
  };

})();

/* =========================================================
   A&F QUALITY & DISCIPLINE WEEKLY ASSESSMENT
   Manager assesses staff
   Director assesses Manager
   Printable hard-copy form
   ========================================================= */

function getAFQualityDisciplineRecords() {
  return JSON.parse(
localStorage.getItem("afQualityDisciplineRecords") || "[]"
  );
}


function saveAFQualityDisciplineRecords(records) {
localStorage.setItem(
    "afQualityDisciplineRecords",
JSON.stringify(records)
  );
}


function openAFQualityDisciplineAssessment() {

const currentUser =
typeof getAFCurrentUser === "function"
      ? getAFCurrentUser()
      : JSON.parse(
localStorage.getItem("currentUser") || "null"
        );

  if (
    !currentUser ||
    !["Manager", "Director"].includes(currentUser.role)
  ) {
    alert(
      "Access Denied\n\n" +
      "Quality & Discipline assessment can only be recorded by the Manager or Director."
    );
    return;
  }


const allEmployees =
typeof getEmployees === "function"
      ? getEmployees()
      : JSON.parse(
localStorage.getItem("employees") || "[]"
        );


const teams =
typeof getTeams === "function"
      ? getTeams()
      : JSON.parse(
localStorage.getItem("factoryTeams") || "[]"
        );


const activeEmployees =
allEmployees.filter(employee => {

const active =
        String(
employee.employmentStatus || ""
        ).toLowerCase() === "active";

      if (!active) {
        return false;
      }

      /*
       * Nobody assesses himself.
       */
      if (
        String(employee.employeeId) ===
        String(currentUser.employeeId)
      ) {
        return false;
      }

      /*
       * Manager assesses staff,
       * but cannot assess another Manager.
       */
      if (currentUser.role === "Manager") {
        return String(employee.role || "") !== "Manager";
      }

      /*
       * Director uses this form to assess Manager.
       */
      if (currentUser.role === "Director") {
        return String(employee.role || "") === "Manager";
      }

      return false;
    });


  if (!activeEmployees.length) {
    alert(
currentUser.role === "Director"
        ? "There is no active Manager available for assessment."
        : "There are no active employees available for assessment."
    );
    return;
  }


  function escapeQD(value) {
const div = document.createElement("div");
div.textContent = String(value ?? "");
    return div.innerHTML;
  }


  function getEmployeeTeam(employeeId) {

    return teams.find(team => {

      if (
        String(team.status || "").toLowerCase() !== "active"
      ) {
        return false;
      }

      if (
        String(team.leaderEmployeeId || "") ===
        String(employeeId)
      ) {
        return true;
      }

      return (
Array.isArray(team.memberEmployeeIds) &&
team.memberEmployeeIds.some(
          id => String(id) === String(employeeId)
        )
      );
    }) || null;
  }


  function getEmployeePosition(employee) {

    return (
employee.position ||
employee.jobTitle ||
employee.designation ||
employee.role ||
      ""
    );
  }


  function getWeekStart(dateString) {

const date =
      new Date(dateString + "T00:00:00");

const day =
date.getDay();

const difference =
      day === 0
        ? -6
        : 1 - day;

date.setDate(
date.getDate() + difference
    );

    return date
      .toISOString()
      .slice(0, 10);
  }


  function getWeekEnd(weekStart) {

const date =
      new Date(weekStart + "T00:00:00");

date.setDate(
date.getDate() + 6
    );

    return date
      .toISOString()
      .slice(0, 10);
  }


  function readableDate(dateString) {

    if (!dateString) {
      return "";
    }

    return new Date(
dateString + "T00:00:00"
    ).toLocaleDateString(
      undefined,
      {
        day: "numeric",
        month: "short",
        year: "numeric"
      }
    );
  }


const criteria = [
    {
      key: "qualityOfWork",
      label: "Quality of Work / Workmanship"
    },
    {
      key: "instructions",
      label: "Follows Work Instructions & Procedures"
    },
    {
      key: "equipmentCare",
      label: "Care of Machines, Tools & Company Property"
    },
    {
      key: "safety",
      label: "Safety Procedures / PPE Compliance"
    },
    {
      key: "cleanliness",
      label: "Cleanliness of Work Area"
    },
    {
      key: "teamwork",
      label: "Teamwork & Cooperation"
    },
    {
      key: "initiative",
      label: "Initiative / Willingness to Work"
    },
    {
      key: "discipline",
      label: "Discipline & Respect"
    },
    {
      key: "responsibility",
      label: "Responsibility / Works Without Unnecessary Supervision"
    },
    {
      key: "materialHandling",
      label: "Proper Material Handling / Avoiding Unnecessary Waste"
    }
  ];


const modal =
document.createElement("div");

modal.id =
    "afQualityDisciplineModal";

modal.style.cssText = `
position:fixed;
    inset:0;
    z-index:100000;
background:rgba(0,0,0,.58);
display:flex;
align-items:center;
justify-content:center;
    padding:10px;
font-family:Arial,sans-serif;
  `;


modal.innerHTML = `

<div style="
  width:1000px;
  max-width:98%;
  max-height:96vh;
overflow:auto;
background:white;
  border-radius:15px;
  box-shadow:0 12px 40px rgba(0,0,0,.3);
">

<div style="
  background:#0b5d3b;
color:white;
  padding:20px 24px;
display:flex;
justify-content:space-between;
align-items:center;
  gap:15px;
">

<div>
<div style="
    font-size:12px;
    letter-spacing:1.4px;
font-weight:bold;
    opacity:.85;
  ">
    A&F WEKAVERA LTD • WASTE2WEALTH SOLUTIONS
</div>

<h2 style="
    margin:5px 0 0;
    font-size:23px;
  ">
    Employee Quality & Discipline
</h2>

<div style="
    margin-top:4px;
    font-size:13px;
    opacity:.9;
  ">
    Weekly Performance Assessment
</div>
</div>

<button
  id="closeQDForm"
  type="button"
  style="
    border:0;
background:white;
    color:#0b5d3b;
    padding:9px 14px;
    border-radius:7px;
cursor:pointer;
font-weight:bold;
  "
>
✕ Close
</button>

</div>


<div style="padding:22px;">

<div style="
  background:#eef8f2;
  border:1px solid #cfe6d8;
  padding:12px;
  border-radius:9px;
  margin-bottom:18px;
  font-size:13px;
  line-height:1.5;
">

<b>Assessment Authority:</b>
${
currentUser.role === "Manager"
    ? "Manager assesses active employees. The Manager cannot assess himself."
    : "Director assesses the Manager."
}

<br>

Each criterion is scored from
<b>0 to 10</b>.
Total Quality & Discipline score is
<b>100 points</b>.

</div>


<div style="
display:grid;
  grid-template-columns:1fr 150px;
  gap:18px;
  margin-bottom:20px;
">

<div>

<label style="font-weight:bold;">
  Employee Name
</label>

<select
  id="qdEmployee"
  style="
    width:100%;
    padding:11px;
    margin:6px 0 14px;
    border:1px solid #ccc;
    border-radius:7px;
  "
>

<option value="">
  Select Employee
</option>

${activeEmployees
  .sort((a, b) =>
    String(a.fullName || "")
      .localeCompare(
        String(b.fullName || "")
      )
  )
  .map(employee => `
<option value="${escapeQD(employee.employeeId)}">
      ${escapeQD(employee.fullName)}
      • ${escapeQD(employee.employeeId)}
</option>
  `)
  .join("")}

</select>


<div style="
display:grid;
grid-template-columns:repeat(2,1fr);
  gap:10px;
">

<div>
<label style="font-size:12px;color:#666;">
    Employee ID
</label>
<input
    id="qdEmployeeId"
readonly
    style="
      width:100%;
box-sizing:border-box;
      padding:9px;
      background:#f5f7f6;
      border:1px solid #ddd;
      border-radius:6px;
    "
>
</div>


<div>
<label style="font-size:12px;color:#666;">
    Department
</label>
<input
    id="qdDepartment"
readonly
    style="
      width:100%;
box-sizing:border-box;
      padding:9px;
      background:#f5f7f6;
      border:1px solid #ddd;
      border-radius:6px;
    "
>
</div>


<div>
<label style="font-size:12px;color:#666;">
    Position
</label>
<input
    id="qdPosition"
readonly
    style="
      width:100%;
box-sizing:border-box;
      padding:9px;
      background:#f5f7f6;
      border:1px solid #ddd;
      border-radius:6px;
    "
>
</div>


<div>
<label style="font-size:12px;color:#666;">
    Team
</label>
<input
    id="qdTeam"
readonly
    style="
      width:100%;
box-sizing:border-box;
      padding:9px;
      background:#f5f7f6;
      border:1px solid #ddd;
      border-radius:6px;
    "
>
</div>

</div>

</div>


<div style="
  border:1px solid #d9e3de;
  border-radius:9px;
  min-height:170px;
display:flex;
align-items:center;
justify-content:center;
  background:#f7faf8;
overflow:hidden;
">

<div
  id="qdNoPhoto"
  style="
    color:#777;
text-align:center;
    font-size:13px;
  "
>
👤
<br>
  No Photo
</div>

<img
  id="qdEmployeePhoto"
  alt="Employee Photo"
  style="
    width:100%;
    height:170px;
object-fit:cover;
display:none;
  "
>

</div>

</div>


<div style="
display:grid;
  grid-template-columns:1fr 1fr;
  gap:15px;
  margin-bottom:20px;
">

<div>
<label style="font-weight:bold;">
    Assessment Date
</label>

<input
    id="qdAssessmentDate"
    type="date"
    value="${new Date().toISOString().slice(0, 10)}"
    style="
      width:100%;
box-sizing:border-box;
      padding:10px;
      margin-top:6px;
      border:1px solid #ccc;
      border-radius:7px;
    "
>
</div>


<div>
<label style="font-weight:bold;">
    Assessment Week
</label>

<input
    id="qdWeekDisplay"
readonly
    style="
      width:100%;
box-sizing:border-box;
      padding:10px;
      margin-top:6px;
      background:#f5f7f6;
      border:1px solid #ccc;
      border-radius:7px;
    "
>
</div>

</div>


<div style="overflow-x:auto;">

<table
  id="qdScoreTable"
  style="
    width:100%;
    min-width:650px;
border-collapse:collapse;
    font-size:13px;
  "
>

<thead>

<tr style="
  background:#0b5d3b;
color:white;
">

<th style="padding:10px;border:1px solid #ddd;">
  #
</th>

<th style="
  padding:10px;
  border:1px solid #ddd;
text-align:left;
">
  Quality & Discipline Criterion
</th>

<th style="
  padding:10px;
  border:1px solid #ddd;
  width:130px;
">
  Score /10
</th>

</tr>

</thead>

<tbody>

${criteria.map((item, index) => `

<tr>

<td style="
  padding:9px;
  border:1px solid #ddd;
text-align:center;
">
  ${index + 1}
</td>

<td style="
  padding:9px;
  border:1px solid #ddd;
">
  ${escapeQD(item.label)}
</td>

<td style="
  padding:7px;
  border:1px solid #ddd;
text-align:center;
">

<input
  type="number"
  class="qdScore"
  data-key="${item.key}"
  min="0"
  max="10"
  step="1"
  placeholder="0–10"
  style="
    width:80px;
    padding:7px;
text-align:center;
    border:1px solid #aaa;
    border-radius:6px;
  "
>

</td>

</tr>

`).join("")}

<tr style="
  background:#eef8f2;
font-weight:bold;
">

<td
colspan="2"
  style="
    padding:11px;
    border:1px solid #ddd;
text-align:right;
  "
>
  TOTAL QUALITY & DISCIPLINE SCORE
</td>

<td style="
  padding:11px;
  border:1px solid #ddd;
text-align:center;
  color:#0b5d3b;
  font-size:17px;
">
<span id="qdTotalScore">0</span>/100
</td>

</tr>

</tbody>

</table>

</div>


<div style="
  margin-top:14px;
  padding:11px;
  background:#f5f7f6;
  border-radius:7px;
  font-size:12px;
  line-height:1.5;
">

<b>Scoring guide:</b>
0–2 Poor •
3–4 Needs Improvement •
5–6 Satisfactory •
7–8 Good •
9–10 Excellent

</div>


<div style="margin-top:18px;">

<label style="font-weight:bold;">
  Manager / Director Comments
</label>

<textarea
  id="qdComments"
  rows="4"
  placeholder="Enter observations, strengths, concerns or action required..."
  style="
    width:100%;
box-sizing:border-box;
    padding:10px;
    margin-top:6px;
    border:1px solid #ccc;
    border-radius:7px;
resize:vertical;
  "
></textarea>

</div>


<div style="
  margin-top:18px;
  background:#eef8f2;
  padding:13px;
  border-radius:8px;
display:grid;
grid-template-columns:repeat(2,1fr);
  gap:12px;
">

<div>
<b>Assessed By</b>
<br>
<span id="qdAssessorName">
    ${escapeQD(currentUser.fullName || "")}
</span>
</div>

<div>
<b>Role</b>
<br>
  ${escapeQD(currentUser.role || "")}
</div>

</div>


<div style="
display:flex;
flex-wrap:wrap;
justify-content:flex-end;
  gap:10px;
  margin-top:22px;
">

<button
  id="qdViewRecords"
  type="button"
  style="
    padding:11px 16px;
    border:1px solid #0d6efd;
background:white;
    color:#0d6efd;
    border-radius:7px;
cursor:pointer;
font-weight:bold;
  "
>
📋 View Assessments
</button>

<button
  id="qdPrintDraft"
  type="button"
  style="
    padding:11px 16px;
    border:1px solid #555;
background:white;
    color:#333;
    border-radius:7px;
cursor:pointer;
font-weight:bold;
  "
>
🖨 Print Form
</button>

<button
  id="qdSaveAssessment"
  type="button"
  style="
    padding:11px 18px;
    border:0;
    background:#0b5d3b;
color:white;
    border-radius:7px;
cursor:pointer;
font-weight:bold;
  "
>
💾 Submit Weekly Assessment
</button>

</div>

</div>

</div>
  `;


document.body.appendChild(modal);


const employeeSelect =
modal.querySelector("#qdEmployee");

const assessmentDate =
modal.querySelector("#qdAssessmentDate");


  function updateWeek() {

    if (!assessmentDate.value) {
      return;
    }

const start =
getWeekStart(
assessmentDate.value
      );

const end =
getWeekEnd(start);

modal.querySelector(
      "#qdWeekDisplay"
    ).value =
readableDate(start) +
      " – " +
readableDate(end);
  }


  function updateEmployeeDetails() {

const employee =
allEmployees.find(item =>
        String(item.employeeId) ===
        String(employeeSelect.value)
      );

const photo =
modal.querySelector(
        "#qdEmployeePhoto"
      );

const noPhoto =
modal.querySelector(
        "#qdNoPhoto"
      );

    if (!employee) {

modal.querySelector(
        "#qdEmployeeId"
      ).value = "";

modal.querySelector(
        "#qdDepartment"
      ).value = "";

modal.querySelector(
        "#qdPosition"
      ).value = "";

modal.querySelector(
        "#qdTeam"
      ).value = "";

photo.style.display = "none";
photo.removeAttribute("src");

noPhoto.style.display = "block";

      return;
    }


const team =
getEmployeeTeam(
employee.employeeId
      );


modal.querySelector(
      "#qdEmployeeId"
    ).value =
employee.employeeId || "";


modal.querySelector(
      "#qdDepartment"
    ).value =
employee.department || "";


modal.querySelector(
      "#qdPosition"
    ).value =
getEmployeePosition(employee);


modal.querySelector(
      "#qdTeam"
    ).value =
      team
        ? team.name || ""
        : "Not Assigned";


    if (employee.passportPhoto) {

photo.src =
employee.passportPhoto;

photo.style.display =
        "block";

noPhoto.style.display =
        "none";

    } else {

photo.style.display =
        "none";

photo.removeAttribute("src");

noPhoto.style.display =
        "block";
    }
  }


  function calculateTotal() {

    let total = 0;

    modal
      .querySelectorAll(".qdScore")
      .forEach(input => {

        let score =
          Number(input.value);

        if (
Number.isNaN(score)
        ) {
          score = 0;
        }

        if (score < 0) {
          score = 0;
        }

        if (score > 10) {
          score = 10;
        }

        total += score;
      });


modal.querySelector(
      "#qdTotalScore"
    ).textContent =
total.toFixed(0);

    return total;
  }


  function collectAssessmentData(
requireComplete = true
  ) {

const employee =
allEmployees.find(item =>
        String(item.employeeId) ===
        String(employeeSelect.value)
      );


    if (!employee) {

      alert(
        "Please select the employee being assessed."
      );

      return null;
    }


    if (!assessmentDate.value) {

      alert(
        "Please select the assessment date."
      );

      return null;
    }


const scores = {};

    let total = 0;

    let complete = true;


    modal
      .querySelectorAll(".qdScore")
      .forEach(input => {

        if (
input.value === ""
        ) {
          complete = false;
        }

const score =
          Number(input.value);

        if (
          !Number.isFinite(score) ||
          score < 0 ||
          score > 10
        ) {
          complete = false;
        }

        scores[
input.dataset.key
        ] =
Number.isFinite(score)
            ? score
            : 0;

        total +=
Number.isFinite(score)
            ? score
            : 0;
      });


    if (
requireComplete&&
      !complete
    ) {

      alert(
        "Please score all 10 Quality & Discipline items from 0 to 10."
      );

      return null;
    }


const weekStart =
getWeekStart(
assessmentDate.value
      );

const weekEnd =
getWeekEnd(
weekStart
      );

const team =
getEmployeeTeam(
employee.employeeId
      );


    return {
      employee,
      team,
      scores,
      total:
        Number(total.toFixed(0)),
weekStart,
weekEnd
    };
  }


  function printAssessment(data) {

    if (!data) {
      return;
    }


const employee =
data.employee;

const team =
data.team;

const comments =
modal.querySelector(
        "#qdComments"
      ).value.trim();


const printWindow =
window.open(
        "",
        "_blank",
        "width=1000,height=800"
      );


    if (!printWindow) {

      alert(
        "The print window was blocked by the browser. Please allow pop-ups and try again."
      );

      return;
    }


const photoHtml =
employee.passportPhoto
        ? `
<img
src="${employee.passportPhoto}"
            style="
              width:105px;
              height:125px;
object-fit:cover;
              border:1px solid #777;
            "
>
        `
        : `
<div style="
            width:105px;
            height:125px;
            border:1px solid #777;
display:flex;
align-items:center;
justify-content:center;
            font-size:12px;
            color:#666;
          ">
            No Photo
</div>
        `;


const scoreRows =
criteria.map(
        (item, index) => `
<tr>
<td>${index + 1}</td>
<td>${escapeQD(item.label)}</td>
<td style="text-align:center;">
              ${Number(
data.scores[item.key] || 0
              )}
</td>
</tr>
        `
      ).join("");


printWindow.document.write(`

<!DOCTYPE html>

<html>

<head>

<title>
  Quality & Discipline Assessment
</title>

<style>

@page {
  size: A4 portrait;
  margin: 12mm;
}

body {
  font-family: Arial, sans-serif;
  color: #111;
  font-size: 11px;
  margin: 0;
}

.header {
  border: 2px solid #0b5d3b;
  padding: 12px;
  margin-bottom: 10px;
}

.company {
  color: #0b5d3b;
  font-size: 20px;
  font-weight: bold;
}

.subtitle {
  margin-top: 3px;
  font-weight: bold;
}

.employee-area {
  display: grid;
  grid-template-columns: 1fr 115px;
  gap: 12px;
  margin-top: 12px;
}

.details {
  width: 100%;
  border-collapse: collapse;
}

.details td {
  border: 1px solid #777;
  padding: 6px;
}

.score-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.score-table th,
.score-table td {
  border: 1px solid #555;
  padding: 6px;
}

.score-table th {
  background: #e6efe9;
}

.total {
  font-size: 14px;
  font-weight: bold;
}

.comments {
  min-height: 55px;
  border: 1px solid #777;
  padding: 8px;
  margin-top: 8px;
  white-space: pre-wrap;
}

.signatures {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 28px;
}

.signature-line {
  border-top: 1px solid #333;
  padding-top: 5px;
}

.footer {
  margin-top: 15px;
  font-size: 9px;
  text-align: center;
  color: #555;
}

.no-print {
  margin-bottom: 12px;
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
<button onclick="window.print()">
    Print
</button>
</div>


<div class="header">

<div class="company">
  A&F WEKAVERA LTD
</div>

<div>
  Waste2Wealth Solutions
</div>

<div class="subtitle">
  EMPLOYEE QUALITY & DISCIPLINE –
  WEEKLY PERFORMANCE ASSESSMENT
</div>


<div class="employee-area">

<div>

<table class="details">

<tr>
<td><b>Employee Name</b></td>
<td>
    ${escapeQD(employee.fullName || "")}
</td>
</tr>

<tr>
<td><b>Employee ID</b></td>
<td>
    ${escapeQD(employee.employeeId || "")}
</td>
</tr>

<tr>
<td><b>Department</b></td>
<td>
    ${escapeQD(employee.department || "")}
</td>
</tr>

<tr>
<td><b>Position</b></td>
<td>
    ${escapeQD(getEmployeePosition(employee))}
</td>
</tr>

<tr>
<td><b>Team</b></td>
<td>
    ${escapeQD(
      team
        ? team.name || ""
        : "Not Assigned"
    )}
</td>
</tr>

<tr>
<td><b>Assessment Week</b></td>
<td>
    ${escapeQD(readableDate(data.weekStart))}
    –
    ${escapeQD(readableDate(data.weekEnd))}
</td>
</tr>

</table>

</div>

<div>
  ${photoHtml}
</div>

</div>

</div>


<table class="score-table">

<thead>

<tr>
<th style="width:35px;">#</th>
<th>Quality & Discipline Criterion</th>
<th style="width:85px;">Score /10</th>
</tr>

</thead>

<tbody>

${scoreRows}

<tr class="total">
<td colspan="2" style="text-align:right;">
    TOTAL SCORE
</td>
<td style="text-align:center;">
    ${data.total}/100
</td>
</tr>

</tbody>

</table>


<div style="margin-top:9px;">
<b>Scoring Guide:</b>
  0–2 Poor |
  3–4 Needs Improvement |
  5–6 Satisfactory |
  7–8 Good |
  9–10 Excellent
</div>


<div style="margin-top:12px;">
<b>Manager / Director Comments</b>
</div>

<div class="comments">
${escapeQD(comments || "No comments recorded.")}
</div>


<div style="margin-top:12px;">
<b>Assessed By:</b>
  ${escapeQD(currentUser.fullName || "")}
  •
  ${escapeQD(currentUser.role || "")}
</div>


<div class="signatures">

<div class="signature-line">
  Assessor Signature / Date
</div>

<div class="signature-line">
  Employee Signature / Date
</div>

</div>


<div class="footer">
  A&F Wekavera Ltd • Waste2Wealth Solutions •
  Employee Quality & Discipline Record
</div>

</body>

</html>

    `);


printWindow.document.close();

printWindow.focus();
  }


employeeSelect.onchange =
updateEmployeeDetails;


assessmentDate.onchange =
updateWeek;


modal.addEventListener(
    "input",
    function(event) {

      if (
event.target.classList.contains(
          "qdScore"
        )
      ) {

        if (
          Number(event.target.value) > 10
        ) {
event.target.value = 10;
        }

        if (
          Number(event.target.value) < 0
        ) {
event.target.value = 0;
        }

calculateTotal();
      }
    }
  );


modal.querySelector(
    "#closeQDForm"
  ).onclick = () => {
modal.remove();
  };


modal.querySelector(
    "#qdPrintDraft"
  ).onclick = () => {

const data =
collectAssessmentData(true);

    if (!data) {
      return;
    }

printAssessment(data);
  };


modal.querySelector(
    "#qdSaveAssessment"
  ).onclick = () => {

const data =
collectAssessmentData(true);

    if (!data) {
      return;
    }


const records =
getAFQualityDisciplineRecords();


const duplicate =
records.some(record =>
        String(record.employeeId) ===
          String(data.employee.employeeId) &&
record.weekStart ===
data.weekStart&&
        String(record.status || "") !==
          "CANCELLED"
      );


    if (duplicate) {

      alert(
data.employee.fullName +
        " already has a submitted Quality & Discipline assessment for this week.\n\n" +
        "Submitted weekly assessments are locked. The Director can correct a saved assessment through the correction process."
      );

      return;
    }


const record = {

      id:
Date.now(),

assessmentDate:
assessmentDate.value,

weekStart:
data.weekStart,

weekEnd:
data.weekEnd,

employeeId:
data.employee.employeeId,

employeeName:
data.employee.fullName,

      department:
data.employee.department || "",

      position:
getEmployeePosition(
data.employee
        ),

teamId:
data.team
          ? data.team.id || ""
          : "",

teamName:
data.team
          ? data.team.name || ""
          : "",

passportPhoto:
data.employee.passportPhoto || "",

      scores:
data.scores,

totalScore:
data.total,

qualityDisciplinePercent:
data.total,

performanceContribution:
        Number(
          (
data.total *
            0.10
          ).toFixed(2)
        ),

      comments:
modal.querySelector(
          "#qdComments"
        ).value.trim(),

assessorEmployeeId:
currentUser.employeeId || "",

assessorName:
currentUser.fullName || "",

assessorRole:
currentUser.role || "",

      status:
        "SUBMITTED",

      locked:
        true,

correctionHistory:
        [],

submittedAt:
        new Date().toISOString()
    };


records.push(record);

saveAFQualityDisciplineRecords(
      records
    );


    alert(
      "Weekly Quality & Discipline assessment submitted successfully.\n\n" +
      "Employee: " +
data.employee.fullName +
      "\nScore: " +
data.total +
      "/100\n" +
      "Performance contribution: " +
record.performanceContribution.toFixed(2) +
      "/10\n\n" +
      "This assessment is now locked."
    );


modal.remove();
  };


modal.querySelector(
    "#qdViewRecords"
  ).onclick = () => {

viewAFQualityDisciplineRecords();
  };


updateWeek();
updateEmployeeDetails();
}


/* =========================================================
   VIEW SAVED QUALITY & DISCIPLINE ASSESSMENTS
   ========================================================= */

function viewAFQualityDisciplineRecords() {

const currentUser =
typeof getAFCurrentUser === "function"
      ? getAFCurrentUser()
      : JSON.parse(
localStorage.getItem("currentUser") || "null"
        );


  if (
    !currentUser ||
    !["Manager", "Director"].includes(currentUser.role)
  ) {
    alert("Access Denied.");
    return;
  }


const records =
getAFQualityDisciplineRecords()
      .slice()
      .sort((a, b) =>
        String(b.weekStart || "")
          .localeCompare(
            String(a.weekStart || "")
          )
      );


const modal =
document.createElement("div");

modal.style.cssText = `
position:fixed;
    inset:0;
    z-index:100001;
background:rgba(0,0,0,.58);
display:flex;
align-items:center;
justify-content:center;
    padding:10px;
font-family:Arial,sans-serif;
  `;


const rows =
records.length
      ? records.map(record => `

<tr>

<td>
  ${record.weekStart || ""}
<br>
  to
<br>
  ${record.weekEnd || ""}
</td>

<td>
<b>${record.employeeName || ""}</b>
<br>
<small>${record.employeeId || ""}</small>
</td>

<td>
  ${record.teamName || "—"}
</td>

<td style="
text-align:center;
font-weight:bold;
">
  ${Number(record.totalScore || 0).toFixed(0)}/100
</td>

<td style="
text-align:center;
font-weight:bold;
">
  ${Number(
record.performanceContribution || 0
  ).toFixed(2)}/10
</td>

<td>
  ${record.assessorName || ""}
<br>
<small>${record.assessorRole || ""}</small>
</td>

<td style="text-align:center;">
  ${record.status || "SUBMITTED"}
</td>

</tr>

      `).join("")
      : `

<tr>

<td
colspan="7"
  style="
text-align:center;
    padding:20px;
    color:#666;
  "
>
  No Quality & Discipline assessments have been submitted yet.
</td>

</tr>

      `;


modal.innerHTML = `

<div style="
  width:1000px;
  max-width:98%;
  max-height:94vh;
overflow:auto;
background:white;
  border-radius:14px;
  padding:22px;
">

<div style="
display:flex;
justify-content:space-between;
align-items:center;
  gap:15px;
  margin-bottom:18px;
">

<div>

<h2 style="
  margin:0;
  color:#0b5d3b;
">
  Quality & Discipline Records
</h2>

<div style="
  margin-top:5px;
  color:#666;
  font-size:13px;
">
  Submitted weekly assessments are locked.
</div>

</div>

<button
  id="closeQDRecords"
  type="button"
  style="
    padding:9px 15px;
    border:1px solid #ccc;
background:white;
    border-radius:7px;
cursor:pointer;
  "
>
  Close
</button>

</div>


<div style="overflow-x:auto;">

<table
  id="qdRecordsTable"
  style="
    width:100%;
    min-width:850px;
border-collapse:collapse;
    font-size:12px;
  "
>

<thead>

<tr style="
  background:#0b5d3b;
color:white;
">

<th>Week</th>
<th>Employee</th>
<th>Team</th>
<th>Score</th>
<th>Contribution</th>
<th>Assessed By</th>
<th>Status</th>

</tr>

</thead>

<tbody>
  ${rows}
</tbody>

</table>

</div>

</div>
  `;


modal.querySelectorAll(
    "#qdRecordsTableth, #qdRecordsTable td"
  ).forEach(cell => {

cell.style.border =
      "1px solid #ddd";

cell.style.padding =
      "8px";

cell.style.verticalAlign =
      "top";
  });


document.body.appendChild(modal);


modal.querySelector(
    "#closeQDRecords"
  ).onclick = () => {
modal.remove();
  };
}


/* =========================================================
   TEMPORARY ACCESS BUTTON
   Adds Quality & Discipline to Staff & HR without disturbing
   the existing Staff & HR function.
   ========================================================= */

(function connectAFQualityDisciplineToStaffHR() {

  if (
typeof staffHR !== "function"
  ) {
    return;
  }


const originalStaffHR =
staffHR;


staffHR = function() {

originalStaffHR();


setTimeout(() => {

const modals =
Array.from(
document.querySelectorAll("body > div")
        );


const staffModal =
        modals
          .reverse()
          .find(modal =>
modal.querySelector(
              "#closeStaffHR"
            )
          );


      if (!staffModal) {
        return;
      }


      if (
staffModal.querySelector(
          "#qualityDisciplineHRBtn"
        )
      ) {
        return;
      }


const currentUser =
typeof getAFCurrentUser === "function"
          ? getAFCurrentUser()
          : JSON.parse(
localStorage.getItem("currentUser") || "null"
            );


      if (
        !currentUser ||
        !["Manager", "Director"].includes(
currentUser.role
        )
      ) {
        return;
      }


const grid =
staffModal.querySelector(
          "#closeStaffHR"
        )
        ?.closest("div")
        ?.parentElement
        ?.querySelector(
          "div[style*='grid-template-columns']"
        );


      if (!grid) {
        return;
      }


const button =
document.createElement("button");

button.id =
        "qualityDisciplineHRBtn";


      if (
typeof systemSettingsButtonStyle ===
        "function"
      ) {
button.style.cssText =
systemSettingsButtonStyle();
      }


button.innerHTML = `
📝
<strong>
          Quality & Discipline
</strong>
<span>
          Weekly employee performance assessment
</span>
      `;


button.onclick = () => {

staffModal.remove();

openAFQualityDisciplineAssessment();
      };


grid.appendChild(button);

    }, 0);
  };

})();

/* =========================================================
   A&F TODAY'S CHECKLIST
   Director + Manager + Secretary
   Daily dashboard reminder with upward movement
   ========================================================= */

(function connectAFTodaysChecklist() {

const STORAGE_KEY = "afDailyDashboardChecklist";

  let afChecklistTimer = null;


  /* =======================================================
     HELPERS
     ======================================================= */

  function getAFChecklistToday() {

const now = new Date();

const year = now.getFullYear();

const month =
      String(now.getMonth() + 1)
        .padStart(2, "0");

const day =
      String(now.getDate())
        .padStart(2, "0");

    return `${year}-${month}-${day}`;
  }


  function getAFChecklistUser() {

    if (
typeof getAFCurrentUser === "function"
    ) {
      return getAFCurrentUser();
    }

    return JSON.parse(
localStorage.getItem("currentUser") ||
      "null"
    );
  }


  function getAFChecklistStorage() {

    try {

      return JSON.parse(
localStorage.getItem(
          STORAGE_KEY
        ) || "{}"
      );

    } catch (error) {

      return {};

    }

  }


  function saveAFChecklistStorage(data) {

localStorage.setItem(
      STORAGE_KEY,
JSON.stringify(data)
    );

  }


  function afChecklistSameDay(
    value,
    today
  ) {

    if (!value) {
      return false;
    }

    return String(value)
      .slice(0, 10) === today;

  }


  function afChecklistEscape(value) {

const div =
document.createElement("div");

div.textContent =
      String(value ?? "");

    return div.innerHTML;

  }


  /* =======================================================
     READ TODAY'S REAL SYSTEM ACTIVITY
     ======================================================= */

  function getAFAutomaticDailyActivity() {

const today =
getAFChecklistToday();


const attendance =
JSON.parse(
localStorage.getItem(
          "attendanceRecords"
        ) || "[]"
      );


const washing =
JSON.parse(
localStorage.getItem(
          "washingShiftRecords"
        ) || "[]"
      );


const production =
JSON.parse(
localStorage.getItem(
          "productionRecords"
        ) || "[]"
      );


const materials =
JSON.parse(
localStorage.getItem(
          "materialRecords"
        ) || "[]"
      );


    /*
     * Sales, expenses and supplier records may
     * use different keys in older parts of the app.
     * We read them safely without changing them.
     */

const sales =
JSON.parse(
localStorage.getItem(
          "salesRecords"
        ) || "[]"
      );


const expenses =
JSON.parse(
localStorage.getItem(
          "expenses"
        ) ||
localStorage.getItem(
          "expenseRecords"
        ) ||
        "[]"
      );


const supplierPayments =
JSON.parse(
localStorage.getItem(
          "supplierPayments"
        ) || "[]"
      );


const attendanceDone =
attendance.some(record =>
afChecklistSameDay(
record.date ||
record.attendanceDate ||
record.recordedAt,
          today
        )
      );


const washingDone =
washing.some(record =>

afChecklistSameDay(
record.date ||
record.completedAt ||
record.recordedAt,
          today
        ) &&

        (
          String(
record.targetStatus || ""
          ).toUpperCase() ===
            "COMPLETED" ||

record.washingComplete ===
            true
        )

      );


const productionDone =
production.some(record =>

afChecklistSameDay(
record.date ||
record.createdAt ||
record.recordedAt,
          today
        ) &&

        String(
record.productionStatus || ""
        ).toUpperCase() ===
          "COMPLETED"

      );


const materialReceived =
materials.some(record =>

afChecklistSameDay(
record.date ||
record.purchaseDate ||
record.createdAt ||
record.recordedAt,
          today
        )

      );


const salesUpdated =
sales.some(record =>

afChecklistSameDay(
record.date ||
record.saleDate ||
record.createdAt ||
record.recordedAt,
          today
        )

      );


const expensesUpdated =
expenses.some(record =>

afChecklistSameDay(
record.date ||
record.expenseDate ||
record.createdAt ||
record.recordedAt,
          today
        )

      );


const supplierUpdated =
supplierPayments.some(record =>

afChecklistSameDay(
record.date ||
record.paymentDate ||
record.createdAt ||
record.recordedAt,
          today
        )

      );


    return {

      attendance:
attendanceDone,

      washing:
washingDone,

      production:
productionDone,

materialReceived:
materialReceived,

salesUpdated:
salesUpdated,

expensesUpdated:
expensesUpdated,

supplierUpdated:
supplierUpdated

    };

  }


  /* =======================================================
     MANAGER DAILY CHECKLIST
     ======================================================= */

  function getAFManagerChecklist(
    automatic
  ) {

    return [

      {
        id: "managerAttendance",
        label:
          "Attendance recorded",
        automatic: true,
        done:
automatic.attendance
      },

      {
        id: "managerFactoryInspection",
        label:
          "Factory & machine inspection checked",
        automatic: false
      },

      {
        id: "managerWashing",
        label:
          "Washing activity updated",
        automatic: true,
        done:
automatic.washing,
allowNoActivity: true
      },

      {
        id: "managerProduction",
        label:
          "Production activity updated",
        automatic: true,
        done:
automatic.production,
allowNoActivity: true
      },

      {
        id: "managerStock",
        label:
          "Stock & batch movements checked",
        automatic: false
      },

      {
        id: "managerStaffIssues",
        label:
          "Staff issues / incidents checked",
        automatic: false,
allowNoActivity: true
      },

      {
        id: "managerCleanliness",
        label:
          "Factory cleanliness & safety checked",
        automatic: false
      },

      {
        id: "managerEndDay",
        label:
          "End-of-day operational records reviewed",
        automatic: false
      }

    ];

  }


  /* =======================================================
     SECRETARY DAILY CHECKLIST
     ======================================================= */

  function getAFSecretaryChecklist(
    automatic
  ) {

    return [

      {
        id: "secretaryPurchases",
        label:
          "Kavera purchases / receipts updated",
        automatic: true,
        done:
automatic.materialReceived,
allowNoActivity: true
      },

      {
        id: "secretarySales",
        label:
          "Sales records checked & updated",
        automatic: true,
        done:
automatic.salesUpdated,
allowNoActivity: true
      },

      {
        id: "secretaryDispatch",
        label:
          "Dispatch & delivery records checked",
        automatic: false,
allowNoActivity: true
      },

      {
        id: "secretarySuppliers",
        label:
          "Supplier & payment records checked",
        automatic: true,
        done:
automatic.supplierUpdated,
allowNoActivity: true
      },

      {
        id: "secretaryExpenses",
        label:
          "Expense records checked & updated",
        automatic: true,
        done:
automatic.expensesUpdated,
allowNoActivity: true
      },

      {
        id: "secretaryClients",
        label:
          "Upcoming clients & follow-ups checked",
        automatic: false,
allowNoActivity: true
      },

      {
        id: "secretaryDocuments",
        label:
          "Company records & documents checked",
        automatic: false
      },

      {
        id: "secretaryAdminFollowUp",
        label:
          "Administrative follow-ups checked",
        automatic: false,
allowNoActivity: true
      },

      {
        id: "secretaryEndDay",
        label:
          "End-of-day administration reviewed",
        automatic: false
      }

    ];

  }


  /* =======================================================
     DIRECTOR SUPERVISORY CHECKLIST
     Director sees combined daily control items.
     ======================================================= */

  function getAFDirectorChecklist(
    automatic
  ) {

    return [

      {
        id: "directorAttendance",
        label:
          "Attendance status reviewed",
        automatic: true,
        done:
automatic.attendance
      },

      {
        id: "directorOperations",
        label:
          "Today's factory operations reviewed",
        automatic: false
      },

      {
        id: "directorWashing",
        label:
          "Washing update reviewed",
        automatic: true,
        done:
automatic.washing,
allowNoActivity: true
      },

      {
        id: "directorProduction",
        label:
          "Production update reviewed",
        automatic: true,
        done:
automatic.production,
allowNoActivity: true
      },

      {
        id: "directorPurchases",
        label:
          "Kavera purchase / receipt status reviewed",
        automatic: true,
        done:
automatic.materialReceived,
allowNoActivity: true
      },

      {
        id: "directorAdministration",
        label:
          "Secretary administration status reviewed",
        automatic: false
      },

      {
        id: "directorStock",
        label:
          "Stock & batch position reviewed",
        automatic: false
      },

      {
        id: "directorStaff",
        label:
          "Staff matters / incidents reviewed",
        automatic: false,
allowNoActivity: true
      },

      {
        id: "directorSafety",
        label:
          "Factory safety & cleanliness status reviewed",
        automatic: false
      },

      {
        id: "directorPending",
        label:
          "Pending approvals & follow-ups reviewed",
        automatic: false,
allowNoActivity: true
      },

      {
        id: "directorEndDay",
        label:
          "Daily factory records reviewed",
        automatic: false
      }

    ];

  }


  /* =======================================================
     SELECT CHECKLIST BY ROLE
     ======================================================= */

  function getAFRoleChecklist(
    role,
    automatic
  ) {

    if (role === "Manager") {

      return getAFManagerChecklist(
        automatic
      );

    }


    if (role === "Secretary") {

      return getAFSecretaryChecklist(
        automatic
      );

    }


    if (role === "Director") {

      return getAFDirectorChecklist(
        automatic
      );

    }


    return [];

  }


  /* =======================================================
     GET SAVED STATUS
     ======================================================= */

  function getAFChecklistItemStatus(
    item,
todayData
  ) {

    /*
     * Existing real system record has priority.
     */
    if (
item.automatic&&
item.done
    ) {

      return {

        completed: true,

        status: "DONE",

        source: "SYSTEM"

      };

    }


const saved =
todayData[item.id];


    if (
      saved &&
      (
saved.status === "DONE" ||
saved.status === "NO_ACTIVITY"
      )
    ) {

      return {

        completed: true,

        status:
saved.status,

        source: "MANUAL",

checkedBy:
saved.checkedBy || "",

checkedAt:
saved.checkedAt || ""

      };

    }


    return {

      completed: false,

      status: "PENDING",

      source: ""

    };

  }


  /* =======================================================
     SAVE MANUAL CHECK
     ======================================================= */

  function saveAFManualChecklistItem(
itemId,
    status
  ) {

const user =
getAFChecklistUser();


    if (!user) {
      return;
    }


const today =
getAFChecklistToday();


const data =
getAFChecklistStorage();


    if (!data[today]) {

      data[today] = {};

    }


    data[today][itemId] = {

      status: status,

checkedBy:
user.fullName ||
user.employeeId ||
        "",

checkedByEmployeeId:
user.employeeId ||
        "",

checkedByRole:
user.role ||
        "",

checkedAt:
        new Date().toISOString()

    };


saveAFChecklistStorage(
      data
    );

  }


  /* =======================================================
     RENDER CHECKLIST
     ======================================================= */

  function renderAFTodaysChecklist() {

const user =
getAFChecklistUser();


const existing =
document.getElementById(
        "afTodaysChecklist"
      );


    if (existing) {
existing.remove();
    }


    if (
      !user ||
      ![
        "Director",
        "Manager",
        "Secretary"
      ].includes(user.role)
    ) {

      return;

    }


const main =
document.querySelector(
        "#mainApplication .main"
      );


    if (!main) {
      return;
    }


const today =
getAFChecklistToday();


const stored =
getAFChecklistStorage();


const todayData =
      stored[today] || {};


const automatic =
getAFAutomaticDailyActivity();


const items =
getAFRoleChecklist(
user.role,
        automatic
      );


    if (!items.length) {
      return;
    }


const completed =
items.filter(item =>

getAFChecklistItemStatus(
          item,
todayData
        ).completed

      ).length;


const percentage =
Math.round(
        completed /
items.length *
        100
      );


const box =
document.createElement(
        "section"
      );


box.id =
      "afTodaysChecklist";


box.className =
      "card";


box.style.cssText = `
      width:40%;
      max-width:620px;
      min-width:420px;
      margin:14px 0 16px 0;
      padding:0;
overflow:hidden;
      border:1px solid #d6e4db;
      border-radius:12px;
background:white;
box-sizing:border-box;
    `;

box.innerHTML = `

<style>

        #afTodaysChecklist
        .afTodayHeader {

display:flex;
align-items:center;
justify-content:space-between;
          gap:12px;
flex-wrap:wrap;

          padding:12px 15px;

          background:#f2f8f4;

          border-bottom:
            1px solid #dce8e0;

        }


        #afTodaysChecklist
        .afTodayTitle {

          color:#0b5d3b;

font-weight:bold;

          font-size:15px;

        }


        #afTodaysChecklist
        .afTodayProgressText {

          color:#0b5d3b;

          font-size:12px;

font-weight:bold;

        }


        #afTodaysChecklist
        .afTodayProgress {

          height:6px;

          background:#e5ebe7;

        }


        #afTodaysChecklist
        .afTodayProgressBar {

          height:100%;

          background:#0b5d3b;

          transition:
            width .3s ease;

        }


        #afTodaysChecklist
        .afTodayWindow {

          height:180px;

overflow:hidden;

position:relative;

background:white;

        }


        #afTodaysChecklist
        .afTodayTrack {

position:absolute;

          top:0;

          left:0;

          right:0;

          transition:
            transform .65s ease;

        }


        #afTodaysChecklist
        .afTodayRow {

          min-height:60px;

box-sizing:border-box;

display:flex;

align-items:center;

          justify-content:
            space-between;

          gap:10px;

          padding:9px 14px;

          border-bottom:
            1px solid #eeeeee;

background:white;

        }


        #afTodaysChecklist
        .afTodayRow.done {

          background:#f6fbf8;

        }


        #afTodaysChecklist
        .afTodayLeft {

display:flex;

align-items:center;

          gap:9px;

          min-width:0;

          flex:1;

        }


        #afTodaysChecklist
        .afTodayIcon {

          width:26px;

          height:26px;

          min-width:26px;

          border-radius:50%;

display:flex;

align-items:center;

justify-content:center;

          background:#eeeeee;

          color:#777;

          font-size:13px;

font-weight:bold;

        }


        #afTodaysChecklist
        .done
        .afTodayIcon {

          background:#dcefe3;

          color:#0b5d3b;

        }


        #afTodaysChecklist
        .afTodayLabel {

          color:#333;

          font-size:13px;

          font-weight:600;

          line-height:1.3;

        }


        #afTodaysChecklist
        .afTodayStatus {

display:block;

          margin-top:2px;

          color:#777;

          font-size:10px;

font-weight:normal;

        }


        #afTodaysChecklist
        .afTodayActions {

display:flex;

justify-content:flex-end;

          gap:5px;

flex-wrap:wrap;

        }


        #afTodaysChecklist
        .afTodayButton {

          border:
            1px solid #cbd7cf;

background:white;

          color:#0b5d3b;

          border-radius:6px;

          padding:6px 8px;

          font-size:10px;

font-weight:bold;

cursor:pointer;

        }


        #afTodaysChecklist
        .afTodayFooter {

display:flex;

          justify-content:
            space-between;

align-items:center;

          gap:8px;

flex-wrap:wrap;

          padding:7px 14px;

          background:#fafafa;

          color:#777;

          font-size:10px;

          border-top:
            1px solid #eeeeee;

        }


        @media (
          max-width:600px
        ) {

          #afTodaysChecklist
          .afTodayWindow {

            height:210px;

          }


          #afTodaysChecklist
          .afTodayRow {

            min-height:70px;

          }


          #afTodaysChecklist
          .afTodayLabel {

            font-size:12px;

          }

        }


        @media (
          prefers-reduced-motion:
          reduce
        ) {

          #afTodaysChecklist
          .afTodayTrack {

transition:none;

          }

        }

</style>


<div
        class="afTodayHeader"
>

<div>

<div
            class="afTodayTitle"
>
✅ Today's Checklist
</div>


<div
            style="
              color:#777;
              font-size:10px;
              margin-top:3px;
            "
>
            ${afChecklistEscape(
user.role
            )}
            •
            ${today}
</div>

</div>


<div
          class="afTodayProgressText"
>
          ${completed}/${items.length}
          Done
          •
          ${percentage}%
</div>

</div>


<div
        class="afTodayProgress"
>

<div
          class="afTodayProgressBar"
          style="
            width:${percentage}%;
          "
></div>

</div>


<div
        class="afTodayWindow"
>

<div
          class="afTodayTrack"
></div>

</div>


<div
        class="afTodayFooter"
>

<span>
          Reminders move upward automatically
</span>

<span>
          Tap box to pause / continue
</span>

</div>

    `;


    /*
     * Place the checklist near the top.
     *
     * Director/Manager:
     * before Factory KPI cards.
     *
     * Secretary:
     * before Secretary dashboard.
     */

const dashboardStart =
main.querySelector(
        "#factoryKpis, #afSecretaryDashboard"
      );


    if (dashboardStart) {

main.insertBefore(
        box,
dashboardStart
      );

    } else {

main.prepend(box);

    }


const track =
box.querySelector(
        ".afTodayTrack"
      );


items.forEach(item => {

const status =
getAFChecklistItemStatus(
          item,
todayData
        );


const row =
document.createElement(
          "div"
        );


row.className =
        "afTodayRow" +
        (
status.completed
            ? " done"
            : ""
        );


      let statusText =
        "Pending";


      if (
status.status === "DONE" &&
status.source === "SYSTEM"
      ) {

statusText =
          "Confirmed from today's system record";

      } else if (
status.status === "DONE"
      ) {

statusText =
          "Checked";

      } else if (
status.status ===
        "NO_ACTIVITY"
      ) {

statusText =
          "No activity today";

      }


row.innerHTML = `

<div
          class="afTodayLeft"
>

<div
            class="afTodayIcon"
>
            ${
status.completed
                ? "✓"
                : "•"
            }
</div>


<div
            class="afTodayLabel"
>

            ${afChecklistEscape(
item.label
            )}

<span
              class="afTodayStatus"
>
              ${afChecklistEscape(
statusText
              )}
</span>

</div>

</div>


<div
          class="afTodayActions"
></div>

      `;


const actions =
row.querySelector(
          ".afTodayActions"
        );


      if (!status.completed) {

const doneButton =
document.createElement(
            "button"
          );


doneButton.type =
          "button";


doneButton.className =
          "afTodayButton";


doneButton.textContent =
          "✓ Done";


doneButton.addEventListener(
          "click",
          function(event) {

event.stopPropagation();


saveAFManualChecklistItem(
item.id,
              "DONE"
            );


refreshAFTodaysChecklist();

          }
        );


actions.appendChild(
doneButton
        );


        if (
item.allowNoActivity
        ) {

const noActivityButton =
document.createElement(
              "button"
            );


noActivityButton.type =
            "button";


noActivityButton.className =
            "afTodayButton";


noActivityButton.textContent =
            "No Activity";


noActivityButton.addEventListener(
            "click",
            function(event) {

event.stopPropagation();


saveAFManualChecklistItem(
item.id,
                "NO_ACTIVITY"
              );


refreshAFTodaysChecklist();

            }
          );


actions.appendChild(
noActivityButton
          );

        }

      }


track.appendChild(row);

    });


    /* =====================================================
       UPWARD ROTATION
       ===================================================== */

    let currentIndex = 0;

    let paused = false;


    function getVisibleCount() {

      return 3;

    }


    function moveChecklistUp() {

      if (paused) {
        return;
      }


const visibleCount =
getVisibleCount();


      if (
items.length<=
visibleCount
      ) {
        return;
      }


currentIndex++;


const maxStart =
items.length -
visibleCount;


      if (
currentIndex>
maxStart
      ) {

currentIndex = 0;

      }


const firstRow =
track.querySelector(
          ".afTodayRow"
        );


      if (!firstRow) {
        return;
      }


const rowHeight =
firstRow.offsetHeight;


track.style.transform =
        `translateY(-${
currentIndex *
rowHeight
        }px)`;

    }


afChecklistTimer =
setInterval(
moveChecklistUp,
        3000
      );


    /*
     * Desktop:
     * pause while reading.
     */

box.addEventListener(
      "mouseenter",
      function() {

        paused = true;

      }
    );


box.addEventListener(
      "mouseleave",
      function() {

        paused = false;

      }
    );


    /*
     * Phone/tablet:
     * tap blank area to pause/resume.
     */

box.addEventListener(
      "click",
      function(event) {

        if (
event.target.closest(
            "button"
          )
        ) {
          return;
        }


        paused =
          !paused;

      }
    );

  }


  /* =======================================================
     PUBLIC REFRESH
     ======================================================= */

  function refreshAFTodaysChecklist() {

    if (afChecklistTimer) {

clearInterval(
afChecklistTimer
      );

afChecklistTimer =
        null;

    }


renderAFTodaysChecklist();

  }


window.refreshAFTodaysChecklist =
refreshAFTodaysChecklist;


  /* =======================================================
     CONNECT TO EXISTING ROLE DASHBOARD
     ======================================================= */

  if (
typeof applyAFRoleDashboard ===
    "function"
  ) {

const previousApplyAFRoleDashboard =
applyAFRoleDashboard;


applyAFRoleDashboard =
      function() {

const result =
previousApplyAFRoleDashboard.apply(
            this,
            arguments
          );


setTimeout(
refreshAFTodaysChecklist,
          0
        );


        return result;

      };

  }


  /*
   * Existing logged-in session.
   */

setTimeout(
refreshAFTodaysChecklist,
    0
  );

})();
/* =========================================================
   A&F MANAGER DAILY STATUS CARDS
   Live operational summary above Today's Checklist
   ========================================================= */

(function connectAFManagerDailyStatusCards() {

  function getAFManagerStatusToday() {

const now = new Date();

const year = now.getFullYear();

const month =
      String(now.getMonth() + 1)
        .padStart(2, "0");

const day =
      String(now.getDate())
        .padStart(2, "0");

    return `${year}-${month}-${day}`;
  }


  function afManagerStatusSameDay(
    value,
    today
  ) {

    if (!value) {
      return false;
    }

    return String(value)
      .slice(0, 10) === today;
  }


  function afManagerStatusNumber(value) {

    return Number(value || 0);
  }


  function afManagerStatusFormat(value) {

    return afManagerStatusNumber(value)
      .toLocaleString(
        undefined,
        {
maximumFractionDigits: 1
        }
      );
  }


  function getAFManagerCurrentUser() {

    if (
typeof getAFCurrentUser ===
      "function"
    ) {

      return getAFCurrentUser();

    }


    try {

      return JSON.parse(
localStorage.getItem(
          "currentUser"
        ) || "null"
      );

    } catch (error) {

      return null;

    }
  }


  function renderAFManagerDailyStatusCards() {

const user =
getAFManagerCurrentUser();


const oldCards =
document.getElementById(
        "afManagerDailyStatusCards"
      );


    if (oldCards) {
oldCards.remove();
    }


    if (
      !user ||
user.role !== "Manager"
    ) {

      return;

    }


const main =
document.querySelector(
        "#mainApplication .main"
      );


    if (!main) {
      return;
    }


const today =
getAFManagerStatusToday();


    /* =====================================================
       READ EXISTING REAL RECORDS
       ===================================================== */

const attendanceRecords =
JSON.parse(
localStorage.getItem(
          "attendanceRecords"
        ) || "[]"
      );


const washingRecords =
JSON.parse(
localStorage.getItem(
          "washingShiftRecords"
        ) || "[]"
      );


const productionRecords =
JSON.parse(
localStorage.getItem(
          "productionRecords"
        ) || "[]"
      );


const employees =
JSON.parse(
localStorage.getItem(
          "employees"
        ) || "[]"
      );


const checklistData =
JSON.parse(
localStorage.getItem(
          "afDailyDashboardChecklist"
        ) || "{}"
      );


    /* =====================================================
       TODAY'S ATTENDANCE
       ===================================================== */

const todayAttendance =
attendanceRecords.filter(record =>

afManagerStatusSameDay(
record.date ||
record.attendanceDate ||
record.recordedAt,
          today
        )

      );


const presentToday =
todayAttendance.filter(record =>

        String(
record.status || ""
        ).toLowerCase() ===
          "present"

      ).length;


const activeEmployees =
employees.filter(employee =>

        String(
employee.employmentStatus ||
          ""
        ).toLowerCase() ===
          "active"

      ).length;


const attendancePercent =
activeEmployees> 0
        ? Math.round(
            (
presentToday /
activeEmployees
            ) * 100
          )
        : 0;


    /* =====================================================
       TODAY'S WASHING
       ===================================================== */

const todayWashing =
washingRecords.filter(record =>

afManagerStatusSameDay(
record.date ||
record.completedAt ||
record.recordedAt,
          today
        ) &&

        (
          String(
record.targetStatus || ""
          ).toUpperCase() ===
            "COMPLETED" ||

record.washingComplete ===
            true
        )

      );


const washingKg =
todayWashing.reduce(
        (total, record) =>

          total +
afManagerStatusNumber(
record.actualWashedKg
          ),

        0
      );


const washingTargetKg =
todayWashing.reduce(
        (total, record) =>

          total +
afManagerStatusNumber(
record.targetKg
          ),

        0
      );


const washingAchievement =
washingTargetKg> 0
        ? Math.round(
            (
washingKg /
washingTargetKg
            ) * 100
          )
        : null;


    /* =====================================================
       TODAY'S PRODUCTION
       ===================================================== */

const todayProduction =
productionRecords.filter(record =>

afManagerStatusSameDay(
record.date ||
record.createdAt ||
record.recordedAt,
          today
        ) &&

        String(
record.productionStatus ||
          ""
        ).toUpperCase() ===
          "COMPLETED"

      );


const totalPolesToday =
todayProduction.reduce(
        (total, record) =>

          total +
afManagerStatusNumber(
record.totalPoles
          ),

        0
      );


const finishedKgToday =
todayProduction.reduce(
        (total, record) =>

          total +
afManagerStatusNumber(
record.productionWeight
          ),

        0
      );


    /* =====================================================
       MANAGER CHECKLIST STATUS
       8 Manager daily items
       ===================================================== */

const managerChecklistIds = [

      "managerAttendance",
      "managerFactoryInspection",
      "managerWashing",
      "managerProduction",
      "managerStock",
      "managerStaffIssues",
      "managerCleanliness",
      "managerEndDay"

    ];


const savedToday =
checklistData[today] || {};


    let completedChecks = 0;


managerChecklistIds.forEach(id => {

const saved =
savedToday[id];


      if (
        saved &&
        (
saved.status === "DONE" ||
saved.status ===
            "NO_ACTIVITY"
        )
      ) {

completedChecks++;

      }

    });


    /*
     * Add automatic system completion where
     * the Manager has not manually checked it.
     */

    if (
todayAttendance.length> 0 &&
      !savedToday.managerAttendance
    ) {

completedChecks++;

    }


    if (
todayWashing.length> 0 &&
      !savedToday.managerWashing
    ) {

completedChecks++;

    }


    if (
todayProduction.length> 0 &&
      !savedToday.managerProduction
    ) {

completedChecks++;

    }


completedChecks =
Math.min(
completedChecks,
managerChecklistIds.length
      );


const pendingChecks =
managerChecklistIds.length -
completedChecks;


    /* =====================================================
       BUILD CARDS
       ===================================================== */

const cards =
document.createElement(
        "div"
      );


cards.id =
      "afManagerDailyStatusCards";


cards.style.cssText = `
display:grid;
      grid-template-columns:
        repeat(4,minmax(145px,1fr));
      gap:10px;
      margin:14px 0 10px 0;
    `;


cards.innerHTML = `

<div
        class="card"
        style="
          padding:13px;
          min-height:82px;
        "
>

<div
          style="
            font-size:11px;
            color:#68776f;
font-weight:bold;
          "
>
          TODAY'S ATTENDANCE
</div>

<div
          style="
            margin-top:7px;
            font-size:21px;
font-weight:bold;
            color:#173027;
          "
>
          ${presentToday}/${activeEmployees}
</div>

<div
          style="
            margin-top:3px;
            font-size:10px;
            color:#777;
          "
>
          Present •
          ${attendancePercent}%
</div>

</div>


<div
        class="card"
        style="
          padding:13px;
          min-height:82px;
        "
>

<div
          style="
            font-size:11px;
            color:#68776f;
font-weight:bold;
          "
>
          TODAY'S WASHING
</div>

<div
          style="
            margin-top:7px;
            font-size:21px;
font-weight:bold;
            color:#173027;
          "
>
          ${
afManagerStatusFormat(
washingKg
            )
          } kg
</div>

<div
          style="
            margin-top:3px;
            font-size:10px;
            color:#777;
          "
>
          ${
washingAchievement !==
            null
              ? washingAchievement +
                "% of target"
              : todayWashing.length
                ? "Completed"
                : "No washing recorded"
          }
</div>

</div>


<div
        class="card"
        style="
          padding:13px;
          min-height:82px;
        "
>

<div
          style="
            font-size:11px;
            color:#68776f;
font-weight:bold;
          "
>
          TODAY'S PRODUCTION
</div>

<div
          style="
            margin-top:7px;
            font-size:21px;
font-weight:bold;
            color:#173027;
          "
>
          ${
afManagerStatusFormat(
totalPolesToday
            )
          }
          poles
</div>

<div
          style="
            margin-top:3px;
            font-size:10px;
            color:#777;
          "
>
          ${
afManagerStatusFormat(
finishedKgToday
            )
          } kg finished
</div>

</div>


<div
        class="card"
        style="
          padding:13px;
          min-height:82px;
        "
>

<div
          style="
            font-size:11px;
            color:#68776f;
font-weight:bold;
          "
>
          PENDING DAILY CHECKS
</div>

<div
          style="
            margin-top:7px;
            font-size:21px;
font-weight:bold;
            color:
              ${
pendingChecks === 0
                  ? "#0b5d3b"
                  : "#8a5a00"
              };
          "
>
          ${pendingChecks}
</div>

<div
          style="
            margin-top:3px;
            font-size:10px;
            color:#777;
          "
>
          ${completedChecks}/${
managerChecklistIds.length
          }
          checklist items complete
</div>

</div>

    `;


    /* =====================================================
       RESPONSIVE CARDS
       ===================================================== */

const responsive =
document.createElement(
        "style"
      );


responsive.textContent = `

      @media (max-width:900px) {

        #afManagerDailyStatusCards {
          grid-template-columns:
            repeat(2,minmax(140px,1fr))
            !important;
        }

      }


      @media (max-width:520px) {

        #afManagerDailyStatusCards {
          grid-template-columns:
            1fr !important;
        }

      }

    `;


cards.appendChild(
      responsive
    );


    /* =====================================================
       INSERT ABOVE TODAY'S CHECKLIST
       ===================================================== */

const checklist =
document.getElementById(
        "afTodaysChecklist"
      );


    if (
      checklist &&
checklist.parentElement === main
    ) {

main.insertBefore(
        cards,
        checklist
      );

    } else {

const operations =
document.getElementById(
          "operationsOverview"
        );


      if (
        operations &&
operations.parentElement === main
      ) {

main.insertBefore(
          cards,
          operations
        );

      } else {

main.prepend(cards);

      }

    }

  }


window.refreshAFManagerDailyStatusCards =
renderAFManagerDailyStatusCards;


  /* =======================================================
     CONNECT AFTER ROLE DASHBOARD RENDERS
     ======================================================= */

  if (
typeof applyAFRoleDashboard ===
    "function"
  ) {

const previousApplyAFRoleDashboard =
applyAFRoleDashboard;


applyAFRoleDashboard =
      function() {

const result =
previousApplyAFRoleDashboard.apply(
            this,
            arguments
          );


setTimeout(
renderAFManagerDailyStatusCards,
          20
        );


        return result;

      };

  }


  /*
   * Existing logged-in Manager session.
   */

setTimeout(
renderAFManagerDailyStatusCards,
    50
  );

})();

/* =========================================================
   A&F QUALITY & DISCIPLINE
   DIRECTOR CORRECTION + AUDIT HISTORY
   ========================================================= */

(function connectAFQualityDisciplineDirectorCorrection() {

const originalViewQDRecords =
typeof viewAFQualityDisciplineRecords === "function"
      ? viewAFQualityDisciplineRecords
      : null;


  if (!originalViewQDRecords) {
    return;
  }


const criteria = [

    {
      key: "qualityOfWork",
      label: "Quality of Work / Workmanship"
    },

    {
      key: "instructions",
      label: "Follows Work Instructions & Procedures"
    },

    {
      key: "equipmentCare",
      label: "Care of Machines, Tools & Company Property"
    },

    {
      key: "safety",
      label: "Safety Procedures / PPE Compliance"
    },

    {
      key: "cleanliness",
      label: "Cleanliness of Work Area"
    },

    {
      key: "teamwork",
      label: "Teamwork & Cooperation"
    },

    {
      key: "initiative",
      label: "Initiative / Willingness to Work"
    },

    {
      key: "discipline",
      label: "Discipline & Respect"
    },

    {
      key: "responsibility",
      label: "Responsibility / Works Without Unnecessary Supervision"
    },

    {
      key: "materialHandling",
      label: "Proper Material Handling / Avoiding Unnecessary Waste"
    }

  ];


  /* =======================================================
     HELPERS
     ======================================================= */

  function getQDCurrentUser() {

    if (
typeof getAFCurrentUser ===
      "function"
    ) {

      return getAFCurrentUser();

    }


    try {

      return JSON.parse(
localStorage.getItem(
          "currentUser"
        ) || "null"
      );

    } catch (error) {

      return null;

    }

  }


  function escapeQD(value) {

const div =
document.createElement("div");

div.textContent =
      String(value ?? "");

    return div.innerHTML;

  }


  function getQDRating(score) {

const value =
      Number(score || 0);


    if (value >= 90) {
      return "Excellent";
    }


    if (value >= 70) {
      return "Good";
    }


    if (value >= 50) {
      return "Fair";
    }


    if (value >= 30) {
      return "Poor";
    }


    return "Very Poor";

  }


  function formatQDDateTime(value) {

    if (!value) {
      return "—";
    }


const date =
      new Date(value);


    if (
Number.isNaN(
date.getTime()
      )
    ) {

      return String(value);

    }


    return date.toLocaleString();

  }


  function getQDRecordId(record) {

    return String(
record.id ||
      ""
    );

  }


  /* =======================================================
     OPEN DIRECTOR CORRECTION FORM
     ======================================================= */

  function openQDDirectorCorrection(
recordId
  ) {

const currentUser =
getQDCurrentUser();


    if (
      !currentUser ||
currentUser.role !== "Director"
    ) {

      alert(
        "Access Denied.\n\n" +
        "Only the Director can correct a submitted Quality & Discipline assessment."
      );

      return;

    }


const records =
getAFQualityDisciplineRecords();


const recordIndex =
records.findIndex(
        record =>
getQDRecordId(record) ===
          String(recordId)
      );


    if (recordIndex< 0) {

      alert(
        "Assessment record could not be found."
      );

      return;

    }


const record =
      records[recordIndex];


const existingScores =
record.scores || {};


const modal =
document.createElement(
        "div"
      );


modal.id =
      "afQDCorrectionModal";


modal.style.cssText = `
position:fixed;
      inset:0;
      z-index:100005;
background:rgba(0,0,0,.62);
display:flex;
align-items:center;
justify-content:center;
      padding:10px;
font-family:Arial,sans-serif;
    `;


const criteriaRows =
criteria.map(
        (criterion, index) => {

const score =
            Number(
existingScores[
criterion.key
              ] || 0
            );


          /*
           * When Director assesses/corrects
           * the Manager, use management wording.
           */

const label =
criterion.key ===
              "instructions" &&
            String(
record.employeeRole ||
record.position ||
              ""
            ).toLowerCase()
              .includes("manager")

              ? "Follows Management Instructions & Company Procedures"

              : criterion.label;


          return `

<tr>

<td
                style="
                  padding:9px;
                  border:1px solid #ddd;
                "
>
                ${index + 1}
</td>


<td
                style="
                  padding:9px;
                  border:1px solid #ddd;
                "
>
                ${escapeQD(label)}
</td>


<td
                style="
                  padding:7px;
                  border:1px solid #ddd;
text-align:center;
                "
>

<input
                  type="number"
                  class="qdCorrectionScore"
                  data-key="${escapeQD(
criterion.key
                  )}"
                  min="0"
                  max="10"
                  step="1"
                  value="${score}"
                  style="
                    width:75px;
                    padding:7px;
text-align:center;
                    border:1px solid #bbb;
                    border-radius:6px;
                  "
>

</td>

</tr>

          `;

        }
      ).join("");


modal.innerHTML = `

<div
        style="
          width:900px;
          max-width:98%;
          max-height:95vh;
overflow:auto;
background:white;
          border-radius:14px;
          box-shadow:
            0 12px 40px
rgba(0,0,0,.35);
        "
>

<div
          style="
            background:#0b5d3b;
color:white;
            padding:18px 22px;
display:flex;
            justify-content:
              space-between;
align-items:center;
            gap:15px;
          "
>

<div>

<div
              style="
                font-size:11px;
                letter-spacing:1.2px;
font-weight:bold;
                opacity:.85;
              "
>
              A&F WEKAVERA LTD
              •
              WASTE2WEALTH SOLUTIONS
</div>


<h2
              style="
                margin:5px 0 0;
                font-size:21px;
              "
>
              Director Assessment Correction
</h2>

</div>


<button
            id="closeQDCorrection"
            type="button"
            style="
              border:0;
background:white;
              color:#0b5d3b;
              padding:8px 13px;
              border-radius:7px;
font-weight:bold;
cursor:pointer;
            "
>
✕ Close
</button>

</div>


<div
          style="
            padding:20px;
          "
>

<div
            style="
              background:#fff8e7;
              border:1px solid #ead69a;
              padding:12px;
              border-radius:8px;
              margin-bottom:16px;
              font-size:12px;
              line-height:1.5;
            "
>

<b>
              Director Correction Control
</b>

<br>

            The submitted assessment remains
            part of the audit history.
            A correction can only be saved
            after a reason is entered.

</div>


<div
            style="
display:grid;
              grid-template-columns:
                repeat(2,1fr);
              gap:10px;
              margin-bottom:16px;
            "
>

<div>

<b>Employee:</b>

<br>

              ${escapeQD(
record.employeeName ||
                ""
              )}

<br>

<small>
                ${escapeQD(
record.employeeId ||
                  ""
                )}
</small>

</div>


<div>

<b>Week:</b>

<br>

              ${escapeQD(
record.weekStart ||
                ""
              )}

              to

              ${escapeQD(
record.weekEnd ||
                ""
              )}

</div>


<div>

<b>Original Assessor:</b>

<br>

              ${escapeQD(
record.assessorName ||
                ""
              )}

<small>
                (
                ${escapeQD(
record.assessorRole ||
                  ""
                )}
                )
</small>

</div>


<div>

<b>Current Score:</b>

<br>

<span
                id="qdCurrentCorrectionScore"
                style="
                  font-size:18px;
font-weight:bold;
                  color:#0b5d3b;
                "
>
                ${Number(
record.totalScore ||
                  0
                ).toFixed(0)}
                /100
</span>

              •

<span
                id="qdCurrentCorrectionRating"
>
                ${escapeQD(
getQDRating(
record.totalScore
                  )
                )}
</span>

</div>

</div>


<div
            style="
              overflow-x:auto;
              margin-bottom:16px;
            "
>

<table
              style="
                width:100%;
border-collapse:collapse;
                font-size:12px;
              "
>

<thead>

<tr
                  style="
                    background:#eef7f1;
                    color:#173027;
                  "
>

<th
                    style="
                      padding:9px;
                      border:1px solid #ddd;
                      width:45px;
                    "
>
                    #
</th>

<th
                    style="
                      padding:9px;
                      border:1px solid #ddd;
text-align:left;
                    "
>
                    Assessment Criterion
</th>

<th
                    style="
                      padding:9px;
                      border:1px solid #ddd;
                      width:110px;
                    "
>
                    Score /10
</th>

</tr>

</thead>


<tbody>

                ${criteriaRows}

</tbody>

</table>

</div>


<div
            style="
display:grid;
              grid-template-columns:
                1fr 180px;
              gap:12px;
              margin-bottom:16px;
            "
>

<div>

<label
                style="
font-weight:bold;
                  font-size:12px;
                "
>
                Manager / Assessor Comments
</label>

<textarea
                id="qdCorrectionComments"
                rows="4"
                style="
                  width:100%;
box-sizing:border-box;
                  margin-top:6px;
                  padding:10px;
                  border:1px solid #ccc;
                  border-radius:7px;
resize:vertical;
                "
>${escapeQD(
record.comments ||
record.managerComments ||
                ""
              )}</textarea>

</div>


<div
              style="
                background:#f5f8f6;
                border:1px solid #dce6e0;
                border-radius:8px;
                padding:12px;
              "
>

<div
                style="
                  font-size:11px;
                  color:#666;
                "
>
                CORRECTED TOTAL
</div>


<div
                id="qdCorrectionTotal"
                style="
                  margin-top:5px;
                  font-size:25px;
font-weight:bold;
                  color:#0b5d3b;
                "
>
                0/100
</div>


<div
                id="qdCorrectionContribution"
                style="
                  margin-top:4px;
                  font-size:12px;
                  color:#555;
                "
>
                Contribution:
                0.00/10
</div>


<div
                id="qdCorrectionRating"
                style="
                  margin-top:4px;
                  font-size:12px;
font-weight:bold;
                "
>
</div>

</div>

</div>


<div
            style="
              margin-bottom:18px;
            "
>

<label
              style="
font-weight:bold;
                color:#8a4f00;
              "
>
              Reason for Correction *
</label>


<textarea
              id="qdCorrectionReason"
              rows="3"
              placeholder="Director must explain why this submitted assessment is being corrected."
              style="
                width:100%;
box-sizing:border-box;
                margin-top:6px;
                padding:10px;
                border:1px solid #d7b46a;
                border-radius:7px;
resize:vertical;
                background:#fffdf7;
              "
></textarea>

</div>


<div
            style="
display:flex;
justify-content:flex-end;
              gap:8px;
flex-wrap:wrap;
            "
>

<button
              id="cancelQDCorrection"
              type="button"
              style="
                padding:10px 15px;
                border:1px solid #ccc;
background:white;
                border-radius:7px;
cursor:pointer;
              "
>
              Cancel
</button>


<button
              id="saveQDCorrection"
              type="button"
              style="
                padding:10px 16px;
                border:0;
                background:#0b5d3b;
color:white;
                border-radius:7px;
font-weight:bold;
cursor:pointer;
              "
>
              Save Director Correction
</button>

</div>

</div>

</div>

    `;


document.body.appendChild(
      modal
    );


    function calculateCorrection() {

      let total = 0;


      modal
        .querySelectorAll(
          ".qdCorrectionScore"
        )
        .forEach(input => {

          let value =
            Number(input.value);


          if (
            !Number.isFinite(value)
          ) {

            value = 0;

          }


          value =
Math.max(
              0,
Math.min(
                10,
                value
              )
            );


          total += value;

        });


const contribution =
        total * 0.10;


modal.querySelector(
        "#qdCorrectionTotal"
      ).textContent =
total.toFixed(0) +
        "/100";


modal.querySelector(
        "#qdCorrectionContribution"
      ).textContent =
        "Contribution: " +
contribution.toFixed(2) +
        "/10";


modal.querySelector(
        "#qdCorrectionRating"
      ).textContent =
getQDRating(total);


      return {
        total,
        contribution,
        rating:
getQDRating(total)
      };

    }


    modal
      .querySelectorAll(
        ".qdCorrectionScore"
      )
      .forEach(input => {

input.addEventListener(
          "input",
calculateCorrection
        );

      });


calculateCorrection();


modal.querySelector(
      "#closeQDCorrection"
    ).onclick = () => {

modal.remove();

    };


modal.querySelector(
      "#cancelQDCorrection"
    ).onclick = () => {

modal.remove();

    };


modal.querySelector(
      "#saveQDCorrection"
    ).onclick = () => {

const reason =
modal.querySelector(
          "#qdCorrectionReason"
        ).value.trim();


      if (!reason) {

        alert(
          "Please enter the reason for this correction."
        );

        return;

      }


const correctedScores = {};

      let invalidScore = false;


      modal
        .querySelectorAll(
          ".qdCorrectionScore"
        )
        .forEach(input => {

const value =
            Number(input.value);


          if (
            !Number.isFinite(value) ||
            value < 0 ||
            value > 10
          ) {

invalidScore = true;

            return;

          }


correctedScores[
input.dataset.key
          ] = value;

        });


      if (invalidScore) {

        alert(
          "Every criterion must have a score from 0 to 10."
        );

        return;

      }


const result =
calculateCorrection();


const newComments =
modal.querySelector(
          "#qdCorrectionComments"
        ).value.trim();


const latestRecords =
getAFQualityDisciplineRecords();


const latestIndex =
latestRecords.findIndex(
          item =>
getQDRecordId(item) ===
            String(recordId)
        );


      if (latestIndex< 0) {

        alert(
          "The assessment could not be found. No correction was saved."
        );

        return;

      }


const latestRecord =
latestRecords[
latestIndex
        ];


      if (
        !Array.isArray(
latestRecord.correctionHistory
        )
      ) {

latestRecord.correctionHistory =
          [];

      }


      /*
       * Preserve complete BEFORE state.
       */

const beforeSnapshot = {

        scores:
JSON.parse(
JSON.stringify(
latestRecord.scores ||
              {}
            )
          ),

totalScore:
          Number(
latestRecord.totalScore ||
            0
          ),

performanceContribution:
          Number(
latestRecord
              .performanceContribution ||
            0
          ),

        rating:
latestRecord.rating ||
getQDRating(
latestRecord.totalScore
          ),

        comments:
latestRecord.comments ||
latestRecord.managerComments ||
          ""

      };


const afterSnapshot = {

        scores:
JSON.parse(
JSON.stringify(
correctedScores
            )
          ),

totalScore:
result.total,

performanceContribution:
result.contribution,

        rating:
result.rating,

        comments:
newComments

      };


latestRecord
        .correctionHistory
        .push({

correctedAt:
            new Date()
              .toISOString(),

correctedByEmployeeId:
currentUser.employeeId ||
            "",

correctedByName:
currentUser.fullName ||
            "",

correctedByRole:
currentUser.role ||
            "Director",

          reason:
            reason,

          before:
beforeSnapshot,

          after:
afterSnapshot

        });


      /*
       * Apply corrected current values.
       */

latestRecord.scores =
correctedScores;


latestRecord.totalScore =
result.total;


latestRecord
        .qualityDisciplinePercent =
result.total;


latestRecord
        .performanceContribution =
result.contribution;


latestRecord.rating =
result.rating;


latestRecord.comments =
newComments;


latestRecord.managerComments =
newComments;


latestRecord.status =
        "CORRECTED";


latestRecord.locked =
        true;


latestRecord.lastCorrectedAt =
        new Date().toISOString();


latestRecord
        .lastCorrectedByEmployeeId =
currentUser.employeeId ||
        "";


latestRecord
        .lastCorrectedByName =
currentUser.fullName ||
        "";


latestRecord
        .lastCorrectionReason =
        reason;


saveAFQualityDisciplineRecords(
latestRecords
      );


      alert(
        "Director correction saved successfully.\n\n" +
        "Employee: " +
        (
latestRecord.employeeName ||
          ""
        ) +
        "\nCorrected Score: " +
result.total.toFixed(0) +
        "/100\nRating: " +
result.rating +
        "\nPerformance Contribution: " +
result.contribution.toFixed(2) +
        "/10\n\n" +
        "The previous assessment has been preserved in the audit history."
      );


modal.remove();


viewAFQualityDisciplineRecords();

    };

  }


  /* =======================================================
     VIEW AUDIT HISTORY
     ======================================================= */

  function openQDAuditHistory(
recordId
  ) {

const records =
getAFQualityDisciplineRecords();


const record =
records.find(
        item =>
getQDRecordId(item) ===
          String(recordId)
      );


    if (!record) {

      alert(
        "Assessment record could not be found."
      );

      return;

    }


const history =
Array.isArray(
record.correctionHistory
      )
        ? record.correctionHistory
        : [];


const modal =
document.createElement(
        "div"
      );


modal.style.cssText = `
position:fixed;
      inset:0;
      z-index:100006;
background:rgba(0,0,0,.6);
display:flex;
align-items:center;
justify-content:center;
      padding:10px;
font-family:Arial,sans-serif;
    `;


const historyRows =
history.length

        ? history
            .slice()
            .reverse()
            .map(
              (entry, index) => {

const before =
entry.before || {};

const after =
entry.after || {};


                return `

<tr>

<td>
                      ${
history.length -
                        index
                      }
</td>

<td>
                      ${escapeQD(
formatQDDateTime(
entry.correctedAt
                        )
                      )}
</td>

<td>

<b>
                        ${escapeQD(
entry.correctedByName ||
                          ""
                        )}
</b>

<br>

<small>
                        ${escapeQD(
entry.correctedByRole ||
                          "Director"
                        )}
</small>

</td>

<td>
                      ${Number(
before.totalScore ||
                        0
                      ).toFixed(0)}
                      /100
</td>

<td>
                      ${Number(
after.totalScore ||
                        0
                      ).toFixed(0)}
                      /100
</td>

<td>
                      ${escapeQD(
entry.reason ||
                        ""
                      )}
</td>

</tr>

                `;

              }
            )
            .join("")

        : `

<tr>

<td
colspan="6"
                style="
text-align:center;
                  padding:20px;
                  color:#666;
                "
>
                No corrections have been made
                to this assessment.
</td>

</tr>

          `;


modal.innerHTML = `

<div
        style="
          width:950px;
          max-width:98%;
          max-height:92vh;
overflow:auto;
background:white;
          border-radius:14px;
          padding:20px;
        "
>

<div
          style="
display:flex;
            justify-content:
              space-between;
align-items:center;
            gap:12px;
            margin-bottom:16px;
          "
>

<div>

<h2
              style="
                margin:0;
                color:#0b5d3b;
              "
>
              Assessment Audit History
</h2>


<div
              style="
                margin-top:5px;
                font-size:12px;
                color:#666;
              "
>
              ${escapeQD(
record.employeeName ||
                ""
              )}
              •
              ${escapeQD(
record.weekStart ||
                ""
              )}
              to
              ${escapeQD(
record.weekEnd ||
                ""
              )}
</div>

</div>


<button
            id="closeQDAudit"
            type="button"
            style="
              padding:8px 13px;
              border:1px solid #ccc;
background:white;
              border-radius:7px;
cursor:pointer;
            "
>
            Close
</button>

</div>


<div
          style="
            overflow-x:auto;
          "
>

<table
            id="qdAuditTable"
            style="
              width:100%;
              min-width:760px;
border-collapse:collapse;
              font-size:12px;
            "
>

<thead>

<tr
                style="
                  background:#0b5d3b;
color:white;
                "
>

<th>#</th>

<th>
                  Date / Time
</th>

<th>
                  Corrected By
</th>

<th>
                  Previous Score
</th>

<th>
                  New Score
</th>

<th>
                  Reason
</th>

</tr>

</thead>


<tbody>

              ${historyRows}

</tbody>

</table>

</div>

</div>

    `;


document.body.appendChild(
      modal
    );


    modal
      .querySelectorAll(
        "#qdAuditTableth, #qdAuditTable td"
      )
      .forEach(cell => {

cell.style.border =
          "1px solid #ddd";

cell.style.padding =
          "8px";

cell.style.verticalAlign =
          "top";

      });


modal.querySelector(
      "#closeQDAudit"
    ).onclick = () => {

modal.remove();

    };

  }


  /* =======================================================
     REPLACE RECORDS VIEW WITH CONTROLLED VERSION
     ======================================================= */

viewAFQualityDisciplineRecords =
    function() {

const currentUser =
getQDCurrentUser();


      if (
        !currentUser ||
        ![
          "Manager",
          "Director"
        ].includes(
currentUser.role
        )
      ) {

        alert(
          "Access Denied."
        );

        return;

      }


const records =
getAFQualityDisciplineRecords()
          .slice()
          .sort(
            (a, b) =>
              String(
b.weekStart ||
                ""
              ).localeCompare(
                String(
a.weekStart ||
                  ""
                )
              )
          );


const modal =
document.createElement(
          "div"
        );


modal.id =
        "afQDRecordsModal";


modal.style.cssText = `
position:fixed;
        inset:0;
        z-index:100001;
background:rgba(0,0,0,.58);
display:flex;
align-items:center;
justify-content:center;
        padding:10px;
font-family:Arial,sans-serif;
      `;


const rows =
records.length

          ? records.map(record => {

const historyCount =
Array.isArray(
record.correctionHistory
                )
                  ? record
                      .correctionHistory
                      .length
                  : 0;


const rating =
record.rating ||
getQDRating(
record.totalScore
                );


const directorActions =
currentUser.role ===
                  "Director"

                  ? `

<button
                      type="button"
                      class="qdDirectorCorrectBtn"
                      data-record-id="${escapeQD(
getQDRecordId(
                          record
                        )
                      )}"
                      style="
                        padding:6px 8px;
                        border:0;
                        border-radius:5px;
                        background:#0b5d3b;
color:white;
                        font-size:10px;
font-weight:bold;
cursor:pointer;
                        margin:2px;
                      "
>
                      Correct
</button>

                  `

                  : "";


              return `

<tr>

<td>

                    ${escapeQD(
record.weekStart ||
                      ""
                    )}

<br>

                    to

<br>

                    ${escapeQD(
record.weekEnd ||
                      ""
                    )}

</td>


<td>

<b>
                      ${escapeQD(
record.employeeName ||
                        ""
                      )}
</b>

<br>

<small>
                      ${escapeQD(
record.employeeId ||
                        ""
                      )}
</small>

</td>


<td>
                    ${escapeQD(
record.teamName ||
                      "—"
                    )}
</td>


<td
                    style="
text-align:center;
font-weight:bold;
                    "
>
                    ${Number(
record.totalScore ||
                      0
                    ).toFixed(0)}
                    /100
</td>


<td>
                    ${escapeQD(
                      rating
                    )}
</td>


<td
                    style="
text-align:center;
font-weight:bold;
                    "
>
                    ${Number(
                      record
                        .performanceContribution ||
                      0
                    ).toFixed(2)}
                    /10
</td>


<td>

                    ${escapeQD(
record.assessorName ||
                      ""
                    )}

<br>

<small>
                      ${escapeQD(
record.assessorRole ||
                        ""
                      )}
</small>

</td>


<td
                    style="
text-align:center;
                    "
>

                    ${
record.status ===
                      "CORRECTED"

                        ? `
<b
                            style="
                              color:#8a5a00;
                            "
>
                            CORRECTED
</b>
                        `

                        : `
<b>
                            ${escapeQD(
record.status ||
                              "SUBMITTED"
                            )}
</b>
                        `
                    }

</td>


<td
                    style="
text-align:center;
white-space:nowrap;
                    "
>

                    ${directorActions}


<button
                      type="button"
                      class="qdAuditHistoryBtn"
                      data-record-id="${escapeQD(
getQDRecordId(
                          record
                        )
                      )}"
                      style="
                        padding:6px 8px;
                        border:1px solid #bbb;
                        border-radius:5px;
background:white;
                        font-size:10px;
cursor:pointer;
                        margin:2px;
                      "
>
                      Audit
                      ${
historyCount> 0
                          ? "(" +
historyCount +
                            ")"
                          : ""
                      }
</button>

</td>

</tr>

              `;

            }).join("")

          : `

<tr>

<td
colspan="9"
                  style="
text-align:center;
                    padding:20px;
                    color:#666;
                  "
>
                  No Quality & Discipline
                  assessments have been
                  submitted yet.
</td>

</tr>

            `;


modal.innerHTML = `

<div
          style="
            width:1150px;
            max-width:98%;
            max-height:94vh;
overflow:auto;
background:white;
            border-radius:14px;
            padding:22px;
          "
>

<div
            style="
display:flex;
              justify-content:
                space-between;
align-items:center;
              gap:15px;
              margin-bottom:18px;
            "
>

<div>

<h2
                style="
                  margin:0;
                  color:#0b5d3b;
                "
>
                Quality & Discipline Records
</h2>


<div
                style="
                  margin-top:5px;
                  color:#666;
                  font-size:13px;
                "
>

                ${
currentUser.role ===
                  "Director"

                    ? "Submitted assessments are locked. Director corrections require a reason and are preserved in the audit history."

                    : "Submitted assessments are locked and read-only."
                }

</div>

</div>


<button
              id="closeQDRecords"
              type="button"
              style="
                padding:9px 15px;
                border:1px solid #ccc;
background:white;
                border-radius:7px;
cursor:pointer;
              "
>
              Close
</button>

</div>


<div
            style="
              overflow-x:auto;
            "
>

<table
              id="qdRecordsTable"
              style="
                width:100%;
                min-width:1050px;
border-collapse:collapse;
                font-size:12px;
              "
>

<thead>

<tr
                  style="
                    background:#0b5d3b;
color:white;
                  "
>

<th>Week</th>

<th>Employee</th>

<th>Team</th>

<th>Score</th>

<th>Rating</th>

<th>
                    Contribution
</th>

<th>
                    Assessed By
</th>

<th>Status</th>

<th>Action</th>

</tr>

</thead>


<tbody>

                ${rows}

</tbody>

</table>

</div>

</div>

      `;


document.body.appendChild(
        modal
      );


      modal
        .querySelectorAll(
          "#qdRecordsTableth, #qdRecordsTable td"
        )
        .forEach(cell => {

cell.style.border =
            "1px solid #ddd";

cell.style.padding =
            "8px";

cell.style.verticalAlign =
            "top";

        });


modal.querySelector(
        "#closeQDRecords"
      ).onclick = () => {

modal.remove();

      };


      modal
        .querySelectorAll(
          ".qdDirectorCorrectBtn"
        )
        .forEach(button => {

button.onclick = () => {

const recordId =
button.dataset.recordId;


modal.remove();


openQDDirectorCorrection(
recordId
            );

          };

        });


      modal
        .querySelectorAll(
          ".qdAuditHistoryBtn"
        )
        .forEach(button => {

button.onclick = () => {

openQDAuditHistory(
button.dataset.recordId
            );

          };

        });

    };


  /*
   * Expose these for future performance
   * and reporting modules.
   */

window.openQDDirectorCorrection =
openQDDirectorCorrection;


window.openQDAuditHistory =
openQDAuditHistory;

})();
 
/* =========================================================
   A&F DIRECTOR PRODUCTION TARGETS
   Director sets production target.
   Manager uses the target during production.
   ========================================================= */

(function connectAFProductionTargets() {

const STORAGE_KEY =
    "afProductionTargets";


  /* =======================================================
     BASIC HELPERS
     ======================================================= */

  function getProductionTargets() {

    try {

const records =
JSON.parse(
localStorage.getItem(
            STORAGE_KEY
          ) || "[]"
        );

      return Array.isArray(records)
        ? records
        : [];

    } catch (error) {

console.error(
        "Unable to read production targets:",
        error
      );

      return [];
    }
  }


  function saveProductionTargets(records) {

localStorage.setItem(
      STORAGE_KEY,
JSON.stringify(records)
    );
  }


  function getCurrentUser() {

    try {

      return JSON.parse(
localStorage.getItem(
          "currentUser"
        ) || "{}"
      );

    } catch (error) {

      return {};
    }
  }


  function escapeText(value) {

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function localDateString() {

const now =
      new Date();

const year =
now.getFullYear();

const month =
      String(
now.getMonth() + 1
      ).padStart(2, "0");

const day =
      String(
now.getDate()
      ).padStart(2, "0");

    return (
      year +
      "-" +
      month +
      "-" +
      day
    );
  }


  function getActiveShifts() {

    if (
typeof getShiftSettings !==
      "function"
    ) {
      return [];
    }

const shifts =
getShiftSettings();

    if (!Array.isArray(shifts)) {
      return [];
    }

    return shifts.filter(
      shift =>
        String(
shift.status || ""
        ).toLowerCase() ===
        "active"
    );
  }


  /* =======================================================
     SET PRODUCTION TARGET
     DIRECTOR ONLY
     ======================================================= */

  function setAFProductionTarget() {

const currentUser =
getCurrentUser();

    if (
      String(
currentUser.role || ""
      ) !== "Director"
    ) {

      alert(
        "Access Denied\n\n" +
        "Only the Director can set production targets."
      );

      return;
    }


const shifts =
getActiveShifts();


    if (!shifts.length) {

      alert(
        "There is no active working shift.\n\n" +
        "Please configure an active shift first."
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
        width:620px;
        max-width:95%;
        max-height:92vh;
overflow:auto;
        border-radius:14px;
        padding:26px;
        box-shadow:
          0 12px 35px
rgba(0,0,0,.28);
      ">

<h2 style="
          margin:0 0 6px;
          color:#0b5d3b;
        ">
          Set Production Target
</h2>


<div style="
          color:#666;
          font-size:13px;
          margin-bottom:20px;
          line-height:1.5;
        ">
          Director sets the expected number
          of finished fencing poles for the
          selected date and working shift.
          The Manager cannot change this target.
</div>


<label style="
display:block;
font-weight:bold;
          margin-bottom:6px;
        ">
          Production Date
</label>

<input
          id="afProductionTargetDate"
          type="date"
          value="${localDateString()}"
          style="
            width:100%;
box-sizing:border-box;
            padding:11px;
            margin-bottom:16px;
            border:1px solid #ccc;
            border-radius:8px;
          "
>


<label style="
display:block;
font-weight:bold;
          margin-bottom:6px;
        ">
          Working Shift
</label>

<select
          id="afProductionTargetShift"
          style="
            width:100%;
box-sizing:border-box;
            padding:11px;
            margin-bottom:16px;
            border:1px solid #ccc;
            border-radius:8px;
          "
>

<option value="">
            Select Working Shift
</option>

          ${shifts.map(
            shift => `

<option
                value="${
escapeText(
shift.id
                  )
                }"
>
                ${
escapeText(
shift.name
                  )
                }
</option>

            `
          ).join("")}

</select>


<label style="
display:block;
font-weight:bold;
          margin-bottom:6px;
        ">
          Target Number of Poles
</label>

<input
          id="afProductionTargetPoles"
          type="number"
          min="1"
          step="1"
          placeholder="Example: 80"
          style="
            width:100%;
box-sizing:border-box;
            padding:11px;
            margin-bottom:8px;
            border:1px solid #ccc;
            border-radius:8px;
          "
>


<div style="
          background:#eef8f2;
          border:1px solid #cfe6d8;
          color:#0b5d3b;
          padding:12px;
          border-radius:8px;
          font-size:13px;
          line-height:1.5;
          margin:14px 0 20px;
        ">

<b>Performance Control</b><br>

          Production Achievement will later
          be calculated as:

<br><br>

<b>
            Actual Poles Produced ÷
            Target Poles × 100
</b>

</div>


<div style="
display:flex;
justify-content:flex-end;
          gap:10px;
flex-wrap:wrap;
        ">

<button
            id="afCloseProductionTarget"
            type="button"
            style="
              padding:10px 18px;
              border:1px solid #ccc;
background:white;
              border-radius:8px;
cursor:pointer;
            "
>
            Close
</button>


<button
            id="afSaveProductionTarget"
            type="button"
            style="
              padding:10px 18px;
              border:0;
              background:#0b5d3b;
color:white;
              border-radius:8px;
cursor:pointer;
font-weight:bold;
            "
>
            Save Production Target
</button>

</div>

</div>
    `;


document.body.appendChild(
      modal
    );


modal.querySelector(
      "#afCloseProductionTarget"
    ).onclick = () => {

modal.remove();
    };


modal.querySelector(
      "#afSaveProductionTarget"
    ).onclick = () => {

const date =
modal.querySelector(
          "#afProductionTargetDate"
        ).value;


const shiftId =
modal.querySelector(
          "#afProductionTargetShift"
        ).value;


const targetPoles =
Math.floor(
          Number(
modal.querySelector(
              "#afProductionTargetPoles"
            ).value
          ) || 0
        );


const shift =
shifts.find(
          item =>
            String(item.id) ===
            String(shiftId)
        );


      if (!date) {

        alert(
          "Please select the production date."
        );

        return;
      }


      if (!shift) {

        alert(
          "Please select the working shift."
        );

        return;
      }


      if (targetPoles<= 0) {

        alert(
          "Target poles must be greater than zero."
        );

        return;
      }


const records =
getProductionTargets();


const duplicate =
records.some(
          record =>

record.date === date &&

            String(
record.shiftId || ""
            ) ===
            String(shift.id) &&

            String(
record.status || ""
            ).toUpperCase() ===
            "TARGET SET"
        );


      if (duplicate) {

        alert(
          "A pending production target already exists " +
          "for this date and shift."
        );

        return;
      }


const record = {

        id:
Date.now(),

        date:
          date,

shiftId:
shift.id,

shiftName:
shift.name,

targetPoles:
targetPoles,

actualPoles:
          0,

achievementPercent:
          0,

        status:
          "TARGET SET",

productionRecordId:
          "",

targetSetByEmployeeId:
currentUser.employeeId || "",

targetSetByName:
currentUser.fullName || "",

targetSetByRole:
currentUser.role || "",

createdAt:
          new Date().toISOString(),

completedAt:
          "",

correctionHistory:
          []
      };


records.push(
        record
      );


saveProductionTargets(
        records
      );


      alert(
        "Production target saved successfully.\n\n" +

        "Date: " +
        date +

        "\nShift: " +
shift.name +

        "\nTarget: " +
targetPoles.toLocaleString() +
        " poles\n\n" +

        "The target is now waiting for production."
      );


modal.remove();
    };
  }


  /* =======================================================
     VIEW PRODUCTION TARGETS
     ======================================================= */

  function viewAFProductionTargets() {

const currentUser =
getCurrentUser();

const role =
      String(
currentUser.role || ""
      );


    if (
      ![
        "Director",
        "Manager"
      ].includes(role)
    ) {

      alert(
        "Access Denied\n\n" +
        "You are not authorised to view production targets."
      );

      return;
    }


const records =
getProductionTargets()
        .slice()
        .sort(
          (a, b) => {

            return String(
b.date || ""
            ).localeCompare(
              String(
a.date || ""
              )
            );
          }
        );


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


const rows =
records.length

        ? records.map(
            record => {

const target =
                Number(
record.targetPoles || 0
                );

const actual =
                Number(
record.actualPoles || 0
                );

const achievement =
                Number(
record.achievementPercent || 0
                );


              return `

<tr>

<td>
                    ${
escapeText(
record.date
                      )
                    }
</td>

<td>
                    ${
escapeText(
record.shiftName
                      )
                    }
</td>

<td>
                    ${
target.toLocaleString()
                    }
</td>

<td>
                    ${
actual.toLocaleString()
                    }
</td>

<td>
                    ${
achievement.toFixed(1)
                    }%
</td>

<td>
                    ${
escapeText(
record.status
                      )
                    }
</td>

<td>
                    ${
escapeText(
record.targetSetByName ||
                        "—"
                      )
                    }
</td>

</tr>

              `;
            }
          ).join("")

        : `

<tr>

<td
colspan="7"
              style="
                padding:25px;
text-align:center;
                color:#666;
              "
>
              No production targets
              have been recorded yet.
</td>

</tr>

        `;


modal.innerHTML = `

<div style="
background:white;
        width:900px;
        max-width:97%;
        max-height:92vh;
overflow:auto;
        border-radius:14px;
        padding:24px;
      ">

<div style="
display:flex;
justify-content:space-between;
align-items:flex-start;
          gap:15px;
flex-wrap:wrap;
          margin-bottom:18px;
        ">

<div>

<h2 style="
              margin:0;
              color:#0b5d3b;
            ">
              Production Targets
</h2>

<div style="
              color:#666;
              font-size:13px;
              margin-top:5px;
            ">
              Director production targets
              and actual achievement
</div>

</div>


          ${
            role === "Director"

              ? `

<button
                  id="afNewProductionTarget"
                  type="button"
                  style="
                    border:0;
                    background:#0b5d3b;
color:white;
                    padding:10px 15px;
                    border-radius:8px;
cursor:pointer;
font-weight:bold;
                  "
>
                  + Set Production Target
</button>

              `

              : ""
          }

</div>


<div style="
overflow:auto;
          border:1px solid #ddd;
          border-radius:9px;
        ">

<table style="
            width:100%;
            min-width:760px;
border-collapse:collapse;
            font-size:13px;
          ">

<thead>

<tr style="
                background:#eef8f2;
text-align:left;
              ">

<th>Date</th>
<th>Shift</th>
<th>Target Poles</th>
<th>Actual Poles</th>
<th>Achievement</th>
<th>Status</th>
<th>Set By</th>

</tr>

</thead>


<tbody>
              ${rows}
</tbody>

</table>

</div>


<div style="
text-align:right;
          margin-top:18px;
        ">

<button
            id="afCloseProductionTargets"
            type="button"
            style="
              padding:10px 18px;
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


document.body.appendChild(
      modal
    );


modal.querySelectorAll(
      "th,td"
    ).forEach(
      cell => {

cell.style.padding =
          "10px";

cell.style.borderBottom =
          "1px solid #eee";
      }
    );


modal.querySelector(
      "#afCloseProductionTargets"
    ).onclick = () => {

modal.remove();
    };


const newButton =
modal.querySelector(
        "#afNewProductionTarget"
      );


    if (newButton) {

newButton.onclick = () => {

modal.remove();

setAFProductionTarget();
      };
    }
  }


  /* =======================================================
     EXPOSE FUNCTIONS
     ======================================================= */

window.getAFProductionTargets =
getProductionTargets;

window.saveAFProductionTargets =
saveProductionTargets;

window.setAFProductionTarget =
setAFProductionTarget;

window.viewAFProductionTargets =
viewAFProductionTargets;


  /* =======================================================
     CONNECT TO DIRECTOR QUICK ACTION

     Existing Director "Plan Production"
     button will now open Production Targets.
     ======================================================= */

  if (
typeof window.runRoleAction ===
    "function"
  ) {

const originalRunRoleAction =
window.runRoleAction;


window.runRoleAction =
      function(actionName) {

        if (
actionName ===
          "planProduction"
        ) {

const currentUser =
getCurrentUser();


          if (
            String(
currentUser.role || ""
            ) !== "Director"
          ) {

            alert(
              "Access Denied\n\n" +
              "Only the Director can set production targets."
            );

            return;
          }


viewAFProductionTargets();

          return;
        }


        return originalRunRoleAction(
actionName
        );
      };
  }


})();
/* =========================================================
   A&F PRODUCTION TARGET → PRODUCTION INTEGRATION
   Connects Director target to Manager Record Production
   without replacing the existing production function.
   ========================================================= */

(function connectAFProductionTargetToProduction() {

const TARGET_STORAGE_KEY =
    "afProductionTargets";


  /* =======================================================
     HELPERS
     ======================================================= */

  function getTargets() {

    try {

const records =
JSON.parse(
localStorage.getItem(
            TARGET_STORAGE_KEY
          ) || "[]"
        );

      return Array.isArray(records)
        ? records
        : [];

    } catch (error) {

console.error(
        "Production target read error:",
        error
      );

      return [];
    }
  }


  function saveTargets(records) {

localStorage.setItem(
      TARGET_STORAGE_KEY,
JSON.stringify(records)
    );
  }


  function getPendingTargets() {

    return getTargets()
      .filter(
        record =>
          String(
record.status || ""
          ).toUpperCase() ===
          "TARGET SET"
      )
      .sort(
        (a, b) => {

          return String(
a.date || ""
          ).localeCompare(
            String(
b.date || ""
            )
          );
        }
      );
  }


  function escapeTargetText(value) {

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function getProductionRecords() {

    try {

const records =
JSON.parse(
localStorage.getItem(
            "productionRecords"
          ) || "[]"
        );

      return Array.isArray(records)
        ? records
        : [];

    } catch (error) {

      return [];
    }
  }


  /* =======================================================
     SAVE TARGET COMPLETION
     ======================================================= */

  function completeProductionTarget(
targetId,
productionRecord
  ) {

const targets =
getTargets();


const index =
targets.findIndex(
        record =>
          String(record.id) ===
          String(targetId)
      );


    if (index === -1) {

console.warn(
        "Production target could not be found:",
targetId
      );

      return;
    }


const target =
      targets[index];


    /*
     * Do not complete a target twice.
     */
    if (
      String(
target.status || ""
      ).toUpperCase() !==
      "TARGET SET"
    ) {

      return;
    }


const actualPoles =
      Number(
productionRecord.totalPoles || 0
      );


const targetPoles =
      Number(
target.targetPoles || 0
      );


const achievement =
targetPoles> 0

        ? (
actualPoles /
targetPoles
          ) * 100

        : 0;


target.actualPoles =
actualPoles;


target.achievementPercent =
      Number(
achievement.toFixed(2)
      );


target.productionRecordId =
productionRecord.id || "";


target.status =
      "COMPLETED";


target.completedAt =
      new Date().toISOString();


    /*
     * Also copy target information into the
     * production record itself.
     *
     * This will make the future performance
     * calculation much easier and safer.
     */

productionRecord.productionTargetId =
target.id;


productionRecord.productionTargetPoles =
targetPoles;


productionRecord.productionAchievementPercent =
      Number(
achievement.toFixed(2)
      );


    /*
     * Update the production record.
     */
const productionRecords =
getProductionRecords();


const productionIndex =
productionRecords.findIndex(
        record =>
          String(record.id) ===
          String(productionRecord.id)
      );


    if (productionIndex !== -1) {

productionRecords[
productionIndex
      ] = productionRecord;


localStorage.setItem(
        "productionRecords",
JSON.stringify(
productionRecords
        )
      );
    }


    targets[index] =
      target;


saveTargets(
      targets
    );
  }


  /* =======================================================
     WAIT FOR EXISTING PRODUCTION MODAL
     ======================================================= */

  function connectTargetToOpenProduction() {

const dateInput =
document.querySelector(
        "#productionDate"
      );


const shiftSelect =
document.querySelector(
        "#productionShift"
      );


const saveButton =
document.querySelector(
        "#saveProductionBtn"
      );


    if (
      !dateInput ||
      !shiftSelect ||
      !saveButton
    ) {

      return false;
    }


    /*
     * Prevent connecting twice to the
     * same production window.
     */
    if (
saveButton.dataset
        .afProductionTargetConnected ===
      "yes"
    ) {

      return true;
    }


const pendingTargets =
getPendingTargets();


    /*
     * Production now requires a Director target.
     */
    if (!pendingTargets.length) {

      alert(
        "There is no production target waiting for production.\n\n" +
        "The Director must set a Production Target before production can be recorded."
      );


const productionModal =
saveButton.closest(
          'div[style*="position:fixed"]'
        );


      if (productionModal) {

productionModal.remove();
      }


      return true;
    }


saveButton.dataset
      .afProductionTargetConnected =
      "yes";


    /*
     * Find the main white production panel.
     */
    let productionPanel =
saveButton.parentElement;


    while (
productionPanel&&
productionPanel.parentElement&&
productionPanel.parentElement !==
document.body
    ) {

      if (
productionPanel.querySelector(
          "#productionDate"
        ) &&
productionPanel.querySelector(
          "#productionPoleCategory"
        )
      ) {

        break;
      }


productionPanel =
productionPanel.parentElement;
    }


    /*
     * Create target selector area.
     */
const targetArea =
document.createElement("div");


targetArea.id =
      "afProductionTargetConnection";


targetArea.style.cssText = `
      background:#fff8e6;
      border:1px solid #e5cf91;
      border-radius:10px;
      padding:15px;
      margin-bottom:20px;
    `;


targetArea.innerHTML = `

<div style="
font-weight:bold;
        color:#7a5500;
        margin-bottom:9px;
        font-size:15px;
      ">
        Director Production Target
</div>


<div style="
        font-size:13px;
        color:#66521e;
        margin-bottom:12px;
        line-height:1.5;
      ">
        Select the production target set by
        the Director. Date, shift and target
        quantity will be locked automatically.
</div>


<select
        id="afProductionTargetSelector"
        style="
          width:100%;
box-sizing:border-box;
          padding:10px;
          border:1px solid #d1b96f;
          border-radius:8px;
background:white;
          margin-bottom:12px;
        "
>

<option value="">
          Select Director Production Target
</option>

        ${
pendingTargets.map(
            target => `

<option
                value="${
escapeTargetText(
target.id
                  )
                }"
>

                ${
escapeTargetText(
target.date
                  )
                }

                • ${
escapeTargetText(
target.shiftName
                  )
                }

                • Target ${
                  Number(
target.targetPoles || 0
                  ).toLocaleString()
                } poles

</option>

            `
          ).join("")
        }

</select>


<div style="
display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(160px,1fr));
        gap:10px;
      ">


<div>

<label style="
display:block;
            font-size:12px;
font-weight:bold;
            margin-bottom:4px;
          ">
            Target Poles
</label>

<input
            id="afProductionTargetDisplay"
            type="text"
readonly
            value="—"
            style="
              width:100%;
box-sizing:border-box;
              padding:9px;
              background:#f4f4f4;
              border:1px solid #ccc;
              border-radius:7px;
font-weight:bold;
            "
>

</div>


<div>

<label style="
display:block;
            font-size:12px;
font-weight:bold;
            margin-bottom:4px;
          ">
            Achievement
</label>

<input
            id="afProductionAchievementDisplay"
            type="text"
readonly
            value="Waiting for production"
            style="
              width:100%;
box-sizing:border-box;
              padding:9px;
              background:#f4f4f4;
              border:1px solid #ccc;
              border-radius:7px;
            "
>

</div>


</div>

    `;


    /*
     * Insert immediately before the
     * existing Date / Shift section.
     */
const dateContainer =
dateInput.parentElement
        ? dateInput.parentElement
            .parentElement
        : null;


    if (
dateContainer&&
dateContainer.parentElement
    ) {

dateContainer.parentElement
        .insertBefore(
targetArea,
dateContainer
        );

    } else if (productionPanel) {

productionPanel.insertBefore(
targetArea,
productionPanel.firstChild
      );
    }


const selector =
targetArea.querySelector(
        "#afProductionTargetSelector"
      );


const targetDisplay =
targetArea.querySelector(
        "#afProductionTargetDisplay"
      );


const achievementDisplay =
targetArea.querySelector(
        "#afProductionAchievementDisplay"
      );


    let selectedTarget =
      null;


    /* =====================================================
       TARGET SELECTION
       ===================================================== */

selector.addEventListener(
      "change",
      function() {

selectedTarget =
pendingTargets.find(
            target =>
              String(target.id) ===
              String(selector.value)
          ) || null;


        if (!selectedTarget) {

dateInput.disabled =
            false;


shiftSelect.disabled =
            false;


targetDisplay.value =
            "—";


achievementDisplay.value =
            "Waiting for production";


          return;
        }


        /*
         * Lock Director-controlled values.
         */
dateInput.value =
selectedTarget.date || "";


shiftSelect.value =
          String(
selectedTarget.shiftId || ""
          );


dateInput.disabled =
          true;


shiftSelect.disabled =
          true;


targetDisplay.value =
          Number(
selectedTarget.targetPoles || 0
          ).toLocaleString() +
          " poles";


achievementDisplay.value =
          "Waiting for production";


        /*
         * Existing production code listens for
         * shift change to load the correct team.
         */
shiftSelect.dispatchEvent(
          new Event(
            "change",
            {
              bubbles: true
            }
          )
        );
      }
    );


    /* =====================================================
       LIVE ACHIEVEMENT DISPLAY
       ===================================================== */

    function refreshAchievementPreview() {

      if (!selectedTarget) {

achievementDisplay.value =
          "Waiting for production";

        return;
      }


const totalPolesField =
document.querySelector(
          "#totalPolesProduced"
        );


const actualPoles =
        Number(
totalPolesField
            ? totalPolesField.value
            : 0
        ) || 0;


const targetPoles =
        Number(
selectedTarget.targetPoles || 0
        );


      if (
actualPoles<= 0 ||
targetPoles<= 0
      ) {

achievementDisplay.value =
          "Waiting for production";

        return;
      }


const achievement =
        (
actualPoles /
targetPoles
        ) * 100;


achievementDisplay.value =
actualPoles.toLocaleString() +
        " / " +
targetPoles.toLocaleString() +
        " = " +
achievement.toFixed(1) +
        "%";
    }


const observer =
      new MutationObserver(
refreshAchievementPreview
      );


const totalPolesField =
document.querySelector(
        "#totalPolesProduced"
      );


    if (totalPolesField) {

observer.observe(
totalPolesField,
        {
          attributes: true,
attributeFilter: [
            "value"
          ]
        }
      );


      /*
       * Existing code changes the input
       * property rather than necessarily
       * changing the HTML attribute.
       *
       * Refresh after clicks/input as well.
       */
productionPanel.addEventListener(
        "click",
        function() {

setTimeout(
refreshAchievementPreview,
            0
          );
        }
      );


productionPanel.addEventListener(
        "input",
        function() {

setTimeout(
refreshAchievementPreview,
            0
          );
        }
      );
    }


    /* =====================================================
       INTERCEPT SAVE
       ===================================================== */

saveButton.addEventListener(
      "click",
      function(event) {

        /*
         * Run BEFORE the existing production
         * save handler.
         */
        if (!selectedTarget) {

event.preventDefault();

event.stopImmediatePropagation();


          alert(
            "Please select the Director Production Target before saving production."
          );


          return;
        }


        /*
         * Protect against any later manual
         * changes to Date or Shift.
         */
dateInput.value =
selectedTarget.date || "";


shiftSelect.value =
          String(
selectedTarget.shiftId || ""
          );


const recordsBefore =
getProductionRecords();


const recordIdsBefore =
          new Set(
recordsBefore.map(
              record =>
                String(record.id)
            )
          );


        /*
         * Let the original production save
         * function run first.
         */
setTimeout(
          function() {

const recordsAfter =
getProductionRecords();


const newRecords =
recordsAfter.filter(
                record =>
                  !recordIdsBefore.has(
                    String(record.id)
                  )
              );


            if (!newRecords.length) {

              /*
               * Existing validation failed or
               * Manager cancelled the save.
               * Target remains TARGET SET.
               */
              return;
            }


            /*
             * The existing production screen
             * saves one record per Save action.
             */
const newRecord =
newRecords[
newRecords.length - 1
              ];


            /*
             * Extra safety:
             * production must match Director
             * target date and shift.
             */
            if (
              String(
newRecord.date || ""
              ) !==
              String(
selectedTarget.date || ""
              ) ||

              String(
newRecord.shiftId || ""
              ) !==
              String(
selectedTarget.shiftId || ""
              )
            ) {

console.error(
                "Production saved but target did not match date/shift."
              );

              return;
            }


completeProductionTarget(
selectedTarget.id,
newRecord
            );


const actualPoles =
              Number(
newRecord.totalPoles || 0
              );


const targetPoles =
              Number(
selectedTarget.targetPoles || 0
              );


const achievement =
targetPoles> 0
                ? (
actualPoles /
targetPoles
                  ) * 100
                : 0;


            /*
             * Refresh dashboard cards if
             * those functions exist.
             */
            if (
typeof window
                .refreshAFManagerDailyStatusCards ===
              "function"
            ) {

              window
                .refreshAFManagerDailyStatusCards();
            }


            if (
typeof window
                .refreshAFDirectorDashboard ===
              "function"
            ) {

              window
                .refreshAFDirectorDashboard();
            }


console.log(
              "Production target completed:",
              {
                target:
targetPoles,
                actual:
actualPoles,
                achievement:
achievement.toFixed(2) +
                  "%"
              }
            );

          },
          100
        );

      },
      true
    );


    return true;
  }


  /* =======================================================
     WRAP EXISTING recordProduction()
     ======================================================= */

  if (
typeof window.recordProduction ===
    "function"
  ) {

const originalRecordProduction =
window.recordProduction;


window.recordProduction =
      function() {

        /*
         * Check before opening the large
         * production screen.
         */
const pendingTargets =
getPendingTargets();


        if (!pendingTargets.length) {

          alert(
            "There is no production target waiting for production.\n\n" +
            "The Director must first set a Production Target."
          );

          return;
        }


originalRecordProduction();


        /*
         * Existing production modal is created
         * synchronously, but a short delay makes
         * this safe across browsers.
         */
setTimeout(
          function() {

connectTargetToOpenProduction();

          },
          0
        );
      };
  }


  /* =======================================================
     PUBLIC HELPERS
     ======================================================= */

window.connectAFProductionTargetToOpenProduction =
connectTargetToOpenProduction;


})();

/* =========================================================
   A&F EMPLOYEE PERFORMANCE & RANKINGS
   Actual records only
   Output 50%
   Attendance & Punctuality 25%
   Waste / Efficiency 15%
   Quality & Discipline 10%

   IMPORTANT:
   - Unassigned activities are N/A, not zero.
   - Applicable weights are normalized fairly.
   - Washing and Production only affect employees
     who actually participated.
   ========================================================= */

(function connectAFEmployeePerformanceRankings() {

  /* =======================================================
     BASIC HELPERS
     ======================================================= */

  function readArray(key) {

    try {

const value =
JSON.parse(
localStorage.getItem(key) || "[]"
        );

      return Array.isArray(value)
        ? value
        : [];

    } catch (error) {

console.error(
        "Performance data read error:",
        key,
        error
      );

      return [];
    }
  }


  function getCurrentUser() {

    try {

      return JSON.parse(
localStorage.getItem(
          "currentUser"
        ) || "null"
      );

    } catch (error) {

      return null;
    }
  }


  function escapeText(value) {

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function number(value) {

const result =
      Number(value);

    return Number.isFinite(result)
      ? result
      : 0;
  }


  function round(value, decimals = 1) {

const factor =
Math.pow(10, decimals);

    return (
Math.round(
        number(value) * factor
      ) / factor
    );
  }


  function clampScore(value) {

    return Math.max(
      0,
Math.min(
        number(value),
        100
      )
    );
  }


  function localDateString(date) {

const value =
      date || new Date();

const year =
value.getFullYear();

const month =
      String(
value.getMonth() + 1
      ).padStart(2, "0");

const day =
      String(
value.getDate()
      ).padStart(2, "0");

    return (
      year +
      "-" +
      month +
      "-" +
      day
    );
  }


  function parseLocalDate(value) {

    if (!value) {
      return null;
    }

const clean =
      String(value).slice(0, 10);

const parts =
clean.split("-");

    if (parts.length !== 3) {
      return null;
    }

const date =
      new Date(
        Number(parts[0]),
        Number(parts[1]) - 1,
        Number(parts[2])
      );

    return Number.isNaN(
date.getTime()
    )
      ? null
      : date;
  }


  function recordDate(record) {

    return String(
record.date ||
record.attendanceDate ||
record.assessmentDate ||
record.completedAt ||
record.recordedAt ||
record.createdAt ||
      ""
    ).slice(0, 10);
  }


  function dateWithin(
    value,
    start,
    end
  ) {

    if (!value) {
      return false;
    }

const date =
      String(value).slice(0, 10);

    return (
      date >= start &&
      date <= end
    );
  }


  function rangesOverlap(
    start1,
    end1,
    start2,
    end2
  ) {

    return (
      String(start1) <=
        String(end2) &&
      String(end1) >=
        String(start2)
    );
  }


  /* =======================================================
     PERIOD HELPERS
     ======================================================= */

  function getPeriodRange(
periodType,
selectedDate
  ) {

const base =
parseLocalDate(
selectedDate
      ) || new Date();


    if (
periodType === "today"
    ) {

const day =
localDateString(base);

      return {
        start: day,
        end: day,
        label: day
      };
    }


    if (
periodType === "week"
    ) {

const start =
        new Date(base);

const day =
start.getDay();

const difference =
        day === 0
          ? -6
          : 1 - day;

start.setDate(
start.getDate() +
        difference
      );


const end =
        new Date(start);

end.setDate(
end.getDate() + 6
      );


      return {

        start:
localDateString(start),

        end:
localDateString(end),

        label:
localDateString(start) +
          " to " +
localDateString(end)
      };
    }


const start =
      new Date(
base.getFullYear(),
base.getMonth(),
        1
      );


const end =
      new Date(
base.getFullYear(),
base.getMonth() + 1,
        0
      );


    return {

      start:
localDateString(start),

      end:
localDateString(end),

      label:
start.toLocaleString(
          undefined,
          {
            month: "long",
            year: "numeric"
          }
        )
    };
  }


  /* =======================================================
     SETTINGS
     ======================================================= */

  function getPerformanceWeights() {

    if (
typeof getTeamPerformanceSettings ===
      "function"
    ) {

const settings =
getTeamPerformanceSettings();

      return {

        output:
          number(
settings.outputWeight
          ) || 50,

        attendance:
          number(
settings.attendanceWeight
          ) || 25,

        waste:
          number(
settings.wasteWeight
          ) || 15,

        quality:
          number(
settings.qualityWeight
          ) || 10
      };
    }


    return {
      output: 50,
      attendance: 25,
      waste: 15,
      quality: 10
    };
  }


  /* =======================================================
     EMPLOYEE / TEAM HELPERS
     ======================================================= */

  function getEmployees() {

    return readArray(
      "employees"
    );
  }


  function getActiveEmployees() {

    return getEmployees()
      .filter(
        employee =>
          String(
employee.employmentStatus ||
            ""
          ).toLowerCase() ===
          "active"
      );
  }


  function getTeams() {

    return readArray(
      "factoryTeams"
    );
  }


  function getEmployeeTeam(
employeeId
  ) {

    return getTeams()
      .find(
        team => {

          if (
            String(
team.status || ""
            ).toLowerCase() !==
            "active"
          ) {
            return false;
          }


          if (
            String(
team.leaderEmployeeId ||
              ""
            ) ===
            String(employeeId)
          ) {
            return true;
          }


          return (
Array.isArray(
team.memberEmployeeIds
            ) &&
team.memberEmployeeIds
              .some(
                id =>
                  String(id) ===
                  String(employeeId)
              )
          );
        }
      ) || null;
  }


  /* =======================================================
     PARTICIPATION HELPERS
     ======================================================= */

  function employeeInWashing(
    record,
employeeId
  ) {

    if (
Array.isArray(
record.staffEmployeeIds
      )
    ) {

      return record.staffEmployeeIds
        .some(
          id =>
            String(id) ===
            String(employeeId)
        );
    }


    if (
Array.isArray(
record.staffEmployees
      )
    ) {

      return record.staffEmployees
        .some(
          person =>
            String(
person.employeeId ||
              ""
            ) ===
            String(employeeId)
        );
    }


    return false;
  }


  function employeeInProduction(
    record,
employeeId
  ) {

    if (
Array.isArray(
record.staffEmployeeIds
      )
    ) {

      return record.staffEmployeeIds
        .some(
          id =>
            String(id) ===
            String(employeeId)
        );
    }


    if (
Array.isArray(
record.staffWorked
      )
    ) {

      return record.staffWorked
        .some(
          person =>
            String(
person.employeeId ||
              ""
            ) ===
            String(employeeId)
        );
    }


    return false;
  }


  /* =======================================================
     OUTPUT SCORE - 50%
     Washing and Production achievement.
     Only activities actually worked count.
     ======================================================= */

  function calculateOutputScore(
employeeId,
    range
  ) {

const washing =
readArray(
        "washingShiftRecords"
      )
      .filter(
        record => {

const completed =
            String(
record.targetStatus ||
              ""
            ).toUpperCase() ===
              "COMPLETED" ||
record.washingComplete ===
              true;


          return (
            completed &&
dateWithin(
recordDate(record),
range.start,
range.end
            ) &&
employeeInWashing(
              record,
employeeId
            )
          );
        }
      );


const production =
readArray(
        "productionRecords"
      )
      .filter(
        record => {

const completed =
            String(
record.productionStatus ||
record.status ||
              ""
            ).toUpperCase() ===
              "COMPLETED";


          return (
            completed &&
dateWithin(
recordDate(record),
range.start,
range.end
            ) &&
employeeInProduction(
              record,
employeeId
            )
          );
        }
      );


const activityScores = [];


washing.forEach(
      record => {

const target =
          number(
record.targetKg
          );

const actual =
          number(
record.actualWashedKg
          );


        if (target > 0) {

activityScores.push({

            type:
              "Washing",

            score:
clampScore(
                (
                  actual /
                  target
                ) * 100
              )
          });
        }
      }
    );


production.forEach(
      record => {

const target =
          number(
record.productionTargetPoles
          );

const actual =
          number(
record.totalPoles
          );


        if (target > 0) {

activityScores.push({

            type:
              "Production",

            score:
clampScore(
                (
                  actual /
                  target
                ) * 100
              )
          });
        }
      }
    );


    if (!activityScores.length) {

      return {

        applicable: false,
        score: null,
washingCount:
washing.length,
productionCount:
production.length,
activityCount: 0
      };
    }


const total =
activityScores.reduce(
        (sum, item) =>
          sum + item.score,
        0
      );


    return {

      applicable: true,

      score:
        round(
          total /
activityScores.length,
          1
        ),

washingCount:
washing.length,

productionCount:
production.length,

activityCount:
activityScores.length
    };
  }


  /* =======================================================
     ATTENDANCE & PUNCTUALITY - 25%

     Only saved attendance records count.
     No attendance record = N/A, not zero.

     Present day:
       working-time score based on scheduled
       time versus shortfall.

     Absent day:
       0 for that recorded day.

     Late / early leave are already reflected
     through shortfall where applicable.
     ======================================================= */

  function calculateAttendanceScore(
employeeId,
    range
  ) {

const records =
readArray(
        "attendanceRecords"
      )
      .filter(
        record =>
          String(
record.employeeId ||
            ""
          ) ===
            String(employeeId) &&

dateWithin(
recordDate(record),
range.start,
range.end
          )
      );


    if (!records.length) {

      return {

        applicable: false,
        score: null,
recordedDays: 0,
presentDays: 0,
absentDays: 0
      };
    }


const dailyScores = [];


    let presentDays = 0;
    let absentDays = 0;


records.forEach(
      record => {

const status =
          String(
record.status || ""
          ).toLowerCase();


        if (
          status === "absent"
        ) {

absentDays++;

dailyScores.push(0);

          return;
        }


        if (
          status !== "present"
        ) {
          return;
        }


presentDays++;


const worked =
          number(
record.workedMinutes
          );


const shortfall =
          number(
record.shortfallMinutes
          );


        /*
         * Scheduled minutes can be reconstructed
         * from worked + shortfall where attendance
         * has already calculated the day's time.
         */
const expected =
          worked +
          shortfall;


        let score = 100;


        if (expected > 0) {

          score =
            (
              worked /
              expected
            ) * 100;
        }


        /*
         * Never award more than 100% attendance.
         * Overtime is not used to inflate attendance.
         */
dailyScores.push(
clampScore(score)
        );
      }
    );


    if (!dailyScores.length) {

      return {

        applicable: false,
        score: null,
recordedDays:
records.length,
presentDays,
absentDays
      };
    }


const average =
dailyScores.reduce(
        (sum, value) =>
          sum + value,
        0
      ) /
dailyScores.length;


    return {

      applicable: true,

      score:
        round(
          average,
          1
        ),

recordedDays:
dailyScores.length,

presentDays,

absentDays
    };
  }


  /* =======================================================
     WASTE / EFFICIENCY - 15%

     Currently derived from production recovery.
     Only employees who actually worked that
     production run receive this component.

     Washing-only staff are not penalized.
     ======================================================= */

  function calculateWasteScore(
employeeId,
    range
  ) {

const records =
readArray(
        "productionRecords"
      )
      .filter(
        record => {

const completed =
            String(
record.productionStatus ||
record.status ||
              ""
            ).toUpperCase() ===
              "COMPLETED";


          return (
            completed &&
dateWithin(
recordDate(record),
range.start,
range.end
            ) &&
employeeInProduction(
              record,
employeeId
            )
          );
        }
      );


const scores =
      records
        .map(
          record => {

            let recovery =
              number(
record.productionRecoveryPercent
              );


            if (
              recovery <= 0
            ) {

const input =
                number(
record.productionInputKg
                );

const finished =
                number(
record.productionWeight
                );


              if (input > 0) {

                recovery =
                  (
                    finished /
                    input
                  ) * 100;
              }
            }


            return recovery;
          }
        )
        .filter(
          value =>
            value >= 0 &&
Number.isFinite(value)
        );


    if (!scores.length) {

      return {

        applicable: false,
        score: null,
productionRuns: 0
      };
    }


const average =
scores.reduce(
        (sum, value) =>
          sum +
clampScore(value),
        0
      ) /
scores.length;


    return {

      applicable: true,

      score:
        round(
          average,
          1
        ),

productionRuns:
scores.length
    };
  }


  /* =======================================================
     QUALITY & DISCIPLINE - 10%
     Weekly assessments overlapping selected period.
     ======================================================= */

  function calculateQualityScore(
employeeId,
    range
  ) {

const records =
readArray(
        "afQualityDisciplineRecords"
      )
      .filter(
        record => {

          if (
            String(
record.employeeId ||
              ""
            ) !==
            String(employeeId)
          ) {
            return false;
          }


          if (
            String(
record.status ||
              ""
            ).toUpperCase() ===
            "CANCELLED"
          ) {
            return false;
          }


const weekStart =
            String(
record.weekStart ||
record.assessmentDate ||
              ""
            ).slice(0, 10);


const weekEnd =
            String(
record.weekEnd ||
record.weekStart ||
record.assessmentDate ||
              ""
            ).slice(0, 10);


          if (
            !weekStart ||
            !weekEnd
          ) {
            return false;
          }


          return rangesOverlap(
weekStart,
weekEnd,
range.start,
range.end
          );
        }
      );


    if (!records.length) {

      return {

        applicable: false,
        score: null,
assessmentCount: 0
      };
    }


const scores =
      records
        .map(
          record =>
clampScore(
              number(
record.totalScore ??
record.qualityDisciplinePercent
              )
            )
        );


const average =
scores.reduce(
        (sum, value) =>
          sum + value,
        0
      ) /
scores.length;


    return {

      applicable: true,

      score:
        round(
          average,
          1
        ),

assessmentCount:
scores.length
    };
  }


  /* =======================================================
     FINAL EMPLOYEE SCORE

     Fair normalization:
     Only applicable components enter denominator.

     Example:
       Output 50%
       Attendance 25%
       Quality 10%
       Waste N/A

     Applicable weight = 85

     Final score =
       earned weighted points / 85 × 100

     Therefore an employee is NOT given zero
     for work that was never assigned.
     ======================================================= */

  function calculateEmployeePerformance(
    employee,
    range
  ) {

const weights =
getPerformanceWeights();


const output =
calculateOutputScore(
employee.employeeId,
        range
      );


const attendance =
calculateAttendanceScore(
employee.employeeId,
        range
      );


const waste =
calculateWasteScore(
employee.employeeId,
        range
      );


const quality =
calculateQualityScore(
employee.employeeId,
        range
      );


const components = [

      {
        key: "output",
        weight: weights.output,
        result: output
      },

      {
        key: "attendance",
        weight: weights.attendance,
        result: attendance
      },

      {
        key: "waste",
        weight: weights.waste,
        result: waste
      },

      {
        key: "quality",
        weight: weights.quality,
        result: quality
      }

    ];


    let applicableWeight = 0;
    let weightedPoints = 0;


components.forEach(
      component => {

        if (
component.result.applicable
        ) {

applicableWeight +=
component.weight;


weightedPoints +=
            (
component.result.score /
              100
            ) *
component.weight;
        }
      }
    );


const finalScore =
applicableWeight> 0

        ? (
weightedPoints /
applicableWeight
          ) * 100

        : null;


const team =
getEmployeeTeam(
employee.employeeId
      );


    return {

employeeId:
employee.employeeId,

employeeName:
employee.fullName ||
employee.employeeName ||
employee.employeeId,

      role:
employee.role || "",

      department:
employee.department || "",

passportPhoto:
employee.passportPhoto || "",

teamId:
        team
          ? team.id || ""
          : "",

teamName:
        team
          ? team.name || ""
          : "",

      output,

      attendance,

      waste,

      quality,

applicableWeight:
        round(
applicableWeight,
          1
        ),

finalScore:
finalScore === null
          ? null
          : round(
finalScore,
              1
            )
    };
  }


  /* =======================================================
     RATING
     ======================================================= */

  function getPerformanceRating(
    score
  ) {

    if (
      score === null ||
      score === undefined
    ) {
      return "No Data";
    }


const value =
      number(score);


    if (value >= 90) {
      return "Excellent";
    }

    if (value >= 70) {
      return "Good";
    }

    if (value >= 50) {
      return "Fair";
    }

    if (value >= 30) {
      return "Poor";
    }

    return "Very Poor";
  }


  /* =======================================================
     GENERATE RANKINGS
     ======================================================= */

  function calculateRankings(
periodType,
selectedDate
  ) {

const range =
getPeriodRange(
periodType,
selectedDate
      );


    let employees =
getActiveEmployees();


const currentUser =
getCurrentUser();


    /*
     * Employee can only see himself.
     */
    if (
currentUser&&
currentUser.role ===
        "Employee"
    ) {

      employees =
employees.filter(
          employee =>
            String(
employee.employeeId
            ) ===
            String(
currentUser.employeeId
            )
        );
    }


const results =
      employees
        .map(
          employee =>
calculateEmployeePerformance(
              employee,
              range
            )
        )
        .filter(
          result =>
result.finalScore !==
            null
        )
        .sort(
          (a, b) => {

            if (
b.finalScore !==
a.finalScore
            ) {

              return (
b.finalScore -
a.finalScore
              );
            }


            return String(
a.employeeName
            ).localeCompare(
              String(
b.employeeName
              )
            );
          }
        );


    let previousScore = null;
    let previousRank = 0;


results.forEach(
      (result, index) => {

        if (
previousScore !== null &&
result.finalScore ===
previousScore
        ) {

result.rank =
previousRank;

        } else {

result.rank =
            index + 1;

previousRank =
result.rank;
        }


previousScore =
result.finalScore;
      }
    );


    return {
      range,
      results
    };
  }


  /* =======================================================
     DISPLAY HELPERS
     ======================================================= */

  function componentDisplay(
    component
  ) {

    if (
      !component ||
      !component.applicable
    ) {

      return `
<span style="
          color:#888;
font-weight:normal;
        ">
          N/A
</span>
      `;
    }


    return `
<strong>
        ${round(component.score, 1).toFixed(1)}%
</strong>
    `;
  }


  function photoHTML(
    result
  ) {

    if (
result.passportPhoto
    ) {

      return `
<img
src="${escapeText(
result.passportPhoto
          )}"
          alt=""
          style="
            width:42px;
            height:42px;
object-fit:cover;
            border-radius:50%;
            border:1px solid #ddd;
            flex:0 0 auto;
          "
>
      `;
    }


    return `
<div style="
        width:42px;
        height:42px;
        border-radius:50%;
        background:#eef3ef;
display:flex;
align-items:center;
justify-content:center;
        font-size:20px;
        flex:0 0 auto;
      ">
👤
</div>
    `;
  }


  /* =======================================================
     PERFORMANCE & RANKINGS WINDOW
     ======================================================= */

  function openAFEmployeePerformanceRankings() {

const currentUser =
getCurrentUser();


    if (!currentUser) {

      alert(
        "Please log in first."
      );

      return;
    }


const allowedRoles = [
      "Director",
      "Manager",
      "HR",
      "Secretary",
      "Team Leader",
      "Employee"
    ];


    if (
      !allowedRoles.includes(
currentUser.role
      )
    ) {

      alert(
        "Access Denied."
      );

      return;
    }


const modal =
document.createElement("div");


modal.id =
      "afEmployeePerformanceRankingsModal";


modal.style.cssText = `
position:fixed;
      inset:0;
background:rgba(0,0,0,.58);
display:flex;
align-items:center;
justify-content:center;
      z-index:100000;
      padding:10px;
font-family:Arial,sans-serif;
    `;


modal.innerHTML = `

<div style="
background:white;
        width:1180px;
        max-width:98%;
        max-height:94vh;
overflow:auto;
        border-radius:14px;
        padding:24px;
        box-shadow:
          0 12px 40px
rgba(0,0,0,.3);
      ">

<div style="
display:flex;
justify-content:space-between;
align-items:flex-start;
          gap:15px;
flex-wrap:wrap;
          margin-bottom:18px;
        ">

<div>

<h2 style="
              margin:0;
              color:#0b5d3b;
            ">
              Employee Performance & Rankings
</h2>

<div style="
              color:#666;
              font-size:13px;
              margin-top:5px;
            ">
              Actual factory and HR records only
</div>

</div>


<button
            id="afClosePerformanceRankings"
            type="button"
            style="
              padding:9px 16px;
              border:0;
              border-radius:8px;
              background:#555;
color:white;
cursor:pointer;
            "
>
✕ Close
</button>

</div>


<div style="
          background:#eef8f2;
          border:1px solid #d1e7d9;
          padding:13px;
          border-radius:9px;
          margin-bottom:16px;
          font-size:13px;
          line-height:1.55;
        ">

<strong>Performance Weights:</strong>

          Output 50% •
          Attendance & Punctuality 25% •
          Waste / Efficiency 15% •
          Quality & Discipline 10%

<br>

<span style="color:#555;">
            An activity the employee did not participate in
            is shown as N/A and does not reduce the employee's score.
</span>

</div>


<div style="
display:grid;
          grid-template-columns:
minmax(150px,1fr)
minmax(180px,1fr)
minmax(160px,1fr);
          gap:12px;
          margin-bottom:16px;
        ">

<div>

<label style="
display:block;
              font-size:12px;
font-weight:bold;
              margin-bottom:5px;
            ">
              Period
</label>

<select
              id="afPerformancePeriod"
              style="
                width:100%;
box-sizing:border-box;
                padding:10px;
                border:1px solid #ccc;
                border-radius:8px;
              "
>
<option value="today">
                Today
</option>

<option value="week" selected>
                Week
</option>

<option value="month">
                Month
</option>
</select>

</div>


<div>

<label style="
display:block;
              font-size:12px;
font-weight:bold;
              margin-bottom:5px;
            ">
              Select Date
</label>

<input
              id="afPerformanceDate"
              type="date"
              value="${localDateString()}"
              style="
                width:100%;
box-sizing:border-box;
                padding:9px;
                border:1px solid #ccc;
                border-radius:8px;
              "
>

</div>


<div style="
display:flex;
align-items:flex-end;
          ">

<button
              id="afRefreshPerformance"
              type="button"
              style="
                width:100%;
                padding:10px;
                border:0;
                border-radius:8px;
                background:#0b5d3b;
color:white;
font-weight:bold;
cursor:pointer;
              "
>
              Calculate Rankings
</button>

</div>

</div>


<div
          id="afPerformancePeriodLabel"
          style="
font-weight:bold;
            color:#333;
            margin-bottom:12px;
          "
></div>


<div
          id="afPerformanceSummary"
          style="
display:grid;
            grid-template-columns:
              repeat(3,minmax(160px,1fr));
            gap:10px;
            margin-bottom:16px;
          "
></div>


<div style="
overflow:auto;
          border:1px solid #ddd;
          border-radius:9px;
        ">

<table style="
            width:100%;
            min-width:1050px;
border-collapse:collapse;
            font-size:13px;
          ">

<thead>

<tr style="
                background:#eaf5ee;
text-align:left;
              ">

<th>Rank</th>
<th>Employee</th>
<th>Team</th>
<th>Output<br>50%</th>
<th>Attendance<br>25%</th>
<th>Efficiency<br>15%</th>
<th>Quality & Discipline<br>10%</th>
<th>Applicable Weight</th>
<th>Final Score</th>
<th>Rating</th>

</tr>

</thead>


<tbody
              id="afPerformanceRows"
></tbody>

</table>

</div>


<div style="
          margin-top:14px;
          padding:12px;
          background:#fff8e6;
          border:1px solid #ead7a0;
          border-radius:8px;
          font-size:12px;
          color:#66521e;
          line-height:1.5;
        ">

<strong>Fairness Rule:</strong>

          N/A means there was no applicable saved activity for that
          employee during the selected period. N/A is not treated as zero.

          Rankings only include employees who have at least one applicable
          performance component for the selected period.

</div>

</div>
    `;


document.body.appendChild(
      modal
    );


const periodSelect =
modal.querySelector(
        "#afPerformancePeriod"
      );


const dateInput =
modal.querySelector(
        "#afPerformanceDate"
      );


const rowsContainer =
modal.querySelector(
        "#afPerformanceRows"
      );


const periodLabel =
modal.querySelector(
        "#afPerformancePeriodLabel"
      );


const summary =
modal.querySelector(
        "#afPerformanceSummary"
      );


    function summaryCard(
      title,
      value,
      note
    ) {

      return `
<div style="
          border:1px solid #dce6df;
          border-radius:9px;
          padding:12px;
          background:#fafcfb;
        ">

<div style="
            font-size:12px;
            color:#666;
          ">
            ${escapeText(title)}
</div>

<div style="
            font-size:22px;
font-weight:bold;
            color:#0b5d3b;
            margin:4px 0;
          ">
            ${escapeText(value)}
</div>

<div style="
            font-size:11px;
            color:#777;
          ">
            ${escapeText(note)}
</div>

</div>
      `;
    }


    function render() {

const calculation =
calculateRankings(
periodSelect.value,
dateInput.value
        );


const results =
calculation.results;


periodLabel.textContent =
        "Performance Period: " +
calculation.range.label;


const averageScore =
results.length

          ? results.reduce(
              (sum, item) =>
                sum +
                number(
item.finalScore
                ),
              0
            ) /
results.length

          : 0;


const topEmployee =
results.length
          ? results[0]
          : null;


summary.innerHTML =

summaryCard(
          "Employees Ranked",
          String(
results.length
          ),
          "Employees with applicable records"
        ) +

summaryCard(
          "Average Performance",
results.length
            ? round(
averageScore,
                1
              ).toFixed(1) + "%"
            : "—",
          "Average of ranked employees"
        ) +

summaryCard(
          "Highest Recorded Score",
topEmployee
            ? topEmployee.finalScore
                .toFixed(1) + "%"
            : "—",
topEmployee
            ? topEmployee.employeeName
            : "No applicable records"
        );


      if (!results.length) {

rowsContainer.innerHTML = `

<tr>

<td
colspan="10"
              style="
                padding:30px;
text-align:center;
                color:#666;
              "
>

              No applicable employee performance records
              were found for this period.

</td>

</tr>
        `;

        return;
      }


rowsContainer.innerHTML =
results.map(
          result => `

<tr>

<td style="
                font-size:18px;
font-weight:bold;
                color:#0b5d3b;
              ">
                #${result.rank}
</td>


<td>

<div style="
display:flex;
align-items:center;
                  gap:9px;
                  min-width:180px;
                ">

                  ${photoHTML(result)}

<div>

<div style="
font-weight:bold;
                    ">
                      ${
escapeText(
result.employeeName
                        )
                      }
</div>

<div style="
                      color:#777;
                      font-size:11px;
                    ">
                      ${
escapeText(
result.employeeId
                        )
                      }

                      ${
result.role
                          ? " • " +
escapeText(
result.role
                            )
                          : ""
                      }
</div>

</div>

</div>

</td>


<td>
                ${
escapeText(
result.teamName ||
                    "—"
                  )
                }
</td>


<td>
                ${
componentDisplay(
result.output
                  )
                }
</td>


<td>
                ${
componentDisplay(
result.attendance
                  )
                }
</td>


<td>
                ${
componentDisplay(
result.waste
                  )
                }
</td>


<td>
                ${
componentDisplay(
result.quality
                  )
                }
</td>


<td>
                ${
result.applicableWeight
                    .toFixed(0)
                }%
</td>


<td style="
                font-size:16px;
font-weight:bold;
                color:#0b5d3b;
              ">
                ${
result.finalScore
                    .toFixed(1)
                }%
</td>


<td>
                ${
escapeText(
getPerformanceRating(
result.finalScore
                    )
                  )
                }
</td>

</tr>

          `
        ).join("");


modal.querySelectorAll(
        "th,td"
      ).forEach(
        cell => {

cell.style.padding =
            "10px";

cell.style.borderBottom =
            "1px solid #eee";

cell.style.verticalAlign =
            "middle";
        }
      );
    }


modal.querySelector(
      "#afRefreshPerformance"
    ).onclick =
      render;


periodSelect.onchange =
      render;


dateInput.onchange =
      render;


modal.querySelector(
      "#afClosePerformanceRankings"
    ).onclick = () => {

modal.remove();
    };


    render();
  }


  /* =======================================================
     EXPOSE PERFORMANCE ENGINE
     ======================================================= */

window.calculateAFEmployeePerformance =
calculateEmployeePerformance;


window.calculateAFEmployeeRankings =
calculateRankings;


window.openAFEmployeePerformanceRankings =
openAFEmployeePerformanceRankings;


  /* =======================================================
     CONNECT TO STAFF & HR

     We deliberately do NOT replace the existing
     Staff & HR function.

     When Staff & HR opens, this converts the existing
     Employee & Team Performance button into the
     rankings viewer for authorized non-Director roles.

     Director can still reach the existing performance
     weight settings through System Settings.
     ======================================================= */

  function connectPerformanceButton() {

const button =
document.querySelector(
        "#performanceHRBtn"
      );


    if (!button) {
      return;
    }


    if (
button.dataset
        .afRankingsConnected ===
      "yes"
    ) {
      return;
    }


button.dataset
      .afRankingsConnected =
      "yes";


const replacement =
button.cloneNode(true);


button.parentNode
      .replaceChild(
        replacement,
        button
      );


replacement.onclick =
      function() {

const modal =
replacement.closest(
            'div[style*="position:fixed"]'
          );


        if (modal) {
modal.remove();
        }


openAFEmployeePerformanceRankings();
      };


const strong =
replacement.querySelector(
        "strong"
      );


    if (strong) {

strong.textContent =
        "Employee Performance & Rankings";
    }


const span =
replacement.querySelector(
        "span"
      );


    if (span) {

span.textContent =
        "View actual employee performance and rankings";
    }
  }


  /*
   * Staff & HR is generated dynamically.
   * Watch only for the performance button.
   */

const observer =
    new MutationObserver(
      function() {

connectPerformanceButton();
      }
    );


observer.observe(
document.body,
    {
childList: true,
      subtree: true
    }
  );


connectPerformanceButton();


})();
