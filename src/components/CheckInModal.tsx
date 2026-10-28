'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ClipboardCheck,
  Check,
  MessageSquare,
  AlertCircle,
  User,
  Users,
} from 'lucide-react';

interface CheckInModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialReason?: string;
}

export default function CheckInModal({
  isOpen,
  onClose,
  initialReason = 'Everyday Illness',
}: CheckInModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [whoSeen, setWhoSeen] = useState<'Myself' | 'My Child' | 'Family Block'>('Myself');
  const [reason, setReason] = useState(initialReason);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [ticketNumber, setTicketNumber] = useState('SM-248');

  useEffect(() => {
    if (initialReason) {
      setReason(initialReason);
      if (initialReason.toLowerCase().includes('family')) {
        setWhoSeen('Family Block');
      }
    }
  }, [initialReason, isOpen]);

  function handleContinue() {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!firstName.trim() || !lastName.trim() || !phone.trim()) {
        alert('Please fill in your name and mobile phone number for live SMS updates.');
        return;
      }
      const randomTicket = 'SM-' + Math.floor(100 + Math.random() * 900);
      setTicketNumber(randomTicket);
      setStep(3);
    }
  }

  function handleResetAndClose() {
    onClose();
    setTimeout(() => {
      setStep(1);
      setFirstName('');
      setLastName('');
      setPhone('');
    }, 300);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleResetAndClose}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
          />

          {/* Slide-over Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto z-10"
          >
            {/* Header */}
            <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center">
                  <ClipboardCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900">
                    Virtual Check-In
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Live Queue • Elkridge, MD
                  </p>
                </div>
              </div>
              <button
                onClick={handleResetAndClose}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg transition-colors"
                aria-label="Close check in drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 flex-1 space-y-5">
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Who is being seen today?
                    </label>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {(['Myself', 'My Child', 'Family Block'] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setWhoSeen(type)}
                          className={`p-2.5 rounded-xl border text-center font-semibold transition-all ${
                            whoSeen === type
                              ? 'border-brand-blue bg-blue-50/80 text-brand-blue shadow-xs'
                              : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Primary Reason for Visit
                    </label>
                    <div className="space-y-2 text-xs">
                      {[
                        { title: 'Everyday Illness', desc: 'Cold, flu, COVID, strep, ear pain, UTI' },
                        { title: 'Injury / Cuts / Sprain', desc: 'Stitches, sprains, suspected fractures, burns' },
                        { title: 'Digital X-Ray & Rapid Lab', desc: 'Radiology, blood counts, rapid test' },
                        { title: 'IV Hydration Suite', desc: 'Physician-supervised recovery fluids' },
                        { title: 'Sports / School Physical', desc: '$35 – $45 same-day clearance' },
                      ].map((item) => (
                        <label
                          key={item.title}
                          className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                            reason === item.title
                              ? 'border-brand-blue bg-blue-50/50'
                              : 'border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="visitReason"
                            value={item.title}
                            checked={reason === item.title}
                            onChange={() => setReason(item.title)}
                            className="mt-0.5 text-brand-blue focus:ring-blue-500"
                          />
                          <div>
                            <strong className="block text-slate-900 font-semibold">{item.title}</strong>
                            <span className="text-[11px] text-slate-500">{item.desc}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-red-50 rounded-xl border border-red-200 text-[11px] text-red-800 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>
                      If you are experiencing chest pain or severe breathing difficulty, close this and call <strong>911</strong> immediately.
                    </span>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">First Name *</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="e.g. Maria"
                        className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Last Name *</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="e.g. Santos"
                        className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile Phone (For Live Queue SMS Updates) *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(410) 555-0199"
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-[10px] text-slate-500 mt-1">
                      We text you when you are 2nd in line so you can walk straight to your room.
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                    <p><strong>Selected Reason:</strong> {reason}</p>
                    <p><strong>Patient Type:</strong> {whoSeen}</p>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="text-center space-y-4 py-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                      Check-In Confirmed
                    </span>
                    <h4 className="font-display font-extrabold text-2xl text-slate-900 mt-0.5">
                      You are in line!
                    </h4>
                    <p className="text-xs text-slate-500">Your Virtual Ticket:</p>
                    <div className="font-display font-extrabold text-4xl text-brand-navy my-2">
                      {ticketNumber}
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-left text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Patient:</span>
                      <strong className="text-slate-900">{firstName} {lastName}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Queue Position:</span>
                      <strong className="text-emerald-700 font-bold">2nd in line (~14 min)</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Address:</span>
                      <span className="text-slate-800">6244 Washington Blvd, Elkridge</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-3 border border-blue-200 text-left text-[11px] text-blue-900 flex items-start gap-2">
                    <MessageSquare className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Simulated SMS Sent to {phone}:</strong>
                      <p className="mt-0.5 text-blue-800">
                        &quot;SwiftMed: You are checked in ({ticketNumber})! Feel free to wait in your car or at home. We&apos;ll text you when your exam room is ready.&quot;
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleResetAndClose}
                    className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
                  >
                    Done &amp; Return to Home
                  </button>
                </div>
              )}
            </div>

            {/* Footer Buttons */}
            {step < 3 && (
              <div className="p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-between sticky bottom-0">
                {step > 1 ? (
                  <button
                    onClick={() => setStep((s) => (s - 1) as 1 | 2)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}
                <button
                  onClick={handleContinue}
                  className="px-6 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-bold shadow-xs transition-colors"
                >
                  {step === 2 ? 'Confirm & Join Queue' : 'Continue'}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
