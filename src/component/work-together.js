import React from 'react'

function WorkTogether() {
  return (
    <>
      <main className='py-32'>
        <section className='flex items-center justify-center max-sm:mx-4 gap-10 max-sm:flex-col-reverse'>
        <div className='group hover:bg-[#DB574D] transition-all duration-200 border-2 border-[#DB574D] relative top-0 right-0 w-40  py-2 rounded-full cursor-pointer'>
            <button
             className='group-hover:cursor-pointer group-hover:left-2 bg-[#DB574D] rounded-full w-36 px-5 relative right-2 text-xl text-white py-10'>
                Get in touch
                 </button>
          </div>
          <h2 className='uppercase text-7xl font-medium'>
            Let's work <br />
            <span className='text-[#DB574D] capitalize'>
                 Together
            </span>
          </h2>
        </section>
      </main>
    </>
  )
}

export default WorkTogether
