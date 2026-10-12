A&F WEKAVERA LTD — COMBINED SIDEBAR + PETTY LOANS TEST PACKAGE
12 October 2026

This replaces the earlier sidebar-only ZIP; use this combined package instead.
Contents: app.js (complete JavaScript source).

Included:
- Earlier sidebar cleanup, advanced accounting/audit tools preserved.
- Petty Loans filter buttons: All, Active, Overdue, Rejected, Closed, Pending, Voided.
- Individual lender selector, showing principal, repayments and outstanding amounts.
- Director-only Edit for PENDING or REJECTED loans, with mandatory reason and before/after audit.
- Director-only Void for PENDING or REJECTED loans, with reason and retained record.
- Approved loans and their repayments are NOT editable or voidable in this release because reversing posted accounting entries requires controlled counter-entries.
- Secretary retains view and existing permitted entry capabilities.
- Alerts limited to approved outstanding loans.

Verification:
- Complete JavaScript passed node --check.
- ZIP CRC integrity checked.
- NOT live browser tested. NOT a certified final production accounting release.

IMPORTANT: Before replacing your current GitHub app.js, preserve a copy of the committed working version. This package includes no company data or browser backup. Check Petty Loans in Director and Secretary roles before adopting.
