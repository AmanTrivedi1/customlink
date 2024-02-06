'use client';
import {signIn} from "next-auth/react";
import {redirect, useRouter} from "next/navigation";
import {useEffect} from "react";
export default function HeroForm({user}) {
  const router = useRouter();
  useEffect(() => {
    if (
      'localStorage' in window
      && window.localStorage.getItem('desiredUsername')
    ) {
      const username = window.localStorage.getItem('desiredUsername');
      window.localStorage.removeItem('desiredUsername');
      redirect('/account?desiredUsername=' + username);
    }
  }, []);
  async function handleSubmit(ev) {
    ev.preventDefault();
    const form = ev.target;
    const input = form.querySelector('input');
    const username = input.value;
    if (username.length > 0) {
      if (user) {
        router.push('/account?desiredUsername='+username);
      } else {
        window.localStorage.setItem('desiredUsername', username);
        await signIn('google');
      }
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="inline-flex items-center mt-8 mb-10  shadow-lg  shadow-gray-500/20">
      <input
        type="text"
        className=" focus:outline-none text-normal-dark max-w-xs text-norm  rounded-l-lg px-2 py-[7px]"
        style={{backgroundColor:'white',marginBottom:0,paddingLeft:10}}
        placeholder={user?.name || "Username"}/>
      <button
        type="submit"
        className="bg-black rounded-r-lg text-white py-2 px-6 whitespace-nowrap">
        Join now
      </button>
    </form>
  );
}
 
