import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jtvarfitgidzipwebzgx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0dmFyZml0Z2lkemlwd2Viemd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1NjUwODYsImV4cCI6MjA1ODE0MTA4Nn0.PUHxxvH7UYwtjNWFqHTDh5_RnpRaqfefVVbGJ4fXje4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 