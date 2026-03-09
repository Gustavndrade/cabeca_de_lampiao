import { MutableRefObject, RefObject } from "react";
import { BookPage } from "./book-page";

const DATA_CONTENT = [
  {
    content: {
      type: "chapter",
      chapter: "Capitulo IV",
      title: "Inverno",
      text: "A lareira crepitava baixinho, contando suas proprias historias de fogo e cinza. O cobertor de la feito a mao envolvia nao so o corpo, mas tambem a sensacao de pertencer a algo maior. Cada noite de inverno era um abraco do tempo.",
    },
  },
  {
    content: {
      type: "quote",
      quote: "O outono e uma segunda primavera, onde cada folha e uma flor.",
      author: "Albert Camus",
    },
  },
  {
    content: {
      type: "title",
      title: "Livro ",
      subtitle: "Uma colecao de momentos preciosos",
    },
  },
  {
    content: {
      type: "cover",
      title: "Livro Legal",
    },
  },
];
// B7A037

function PAGE_CONTENT({ data }: { data: (typeof DATA_CONTENT)[number] }) {
  console.log("tipão", data.content.type);

  switch (data.content.type) {
    case "title":
      return (
        <div className="flex flex-col items-center justify-center h-full gap-4 md:gap-6 text-center">
          <div className="w-1/4 h-px bg-amber-200/80" />

          <div className="w-12 md:w-16 h-px bg-primary/30" />
          <h1
            className="text-2xl font-semibold"
            style={{ fontFamily: "Georgia" }}
          >
            {data.content.title}
          </h1>
          <p className="text-md italic">{data.content.subtitle}</p>
          <div className="w-12 md:w-16 h-px bg-primary/30" />

          <div className="w-1/4 h-px bg-amber-200/70" />

          <svg
            className="w-24 h-16 text-gray-200"
            viewBox="0 0 100 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M10 15 Q 25 5, 50 15 T 90 15"
              transform="rotate(22 50 15)"
            />
            <path
              d="M10 15 Q 25 25, 50 15 T 90 15"
              transform="rotate(22 50 15)"
            />
            <path
              d="M10 15 Q 25 5, 50 15 T 90 15"
              transform="rotate(-22 50 15)"
            />
            <path
              d="M10 15 Q 25 25, 50 15 T 90 15"
              transform="rotate(-22 50 15)"
            />
            <circle cx="50" cy="15" r="3" fill="currentColor" />
          </svg>
        </div>
      );
    case "quote":
      return (
        <div className="flex flex-col items-center justify-center h-full gap-2 text-center px-1">
          <span className="text-4xl text-primary/20 font-serif leading-none">
            {'"'}
          </span>
          <p className="text-lg italic text-gray-200/80">
            {data.content.quote}
          </p>
          <span className="text-muted-foreground">
            {"— "}
            {data.content.author}
          </span>
        </div>
      );
    case "image":
      return <div className="bg-white h-full w-full" />;
  }
}

interface OpenBookProps {
  coverRef: RefObject<HTMLDivElement | null>;
  pageRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}
export function OpenBook({ coverRef, pageRefs }: OpenBookProps) {
  const NUM_PAGES = DATA_CONTENT.length;

  return (
    <div
      className="relative mx-auto"
      // colocar perspective?
      style={{
        width: "min(85vw, 380px)",
        height: "min(60vh, 500px)",
      }}
    >
      <div className="relative w-full h-full preserve-3d">
        {/* colocar preserve-3D e relative? */}

        <div
          className="absolute inset-0 rounded-md"
          style={{
            background:
              "linear-gradient(135deg, #6b3a2a 0%, #5a3020 50%, #4a2518 100%)",
            boxShadow: "4px 4px 20px rgba(0,0,0,0.4)",
          }}
        />
        {/* <div className="absolute inset-0 rounded-sm" /> */}

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
            pageIndex={1}
            frontContent={<PAGE_CONTENT data={page} />}
            // backContent={<PAGE_CONTENT data={page.back} />}
            zIndex={NUM_PAGES - i}
            pageRefs={pageRefs}
          />
        ))}

        <div
          className="absolute inset-0 backface-hidden"
          style={{
            background:
              "linear-gradient(135deg, #8b4a30 0%, #6b3a2a 50%, #5a2e20 100%)",
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
  );
}
