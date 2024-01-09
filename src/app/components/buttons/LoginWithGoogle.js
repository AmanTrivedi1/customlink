'use client';
import { FcGoogle } from "react-icons/fc";


export default function LoginWithGoogle() {
  return (
    <button
      className="bg-white shadow text-center px-8 py-3 flex gap-3 rounded-sm items-center justify-center">
      <FcGoogle   />
      <span>Sign In with Google</span>
    </button>
  );
}