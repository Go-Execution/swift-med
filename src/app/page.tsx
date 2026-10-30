'use client';

import { useState, useEffect } from 'react';
import EmergencyBanner from '@/components/EmergencyBanner';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MissionSection from '@/components/MissionSection';
import Guarantees from '@/components/Guarantees';
import ServicesTabs from '@/components/ServicesTabs';
import MembershipSection from '@/components/MembershipSection';
import IvHydrationSection from '@/components/IvHydrationSection';
import FamilyAndSports from '@/components/FamilyAndSports';
import HowItWorks from '@/components/HowItWorks';
import PricingLocation from '@/components/PricingLocation';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import CheckInModal from '@/components/CheckInModal';

export default function Home() {
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [prefillReason, setPrefillReason] = useState('Everyday Illness');
  const [waitMinutes, setWaitMinutes] = useState(14);
  const [patientsAhead, setPatientsAhead] = useState(3);

  // Subtle real-time simulation for wait times
  useEffect(() => {
    const interval = setInterval(() => {
      setWaitMinutes((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return next >= 10 && next <= 18 ? next : 14;
      });
      setPatientsAhead((prev) => {
        const delta = Math.random() > 0.6 ? 1 : -1;
        const next = prev + delta;
        return next >= 2 && next <= 5 ? next : 3;
      });
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  function handleOpenCheckIn(reason?: string) {
    if (reason) setPrefillReason(reason);
    setIsCheckInOpen(true);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. 911 Emergency Alert Bar (Red) */}
      <EmergencyBanner />

      {/* 2. Main Header with Inviting Colored Nav Buttons */}
      <Header
        onOpenCheckIn={() => handleOpenCheckIn()}
        waitMinutes={waitMinutes}
      />

      {/* Main Page Flow with Alternating Color Blocks */}
      <main className="flex-1">
        {/* 3. Hero Section with Welcoming Human Slides + Live Queue Widget */}
        <Hero
          onOpenCheckIn={() => handleOpenCheckIn()}
          waitMinutes={waitMinutes}
          patientsAhead={patientsAhead}
        />

        {/* 4. Highlighted Neighborhood Mission Section (Warm Golden/Amber) */}
        <MissionSection />

        {/* 5. Membership & Subscription Plans (Deep Royal Navy / Sapphire) */}
        <MembershipSection onOpenCheckIn={handleOpenCheckIn} />

        {/* 6. 3 Core Standards (The SwiftMed Standard: Under 8-min, Seen in 20, Diagnostics) */}
        <Guarantees />

        {/* 7. Full-Scope Clinical Services (Soft Sage Green #edf6ef) */}
        <ServicesTabs onOpenCheckIn={handleOpenCheckIn} />

        {/* 8. Physician-Supervised IV Hydration Suite (Soft Sky Blue) */}
        <IvHydrationSection onOpenCheckIn={handleOpenCheckIn} />

        {/* 9. Family Block Visits & Sports Physicals (Warm Amber / Gold) */}
        <FamilyAndSports onOpenCheckIn={handleOpenCheckIn} />

        {/* 10. How Virtual Check-In Works (3-Step Flow) */}
        <HowItWorks onOpenCheckIn={() => handleOpenCheckIn()} />

        {/* 11. Route 1 Location, Hours, Free Parking & Transparent Pricing */}
        <PricingLocation onOpenCheckIn={() => handleOpenCheckIn()} />

        {/* 12. Essential FAQs */}
        <FaqSection />
      </main>

      {/* 13. Clinical & Legal Footer */}
      <Footer />

      {/* 14. Interactive Virtual Queue Check-In Modal / Drawer */}
      <CheckInModal
        isOpen={isCheckInOpen}
        onClose={() => setIsCheckInOpen(false)}
        initialReason={prefillReason}
      />
    </div>
  );
}
