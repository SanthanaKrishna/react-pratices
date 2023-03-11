import { useState } from "react"

type AuthUser = {
  name: string
  email: string
}

export default function User() {
  const [user, setUser] = useState<AuthUser | null>(null);
  // const [user, setUser] = useState<AuthUser>({} as AuthUser); // type Assertion

  const handleLogin = () => {
    setUser({
      name: 'Apple',
      email: 'apple@gmail.com'
    })
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  )
}
