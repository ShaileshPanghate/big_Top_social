"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function ScrollStepper() {
  const steps = [
    {
      title: "1: Discovery & Initial Consultation",
      icon: "/images/interview-svgrepo-com.svg",
      description:
        "The discovery phase involves understanding the client’s business, goals, audience, and challenges through meetings, analyzing current marketing efforts, and defining objectives. It concludes with detailed discovery notes for strategic planning.",
    },
    {
      title: "2: Proposal & Agreement",
      icon: "/images/agreement-svgrepo-com.svg",
      description:
        "In this stage, we formalize the project by creating a detailed proposal outlining services, timelines, deliverables, and pricing, followed by signing a professional agreement to confirm terms and responsibilities.",
    },
    {
      title: "3: Kickoff Meeting",
      icon: "/images/meeting-4-svgrepo-com.svg",
      description:
        "The kickoff meeting aligns your team and the client on next steps, introduces key members, reviews goals, timelines, tools, and KPIs, and shares a project tracker with a meeting summary.",
    },
    {
      title: "4: Research & Strategy Development",
      icon: "/images/research-svgrepo-com.svg",
      description:
        "In this stage, we develop a strong marketing strategy by analyzing audiences and competitors, auditing current performance, defining target personas and funnels, and creating a detailed 3–6 month marketing roadmap.",
    },
    {
      title: "5: Asset Creation & Launch",
      icon: "/images/rocket-2-svgrepo-com.svg",
      description:
        "In the asset creation phase, we design creatives, write compelling content, and finalize materials with client approval. Once ready, we launch campaigns, implement tracking, test ads, and deliver live performance dashboards.",
    },
    {
      title: "6: Reporting",
      icon: "/images/business-information-reporting-svgrepo-com.svg",
      description:
        "We provide regular performance reports, monthly reviews, and continuous optimization to enhance ROI. We celebrate client successes, refine strategies, and offer additional services to build lasting partnerships and sustained business growth.",
    }

  ];

  const [activeStep, setActiveStep] = useState(0);
  const contentRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveStep(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    contentRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-white py-20 px-6 flex flex-col md:flex-row justify-center  max-w-7xl mx-auto gap-12">
      {/* LEFT SIDE — FIXED STEPPER */}
      <div className="md:w-1/3 relative ">
        
        <div className="sticky top-32 flex flex-col items-start">
          <h1 className="text-center font-medium text-4xl  mb-12">
          HOW WE WILL ONBOARD YOU?
        </h1>
          <div className="absolute  h-full bg-gray-200 rounded-full" />
          {steps.map((step, i) => (
            <div key={i} className="flex items-center relative mb-12">
              {/* Dot */}
              <div
                className={`w-6 h-6 rounded-full z-10 transition-all duration-300 ${i === activeStep
                  ? "bg-gradient-to-b from-blue-500 to-violet-600 scale-125 shadow-md"
                  : "bg-gray-300"
                  }`}
              ></div>
              {/* Label */}
              <div
                className={`ml-6 text-lg font-medium transition-colors duration-300 ${i === activeStep ? "text-blue-600" : "text-gray-400"
                  }`}
              >
                {step.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE — SCROLLABLE CONTENT */}
      <div className="md:w-1/3  flex flex-col justify-center items-center ">
        {steps.map((step, i) => (
          <div
            key={i}
            data-index={i}
            ref={(el) => (contentRefs.current[i] = el)}
            className="min-h-[85vh] flex flex-col justify-center items-center scroll-mt-24 "
          >
            <div className="w-64 h-64 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-violet-500 border-12 border-gray-300">
              <Image
                src={step.icon}
                alt={step.title}
                width={110}
                height={110}
                className="object-contain filter brightness-0 invert opacity-90"
              />
            </div>
            <p className="mt-4 text-gray-500 text-lg font-medium justify-center text-center leading-relaxed max-w-xl">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
