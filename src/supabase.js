import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://zwnoaqdwrrjqspldliei.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3bm9hcWR3cnJqcXNwbGRsaWVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMjQ3OTAsImV4cCI6MjA5MTgwMDc5MH0.ui9UCuIbJiZnPOXn9lr2n3D391VeNZgs3KGdSH87F3c"

export const supabase = createClient(supabaseUrl, supabaseKey)