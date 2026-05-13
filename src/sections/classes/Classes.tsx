"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { ClassesCarouselProps } from "@/sections/classes/ClassesCarousel";

const classSlides = [
  { title: "Strength", image: "/classes-strength.png" },
  { title: "Holistic", image: "/classes-holistic.png" },
  { title: "Fight", image: "/classes-fight.png" },
  { title: "Rhythm", image: "/classes-rhythm.png" },
  { title: "Sweat", image: "/classes-sweat.png" },
];

const ClassesCarousel = dynamic<ClassesCarouselProps>(
  () => import("@/sections/classes/ClassesCarousel").then((mod) => mod.default),
  { ssr: false }
);

const ClassesSection = () => {
  return (
    <section id="classes" className="bg-black py-20 px-6 font-montserrat">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gymYellow uppercase font-teko mb-4">
            Classes
          </h2>
          <p className="text-white text-lg md:text-2xl font-semibold leading-relaxed">
            Discover a variety of classes at GROW FITNESS, spanning 5 different categories.
            <span className="block uppercase mt-1">You want it, we&apos;ve got it.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <ClassesCarousel slides={classSlides} />
        </motion.div>
      </div>
    </section>
  );
};

export default ClassesSection;
