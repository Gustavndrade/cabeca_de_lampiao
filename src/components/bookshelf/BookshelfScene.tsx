"use client";

import { Book } from "./book";
import { ScrollIndicator } from "./scroll-indicator";
import { OpenBook } from "./open-book";
import { useRef } from "react";
{
  /*

  return (
  <div> relative
    <div /* stickyRef >
      {/* Sticky viewport }
  
      <div /* === Ambient particles warmth ===  />
  
      <div>{/* === PHASE 1: Bookshelf === }</div>
  
      <div>{/* === PHASE 2: Open Book === }</div>
    </div>
  </div>
  )
    
    */
}

{
  /* <div>
    estante com livros
            |
            V

    título
    estante
        \fila de livros (retorna componente livro)
        \prateleira (usa componente e uma div para formar a sombra)

    indica scroll (animação)

    abrir livro e folear
            |
            V

    abrir livro (função que passa a referência da capa e páginas)
</div> */
}

export function BookshelfScene() {
  const coverRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className="relative w-full h-[800vh]">
      <div className="sticky h-screen flex flex-col justify-center items-center">
        <div className="absolute inset-x-0 top-30 flex flex-col gap-1 items-center">
          <h1
            className="text-amber-900 font-bold text-5xl"
            style={{ fontFamily: "Georgia" }}
          >
            A Estante
          </h1>
          <p className="text-[#B7A037] text-lg" style={{ fontFamily: "math" }}>
            Cada página para a Cabeça de Lampião
          </p>
        </div>
        <div>
          <Book
            title="Teste"
            color="#008000"
            height={150}
            width={28}
            isMemoryBook
          />
          <div className="bg-[#75502B] h-8 w-64 rounded-b-sm shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.3)]" />
        </div>

        {ScrollIndicator()}

        <div>
          <div></div>

          <OpenBook coverRef={coverRef} pageRefs={pageRefs} />

          {/* {ProgressIndicator()} */}
        </div>
      </div>
    </div>
  );
}
