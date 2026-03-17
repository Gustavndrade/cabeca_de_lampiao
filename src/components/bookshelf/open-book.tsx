import { RefObject } from "react";
import { BookPage } from "./book-page";
import { DATA_CONTENT, PAGE_CONTENT } from "./use-book-page";


// B7A037

interface OpenBookProps {
  coverRefs: RefObject<HTMLDivElement | null>;
  pageRefs: RefObject<(HTMLDivElement | null)[]>;
}

export function OpenBook({ coverRefs, pageRefs }: OpenBookProps) {
  const NUM_PAGES = PAGE_CONTENT.length;

  return (
    <div
      className="relative mx-auto"
      style={{
        width: "min(85vw, 380px)",
        height: "min(60vh, 500px)",
        perspective: "1200px",
      }}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 rounded-md"
          style={{
            background:
              "linear-gradient(135deg, #6b3a2a 0%, #5a3020 50%, #4a2518 100%)",
            boxShadow: "4px 4px 20px rgba(0,0,0,0.4)",
          }}
        />

        <div
          className="absolute inset-y-1 left-0 right-1 rounded-r-sm"
          style={{
            background:
              "linear-gradient(90deg, #e8d8c0 0%, #f0e4d0 3%, #faf3e8 5%, #faf3e8 100%)",
            boxShadow: "2px 0 4px rgba(0,0,0,0.1)",
          }}
        />

        {DATA_CONTENT.map((page, i) => (

          <BookPage
            key={i}
            pageIndex={i}
            frontContent={<PAGE_CONTENT data={page} />}
            zIndex={NUM_PAGES - i}
            pageRefs={pageRefs}
          />

        ))}

        <div
          className="absolute inset-0 w-full"
          style={{
            transformOrigin: "left center",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            ref={coverRefs}
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #8b4a30 0%, #6b3a2a 50%, #5a2e20 100%)",
              transformStyle: "preserve-3d",
              transformOrigin: "left center",
            }}
          >
            <div className="leather-texture absolute inset-0 rounded-l-sm" />
            <div className="absolute inset-0 items-center justify-center flex flex-col gap-1">
              <div className="w-1/4 h-px bg-[#c9a84c]" />
              <h1
                className="font-serif text-[#CFB53B]"
                style={{ fontFamily: "Georgia" }}
              >
                Livro Legal
              </h1>
              <div className="w-1/4 h-px bg-[#c9a84c]" />
              <svg
                className="w-20 h-12 text-[#CFB53B]/40 mt-1"
                viewBox="0 0 100 30"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M10 15 Q 25 5, 50 15 T 90 15" />
                <path d="M10 15 Q 25 25, 50 15 T 90 15" />
                <circle cx="50" cy="15" r="2" fill="currentColor" />
              </svg>
            </div>
            <div
              className="absolute left-0 top-0 bottom-0 w-2 sm:w-3 rounded-l-sm"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1), transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
