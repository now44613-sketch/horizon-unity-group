-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;

-- Create permissive policy for users to view their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);