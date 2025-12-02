"use client";
import Image from "next/image";

export default function SMMSection() {
  const items = [
    {
      icon: "/images/user-community-fill.svg",
      title: "Building a great community",
    },
    {
      icon: "/images/discuss-fill.svg",
      title: "Building conversations",
    },
    {
      icon: "/images/sparkling-2-fill.svg",
      title: "Creating a brand identity",
    },
    {
      icon: "/images/base-station-fill.svg",
      title: "Raising brand awareness",
    },
  ];

  return (
    <section className="py-16 text-center bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          SMM isn’t a trend that <span className="italic">‘needs’</span> to be
          followed by all. Know why you are getting on this path and what is
          your purpose. You can be in it for:
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              {/* Gradient icon box */}
              <div className="w-18 h-18 flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-violet-500 shadow-md">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="object-contain filter brightness-0 invert opacity-90"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-gray-700 font-medium text-lg">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
