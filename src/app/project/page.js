'use client';
import React from 'react';
import Image from 'next/image';
import Image1 from '@/../../public/image wrapper (1).png';
import Image2 from '@/../../public/image wrapper (2).png';
import Image3 from '@/../../public/image wrapper.png';
import Image4 from '@/../../public/heroimage.png';
import Image5 from '@/../../public/project1.png';
import Image6 from '@/../../public/project2.png';
import Image7 from '@/../../public/project3.png';
import Link from 'next/link';
import WorkTogether from '@/component/work-together';


function Project() {

  return (
    <>
      <main className='mx-14 h-full max-sm:mx-4 '>
        <section>
            <div className='flex items-center justify-center gap-5 max-sm:flex-col'>
                <div className='flex flex-col '>
                    <h2 className='text-[9rem]  max-sm:text-7xl text-[#DB574D] leading-[9rem]'>
                        Projects
                    </h2>
                    <p className='font-medium w-[65%] leading-[30px] max-sm:w-full'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt.
                    </p>
                </div>
                <div className='group hover:bg-[#DB574D] transition-all duration-200 border-2 border-[#DB574D] relative top-0 right-0 w-40  py-2 rounded-full cursor-pointer'>
            <button
             className='group-hover:cursor-pointer group-hover:left-2 bg-[#DB574D] rounded-full w-36 px-5 relative right-2 text-xl text-white py-10'>
                Get in touch
                 </button>
          </div>

            </div>

             <div className='flex items-start justify-between gap-20 mt-20 relative max-sm:flex-col'>
                          <div className='flex flex-col items-start '>
                            <h2 className='text-4xl font-medium  w-[17rem] uppercase'>
                            Dancing in Black & 
                            <span className='text-[#DB574D] capitalize'> White</span>
                            </h2>
                            <div className="relative group w-fit">
  <Image
    src={Image4}
    width={600}
    height={600}
    alt="one eye"
    className="rounded-md"
  />
  <button
    className="absolute inset-[40%] flex items-center justify-center h-32 w-32 rounded-full bg-[#DB574D] text-white text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  >
    <Link href={{
        pathname: '/project/details',
        query: { img: '/heroimage.png' ,
            title: 'Dancing in Black & White',

        },
      }}>View</Link>
    
  </button>
</div> 
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
                            <div className="relative group w-fit">
  <Image
    src={Image3}
    width={400}
    height={400}
    alt="one eye"
    className="rounded-md"
  />
  <button
    className="absolute inset-[40%] flex items-center justify-center h-32 w-32 rounded-full bg-[#DB574D] text-white text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  >
     <Link href={{
        pathname: '/project/details',
        query: { img: '/image wrapper.png',
            title: 'Style & Fashion',
         },
      }}>View</Link>
  </button>
</div> 
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
                            <div className="relative group w-fit">
  <Image
    src={Image1}
    width={300}
    height={300}
    alt="one eye"
    className="rounded-md"
  />
  <button
    className="absolute inset-[40%] flex items-center justify-center h-32 w-32 rounded-full bg-[#DB574D] text-white text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  >
    <Link href={{
        pathname: '/project/details',
        query: { img: '/image wrapper (1).png' ,
            title: 'One Eye',
        },
      }}>View</Link>
  </button>
</div> 
                            <h2 className='text-base font-light pt-5'>
              New York
            </h2>
            <h2 className='text-base font-light'>October 2021</h2>
            
              </div>
            
            
             
            
            </div>
            
                        </div>
                        <div className='flex items-start justify-between relative mt-6 max-sm:flex-col max-sm:gap-4'>
                        <div className='flex flex-col items-start relative left-24 max-lg:left-0 max-sm:left-0'>
              <h2 className='text-4xl font-medium  uppercase'>
                            Week 
                            <span className='text-[#DB574D] capitalize'> Fashion</span>
                            </h2>
                            <div className="relative group w-fit">
  <Image
    src={Image2}
    width={300}
    height={300}
    alt="one eye"
    className="rounded-md"
  />
  <button
    className="absolute inset-[40%] flex items-center justify-center h-32 w-32 rounded-full bg-[#DB574D] text-white text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  >
    <Link href={{
        pathname: '/project/details',
        query: { img: '/image wrapper (2).png',
            title: 'Week Fashion',
         },
      }}>View</Link>
  </button>
</div> 
                            <h2 className='text-base font-light pt-5'>
              New York
            </h2>
            <h2 className='text-base font-light'>October 2021</h2>
            
              </div>
            <div className='flex items-center justify-start  relative gap-20'>
              <div className='flex flex-col items-start '>
              <h2 className='text-4xl font-medium  uppercase'>
                            Be 
                            <span className='text-[#DB574D] capitalize'> Silent</span>
                            </h2>
                            <div className="relative group w-fit">
  <Image
    src={Image5}
    width={500}
    height={500}
    alt="one eye"
    className="rounded-md"
  />
  <button
    className="absolute inset-[40%] flex items-center justify-center h-32 w-32 rounded-full bg-[#DB574D] text-white text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  >
    <Link href={{
        pathname: '/project/details',
        query: { img: '/project1.png',
            title: 'Be Silent',
         },
      }}>View</Link>
  </button>
</div> 
                            <h2 className='text-base font-light pt-5'>
              New York
            </h2>
            <h2 className='text-base font-light'>October 2021</h2>
            
              </div>
            
            
            
            
             
            
            </div>
            
                        </div>
                        <div className='flex items-start justify-between relative mt-10 max-sm:flex-col'>
                        <div className='flex flex-col items-start '>
              <h2 className='text-4xl font-medium  uppercase'>
              Cigarette 
                            <span className='text-[#DB574D] capitalize'> & Tobacco</span>
                            </h2>
                            <div className="relative group w-fit">
  <Image
    src={Image6}
    width={500}
    height={500}
    alt="one eye"
    className="rounded-md"
  />
  <button
    className="absolute inset-[40%] flex items-center justify-center h-32 w-32 rounded-full bg-[#DB574D] text-white text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  >
    <Link href={{
        pathname: '/project/details',
        query: { img: '/project2.png' ,
            title: 'Cigarette & Tobacco',
        },
      }}>View</Link>
  </button>
</div> 
                            <h2 className='text-base font-light pt-5'>
              New York
            </h2>
            <h2 className='text-base font-light'>October 2021</h2>
            
              </div>
            <div className='flex items-center justify-start  relative gap-20'>
              <div className='flex flex-col items-start '>
              <h2 className='text-4xl font-medium  uppercase'>
              Wonderful 
                            <span className='text-[#DB574D] capitalize'> Body</span>
                            </h2>
                            <div className="relative group w-fit">
  <Image
    src={Image7}
    width={400}
    height={400}
    alt="one eye"
    className="rounded-md"
  />
  <button
    className="absolute inset-[40%] flex items-center justify-center h-32 w-32 rounded-full bg-[#DB574D] text-white text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  >
    <Link href={{
        pathname: '/project/details',
        query: { img: '/project2.png',
            title: 'Wonderful Body',
         },
        
      }}>View</Link>
  </button>
</div> 
                            <h2 className='text-base font-light pt-5'>
              New York
            </h2>
            <h2 className='text-base font-light'>October 2021</h2>
            
              </div>
            
            
            
            
             
            
            </div>
            
                        </div>
                     
            <WorkTogether />
        </section>
      </main>
    </>
  )
}

export default Project
