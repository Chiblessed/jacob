import React from 'react';
import Image from 'next/image';
import Image1 from '@/../../public/image wrapper (3).png';
import Image2 from '@/../../public/image wrapper (4).png'
import Image3 from '@/../../public/image wrappermain.png';
import Image4 from '@/../../public/exhibition1.png';
import Image5 from '@/../../public/exhibition2.png';
import Image6 from '@/../../public/exhibition3.png';
import Link from 'next/link';
import WorkTogether from '@/component/work-together';




function Exhibition() {
  return (
    <>
      <main  className='mx-14 h-full max-sm:mx-4'>
 <section>
    <div className='flex flex-col items-center justify-center'>
    <h2 className='text-[9rem] max-sm:text-6xl font-medium text-[#DB574D] leading-[9rem]'>
                        Exhibitions
                    </h2>
                    <p className='text-base w-[35%] text-center max-sm:w-full'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt.
                    </p>
                    <div className='flex items-end justify-end mt-10'>
        <svg className='relative top-4'
         width="21" height="100" viewBox="0 0 21 164" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.834 154L19.441 152.57L11.834 160.15L11.834 0L9.83398 0L9.83398 160.15L2.26098 152.57L0.833984 154L10.834 164L20.834 154Z" fill="#DB574D"/>
</svg>
<p className='font-medium w-24 mt-7'>Check Out the Dates</p>
        </div>
        </div>
        <div className='flex items-center justify-between mb-2 mt-32'>
                <h1 className='text-5xl font-medium uppercase'>
                    Current 
                    <span className='text-[#DB574D]'> Exhibition</span></h1>
                
            </div>
             <Link href={{
                    pathname: '/exhibition/details',
                    query: { img: '/exhibitdet1.png' ,
                        title: 'Independent Beauty',
            
                    },
                  }} >
    <div 
            className='flex items-center justify-around py-6 border-b border-b-zinc-400 max-sm:flex-col max-sm:items-start'>
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
                        <p className='text-[5rem] text-[#DB574D] max-sm:text-5xl'>16</p>


                    </div>
                </div>
            </div>
                  </Link>
        
                  <Link href={{
                    pathname: '/exhibition/details',
                    query: { img: '/exhibitdet2.png' ,
                        title: ' In Humanity We Trust',
            
                    },
                  }} > 
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
                <div className='flex items-center justify-between  w-1/2 max-sm:w-full'>
                    <div className='flex items-center justify-center gap-3'>
                        <p className='text-lg text-[#DB574D]'>Buy Ticket</p>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.52002 16.48L16.1266 5.87338" stroke="#DB574D"/>
<path d="M6.58057 5.52002H16.4801V15.4195" stroke="#DB574D"/>
</svg>

                    </div>
                    <div className='flex flex-col items-end leading-[64px]'>
                        <p className='text-xl text-[#DB574D] font-medium'>Mar</p>
                        <p className='text-[5rem] text-[#DB574D] max-sm:text-5xl'>02</p>


                    </div>
                </div>
            </div>
</Link>
<Link href={{
                    pathname: '/exhibition/details',
                    query: { img: '/image wrappermain.png' ,
                        title: ' Berlin AT Night',
            
                    },
                  }} > 
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
                <div className='flex items-center justify-between  w-1/2 max-sm:w-full'>
                    <div className='flex items-center justify-center gap-3'>
                        <p className='text-lg text-[#DB574D]'>Buy Ticket</p>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.52002 16.48L16.1266 5.87338" stroke="#DB574D"/>
<path d="M6.58057 5.52002H16.4801V15.4195" stroke="#DB574D"/>
</svg>

                    </div>
                    <div className='flex flex-col items-end leading-[64px]'>
                        <p className='text-xl text-[#DB574D] font-medium'>Feb</p>
                        <p className='text-[5rem] text-[#DB574D] max-sm:text-5xl'>01</p>


                    </div>
                </div>
            </div>
</Link>
            <div className='flex items-center justify-between mb-2 mt-32'>
                <h1 className='text-5xl font-medium uppercase'>
                    Past 
                    <span className='text-[#DB574D]'> Exhibition</span></h1>
                
            </div>
            <Link href={{
                    pathname: '/exhibition/details',
                    query: { img: '/exhibition1.png' ,
                        title: ' Independent Beauty',
            
                    },
                  }} > 
            <div className='flex items-center justify-around py-6 border-b border-b-zinc-400 max-sm:flex-col max-sm:items-start'>
                <div className='flex items-center justify-start gap-3 max-sm:flex-col'>
                    <Image src={Image4} width={200} height={200} alt='project 1' />
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
                        <p className='text-[5rem] text-[#DB574D] max-sm:text-5xl'>16</p>


                    </div>
                </div>
            </div>
            </Link>
            <Link href={{
                    pathname: '/exhibition/details',
                    query: { img: '/exhibition2.png' ,
                        title: 'In Humanity We Trust',
            
                    },
                  }} > 
            <div className='flex items-center justify-around py-6 border-b border-b-zinc-400 max-sm:flex-col max-sm:items-start'>
                <div className='flex items-center justify-start gap-3 max-sm:flex-col'>
                    <Image src={Image5} width={200} height={200} alt='project 1'/>
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
                <div className='flex items-center justify-between  w-1/2 max-sm:w-full'>
                    <div className='flex items-center justify-center gap-3'>
                        <p className='text-lg text-[#DB574D]'>Buy Ticket</p>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.52002 16.48L16.1266 5.87338" stroke="#DB574D"/>
<path d="M6.58057 5.52002H16.4801V15.4195" stroke="#DB574D"/>
</svg>

                    </div>
                    <div className='flex flex-col items-end leading-[64px]'>
                        <p className='text-xl text-[#DB574D] font-medium'>Mar</p>
                        <p className='text-[5rem] text-[#DB574D] max-sm:text-5xl'>02</p>


                    </div>
                </div>
            </div>
            </Link>
            <Link href={{
                    pathname: '/exhibition/details',
                    query: { img: '/exhibition3.png' ,
                        title: '  Berlin AT Night',
            
                    },
                  }} > 
            <div className='flex items-center justify-around py-6 mb-40 max-sm:flex-col max-sm:items-start'>
                <div className='flex items-center justify-start gap-3 max-sm:flex-col'>
                    <Image src={Image6} width={200} height={200} alt='project 1' />
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
                <div className='flex items-center justify-between  w-1/2 max-sm:w-full'>
                    <div className='flex items-center justify-center gap-3'>
                        <p className='text-lg text-[#DB574D]'>Buy Ticket</p>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.52002 16.48L16.1266 5.87338" stroke="#DB574D"/>
<path d="M6.58057 5.52002H16.4801V15.4195" stroke="#DB574D"/>
</svg>

                    </div>
                    <div className='flex flex-col items-end leading-[64px]'>
                        <p className='text-xl text-[#DB574D] font-medium'>Feb</p>
                        <p className='text-[5rem] text-[#DB574D] max-sm:text-5xl'>01</p>


                    </div>
                </div>
            </div>
            </Link>

            <WorkTogether />
        </section>
      </main>
    </>
  )
}

export default Exhibition
