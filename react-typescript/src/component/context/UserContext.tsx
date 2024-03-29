import { createContext, useState } from "react"

export type AuthUser = {
  name: string
  email: string
}

type UserContextType = {
  user: AuthUser | null
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
type UserContextProvideProps = {
  children: React.ReactNode
};

// export const UserContext = createContext<UserContextType | null>(null)

export const UserContext = createContext({} as UserContextType)// type assertion

export const UserContextProvide = ({ children }: UserContextProvideProps) => {
  const [user, setUser] = useState<AuthUser | null>(null)
  return <UserContext.Provider value={{ user, setUser }} >
    {children}
  </UserContext.Provider>
}