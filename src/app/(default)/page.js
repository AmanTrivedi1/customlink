import React from 'react'
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

import Link from 'next/link'
import LogoutButton from '../../components/buttons/LogoutButton'
import { WavyBackground } from "@/components/ui/wavy-background.tsx";
import HeroForm from "@/components/forms/HeroForm";




export default async function Home() {
  const session = await getServerSession(authOptions);
  
  return (
    <>

<div className=' z-20 w-full fixed'>
       <header className=" bg-[#000000] p-4  ">
      <div className=" px-4  2xl:max-w-7xl max-w-6xl flex justify-between mx-auto ">
        <div className="flex items-center ">
          <Link href='/' className="flex text-xl items-center  text-white">
      
          </Link>
        </div>
        {
          !session ?   <>
           <nav className="flex items-center  text-sm text-slate-500">
              <Link className='bg-white text-normal-dark opacity-100 hover:opacity-90  px-4 py-2 rounded-lg ' href="/login">Sign In</Link>
          </nav>
          </> : <>
          <div className='text-secondry flex  items-center gap-x-2'>
            <Link className='line-clamp-1 text-sm' href="/account">
            {session?.user?.image ? (
             <img src={session?.user?.image} className='rounded-full w-8 h-8'  alt="userimage" />
               ) : (
             <div>
              {session?.user?.name}
             </div>
              )}
            </Link>
              <LogoutButton className='bg-white text-normal-dark opacity-100 text-sm  hover:opacity-90  px-4 py-2 rounded-lg flex items-center '/>
          </div>
          </>
        }
      </div>
    </header>
    </div>

    <div className="max-w-4xl   mx-auto h-full ">
    <WavyBackground className=" mt-48 ">
      <div className="flex items-center max-w-2xl  gap-y-4  p-2 justify-center flex-col ">
        <h1 className="text-5xl lg:text-7xl text-white font-bold inter-var text-center">
               Link It
        </h1>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
           Paste everylink that you want to track
        </p>
          <p className="md:text-base text-xs  px-4  mt-4 text-white font-normal inter-var text-center">
            Welcome to Linkit Our platform offers a seamless solution for managing and sharing all your
            social media and important links in one convenient location. With Linkit, you can effortlessly 
            consolidate your online presence and track views on your shared links in real-time and gaining
            valuable insights into your reach and engagement.
          </p>
      <HeroForm/>
      </div>
    </WavyBackground>
    </div> 
    </>
  )
}
