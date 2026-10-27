'use client';

import { motion } from 'framer-motion';
import { TimerReset, ShieldCheck, Microscope } from 'lucide-react';

export default function Guarantees() {
  const pillars = [
    {
      icon: TimerReset,
      iconBg: 'bg-blue-100 text-brand-blue',
      title: 'Under 8-Minute Lobby Time',
      badge: 'Lobby Standard: <8 min',
      description:
        'Check in remotely and wait from the comfort of your car or home. Our clinical standard is under 8 minutes in the lobby after arrival.',
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-emerald-100 text-emerald-800',
      title: 'Seen in 20 or Copay Free',
      badge: 'Off-Peak Guarantee',
      description:
        'Visit during off-peak hours (Mon–Fri 9am–12pm & 2pm–5pm). Get roomed with vitals in 20 minutes, or your copay is 100% on us.',
    },
    {
      icon: Microscope,
      iconBg: 'bg-amber-100 text-amber-900',
      title: 'Hospital-Grade Diagnostics',
      badge: 'Results in 15 Minutes',
      description:
        'Digital X-ray, point-of-care ultrasound, and rapid certified labs (Strep, Flu, COVID, CBC, Urinalysis) all under one roof.',
    },
  ];

  return (
    <section id="guarantees" className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
            The SwiftMed Standard
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-slate mt-1 tracking-tight">
            Urgent care built around your time.
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Faster than the ER, more capable than a pharmacy clinic, and more convenient than waiting weeks for an appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/80 hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${pillar.iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-700 bg-white px-2.5 py-1 rounded-md border border-slate-200 inline-block">
                    {pillar.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
