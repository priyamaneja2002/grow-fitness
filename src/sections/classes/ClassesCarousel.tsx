"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { dispatchToast } from "@/components/ui/ToastHub";
import FlipText from "@/components/ui/FlipText";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type ClassSlide = {
  title: string;
  image: string;
};

export type ClassesCarouselProps = {
  slides: ClassSlide[];
};

const ClassCard = ({ slide }: { slide: ClassSlide }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="relative rounded-lg overflow-hidden border border-white/15 bg-black/40"
    >
      {!loaded && <div className="absolute inset-0 animate-pulse bg-white/10 z-10" />}
      <div className="relative aspect-4/5">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          onLoad={() => setLoaded(true)}
          className={`object-cover transition duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute bottom-2 right-4">
          <p className="text-2xl md:text-4xl font-black text-right text-gymYellow leading-tight font-teko z-10">
            {slide.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ClassesCarousel = ({ slides }: ClassesCarouselProps) => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: ".classes-prev",
          nextEl: ".classes-next",
        }}
        pagination={{
          el: ".classes-pagination",
          type: "progressbar",
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <ClassCard slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
          <div className="classes-pagination h-2! w-full! md:w-[400px]! rounded-full overflow-hidden bg-white/20 relative!" />
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="classes-prev w-10 h-10 rounded-full border border-gymYellow text-gymYellow hover:bg-gymYellow hover:text-black cursor-pointer transition flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black hover:scale-105 active:scale-95"
              aria-label="Previous slide"
            >
            <svg
              aria-hidden="true"
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 8H2M2 8L8 3M2 8L8 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            </button>
            <button
              type="button"
              className="classes-next w-10 h-10 rounded-full border border-gymYellow text-gymYellow hover:bg-gymYellow hover:text-black cursor-pointer transition flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black hover:scale-105 active:scale-95"
              aria-label="Next slide"
            >
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
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="button"
            onClick={() => dispatchToast("Showing class details.")}
            className="group px-8 py-3 bg-gymYellow text-black font-bold rounded-full uppercase tracking-tight hover:bg-gymYellow/90 cursor-pointer transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span className="inline-flex items-center gap-2">
              <FlipText text="More Details" />
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
        </div>
      </div>

      <style jsx global>{`
        .classes-pagination.swiper-pagination-progressbar {
          background: rgba(255, 255, 255, 0.2);
        }
        .classes-pagination .swiper-pagination-progressbar-fill {
          background: #f5d73d;
        }
      `}</style>
    </div>
  );
};

export default ClassesCarousel;
