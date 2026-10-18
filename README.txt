A&F Wekavera App 64 — Employee Recognition Dashboard

Replace repository app.js with the included app.js after backing up the current version and browser data.

Adds four recognition tiles (employee/team, week/month) and birthdays within 7 days to role dashboards. Monthly awards read confirmed afMonthEndWinners. Weekly awards read only APPROVED/LOCKED entries in afWeekEndWinners or afWeeklyWinners; if the application has no saved weekly awards, the tiles accurately show Not yet confirmed. No fabricated winners.

Reward values are informational only. No payroll or expense postings are made by these dashboard tiles. Existing login, cloud activation, payroll and other logic are unchanged.

Important: Actual weekly winner confirmation/award recording may need a separate integration if your app does not already save weekly winners. Confirmed award details are dependent on cloud sync making these keys available on employee devices.

Static syntax check only; live cloud and browser testing have not been performed.
