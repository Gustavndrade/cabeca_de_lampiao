"use client";

import gsap from "gsap";
import { Book } from "./book";
import { ScrollIndicator } from "./scroll-indicator";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OpenBook } from "./open-book";

gsap.registerPlugin(ScrollTrigger);

const BOOKS = [
  {
    title: "Teste",
    color: "#2d5a3d",
    height: 180,
    width: 34,
  },
  {
    title: "Teste",
    color: "#4a5a2d",
    height: 210,
    width: 30,
  },
  {
    title: "Historia",
    color: "#8b4a30",
    height: 162,
    width: 34,
    isMemoryBook: true,
  },
  {
    title: "Teste",
    color: "#3d2d5a",
    height: 190,
    width: 32,
  },
  {
    title: "Teste",
    color: "#008000",
    height: 200,
    width: 33,
  },
  {
    title: "Teste",
    color: "#0083F0",
    height: 156,
    width: 24,
  },
];

export function BookshelfScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const booksRowRef = useRef<HTMLDivElement>(null);
  const memoryBookRef = useRef<HTMLDivElement>(null);
  const othersBooksRefs = useRef<(HTMLDivElement | null)[]>([]);
  const coverRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const openBookWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("outros antes: ", memoryBookRef.current);

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
      });

      const bookQueue = booksRowRef.current?.children;

      if (bookQueue) {
        gsap.from(Array.from(bookQueue), {
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: 0.1,
          ease: "power2.out",
          stagger: 0.2,
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1.2,
          invalidateOnRefresh: true,
          markers: true,
        },
      });

      const othersBooks = othersBooksRefs.current.filter(
        Boolean,
      ) as HTMLDivElement[];

      tl.to(othersBooks, {
        opacity: 0,
        duration: 0.08,
        stagger: 0.005,
        ease: "power1.out",
      });

      tl.to(
        memoryBookRef.current,
        {
          scale: 4,
          y: -80,
          rotation: -15,
          duration: 0.2,
          ease: "power2.inOut",
        },
        0.1,
      );

      tl.to(
        memoryBookRef.current,
        {
          opacity: 0,
          duration: 0.08,
          ease: "power1.out",
        },
        0.16,
      );

      tl.fromTo(
        openBookWrapperRef.current,
        { opacity: 0 },
        { opacity: 1, ease: "power2.out", duration: 0.1 },
        0.22,
      );

      tl.to(
        coverRef.current,
        {
          rotateY: -160,
          duration: 0.5,
          ease: "power1.out",
        },
        0.3,
      );

      // tl.from(pageRefs, {
      //   opacity: 0,
      // });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[800vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-x-0 top-30 flex flex-col gap-1 items-center">
          <h1
            ref={titleRef}
            className="text-[#3E3232] font-bold text-5xl"
            style={{ fontFamily: "Georgia" }}
          >
            A Estante
          </h1>
          <p className="text-[#B7A037] text-lg" style={{ fontFamily: "math" }}>
            Cada página para a Cabeça de Lampião
          </p>
        </div>

        <div ref={booksRowRef} className="flex items-end gap-1">
          {BOOKS.map((b, i) => {
            if (b.isMemoryBook) {
              return (
                <div key={i} ref={memoryBookRef}>
                  <Book {...b} isMemoryBook />
                </div>
              );
            }
            return (
              <div
                key={i}
                ref={(ob) => {
                  const otherIndex = i > 2 ? i - 1 : i;
                  othersBooksRefs.current[otherIndex] = ob;
                }}
              >
                <Book {...b} />
              </div>
            );
          })}

          {/* othersBooksRefs */}
        </div>
        <div className="bg-[#75502B] h-8 w-5/6 rounded-b-sm shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.3)]" />

        {ScrollIndicator()}

        <div
          ref={openBookWrapperRef}
          className="absolute inset-0 flex flex-col justify-center"
        >
          {/* <div></div> */}

          <OpenBook coverRefs={coverRef} pageRefs={pageRefs} />

          {/* {ProgressIndicator()} */}
        </div>
      </div>
    </div>
  );
}
