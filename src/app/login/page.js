import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { RiDashboard2Line } from "react-icons/ri";
import Link from "next/link";

export default async function LoginPage() {
  const session = await  getServerSession(authOptions)
  return (
      !!session ? (  
        <div className=" bg-primmary h-screen">
       <div className="w-[450px]  top-0 fixed bg-center bg-cover  h-full md:block hidden bg-[url('https://res.cloudinary.com/dmlts9lbk/image/upload/v1704920680/myimage_nmbqjx.png')] "></div>
    <div className="p-4 max-w-md bg-primmary md:pt-0 pt-28 md:absolute md:top-1/3 md:left-1/2 flex flex-col items-center justify-center  mx-auto">
         <h1 className=" text-5xl text-secondry  font-bold text-center mb-2">
             You are allready logedin
         </h1>
        <p className="text-center text-secondry  mb-6 ">
          Tap below button to goto dashboard
        </p>
        <Link href="/account">
            <button className="bg-[#E9E9E9] flex items-center justify-center gap-x-1 w-full px-4 py-2 rounded-sm "><RiDashboard2Line className="text-xl"/>Dashboard</button>
        </Link>
        </div>
       </div>
       ) : (
        <div className=" bg-primmary h-screen">
        <div className="w-[450px]  top-0 fixed bg-center bg-cover  h-full md:block hidden bg-[url('https://res.cloudinary.com/dmlts9lbk/image/upload/v1704920680/myimage_nmbqjx.png')] "></div>
    <div className="p-4 max-w-md bg-primmary md:pt-0 pt-28 md:absolute md:top-1/3 md:left-1/2 flex flex-col items-center justify-center  mx-auto">
         <h1 className=" text-5xl text-secondry  font-bold text-center mb-2">
             Sign into your account
         </h1>
        <p className="text-center text-secondry  mb-6 ">
          Sign in to your account using google
        </p>
         <LoginWithGoogle/>
        </div>
       </div>
   
       )
  );
}