"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { PreloaderContext } from "@/app/context/PreloaderContext";

gsap.registerPlugin(CustomEase, SplitText);

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (show) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";

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

      gsap.set(".tags-overlay", {
        display: "block",
      });

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
      const tags = gsap.utils.toArray(".tag");

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
          ".tags-overlay",
          {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.5,
            onComplete: () => {
              gsap.set(".tags-overlay", { display: "none" });
              setShow(false);
            },
          },
          6.75
        );
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <PreloaderContext.Provider value={{ show }}>
      <main>
        <div className="preloader">
          <div className="intro-title">
            <h1>Eric.gng. Studio</h1>
          </div>
          <div className="outro-title">
            <h1>25</h1>
          </div>
        </div>

        <div className="split-overlay">
          <div className="intro-title">
            <h1>Eric.gng. Studio</h1>
          </div>
          <div className="outro-title">
            <h1>25</h1>
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

        {children}
      </main>
    </PreloaderContext.Provider>
  );
}
