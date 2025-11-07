// HoverExpand_Horizontal.jsx
// Drop this file in your Next.js project (e.g. src/components or app/components)
// Usage: import HoverExpand_Horizontal from '@/components/HoverExpand_Horizontal';

"use client";

import { useState } from "react";
import Image from "next/image";

export default function HoverExpand_Horizontal({ images, className = "", defaultActive = null }) {
  const [active, setActive] = useState(defaultActive);

  if (!images || images.length === 0) return null;

  return (
    <div
      className={`w-full flex gap-4 items-stretch overflow-hidden ${className}`}
      role="list"
    >
      {images.map((img, i) => {
        const isActive = active === i;
        return (
          <div
            key={i}
            role="listitem"
            tabIndex={0}
            aria-label={img.alt || `image-${i}`}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActive((prev) => (prev === i ? null : i));
              }
            }}
            className={`relative rounded-lg overflow-hidden transition-all duration-500 ease-in-out cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isActive ? "flex-[2.2]" : "flex-[1]"
              } min-h-[200px]`}
            style={{ minWidth: 0 }}
          >
            <div className="relative w-full h-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:640px) 40vw, 100vw"
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
            </div>


            {/* Gradient overlay from bottom to top when active */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-blue-500 via-blue-300/80 to-transparent flex items-end p-4 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"
                }`}
              aria-hidden={!isActive}
            >
              <div className="text-white">
                <div className="text-3xl font-semibold">{img.alt}</div>
                {img.caption ? (
                  <div className="text-2xl mt-1 opacity-90">{img.caption}</div>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* Notes
- This is a client component (uses useState and DOM events).
- It expands the hovered (or focused) item horizontally by changing flex-grow.
- On small screens the layout remains horizontal but items will wrap or shrink. If you want vertical stacking, wrap it with responsive classes like `sm:flex-row flex-col`.
- If you load external images, configure next.config.js images.remotePatterns or domains.
- Adjust flex-[2.2] to control expansion amount.
*/