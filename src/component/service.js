import React from 'react'

function Service() {
  return (
    <>
    <main className='mx-10 flex flex-col items-center justify-center mt-24'>
        <section className='flex items-start justify-center gap-20'>
            <h1 className='flex items-center jusify-center gap-3 font-medium text-lg'>
                <span className='w-7 h-[2px] bg-black'></span>
                Services
                </h1>
                <div className='flex flex-col items-center  w-[60%] px-2 relative left-32'>
                    <div className='flex items-start justify-center gap-12 border-b border-b-gray-300 pb-7'>
                        <h2 className='text-4xl text-red-600 font-medium'>01</h2>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-medium pb-3'>PHOTO SHOOTING</h2>
                            <p className='text-lg font-medium'>Lorem ipusm dolor sit amet, consectur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.
                            </p>
                        </div>
                    </div>


                    <div className='flex items-start justify-center gap-12 border-b border-b-gray-300 py-10'>
                        <h2 className='text-4xl text-red-600 font-medium'>02</h2>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-medium pb-3'>VIDEO EDITING</h2>
                            <p className='text-lg font-medium'>Lorem ipusm dolor sit amet, consectur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.
                            </p>
                        </div>
                    </div>


                    <div className='flex items-start justify-center gap-12 border-b border-b-gray-300 py-10'>
                        <h2 className='text-4xl text-red-600 font-medium'>03</h2>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-medium pb-3'>ART DIRECTION</h2>
                            <p className='text-lg font-medium'>Lorem ipusm dolor sit amet, consectur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
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