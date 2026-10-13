A&F Wekavera Ltd — Consolidated Credit-Delivery Control Candidate — 13 October 2026

Contains the full app.js based on the last supplied accounting certification candidate.

CHANGES: Pole-delivery workflow checks cumulative recorded customer receipts versus prior delivered pole sales. If the new delivery is not fully covered by recorded advances, non-Director users are blocked; the Director can approve with reason and due date. The approval is linked to the delivery and logged in afDirectorCreditApprovals. No automatic cash posting, ledger posting, loan interest accrual or write-off is performed.

IMPORTANT LIMITATIONS: Browser localStorage role checks can be bypassed. Payments lacking reliable customer identity or linked to an ambiguous customer can cause false blocking or false matching. Other delivery pathways may bypass this specific guard. Approval and delivery are written to separate localStorage keys, not an atomic database transaction. No full certification is issued. Test on a COPY of production data before replacing production app.js.

TESTS TO RUN: 1) Unpaid delivery as Secretary must block. 2) Unpaid delivery as Director prompts for reason and due date and records approval. 3) Fully prepaid delivery requires no credit approval. 4) Partial advance only approves uncovered amount. 5) Repeat delivery does not reuse spent advances. 6) Cancelled deliveries are excluded from prior sales. 7) Existing supplier control remains UGX 207,557.50 with zero difference. 8) Check other routes for delivery bypass. 9) Check duplicate customer names/phone and reversed receipts. 10) Check localStorage quota and failure behavior.

DO NOT describe this as secure Director authorization or certified financial accounts. A central authenticated backend and complete reconciled posted GL are needed.
