A&F Wekavera Ltd — Secretary / Administration team rule update

Replace the repository app.js with the app.js in this ZIP. Back up your browser data first.

Changes:
- Secretary or Administration employees are hidden from team leader/member selection.
- Team save rejects these employees if selected through stale forms.
- When editing an employee to Secretary/Administration, membership in production teams is removed with confirmation.
- Existing team leaders must first be replaced in Teams.
- Attendance and payroll are untouched.

Checks: JS syntax and ZIP integrity verified. Browser acceptance testing remains necessary.

Test: create/edit Secretary in Administration; open Teams and confirm not selectable; check attendance and payroll still work.
