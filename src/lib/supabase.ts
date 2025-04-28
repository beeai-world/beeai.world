import { createClient } from '@supabase/supabase-js';

// Updated Supabase connection details
const supabaseUrl = 'https://mqlecoozuzazhcqxnykj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbGVjb296dXphemhjcXhueWtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NDQzNDIsImV4cCI6MjA2MTQyMDM0Mn0.81GXIsTifPJSAkz4-z8pdT8DkRhOagxJupi_RyVFSB8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 