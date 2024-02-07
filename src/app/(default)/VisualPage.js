
import AnimationWrapper from '@/components/Animation';
import Link from 'next/link';
import React from 'react'
import { CiLink } from "react-icons/ci";
const VisualPage = () => {
  return (
   
    <div className='h-full  pt-12 pb-12 bg-normal-dark text-white'>
     <div className='max-w-7xl p-4 m-auto'>
      <div>
        
        <div className='flex  mt-10 items-center justify-center'>
             <AnimationWrapper>
                <h1 className='border flex  items-center gap-x-2 border-white/30  py-2 px-4 rounded-full'> <CiLink/>Welcome to Linkit! </h1>
             </AnimationWrapper>
        </div>
        <AnimationWrapper>
         <div className='flex flex-col mt-8 items-center justify-center'>
           <h1 className='xl:text-7xl md:text-5xl font-semibold text-5xl' >Link It</h1>
            <p className='md:text-base textsm text-white/80'>Paste everylink that you want to track</p>
            <p className='text-center max-w-md text-sm mt-10'>Welcome to Linkit Our platform offers a seamless solution for managing and sharing all your
              social media and important links in one convenient location. With Linkit, you can effortlessly
              consolidate your online presence and track views on your shared links in real-time and gaining 
              valuable insights into your reach and engagement.</p>
         <div>
           <Link href="/login">
             <button className='bg-white text-normal-dark mt-10 rounded-lg ng-white py-2 px-12'>Signup</button>
           </Link>
        </div>
        </div>
        </AnimationWrapper>
      </div>
     </div>
    </div>
  
  )
}

export default VisualPage
