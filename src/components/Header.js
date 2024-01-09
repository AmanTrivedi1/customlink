import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import LogoutButton from './buttons/LogoutButton'

export default async  function Header  ()  {
 const session = await  getServerSession(authOptions)


 console.log(session)
  return (
    <div>
       <header className=" bg-primmary  py-4">
      <div className=" px-4 2xl:max-w-7xl max-w-6xl flex justify-between mx-auto ">
        <div className="flex items-center ">
          <Link href={'/'} className="flex text-xl items-center  text-white">
            <span className="font-bold">LinkIt</span>
          </Link>
        </div>
        {
          !session ?   <>
           <nav className="flex items-center  text-sm text-slate-500">
              <Link className='bg-black opacity-100 hover:opacity-90 text-white px-4 py-2 rounded-sm ' href={'/login'}>Sign In</Link>
          </nav>
          </> : <>
          <div className='text-secondry flex  items-center gap-x-2'>
            <Link className='line-clamp-1 text-sm' href={"/account"}>
               Hello , {session?.user?.name}
            </Link>
              <LogoutButton className='bg-black opacity-100 text-sm  hover:opacity-90 text-white px-4 py-2 rounded-sm flex items-center gap-x-2'/>
          </div>
       
          </>
        }
       
      </div>
    </header>
    </div>
  )
}


