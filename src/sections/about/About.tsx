"use client";

import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section className="text-white py-16 px-6 font-montserrat">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gymYellow mb-4 uppercase font-teko">
          About Grow Fitness
        </h2>
        <div className="space-y-6 text-lg md:text-2xl lg:text-3xl font-medium leading-normal text-white font-montserrat">
          <p>
            Grow is built for the Delhi community that works hard and plays harder. 
            We&apos;ve moved away from the solitary &quot;headphones-on&quot; culture to create 
            a space that feels like a collective.
          </p>
          <p>
            Whether you&apos;re training in our specialized high-performance zones or 
            cooling down in our social spaces, the atmosphere is electric, 
            inclusive, and genuinely enjoyable.
          </p>
        </div>
      </motion.div>
    </section>
  );
};