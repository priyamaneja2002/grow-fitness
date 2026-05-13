"use client";

import { motion } from 'framer-motion';

const plans = [
  { 
    name: 'Basic', 
    price: 'Standard', 
    label: 'Includes:', 
    features: ['24*7 access to gyms', 'Home workouts with calorie tracking'],
    gradient: 'linear-gradient(75.52deg, #989898 4.54%, #646464 35.74%, #989898 66.94%)'
  },
  { 
    name: 'Pro', 
    price: 'Popular', 
    label: 'Everything in Basic, plus:', 
    features: ['Unlimited access to Saunas, and Recovery Zones', 'Access to Grow Nutrition'],
    gradient: 'linear-gradient(82.85deg, #9148BC 32.61%, #7A3B8A 51.93%, #BA4CDF 71.26%)'
  },
  { 
    name: 'Elite', 
    price: 'Premium', 
    label: 'Everything in Pro, plus:', 
    features: ['Unlimited access to Group Classes', 'Unlimited access to Grow Sports', 'Personalized Nutrition Expert'],
    gradient: 'linear-gradient(75.52deg, #B3932A 18.34%, #D2C755 35.74%, #F5D73D 45.64%)'
  },
];

export const PricingSection = () => {
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
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <motion.div 
            key={plan.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="border box-border glass-card p-8 rounded-sm flex flex-col justify-between"
          >
            <div>
              <h3 
                className="text-5xl font-bold mb-12 text-center w-fit mx-auto"
                style={{
                  background: plan.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {plan.name}
              </h3>
              <p className="text-[#a3a3a3] font-montserrat font-semibold text-lg lg:text-xl mb-4">{plan.label}</p>
              <ul className="text-white space-y-2 mb-8 font-montserrat font-semibold text-lg lg:text-xl list-disc pl-6">
                {plan.features.map(f => <li className="pl-2" key={f}>{f}</li>)}
              </ul>
            </div>
            <div className="flex gap-2 max-[1140px]:flex-col max-lg:flex-row">
              <button
                type="button"
                className="w-full flex-1 py-2 border border-white text-white font-bold hover:bg-white hover:text-black transition font-montserrat rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                FREE TRIAL
              </button>
              <button
                type="button"
                className="w-full flex-1 py-2 bg-gymYellow text-black font-bold hover:bg-gymYellow/90 transition font-montserrat rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                LEARN MORE
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};