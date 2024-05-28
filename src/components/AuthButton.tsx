"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton: React.FC = () => {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      ) : (
        <>
          <h1>Hello! {session?.user?.name}</h1>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
};

export default SignInButton;
