import { RefObject } from "react";

export function ScrollIndicator({ scrollRef }: {scrollRef: RefObject<HTMLDivElement  | null> }) {
  return (
    <div ref={scrollRef} className="flex flex-col items-center gap-3 bottom-20 absolute">
      <div className="flex items-center justify-center border border-gray-600 h-10 w-8 rounded-2xl">
        <div className="w-1 h-2 bg-gray-400 rounded-2xl" />
      </div>
      <span className="font-sans text-black">Arraste para pegar o livro</span>
    </div>
  );
}
