'use client';

import { useState, useEffect } from 'react';
import EmergencyBanner from '@/components/EmergencyBanner';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Guarantees from '@/components/Guarantees';
import ServicesTabs from '@/components/ServicesTabs';
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

  // Subtle real-time simulation
  useEffect(() => {
    const interval = setInterval(() => {
      // Periodic slight fluctuation between 10 and 16 minutes
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
      {/* 911 Emergency Alert Bar */}
      <EmergencyBanner />

      {/* Main Header */}
      <Header
        onOpenCheckIn={() => handleOpenCheckIn()}
        waitMinutes={waitMinutes}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenCheckIn={() => handleOpenCheckIn()}
          waitMinutes={waitMinutes}
          patientsAhead={patientsAhead}
        />

        {/* 3 Core Guarantees */}
        <Guarantees />

        {/* Curated Interactive Clinical Services */}
        <ServicesTabs onOpenCheckIn={handleOpenCheckIn} />

        {/* 3-Step Frictionless Queue Flow */}
        <HowItWorks />

        {/* Transparent Pricing & Route 1 Location */}
        <PricingLocation onOpenCheckIn={() => handleOpenCheckIn()} />

        {/* 5 Essential FAQs */}
        <FaqSection />
      </main>

      {/* Clinical Footer */}
      <Footer />

      {/* Interactive Check-In Modal / Drawer */}
      <CheckInModal
        isOpen={isCheckInOpen}
        onClose={() => setIsCheckInOpen(false)}
        initialReason={prefillReason}
      />
    </div>
  );
}
