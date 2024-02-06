
import HeroForm from "@/components/forms/HeroForm";
import {getServerSession} from "next-auth";
import Image from "next/image";
import { SocialIcon } from 'react-social-icons'
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import HomePage from "./VisualPage";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
     <HomePage/>
    </>
  )
}
