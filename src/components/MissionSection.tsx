'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Clock, ShieldCheck, MapPin } from 'lucide-react';

export default function MissionSection() {
  return (
    <section id="mission" className="py-16 lg:py-20 bg-gradient-to-b from-amber-500/15 via-amber-100/40 to-blue-50/40 border-b border-amber-200/80 relative overflow-hidden">
      {/* Decorative Warm Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amber-300/20 via-orange-300/15 to-blue-300/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative text-center">
        
        {/* Neighborhood Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-950 border border-amber-400/50 text-xs font-extrabold uppercase tracking-wider mb-6 shadow-2xs">
          <Heart className="w-3.5 h-3.5 text-amber-700 fill-amber-700" />
          <span>A Neighborhood Clinic For Howard County</span>
        </div>

        {/* Highlighted Mission Headline - Logo Brand Palette, No Black, No Underline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight max-w-4xl mx-auto mb-6"
        >
          &ldquo;Accessible, high-quality medical care with the{' '}
          <span className="text-brand-blue">speed</span>,{' '}
          <span className="text-emerald-600">dignity</span>, and{' '}
          <span className="text-amber-600">clinical excellence</span>{' '}
          our neighbors deserve.&rdquo;
        </motion.h2>

        {/* Narrative */}
        <p className="text-base sm:text-lg text-slate-700/90 max-w-3xl mx-auto leading-relaxed mb-10">
          SwiftMed is a physician-led urgent care created because Elkridge and the Route 1 corridor deserve prompt, exceptional healthcare close to home. We built SwiftMed to be faster, clearer, and kinder than the urgent care you’re used to.
        </p>

        {/* 4 Community Commitment Cards - 4 Logo Colors (Amber, Blue, Green, Red) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          
          <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-sm border border-amber-200 shadow-xs hover:border-amber-400 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-3">
              <Clock className="w-5 h-5 text-amber-700" />
            </div>
            <h3 className="font-display font-bold text-sm text-amber-950 mb-1">
              Respect for Your Time
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Under 8-minute lobby arrival standard. Virtual queue lets you wait wherever you prefer.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-sm border border-blue-200 shadow-xs hover:border-blue-400 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-brand-blue flex items-center justify-center font-bold mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-sm text-blue-950 mb-1">
              Physician-Led Care
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Board-certified clinicians with on-site digital X-ray, point-of-care ultrasound, and rapid labs.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-sm border border-emerald-200 shadow-xs hover:border-emerald-400 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-3">
              <Users className="w-5 h-5 text-emerald-700" />
            </div>
            <h3 className="font-display font-bold text-sm text-emerald-950 mb-1">
              Family &amp; Community First
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Book one 45-minute Family Block for up to 4 people. Spanish, Hindi, and French spoken on shift.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-sm border border-rose-200 shadow-xs hover:border-rose-400 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold mb-3">
              <MapPin className="w-5 h-5 text-rose-700" />
            </div>
            <h3 className="font-display font-bold text-sm text-rose-950 mb-1">
              Route 1 Neighbors
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Proudly serving Elkridge, Hanover, Columbia, Ellicott City, Linthicum, and Howard County.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
