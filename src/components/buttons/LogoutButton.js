'use client';

import { HiLogout } from "react-icons/hi";
import {signOut} from "next-auth/react";

export default function LogoutButton({
  className = 'flex items-center gap-2 border p-2 px-4 shadow',
  iconLeft = false,
  iconClasses = '',
}) {
  return (
    <button
      className={className}
      onClick={() => signOut()}>
      {iconLeft && (
      <HiLogout/>
      )}
      <span>Logout</span>
      {!iconLeft && (
       <HiLogout/>
      )}
    </button>
  );
}