'use client';

import { useState } from 'react';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Nav from '@/components/Nav';
import CustomCursor from '@/components/CustomCursor';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/sections/WhatWeDo';
import CoreExpertise from '@/components/sections/CoreExpertise';
import SoftwareSection from '@/components/sections/SoftwareSection';
import AISolutions from '@/components/sections/AISolutions';
import Process from '@/components/sections/Process';
import TechStack from '@/components/sections/TechStack';
import Industries from '@/components/sections/Industries';
import WhyUs from '@/components/sections/WhyUs';
import CaseStudies from '@/components/sections/CaseStudies';
import StartupSection from '@/components/sections/StartupSection';
import About from '@/components/sections/About';
import ContactForm from '@/components/sections/ContactForm';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import ScrollStageIndicator from '@/components/ScrollStageIndicator';
import TalkToTeamModal from '@/components/TalkToTeamModal';

export default function Home() {
  const [talkOpen, setTalkOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      <main style={{ fontFamily: 'var(--font-sans)' }}>
        <Nav />
        <CustomCursor />
        <ScrollStageIndicator />
        <Hero />
        <WhatWeDo />
        <CoreExpertise />
        <SoftwareSection />
        <AISolutions />
        <Process />
        <TechStack />
        <Industries />
        <WhyUs />
        <CaseStudies />
        <StartupSection />
        <About />
        <ContactForm />
        <FinalCTA onTalkToExperts={() => setTalkOpen(true)} />
        <Footer />
        <MobileStickyBar />
        {talkOpen && <TalkToTeamModal onClose={() => setTalkOpen(false)} />}
      </main>
    </SmoothScrollProvider>
  );
}
