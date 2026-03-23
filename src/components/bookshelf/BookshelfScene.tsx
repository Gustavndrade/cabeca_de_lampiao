"use client";

import gsap from "gsap";
import { Book } from "./book";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OpenBook } from "./open-book";
import { DATA_CONTENT } from "./use-book-page";
import { ScrollIndicator } from "./scroll-indicator";

gsap.registerPlugin(ScrollTrigger);

const BOOKS = [
  {
    title: "Contos",
    color: "#2d5a3d",
    height: 180,
    width: 34,
  },
  {
    title: "Romance",
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
    title: "Aventura",
    color: "#3d2d5a",
    height: 190,
    width: 32,
  },
  {
    title: "Terror",
    color: "#008000",
    height: 200,
    width: 33,
  },
  {
    title: "Comédia",
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
  const disappearRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      });

      const bookQueue = booksRowRef.current?.children;

      if (bookQueue) {
        gsap.from(Array.from(bookQueue), {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.in",
          stagger: 0.2,
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          scrub: 2.5,
        },
      });

      const othersBooks = othersBooksRefs.current.filter(
        Boolean,
      ) as HTMLDivElement[];

      tl.to(othersBooks, {
        opacity: 0,
        duration: 0.15,
        ease: "power1.out",
      });

      tl.to(
        disappearRef.current, {
        opacity: 0,
        ease: "power2.out",
        duration: 0.3
      });

      tl.to(
        memoryBookRef.current,
        {
          scale: 4,
          y: -80,
          rotation: -15,
          duration: 1,
          ease: "power1",
        },
        0.5,
      );

      tl.to(
        memoryBookRef.current,
        {
          opacity: 0,
          duration: 3,
          ease: "power1.out",
        },
        1.2,
      );

      tl.fromTo(
        openBookWrapperRef.current,
        { opacity: 0 },
        { opacity: 1, ease: "power2.out", duration: 1.5 },
        4,
      );

      tl.to(
        coverRef.current,
        {
          rotateY: -180,
          duration: 3,
          ease: "power1.out",
        },
        4.2,
      );


      const PAGE_FLIP_DURATION = 3.5;
      const PAGE_FLIP_OVERLAP = 0.8;

      const pageFlipRange = PAGE_FLIP_DURATION - PAGE_FLIP_OVERLAP;


      for (let i = 0; i < DATA_CONTENT.length; i++) {
        const page = pageRefs.current[i];
        if (!page) continue
        const start = 6 + i * pageFlipRange;

        tl.to(page, {
          rotateY: -160,
          duration: PAGE_FLIP_DURATION,
          ease: "power1.inOut",
        }, start)

      }

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
            Cada página pensando em você
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

        </div>
        <div className="bg-[#75502B] h-8 w-5/6 rounded-b-sm shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.3)]" />

        <ScrollIndicator scrollRef={disappearRef} />

        <div
          ref={openBookWrapperRef}
          className="absolute inset-0 flex flex-col justify-center"
        >

          <OpenBook coverRefs={coverRef} pageRefs={pageRefs} />

        </div>
      </div>
    </div>
  );
}
