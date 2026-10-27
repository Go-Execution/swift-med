'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need an appointment?',
      a: 'No. Walk-ins are always welcome during all open hours. You can simply walk through our doors, or check in online beforehand to wait comfortably from your car or home.',
    },
    {
      q: 'How does the virtual queue work?',
      a: 'Register online from your phone. We track your spot in line and send live SMS updates. When you are next in line, we text you to walk in straight to your prepared exam room. Our lobby standard is under 8 minutes arrival time.',
    },
    {
      q: 'How does the "Seen in 20 or Copay Free" guarantee work?',
      a: 'Visit during our off-peak hours (Monday through Friday, 9:00 AM–12:00 PM and 2:00 PM–5:00 PM). If you are not in an exam room with vitals taken within 20 minutes of checking in, your copay is completely waived.',
    },
    {
      q: 'Do you see children and treat pediatric illnesses?',
      a: 'Yes. Our clinical staff includes pediatric-trained clinicians who treat illnesses, ear infections, minor fractures, lacerations, strep throat, and perform routine school and sports physicals.',
    },
    {
      q: 'What should I bring to my visit?',
      a: 'Please bring a photo ID, your health insurance card (or payment method if using transparent self-pay), and a list of any current medications and allergies.',
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
            Guidance
          </span>
          <h2 className="font-display text-3xl font-extrabold text-brand-slate mt-1 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Quick answers about walk-ins, wait times, and clinic visits.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50/50 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between text-sm font-bold text-slate-900 hover:text-brand-blue transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-blue' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
