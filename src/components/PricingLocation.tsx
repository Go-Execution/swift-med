'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  Car,
  CreditCard,
  ShieldCheck,
  ExternalLink,
  Phone,
  Sparkles,
} from 'lucide-react';

interface PricingLocationProps {
  onOpenCheckIn: () => void;
}

export default function PricingLocation({ onOpenCheckIn }: PricingLocationProps) {
  return (
    <section id="location" className="py-16 lg:py-24 bg-gradient-to-b from-slate-100 via-slate-50 to-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-brand-navy border border-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-brand-blue" />
            <span>Route 1 Corridor • Elkridge, MD</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Convenient care right down the street.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            No surprise billing, free parking in front of the door, and open evenings and weekends.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Transparent Pricing & Insurance */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 bg-white p-7 sm:p-8 rounded-3xl border-2 border-emerald-200/90 shadow-md flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold uppercase border border-emerald-300 mb-2">
                <CreditCard className="w-3.5 h-3.5 text-emerald-700" />
                <span>Transparent Costs • No Surprises</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-slate-900">
                Clear pricing before you walk in.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                We accept most major commercial plans, Medicare, Maryland Medicaid, and offer clear upfront self-pay rates under the No Surprises Act.
              </p>

              {/* Price Snapshot */}
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 my-5">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="font-medium text-slate-600">Standard Urgent Care Visit (Self-Pay):</span>
                  <strong className="text-slate-900">$140 flat fee</strong>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="font-medium text-slate-600">Digital X-Ray + Radiologist Reading:</span>
                  <strong className="text-slate-900">$85</strong>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="font-medium text-slate-600">Student Sports &amp; Camp Physical:</span>
                  <strong className="text-emerald-700 font-extrabold">$35 – $45</strong>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="font-medium text-slate-600">IV Hydration Therapy Protocols:</span>
                  <strong className="text-slate-900">From $89</strong>
                </div>
              </div>

              {/* Insurance Carriers List */}
              <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200 text-xs text-slate-700 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-emerald-950">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Accepted Health Plans (Confirming for Q1 2027):</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  CareFirst BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, Medicare, Maryland Medicaid (HealthChoice), Tricare, and Workers&apos; Compensation.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenCheckIn}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-brand-navy hover:from-emerald-700 hover:to-blue-900 text-white font-extrabold text-xs sm:text-sm shadow-xs transition-all"
              >
                Check In With Insurance or Self-Pay
              </button>
            </div>
          </motion.div>

          {/* Right Column: Location, Hours & Parking */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-6 bg-white p-7 sm:p-8 rounded-3xl border-2 border-blue-200/90 shadow-md flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-brand-navy text-[11px] font-extrabold uppercase border border-blue-300 mb-2">
                <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                <span>Easy Access &amp; Free Parking</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-slate-900">
                Clinic Location &amp; Hours
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
                6244 Washington Blvd, Elkridge, MD 21075 (Route 1 Corridor)
              </p>

              {/* Hours Box */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 my-5">
                <div className="flex items-start gap-3 p-3.5 bg-blue-50/70 rounded-2xl border border-blue-200">
                  <Clock className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Operating Hours:</strong>
                    <div className="text-xs text-slate-700 mt-1 space-y-0.5">
                      <div>Mon–Fri: <strong>8:00 AM – 8:00 PM</strong></div>
                      <div>Sat–Sun: <strong>9:00 AM – 5:00 PM</strong></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                  <Car className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Dedicated Free Parking:</strong>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Free parking right in front of the private entrance. Fully ADA accessible with ground-level zero-step entry and automatic doors.
                    </p>
                  </div>
                </div>

                {/* Proximity Pills */}
                <div className="flex flex-wrap gap-2 text-[11px] text-slate-700 pt-1">
                  <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 font-semibold">Hanover: ~5 min</span>
                  <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 font-semibold">Columbia: ~10 min</span>
                  <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 font-semibold">Ellicott City: ~12 min</span>
                  <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 font-semibold">BWI Corridor: ~8 min</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=6244+Washington+Blvd,+Elkridge,+MD+21075"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-xl border-2 border-brand-blue text-brand-navy hover:bg-blue-50 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>Get Driving Directions</span>
                <ExternalLink className="w-4 h-4 text-brand-blue" />
              </a>

              <a
                href="tel:4105557943"
                className="py-3.5 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call Clinic</span>
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
