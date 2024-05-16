
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lscopdpagewrmetejxsj.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzY29wZHBhZ2V3cm1ldGVqeHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5MjkxNjUsImV4cCI6MjAzMDUwNTE2NX0.Op0PLeMqDi7JjwfvZAvILbsg5dMz-woE69KqfZNwe-c"
export const supabase = createClient(supabaseUrl, supabaseKey)