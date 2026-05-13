"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Members", value: 10000, suffix: "+" },
  { label: "Satisfaction", value: 95, suffix: "%" },
  { label: "Weekly Classes", value: 120, suffix: "+" },
];

const StatRing = ({ label, value, suffix }: { label: string; value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    const start = performance.now();
    const duration = 1400;
    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [hasStarted, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-center"
    >
      <div className="relative w-[110px] h-[110px]">
        <svg width="110" height="110" className="-rotate-90">
          <circle cx="55" cy="55" r="45" stroke="rgba(255,255,255,0.2)" strokeWidth="8" fill="none" />
          <circle
            cx="55"
            cy="55"
            r="45"
            stroke="#F5D73D"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-base md:text-lg font-bold text-gymYellow leading-none">
            {count}
            {suffix}
          </p>
        </div>
      </div>
      <p className="mt-2 text-white/90 font-semibold uppercase tracking-wide text-xs">{label}</p>
    </motion.div>
  );
};

export const AboutSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const updateSlider = (clientX: number, bounds: DOMRect) => {
    const rawPosition = ((clientX - bounds.left) / bounds.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, rawPosition)));
  };

  return (
    <section id="about" className="text-white py-16 px-6 font-montserrat">
      <motion.div 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gymYellow mb-4 uppercase font-teko"
        >
          About Grow Fitness
        </motion.h2>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6 text-lg md:text-2xl lg:text-3xl font-medium leading-normal text-white font-montserrat"
        >
          <motion.p variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
            Grow is built for the Delhi community that works hard and plays harder. 
            We&apos;ve moved away from the solitary &quot;headphones-on&quot; culture to create 
            a space that feels like a collective.
          </motion.p>
          <motion.p variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
            Whether you&apos;re training in our specialized high-performance zones or 
            cooling down in our social spaces, the atmosphere is electric, 
            inclusive, and genuinely enjoyable.
          </motion.p>
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          {stats.map((stat) => (
            <StatRing key={stat.label} label={stat.label} value={stat.value} suffix={stat.suffix} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-white/70">Transformation Preview</p>
          <div
            className="relative mx-auto max-w-3xl aspect-video overflow-hidden rounded-xl border border-white/15"
            onMouseMove={(event) => updateSlider(event.clientX, event.currentTarget.getBoundingClientRect())}
            onTouchMove={(event) => {
              const touch = event.touches[0];
              if (!touch) {
                return;
              }
              updateSlider(touch.clientX, event.currentTarget.getBoundingClientRect());
            }}
          >
            <Image
              src="/JoinNow03.png"
              alt="Before transformation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
              <Image
                src="/JoinNow04.png"
                alt="After transformation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
            <motion.div
              className="absolute inset-y-0 w-0.5 bg-gymYellow"
              style={{ left: `${sliderPosition}%` }}
              animate={{ scaleY: [1, 1.03, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gymYellow border border-black shadow-[0_0_14px_rgba(245,215,61,0.7)]" />
            </motion.div>
            <div className="absolute left-3 top-3 rounded-md bg-black/60 px-2 py-1 text-xs uppercase tracking-wide">Before</div>
            <div className="absolute right-3 top-3 rounded-md bg-black/60 px-2 py-1 text-xs uppercase tracking-wide">After</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};