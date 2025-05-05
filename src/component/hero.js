import Image from 'next/image';
import React from 'react';
import Image1 from '@/../../public/heroimage.png';
import Image2 from '@/../../public/homeimage2.png';


function Hero() {
  return (
    <>
    <main className=''>
      <section className='flex items-start justify-center'>
        <div className='flex flex-col'>
        <h1 className='text-[12rem] leading-[160px] font-medium mt-20 text-red-600 z-10 relative left-[18%]'>
          Jacob <br />
          Grønberg 
        </h1>
        <h2 className='text-[60px] font-thin leading-[65px] text-black z-10 relative left-[36.5%]'>
          PHOTOGRAPHER <br />
          <span className='pl-24'>& VISUAL ARTIST</span>
        </h2>
        <div className='flex items-end justify-center mt-52 relative right-10'>
          <div>
            <Image src={Image2} width={200} height={200} alt='home image' />
            <p className='font-medium text-black text-lg py-3'>Hi, I'm Jacob</p>
          </div>
          <div className='group hover:bg-red-600 border-2 border-red-600 relative top-7 right-3 w-40  py-2 rounded-full cursor-pointer'>
            <button className='group-hover:cursor-pointer group-hover:left-2 bg-red-600 rounded-full w-36 px-5 relative right-2 text-xl text-white py-10'>WORK WITH ME </button>
          </div>
        </div>
        </div>
        <div className="relative right-[7%] -z-20">
        <Image src={Image1} alt='' width={800} height={200} className=''/>
        </div>
        </section>     
    </main>
    </>
  )
}

export default Hero





