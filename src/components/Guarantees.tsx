'use client';

import { motion } from 'framer-motion';
import { TimerReset, ShieldCheck, Microscope } from 'lucide-react';

export default function Guarantees() {
  const pillars = [
    {
      icon: TimerReset,
      iconBg: 'bg-blue-600 text-white shadow-md',
      cardBg: 'bg-blue-50/70 border-blue-200/90',
      title: 'Under 8-Minute Lobby Time',
      badge: 'Lobby Standard: <8 min',
      badgeColor: 'text-blue-900 bg-blue-100 border-blue-300',
      description:
        'Check in remotely from your car or home. Spend your time where you want to be. Our operational standard is under 8 minutes in the lobby after arrival.',
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-emerald-600 text-white shadow-md',
      cardBg: 'bg-emerald-50/70 border-emerald-200/90',
      title: 'Seen in 20 or Copay Free',
      badge: 'Off-Peak Guarantee',
      badgeColor: 'text-emerald-900 bg-emerald-100 border-emerald-300',
      description:
        'Visit during off-peak hours (Mon–Fri 9am–12pm & 2pm–5pm). Get roomed with vitals taken within 20 minutes, or your copay is 100% on us.',
    },
    {
      icon: Microscope,
      iconBg: 'bg-amber-600 text-white shadow-md',
      cardBg: 'bg-amber-50/70 border-amber-200/90',
      title: 'Hospital-Grade Diagnostics',
      badge: 'Results in 15 Minutes',
      badgeColor: 'text-amber-900 bg-amber-100 border-amber-300',
      description:
        'Digital high-frequency X-ray, point-of-care ultrasound, and rapid certified CLIA-waived labs (Strep, Flu, COVID, CBC, Urinalysis) all on site.',
    },
  ];

  return (
    <section id="guarantees" className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block mb-2">
            The SwiftMed Standard
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-slate mt-1 tracking-tight">
            Urgent care built around your time.
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Faster than the emergency room, more capable than a retail clinic, and more convenient than waiting weeks for an appointment.
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
                className={`p-7 rounded-3xl border ${pillar.cardBg} shadow-xs hover:shadow-lg transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${pillar.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>
                <div>
                  <span className={`text-[11px] font-extrabold px-3 py-1.5 rounded-xl border inline-block ${pillar.badgeColor}`}>
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
