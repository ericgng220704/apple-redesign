"use client";

import TextReveal from "@/components/TextReveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useEffect } from "react";
import { FaApple, FaSearch, FaShoppingCart } from "react-icons/fa";
import { usePreloader } from "@/app/context/PreloaderContext";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { TiFlash } from "react-icons/ti";
import { CiMenuFries } from "react-icons/ci";
import { FiArrowDownCircle } from "react-icons/fi";
import { Magnetic } from "../motion-primitives/magnetic";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import MobileMenuButton from "../MobileMenuButton";

interface HeroProps {
  title: string;
  headline: string;
  videoURL: string;
  description: string;
}

export default function Hero({
  title,
  headline,
  videoURL,
  description,
}: HeroProps) {
  const { show } = usePreloader();

  useEffect(() => {
    if (!show) {
      const container = document.querySelector(
        ".container"
      ) as HTMLElement | null;
      if (container) {
        container.style.clipPath =
          "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
        const card = container.querySelector(".card") as HTMLElement | null;
        if (card) {
          card.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
        }
      }
    }
  }, [show]);

  return (
    <>
      <div className="container max-w-[100vw] !overflow-visible">
        <div className="hero-img w-full h-dvh relative !overflow-visible">
          <div className="absolute left-0 top-0">
            <TextReveal animateOnScroll={false} delay={show ? 7.3 : 0}>
              <div className="flex items-center gap-1 !pl-8 !pt-4">
                <FaApple className="size-6 sm:size-8" />
                <span className="text-lg [@media(min-width:500px)]:text-2xl font-semibold">
                  Apple
                </span>
              </div>
            </TextReveal>
          </div>
          <div className="absolute right-0 top-0">
            <div className="flex items-center gap-1 !pr-8 !pt-4">
              <Input
                type="search"
                placeholder="Search.."
                className="hidden [@media(min-width:500px)]:block !pl-2 max-w-[100px] !text-xs rounded-full h-8 shadow-none"
              />
              <Popover>
                <PopoverTrigger>
                  <div className="block [@media(min-width:500px)]:hidden p-[0.4rem] [@media(min-width:500px)]:p-2 border border-black/20 rounded-full cursor-pointer">
                    <FaSearch className="size-3 [@media(min-width:500px)]:size-4 text-gray-800" />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="!w-[15rem] mr-7 overflow-hidden p-0">
                  <Input
                    type="search"
                    placeholder="Search.."
                    className="pl-2 w-full !text-xs h-8 border-0 outline-0 ring-0"
                  />
                </PopoverContent>
              </Popover>

              <div className="p-[0.4rem] [@media(min-width:500px)]:p-2 border border-black/20 rounded-full cursor-pointer">
                <FaShoppingCart className="size-3 [@media(min-width:500px)]:size-4 text-gray-800" />
              </div>
              <Avatar className="cursor-pointer size-6 [@media(min-width:500px)]:size-8 ">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  className=""
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {/* <div className="block [@media(min-width:500px)]:hidden  cursor-pointer">
                <CiMenuFries className="size-5 [@media(min-width:500px)]:size-4 text-gray-800" />
              </div> */}
              <MobileMenuButton />
            </div>
          </div>
          <nav className="main-nav">
            <Magnetic
              intensity={0.2}
              springOptions={{
                bounce: 0.1,
              }}
              actionArea="global"
              range={100}
            >
              <li>
                <Link href={"/iphone"}>
                  {" "}
                  <span>Iphone</span>
                </Link>
              </li>
            </Magnetic>
            <Magnetic
              intensity={0.2}
              springOptions={{
                bounce: 0.1,
              }}
              actionArea="global"
              range={100}
            >
              <li>
                <Link href={"/ipad"}>
                  {" "}
                  <span>Ipad</span>
                </Link>
              </li>
            </Magnetic>
            <Magnetic
              intensity={0.2}
              springOptions={{
                bounce: 0.1,
              }}
              actionArea="global"
              range={100}
            >
              <li>
                <Link href={"/airpods"}>
                  {" "}
                  <span>Airpods</span>
                </Link>
              </li>
            </Magnetic>
            <Magnetic
              intensity={0.2}
              springOptions={{
                bounce: 0.1,
              }}
              actionArea="global"
              range={100}
            >
              <li>
                <Link href={"/watch"}>
                  {" "}
                  <span>Watch</span>
                </Link>
              </li>
            </Magnetic>
          </nav>
        </div>

        <div className="card rounded-xl overflow-hidden ">
          <video
            src={videoURL}
            autoPlay
            muted
            loop
            className="size-full object-cover"
          />
        </div>

        <div className="absolute bottom-4 w-full  [@media(min-width:1000px)]:hidden">
          <div className="w-[90%] h-full grid grid-cols-5 gap-4 grid-rows-2 mx-auto">
            <div className=" h-full col-span-3  flex flex-col justify-between">
              <TextReveal animateOnScroll={false} delay={show ? 7.3 : 0}>
                <div className="flex flex-col animate-text">
                  <span className="text-4xl font-bold">{title}</span>
                </div>
              </TextReveal>
            </div>
            <div className="col-span-2 self-end">
              <TextReveal animateOnScroll={false} delay={show ? 7.3 : 0}>
                <div>
                  <span className="text-sm font-semibold text-gray-600">
                    {headline}
                  </span>
                </div>
              </TextReveal>
            </div>
            <div className="flex gap-4 col-span-5 row-start-2 w-full mt-2">
              <Button variant={"default"} className="grow">
                <TiFlash /> <span>PRE-ORDER</span>
              </Button>
              <Button variant={"outline"} className="grow">
                <FiArrowDownCircle />
                <span>EXPLORE</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute top-16 left-0 pl-4 w-[24%] h-full [@media(max-width:1000px)]:hidden">
          <div className=" h-full col-span-3 flex flex-col justify-between pt-[20%] !pb-20 pr-6">
            <div className="flex flex-col">
              <TextReveal animateOnScroll={false} delay={show ? 7.3 : 0}>
                <div className="relative w-full flex animate-text">
                  <span className="text-5xl font-bold self-end">{title}</span>
                </div>
              </TextReveal>
              <Separator className="!mt-3 !mb-3 !h-0.5" />
              <TextReveal animateOnScroll={false} delay={show ? 7.3 : 0}>
                <div>
                  <span className=" text-gray-600">{description}</span>
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
            <TextReveal animateOnScroll={false} delay={show ? 7.3 : 0}>
              <div className="flex items-center gap-1 w-full animate-text">
                <span className="text-2xl text-right w-full  font-semibold">
                  {headline}
                </span>{" "}
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </>
  );
}
