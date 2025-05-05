import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='flex items-center justify-between mx-10 py-10'>
        <Link href='/' className="font-medium">
        JACOB GRÕNBERG
        </Link>
        <div className=" flex flex-col relative gap-1 cursor-pointer">
          <span className="w-10 h-[1px] bg-black" />
          <span className="w-5 h-[1px] relative left-5 bg-black" />
          <span className="w-10 h-[1px] bg-black" />
        </div>
    </nav>
    </>
  )
}

export default Navbar