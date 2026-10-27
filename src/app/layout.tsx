import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SwiftMed Urgent Care | Walk-In Clinic in Elkridge, MD',
  description:
    'Physician-led urgent care at 6244 Washington Blvd, Elkridge, MD. Skip the waiting room, check in online, and get digital X-ray, rapid lab, and ultrasound on site.',
  keywords: [
    'urgent care Elkridge MD',
    'walk-in clinic Howard County',
    'urgent care Washington Blvd',
    'X-ray near me',
    'sports physicals Elkridge',
    'IV hydration Howard County',
  ],
  icons: {
    icon: '/assets/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-white text-brand-slate antialiased selection:bg-brand-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
