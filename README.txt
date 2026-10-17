A&F Wekavera Ltd — App 62 payroll safeguards

Contains app.js, based on uploaded app (62).js.
Changes: (1) central lock preventing recalculation from overwriting payroll that already has payments; (2) positive payment validation; (3) append-only payment event audit for Payroll Ledger payment action.

IMPORTANT: This is a targeted safety update, NOT full accounting migration. Existing full settlement presentation and expense reversal reconciliation still require deeper changes and live data testing.

BACK UP browser localStorage and original app.js before replacing. Rename included app.js into repository, commit, reload and test on a copy of data.
Node syntax check passed; no real-browser data testing performed.
