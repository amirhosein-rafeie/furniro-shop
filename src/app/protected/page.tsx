"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

const ProtectedPage: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!session) router.push("/api/auth/signin"); // Redirect to sign in page
  }, [session, status]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return null;

  return (
    <div>
      <h1 className="font-mono">Protected Page</h1>
      <Image
        width={52}
        height={52}
        src={session.user.image}
        alt={session.user.name}
      />
      <p className="font-sans">Welcome {session.user.name}!</p>
    </div>
  );
};

export default ProtectedPage;
