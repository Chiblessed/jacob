'use client'
import Link from 'next/link'
import React,{useState, useRef, useEffect} from 'react';
import gsap from "gsap";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const sectionRef = useRef(null);

  function toggleMenu(){
    setIsOpen((prev) => !prev);
    console.log('ture')
  }
  
  return (
    <>
    <header>

 
    <nav className='flex items-center justify-between  mx-10 py-5 max-sm:mx-4'>
        <Link href='/' className="font-medium z-50">
        JACOB GRÕNBERG
        </Link>
        <button 
  onClick={toggleMenu}
  className={`${isOpen ? 'border border-[#DB574D] w-32 h-32  max-sm:w-24 max-sm:h-24 max-sm:-right-10 max-sm:-top-0 -right-16 -top-10' : ''}  relative z-50 h-20 w-20 cursor-pointer flex items-center justify-center rounded-full `}
>
  <span
    className={`absolute w-10 h-[1px] bg-black transition-all duration-300 ${
      isOpen ? "rotate-45 top-1/2" : "-translate-y-2"
    }`}
  />

  <span
    className={`absolute w-5 h-[1px] right-5 bg-black transition-all duration-300 ${
      isOpen ? "opacity-0" : ""
    }`}
  />

  <span
    className={`absolute w-10 h-[1px] bg-black transition-all duration-300 ${
      isOpen ? "-rotate-45 top-1/2" : "translate-y-2"
    }`}
  />
</button>

    </nav>
    {isOpen && (
                    <div 
                    className="absolute z-30 top-0 pt-32 right-0 w-full pb-5 bg-[#E5E5E5]  text-primary">
                        <div className="pt-10 flex flex-col items-center justify-center gap-10 font-medium">
                            <button className={`hover:text-[#DB574D] flex items-center justify-center gap-8 max-sm:text-5xl  text-8xl hover:cursor-pointer`}>
                                <p className='text-base text-[#DB574D]'>01</p>
                                <Link href='/'>Home</Link>
                            </button>
                            <button className={`hover:text-[#DB574D] flex items-center justify-center gap-8   max-sm:text-5xl  text-8xl hover:cursor-pointer`}>
                            <p className='text-base text-[#DB574D]'>02</p>
                                <Link href='/project'>Projects</Link>
                            </button>
                            <button className={`hover:text-[#DB574D] flex items-center justify-center gap-8  max-sm:text-5xl  text-8xl hover:cursor-pointer`}>
                            <p className='text-base text-[#DB574D]'>03</p>
                                <Link href='/exhibition'>Exhibitions</Link>
                            </button>
                            <button className={`hover:text-[#DB574D] flex items-center justify-center gap-8  max-sm:text-5xl  text-8xl hover:cursor-pointer`}>
                            <p className='text-base text-[#DB574D]'>04</p>
                                <Link href='/about'>About</Link>
                            </button>
                            <button className={`hover:text-[#DB574D] flex items-center justify-center gap-8  max-sm:text-5xl  text-8xl hover:cursor-pointer`}>
                            <p className='text-base text-[#DB574D]'>05</p>
                                <Link href='/works'>Contact</Link>
                            </button>
                        </div>
                        <div className='flex items-center justify-between font-medium px-10 pt-14 pb-6 max-sm:px-0 max-sm:flex-col'>
                          <div className='flex items-center justify-center gap-3'>
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
                    </div>
                )}
      
    </header>
    </>
  )
}

export default Navbar