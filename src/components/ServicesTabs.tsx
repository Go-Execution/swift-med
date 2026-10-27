'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Thermometer,
  Bandage,
  Scan,
  Droplet,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface ServicesTabsProps {
  onOpenCheckIn: (prefillReason?: string) => void;
}

export default function ServicesTabs({ onOpenCheckIn }: ServicesTabsProps) {
  const [activeTab, setActiveTab] = useState<'illness' | 'injury' | 'diagnostics' | 'iv-physicals'>('illness');

  const categories = [
    { id: 'illness', label: 'Everyday Illness', icon: Thermometer },
    { id: 'injury', label: 'Injuries & Stitches', icon: Bandage },
    { id: 'diagnostics', label: 'X-Ray & Labs', icon: Scan },
    { id: 'iv-physicals', label: 'IV Suite & Physicals', icon: Droplet },
  ] as const;

  const content = {
    illness: {
      title: 'Everyday Illness Care',
      subtitle: 'Fast, same-day diagnosis and relief for acute viral and bacterial symptoms.',
      items: [
        'Colds, Influenza A/B, RSV & COVID-19',
        'Strep throat & severe sore throats',
        'Sinus, ear, and eye infections',
        'Urinary tract infections (UTIs) & bladder pain',
        'Nausea, vomiting, stomach bugs & dehydration',
      ],
      badge: 'Rapid Testing In-House',
      checkInReason: 'Everyday Illness',
    },
    injury: {
      title: 'Minor Injuries & Wound Care',
      subtitle: 'Dedicated procedure room for stitches, fractures, and acute trauma.',
      items: [
        'Laceration repair: Stitches, surgical glue, skin staples',
        'Sprains, strains & acute joint hyperextensions',
        'Suspected simple fractures, splints & post-injury care',
        'Minor burns, abrasions, puncture wounds & dressing',
        'Abscess incision and clinical drainage',
      ],
      badge: 'Procedure Suite Ready',
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
      ],
      badge: 'Answers Before You Leave',
      checkInReason: 'Digital X-Ray & Rapid Lab',
    },
    'iv-physicals': {
      title: 'Physician-Supervised IV Therapy & Physicals',
      subtitle: 'Real medical hydration protocols and fast clearance physicals.',
      items: [
        'IV Hydration Basic ($89) • Nausea Relief ($129) • Migraine Relief ($159)',
        'Recovery Boost ($179) with high-potency Vitamin C, B12, and Magnesium',
        'Student sports and school clearance physicals ($35 – $45 same-day)',
        'Pre-employment physicals & DOT certified commercial driver exams',
        'Chronic condition flare-up stabilization (high blood pressure, asthma flares)',
      ],
      badge: 'Transparent Cash Pricing',
      checkInReason: 'IV Hydration Suite',
    },
  };

  const current = content[activeTab];

  return (
    <section id="services" className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
            Full-Scope Care
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-slate mt-1 tracking-tight">
            Clinical services ready when you are.
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            No waiting weeks for your primary doctor, and no 6-hour emergency room waits.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'text-white shadow-sm'
                    : 'text-slate-600 bg-white hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-brand-blue rounded-xl"
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
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    {current.subtitle}
                  </p>
                </div>
                <span className="text-[11px] font-bold text-brand-blue bg-blue-50 border border-blue-200 px-3 py-1 rounded-full self-start sm:self-auto">
                  {current.badge}
                </span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                {current.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-medium">
                  Walk-ins welcome • Online check-in available now
                </span>
                <button
                  onClick={() => onOpenCheckIn(current.checkInReason)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <span>Check In for {current.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
