'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ClipboardCheck,
  Clock,
  Phone,
  ShieldCheck,
  Stethoscope,
  Scan,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Heart,
  Users,
} from 'lucide-react';

interface HeroProps {
  onOpenCheckIn: () => void;
  waitMinutes: number;
  patientsAhead: number;
}

export default function Hero({ onOpenCheckIn, waitMinutes, patientsAhead }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/doctor-child.jpg',
      tagline: 'Warm, Compassionate Care',
      title: 'A Neighborhood Clinic Built Around Your Family.',
      description:
        'Skip the stressful hospital waiting room. Check in from your couch or car, and walk straight into a calm exam room when we text you.',
      badge: 'Pediatric & Adult Care',
      accentColor: 'from-blue-600/90 to-brand-navy/95',
    },
    {
      image: '/images/pediatrician.jpg',
      tagline: 'Physician-Led Excellence',
      title: 'Hospital-Grade Diagnostics Right Here in Elkridge.',
      description:
        'Digital X-rays, point-of-care ultrasound, and certified rapid lab tests on site so you get real answers in minutes without the ER bill.',
      badge: 'Digital X-Ray & Ultrasound',
      accentColor: 'from-emerald-700/90 to-slate-900/95',
    },
    {
      image: '/images/family-care.jpg',
      tagline: 'Seen in 20 or Copay Free',
      title: 'Your Time Back In Your Hands.',
      description:
        'Our lobby standard is under 8 minutes. During off-peak hours (Mon–Fri 9am–12pm & 2pm–5pm), get roomed within 20 minutes or your copay is on us.',
      badge: 'Off-Peak Guarantee',
      accentColor: 'from-amber-600/90 to-brand-navy/95',
    },
  ];

  // Auto-advance slides every 6.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative bg-gradient-to-b from-blue-50/70 via-amber-50/30 to-white py-10 lg:py-16 overflow-hidden border-b border-slate-200/80">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Welcome Tagline & Route 1 Location */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-100/90 text-brand-navy border border-blue-200 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-brand-blue" />
              <span>6244 Washington Blvd, Elkridge, MD 21075</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300 shadow-2xs">
              <Calendar className="w-3.5 h-3.5 text-amber-700" />
              <span>Opening Q1 2027 • Walk-Ins Always Welcome</span>
            </span>
          </div>

          <span className="text-xs font-bold text-slate-500 hidden md:inline-flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>Care When You Need It. Quality You Can Trust.</span>
          </span>
        </div>

        {/* Hero Grid: Welcoming Human Slider + Live Queue Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left: Human Slider Card (Welcoming & Warm) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 relative min-h-[460px] sm:min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                {/* Background Photo */}
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Warm Vignette Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${slides[currentSlide].accentColor} mix-blend-multiply opacity-90`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Slide Content */}
            <div className="relative z-10 p-6 sm:p-10 flex flex-col justify-between h-full text-white">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30 tracking-wide uppercase">
                  {slides[currentSlide].badge}
                </span>

                <motion.h1
                  key={`title-${currentSlide}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  key={`desc-${currentSlide}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-sm sm:text-base text-slate-200 max-w-lg leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>
              </div>

              {/* Action Buttons & Slide Controls */}
              <div className="pt-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenCheckIn}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98]"
                  >
                    <ClipboardCheck className="w-4 h-4 text-brand-blue" />
                    <span>Check In Online Now</span>
                  </button>

                  <a
                    href="tel:4105557943"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white backdrop-blur-md font-bold text-xs sm:text-sm border border-white/30 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-300" />
                    <span>(410) 555-SWIFT</span>
                  </a>
                </div>

                {/* Slider Indicator Dots & Arrows */}
                <div className="flex items-center justify-between pt-2 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all ${
                          currentSlide === idx ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() =>
                        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
                      }
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/25 text-white transition-colors"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/25 text-white transition-colors"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Queue Card & Wait Time Manager */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="live-queue-card">
            <div className="bg-white rounded-3xl border-2 border-blue-200/80 shadow-xl p-6 sm:p-7 relative overflow-hidden flex-1 flex flex-col justify-between">
              {/* Header Gradient Stripe (Brand Leaflet Colors) */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-blue via-emerald-500 to-amber-500" />

              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-blue">
                      Live Virtual Queue
                    </span>
                    <h3 className="font-display font-extrabold text-lg text-slate-900">
                      Elkridge Clinic Status
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 beacon-pulse" />
                    <span>OPEN NOW</span>
                  </span>
                </div>

                {/* Big Estimated Wait */}
                <div className="py-6 text-center bg-gradient-to-b from-blue-50/80 via-white to-blue-50/50 rounded-2xl my-4 border border-blue-200/70">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Current Estimated Lobby Wait
                  </span>
                  <div className="font-display font-extrabold text-5xl sm:text-6xl text-brand-navy tracking-tight mt-1">
                    {waitMinutes} min
                  </div>
                  <p className="text-xs text-slate-600 font-semibold mt-1.5">
                    {patientsAhead} patients ahead in queue
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-3 py-0.5 rounded-full border border-emerald-300">
                    Lobby Standard: Under 8 Minutes
                  </span>
                </div>

                {/* Off-Peak Guarantee Tag */}
                <div className="p-3 rounded-xl bg-amber-50 text-amber-950 border border-amber-300 text-xs font-bold mb-4">
                  ★ Seen in 20 or Copay Free:
                  <span className="block font-medium text-amber-900 text-[11px] mt-0.5">
                    Active Mon–Fri: 9:00 AM–12:00 PM &amp; 2:00 PM–5:00 PM.
                  </span>
                </div>

                {/* Quick Operating Schedule */}
                <div className="space-y-2 text-xs text-slate-600 pb-4 border-b border-slate-100">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Monday – Friday:</span>
                    <strong className="text-slate-900">8:00 AM – 8:00 PM</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Saturday – Sunday:</span>
                    <strong className="text-slate-900">9:00 AM – 5:00 PM</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">No Appointment:</span>
                    <span className="font-semibold text-emerald-700">Walk-ins always welcome</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={onOpenCheckIn}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-brand-navy hover:from-blue-700 hover:to-blue-900 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                >
                  <ClipboardCheck className="w-4 h-4" />
                  <span>Join Live Queue from Phone / Car</span>
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  We text you when your room is ready so you can walk straight in.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Trust Badges Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-bold text-slate-800">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <Stethoscope className="w-4 h-4 text-brand-blue flex-shrink-0" />
            <span>Physician-Led Clinic</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <Scan className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Digital X-Ray On Site</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>Seen in 20 or Copay Free</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <Users className="w-4 h-4 text-indigo-600 flex-shrink-0" />
            <span>Spanish, Hindi &amp; French</span>
          </div>
        </div>

      </div>
    </section>
  );
}
