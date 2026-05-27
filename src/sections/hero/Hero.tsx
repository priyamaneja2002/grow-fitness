"use client";
import { type ReactNode, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { dispatchToast } from "@/components/ui/ToastHub";

const HERO_BLOB_VIDEO =
  "https://zfcpieppvs4jlrzs.public.blob.vercel-storage.com/hero-bg-video.mp4";
const HERO_FALLBACK_IMAGE = "/facilities-equipment.png";

async function isBlobVideoReachable(): Promise<boolean> {
  try {
    const response = await fetch(HERO_BLOB_VIDEO, { method: "HEAD" });
    if (response.ok) {
      return true;
    }
    // Some hosts reject HEAD but still serve GET — try the video element + onError.
    if (response.status === 405) {
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

const MagneticButton = ({
  href,
  children,
  className,
  toastMessage,
}: {
  href: string;
  children: ReactNode;
  className: string;
  toastMessage: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 240, damping: 16, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 240, damping: 16, mass: 0.2 });

  return (
    <motion.a
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - (bounds.left + bounds.width / 2);
        const offsetY = event.clientY - (bounds.top + bounds.height / 2);
        x.set(offsetX * 0.2);
        y.set(offsetY * 0.2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onClick={() => dispatchToast(toastMessage)}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

const HeroBackground = ({
  useVideo,
  onVideoError,
}: {
  useVideo: boolean;
  onVideoError: () => void;
}) => (
  <div className="absolute inset-0 z-0" aria-hidden>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={HERO_FALLBACK_IMAGE}
      alt=""
      className={`absolute inset-0 h-full w-full object-cover brightness-50 ${
        useVideo ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    />
    {useVideo && (
      <video
        className="absolute inset-0 h-full w-full object-cover brightness-50"
        src={HERO_BLOB_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        onError={onVideoError}
      />
    )}
  </div>
);

const Hero = () => {
  const [useVideo, setUseVideo] = useState(false);

  useEffect(() => {
    let cancelled = false;

    isBlobVideoReachable().then((reachable) => {
      if (!cancelled && reachable) {
        setUseVideo(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      <HeroBackground useVideo={useVideo} onVideoError={() => setUseVideo(false)} />
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
          <MagneticButton
            href="#memberships"
            toastMessage="Free trial flow started."
            className="w-64 cursor-pointer py-4 bg-white text-black font-montserrat font-bold text-lg md:text-xl rounded-full uppercase transform-gpu text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Free Trial
          </MagneticButton>

          <MagneticButton
            href="#join-now"
            toastMessage="You are on the Join Now section."
            className="w-64 cursor-pointer py-4 bg-gymYellow text-black font-montserrat font-bold text-lg md:text-xl rounded-full uppercase transform-gpu shadow-[0_0_20px_rgba(242,214,75,0.4)] text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black animate-pulse-soft"
          >
            Join Now
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
