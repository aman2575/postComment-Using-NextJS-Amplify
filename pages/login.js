// pages/profile.js
import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function Login() {
  const [user, setUser] = useState(null)
  
  async function checkUser(){
    try{const user = await Auth.currentAuthenticatedUser()
    setUser(user)
    console.log(user)}
    catch(err){
      console.log('error in fetching user details', user)
    }
  }
  if(!user) return <button onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Open Facebook</button>
  return (
    <div>
    <h1 className="text-3xl font-semibold tracking-wide mt-6">Login</h1>
      <h2 className="text-sm text-gray-500 mb-6">Email: {user.attributes.email}</h2>
    
    </div>
  )
}

export default Login