import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <>
      <footer className='mx-14 py-20 max-sm:mx-4'>
        <div className='flex items-start  justify-around max-sm:flex-col'>
        <div className='flex flex-col  relative max-sm:mb-3'>
        <h1 className='text-[100px] max-sm:text-7xl max-sm:leading-14 pb-5 leading-20 relative font-medium mt-20 text-[#DB574D] z-10  '>
          Jacob <br />
          Grønberg 
        </h1>
        <h2 className='text-[20px] font-medium leading-[25px] text-black z-10 text-center'>
          PHOTOGRAPHER & VISUAL ARTIST
        </h2>
        </div>
        <div className='flex flex-col font-medium'>
            <h2 className='text-[#DB574D] text-2xl pb-5'>Menu</h2>
            <p className='text-xl pb-4'>
                <Link href='/'>Home</Link>
                </p>
            <p className='text-xl pb-4'>
                <Link href='/project'>Projects</Link>
                </p>
            <p className='text-xl pb-4'>
            <Link href='/exhibition'>Exhibitions</Link>
                </p>
            <p className='text-xl pb-4'>
            <Link href='/about'>About</Link>
            </p>
            <p className='text-xl pb-4'>
            <Link href='/'>Contact</Link>
            </p>


        </div>
        <div className='flex flex-col font-medium'>
            <h2 className='text-[#DB574D] text-2xl pb-5'>Info</h2>
            <p className='text-xl pb-4'>
                <Link href='/'>Styleguide</Link>
                </p>
            <p className='text-xl pb-4'>
                <Link href='/'>Licensing</Link>
                </p>
            <p className='text-xl pb-4'>
            <Link href='/'>Changelog</Link>
                </p>
            


        </div>
        </div>
        <div className='flex items-center justify-between font-medium px-10 pt-32 max-sm:flex-col  max-sm:items-start max-sm:gap-3 max-sm:px-0'>
                          <div className='flex items-center justify-center gap-3   max-sm:text-sm'>
                            <p>© Made by Pawel Gola</p>
                            <div className='w-5 h-[1px] bg-black' />
                            <p>Powered by Chisom</p>
                          </div>
                          <div className='flex items-center justify-center gap-5'>
                            <p>TWITTER</p>
                            <p>INSTAGRAM</p>
                            <p>FACEBOOK</p>
                          </div>
                        </div>
      </footer>
    </>
  )
}

export default Footer
