import React from 'react';
import Image from 'next/image';
import Image1 from '@/../../public/image wrapper (3).png';
import Image2 from '@/../../public/image wrapper (4).png'
import Image3 from '@/../../public/image wrappermain.png'
import Link from 'next/link';


function Exhibition() {
  return (
    <>
      <main className='mx-14  max-sm:mx-3 max-lg:mx-0'>
        <section>
        <div className='flex items-center justify-between mb-24 max-sm:flex-col max-sm:items-start max-sm:gap-3  max-sm:mt-14'>
                <h1 className='text-7xl font-medium uppercase max-sm:text-5xl'>
                    Exhibition 
                    <span className='text-[#DB574D]'>'22</span></h1>
                    <Link href='/exhibition' >
                    <div className='flex items-center justify-center gap-2'>
                    <p className='font-normal'>View All</p>
                    <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.59082 8H30.5908" stroke="#101010"/>
<path d="M24.0908 1L31.0908 8L24.0908 15" stroke="#101010"/>
</svg>
                </div>
                    </Link>
               
            </div>
            <div className='flex items-center justify-around py-6 border-b border-b-zinc-400 max-sm:flex-col max-sm:items-start'>
                <div className='flex items-center justify-start gap-3 max-sm:flex-col'>
                    <Image src={Image1} width={200} height={200} alt='project 1' />
                    <div className='flex items-start justify-center flex-col gap-3'>
                        <div className='flex items-center justify-center font-normal gap-2'>
                            <h2>New York</h2>
                            <div className='w-4 h-[1px] bg-black' />
                            <h2>Towns Hall</h2>
                            <div className='w-4 h-[1px] bg-black' />
                            <h2>2022</h2>
                        </div>
                        <h2 className='text-5xl font-medium uppercase'>
                            Independent
                             <span className='text-[#DB574D] capitalize'> Beauty</span>
                             </h2>
                             <p className='text-sm  w-[85%] font-normal max-sm:w-full'>
                             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                             eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                             </p>
                    </div>

                </div>
                <div className='flex items-center justify-between  w-1/2 max-sm:w-full'>
                    <div className='flex items-center justify-center gap-3'>
                        <p className='text-lg text-[#DB574D]'>Buy Ticket</p>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.52002 16.48L16.1266 5.87338" stroke="#DB574D"/>
<path d="M6.58057 5.52002H16.4801V15.4195" stroke="#DB574D"/>
</svg>

                    </div>
                    <div className='flex flex-col items-end leading-[64px]'>
                        <p className='text-xl text-[#DB574D] font-medium'>Jun</p>
                        <p className='text-[5rem] text-[#DB574D] max-sm:text-4xl'>16</p>


                    </div>
                </div>
            </div>
            <div className='flex items-center justify-around py-6 border-b border-b-zinc-400 max-sm:flex-col max-sm:items-start'>
                <div className='flex items-center justify-start gap-3 max-sm:flex-col'>
                    <Image src={Image2} width={200} height={200} alt='project 1'/>
                    <div className='flex items-start justify-center flex-col gap-3'>
                        <div className='flex items-center justify-center font-normal gap-2'>
                            <h2>Berlin</h2>
                            <div className='w-4 h-[1px] bg-black' />
                            <h2>Kunsthalle</h2>
                            <div className='w-4 h-[1px] bg-black' />
                            <h2>2022</h2>
                        </div>
                        <h2 className='text-5xl font-medium uppercase'>
                        In Humanity We
                             <span className='text-[#DB574D] capitalize'> Trust</span>
                             </h2>
                             <p className='text-sm  w-[85%] font-normal max-sm:w-full'>
                             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                             eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                             </p>
                    </div>

                </div>
                <div className='flex items-center justify-between  w-1/2  max-sm:w-full'>
                    <div className='flex items-center justify-center gap-3'>
                        <p className='text-lg text-[#DB574D]'>Buy Ticket</p>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.52002 16.48L16.1266 5.87338" stroke="#DB574D"/>
<path d="M6.58057 5.52002H16.4801V15.4195" stroke="#DB574D"/>
</svg>

                    </div>
                    <div className='flex flex-col items-end leading-[64px]'>
                        <p className='text-xl text-[#DB574D] font-medium'>Mar</p>
                        <p className='text-[5rem] text-[#DB574D] max-sm:text-4xl'>02</p>


                    </div>
                </div>
            </div>
            <div className='flex items-center justify-around py-6 max-sm:flex-col max-sm:items-start'>
                <div className='flex items-center justify-start gap-3 max-sm:flex-col'>
                    <Image src={Image3} width={200} height={200} alt='project 1' />
                    <div className='flex items-start justify-center flex-col gap-3'>
                        <div className='flex items-center justify-center font-normal gap-2'>
                            <h2>Berlin</h2>
                            <div className='w-4 h-[1px] bg-black' />
                            <h2>Kunsthalle</h2>
                            <div className='w-4 h-[1px] bg-black' />
                            <h2>2022</h2>
                        </div>
                        <h2 className='text-5xl font-medium uppercase'>
                        Berlin AT
                             <span className='text-[#DB574D] capitalize'> Night</span>
                             </h2>
                             <p className='text-sm  w-[85%] font-normal max-sm:w-full'>
                             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                             eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                             </p>
                    </div>

                </div>
                <div className='flex items-center justify-between  w-1/2  max-sm:w-full'>
                    <div className='flex items-center justify-center gap-3'>
                        <p className='text-lg text-[#DB574D]'>Buy Ticket</p>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.52002 16.48L16.1266 5.87338" stroke="#DB574D"/>
<path d="M6.58057 5.52002H16.4801V15.4195" stroke="#DB574D"/>
</svg>

                    </div>
                    <div className='flex flex-col items-end leading-[64px]'>
                        <p className='text-xl text-[#DB574D] font-medium'>Feb</p>
                        <p className='text-[5rem] text-[#DB574D] max-sm:text-4xl'>01</p>


                    </div>
                </div>
            </div>
        </section>
      </main>
    </>
  )
}

export default Exhibition
