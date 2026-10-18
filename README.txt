A&F Wekavera App 63 — Cloud Activation on New Devices

Replace only the repository app.js with the included app.js, after backing up your current file and browser data.

Change: When a new employee phone/computer lacks factory-local employee records, cloud login now asks for the Director's one-time activation code and submits it to the existing af-cloud-enroll Supabase Edge Function. Previously it refused to proceed because localStorage on the new device did not contain the employee.

Procedure:
1. Director: On factory laptop, open Staff Cloud Activation and generate a NEW one-time code for EMP009.
2. Employee: On the new device, enter EMP009 and a NEW private password (do not reuse the password exposed in screenshots).
3. Press SIGN IN, then enter the one-time code in the prompt.
4. The server must validate and consume the code, then the app signs in.

IMPORTANT: Server-side af-cloud-enroll function was NOT included or changed. Its enroll action MUST support employeeId/password/enrollmentCode without trusting client-provided role/name and must validate code, expiration, employee status, company membership, and one-time use. If the server requires a fullName, this patch may return a server error; do not weaken security to work around it. This update has passed node --check, but end-to-end Supabase activation was not tested. No payroll functions were intentionally modified.
