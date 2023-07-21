import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wjdpetxwxgjjnjptcrsg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqZHBldHh3eGdqam5qcHRjcnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3MzM2NDgsImV4cCI6MjAwNTMwOTY0OH0.7ORatMeZUX25twHDOOiaGgBWesGJ253BKAWHtPgVW7s";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
