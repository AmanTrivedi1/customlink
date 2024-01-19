import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";

import {redirect} from "next/navigation";
import UsernameForm from "@/components/forms/UsernameForm";

export default async function AccountPage({searchParams}) {
    const session = await getServerSession(authOptions);
    const desiredUsername = searchParams?.desiredUsername;
    if (!session) {
      return redirect('/');
    }
 

  return (
    <div className='max-w-7xl m-auto sm:p-8 p-4'>
      <h1 className="text-2xl font-semibold sm:text-3xl">Grab your Username</h1>
      <p className="mt-2 sm:text-base text-sm">Choose your username...</p>
      <UsernameForm desiredUsername={desiredUsername}/>
   </div>
  )
}


