"use client";

// vai retornar uma div pra ser as costas do livro, nessa div vai ter titulo, decoracao superior e inferior

type BookProps = {
  title: string;
  color: string;
  height: number;
  width: number;
  isMemoryBook?: boolean;
  //   memoryBookScale,
  //   memoryBookY,
  //   memoryBookX,
  //   memoryBookRotate,
  //   memoryBookOpacity,
};

export function Book({
  title,
  color,
  height,
  width,
  isMemoryBook = false,
}: BookProps) {
  return (
    <div>
      <div
        className="flex flex-col justify-between py-2 shadow-[2px_4px_12px_rgba(0,0,0,0.5),inset_2px_0_4px_rgba(255,255,255,0.15),inset_-2px_0_4px_rgba(0,0,0,0.3)] rounded-xs"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${color}dd 50%, ${color}bb 100%)`,
          height: height,
          width: width,
        }}
      >
        <div className="flex flex-col gap-1 items-center">
          <div className="w-3/4 bg-[#CCA541]/80 h-px" />
          <div className="w-1/2 bg-[#CCA541]/80 h-px" />
        </div>

        <div
          className="flex items-center justify-center"
          style={{
            rotate: "-90deg",
          }}
        >
          <span className="font-serif tracking-wider font-semibold text-[15px] text-[#dedede]">
            {title}
          </span>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <div className="w-1/2 bg-[#CCA541]/80 h-px" />
          <div className="w-3/4 bg-[#CCA541]/80 h-px" />
        </div>
      </div>
    </div>
  );
}
