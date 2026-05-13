"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import { dispatchToast } from "@/components/ui/ToastHub";

const plans = [
  { 
    name: 'Basic', 
    monthly: 39,
    yearly: 29,
    badge: "Standard",
    label: 'Includes:', 
    features: ['24*7 access to gyms', 'Home workouts with calorie tracking'],
    gradient: 'linear-gradient(75.52deg, #989898 4.54%, #646464 35.74%, #989898 66.94%)'
  },
  { 
    name: 'Pro', 
    monthly: 69,
    yearly: 54,
    badge: "Popular",
    label: 'Everything in Basic, plus:', 
    features: ['Unlimited access to Saunas, and Recovery Zones', 'Access to Grow Nutrition'],
    gradient: 'linear-gradient(82.85deg, #9148BC 32.61%, #7A3B8A 51.93%, #BA4CDF 71.26%)'
  },
  { 
    name: 'Elite', 
    monthly: 99,
    yearly: 79,
    badge: "Premium",
    label: 'Everything in Pro, plus:', 
    features: ['Unlimited access to Group Classes', 'Unlimited access to Grow Sports', 'Personalized Nutrition Expert'],
    gradient: 'linear-gradient(75.52deg, #B3932A 18.34%, #D2C755 35.74%, #F5D73D 45.64%)'
  },
];

const PlanCard = ({
  plan,
  yearlyPricing,
}: {
  plan: (typeof plans)[number];
  yearlyPricing: boolean;
}) => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothX = useSpring(rotateX, { stiffness: 220, damping: 20 });
  const smoothY = useSpring(rotateY, { stiffness: 220, damping: 20 });
  const shadow = useTransform(
    smoothY,
    [-8, 8],
    [
      "0 14px 35px rgba(0,0,0,0.25), -12px 0 28px rgba(245,215,61,0.14)",
      "0 14px 35px rgba(0,0,0,0.25), 12px 0 28px rgba(245,215,61,0.14)",
    ]
  );

  const currentPrice = yearlyPricing ? plan.yearly : plan.monthly;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        rotateY.set(((x / bounds.width) * 2 - 1) * 8);
        rotateX.set(-((y / bounds.height) * 2 - 1) * 6);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      style={{ rotateX: smoothX, rotateY: smoothY, boxShadow: shadow, transformStyle: "preserve-3d" }}
      className="border box-border glass-card p-8 rounded-sm flex flex-col justify-between"
    >
      <div>
        <h3
          className="text-5xl font-bold mb-6 text-center w-fit mx-auto"
          style={{
            background: plan.gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {plan.name}
        </h3>
        <div className="mb-8 text-center">
          <motion.p
            key={`${plan.name}-${currentPrice}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl font-black text-white"
          >
            ${currentPrice}
            <span className="text-base font-semibold text-white/70">/mo</span>
          </motion.p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/60">{plan.badge}</p>
        </div>
        <p className="text-[#a3a3a3] font-montserrat font-semibold text-lg lg:text-xl mb-4">{plan.label}</p>
        <ul className="text-white space-y-2 mb-8 font-montserrat font-semibold text-lg lg:text-xl list-disc pl-6">
          {plan.features.map((feature) => (
            <li className="pl-2" key={feature}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2 max-[1140px]:flex-col max-lg:flex-row">
        <button
          type="button"
          onClick={() => dispatchToast(`${plan.name} free trial started.`)}
          className="w-full flex-1 py-2 border border-white text-white font-bold hover:bg-white hover:text-black transition font-montserrat rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          FREE TRIAL
        </button>
        <button
          type="button"
          onClick={() => dispatchToast(`Viewing ${plan.name} plan details.`)}
          className="w-full flex-1 py-2 bg-gymYellow text-black font-bold hover:bg-gymYellow/90 transition font-montserrat rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          LEARN MORE
        </button>
      </div>
    </motion.div>
  );
};

export const PricingSection = () => {
  const [yearlyPricing, setYearlyPricing] = useState(false);

  return (
    <section id="memberships" className="bg-black py-12 px-6 font-montserrat">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-gymYellow mb-12 uppercase font-teko text-center"
      >
        Different Plans Same Goals
      </motion.h2>
      <div className="mb-10 flex justify-center">
        <div className="relative flex items-center rounded-full border border-white/20 bg-white/5 p-1">
          <button
            type="button"
            onClick={() => setYearlyPricing(false)}
            className={`relative z-10 px-5 py-2 text-xs md:text-sm font-bold uppercase tracking-[0.18em] transition ${
              !yearlyPricing ? "text-black" : "text-white"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setYearlyPricing(true)}
            className={`relative z-10 px-5 py-2 text-xs md:text-sm font-bold uppercase tracking-[0.18em] transition ${
              yearlyPricing ? "text-black" : "text-white"
            }`}
          >
            Yearly
          </button>
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-gymYellow"
            style={{ left: yearlyPricing ? "calc(50% + 2px)" : "2px" }}
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} yearlyPricing={yearlyPricing} />
        ))}
      </div>
    </section>
  );
};