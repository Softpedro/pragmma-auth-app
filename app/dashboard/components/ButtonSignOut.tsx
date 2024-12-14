"use client";
import { signOut } from "next-auth/react";

export const ButtonSignOut = () => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
      onClick={() => signOut()}
    >
      Cerrar sesion
    </button>
  );
};
