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

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
