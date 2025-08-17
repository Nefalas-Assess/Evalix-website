import { createClient } from '@supabase/supabase-js';

// Configuration temporaire pour éviter l'erreur process.env
// Remplacez ces valeurs par vos vraies clés Supabase
const supabaseUrl = 'https://qjvobzqwbmmwpauahfig.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqdm9ienF3Ym1td3BhdWFoZmlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1NzMzOTQsImV4cCI6MjA1NDE0OTM5NH0.y3u7LL9pISKD1dxGVU2KZdrwO30z75eJNlMd801V0Qc';

export const supabase = createClient(supabaseUrl, supabaseKey);