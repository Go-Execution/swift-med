'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ClipboardCheck, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onOpenCheckIn: () => void;
  waitMinutes: number;
}

export default function Header({ onOpenCheckIn, waitMinutes }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Icon Only (Prominent & Clean, No HTML Text) */}
          <Link href="/" className="flex items-center group py-1" aria-label="SwiftMed Urgent Care">
            <div className="relative w-auto h-auto flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/assets/swift-med-logo.png"
                alt="SwiftMed Urgent Care Logo"
                width={90}
                height={90}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <Link href="#services" className="hover:text-brand-blue transition-colors">
              Services
            </Link>
            <Link href="#guarantees" className="hover:text-brand-blue transition-colors">
              The Guarantee
            </Link>
            <Link href="#how-it-works" className="hover:text-brand-blue transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="hover:text-brand-blue transition-colors">
              Pricing &amp; Location
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Wait Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-900 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>Wait: <strong>{waitMinutes}m</strong></span>
            </div>

            {/* Check In Button */}
            <button
              onClick={onOpenCheckIn}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-bold shadow-sm hover:shadow transition-all"
            >
              <ClipboardCheck className="w-4 h-4" />
              <span>Check In Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-semibold text-slate-500">Live Estimated Wait:</span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              ~{waitMinutes} min
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-800"
            >
              Services
            </Link>
            <Link
              href="#guarantees"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-800"
            >
              The Guarantee
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-800"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-800"
            >
              Pricing &amp; Location
            </Link>
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckIn();
              }}
              className="w-full py-2.5 rounded-xl bg-brand-blue text-white font-bold text-sm text-center shadow"
            >
              Check In Online Now
            </button>
            <a
              href="tel:4105557943"
              className="w-full py-2 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-50"
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
