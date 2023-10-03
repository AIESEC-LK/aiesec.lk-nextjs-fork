'use client'
import React, {useEffect, useState} from 'react'
import anime from 'animejs'
import Image from 'next/image'
import AiesecLogo from './Icons/bluelogo.png';
import AiesecGif from './Icons/aiesec-animation.gif';


export default function SplashScreen({finishLoading}) {
    const[isMounted, setIsMounted] = useState(false)
    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading()
        })
        loader.add({
            targets: "#logo",
            delay: 0,
            scale: 3,
            duration: 2000,
            easing: "easeInOutExpo",

        })
    }

    useEffect(()=>{
        const timeout = setTimeout(() => {
            setIsMounted(true)
        }, 10)
        animate()
        return () => clearTimeout(timeout)

    },[])


  return (
    <div className='flex h-screen items-center justify-center bg-aiesec-blue'
    isMounted={isMounted}>
        <img id="logo" src={AiesecLogo} alt="animation" width={60} />
    </div>
  )
}
