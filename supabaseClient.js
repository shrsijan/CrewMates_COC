// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vxlceadybyaezshothlk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4bGNlYWR5YnlhZXpzaG90aGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3MzI3MDEsImV4cCI6MjA0NjMwODcwMX0.x4vTrhKBpHb-dRnLyWfibmvZdeJd1f98z3YgemGzkD0';

export const supabase = createClient(supabaseUrl, supabaseKey);
