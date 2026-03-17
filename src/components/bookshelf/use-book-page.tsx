import { RefObject } from "react";

export const DATA_CONTENT = [
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

export function PAGE_CONTENT({ data }: { data: (typeof DATA_CONTENT[number]) }) {
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
          <div className="w-12 md:w-16 h-px" />

          <div className="w-1/4 h-px bg-amber-200/70" />

          <svg
            className="w-24 h-16"
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

// switch (data.content.type) {
//

// }]

