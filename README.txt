Based on uploaded app (61).js. Replace repository app.js with enclosed app.js.
Fix: rebuild earlier unpaid payroll from individual monthly earnings and payments, rather than latest saved settlement snapshot. Missing periods from first saved month are preview estimates and block settlement confirmation until saved. Existing localStorage data is not erased.
Expected EMP014 if no payments: Jan 96,700; Feb 196,700; Mar 212,800; Apr 222,800. Verify monthly attendance and saved payroll first.
JavaScript syntax checked with node --check. Browser integration testing not performed.
