import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xvosbkuqpcirxvwdvdbv.supabase.co";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2b3Nia3VxcGNpcnh2d2R2ZGJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxOTc1ODksImV4cCI6MjA0Mjc3MzU4OX0.p9ZVDe0Qtuo8ek8cq_m8QoH_ykcC-tnX8oiI5BYiVZI";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
