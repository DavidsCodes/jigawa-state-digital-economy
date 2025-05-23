'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import JGLogo from '@/app/assets/images/jg-logo-white.png'
import jictde from "@/app/assets/images/jictde.png"
import Link from 'next/link'
// import homeBanner from '@/app/assets/images/home-banner.png'
import homeBanner1 from '@/app/assets/images/banner.png'
import Image from 'next/image'


const headlines = [
  {
    title: "Transforming Jigawa State Digital Economy",
    subtitle: "Empowering the future of our state"
  },
  {
    title: "Improving transparency and accountability",
    subtitle: "Innovative solutions for a better tomorrow"
  },
  {
    title: "Educating and empowering the youth",
    subtitle: "Building a brighter future for all"
  }
]

export default function TextBannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + headlines.length) % headlines.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(goToNext, 8000) 
    return () => clearInterval(timer)
  }, [goToNext])

  return (
    <div
    style={{
        backgroundImage: `url(${homeBanner1.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}

  
    className="w-full  h-[90vh] bg-blend-multiply flex md:items-start bg-right items-center justify-center text-center md:text-start mt-10 text-green-900">
      <div className="container mx-auto px-4 space-y-6 flex flex-col py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 justify-center h-full md:grid-cols-3 gap-10 items-center">
          <div className="space-y-4 flex bg-white/80 col-span-2 px-10 py-6 shadow-sm flex-col">
            <div className=" w-full ">
                <Image src={jictde} alt='' className=' h-32 object-center object-contain md:object-left' />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="space-y-2"
              >
                <motion.h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                  layoutId="headline-title"
                >
                  {headlines[currentIndex].title}
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-gray-800"
                  layoutId="headline-subtitle"
                >
                  {headlines[currentIndex].subtitle}
                </motion.p>
              </motion.div>
            </AnimatePresence>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <div className="flex flex-col md:items-start space-y-3 w-full justify-center md:justify-start ">
               <div className="space-x-6 flex">
               <button 
                  onClick={goToPrevious}
                  className="p-2 bg-transparent border-green-500 border hover:text-white rounded-full hover:bg-green-500 transition duration-300"
                  aria-label="Previous headline"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button 
                  onClick={goToNext}
                  className="p-2 bg-transparent border-green-500 border hover:text-white rounded-full hover:bg-green-500 transition duration-300"
                  aria-label="Next headline"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
               </div>
                <Link href={'/informatics-applications'} className=" rounded-full px-6 py-2 max-w-max hover:text-white text-white bg-green-900 hover:bg-green-700 transition duration-300 font-semibold">
                  Our Empowerment Program
                </Link>
              </div>
            </motion.div>
            <div className="">
            
           </div>

          </div>
          
          <div className="hidden md:block">
           <div className="">
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}