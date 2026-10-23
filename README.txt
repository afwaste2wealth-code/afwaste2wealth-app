App 74 SYNC SAFETY CANDIDATE - NOT YET BROWSER TESTED

Back up App 73 and export local data on BOTH devices before deployment.
Do not run Migrate All Existing Data.
Changes: prevent pending local master records from being replaced by cloud pulls; detect and retain conflicting server versions without overwriting; paginate cloud master pulls; persist sync failure/conflict diagnostics locally; refresh winner card on performance cloud updates.
IMPORTANT: Existing diverged records may be flagged as conflicts, not auto-merged. A later supervised reconciliation is required.
This does NOT guarantee synchronization of all modules or replace a full integration test.
