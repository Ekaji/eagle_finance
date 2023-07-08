
import { createClient } from '@supabase/supabase-js'
import { SUPABASE_KEY } from '@env'


const supabaseUrl = 'https://krjmhzkkjrrsenjmpluj.supabase.co'
const supabaseKey = SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
