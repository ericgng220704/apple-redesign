"use client";
import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import TextReveal from "./TextReveal";

const menuLinks = [
  { label: "Iphone", href: "/iphone" },
  { label: "Ipad", href: "/ipad" },
  { label: "Airpods", href: "/airpods" },
  { label: "Watch", href: "watch" },
];

export default function MobileMenuButton() {
  const [open, setOpen] = useState(false);

  // Prevent scroll when open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className="block md:hidden cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <CiMenuFries className="size-5 text-gray-800" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-white bg-opacity-90 flex flex-col"
          >
            <div className="flex items-center justify-between p-6">
              {/* <span className="flex items-center gap-2 text-black font-semibold text-lg">
                <FaApple className="size-6" />
                Apple
              </span> */}
              <div></div>
              <button
                className="text-black text-xl"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <IoClose className="size-6" />
              </button>
            </div>
            <div className="gap-8">
              <div className="flex flex-col gap-5 w-full pl-8 pt-8">
                {menuLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-3xl leading-10 font-semibold text-black hover:text-apple/70 transition"
                    onClick={() => setOpen(false)}
                  >
                    <TextReveal animateOnScroll={false} delay={0.4}>
                      <div>
                        <span>{link.label}</span>
                      </div>
                    </TextReveal>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
