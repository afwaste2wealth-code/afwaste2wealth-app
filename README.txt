A&F WEKAVERA APP 66 — CONSERVATIVE DASHBOARD CORRECTION

Source: latest previously supplied App 66 recognition fix (not the earlier unpatched App 66).

Changes:
1. Restores company-wide Upcoming Birthdays to Employee and Team Leader roles.
2. Adds a read-only last-confirmed month-end winner fallback, only when current
   employee rankings are empty AND confirmed history exists in this browser.
3. Does not alter factory transaction, petty loan, stock, or payroll routines.

LIMITATIONS:
- If the employee account does not receive the Director's saved winner history
  through Cloud Sync, it cannot display that historical result. A separate
  backend/cloud permissions and synchronization audit is required.
- The code cannot guarantee that the Director's browser data is available
  to other devices or accounts. No synthetic rankings are generated.
- Awards-to-payroll correctness is NOT certified by this patch.
- This is a syntax-tested targeted patch, not a full live end-to-end test.

SAFE INSTALL:
1. Export and save current company data backup.
2. Download and preserve existing GitHub app.js.
3. Rename the included file to app.js and upload to the existing repository.
4. Test Director, Employee, birthdays, winner records, petty loans, and payroll.
5. If any regression appears, restore the saved app.js.
