
import HeroForm from "@/components/forms/HeroForm";
import {getServerSession} from "next-auth";
import Image from "next/image";
import { SocialIcon } from 'react-social-icons'
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
   <main className="bg-primmary px-4 md:px-4 lg:px-2 xl:p-0 lg:h-screen h-full ">
     <section className="  2xl:max-w-7xl  mt-0 max-w-6xl m-auto flex md:flex-row flex-col-reverse justify-between">
      <div className="max-w-lg md:mt-20 mt-0">
        <h1 className=" text-4xl md:text-5xl text-secondry lg:text-6xl font-semibold">Everything you are In one, simple link in bio.</h1>
          <p className=" md:mt-8   text-base text-secondry sm:text-xl">Join 40M+ people using Linktree for their link in bio. One link to help you share everything you
           create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
           <div>
            <div className="flex md:items-center items-start md:flex-row flex-col text-secondry gap-x-2 mt-4">
              <div className="flex gap-x-2">
              <SocialIcon style={{width:40, height:40}} network="github" />
              <SocialIcon style={{width:40, height:40}} network="instagram" />
              <SocialIcon style={{width:40, height:40}} network="twitter" />
              <SocialIcon style={{width:40, height:40}} network="linkedin" />
              </div>
              <div>
              <h1> in one place</h1>
              </div>
            </div>
          </div>
          <div>
          <HeroForm user={session?.user} />
          </div>
      </div>
        <div>
        <Image src="/herobg.svg" width={600}  height={400} alt="heroimage" />               
        </div>
     </section>
   </main>
    </>
  )
}
