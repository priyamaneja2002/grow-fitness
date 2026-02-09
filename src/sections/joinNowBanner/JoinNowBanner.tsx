"use client";

import Image from "next/image";

const JoinNowBanner = () => {
  return (
    <section className="font-montserrat bg-transparent">
      <div className="mx-auto">
        <div className="relative overflow-hidden  border border-white/10">
          <div className="relative h-[400px] md:h-[500px] lg:h-[580px]">
            <Image
              src="/hero-bg-image.png"
              alt="50% off your first 6 months"
              fill
              className="object-cover"
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
            <Image
              src="/golden-yellow-smooth-cloth.jpg"
              alt=""
              fill
              className="object-cover scale-[10] origin-center translate-y-[-110px] max-md:translate-x-[-240px] md:translate-y-[-270px]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center px-6 md:px-10">
              <button className="px-6 py-2 md:px-8 lg:px-10 md:py-3 text-base md:text-lg bg-white text-black font-bold rounded-full uppercase tracking-tight hover:bg-[#f5f5f5] cursor-pointer transition">
                <span className="inline-flex items-center gap-2">
                  Join Now
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
        </div>
      </div>
    </section>
  );
};

export default JoinNowBanner;
