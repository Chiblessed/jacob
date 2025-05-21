'use client'
import React,{useRef} from 'react'

function Service({scrollRef}) {
  return (
    <>
    <main ref={scrollRef} className='flex flex-col items-center justify-center pt-5 max-sm:w-full '>
        <section className='flex items-start justify-center gap-20 max-sm:flex-col'>
            <h1 className='flex items-center jusify-center gap-3 font-medium text-lg'>
                <span className='w-7 h-[2px] bg-black'></span>
                Services
                </h1>
                <div className='flex flex-col items-center  w-[60%] px-2 relative left-32 max-sm:left-0 max-sm:w-full'>
                    <div className='flex items-start justify-center gap-12 border-b border-b-gray-300 pb-7'>
                        <h2 className='text-4xl text-red-600 font-medium'>01</h2>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-medium pb-3'>PHOTO SHOOTING</h2>
                            <p className='text-lg font-medium'>Capture moments that speak louder than 
                                words. Our photoshooting service is tailored to bring your vision to
                                 life—whether it’s a personal portrait, lifestyle shoot, brand campaign,
                                  or editorial story.</p>
                                  <p className='text-lg font-medium pt-3'>
                                   With a keen eye for detail, natural light mastery,
                                   and a calm guiding presence, I ensure every frame reflects 
                                   authenticity, beauty, and emotion.
              Let’s turn fleeting moments into timeless visuals.
                            </p>
                        </div>
                    </div>


                    <div className='flex items-start justify-center gap-12 border-b border-b-gray-300 py-10'>
                        <h2 className='text-4xl text-red-600 font-medium'>02</h2>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-medium pb-3'>VIDEO EDITING</h2>
                            <p className='text-lg font-medium'>Bring your stories to life with dynamic, 
                                emotion-driven edits. I specialize in crafting visually compelling videos 
                                that hold attention 
                                and evoke feeling—whether it’s for brand promotions, personal projects
                            </p>
                        </div>
                    </div>


                    <div className='flex items-start justify-center gap-12 border-b border-b-gray-300 py-10'>
                        <h2 className='text-4xl text-red-600 font-medium'>03</h2>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-medium pb-3'>ART DIRECTION</h2>
                            <p className='text-lg font-medium'>Transform ideas into impactful visual narratives. With a 
                                keen eye for aesthetics and storytelling, I provide art direction that ensures every creative 
                                element—color, composition, style, and tone—works in harmony.</p>
                                <p className='text-lg font-medium pt-3'>
                                 Whether you're building a brand, 
                                planning a campaign, or curating a shoot, I guide the visual journey from concept to execution, 
                                creating a 
                                cohesive and unforgettable experience. Let’s craft visuals that speak louder than words.
                                aliqua.
                            </p>
                        </div>
                    </div>



                </div>
        </section>
    </main>
    </>
  )
}

export default Service