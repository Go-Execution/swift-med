'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ClipboardCheck, Phone, Menu, X, Sparkles, Clock } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onOpenCheckIn: () => void;
  waitMinutes: number;
}

export default function Header({ onOpenCheckIn, waitMinutes }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - Horizontal Full Lockup */}
          <Link href="/" className="flex items-center group py-1" aria-label="SwiftMed Urgent Care">
            <div className="relative h-12 sm:h-14 w-auto flex-shrink-0 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/assets/swift-med-horizontal-logo.png"
                alt="SwiftMed Urgent Care Logo"
                width={244}
                height={56}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav - Inviting Colored Pill Buttons */}
          <nav className="hidden lg:flex items-center gap-2.5 text-xs font-bold">
            <Link
              href="#mission"
              className="px-3.5 py-2 rounded-xl text-amber-900 bg-amber-50/80 hover:bg-amber-100 border border-amber-200/70 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Our Mission</span>
            </Link>

            <Link
              href="#services"
              className="px-3.5 py-2 rounded-xl text-blue-900 bg-blue-50/80 hover:bg-blue-100 border border-blue-200/70 transition-all"
            >
              Services &amp; Labs
            </Link>

            <Link
              href="#membership"
              className="px-3.5 py-2 rounded-xl text-emerald-900 bg-emerald-50/80 hover:bg-emerald-100 border border-emerald-200/70 transition-all"
            >
              Membership &amp; Plans
            </Link>

            <Link
              href="#iv-suite"
              className="px-3.5 py-2 rounded-xl text-indigo-900 bg-indigo-50/80 hover:bg-indigo-100 border border-indigo-200/70 transition-all"
            >
              IV Hydration
            </Link>

            <Link
              href="#location"
              className="px-3.5 py-2 rounded-xl text-slate-700 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all"
            >
              Location &amp; Hours
            </Link>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Wait Pill */}
            <a
              href="#live-queue-card"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-bold text-emerald-900 shadow-xs hover:bg-emerald-100 transition-colors"
              title="Click to see live virtual queue status"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span>Wait: <strong>{waitMinutes}m</strong></span>
            </a>

            {/* Check In CTA Button */}
            <button
              onClick={onOpenCheckIn}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-brand-navy hover:from-blue-700 hover:to-blue-900 text-white text-xs font-bold shadow-sm hover:shadow transition-all active:scale-[0.98]"
            >
              <ClipboardCheck className="w-4 h-4" />
              <span>Check In Online</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-semibold text-slate-500">Live Estimated Wait:</span>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              ~{waitMinutes} min in lobby
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <Link
              href="#mission"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-amber-50 text-amber-900 border border-amber-200"
            >
              Our Mission
            </Link>
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-blue-50 text-blue-900 border border-blue-200"
            >
              Services &amp; Labs
            </Link>
            <Link
              href="#membership"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200"
            >
              Membership &amp; Plans
            </Link>
            <Link
              href="#iv-suite"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-indigo-50 text-indigo-900 border border-indigo-200"
            >
              IV Hydration Suite
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-slate-50 text-slate-800 border border-slate-200"
            >
              How It Works
            </Link>
            <Link
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-slate-50 text-slate-800 border border-slate-200"
            >
              Location &amp; Hours
            </Link>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckIn();
              }}
              className="w-full py-3 rounded-xl bg-brand-blue text-white font-bold text-xs text-center shadow-sm"
            >
              Check In Online Now
            </button>
            <a
              href="tel:4105557943"
              className="w-full py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-slate-50"
            >
              <Phone className="w-4 h-4 text-brand-blue" />
              <span>Call Clinic: (410) 555-SWIFT</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
