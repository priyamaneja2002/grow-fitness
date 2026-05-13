"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ProjectNoticeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href")?.trim() ?? "";
      if (!href) {
        event.preventDefault();
        setIsOpen(true);
        return;
      }

      // Allow in-page section navigation for the landing page.
      if (href.startsWith("#")) {
        const sectionId = href.replace("#", "");
        if (sectionId && document.getElementById(sectionId)) {
          return;
        }

        event.preventDefault();
        setIsOpen(true);
        return;
      }

      // Intercept other links and show the project notice.
      event.preventDefault();
      setIsOpen(true);
    };

    document.addEventListener("click", onAnchorClick, true);
    return () => document.removeEventListener("click", onAnchorClick, true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-90 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-lg rounded-2xl border border-white/20 bg-black/90 p-6 md:p-7 text-white shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-notice-title"
          >
            <h3 id="project-notice-title" className="text-2xl md:text-3xl font-teko text-gymYellow uppercase tracking-wide">
              Personal Project Notice
            </h3>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-white/90 font-montserrat">
              This is a personal project built to showcase my UI/UX design thinking and frontend engineering skills.
              The links are intentionally non-functional, and this landing page is the only page in the project.
            </p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 rounded-full bg-gymYellow text-black font-bold uppercase tracking-wide hover:bg-gymYellow/90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Got it
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectNoticeModal;
