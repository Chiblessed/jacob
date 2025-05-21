'use client'
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import React from 'react';
import Image1 from '@/../../public/heroimage.png';
import Image2 from '@/../../public/homeimage2.png';
import Service from './service';





function Hero() {

  return (
    <>
    <main  className=' h-full pb-44 pt-10 max-sm:mx-4 '>
      <section className='flex items-start justify-center relative max-sm:flex-col-reverse'>
        <div className='flex flex-col relative'>
        <h1  className='text-[9.5rem] max-sm:text-6xl sm:text-[8rem] sm:leading-[90px] max-sm:leading-14 leading-[160px] relative font-medium mt-20 text-[#DB574D] z-10 max-sm:-mt-8  left-[18%] max-sm:left-0'>
          Jacob <br />
          Grønberg 
        </h1>
        <h2 className='text-[60px] max-sm:text-4xl font-thin leading-[65px] max-sm:leading-9 max-sm:py-3 text-black z-10 relative left-[23%] max-sm:left-0'>
          PHOTOGRAPHER <br />
          <span className='pl-24 max-sm:pl-0'>& VISUAL ARTIST</span>
        </h2>
        <div className='flex items-end justify-center top-32 max-sm:top-5 relative right-10 max-sm:right-0 sm:right-0'>
          <div>
            <Image src={Image2} width={200} height={200} alt='home image' />
            <p className='font-medium text-black text-lg py-3'>Hi, I'm Jacob</p>
          </div>
          <div className='group hover:bg-[#DB574D] transition-all duration-200 border-2 border-[#DB574D] relative top-7 right-3 w-40  py-2 rounded-full cursor-pointer'>
            <button className='group-hover:cursor-pointer group-hover:left-2 bg-[#DB574D] rounded-full w-36 px-5 relative right-2 text-xl text-white py-10'>WORK WITH ME </button>
          </div>
        </div>
        </div>
        <div className="relative right-[7%] -z-20 max-sm:right-0 max-lg:hidden">
        <Image src={Image1} alt='hero image 2' width={800} height={400} className='max-sm:border-2 max-sm:border-red-500 max-sm:hidden '/>
        <div 
        className='flex items-start justify-end cursor-pointer max-sm:hidden'>
        <svg className='relative -top-14 -z-20'
         width="21" height="164" viewBox="0 0 21 164" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.834 154L19.441 152.57L11.834 160.15L11.834 0L9.83398 0L9.83398 160.15L2.26098 152.57L0.833984 154L10.834 164L20.834 154Z" fill="#DB574D"/>
</svg>
<p className='font-medium w-24 mt-7'>Scroll Down & Explore</p>
        </div>
        </div>
        </section>     
    </main>

    </>
  )
}

export default Hero





