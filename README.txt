A&F App64 recognition alignment

Replace app.js only after backing up the current app and browser data.

Fixes: Removes obsolete month-end-only winner display; uses same live rankings as Director on all roles; refreshes recognition on cloud updates; warns when employee phone only has a minimal cloud login profile.

LIMITATIONS: Cloud server row-level security and employee-specific payroll/attendance API were not changed or verified. A successful login is not proof that private employee details synchronize. The Director must check cloud access rules and data. The live ranking can still be empty on phones without synchronized performance source records.

Syntax check: node --check passed. No live database test performed.
