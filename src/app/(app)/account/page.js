import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";

import {redirect} from "next/navigation";
import UsernameForm from "@/components/forms/UsernameForm";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import PageSettingForm from "@/components/forms/PageSettingsForm";
import PageButtonsForm from "@/components/forms/PageButtonsForm";

export default async function AccountPage({searchParams}) {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;
  if (!session) {
    return redirect('/');
  }
  mongoose.connect(process.env.MONGO_URI);
  const page = await Page.findOne({owner: session?.user?.email});

  if(page) {
    return  (
      <div className="">
         <h1 className="mt-2 md:text-3xl sm:text-2xl text-xl font-semibold text-normal-dark">User Information</h1>
       <PageSettingForm page={page} user={session.user}/>
       <PageButtonsForm page={page} user={session.user} />
      </div>
      
    )
  }

  return (
    <div className='max-w-7xl m-auto sm:p-8 p-4 '>
      <h1 className="text-2xl font-semibold sm:text-3xl">Grab your Username</h1>
      <p className="mt-2 sm:text-base text-sm">Choose your username...</p>
      <UsernameForm desiredUsername={desiredUsername}/>
   </div>
  )
}
