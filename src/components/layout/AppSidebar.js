'use client'
import Link from 'next/link'
import React from 'react'
import { CiSettings } from "react-icons/ci";
import { IoIosReturnLeft } from "react-icons/io";
import { SiSimpleanalytics } from "react-icons/si";


import { usePathname } from 'next/navigation';
import LogoutButton from '../buttons/LogoutButton';

export default function Sidebar(){
    const path = usePathname();
    console.log(path)
  return (
    <div className='h-screen  '>
        <nav className='flex   text-white  flex-col justify-start '>
                    <Link
                    className={"flex py-2 px-1 items-center hover:bg-bg-dark  hover:text-white " + (path === "/account" ? "bg-bg-dark text-white" : " ")}
                    href={"/account"}
                    >
                    <CiSettings className='w-6 h-6' /> <span className='ml-[4px]'>Settings</span>
                 </Link>
                 <Link
                    className={"flex p-2 items-center hover:bg-bg-dark hover:text-white " + (path === "/analytics" ? "text-white bg-bg-dark" : " ")}
                    href={"/analytics"}
                    >
                    <SiSimpleanalytics className='w-4 h-4' /> <span className='ml-2'>Analytics</span>
                </Link>
            <Link className=' flex p-2 items-center hover:bg-bg-dark hover:text-white' href={"/"}> <IoIosReturnLeft className='w-4 h-4'/> <span className='ml-2'>Website</span></Link>
            <LogoutButton iconLeft={true} className='hover:bg-bg-dark  hover:text-white flex  items-center gap-x-2 p-2 flex-row '/>
        </nav>
    </div>
  )
}


