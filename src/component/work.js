import React from 'react';
import Image from 'next/image';
import Image1 from '@/../../public/image wrapper (1).png';
import Image2 from '@/../../public/image wrapper (2).png';
import Image3 from '@/../../public/image wrapper.png';
import Image4 from '@/../../public/heroimage.png';
import Link from 'next/link';


function Work() {
  return (
    <>
    <main className='mx-14 mt-20 h-full relative  max-sm:mx-4 max-sm:w-full max-lg:mx-0'>
        <section className='relative'>
            <div className='flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-3'>
                <h1 className='text-7xl font-medium max-sm:text-5xl'>LATEST <span className='text-[#DB574D]'>Work</span></h1>
                <Link href='/project'>
                <button  className='flex items-center justify-center gap-2 cursor-pointer relative group'>
               <p className='font-normal'>View All</p>
                    <svg className=''
                     width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.59082 8H30.5908" stroke="#101010"/>
<path d="M24.0908 1L31.0908 8L24.0908 15" stroke="#101010"/>
</svg>
               </button>
               </Link>
               
               
            </div>
            <div className='flex items-start justify-between gap-20 mt-20 relative max-sm:flex-col'>
              <div className='flex flex-col items-start '>
                <h2 className='text-4xl font-medium  w-[17rem] uppercase'>
                Dancing in Black & 
                <span className='text-[#DB574D] capitalize'> White</span>
                </h2>
                <Image src={Image4} width={600} height={600} alt='project 1'/>
<h2 className='text-base font-light pt-5'>
  New York
</h2>
<h2 className='text-base font-light'>October 2021</h2>
              </div>
<div className='flex items-center justify-start flex-col relative gap-20'>
  <div className='flex flex-col items-start '>
  <h2 className='text-4xl font-medium  uppercase'>
                Style & 
                <span className='text-[#DB574D] capitalize'> Fashion</span>
                </h2>
                <Image src={Image3} width={400} height={400} alt='project 2'/>
                <h2 className='text-base font-light pt-5'>
  New York
</h2>
<h2 className='text-base font-light'>October 2021</h2>

  </div>


  <div className='flex flex-col items-start '>
  <h2 className='text-4xl font-medium  capitalize '>
                One
                <span className='text-[#DB574D] capitalize'> Eye</span>
                </h2>
                <Image src={Image1} width={300} height={300} alt='project 3'/>
                <h2 className='text-base font-light pt-5'>
  New York
</h2>
<h2 className='text-base font-light'>October 2021</h2>

  </div>


 

</div>

            </div>
            <div className='flex flex-col items-start relative left-24 bottom-24 max-sm:left-0 max-sm:bottom-0 max-sm:mt-14'>
  <h2 className='text-4xl font-medium  uppercase'>
                Week 
                <span className='text-[#DB574D] capitalize'> Fashion</span>
                </h2>
                <Image src={Image2} width={300} height={300} alt='project 4'/>
                <h2 className='text-base font-light pt-5'>
  New York
</h2>
<h2 className='text-base font-light'>October 2021</h2>

  </div>

        </section>
    </main>
    </>
  )
}

export default Work