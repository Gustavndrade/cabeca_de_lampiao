import { MutableRefObject, RefObject } from "react";
import { BookPage } from "./book-page";

const DATA_CONTENT = [
  {
    front: {
      type: "chapter",
      chapter: "Capitulo IV",
      title: "Inverno",
      text: "A lareira crepitava baixinho, contando suas proprias historias de fogo e cinza. O cobertor de la feito a mao envolvia nao so o corpo, mas tambem a sensacao de pertencer a algo maior. Cada noite de inverno era um abraco do tempo.",
    },
    back: {
      type: "ending",
      text: "E assim, pagina apos pagina, as memorias se entrelacam como fios de um tecido antigo. Cada uma e unica, mas juntas formam a colcha que nos aquece nos dias mais frios da alma.",
    },
  },
  {
    front: {
      type: "title",
      title: "Livro de Memorias",
      subtitle: "Uma colecao de momentos preciosos",
    },
    back: {
      type: "quote",
      quote:
        "As melhores memorias sao feitas quando a gente nem percebe que esta criando uma.",
      author: "Desconhecido",
    },
  },
];
// B7A037

function PAGE_CONTENT({
  data,
}: {
  data:
    | (typeof DATA_CONTENT)[number]["back"]
    | (typeof DATA_CONTENT)[number]["front"];
}) {
  switch (data.type) {
    case "title":
      return (
        <div className="flex flex-col items-center justify-center h-full gap-4 md:gap-6 text-center">
          <div className="w-12 md:w-16 h-px bg-primary/30" />
          <h2
            className="text-xl md:text-3xl font-serif font-bold text-foreground tracking-wide"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {data.title}
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground italic leading-relaxed">
            {data.subtitle}
          </p>
          <div className="w-12 md:w-16 h-px bg-primary/30" />
          {/* Decorative flourish */}
          {/* <svg
            className="w-16 md:w-24 h-6 md:h-8 text-primary/20"
            viewBox="0 0 100 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M10 15 Q 25 5, 50 15 T 90 15" />
            <path d="M10 15 Q 25 25, 50 15 T 90 15" />
            <circle cx="50" cy="15" r="2" fill="currentColor" />
          </svg> */}
        </div>
      );
    // case "quote":
    //     return();
    // case "chapter":
    //     return();
    // case "text":
    //     return();
    // case "chapter":
    //     return();
    // case "ending":
    //     return();
  }
}

interface OpenBookProps {
  coverRef: RefObject<HTMLDivElement | null>;
  pageRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}
export function OpenBook({ coverRef, pageRefs }: OpenBookProps) {
  const NUM_PAGES = DATA_CONTENT.length;

  return (
    <div>
      {DATA_CONTENT.map((page, i) => (
        <BookPage
          pageIndex={1}
          frontContent={<PAGE_CONTENT data={page.front} />}
          backContent={<PAGE_CONTENT data={page.back} />}
          zIndex={NUM_PAGES - i}
          pageRefs={pageRefs}
        />
      ))}
    </div>
  );
}
