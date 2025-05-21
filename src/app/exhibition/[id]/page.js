'use client';
import React from 'react'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import WorkTogether from '@/component/work-together';



function ExhibitDetails() {
     const searchParams = useSearchParams();
     const img = searchParams.get('img');
     const title = searchParams.get('title');
        
  return (
    <>
      <main className='mx-14 h-full max-sm:mx-4 '>
              <section className='relative '>
              <div className='flex flex-col items-center justify-center relative'>
              <h1 className='text-[8rem] max-sm:text-5xl max-sm:leading-12 w-[70%] text-center leading-32  font-medium mb-4 text-[#DB574D]  relative -bottom-20'>{title}</h1>
              <Image src={img} alt='project' width={500} height={500}  />
             </div>
             <div className='flex items-start justify-end gap-20 pt-32 max-sm:flex-col '>
<button className='border border-[#DB574D] text-[#DB574D] text-sm px-5 rounded-3xl py-3 flex items-center justify-center gap-3'>
  Get Tickets
  <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8H30" stroke="#DB574D"/>
<path d="M23.5 1L30.5 8L23.5 15" stroke="#DB574D"/>
</svg>

</button>
 <div className='flex flex-col  w-[38rem] max-sm:w-full gap-6 '>
          <h2 className='font-medium text-3xl uppercase'>About</h2>
          <div className='font-medium'>
          <p className=' '>
          Massa vitae tortor condimentum lacinia quis vel eros donec. 
          In fermentum et sollicitudin ac orci phasellus egestas tellus 
          rutrum. Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi 
           blandit cursus risus at ultrices mi tempus imperdiet.
          </p>
           <p className='py-3'> Sit amet aliquam id
            diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. 
            Varius quam quisque id diam vel quam elementum pulvinar. 
           </p> 
           <p>
           Nisi porta lorem mollis aliquam ut. Pulvinar pellentesque habitant 
           morbi tristique senectus et netus et malesuada. Eget nullam non nisi 
           est sit amet facilisis magna etiam. Et tortor at risus viverra
           adipiscing at in tellus integer. Mi sit amet mauris commodo quis imperdiet massa. </p>
          </div>
          

        </div>
        
             </div>
              <div className='flex flex-col  w-[38rem] gap-6 pt-20 relative left-[50%] max-sm:left-0 max-sm:w-full'>
          <h2 className='font-medium text-3xl uppercase'>Information</h2>
          <div className='flex flex-col w-full'>
            <div className='flex items-center justify-between border-b border-gray-300 pb-4'>
              <p className='text-base text-[#DB574D] capitalize'>Date</p>
              <p className='text-sm font-medium'>16 Jun 2022 - 18 Oct 2022</p>
            </div>
            <div className='flex items-center justify-between border-b border-gray-300 py-4'>
              <p className='text-base text-[#DB574D] capitalize'>Opening Hours</p>
              <p className='text-sm capitalize font-medium'>Monday to Saturday from 11 pm to 6 pm</p>
            </div>
            <div className='flex items-center justify-between border-b border-gray-300 py-4'>
              <p className='text-base text-[#DB574D] uppercase'>Location</p>
              <div className='flex flex-col'>
              <p className='text-sm capitalize font-medium'>Art Studio</p>
              <p className='text-sm capitalize font-medium flex items-center justify-center gap-4 text-[#DB574D]'>
                Get Directions
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.58984 16.4802L16.1964 5.87362" stroke="#DB574D"/>
<path d="M6.65039 5.52002H16.5499V15.4195" stroke="#DB574D"/>
</svg>
              </p>
              </div>
            </div>
             <div className='flex items-center justify-between py-4'>
              <p className='text-base text-[#DB574D] capitalize'>Address</p>
              <p className='text-sm capitalize font-medium'>Main Street 2, 12101 Berlin</p>
            </div>

          </div>
          

        </div>
        <WorkTogether />
              </section>
              </main>
    </>
  )
}

export default ExhibitDetails
