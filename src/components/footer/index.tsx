"use client"
import LogoSVG from '@/assets/icons/logo';
import React from 'react'

export const Footer = () => {
    return (
        <div className='w-screen flex justify-center bg-white/75 py-2 '>
            <div
                className={`w-full max-w-[1440px] min-w-[280px] margin flex  items-center justify-center flex-col py-2 `}>
                <div className=' flex flex-col items-center h-full '>
                    <div className='w-20 h-20 flex flex-col justify-center items-center '>
                        <LogoSVG width="100%" height='100%' />
                    </div>
                    {" "}
                    <p className='text-black/75 text-base font-bold text-center mt-4'>
                        {`Qews, Copyright ©${new Date().getFullYear()}, `}
                        <br />All rights reserved
                    </p>

                </div>
                <div className='w-full h-1 bg-black/25 rounded-full my-4 px-40' />
                <div className='flex w-full justify-evenly gap-4 flex-wrap lg:flex-nowrap  '>

                    <div className='flex w-full justify-center  gap-8 '>
                        <div className=' text-black hover:text-primary-700 duration-300 cursor-pointer hover:scale-105' onClick={() => {
                            window.open('/games/tcube/legal/privacy', '_blank');

                        }}>
                            <a className=''>
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                    <div className='flex  w-full justify-center  gap-2 '>
                        <div className='text-black' onClick={() => {
                            window.open('https://docs.google.com/document/d/1ywO8C1rcLHeEpjexiSG-bcgg7ClmKVr6Lx4CW3q7iCU/edit?usp=sharing', '_blank');
                        }}>
                            Contact us:
                        </div>
                        <div className=' text-black hover:text-primary-700 duration-300 cursor-pointer hover:scale-105' onClick={() => {
                            window.location.href = "mailto:support@adr.et";
                        }}>
                            games@etlog.co
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
