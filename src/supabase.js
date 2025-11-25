import { createClient } from '@supabase/supabase-js';

// REPLACE THESE WITH THE KEYS YOU COPIED IN STEP 4
const supabaseUrl = 'https://sllkvwchgniwletnwadr.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsbGt2d2NoZ25pd2xldG53YWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwOTI5MjQsImV4cCI6MjA3OTY2ODkyNH0.64vuhtIBaaBHJxKSl0vaFW_Ep9oDLZlDsKI_MApUYFA'; 
export const supabase = createClient(supabaseUrl, supabaseAnonKey);