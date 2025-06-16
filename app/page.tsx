"use client";

import TextReveal from "@/components/TextReveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";
import { FaApple, FaShoppingCart } from "react-icons/fa";
import { FiArrowDownCircle } from "react-icons/fi";
import { TiFlash } from "react-icons/ti";
gsap.registerPlugin(CustomEase, SplitText);

export default function App() {
  useEffect(() => {
    const splitTextEls = (
      selector: string,
      type = "words,chars",
      addFirstChar = false
    ) => {
      const elements = document.querySelectorAll(selector);

      elements.forEach((element) => {
        const splitText = new SplitText(element, {
          type,
          wordsClass: "word",
          charsClass: "char",
        });

        if (type.includes("chars")) {
          splitText.chars.forEach((char, index) => {
            const originalText = char.textContent;
            char.innerHTML = `<span>${originalText}</span>`;

            if (addFirstChar && index === 0) {
              char.classList.add("first-char");
            }
          });
        }
      });
    };

    CustomEase.create("hop", ".8 , 0, .3, 1");

    splitTextEls(".intro-title h1", "words, chars", true);
    splitTextEls(".outro-title h1");
    splitTextEls(".tag p", "words");
    splitTextEls(".animate-text span", "words, chars", true);

    const isMobile = window.innerWidth <= 1000;

    gsap.set(
      [
        ".split-overlay .intro-title .first-char span",
        ".split-overlay .outro-title .char span",
      ],
      {
        y: "0%",
      }
    );

    gsap.set(".split-overlay .intro-title .first-char", {
      x: isMobile ? "7.5rem" : "18rem",
      y: isMobile ? "-1rem" : "-2.75rem",
      fontWeight: "900",
      scale: 0.75,
    });

    gsap.set(".split-overlay .outro-title .char", {
      x: isMobile ? "-3rem" : "-8rem",
      fontSize: isMobile ? "6rem" : "14rem",
      fontWeight: "500",
    });

    const tl = gsap.timeline({ defaults: { ease: "hop" } });
    const tags = gsap.utils.toArray(".tags");

    tags.forEach((tag: any, index: number) => {
      tl.to(
        tag.querySelectorAll("p .word"),
        {
          y: "0%",
          duration: 0.75,
        },
        0.5 + index * 0.1
      );
    });

    tl.to(
      ".preloader .intro-title .char span",
      {
        y: "0%",
        duration: 0.75,
        stagger: 0.05,
      },
      0.5
    )
      .to(
        ".preloader .intro-title .char:not(.first-char) span",
        {
          y: "100%",
          duration: 0.75,
          stagger: 0.05,
        },
        2
      )
      .to(
        ".preloader .outro-title .char span",
        {
          y: "0%",
          duration: 0.75,
          stagger: 0.075,
        },
        2.5
      )
      .to(
        ".preloader .intro-title .first-char",
        {
          x: isMobile ? "9rem" : "21.25rem",
          duration: 1,
        },
        3.5
      )
      .to(
        ".preloader .outro-title .char",
        {
          x: isMobile ? "-3rem" : "-8rem",
          duration: 1,
        },
        3.5
      )
      .to(
        ".preloader .intro-title .first-char",
        {
          x: isMobile ? "7.5rem" : "18rem",
          y: isMobile ? "-1rem" : "-2.75rem",
          fontWeight: "900",
          scale: 0.75,
          duration: 0.75,
        },
        4.5
      )
      .to(
        ".preloader .outro-title .char",
        {
          x: isMobile ? "-3rem" : "-8rem",
          fontSize: isMobile ? "6rem" : "14rem",
          fontWeight: "500",
          duration: 0.75,
          onComplete: () => {
            gsap.set(".preloader", {
              clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            });

            gsap.set(".split-overlay", {
              clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            });
          },
        },
        4.5
      )
      .to(
        ".container",
        {
          clipPath: "polygon(0% 48%, 100% 48%, 100% 52%, 0% 52%)",
          duration: 1,
        },
        5
      );

    tags.forEach((tag: any, index) => {
      tl.to(
        tag.querySelectorAll("p .word"),
        {
          y: "100%",
          duration: 0.75,
        },
        5.5 + index * 0.1
      );
    });

    tl.to(
      [".preloader", ".split-overlay"],
      {
        y: (i) => (i === 0 ? "-50%" : "50%"),
        duration: 1,
      },
      6
    )
      .to(
        ".container",
        {
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
        },
        6
      )
      .to(
        ".container .card",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.75,
        },
        6.25
      )
      .to(
        ".container animate-text span .char span",
        {
          y: "0%",
          duration: 0.75,
          stagger: 0.05,
        },
        6.5
      );
  }, []);

  return (
    <main>
      <div className="preloader">
        <div className="intro-title">
          <h1>NullSpace Studio</h1>
        </div>
        <div className="outro-title">
          <h1>22</h1>
        </div>
      </div>

      <div className="split-overlay">
        <div className="intro-title">
          <h1>NullSpace Studio</h1>
        </div>
        <div className="outro-title">
          <h1>22</h1>
        </div>
      </div>

      <div className="tags-overlay">
        <div className="tag tag-1">
          <p>Negative Space</p>
        </div>
        <div className="tag tag-2">
          <p>Form & Void</p>
        </div>
        <div className="tag tag-3">
          <p>Light Studies</p>
        </div>
      </div>

      <div className="container max-w-[100vw] !overflow-visible">
        <div className="hero-img w-full h-dvh relative !overflow-visible">
          <div className="absolute left-0 top-0">
            <TextReveal animateOnScroll={false} delay={7.3}>
              <div className="flex items-center gap-1 !pl-8 !pt-4">
                <FaApple className="size-8" />
                <span className="text-2xl font-semibold">Apple</span>
              </div>
            </TextReveal>
          </div>
          <div className="absolute right-0 top-0">
            <div className="flex items-center gap-1 !pr-8 !pt-4">
              <Input
                type="search"
                placeholder="Search.."
                className="!pl-2 max-w-[100px] !text-xs rounded-full h-8 shadow-none"
              />
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="!p-2 border border-black/20 rounded-full cursor-pointer">
                <FaShoppingCart className="size-4 text-gray-800" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 h-1/3 w-full  flex items-center justify-center [@media(min-width:1000px)]:hidden">
            <div className="w-[90%] h-full grid grid-cols-5 gap-4">
              <div className=" h-full col-span-3  flex flex-col justify-between">
                <TextReveal animateOnScroll={false} delay={7.3}>
                  <div className="flex flex-col animate-text">
                    <span className="text-4xl font-bold">iPhone 16</span>
                    <Separator className="!mt-3 !mb-3 !h-0.5" />
                    <span className="text-base text-gray-600">
                      iPhone 16 Pro is built for Apple Intelligence, the
                      personal intelligence system that helps you write, express
                      yourself and get things done effortlessly.
                    </span>
                  </div>
                </TextReveal>
                <div className="flex gap-4">
                  <Button variant={"default"} className="">
                    <TiFlash /> <span>PRE-ORDER</span>
                  </Button>
                  <Button variant={"outline"}>
                    <FiArrowDownCircle />
                    <span>EXPLORE</span>
                  </Button>
                </div>
              </div>
              <div className="col-span-2 h-full flex items-center justify-center">
                <img
                  src={"/ip16_pro.png"}
                  className="w-[58%] object-center rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="absolute top-16 left-0 pl-4 w-[24%] h-full [@media(max-width:1000px)]:hidden">
            <div className=" h-full col-span-3 flex flex-col justify-between pt-[20%] !pb-20 pr-6">
              <div className="flex flex-col">
                <TextReveal animateOnScroll={false} delay={7.3}>
                  <div className="relative w-full flex animate-text">
                    <span className="text-5xl font-bold self-end">iPhone</span>
                    <span className="text-2xl font-bold self-start">16</span>
                  </div>
                </TextReveal>
                <Separator className="!mt-3 !mb-3 !h-0.5" />
                <TextReveal animateOnScroll={false} delay={7.3}>
                  <div>
                    <span className=" text-gray-600">
                      Built for Apple Intelligence
                    </span>
                  </div>
                </TextReveal>
              </div>
              <div className="flex gap-4 flex-col mt-12">
                <Button variant={"default"} className="">
                  <TiFlash /> <span>PRE-ORDER</span>
                </Button>
                <Button variant={"outline"}>
                  <FiArrowDownCircle />
                  <span>EXPLORE</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute top-16 right-0 pl-4 w-[24%] h-full [@media(max-width:1000px)]:hidden">
            <div className=" h-full col-span-3 flex flex-col justify-center pt-[5%]">
              <TextReveal animateOnScroll={false} delay={7.3}>
                <div className="flex items-center gap-1 w-full animate-text">
                  <span className="text-2xl text-right w-full  font-semibold">
                    Designed to be loved.
                  </span>{" "}
                </div>
              </TextReveal>
            </div>
          </div>

          <nav className="main-nav">
            <li>Iphone</li>
            <li>Ipad</li>
            <li>Airpod</li>
            <li>Watch</li>
          </nav>
        </div>

        <div className="card rounded-xl overflow-hidden ">
          <video
            src={"/hero.mp4"}
            autoPlay
            muted
            loop
            className="size-full object-cover"
          />
        </div>
      </div>

      <section className="h-dvh bg-red-100 !mt-20"></section>
    </main>
  );
}
