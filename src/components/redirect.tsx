'use client'
import LoadingSVG from '@/assets/icons/loading'
import React, { useEffect } from 'react'

export const Redirect = ({ url }: { url: string }) => {
    useEffect(() => {
        window.location.replace(url);
    }, [])

    return (
        <div className='w-screen h-screen flex justify-center items-start  pl-20 text-white'>
            <LoadingSVG />
        </div>

    )
}
