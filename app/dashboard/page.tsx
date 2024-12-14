import { getServerSession } from "next-auth";
import Image from "next/image";
import { ButtonSignOut } from "./components";

async function DashboardPage() {
  const session = await getServerSession();
  if (!session) {
    return <p>Accede a tu cuenta</p>;
  }
  return (
    <div>
      <div className="bg-gray-200 p-4 box-shadow rounded-lg max-w-md mx-auto mt-10">
        <h1>Dashboard</h1>
        <p>{session?.user?.name}</p>
        <Image
          src={session?.user?.image || ""}
          alt={session?.user?.name || ""}
          width={100}
          height={100}
        />
        <ButtonSignOut />
      </div>
    </div>
  );
}

export default DashboardPage;
