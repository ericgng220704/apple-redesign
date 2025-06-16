"use client";

import React, { ReactElement, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface TextRevealProps {
  children: ReactElement;
  animateOnScroll?: boolean;
  delay?: number;
}

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function TextReveal({
  children,
  animateOnScroll = true,
  delay = 0,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hold our targets and split instances
  const elementRef = useRef<HTMLElement[]>([]);
  const splitRef = useRef<any[]>([]);
  const linesRef = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      // reset arrays
      elementRef.current = [];
      splitRef.current = [];
      linesRef.current = [];

      // cast once: we know our children are HTMLElements
      const rawChildren = Array.from(container.children) as HTMLElement[];

      // if you’re using a "data-copy-wrapper", flatten grandchildren
      const targets: HTMLElement[] = container.hasAttribute("data-copy-wrapper")
        ? rawChildren.flatMap((el) => Array.from(el.children) as HTMLElement[])
        : rawChildren;

      targets.forEach((el) => {
        elementRef.current.push(el);

        // instantiate SplitText
        const splitInstance = new SplitText(el, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        });
        splitRef.current.push(splitInstance);

        // cast lines to HTMLElements so .style works
        const lines = splitInstance.lines as HTMLElement[];
        linesRef.current.push(...lines);

        // preserve any textIndent on first line
        const textIndent = window.getComputedStyle(el).textIndent;
        if (textIndent && textIndent !== "0px" && lines.length) {
          lines[0].style.paddingLeft = textIndent;
          el.style.textIndent = "0";
        }
      });

      gsap.set(linesRef.current, {
        y: "100%",
      });

      const animationProps = {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay,
      };

      if (animateOnScroll) {
        gsap.to(linesRef.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        });
      } else {
        gsap.to(linesRef.current, animationProps);
      }

      return () => {
        splitRef.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay],
    }
  );

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children as ReactElement<any, any>, {
      ref: containerRef,
    });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
