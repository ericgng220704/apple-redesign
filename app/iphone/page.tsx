"use client";

import GetToKnownSection from "@/components/sections/GetToKnow";
import Hero from "@/components/sections/Hero";

export default function Iphone() {
  return (
    <>
      <Hero
        title="iPhone"
        headline="Designed to be loved."
        videoURL="https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/hero.mp4"
        description="Built for Apple Intelligence."
      />
      <GetToKnownSection title="iPhone" categoryId={1} />
      <section className="h-dvh bg-red-50"></section>
    </>
  );
}
