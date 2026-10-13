A&F Wekavera Ltd — Secretary attendance correction

Replace the existing repository app.js with the enclosed app.js.
Before replacement, export a backup of live application data.

Changes:
- Secretary / Administration attendance no longer requires production team or shift.
- Records actual Time In/Out and worked minutes, without fabricating scheduled overtime or shortfall.
- Attendance record retains blank team ID/name for administration.
- Production employees still require assigned team and valid shift.
- Existing attendance, payroll and other data are not deleted or rewritten.

Verification: JavaScript syntax passed node --check. Browser end-to-end test pending.
Test: select active Secretary, Present, Time In 07:00 AM, Time Out 04:00 PM; Save Attendance should succeed and show 9 hours before any policy-specific break deductions. Check attendance history and monthly payroll.
