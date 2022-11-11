import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://wfzyfwfldqpeojtcbztr.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indmenlmd2ZsZHFwZW9qdGNienRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjA2NTksImV4cCI6MTk4MzczNjY1OX0.1TgJsO8F0y5KHxYPZIOKE9KgcDnzvWxNwMM5N0svs9s";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService(){
    return{
        getAllVideos(){
            return supabase.from("video")
            .select("*");
        }
    }
}