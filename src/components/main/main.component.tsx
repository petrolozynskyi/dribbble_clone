import React from 'react'
import { HeroSection } from '../../sections/main-hero-section/hero-section'
import { Expdesigns } from '../expdesigns/expdesigns.component'
import { FooterCtaSection } from '../../sections/footer-section.tsx/footer-cta.section'
import FooterAnimation from '../../sections/footer-section.tsx/footer-animation'
import FooterCopyrights from '../../sections/footer-section.tsx/footer-copyrights'

export function Main() {
    return (
        <>
            <HeroSection />
            <Expdesigns />
            <FooterCtaSection />
            <FooterAnimation />
            <FooterCopyrights />
        </>
    )
}
