"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const facilities = [
  { title: 'BEST EQUIPMENT', img: '/facilities-equipment.png', span: 'col-span-1' },
  { title: 'SPORTS FACILITIES', img: '/facilities-pool.png', span: 'col-span-1' },
  { title: 'RECOVERY ZONES', img: '/facilities-sauna.png', span: 'col-span-1' },
];

export const FacilitiesSection = () => {
  return (
    <section className="bg-black py-20 px-4 font-montserrat">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]"
      >
        {facilities.map((f) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative group overflow-hidden border border-zinc-800 rounded-lg"
          >
            <Image 
              src={f.img} 
              alt={f.title} 
              fill
              className="object-cover transition duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <h3 className="absolute bottom-2 right-4 text-2xl md:text-4xl font-black text-right text-gymYellow leading-tight font-teko z-10">
              {f.title.split(' ').map(word => <span key={word} className="block">{word}</span>)}
            </h3>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-10"
      >
        <button className="px-8 py-3 bg-gymYellow text-black font-bold rounded-full uppercase tracking-tighter font-montserrat hover:bg-gymYellow/90 transition">
          <span className="inline-flex items-center gap-2">
            All Facilities
            <svg
              aria-hidden="true"
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8H22M22 8L16 3M22 8L16 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </motion.div>
    </section>
  );
};