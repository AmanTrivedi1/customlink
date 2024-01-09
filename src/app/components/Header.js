import Link from 'next/link'
import React from 'react'
const Header = () => {
  return (
    <div>
       <header className=" bg-primmary  py-4">
      <div className=" px-4 2xl:max-w-7xl max-w-6xl flex justify-between mx-auto ">
        <div className="flex items-center ">
          <Link href={'/'} className="flex text-xl items-center  text-white">
            <span className="font-bold">LinkIt</span>
          </Link>
        </div>
        <nav className="flex items-center  text-sm text-slate-500">
              <Link className='bg-black opacity-100 hover:opacity-90 text-white px-4 py-2 rounded-sm ' href={'/login'}>Sign In</Link>
        </nav>
      </div>
    </header>
    </div>
  )
}

export default Header
