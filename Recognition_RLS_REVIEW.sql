-- REVIEW BEFORE DEPLOYMENT. This SQL has NOT been applied.
-- A&F Wekavera: permit authenticated members to read ONLY the
-- Director-published, non-financial recognition snapshot for their company.
-- All existing module RLS policies remain unchanged.
BEGIN;
CREATE POLICY af_shared_recognition_member_read
ON public.af_module_records
FOR SELECT TO authenticated
USING (
  module_key = 'afSharedRecognition'
  AND company_id = private.af_my_company_id()
  AND private.af_my_role() IN ('Director','Manager','HR','Secretary','Team Leader','Employee')
);
COMMIT;
-- Test with real employee JWT and director JWT before deploying frontend.
-- Director retains write permission under the existing policy.
