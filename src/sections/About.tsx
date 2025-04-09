import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import React from 'react';

export const About:React.FC = () => {

  return (
    <Section id="about">
        <Header />
        <Hero />
    </Section>
  );
}
