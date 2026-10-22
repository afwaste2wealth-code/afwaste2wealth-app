# A&F Wekavera — Controlled App 67 Candidate

**Status: NOT APPROVED FOR LIVE DEPLOYMENT.** Syntax verified; browser cross-role, cloud RLS, and financial regression tests remain necessary.

## Changes in candidate
- Adds `afSharedRecognition` to cloud module synchronization and publishes a minimal Director-created snapshot of the four winner cards. Employee cards use the published snapshot rather than privately recalculating rankings. Winner photos are drawn from the existing employee record where available.
- Adds a separate **Fully Paid Loans** archive within the loan modal; excludes settled loans from the normal **All** operational table. Uses existing loan records; no data migration or duplication.
- Prompts Director for the actual repayment date (bounded by receipt date and today), preserving the separate audit timestamp.
- Leaves all payroll and accounting posting functions unchanged.

## Deployment blocker
The live Supabase `af_module_records` SELECT RLS policy does **not** allow Employee to read the new snapshot key. A narrowly scoped policy is provided separately as SQL for review. It has **not** been executed. Until it is reviewed and tested with employee and director logins, the employee view will not reliably receive the published result.

## Mandatory acceptance tests
1. Export/backup browser company data on the current Director account, save a copy of App 67, and record all petty-loan totals and payroll balances.
2. Test in a **separate staging deployment**, not production.
3. Test cloud authorization with actual Director and Employee accounts. Verify Employee can SELECT only `afSharedRecognition`, not other companies' records, financial modules, payroll of colleagues, or modify the snapshot.
4. Director monthly winner -> cloud row -> Employee account: compare all four cards, scores, names, images and refresh after a new published result. Check no qualifying weekly result remains blank.
5. Verify photo payload sizes and cloud sync limits. Confirm no confidential fields are included in shared snapshot.
6. Test with a controlled birthday due soon; verify photos without changing real employee birthdays.
7. Loan regression: all original loans still exist, exactly four settled loans appear in archive if baseline is four, history intact, active balance unchanged, no new loan created by viewing archive.
8. Test repayment with a valid backdated date, invalid date, amount above balance, and a fully paid loan. Confirm loan ledger and audit each record one posting, not two.
9. Verify employee cannot open supplier rewards, Fleet & Vehicle Maintenance, or Director award controls, including direct function invocation and cloud write attempts.
10. Check existing payroll, rewards, expense history, supplier purchases, inventory, and daily production data before release.

**Do not upload or commit this candidate to the live GitHub Pages site until all checks pass.**
