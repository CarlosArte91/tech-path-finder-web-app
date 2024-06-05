import React, { createContext, useState, ReactNode, FC, useEffect } from 'react'
import { getCurrentUser } from '@/utils/currentUser'

interface User {
  id:  number
  username: string
  email: string
}

interface UserContextType {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
  logout: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

interface UserProviderProps {
  children: ReactNode
}

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    id: 0,
    username: '',
    email: '',
  })

  const getUser = async () => {
    const user = await getCurrentUser()
    if (user) setUser(user)
  }

  useEffect(() => {
    getUser()
  }, [])

  const logout = () => {
    setUser({
      id: 0,
      username: '',
      email: '',
    })
    localStorage.removeItem('userData')
  }

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
