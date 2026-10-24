A&F Wekavera Ltd — App 80 (targeted Employee Portal advances update)

Contents: app.js
Based on App 79 candidate. No database migration, no storage reset.

Change:
- Employee Portal Advances table now shows advances issued in the selected month only.
- Read-only brought-forward / new / recovered / carried-forward summary.
- View All Advances History button displays the complete historical register on demand.
- Recovery summaries use dated recovery transactions, without altering original records.

Cautions:
- A recovery without a usable date is excluded from period totals; it is not assigned to an arbitrary month.
- Existing saved payroll and performance reward calculations are unchanged.
- Cloud sync cadence and backend requests are unchanged. Sync speed has NOT been proven faster; changing it safely requires profiling real sync requests and queue behavior.
- This is a TEST CANDIDATE, not a verified live deployment.
- Keep a backup of your current app and browser data before replacing app.js.

Suggested tests:
1. Select October 2026; verify only October-issued advances are listed.
2. Select January; verify January advances appear.
3. Open View All Advances History; verify older records are accessible.
4. Compare brought-forward/recovery totals with accounting records.
5. Repeat on phone after cloud sync and ensure no pending changes remain.
6. Confirm employee portal, payroll, and other screens still open normally.
