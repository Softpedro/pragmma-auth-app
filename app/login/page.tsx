"use client";
import { signIn } from "next-auth/react";

function page() {
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={async () => {
          const result = await signIn("github", {
            callbackUrl: "/dashboard",
            redirect: false
          });
          console.log(result);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Iniciar Sesion
      </button>
    </div>
  );
}

export default page;
