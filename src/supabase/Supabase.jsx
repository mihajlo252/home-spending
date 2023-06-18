import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://vvyrcrkgzorpqxjwmlky.supabase.co",
    import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
);
