'use client';

import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  Clock,
  Phone,
  ShieldCheck,
  Stethoscope,
  Scan,
  MapPin,
  Calendar,
} from 'lucide-react';

interface HeroProps {
  onOpenCheckIn: () => void;
  waitMinutes: number;
  patientsAhead: number;
}

export default function Hero({ onOpenCheckIn, waitMinutes, patientsAhead }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-blue-50/50 via-white to-white py-12 lg:py-20 overflow-hidden border-b border-slate-100">
      {/* Background radial accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#1E3A8A_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Location & Opening Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-brand-blue border border-blue-200">
                <MapPin className="w-3.5 h-3.5" />
                <span>6244 Washington Blvd, Elkridge, MD</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-200">
                <Calendar className="w-3.5 h-3.5" />
                <span>Opening Q1 2027</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-slate tracking-tight leading-[1.08]">
              Skip the <br />
              <span className="text-brand-blue">waiting room.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Check in from your car, home, or nearby café. We’ll text you when your exam room is ready. Walk-ins are always welcome with zero appointment needed.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenCheckIn}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
              >
                <ClipboardCheck className="w-4 h-4" />
                <span>Check In Online Now</span>
              </button>

              <a
                href="#live-queue-card"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm border border-slate-300 shadow-xs transition-colors"
              >
                <Clock className="w-4 h-4 text-brand-blue" />
                <span>See Wait Time</span>
              </a>

              <a
                href="tel:4105557943"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-slate-600 hover:text-brand-blue font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(410) 555-SWIFT</span>
              </a>
            </div>

            {/* Compact Trust Strip */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-brand-blue" />
                <span>Physician-Led Clinic</span>
              </div>
              <div className="flex items-center gap-2">
                <Scan className="w-4 h-4 text-brand-blue" />
                <span>Digital X-Ray On Site</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-blue" />
                <span>Seen in 20 or Free*</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Live Queue Status Card */}
          <motion.div
            id="live-queue-card"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-2xl border-2 border-blue-100 shadow-lg p-6 relative overflow-hidden">
              {/* Header Gradient Stripe */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-navy to-emerald-500" />

              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Live Virtual Queue
                  </span>
                  <h3 className="font-display font-bold text-base text-slate-900">
                    Elkridge Clinic Status
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 beacon-pulse" />
                  <span>OPEN NOW</span>
                </span>
              </div>

              {/* Big Estimated Wait */}
              <div className="py-6 text-center bg-slate-50 rounded-xl my-4 border border-slate-200/60">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Estimated Lobby Wait
                </span>
                <div className="font-display font-extrabold text-5xl text-brand-navy tracking-tight mt-0.5">
                  {waitMinutes} min
                </div>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  {patientsAhead} patients ahead in queue
                </p>
              </div>

              {/* Off-Peak Guarantee Tag */}
              <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold text-center mb-4">
                ★ Off-Peak Guarantee: Seen in 20 min or Copay Free (Mon–Fri 9am–12pm &amp; 2pm–5pm)
              </div>

              {/* Quick Hours & Location */}
              <div className="space-y-1.5 text-xs text-slate-600 pb-4 border-b border-slate-100">
                <div className="flex justify-between">
                  <span className="text-slate-500">Today:</span>
                  <span className="font-bold text-slate-800">Mon–Fri: 8:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Weekends:</span>
                  <span className="font-bold text-slate-800">Sat–Sun: 9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Facility:</span>
                  <span className="font-medium text-slate-800">5 Exam Rooms • Procedure Suite • IV Lounge</span>
                </div>
              </div>

              {/* Card Action */}
              <div className="pt-4">
                <button
                  onClick={onOpenCheckIn}
                  className="w-full py-3 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2 transition-colors active:scale-[0.99]"
                >
                  <ClipboardCheck className="w-4 h-4" />
                  <span>Join Virtual Queue From Anywhere</span>
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
