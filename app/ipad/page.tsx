"use client";
import GetToKnownSection from "@/components/sections/GetToKnow";
import Hero from "@/components/sections/Hero";

export default function Ipad() {
  return (
    <>
      <Hero
        title="iPad"
        headline="Touch, draw and type on one magical device."
        description=""
        videoURL="https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/ipad/hero.mp4"
      />
      <GetToKnownSection title="iPad" categoryId={2} />
      <section className="h-dvh bg-red-50"></section>
    </>
  );
}
