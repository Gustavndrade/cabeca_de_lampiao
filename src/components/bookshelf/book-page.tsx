"use client";

import { type MutableRefObject } from "react";

interface BookPageProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  zIndex: number;
  pageIndex: number;
  pageRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}

export function BookPage({
  frontContent,
  backContent,
  zIndex,
  pageIndex,
  pageRefs,
}: BookPageProps) {
  return (
    <div
      ref={(el) => {
        pageRefs.current[pageIndex] = el;
      }}
      className="absolute inset-0 preserve-3d bg-blue-600"
      style={{
        transformOrigin: "left center",
        zIndex,
      }}
    >
      {/* Front of page */}
      <div
        className="absolute inset-0 backface-hidden paper-texture rounded-r-sm overflow-hidden"
        style={{
          boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
        }}
      >
        <div className="absolute inset-0 p-5 md:p-8 flex flex-col">
          {/* Page edge lines */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ backgroundColor: "rgba(139, 94, 60, 0.1)" }}
          />
          <div
            className="absolute left-3 md:left-6 top-0 bottom-0 w-px"
            style={{ backgroundColor: "rgba(139, 94, 60, 0.08)" }}
          />
          {frontContent}
        </div>
        {/* Page number */}
        <div className="absolute bottom-3 right-4 text-[10px] text-muted-foreground/50 font-sans">
          {pageIndex * 2 + 1}
        </div>
      </div>

      {/* Back of page */}
      <div
        className="absolute inset-0 backface-hidden paper-texture-aged rounded-l-sm overflow-hidden"
        style={{
          transform: "rotateY(180deg)",
          boxShadow: "-2px 0 8px rgba(0,0,0,0.1)",
        }}
      >
        <div className="absolute inset-0 p-5 md:p-8 flex flex-col">
          {/* Page edge lines */}
          <div
            className="absolute right-0 top-0 bottom-0 w-px"
            style={{ backgroundColor: "rgba(139, 94, 60, 0.1)" }}
          />
          <div
            className="absolute right-3 md:right-6 top-0 bottom-0 w-px"
            style={{ backgroundColor: "rgba(139, 94, 60, 0.08)" }}
          />
          {backContent}
        </div>
        {/* Page number */}
        <div className="absolute bottom-3 left-4 text-[10px] text-muted-foreground/50 font-sans">
          {pageIndex * 2 + 2}
        </div>
      </div>
    </div>
  );
}
