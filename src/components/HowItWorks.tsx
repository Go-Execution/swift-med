'use client';

import { motion } from 'framer-motion';
import { Smartphone, Coffee, DoorOpen, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenCheckIn: () => void;
}

export default function HowItWorks({ onOpenCheckIn }: HowItWorksProps) {
  const steps = [
    {
      num: '01',
      icon: Smartphone,
      color: 'bg-blue-600 text-white',
      cardBg: 'bg-white border-blue-200/90',
      title: 'Check In In 60 Seconds',
      description: 'Register online from your phone, couch, or car. Pick your reason for visit, enter your details, and preferred language.',
    },
    {
      num: '02',
      icon: Coffee,
      color: 'bg-emerald-600 text-white',
      cardBg: 'bg-white border-emerald-200/90',
      title: 'Wait Anywhere Comfortable',
      description: 'Rest at home or grab coffee down Route 1. We text your mobile phone with live updates as your place in line moves up.',
    },
    {
      num: '03',
      icon: DoorOpen,
      color: 'bg-amber-600 text-white',
      cardBg: 'bg-white border-amber-200/90',
      title: 'Walk Straight Into Your Room',
      description: 'When we text you that your exam room is ready, walk in. Our lobby standard is under 8 minutes arrival time.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-20 bg-gradient-to-b from-white via-slate-50 to-blue-50/30 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block mb-2">
            No Waiting-Room Limbo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-slate mt-1 tracking-tight">
            How virtual check-in works.
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Spend your time where you want to be, not trapped in an uncomfortable lobby.
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
                className={`p-7 rounded-3xl border ${step.cardBg} shadow-xs hover:shadow-md transition-all relative flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold shadow-xs ${step.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-display font-extrabold text-3xl text-slate-300">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Step {step.num} of 03
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={onOpenCheckIn}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-brand-navy hover:from-blue-700 hover:to-blue-900 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
          >
            <span>Try Virtual Check-In Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
