'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Phone } from 'lucide-react';

interface MembershipSectionProps {
  onOpenCheckIn: (reason?: string) => void;
}

export default function MembershipSection({ onOpenCheckIn }: MembershipSectionProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="membership" className="py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-brand-navy to-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Urgent Care On Subscription</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Urgent care, on your terms.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Skip the surprise bills, deductibles, and guesswork. A SwiftMed membership gives you predictable pricing, priority virtual queue scheduling, and a direct line to your care team.
          </p>

          {/* Monthly / Annual Toggle Switch */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 mt-6">
            <span className={`text-xs font-bold px-3 transition-colors ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Monthly Billing
            </span>
            
            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/25 transition-colors focus:outline-none"
              aria-label="Toggle annual billing"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-amber-400 transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>

            <span className={`text-xs font-bold px-3 flex items-center gap-1.5 transition-colors ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-400 text-slate-950 text-[10px] font-extrabold">
                Save ~15%
              </span>
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* 1. Basic Plan */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-7 border border-white/15 flex flex-col justify-between hover:border-white/30 transition-all">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-display font-extrabold text-xl text-white">Basic Plan</h3>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/15 text-slate-200">
                  Individual
                </span>
              </div>
              <p className="text-xs text-slate-300 mb-6">
                Essential peace of mind for unexpected illnesses and rapid testing.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display font-extrabold text-4xl text-white">
                  {isAnnual ? '$499' : '$49'}
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  {isAnnual ? '/year' : '/month'}
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200 pb-6 border-b border-white/15">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>2 Urgent Care Visits Included</strong> per year ($0 copay)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>20% Off</strong> all additional visits &amp; in-house labs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Telehealth Consultations</strong> included</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Digital and physical member ID card</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Member-only booking lane</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onOpenCheckIn('Basic Membership')}
                className="w-full py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs border border-white/30 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Select Basic Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 2. Plus Plan (Highlighted / Most Popular) */}
          <div className="bg-gradient-to-b from-blue-600/40 via-brand-navy/60 to-slate-900/90 backdrop-blur-md rounded-3xl p-7 border-2 border-blue-400 shadow-2xl flex flex-col justify-between relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider shadow-md">
              ★ Most Popular
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-display font-extrabold text-xl text-white">Plus Plan</h3>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-500/30 text-blue-200 border border-blue-400/40">
                  VIP Individual
                </span>
              </div>
              <p className="text-xs text-blue-100 mb-6">
                Unlimited visits, priority virtual queue, and a direct line to your doctor.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display font-extrabold text-4xl text-amber-300">
                  {isAnnual ? '$999' : '$99'}
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  {isAnnual ? '/year' : '/month'}
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-100 pb-6 border-b border-white/20">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
                  <span><strong>Unlimited Urgent Care Visits</strong> ($0 visit fee)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
                  <span><strong>Priority Virtual Queue Booking Lane</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Provider SMS Text Line</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
                  <span><strong>Telehealth Consultations</strong> included</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
                  <span>Digital &amp; physical member card</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onOpenCheckIn('Plus Membership')}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg transition-all flex items-center justify-center gap-1.5 active:scale-[0.98]"
              >
                <span>Select Plus Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3. Family Plan */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-7 border border-white/15 flex flex-col justify-between hover:border-white/30 transition-all">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-display font-extrabold text-xl text-white">Family Plan</h3>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/40">
                  Family of 3 or 4
                </span>
              </div>
              <p className="text-xs text-slate-300 mb-6">
                Complete urgent care coverage for parents and children (family of 3 or 4).
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display font-extrabold text-4xl text-white">
                  {isAnnual ? '$2,999' : '$299'}
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  {isAnnual ? '/year' : '/month'}
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200 pb-6 border-b border-white/15">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Unlimited Visits for Family of 3 or 4</strong> ($0 copay)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>45-Min Family Block Visits</strong> (all seen together)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Sports &amp; School Physicals Included</strong> for kids</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Priority virtual queue &amp; direct provider SMS</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Individual member cards for the whole household</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onOpenCheckIn('Family Membership')}
                className="w-full py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs border border-white/30 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Select Family Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer Callout */}
        <div className="mt-10 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>
              <strong>Note:</strong> SwiftMed Membership is an outpatient care plan, not health insurance. Ideal for high-deductible plans, HSAs, or uninsured neighbors.
            </span>
          </div>
          <a href="tel:4105557943" className="font-bold text-amber-300 hover:underline whitespace-nowrap">
            Questions? Call (410) 555-SWIFT
          </a>
        </div>

      </div>
    </section>
  );
}
