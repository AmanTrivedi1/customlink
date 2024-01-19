'use client';
import grabUsername from "@/actions/grabUsername";

import {redirect} from "next/navigation";
import {useState} from "react";
import UsernameFormResult from "../formResults/UsernameFormResult";

export default function UsernameForm({desiredUsername}) {
    const [taken,setTaken] = useState(false);
    async function handleSubmit(formData) {
      const result = await grabUsername(formData);

      setTaken(result === false);
      if (result) {
        redirect('/account/'+formData.get('username'));
      }
    }
  return (
    <div className="max-w-xl">
    <form action={handleSubmit} > 
    <input
     defaultValue={desiredUsername}
     name="username"
     className="  sm:text-base text-sm focus:outline-black/20 border  border-black/20  rounded-sm mt-2 -mb-2  "  type="text" placeholder="username"/>
     { taken && <UsernameFormResult/> }
      <button className="bg-black flex items-center gap-x-2 px-4 sm:text-base text-sm py-2  rounded-sm hover:opacity-90 text-white" type="submit">
         <span> Claim username</span>
       </button>
   </form>
   </div>
  );
}