import { RefObject } from "react";

export const DATA_CONTENT = [
  {
    content: {
      type: "title",
      title: "Meury",
      subtitle: "Uma viagem na minha memória",
    },
  },
  {
    content: {
      type: "quote",
      quote: "Quem teme a vida já está a meio caminho da morte.",
      author: "A biblioteca da meia-noite",
    },
  },
  {
    content: {
      type: "image",
      content: "images/come_come_morre.jpg",
    },
  },
  {
    content: {
      type: "quote",
      quote: "Comeu a maçãzinha e morreu, minha Julieta.",
      author: "Gustavo",
    },
  },
  {
    content: {
      type: "image",
      content: "images/cumprimento.jpg",
    },
  },
  {
    content: {
      type: "quote",
      quote: "A gente de mãozinhas dadas e eu infartando.",
      author: "Gustavinho apaixonado",
    },
  },
  {
    content: {
      type: "image",
      content: "images/faltou_a_nega.jpg",
    },
  },
  {
    content: {
      type: "quote",
      quote: "Família junta desde sempre, faltou a nega. Esse Gustavinho era bem mais esperto que o que veio uns anos depois (ele já sabia com quem ia se casar)",
      author: "Gustavo",
    },
  },
  {
    content: {
      type: "image",
      content: "images/GATA_borralheira.jpg",
    },
  },
  {
    content: {
      type: "quote",
      quote: "Você é tão humilde que tava lavando as coisas pra Rafinha.",
      author: "Gustavo",
    },
  },
  {
    content: {
      type: "image",
      content: "images/linda.jpeg",
    },
  },
  {
    content: {
      type: "quote",
      quote: "Que dia maravilhoso, adorei ficar tanto tempo perto de você fazendo o que eu gosto.",
      author: "Gustavo",
    },
  },
  {
    content: {
      type: "image",
      content: "images/cunhadix.jpg",
    },
  },
  {
    content: {
      type: "quote",
      quote: "Olha o sorrisinho da Ge, tomara que vocês se deem bem de novo.",
      author: "Gustavo",
    },
  },

  {
    content: {
      type: "image",
      content: "images/falando_tudo_sem_cola.jpg",
    },
  },
  {
    content: {
      type: "quote",
      quote: "Você decorou tudoooooo.",
      author: "Gustavo",
    },
  }, {
    content: {
      type: "image",
      content: "images/eu_lendo_e_vc_arrasando.jpg",
    },
  },
  {
    content: {
      type: "quote",
      quote: "E eu esqueci tudoooooo.",
      author: "Gustavo",
    },
  }, {
    content: {
      type: "image",
      content: "images/sorrisinho_lindo.jpg",
    },
  },
  {
    content: {
      type: "quote",
      quote: "Esse brilho no sorriso não se vê em qualquer lugar, adoro seus dentinhos.",
      author: "Gustavo",
    },
  },
  {
    content: {
      type: "image",
      content: "images/cunhadix2.jpeg",
    },
  },
  {
    content: {
      type: "quote",
      quote: "Acho que vocês se deram bastante bem já.",
      author: "Gustavo",
    },
  },
  {
    content: {
      type: "image",
      content: "images/nao_repara_na_minha_careta.jpg",
    },
  },
  {
    content: {
      type: "quote",
      quote: "Aqui esse meu beiço de tucunaré arrancado do rio não ajudou, mas eu queria te fazer rir.",
      author: "Gustavo",
    },
  },

];

export function PAGE_CONTENT({ data }: { data: (typeof DATA_CONTENT[number]) }) {
  switch (data.content.type) {
    case "title":
      return (
        <div className="flex flex-col items-center justify-center h-full gap-4 md:gap-6 text-center">
          <div className="w-1/4 h-px bg-gray-800/80" />

          <div className="w-12 md:w-16 h-px bg-primary/30" />
          <h1
            className="text-2xl font-semibold text-black"
            style={{ fontFamily: "Georgia" }}
          >
            {data.content.title}
          </h1>
          <p className="text-md italic text-gray-700">{data.content.subtitle}</p>
          <div className="w-12 md:w-16 h-px" />

          <div className="w-1/4 h-px bg-gray-800/80" />

          <svg
            className="w-24 h-16"
            viewBox="0 0 100 30"
            fill="none"
            stroke="#364153"
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
            <circle cx="50" cy="15" r="3" fill="#364153" />
          </svg>
        </div>
      );
    case "quote":
      return (
        <div className="flex flex-col items-center justify-center h-full gap-2 text-center px-1">
          <span className="text-4xl text-amber-800/70 font-serif leading-none">
            {'"'}
          </span>
          <p className="text-lg italic text-gray-900">
            {data.content.quote}
          </p>
          <span className="text-black">
            {"— "}
            {data.content.author}
          </span>
        </div>
      );
    case "image":
      return (
        <div className="flex items-center justify-center h-full w-full">
          <img
            src={data.content.content}
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>
      );

  }
}