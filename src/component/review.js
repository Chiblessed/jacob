'use client'
import React, {useEffect, useRef} from 'react';
import Image from 'next/image';
import Image1 from '@/../../public/image wrapper (5).png';
import Image2 from '@/../../public/review2.png';
import Image3 from '@/../../public/review1.png';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);



function Review() {
const containerRef = useRef(null);
  const leftRef = useRef(null);
    const rightRef = useRef(null);
//() => `+=${rightRef.current.scrollHeight}`
  useEffect(() => {
  let getMedia = gsap.matchMedia();
  getMedia.add("(min-width: 800px)", () => {
   ScrollTrigger.create({
  trigger: containerRef.current,
    start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    pin: leftRef.current,
      //markers: true
  })

})
getMedia.revert();
  }, [])
    return (
    <>
      <main ref={containerRef} className='mx-4  max-sm:mx-4 mt-20  max-lg:mx-0'>
        <section className='flex items-start justify-between gap-10 max-lg:flex-col max-lg:min-h-0 sticky top-0 min-h-[200vh] max-sm:flex-col max-sm:min-h-0 max-sm:gap-0'>
            <div ref={leftRef} className=' leftRef flex flex-col items-start  h-screen sm:h-1/2  max-sm:h-1/2'>
                <h2 className='text-6xl font-medium uppercase  w-[20rem] max-sm:w-full  max-sm:text-4xl '>
                    What my Client
                     <span className='text-[#DB574D] capitalize max-sm:pl-1'>
                         Say
                    </span>
                </h2>
                <h2 className='uppercase text-4xl py-3 w-[38rem] font-medium max-sm:w-full'>
                    Worked with over
                    <span className='text-[#DB574D]'> 50 clients </span>
                    around the world
                </h2>
                <button 
                className='mt-3 cursor-pointer px-3 py-3 border border-[#DB574D] rounded-3xl gap-3 text-[#DB574D] flex items-center justify-center'>
                    Work with me
                    <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8H30" stroke="#DB574D"/>
<path d="M23.5 1L30.5 8L23.5 15" stroke="#DB574D"/>
</svg>

                </button>
            </div>
            <div ref={rightRef} className='flex flex-col items-start relative w-[50%] max-sm:w-full max-lg:w-full'>
              {/** Review 1 */}
              <div className='flex items-start border-b border-b-gray-400 gap-5 py-10 max-sm:flex-col'>
<Image src={Image1} width={200} height={200} alt='customer image' />
<div className='flex flex-col items-start'>
  <div className='flex items-center justify-start gap-4 pb-4'>
  <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2775 0.5C5.61674 0.5 0 5.44273 0 15.3282V51.5H19.7709V20.4956H11.0088V15.1035C11.0088 11.0595 12.5815 10.3855 15.5022 10.3855H19.9956V0.5H15.2775ZM46.2819 0.5C36.6211 0.5 31.0044 5.44273 31.0044 15.3282V51.5H50.7753V20.4956H42.0132V15.1035C42.0132 11.0595 43.3612 10.3855 46.5066 10.3855H51V0.5H46.2819Z" fill="#DB574D"/>
</svg>
    <h2 className='text-3xl w-[70%] font-medium leading-[30px] max-sm:w-full  max-sm:text-2xl'>
    I Really Enjoyed Working With Jacob
    </h2>
  </div>
<p className='font-medium pb-4 leading-5'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
 incididunt ut labore et dolore magna aliqua.</p>
 <p className='font-medium pb-6 leading-5'> Enim lobortis scelerisque fermentum dui 
faucibus in ornare quam viverra. Laoreet sit amet cursus sit amet dictum sit amet justo.
</p>
<div className='flex items-center justify-center gap-3 font-medium'>
  <p>
  Michelle Lindstrøm
  </p>
  <div className='w-4 h-[1px] bg-black' />
  <p>
  Photoshoot
  </p>
</div>
</div>
              </div>

               {/** Review 2 */}
               <div className='flex items-start border-b border-b-gray-400 gap-5 py-10 max-sm:flex-col'>
<Image src={Image2} width={200} height={200} alt='customer image' />
<div className='flex flex-col items-start'>
  <div className='flex items-center justify-start gap-4 pb-4'>
  <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2775 0.5C5.61674 0.5 0 5.44273 0 15.3282V51.5H19.7709V20.4956H11.0088V15.1035C11.0088 11.0595 12.5815 10.3855 15.5022 10.3855H19.9956V0.5H15.2775ZM46.2819 0.5C36.6211 0.5 31.0044 5.44273 31.0044 15.3282V51.5H50.7753V20.4956H42.0132V15.1035C42.0132 11.0595 43.3612 10.3855 46.5066 10.3855H51V0.5H46.2819Z" fill="#DB574D"/>
</svg>
    <h2 className='text-3xl w-[70%] font-medium leading-[30px] max-sm:w-full max-sm:text-2xl'>
    I Really Enjoyed Working With Jacob
    </h2>
  </div>
<p className='font-medium pb-4 leading-5'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
 incididunt ut labore et dolore magna aliqua.</p>
 <p className='font-medium pb-6 leading-5'> Enim lobortis scelerisque fermentum dui 
faucibus in ornare quam viverra. Laoreet sit amet cursus sit amet dictum sit amet justo.
</p>
<div className='flex items-center justify-center gap-3 font-medium'>
  <p>
  Jannis Jackson
  </p>
  <div className='w-4 h-[1px] bg-black' />
  <p>
  Art Direction
  </p>
</div>
</div>
              </div>

               {/** Review 3 */}
               <div className='flex items-start border-b border-b-gray-400 gap-5 py-10 max-sm:flex-col'>
<Image src={Image3} width={200} height={200} alt='customer image' />
<div className='flex flex-col items-start'>
  <div className='flex items-center justify-start gap-4 pb-4'>
  <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2775 0.5C5.61674 0.5 0 5.44273 0 15.3282V51.5H19.7709V20.4956H11.0088V15.1035C11.0088 11.0595 12.5815 10.3855 15.5022 10.3855H19.9956V0.5H15.2775ZM46.2819 0.5C36.6211 0.5 31.0044 5.44273 31.0044 15.3282V51.5H50.7753V20.4956H42.0132V15.1035C42.0132 11.0595 43.3612 10.3855 46.5066 10.3855H51V0.5H46.2819Z" fill="#DB574D"/>
</svg>
    <h2 className='text-3xl w-[70%] font-medium leading-[30px] max-sm:w-full max-sm:text-2xl'>
    I Really Enjoyed Working With Jacob
    </h2>
  </div>
<p className='font-medium pb-4 leading-5'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
 incididunt ut labore et dolore magna aliqua.</p>
 <p className='font-medium pb-6 leading-5'> Enim lobortis scelerisque fermentum dui 
faucibus in ornare quam viverra. Laoreet sit amet cursus sit amet dictum sit amet justo.
</p>
<div className='flex items-center justify-center gap-3 font-medium'>
  <p>
  Daniela Berg
  </p>
  <div className='w-4 h-[1px] bg-black' />
  <p>
  Video Editing
  </p>
</div>
</div>
              </div>

            </div>
        </section>
      </main>
    </>
  )
}

export default Review
