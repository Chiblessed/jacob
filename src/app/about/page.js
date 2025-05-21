'use client'
import React, {useEffect, useRef} from 'react';
import Image from 'next/image';
import Image2 from '@/../../public/about.png';
import WorkTogether from '@/component/work-together';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

function About() {
const containerRef = useRef(null);
const sectionRef = useRef(null);
const textRef = useRef(null);
const aboutSectionRef = useRef(null);
const experienceRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Container animation 
      tl.from(containerRef.current, {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out',
      });

      // Text animation
      gsap.from(textRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
      });

     
      gsap.from(aboutSectionRef.current, {
        y: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: 'top 60%',
          end: 'top 90%',
          scrub: true,
       // markers: true, 
        },
      });

        
          let getMedia = gsap.matchMedia();
       getMedia.add("(min-width: 800px)", () => {
      gsap.from(experienceRef.current, {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        rotate: 360,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: experienceRef.current,
          start: 'top 60%',
          end: 'top 90%',
          scrub: true,
     // markers: true, 
        },
      });
    })
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main className='mx-14 max-sm:mx-4 '>
        <section ref={sectionRef}>
            <div ref={containerRef} className='flex max-sm:flex-col items-center justify-center gap-12 container relative mx-auto'>
<Image src={Image2} alt='Jacob' width={500} height={500} className=''  />
<div className='flex flex-col '>
    <h2 className='font-medium uppercase text-3xl  ' ref={textRef}>
        About
    </h2>
    <h1 ref={textRef}
    className='text-[9rem] max-sm:text-7xl max-sm:leading-14 max-sm:py-5 text text-center leading-[130px] relative font-medium mt-2 text-[#DB574D] z-10 max-sm:right-0  right-[30%]'>
          Jacob <br />
          Grønberg 
        </h1>

</div>
            </div>
            <div  ref={aboutSectionRef}
             className=' flex items-start justify-center mx-auto w-[80%] gap-36 pt-36 max-sm:flex-col max-sm:w-full'>
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
           <div ref={experienceRef}
            className='flex items-start justify-center mx-auto w-[90%] gap-24 pt-36 max-sm:flex-col max-sm:w-full max-sm:pt-10'>
          <h2 className='font-medium text-3xl uppercase'>Experiences</h2>
          <div className='flex flex-col w-full'>
            <div className='flex items-center justify-between border-b border-gray-300 pb-4'>
              <div className='flex flex-col'> 
                <p className='text-base font-normal uppercase'>
Art Director
                </p>
                <p  className='text-sm font-medium capitalize'>
Art Studio
                </p>
              </div>
              <p className='text-sm font-medium text-[#DB574D] uppercase flex items-center justify-center gap-3'>Okt 2020 
                <div className='w-5 h-[1px] bg-[#DB574D]' />
                 Currently</p>
            </div>
            <div className='flex items-center justify-between border-b border-gray-300 py-4'>
 <div className='flex flex-col'> 
                <p className='text-base font-normal uppercase'>
JURY
                </p>
                <p  className='text-sm font-medium capitalize'>
Awwards
                </p>
              </div>
                <p className='text-sm uppercase font-medium text-[#DB574D]'>June 2020</p>
            </div>
            <div className='flex items-center justify-between border-b border-gray-300 py-4'>
              <div className='flex flex-col'> 
                <p className='text-base font-normal uppercase'>
Photographer & Art director
                </p>
                <p  className='text-sm font-medium capitalize'>
Freelance
                </p>
              </div>
              <div className='flex items-center justify-center gap-3 text-[#DB574D]'>
              <p className='text-sm uppercase font-medium'>Okt 2019</p>
              <div  className='w-5 h-[1px] bg-[#DB574D]'/>
              <p className='text-sm uppercase font-medium flex items-center justify-center gap-4 text-[#DB574D]'>
             Sep 2020
              </p>
              </div>
            </div>
             <div className='flex items-center justify-between py-4'>
<div className='flex flex-col'> 
                <p className='text-base font-normal uppercase'>
Art Study
                </p>
                <p  className='text-sm font-medium capitalize'>
Harvard
                </p>
              </div>
 <p className='text-sm font-medium text-[#DB574D] uppercase flex items-center justify-center gap-3'>Jan 2016 
                <div className='w-5 h-[1px] bg-[#DB574D]' />
                 Sept 2019
                 </p>
                             </div>

          </div>
          

        </div>

        <div className='flex items-start justify-center mx-auto w-[90%] gap-24 pt-36 max-sm:flex-col max-sm:w-full max-sm:pt-10'>
          <h2 className='font-medium text-3xl uppercase'>Recognitions</h2>
          <div className='flex flex-col w-full'>
            <div className='flex items-center justify-between border-b border-gray-300 pb-4'>
              <div className='flex flex-col'> 
                <p className='text-base font-normal uppercase'>
Photography Portfoltio
                </p>
                <p  className='text-sm font-medium capitalize'>
Feb 2022
                </p>
              </div>
              <p className='text-sm font-medium text-[#DB574D] uppercase flex items-center justify-center gap-3'>
                Awwards 
                </p>
            </div>
            <div className='flex items-center justify-between border-b border-gray-300 py-4'>
 <div className='flex flex-col'> 
                <p className='text-base font-normal uppercase'>
Cover Photo
                </p>
                <p  className='text-sm font-medium capitalize'>
May 2021
                </p>
              </div>
                <p className='text-sm uppercase font-medium text-[#DB574D]'>Time Magazine</p>
            </div>
            <div className='flex items-center justify-between border-b border-gray-300 py-4'>
              <div className='flex flex-col'> 
                <p className='text-base font-normal uppercase'>
Design Portfolio
                </p>
                <p  className='text-sm font-medium capitalize'>
Dec 2020
                </p>
              </div>
              <p className='text-sm uppercase font-medium text-[#DB574D]'>Awwards</p>
              
            </div>
            

          </div>
          

        </div>

        <WorkTogether />
        </section>
      </main>
    </>
  )
}

export default About
