-- Update the handle_new_user function to auto-assign admin role to specific email
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, phone_number)
    VALUES (
            NEW.id, 
                COALESCE(NEW.raw_user_meta_data->>'full_name', 'Member'),
                    NEW.phone
    );
      
    -- Check if this is the designated admin email
    IF NEW.email = 'johnwanderi202@gmail.com' THEN
      INSERT INTO public.user_roles (user_id, role)
        VALUES (NEW.id, 'admin');
    ELSE
      -- Add default member role for everyone else
      INSERT INTO public.user_roles (user_id, role)
        VALUES (NEW.id, 'member');
    END IF;
                                    
    RETURN NEW;
END;
$function$;
