import { FeatureDetail } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureDetailProps {
  featureDetail: FeatureDetail;
}

export default function FeatureDetailBox({
  featureDetail,
}: FeatureDetailProps) {
  const { text, textPosition, image } = featureDetail;

  // Responsive layout classes for each text position
  let containerClass = "";
  let textClass =
    "text-xl md:text-[1.6rem] font-semibold text-[#6e6e73] leading-8";
  let imageClass = "";

  if (textPosition === "top") {
    containerClass =
      "flex flex-col items-center pt-4 md:pt-8 bg-[#f5f5f7] rounded-4xl overflow-hidden";
    textClass += " !px-[10%] pb-6";
  } else if (textPosition === "left") {
    containerClass =
      "flex flex-row items-center  bg-[#f5f5f7] rounded-4xl overflow-hidden";
    textClass += " text-left max-w-[40%] pl-[5%]";
    imageClass += "mx-[5%]";
  } else if (textPosition === "right") {
    containerClass =
      "flex flex-row-reverse items-center  bg-[#f5f5f7] rounded-4xl overflow-hidden";
    textClass += " text-left max-w-[40%] pr-[5%]";
    imageClass += "mx-[5%]";
  }

  return (
    <div className={cn(containerClass)}>
      <p className={cn(textClass)}>{boldFirstSentence(text)}</p>
      <Image
        src={image}
        width={900}
        height={600}
        alt={text}
        className={imageClass}
        priority
        style={{
          objectFit: "cover",
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}

function boldFirstSentence(text: string) {
  // This regex splits after the first period followed by a space or end of line
  const match = text.match(/^.*?[.?!](?:\s|$)/);
  if (!match) return <>{text}</>;
  const first = match[0];
  const rest = text.slice(first.length);
  return (
    <>
      <span className="font-bold text-black">{first.trim()}</span>
      {` ${rest}`}
    </>
  );
}
