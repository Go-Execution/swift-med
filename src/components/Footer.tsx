import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Top Row: Brand & Quick Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white p-1">
              <Image
                src="/assets/swift-med-logo-400.png"
                alt="SwiftMed Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-display font-extrabold text-base text-white">
                SwiftMed Urgent Care
              </span>
              <p className="text-[11px] text-slate-400">
                6244 Washington Blvd, Elkridge, MD 21075 • (410) 555-SWIFT
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 text-slate-300 font-medium text-xs">
            <Link href="#services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#guarantees" className="hover:text-white transition-colors">
              Guarantee
            </Link>
            <Link href="#how-it-works" className="hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="hover:text-white transition-colors">
              Pricing &amp; Hours
            </Link>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong className="text-white">Emergency Warning:</strong> SwiftMed Urgent Care is an outpatient clinic designed for acute non-emergent illness, laceration sutures, simple fractures, and routine diagnostic testing. If you believe you are experiencing a life-threatening medical emergency (such as severe chest pain, shortness of breath, symptoms of stroke, or uncontrolled bleeding), immediately call 911 or proceed to the nearest hospital Emergency Room.
          </p>
          <p>
            SwiftMed complies with applicable Federal civil rights laws and HIPAA regulations. Opening Q1 2027 in Howard County, MD.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <span>&copy; {new Date().getFullYear()} SwiftMed Urgent Care LLC. All rights reserved.</span>
          <span>Care When You Need It. Quality You Can Trust.</span>
        </div>

      </div>
    </footer>
  );
}
