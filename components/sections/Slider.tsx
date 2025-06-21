import { FC, useRef } from "react";
import { cn } from "@/lib/utils";
import { Plus, ChevronLeft, ChevronRight, XIcon } from "lucide-react";
import TextReveal from "../TextReveal";
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogImage,
  MorphingDialogTrigger,
} from "../motion-primitives/morphing-dialog";
import { Feature, FeatureDetail } from "@/lib/types";
import FeatureDetailBox from "./FeatureDetail";

interface FeatureSliderProps {
  features: Feature[];
}

export const FeatureSlider: FC<FeatureSliderProps> = ({ features }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const slider = scrollRef.current;
    if (!slider) return;
    const cardWidth = 320 + 24; // max-w + gap (px)
    slider.scrollBy({
      left: dir === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative pb-20">
      {/* Slider Controls */}
      <div className="absolute right-20 bottom-0 flex gap-6">
        <button
          onClick={() => scroll("left")}
          className=" z-10 bg-gray-100 rounded-full p-1 shadow hover:bg-black/10"
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className=" z-10 bg-gray-100 rounded-full p-1 shadow hover:bg-black/10"
          aria-label="Next"
        >
          <ChevronRight />
        </button>
      </div>
      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 px-10 hide-scrollbar scroll-smooth overflow-x-auto"
        tabIndex={0}
      >
        {features.map((feature, idx) => (
          <MorphingDialog
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            key={idx}
          >
            <MorphingDialogTrigger>
              <div
                className={cn(
                  "min-w-[280px] w-[400px] h-[700px] flex-shrink-0 rounded-3xl relative flex flex-col justify-between transition-all group overflow-hidden cursor-pointer",
                  feature.theme === "dark" ? "text-white" : "text-black"
                )}
              >
                <TextReveal animateOnScroll={true}>
                  <div className="p-6 z-10 text-left self-start w-full">
                    <div className="text-lg font-semibold opacity-80 mb-1 !text-left">
                      <p>{feature.sectionTitle}</p>
                    </div>
                    <div className="text-[1.65rem] opacity-90 font-bold mb-4 pr-10">
                      <h3>{feature.headline}</h3>
                    </div>
                  </div>
                </TextReveal>
                <div
                  className={cn(
                    "absolute bottom-4 right-4 bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center transition group-hover:bg-black/70 z-10",
                    feature.theme === "dark"
                      ? "bg-white/80 text-black group-hover:bg-white"
                      : "bg-black/80 text-white group-hover:bg-black"
                  )}
                  aria-label="Learn more"
                >
                  <Plus className="w-6 h-6" />
                </div>
                <img
                  src={feature.image}
                  alt={feature.sectionTitle}
                  className="absolute top-0 left-0 size-full hover:scale-[1.05] transition-all duration-500"
                  draggable={false}
                />
              </div>
            </MorphingDialogTrigger>
            <MorphingDialogContainer className="overflow-y-auto scrollbar-hide">
              <MorphingDialogContent className="relative w-[85%] h-[93%] bg-white rounded-t-3xl overflow-y-auto scrollbar-hide">
                <div className="min-h-full flex flex-col py-16 px-20">
                  <div className="flex flex-col gap-2 mb-14">
                    <span className="text-xl font-semibold">
                      {feature.sectionTitle}
                    </span>{" "}
                    <h3 className="text-[3.5rem] font-semibold pr-[40%] leading-16">
                      {feature.headline}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-8">
                    {feature.description.map(
                      (description: FeatureDetail, index: number) => (
                        <FeatureDetailBox
                          featureDetail={description}
                          key={index}
                        />
                      )
                    )}
                  </div>
                </div>
              </MorphingDialogContent>
              <MorphingDialogClose
                className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1"
                variants={{
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { delay: 0.3, duration: 0.1 },
                  },
                  exit: { opacity: 0, transition: { duration: 0 } },
                }}
              >
                <XIcon className="h-5 w-5 text-zinc-500" />
              </MorphingDialogClose>
            </MorphingDialogContainer>
          </MorphingDialog>
        ))}
      </div>
    </div>
  );
};
