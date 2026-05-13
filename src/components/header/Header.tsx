"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dispatchToast } from "@/components/ui/ToastHub";
import FlipText from "@/components/ui/FlipText";

const navItems = [
  { label: "Gyms", href: "#facilities" },
  { label: "Classes", href: "#classes" },
  { label: "Personal Training", href: "#about" },
  { label: "Memberships", href: "#memberships" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const lastScrollY = useRef(0);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const movingDown = currentY > lastScrollY.current;
      const passedThreshold = currentY > 80;

      setIsCompact(currentY > 24);
      setIsVisible(!movingDown || !passedThreshold);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", ...navItems.map((item) => item.href.replace("#", ""))];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sectionElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (intersecting[0]?.target.id) {
          setActiveSection(intersecting[0].target.id);
        }
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          y: isVisible ? 0 : -90,
          scale: isCompact ? 0.97 : 1,
          opacity: isVisible ? 1 : 0.92,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
      >
        <nav
          className={`glass-header flex items-center justify-between px-6 md:px-8 relative z-0 transition-all duration-300 ${
            isCompact ? "py-1.5 md:py-2" : "py-2 md:py-3"
          }`}
        >
          {/* Logo/Icon */}
          <a
            href="#hero"
            aria-label="Go to top section"
            className="text-gymYellow rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
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
          </a>

          {/* Nav Links (desktop) */}
          <ul className="hidden lg:flex gap-8 text-white font-montserrat font-semibold md:text-lg text-sm tracking-widest uppercase relative">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`relative px-2 py-1 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                    activeSection === item.href.replace("#", "")
                      ? "text-gymYellow"
                      : "hover:text-gymYellow"
                  }`}
                >
                  {activeSection === item.href.replace("#", "") && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-full bg-gymYellow/10 border border-gymYellow/40 -z-10"
                      transition={{ type: "spring", stiffness: 280, damping: 28 }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right-side actions: Join button + mobile menu toggle */}
          <div className="flex items-center gap-4">
            {/* Join Now Button */}
            <motion.a
              href="#join-now"
              onClick={() => dispatchToast("Jumping to Join Now.")}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              className="relative animate-gradient-text font-montserrat font-bold text-base md:text-lg uppercase tracking-tighter cursor-pointer transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-linear-to-r after:from-yellow-300 after:via-gymYellow after:to-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Join Now
            </motion.a>

            {/* Hamburger / Close (mobile only) */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen(prev => !prev)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/70 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-2xl flex items-center justify-center lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          >
            <motion.nav
              id="mobile-navigation"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="glass-card w-[88%] max-w-sm rounded-2xl py-8 px-8 flex flex-col items-center gap-6"
              onClick={(event) => event.stopPropagation()}
            >
              <ul className="flex flex-col items-center gap-4 text-white font-montserrat font-semibold text-lg tracking-[0.25em] uppercase">
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    className="text-center"
                  >
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="cursor-pointer hover:text-gymYellow transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={closeMenu}
                className="group mt-4 text-sm text-white/70 hover:text-white font-montserrat tracking-widest uppercase rounded-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <FlipText text="Close" />
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;