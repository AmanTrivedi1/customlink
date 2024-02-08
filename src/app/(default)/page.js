
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import HomePage from "./VisualPage";
import InfoPage from "./InfoPage";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
     <HomePage/>
     <InfoPage/>
    </>
  )
}
