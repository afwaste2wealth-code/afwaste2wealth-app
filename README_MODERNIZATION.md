# A&F Wekavera Ltd — modernization starter (read-only)

This is a safe development starter, **not** a completed accounting migration or production release.

- `app.js`: unchanged Stage 7 Fixed baseline, retained for comparison and rollback.
- `modernization/diagnostics.js`: standalone read-only browser storage diagnostic; no cash, stock, payroll, or ledger writes.
- `tests/diagnostics.test.js`: automated tests; run `node tests/diagnostics.test.js`.

## How to inspect a COPY of live data
Do not deploy this ZIP over the live site. To run diagnostics on the live app only after reviewing the code, load `modernization/diagnostics.js` in the browser developer console context and call `AFModernizationDiagnostics.downloadReport(localStorage)`. This generates a diagnostic JSON locally; it does not upload it.

## Next implementation gates
1. Obtain complete authoritative browser exports from each operational device, including backup/restore validation.
2. Extract domain modules from app.js with regression tests, keeping UI behavior unchanged.
3. Provision authorized secure backend; use server-side authentication and database access controls.
4. Run trial migrations and resolve exceptions; approve opening balances before live cutover.

Do not place database credentials in this public repository.
