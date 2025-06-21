"use client";
import { useEffect, useState } from "react";
import TextReveal from "../TextReveal";
import { FeatureSlider } from "./Slider";

interface GetToKnownSectionProps {
  title: string;
  categoryId: number;
}

export default function GetToKnownSection({
  title,
  categoryId,
}: GetToKnownSectionProps) {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch(`/api/features?categoryId=${categoryId}`)
      .then((res) => res.json())
      .then((data) => setFeatures(data.features || []));
  }, [categoryId]);
  console.log(features);
  return (
    <section className="py-24 hide-scrollbar">
      <TextReveal animateOnScroll={true}>
        <div>
          <h2 className="text-5xl font-semibold mb-16 pl-12">
            Get to know {title}.
          </h2>
        </div>
      </TextReveal>
      <FeatureSlider features={features} />
    </section>
  );
}
