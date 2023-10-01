

import IosSVG from '@/assets/icons/ios'
import LogoSVG from '@/assets/icons/logo'
import { Footer } from '@/components/footer'
import { Metadata, } from 'next'
import Image from 'next/image'
import React from 'react'


export async function generateMetadata(
): Promise<Metadata> {
    return {
        title: 'Qews gaming',
        openGraph: {
            title: 'Qews gaming',
            description: `Tcube: Tic Tac Toe reimagined. Dive into interconnected mini-games where every move sets the stage for your opponent. Master the strategy, challenge your skills, and redefine your Tic Tac Toe experience. Are you up for the Tcube challenge?!`,
            locale: 'en_US',
        },
        description: `Tcube: Tic Tac Toe reimagined. Dive into interconnected mini-games where every move sets the stage for your opponent. Master the strategy, challenge your skills, and redefine your Tic Tac Toe experience. Are you up for the Tcube challenge?!`,
        generator: 'Qews',
        applicationName: 'Qews',
        referrer: 'origin-when-cross-origin',
        colorScheme: 'dark',
        publisher: 'Qews',
        robots: {
            follow: true,
            index: true
        },
    }
}

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

                <div className='flex justify-center gap-x-10 md:gap-4 gap-y-4 items-center flex-wrap' >
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.qews.TCube" className='relative w-[200px] md:w-[194px] h-[80px] md:h-[75px] rounded-md cursor-pointer hover:scale-105 duration-500' >
                        <Image src={"/images/google-play-badge.png"} fill alt="Google Play Store" />
                    </a>
                    <a target="_blank" href="https://apps.apple.com/app/t-cube/id6467569235" className='w-[200px] md:w-[194px] h-[55px] md:h-[50px] relative rounded-md cursor-pointer hover:scale-105 duration-500' >
                        <IosSVG width='100%' height='100%' />
                    </a>
                </div>
            </div>
            <Footer />
        </main >
    )
}

