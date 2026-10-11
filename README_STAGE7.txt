STAGE 7 — KB002 CONTROLLED STAGING JOURNAL

Full updated app.js based on app (49).js.

IMPORTANT: This posts only to afAccountingV1Staging, NOT a reconciled production general ledger.
Stage 7 records 3 balanced historical staging entries:
1. Dr Raw Material Inventory 63,675 / Cr Accounts Payable 63,675
2. Dr Accounts Payable 63,600 / Cr Cash 63,600 (records historical cash; DOES NOT pay again)
3. Dr Accounts Payable 75 / Cr Other Operating Income 75 (supplier settlement discount)

Total debits and credits: UGX 127,350 each.
Historical source data, cash/payment records and stock are unchanged.
Director must download backup and approve. Repeat posting blocked.
Accounting staging is not reconciled with opening balances or all other source transactions.

Steps: Back up app.js and browser data; replace app.js; commit; log in Director; Stage 7 • KB002 Journal; download backup; review; approve; download receipt and review; send files for verification.

Security: Browser localStorage is not tamper-proof. Director role checks are client-side only.
