'use client' 
import React from 'react'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Image1 from '@/../../public/projectdet5.jpg';
import Image2 from '@/../../public/projectdet1.jpg';
import Image3 from '@/../../public/projectdet2.jpg';
import Image4 from '@/../../public/projectdet4.jpg';
import Image5 from '@/../../public/projectdet3.jpg';
import Image6 from '@/../../public/image wrapper.png';





function ProjectDetails() {
    const searchParams = useSearchParams();
    const img = searchParams.get('img');
    const title = searchParams.get('title');
  
    
  return (
    <>
      <main className='mx-14 h-full  max-sm:mx-4 '>
        <section className='relative '>
        <div className='flex flex-col items-center justify-center relative'>
        <Image src={img} alt='project' width={600} height={600}  />
        <h1 className='text-[8rem] max-sm:text-7xl max-sm:leading-20 w-[70%] text-center leading-32  font-medium mb-4 text-[#DB574D] relative bottom-32 max-sm:bottom-14'>{title}</h1>
        </div>
        <div className='flex items-start justify-end  w-[38rem] max-sm:w-full gap-6 relative left-[50%] max-lg:left-0 max-sm:left-0 max-sm:flex-col'>
          <h2 className='font-medium text-3xl uppercase'>About</h2>
          <div className='font-medium'>
          <p className=' '>
          Massa vitae tortor condimentum lacinia quis vel eros donec. 
          In fermentum et sollicitudin ac orci phasellus egestas tellus 
          rutrum.
          </p>
           <p className='py-3'> Congue nisi vitae suscipit tellus mauris a diam maecenas. 
          Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. 
           </p> 
           <p>
           Sit amet aliquam id diam maecenas ultricies mi eget. 
          Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.
          </p>
          </div>
          

        </div>
        <div className='flex items-start justify-end  w-[38rem]  max-sm:w-full gap-6 relative left-[50%] max-lg:left-0 mt-8 max-sm:left-0 max-sm:flex-col'>
          <h2 className='font-medium text-3xl uppercase'>Details</h2>
          <div className='flex flex-col w-full'>
            <div className='flex items-center justify-between border-b border-gray-200 pb-4'>
              <p className='text-xl text-[#DB574D] uppercase'>Year</p>
              <p className='text-xl font-medium'>2022</p>
            </div>
            <div className='flex items-center justify-between border-b border-gray-200 py-4'>
              <p className='text-xl text-[#DB574D] uppercase'>Service</p>
              <p className='text-xl capitalize font-medium'>Photo shooting</p>
            </div>
            <div className='flex items-center justify-between  py-4'>
              <p className='text-xl text-[#DB574D] uppercase'>Client</p>
              <p className='text-xl capitalize font-medium'>Jonathan Åberg</p>
            </div>

          </div>
          

        </div>
        <div className='flex items-center justify-center gap-24 mt-36 max-sm:flex-col max-lg:flex-col'>
        <Image src={Image1} alt='project' width={600} height={600}  />
        <Image src={Image2} alt='project' width={400} height={400}  />
        </div>
        <Image src={Image3} alt='project' width={1200} height={400} className='h-1/2 my-14 mx-auto'  />
        <div className='flex items-center justify-center gap-24 mt-20 max-sm:flex-col max-lg:flex-col'>
        <Image src={Image4} alt='project' width={400} height={400}  />
        <Image src={Image5} alt='project' width={600} height={600}  />
        </div>
        
          <div className='flex flex-col items-center justify-center mt-44 relative  '>
          <h2 className='text-center text-4xl font-medium uppercase'>
          Next Project</h2>
          <h2  className='text-center text-[9rem] max-sm:text-8xl max-sm:leading-20 max-sm:py-4 leading-32 font-medium text-[#DB574D]  capitalize'>
            Fashion <br />
            Week
          </h2>
          <Image src={Image6} alt='project' width={500} height={500}  className='relative bottom-[3.5rem] max-sm:bottom-0 -z-10' />
          <div className='group hover:bg-[#DB574D] transition-all duration-200 border-2 border-[#DB574D] relative bottom-32 max-sm:bottom-14 right-3 w-40  py-3 rounded-full cursor-pointer'>
            <button className='group-hover:cursor-pointer group-hover:left-2 bg-[#DB574D] rounded-full w-36 px-5 relative right-2 text-xl text-white py-14 uppercase'>Discover </button>
          </div>
          </div>
 

        </section>
      </main>
    </>
  )
}

export default ProjectDetails
