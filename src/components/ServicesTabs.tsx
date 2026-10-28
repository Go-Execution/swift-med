'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Thermometer,
  Bandage,
  Scan,
  HeartPulse,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface ServicesTabsProps {
  onOpenCheckIn: (prefillReason?: string) => void;
}

export default function ServicesTabs({ onOpenCheckIn }: ServicesTabsProps) {
  const [activeTab, setActiveTab] = useState<'illness' | 'injury' | 'diagnostics' | 'chronic'>('illness');

  const categories = [
    { id: 'illness', label: 'Everyday Illness', icon: Thermometer, color: 'text-blue-700 bg-blue-100/80' },
    { id: 'injury', label: 'Injuries & Stitches', icon: Bandage, color: 'text-amber-800 bg-amber-100/80' },
    { id: 'diagnostics', label: 'Digital X-Ray & Labs', icon: Scan, color: 'text-emerald-800 bg-emerald-100/80' },
    { id: 'chronic', label: 'Chronic Flare-Ups', icon: HeartPulse, color: 'text-indigo-800 bg-indigo-100/80' },
  ] as const;

  const content = {
    illness: {
      title: 'Everyday Illness Care',
      subtitle: 'Fast, same-day relief and diagnosis for acute viral and bacterial symptoms.',
      items: [
        'Colds, Influenza A/B, RSV & COVID-19',
        'Strep throat & severe sore throats (15-min rapid test)',
        'Sinus, ear, and acute eye infections',
        'Urinary tract infections (UTIs) & bladder pain',
        'Nausea, vomiting, stomach bugs & dehydration',
        'Allergies, mild asthma flares, and skin rashes',
      ],
      badge: 'Rapid Testing On Site',
      checkInReason: 'Everyday Illness',
    },
    injury: {
      title: 'Minor Injuries & Wound Care',
      subtitle: 'Dedicated procedure room for stitches, fractures, burns, and acute trauma.',
      items: [
        'Laceration repair: Expert stitches, surgical glue, skin staples',
        'Sprains, strains & acute joint hyperextensions',
        'Suspected simple fractures, splints & post-injury care',
        'Minor burns, abrasions, puncture wounds & sterile dressing',
        'Abscess incision and clinical drainage',
        'Foreign object removal from skin or eyes',
      ],
      badge: 'Dedicated Procedure Room',
      checkInReason: 'Injury / Cuts / Sprain',
    },
    diagnostics: {
      title: 'Hospital-Grade Diagnostics On Site',
      subtitle: 'High-frequency digital radiology, point-of-care ultrasound, and CLIA-certified labs.',
      items: [
        'Digital X-rays: Chest, spine, extremities, and joints with rapid radiologist over-read',
        'Point-of-care ultrasound: Leg clot (DVT) checks, kidney stone & gallbladder scans',
        'Rapid antigen tests: Strep, Flu A/B, COVID, RSV (results in 15 mins)',
        'Complete Blood Count (CBC) and basic metabolic panels',
        'Instant urinalysis and clinical pregnancy testing',
        'All results reviewed and explained before you leave',
      ],
      badge: 'Results in 15 Minutes',
      checkInReason: 'Digital X-Ray & Rapid Lab',
    },
    chronic: {
      title: 'Chronic Flare-Up Stabilization',
      subtitle: 'Same-day care when your doctor can’t see you today, with a 24-hour PCP handoff.',
      items: [
        'Elevated blood pressure readings without emergency symptoms',
        'High blood sugar stabilization without diabetic ketoacidosis',
        'Moderate asthma or COPD breathing flare-ups (nebulizers)',
        'Acute gout attacks and joint arthritis flares',
        'Complicated UTIs and cellulitis (including first IV dose)',
        'Written plan & notification sent to your doctor within 24h',
      ],
      badge: 'Same-Day Doctor Handoff',
      checkInReason: 'Chronic Flare-Up',
    },
  };

  const current = content[activeTab];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-b from-[#edf6ef] via-[#e5f2e8] to-[#edf6ef] border-b border-emerald-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Full-Scope Clinical Services</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Urgent medical care ready when you are.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            More capable than a pharmacy clinic, faster than the hospital emergency room.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative inline-flex items-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all ${
                  isActive
                    ? 'text-white shadow-md'
                    : 'text-slate-700 bg-white hover:bg-emerald-50 border border-emerald-200/90 shadow-2xs'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-brand-navy rounded-2xl"
                    transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="bg-white rounded-3xl p-6 sm:p-9 border-2 border-emerald-200/90 shadow-lg max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-slate-900">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {current.subtitle}
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-900 bg-emerald-100 border border-emerald-300 px-3.5 py-1.5 rounded-full self-start sm:self-auto shadow-2xs">
                  {current.badge}
                </span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700">
                {current.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-medium">
                  Walk-ins always welcome • Digital X-ray &amp; labs on site
                </span>
                <button
                  onClick={() => onOpenCheckIn(current.checkInReason)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-brand-navy hover:from-emerald-700 hover:to-blue-900 text-white font-extrabold text-xs sm:text-sm shadow-sm hover:shadow transition-all"
                >
                  <span>Check In for {current.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
