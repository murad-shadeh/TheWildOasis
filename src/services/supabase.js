import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bkhvsurnvhuduqllrnwe.supabase.co";
// anyone with the API key can be allowed to do only wha we allowed in th RLS (Row Level Security)
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJraHZzdXJudmh1ZHVxbGxybndlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAxODYwMjgsImV4cCI6MjAzNTc2MjAyOH0.Ob9Lpi4rVQRIHhNaboMJJ36bKbwSyMVrrt4RzqWlk88";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
