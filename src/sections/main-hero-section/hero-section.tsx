import React from 'react'
import { Colorbtn } from '../../components/colorbtn/colorbtn'
import { HeroTrack } from '../../components/hero-track/hero-track.component'

export function HeroSection() {
    return (
        <>
            <section className="hero-section">
                <Colorbtn />
                <div className='flex flex-col items-center text-center justify-center'>
                    <h1 className='max-w-[870px] text-[72px] leading-[76px] mt-[40px] mb-[24px]'>The world’s destination for design</h1>

                    <div className='text-[20px] leading-[36px]'>Get inspired by the work of millions of top-rated designers & agencies around the world.</div>

                    <div className='cursor-pointer text-white bg-[#0d0c22] font-bold text-sm p-4 mt-[32px] rounded-full'>Get started </div>
                </div>
                <HeroTrack />
            </section>
        </>
    )
}
