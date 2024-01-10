'use client';
import { FcGoogle } from "react-icons/fc";
import {signIn} from "next-auth/react";

export default function LoginWithGoogle() {

  return (
    <button
       onClick={() => signIn('google')}
      className="bg-[#E9E9E9] shadow text-center w-full py-3 flex gap-3 rounded-sm items-center justify-center">
        <FcGoogle className="text-2xl"   />
      <span>Sign In with Google</span>
    </button>
  );
}