import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { supabase } from "@/lib/supabaseClient";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function uploadFile(file: File, path: string) {
  const { data, error } = await supabase.storage
    .from("product-assets")
    .upload(path, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) throw error;

  // Get the public URL
  const { data: urlData } = supabase.storage
    .from("product-assets")
    .getPublicUrl(path);

  return urlData.publicUrl;
}
