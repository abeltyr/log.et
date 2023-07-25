'use client'
import LoadingSVG from '@/assets/icons/loading'
import React, { useEffect } from 'react'

export const Redirect = ({ article }: { article: any }) => {
    // useEffect(() => {
    //     console.log("Redirect", article)

    //     window.location.replace(`https://etlog.co/article/${article.article.id}`);
    // }, [])

    return (
        <div className='w-screen h-screen flex justify-center items-start  pl-20 text-white'>
            <LoadingSVG />
        </div>

    )
}
