"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Image data configuration
const topRowImages = [
  { src: "/JoinNow01.png", alt: "Yoga" },
  { src: "/JoinNow02.png", alt: "Battle Ropes" },
];

const bottomRowImages = [
  { src: "/JoinNow03.png", alt: "Cardio", aspect: "aspect-[3/4]" },
  { src: "/JoinNow04.png", alt: "Group Class", aspect: "aspect-[4/3]", offset: true },
  { src: "/JoinNow05.png", alt: "Badminton", aspect: "aspect-[3/4]" },
];

const JoinMovementSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>(".jt-animate", sectionRef.current);

      elements.forEach((element) => {
        gsap.fromTo(
          element,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 35%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="join-the-movement" className="bg-black py-24 px-6 font-montserrat min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative">
        
        {/* TOP ROW: Two Images */}
        <div className="grid grid-cols-2 gap-12 md:gap-40 mb-8 md:mb-12 w-full max-w-5xl">
          {/* Top Left Image */}
          <div className="flex justify-center jt-animate">
            <div className="relative w-64 h-80 rounded-lg overflow-hidden">
              <Image 
                src={topRowImages[0].src} 
                alt={topRowImages[0].alt} 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 256px"
              />
            </div>
          </div>

          {/* Top Right Image */}
          <div className="flex justify-center jt-animate">
            <div className="relative w-64 h-80 rounded-lg overflow-hidden">
              <Image 
                src={topRowImages[1].src} 
                alt={topRowImages[1].alt} 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 256px"
              />
            </div>
          </div>
        </div>

        {/* CENTER: The Text */}
        <div className="text-center mb-8 md:mb-12 z-10 jt-animate">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gymYellow italic uppercase tracking-tighter font-teko">
            Join the movement. Access it all!
          </h2>
        </div>

        {/* BOTTOM ROW: Three Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 items-end justify-center w-full">
          {/* Bottom Left Image */}
          <div className="jt-animate mx-auto max-md:hidden">
            <div className={`relative ${bottomRowImages[0].aspect} rounded-lg overflow-hidden w-64 h-auto`}>
              <Image 
                src={bottomRowImages[0].src} 
                alt={bottomRowImages[0].alt} 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Bottom Center Image */}
          <div className={`jt-animate mx-auto max-lg:hidden ${bottomRowImages[1].offset ? "md:mb-18" : ""}`}>
            <div className={`relative ${bottomRowImages[1].aspect} rounded-lg overflow-hidden w-80 h-auto`}>
              <Image 
                src={bottomRowImages[1].src} 
                alt={bottomRowImages[1].alt} 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Bottom Right Image */}
          <div className="jt-animate mx-auto">
            <div className={`relative ${bottomRowImages[2].aspect} rounded-lg overflow-hidden w-64 h-auto`}>
              <Image 
                src={bottomRowImages[2].src} 
                alt={bottomRowImages[2].alt} 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JoinMovementSection;
