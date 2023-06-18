import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://vvyrcrkgzorpqxjwmlky.supabase.co",
    process.env.REACT_APP_PUBLIC_SUPABASE_ANON_KEY
);
