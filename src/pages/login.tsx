import React, { useEffect } from 'react'
import { getProviders, getSession, signIn, signOut, useSession } from 'next-auth/react'

const Login: React.FC = () => {
    const { data: session } = useSession();
    console.log(session)
    if (session) {
      return (
        <div>
          Welcome user<br />
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      );
    }
    return (
      <div>
        Click to sign into your user account <br />
        <button onClick={() => signIn("google")}>Sign in</button>
      </div>
    );
}

export default Login