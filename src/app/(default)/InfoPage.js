import AnimationWrapper from '@/components/Animation';
import Link from 'next/link';
import React from 'react'
import { CiCircleCheck } from "react-icons/ci";

const InfoPage = () => {
  return (
    <div className='bg-normal-dark text-white/80'>
       <div className='max-w-5xl m-auto flex flex-col items-center  md:gap-y-24 gap-y-10 p-4'>
      <AnimationWrapper>
        <div className='md:flex-row  md:max-w-4xl max-w-sm m-auto md:m-0 flex flex-col md:justify-between justify-center md:items-start items-center gap-x-10'>
            <div className='flex flex-col  mb-4 gap-y-1'>
                 <h1 className=' md:text-4xl sm:text-3xl text-2xl  font-semibold mb-2'>Step 1</h1>
                 <p className=' flex items-center gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>Login into your account via a google</p>
                 <p className=' flex items-center gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>Signup have a same option tapon login</p>
                 <p className=' flex items-center gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>It will create account automatically</p>
                 <p className=' flex items-center gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>If you are not exixting user</p>
            </div>
           <div className=''>
              <img className='md:max-w-md max-w-xs  border-white/30 border-4  p-3 rounded-lg ' src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1707302736/Screenshot_2024-02-07_161455_xuwc0m.png" alt="userimg"/>
           </div>
        </div>
        </AnimationWrapper>
   <AnimationWrapper>
        <div className='md:flex-row md:max-w-4xl max-w-sm m-auto md:m-0 flex flex-col-reverse md:justify-between justify-center md:items-start items-center gap-x-10'>
             <div className=' '>
              <img className='md:max-w-md max-w-xs  border-white/30 border-4  p-3 rounded-lg ' src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1707302736/Screenshot_2024-02-07_161351_joyjou.png" alt="userimg"/>
            </div>
             <div className='flex flex-col md:mt-0 mt-4 mb-4 gap-y-1'>
                  <h1 className=' md:text-4xl sm:text-3xl text-2xl  font-semibold mb-2'>Step 2</h1>
                  <p className=' flex items-center gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>You can put banner image here</p>
                  <p className=' flex items-center gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>This page is traceable</p>
                  <p className=' flex items-center gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>You can put your bio here</p>
                  <p className=' flex items-center gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>User image also a  replacble</p>
                  <p className=' flex items-center gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>You can choose with solid color or img</p>
                  <p className=' flex  gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>You can set what visitor can see solid<br/> color or img</p>
             </div>
        </div>
   </AnimationWrapper>
   <AnimationWrapper>
        <div className='md:flex-row md:max-w-4xl max-w-sm m-auto  flex flex-col md:justify-between justify-center md:items-start items-center gap-x-10'>
            <div className='flex flex-col  mb-4 gap-y-1'>
                 <h1 className=' md:text-4xl sm:text-3xl text-2xl  font-semibold mb-2'>Step 3</h1>
                 <p className=' flex gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>There are several options available</p>
                 <p className=' flex  gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>You can put link after clicking on icons</p>
                 <p className=' flex  gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>Make sure link have https:// format</p>
                 <p className=' flex  gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>This clicks store in dashboard</p>
            </div>
           <div className=''>
              <img className='md:max-w-md max-w-xs  border-white/30 border-4  p-3 rounded-lg  ' src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1707302736/Screenshot_2024-02-07_161416_mvfrsb.png" alt="userimg"/>
           </div>
        </div>
   </AnimationWrapper>



   <AnimationWrapper>
        <div className='md:flex-row md:max-w-4xl max-w-sm m-auto md:m-0 flex flex-col-reverse md:justify-between justify-center md:items-start items-center gap-x-10'>
           <div className=''>
              <img className='md:max-w-md max-w-xs  border-white/30 border-4  p-3 rounded-lg  ' src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1707305039/Screenshot_2024-02-05_190133_r60khu.png" alt="userimg"/>
           </div>
            <div className='flex flex-col  mb-4 gap-y-1'>
                 <h1 className=' md:text-4xl sm:text-3xl text-2xl  font-semibold mb-2'>Step 4</h1>
                 <p className=' flex  items-center gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>Goto preview page take a look</p>
                 <p className=' flex items-center gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>Preview page will share with visitor </p>
                 <p className=' flex  gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>Everything in Preview page is traceable</p>
                 <p className=' flex  gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>You can know in which link someone <br/> cliking</p>
            </div>
        </div>
   </AnimationWrapper>  
   <AnimationWrapper>
        <div className='md:flex-row md:max-w-4xl max-w-sm  md:m-0 flex flex-col gap-x-10 items-center '>
            <div className='flex flex-col  mb-4 gap-y-1'>
                 <h1 className=' md:text-4xl sm:text-3xl text-2xl  font-semibold mb-2'>Step 5</h1>
                 <p className=' md:flex hidden  gap-x-2 sm:text-sm md:text-base  '> <CiCircleCheck className='text-lg text-green-500'/>Tracked data will shown here how many <br/> clicksyou have </p>
                 <p className=' flex items-center gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>Click data will shown into two form </p>
                 <p className=' flex items-center gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>Todays click will shown into left side</p>
                 <p className=' flex items-center gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>Overall clicks shown into right side</p>
                 <p className=' flex items-center gap-x-2 sm:text-sm md:text-base'> <CiCircleCheck className='text-lg text-green-500'/>Profile views also shown here</p>
            </div>
            <div className='  '>
              <img className='md:max-w-md max-w-xs  border-white/30 border-4  p-3 rounded-lg 'src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1707302735/Screenshot_2024-02-07_160329_pxl2lv.png" alt="userimg"/>
           </div>
        </div>
   </AnimationWrapper>
        <h1 className='md:text-3xl sm"text-2xl text-xl font-semibold mt-4 mb-4 text-center'>And allset</h1>
       </div>
       <p className='text-xs p-4'>Made by<span className=' text-white text-base'> <Link target='_blank' href={"https://github.com/AmanTrivedi1"}>AmanTrivedi</Link>  </span></p>
    </div>
    
  ) 
}

export default InfoPage
