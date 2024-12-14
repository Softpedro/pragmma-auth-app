"use client";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

function ProfilePage() {
  const { data: session } = useSession();
  if (!session) {
    return <p>Accede a tu cuenta</p>;
  }
  return (
    <div>
      <div className="bg-gray-200 p-4 box-shadow rounded-lg max-w-md mx-auto mt-10">
        <h1>Profile</h1>
        <p>{session?.user?.name}</p>
        <Image
          src={session?.user?.image || ""}
          alt={session?.user?.name || ""}
          width={100}
          height={100}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={() => signOut()}
        >
          Cerrar sesion
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
