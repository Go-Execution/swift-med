'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  Car,
  CreditCard,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';

interface PricingLocationProps {
  onOpenCheckIn: () => void;
}

export default function PricingLocation({ onOpenCheckIn }: PricingLocationProps) {
  return (
    <section id="pricing" className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Transparent Pricing & Insurance */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-5"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200 mb-2">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Transparent Costs</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-brand-slate">
                Clear pricing. No surprises.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                We accept most commercial insurance, Medicare, Maryland Medicaid, and offer clear upfront self-pay rates.
              </p>
            </div>

            {/* Price Snapshot */}
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="font-medium text-slate-600">Standard Urgent Care Visit (Self-Pay):</span>
                <strong className="text-slate-900">$140 flat</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="font-medium text-slate-600">Digital X-Ray + Radiologist Reading:</span>
                <strong className="text-slate-900">$85</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="font-medium text-slate-600">Student Sports &amp; School Physical:</span>
                <strong className="text-emerald-700 font-bold">$35 – $45</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="font-medium text-slate-600">IV Hydration Infusions:</span>
                <strong className="text-slate-900">From $89</strong>
              </div>
            </div>

            {/* Insurance Carriers List */}
            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-200/80 text-xs text-slate-700 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-brand-navy">
                <ShieldCheck className="w-4 h-4 text-brand-blue" />
                <span>Accepted Insurance Carriers:</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                CareFirst BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, Medicare, Maryland Medicaid (HealthChoice), and Tricare.
              </p>
            </div>

            <button
              onClick={onOpenCheckIn}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-colors"
            >
              Check In With Insurance or Self-Pay
            </button>
          </motion.div>

          {/* Right Column: Location, Hours & Parking */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-6 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-5"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-brand-blue text-[11px] font-bold border border-blue-200 mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Route 1 Corridor</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-brand-slate">
                Location &amp; Hours
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                6244 Washington Blvd, Elkridge, MD 21075 (Howard County).
              </p>
            </div>

            {/* Hours & Amenities */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <Clock className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Operating Hours:</strong>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Mon–Fri: <strong>8:00 AM – 8:00 PM</strong> • Sat–Sun: <strong>9:00 AM – 5:00 PM</strong>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <Car className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Free Parking &amp; ADA Accessibility:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Dedicated free patient parking directly in front of the clinic. Zero-step entrance with automated doors.
                  </p>
                </div>
              </div>

              {/* Proximity Badges */}
              <div className="flex flex-wrap gap-2 text-[11px] text-slate-600 pt-1">
                <span className="px-2.5 py-1 rounded-md bg-slate-100 font-medium">Hanover: ~5 min</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 font-medium">Columbia: ~10 min</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 font-medium">Ellicott City: ~12 min</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 font-medium">BWI Corridor: ~8 min</span>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=6244+Washington+Blvd,+Elkridge,+MD+21075"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <span>Get Driving Directions</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
