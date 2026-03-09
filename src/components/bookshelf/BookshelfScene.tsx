"use client";

import { Book } from "./book";
import { ScrollIndicator } from "./scroll-indicator";
import { useRef } from "react";

export function BookshelfScene() {
  const coverRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const BOKS = [
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

  return (
    <div className="relative w-full h-[800vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-x-0 top-30 flex flex-col gap-1 items-center">
          <h1
            className="text-[#3E3232] font-bold text-5xl"
            style={{ fontFamily: "Georgia" }}
          >
            A Estante
          </h1>
          <p className="text-[#B7A037] text-lg" style={{ fontFamily: "math" }}>
            Cada página para a Cabeça de Lampião
          </p>
        </div>

        <div className="flex items-end gap-1">
          {BOKS.map((b, i) => {
            return (
              <Book
                title={b.title}
                color={b.color}
                height={b.height}
                width={b.width}
                key={i}
              />
            );
          })}
        </div>
        <div className="bg-[#75502B] h-8 w-5/6 rounded-b-sm shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.3)]" />

        {ScrollIndicator()}

        <div className="absolute inset-0 flex flex-col justify-center">
          {/* <div></div> */}

          {/* <OpenBook coverRef={coverRef} pageRefs={pageRefs} /> */}

          {/* {ProgressIndicator()} */}
        </div>
      </div>
    </div>
  );
}
