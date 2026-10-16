A&F Wekavera Ltd — Payroll Carry-forward Correction

This update is based on the previously delivered Payroll_Carryforward_v59 app.js.
Replace ONLY the repository's app.js. Do not replace or clear localStorage.

Changes:
- Previous unpaid payroll comes from saved payrollRecords for the same employee and earlier months.
- Previous full settlement is treated as a consolidated balance; avoids double counting earlier months.
- Existing saved balances and recorded payments are respected.
- The Employee Allowance display explicitly labels the previous unpaid payroll.
- Full Settlement already includes prior unpaid payroll; the summary does not add it twice.

Check after committing and refreshing:
1. EMP014, February 2026, Full Settlement: previous unpaid = UGX 96,700.
2. Full settlement amount = UGX 196,700, assuming no deductions or payments.
3. EMP014, March 2026: previous unpaid = UGX 196,700 if both Jan/Feb remain unpaid.
4. Payroll Ledger Jan/Feb must remain unchanged.

Important: These are expected results based on screenshots; local browser data could differ.
Do not confirm settlements or payments before verifying the figures.
The test script validates isolated carry-forward scenarios, not a full browser integration.
