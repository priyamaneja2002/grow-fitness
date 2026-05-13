"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { type FormEvent, useMemo, useState } from "react";
import { dispatchToast } from "@/components/ui/ToastHub";
import FlipText from "@/components/ui/FlipText";

const JoinNowBanner = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [stripLoaded, setStripLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [shake, setShake] = useState(false);
  const [showValid, setShowValid] = useState(false);
  const emailValid = useMemo(() => /^\S+@\S+\.\S+$/.test(email), [email]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!emailValid) {
      setShake(true);
      window.setTimeout(() => setShake(false), 350);
      dispatchToast("Please enter a valid email.");
      return;
    }
    setShowValid(true);
    dispatchToast("You are in! We will contact you soon.");
    setEmail("");
    window.setTimeout(() => setShowValid(false), 1200);
  };

  return (
    <section id="join-now" className="font-montserrat bg-transparent">
      <div className="mx-auto">
        <div className="relative overflow-hidden  border border-white/10">
          <div className="relative h-[400px] md:h-[500px] lg:h-[580px]">
            {!heroLoaded && <div className="absolute inset-0 animate-pulse bg-white/10 z-1" />}
            <Image
              src="/hero-bg-image.png"
              alt="50% off your first 6 months"
              fill
              onLoad={() => setHeroLoaded(true)}
              className={`object-cover transition duration-700 ${heroLoaded ? "opacity-100" : "opacity-0"}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-x-0 top-[70%] -translate-y-2/3 flex px-6 md:px-10">
              <div>
                <p className="text-gymYellow font-teko uppercase font-black text-7xl md:text-[120px] lg:text-[180px] leading-none">
                  50% Off
                </p>
                <p className="text-white font-teko uppercase font-bold tracking-wide text-2xl md:text-4xl lg:text-6xl -mt-2 md:-mt-4 lg:-mt-8">
                  Your first 6 months
                </p>
              </div>
            </div>
          </div>

          {/* Button strip with image background + 30% black overlay */}
          <div className="relative h-16 md:h-20 overflow-hidden">
            {!stripLoaded && <div className="absolute inset-0 animate-pulse bg-white/10 z-1" />}
            <Image
              src="/golden-yellow-smooth-cloth.jpg"
              alt=""
              fill
              onLoad={() => setStripLoaded(true)}
              className={`object-cover scale-[10] origin-center translate-y-[-110px] max-md:translate-x-[-240px] md:translate-y-[-270px] transition duration-700 ${
                stripLoaded ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center px-4 md:px-10 justify-between gap-3">
              <motion.form
                onSubmit={onSubmit}
                animate={shake ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
                className="flex items-center gap-2 w-full max-w-lg"
              >
                <div className="relative w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email for membership callback"
                    className={`w-full rounded-full border px-4 py-2 text-sm md:text-base bg-white/90 text-black placeholder:text-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow ${
                      email && !emailValid ? "border-red-500" : "border-transparent"
                    }`}
                  />
                  {showValid && (
                    <motion.span
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600 font-bold"
                    >
                      ✓
                    </motion.span>
                  )}
                </div>
                <button
                  type="submit"
                  className="group px-4 py-2 md:px-8 lg:px-10 md:py-3 text-sm md:text-base bg-white text-black font-bold rounded-full uppercase tracking-tight hover:bg-[#f5f5f5] cursor-pointer transition whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <FlipText text="Join" />
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinNowBanner;
