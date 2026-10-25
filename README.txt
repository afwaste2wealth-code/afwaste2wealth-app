A&F Wekavera App82 — Director Command Centre TEST CANDIDATE

BASE: App81 source; includes App80 changes previously inherited by App81.

ADDED:
- Director-only command centre with counts from existing Upcoming Events, Customer Follow-ups, and Factory Item Register.
- Record client appointments, company meetings, marketing campaigns, assigned tasks, and events using the existing afUpcomingEvents record store.
- View scheduled work and mark App82-created records completed.
- Responsive cards and scrolling records table for phone screens.
- No changes to payroll, stock calculations, sales, purchases or cloud sync intervals.

LIMITATIONS:
- New records use the existing afUpcomingEvents cloud-sync key; cloud synchronization has NOT been tested live on multiple devices.
- Pending verification and social media account integration remain unimplemented; no misleading fake counts or invented account links.
- The original dashboard placeholder rows may remain visible elsewhere in the legacy dashboard; the new command centre is authoritative for the above connected metrics.
- This is a TEST CANDIDATE, not a certified production release.

INSTALL: Back up existing app.js and data. Replace app.js in the same repository and commit once. Do not clear browser storage or click Migrate All Existing Data. Verify on Director laptop and phone before relying on synchronization.
