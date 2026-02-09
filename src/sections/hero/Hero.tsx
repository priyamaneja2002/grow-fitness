"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Video with Dark Overlay */}
      <video
        className="absolute inset-0 h-full w-full object-cover brightness-50 z-0"
        src="/hero-bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 text-center px-4 max-w-5xl">
        {/* Main Heading */}
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="font-teko font-bold text-7xl md:text-8xl lg:text-9xl text-gymYellow uppercase leading-[0.9] mb-6"
          >
            50% Off On Your <br /> First 6 Months
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="font-montserrat text-white text-lg md:text-3xl font-semibold mb-12 tracking-wide"
        >
          Elite results start here - Claim your spot!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-64 cursor-pointer py-4 bg-white text-black font-montserrat font-bold text-2xl rounded-full uppercase transform-gpu"
          >
            Free Trial
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-64 cursor-pointer py-4 bg-gymYellow text-black font-montserrat font-bold text-2xl rounded-full uppercase transform-gpu shadow-[0_0_20px_rgba(242,214,75,0.4)]"
          >
            Join Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;