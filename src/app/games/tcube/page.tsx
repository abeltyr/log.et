"use client";

import IosSVG from '@/assets/icons/ios'
import LogoSVG from '@/assets/icons/logo'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import React from 'react'
export default function Home() {


    return (
        <main className='w-screen h-screen bg-white select-none'>
            <div className='w-full max-w-[1440px] h-full flex flex-col  justify-center items-center gap-y-8'>
                <div className='w-[300px] h-[300px] '>
                    <LogoSVG width='100%' height='100%' />
                </div>

                <div className='font-black text-6xl text-black'>
                    TCube
                </div>

                <div className='flex justify-center gap-4 items-center' >
                    <div className='relative w-[194px] h-[75px] rounded-md cursor-pointer hover:scale-105 duration-500' onClick={() => {
                        window.open('https://docs.google.com/document/d/1ywO8C1rcLHeEpjexiSG-bcgg7ClmKVr6Lx4CW3q7iCU/edit?usp=sharing', '_blank');
                    }}>
                        <Image src={"/images/google-play-badge.png"} fill alt="Google Play Store" />
                    </div>
                    <div className='w-[194px] h-[50px] relative rounded-md cursor-pointer hover:scale-105 duration-500' onClick={() => {
                        window.open('https://docs.google.com/document/d/1ywO8C1rcLHeEpjexiSG-bcgg7ClmKVr6Lx4CW3q7iCU/edit?usp=sharing', '_blank');
                    }}>
                        <IosSVG width='100%' height='100%' />
                    </div>
                </div>
            </div>
            <Footer />
        </main >
    )
}

