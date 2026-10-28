'use client';

import { Users, Trophy, HeartPulse, Building2, ArrowRight } from 'lucide-react';

interface FamilyAndSportsProps {
  onOpenCheckIn: (reason?: string) => void;
}

export default function FamilyAndSports({ onOpenCheckIn }: FamilyAndSportsProps) {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-amber-50/80 via-orange-50/40 to-slate-50 border-b border-amber-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/90 px-3.5 py-1.5 rounded-full border border-amber-300 inline-block mb-3">
            Built For Real Life
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive care for every stage.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            From household checkups to sports clearance and workplace physicals, we make healthcare simple.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Family Block Visits */}
          <div className="bg-white rounded-3xl p-7 border border-amber-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <Users className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                    Up to 4 People in 1 Slot
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-slate-900">
                    Family Block Visits
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Stop running around to four separate doctor trips. Book a single 45-minute family block for up to four people: a child’s sports physical, a parent’s sore throat, and a grandparent’s blood pressure check all in one trip. Each person is seen and documented individually.
              </p>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 mb-5 space-y-1">
                <p><strong>Available:</strong> Mon–Fri: 9:00 AM–12:00 PM and 2:00 PM–5:00 PM.</p>
                <p className="text-amber-800">Choose &quot;Family Visit&quot; online and enter each person&apos;s name.</p>
              </div>
            </div>

            <button
              onClick={() => onOpenCheckIn('Family Block Visit')}
              className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Book a Family Block</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Sports Physicals */}
          <div className="bg-white rounded-3xl p-7 border border-emerald-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Trophy className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                    $35 – $45 Flat Fee
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-slate-900">
                    Sports &amp; School Physicals
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Cleared to play, the very same day. Fast, thorough pre-participation physicals for middle school, high school, club sports, and summer camps. Complete forms in advance through our portal and walk out with your signed clearance letter.
              </p>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 mb-5 space-y-1">
                <p><strong>Coaches &amp; Athletic Directors:</strong> We schedule whole-team 2-hour exclusive blocks.</p>
                <p className="text-emerald-800">Cash or insurance accepted. No surprise billing.</p>
              </div>
            </div>

            <button
              onClick={() => onOpenCheckIn('Sports Physical')}
              className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Book Sports Physical ($35–$45)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Chronic Condition Care */}
          <div className="bg-white rounded-3xl p-7 border border-blue-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-100 text-brand-blue flex items-center justify-center font-bold">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-brand-blue uppercase tracking-wider">
                    Same-Day Stabilization
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-slate-900">
                    Chronic Condition Care
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                When your primary care provider has no openings and you can’t wait weeks. We stabilize elevated blood pressure without emergency symptoms, moderate asthma/COPD flare-ups, high blood sugar, and acute gout attacks. We contact your primary doctor within 24 hours and send a Care Navigator text check-in 2 days later.
              </p>

              <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-xs text-blue-950 mb-5">
                <p><strong>Primary Doctor Handoff:</strong> We bridge the gap so you never have to go to an expensive hospital ER for routine flare-up stabilization.</p>
              </div>
            </div>

            <button
              onClick={() => onOpenCheckIn('Chronic Flare-Up')}
              className="w-full py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Check In for Chronic Care</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 4: SwiftMed Business (Employers) */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                    Route 1 Employers
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-slate-900">
                    SwiftMed Business
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Occupational health that keeps your team working. Pre-employment physicals, DOT-compliant drug &amp; alcohol testing, workers’ comp injury management, and OSHA medical surveillance for Howard County logistics, manufacturing, and commercial teams.
              </p>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 mb-5">
                <p><strong>Dedicated Employer Portal:</strong> Instant electronic test results, billing, and compliance records delivered securely to your HR desk.</p>
              </div>
            </div>

            <button
              onClick={() => onOpenCheckIn('Employer Occupational Health')}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Request Employer Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
