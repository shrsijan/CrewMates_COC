// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = '__';
const supabaseKey = '__';

export const supabase = createClient(supabaseUrl, supabaseKey);
