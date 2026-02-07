"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Gyms", "Classes", "Personal Training", "Memberships"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.header
      initial={false}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
      >
        <nav className="glass-header flex items-center justify-between px-6 md:px-8 py-2 md:py-3 relative z-0">
          {/* Logo/Icon */}
          <div className="text-gymYellow">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_162_8)">
                <rect x="10.6667" y="30.6667" width="26.6667" height="4" rx="2" fill="#F5D73D"/>
                <rect x="13.3333" y="24" width="21.3333" height="4" rx="2" fill="#F5D73D"/>
                <rect x="16" y="17.3333" width="16" height="4" rx="2" fill="#F5D73D"/>
                <rect x="18.6667" y="10.6667" width="10.6667" height="4" rx="2" fill="#F5D73D"/>
              </g>
              <defs>
                <clipPath id="clip0_162_8">
                  <rect width="48" height="48" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Nav Links (desktop) */}
          <ul className="hidden lg:flex gap-8 text-white font-montserrat font-semibold md:text-lg text-sm tracking-widest uppercase">
            {navItems.map((item) => (
              <li key={item} className="hover:text-gymYellow transition-colors cursor-pointer">
                {item}
              </li>
            ))}
          </ul>

          {/* Right-side actions: Join button + mobile menu toggle */}
          <div className="flex items-center gap-4">
            {/* Join Now Button */}
            <button className="relative animate-gradient-text font-montserrat font-bold text-base md:text-lg uppercase tracking-tighter cursor-pointer transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-yellow-300 after:via-gymYellow after:to-yellow-400 after:transition-all after:duration-300 hover:after:w-full">
              Join Now
            </button>

            {/* Hamburger / Close (mobile only) */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsMenuOpen(prev => !prev)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/70 transition-colors"
            >
              <span className="sr-only">
                {isMenuOpen ? "Close navigation" : "Open navigation"}
              </span>
              <div className="relative w-6 h-6">
                {/* Top bar */}
                <motion.span
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-6 bg-white rounded-full origin-center"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 0 : -5,   // more space when closed
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                />
                {/* Middle bar */}
                <motion.span
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-6 bg-white rounded-full origin-center"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.15 }}
                />
                {/* Bottom bar */}
                <motion.span
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-6 bg-white rounded-full origin-center"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? 0 : 5,    // more space when closed
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile fullscreen nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-2xl flex items-center justify-center lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.nav
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="w-[80%] max-w-sm py-8 px-8 flex flex-col items-center gap-6"
            >
              <ul className="flex flex-col items-center gap-4 text-white font-montserrat font-semibold text-lg tracking-[0.25em] uppercase">
                {navItems.map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-gymYellow transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 text-sm text-white/70 hover:text-white font-montserrat tracking-widest uppercase"
              >
                Close
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;