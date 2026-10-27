'use client';

import { motion } from 'framer-motion';
import { Smartphone, Coffee, DoorOpen } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: Smartphone,
      title: 'Check In In 60 Seconds',
      description: 'Register online from your phone or car. Pick your reason for visit and preferred language.',
    },
    {
      num: '02',
      icon: Coffee,
      title: 'Wait Anywhere Comfortable',
      description: 'Rest on your couch or grab coffee down Route 1. We text your phone with live queue updates.',
    },
    {
      num: '03',
      icon: DoorOpen,
      title: 'Walk Straight Into Your Room',
      description: 'When we text that your room is prepped, walk in. Our lobby standard is under 8 minutes arrival time.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
            Frictionless Healthcare
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-slate mt-1 tracking-tight">
            How virtual check-in works.
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            No crowded lobbies. Your time stays completely in your hands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-brand-blue flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-display font-extrabold text-2xl text-slate-300">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
