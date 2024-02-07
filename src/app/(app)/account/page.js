import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import UsernameForm from "@/components/forms/UsernameForm";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import cloneDeep from 'clone-deep';
import PageSettingForm from "@/components/forms/PageSettingsForm";
import PageButtonsForm from "@/components/forms/PageButtonsForm";
import PageLinksForm from "@/components/forms/PageLinksForm";

export default async function AccountPage({ searchParams }) {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;
  if (!session) {
    return redirect('/');
  }
  mongoose.connect(process.env.MONGO_URI);
  const page = await Page.findOne({ owner: session?.user?.email });
  
  if (!page) {
    return (
      <div className='max-w-7xl m-auto sm:p-8 p-4 '>
        <h1 className="text-2xl font-semibold sm:text-3xl">Grab your Username</h1>
        <p className="mt-2 sm:text-base text-sm">Choose your username...</p>
        <UsernameForm desiredUsername={desiredUsername}/>
      </div>
    );
  }

  const leanPage = cloneDeep(page.toJSON());
  leanPage._id = leanPage._id.toString();
  
  return (
    <div className="p-2 md:p-8 m-auto">
      <PageSettingForm page={leanPage} user={session?.user}/>
      <PageButtonsForm page={leanPage} user={session?.user} />
      <PageLinksForm page={leanPage} user={session?.user} />
    </div>
  );
}
