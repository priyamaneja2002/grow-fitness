"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type ToastEventDetail = {
  message: string;
};

export const TOAST_EVENT = "grow:toast";

export const dispatchToast = (message: string) => {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new CustomEvent<ToastEventDetail>(TOAST_EVENT, { detail: { message } }));
};

const ToastHub = () => {
  const [message, setMessage] = useState("");
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onToast = (event: Event) => {
      const customEvent = event as CustomEvent<ToastEventDetail>;
      const nextMessage = customEvent.detail?.message;
      if (!nextMessage) {
        return;
      }

      setMessage(nextMessage);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setMessage("");
      }, 2600);
    };

    window.addEventListener(TOAST_EVENT, onToast);
    return () => {
      window.removeEventListener(TOAST_EVENT, onToast);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          key={message}
          initial={{ opacity: 0, y: 24, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ type: "spring", stiffness: 280, damping: 24 }}
          className="fixed bottom-6 right-6 z-80 rounded-xl border border-gymYellow/40 bg-black/80 backdrop-blur-md px-4 py-3 text-sm font-semibold text-gymYellow shadow-[0_8px_28px_rgba(0,0,0,0.35)]"
          role="status"
          aria-live="polite"
        >
          {message}
          <motion.span
            className="absolute left-0 bottom-0 h-[2px] rounded-b-xl bg-gymYellow/80"
            initial={{ width: "100%" }}
            animate={{ width: 0 }}
            transition={{ duration: 2.4, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToastHub;
