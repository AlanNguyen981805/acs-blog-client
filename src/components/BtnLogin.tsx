import React from 'react'
import { signIn } from 'next-auth/react'

const BtnLogin: React.FC<any> = ({provider, bgColor, txtColor}) => {
  return (
    <div>
      <button className="btn w-100 my-2 py-3"
      style={{ background: `${bgColor}`, color: `${txtColor}`}}
      onClick={() => signIn("google")}>
        Sign in with Google 
      </button>
    </div>
  )
}

BtnLogin.defaultProps = {
  txtColor: '#eee'
}
export default BtnLogin