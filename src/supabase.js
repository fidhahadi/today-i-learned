
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://shknmrokpynixrijfqed.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoa25tcm9rcHluaXhyaWpmcWVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0ODEwMzYsImV4cCI6MjAxMTA1NzAzNn0.qzQh0cYxsq8cWHEI-ezscdV0mNNKr33N8MdmeKnPLiw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;