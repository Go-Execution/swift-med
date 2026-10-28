'use client';

import { Droplet, ShieldCheck, ArrowRight, Activity } from 'lucide-react';

interface IvHydrationSectionProps {
  onOpenCheckIn: (reason?: string) => void;
}

export default function IvHydrationSection({ onOpenCheckIn }: IvHydrationSectionProps) {
  const treatments = [
    {
      name: 'Hydration Basic',
      price: '$89',
      tag: 'Pure Rehydration',
      includes: '1,000 mL IV fluids + essential electrolytes',
      bestFor: 'Acute heat exhaustion, workout fatigue, dehydration from travel',
    },
    {
      name: 'Nausea Relief',
      price: '$129',
      tag: 'Stomach Bug Relief',
      includes: '1L IV fluids + provider-administered anti-nausea medication (Zofran)',
      bestFor: 'Gastroenteritis, vomiting, food illness, inability to hold fluids down',
    },
    {
      name: 'Migraine Relief',
      price: '$159',
      tag: 'Clinical Favorite',
      includes: '1L IV fluids + targeted prescription anti-inflammatory & abortive medications',
      bestFor: 'Refractory migraines, tension cluster headaches, light sensitivity',
      highlighted: true,
    },
    {
      name: 'Hydration Plus',
      price: '$149',
      tag: 'Electrolyte & B-Complex',
      includes: '1L IV fluids + electrolytes + concentrated Vitamin B-Complex',
      bestFor: 'Cellular recovery, deep physical burnout, endurance restoration',
    },
    {
      name: 'Recovery Boost',
      price: '$179',
      tag: 'Immune & Muscle Reload',
      includes: '1L IV fluids + high-dose Vitamin C, B12 & Magnesium Sulfate',
      bestFor: 'Post-illness recovery, muscle cramps, deep fatigue relief',
    },
    {
      name: 'Custom Provider Infusion',
      price: 'Quote at visit',
      tag: 'Tailored Medical Protocol',
      includes: 'Physician-ordered infusion protocols, including first-dose IV antibiotics',
      bestFor: 'Cellulitis treatment, prescription electrolyte correction, physician orders',
    },
  ];

  return (
    <section id="iv-suite" className="py-16 lg:py-24 bg-gradient-to-b from-blue-50/80 via-sky-50/40 to-white border-b border-blue-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-brand-blue border border-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Droplet className="w-3.5 h-3.5 text-brand-blue" />
            <span>Physician-Supervised Suite</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Real medical IV therapy. Not a spa menu.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Feeling dehydrated, nauseated, or run down? Our IV suite is physician-supervised, with a full clinical provider assessment before every infusion, continuous vitals monitoring, and medical safety protocols.
          </p>
        </div>

        {/* 6 Transparent IV Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all ${
                t.highlighted
                  ? 'bg-white border-2 border-brand-blue shadow-lg relative'
                  : 'bg-white/95 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-200'
              }`}
            >
              {t.highlighted && (
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-brand-blue text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                  ★ Most Requested
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-blue">
                      {t.tag}
                    </span>
                    <h3 className="font-display font-extrabold text-lg text-slate-900 mt-0.5">
                      {t.name}
                    </h3>
                  </div>
                  <span className="font-display font-extrabold text-2xl text-brand-navy">
                    {t.price}
                  </span>
                </div>

                <div className="py-3 text-xs text-slate-700 border-y border-slate-100 my-3">
                  <p className="font-semibold text-slate-900">What’s Included:</p>
                  <p className="text-slate-600 mt-0.5">{t.includes}</p>
                </div>

                <div className="text-xs text-slate-500 mb-4">
                  <span className="font-semibold text-slate-700">Best for:</span> {t.bestFor}
                </div>
              </div>

              <button
                onClick={() => onOpenCheckIn(`IV Suite - ${t.name}`)}
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  t.highlighted
                    ? 'bg-brand-blue hover:bg-brand-blue-dark text-white shadow-xs'
                    : 'bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-brand-blue border border-slate-200'
                }`}
              >
                <span>Book This Infusion</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Clinical Safety Protocol Notice */}
        <div className="mt-8 p-4 rounded-2xl bg-white border border-blue-200 shadow-2xs text-xs text-slate-600 max-w-4xl mx-auto flex items-start gap-3">
          <Activity className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900">Clinical Safety Protocol:</strong> Transparent cash prices listed above. Insurance may be billed where clinically supported. Patients with a history of heart failure or kidney disease require physician clearance prior to IV fluid administration.
          </div>
        </div>

      </div>
    </section>
  );
}
