A&F Wekavera App 66 targeted update (20 October 2026)

Based directly on user-uploaded app (66).js. New file: app.js.

Changes:
- Employee and Team Leader included in birthday dashboard role list.
- Employee included in Performance & Recognition display role list.
- Recognition reward-management buttons restricted to Director.
- Recognition image falls back to stored employee passport photo if ranking row lacks one.
- Petty Loans: existing 'Closed' filter renamed 'Fully Paid Loans', with a fully paid count in summary. No historical loan migration.
- Repayment action asks for actual payment date (YYYY-MM-DD), validates it, stores it in payment and cash ledger, and retains timestamp of entry.

LIMITATIONS / SAFETY:
- No changes to cloud-sync authorization or cloud database schemas. Employee rankings may still show no qualifying data if employee account cannot read underlying ranking data. Do NOT claim full parity with Director is verified.
- No new payroll award posting logic; no guarantee of award payroll integration.
- No live browser, account or data tests were performed. JavaScript syntax check passed.
- Keep a backup of company data and current app.js before replacing.
- Test with non-financial entries before entering a real repayment. Confirm ledger and outstanding balance update once.
- Confirm Director dashboard, employee birthdays and recognition, loans, and payroll all remain functional.
