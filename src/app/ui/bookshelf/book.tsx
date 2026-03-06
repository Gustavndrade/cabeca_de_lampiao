"use client"

// interface BookProps {
//   title: string
//   author: string
//   color: string
//   accentColor: string
//   height: number
//   width: number
//   isMemoryBook?: boolean
//   memoryBookScale?: MotionValue<number>
//   memoryBookY?: MotionValue<number>
//   memoryBookX?: MotionValue<number>
//   memoryBookRotate?: MotionValue<number>
//   memoryBookOpacity?: MotionValue<number>
// }

type BookProps = {
  title: string,
  author: string,
  color: string,
  accentColor: string,
  height: number,
  width: number,
  isMemoryBook?: boolean,
//   memoryBookScale,
//   memoryBookY,
//   memoryBookX,
//   memoryBookRotate,
//   memoryBookOpacity,
}

export function Book({
  title,
  author,
  color,
  accentColor,
  height,
  width,
  isMemoryBook = false,
}: BookProps) {

    
  const bookContent = (
    <div
      className="relative preserve-3d cursor-pointer group"
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <div
        className="absolute inset-0 rounded-sm leather-texture"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${color}dd 50%, ${color}bb 100%)`,
          boxShadow: `
            inset -2px 0 4px rgba(0,0,0,0.2),
            inset 2px 0 4px rgba(255,255,255,0.1),
            2px 4px 12px rgba(0,0,0,0.3)
          `,
        }}
      >
        <div className="absolute inset-x-0 top-3 flex flex-col items-center gap-1">
          <div
            className="h-px w-3/4"
            style={{ backgroundColor: accentColor }}
          />
          <div
            className="h-px w-1/2 opacity-60"
            style={{ backgroundColor: accentColor }}
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-1">
          <span
            className="text-[9px] md:text-[10px] font-serif font-bold text-center leading-tight tracking-wide"
            style={{
              color: accentColor,
              writingMode: height > 160 ? "vertical-rl" : "horizontal-tb",
              textOrientation: "mixed",
              transform: height > 160 ? "rotate(180deg)" : "none",
            }}
          >
            {title}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-3 flex flex-col items-center gap-1">
          <div
            className="h-px w-1/2 opacity-60"
            style={{ backgroundColor: accentColor }}
          />
          <div
            className="h-px w-3/4"
            style={{ backgroundColor: accentColor }}
          />
        </div>

        <div className="book-spine absolute inset-0 rounded-sm pointer-events-none" />
      </div>

      {/* <div
        className="absolute -top-1 inset-x-0.5 h-1 rounded-t-sm"
        style={{
          background: "linear-gradient(180deg, #e8d8c0, #d4c4a8)",
          transform: "translateZ(2px)",
        }}
      />

      {isMemoryBook && (
        <div
          className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse, ${accentColor}30 0%, transparent 70%)`,
          }}
        />
      )} */}
    </div>
  )

//   if (isMemoryBook && memoryBookScale && memoryBookY && memoryBookX && memoryBookRotate && memoryBookOpacity) {
//     return (
//       <motion.div
//         className="relative z-10"
//         style={{
//           scale: memoryBookScale,
//           y: memoryBookY,
//           x: memoryBookX,
//           rotateZ: memoryBookRotate,
//           opacity: memoryBookOpacity,
//         }}
//       >
//         {bookContent}
//       </motion.div>
//     )
//   }

//   return (
//     <motion.div
//       whileHover={{ y: -8, transition: { duration: 0.3 } }}
//       className="relative"
//     >
//       {bookContent}
//     </motion.div>
//   )

return (
    <div>
        {bookContent}
    </div>
)
}