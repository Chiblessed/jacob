'use client'
import { useEffect, useRef } from "react";
import Exhibition from "@/component/exhibition";
import Hero from "@/component/hero.js";
import Review from "@/component/review";
import Service from "@/component/service";
import Work from "@/component/work";
import WorkTogether from "@/component/work-together";
import gsap from "gsap";


export default function Home() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const mainRef = useRef(null);
    const heroRef = useRef(null);

  


  useEffect(() => {
          const tl = gsap.timeline();
    
          // Container animation for image
          tl.from(containerRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.5,
            delay: 0.2,
            ease: 'power4.out',
          });
           tl.from(sectionRef.current, {
            y: -30,
            opacity: 0,
            scale: 2,
            duration: 2,
            stagger: 1.5,
            delay:1.5,
            ease: 'power4.out',
          });
         
          tl.to(sectionRef.current, {
            scale: 10,
            duration: 1.6,
            stagger: 0.3,
            color: '#E5E5E5',
            delay:0.2,
            ease: 'power4.out',
          });
          
          
            
           tl.to(containerRef.current, {
            opacity: 0,
            zIndex: 0,
            delay:0.1,
            ease: 'power2.out',
          });
           tl.from(mainRef.current, {
           y: -100,
           duration: 1.9,
            opacity: 0,
            delay:0.2,
            ease: 'power2.out',
          });

         
   
  },[])
  return (
    <> 
<main ref={containerRef} className="bg-[#E5E5E5] h-[120vh] absolute top-0 right-0 w-[100%] z-50 overflow-hidden">
  <section>
    <p  ref={sectionRef} className="text-2xl font-medium flex items-center justify-center  absolute top-[40%] left-[40%]">
    <span className="pr-2">
      Jacob 
      </span>   
           Grønberg 
    </p>
  </section>
</main>

<div  className="mx-14 max-sm:mx-0">


    <Hero  /> 
    <Service /> 
    <Work />
    <Exhibition />
    <Review />
    <WorkTogether />
    </div>
    </>
 );
}
