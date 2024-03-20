import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mahizgnjhbovajcriyjz.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1haGl6Z25qaGJvdmFqY3JpeWp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyMjA2NjYsImV4cCI6MjAyMjc5NjY2Nn0.iEluw42uggqmfP3OSXQs9vUdOIlRLOsQQLWLJJ1jQaU";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
