import React, { createContext, useState } from 'react'
import { GetItemCookie } from '~/utils'

export const initialAppContext = {
  profile: GetItemCookie(),
  setProfile: (value: any) => {}
}

export const AppContext = createContext(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState(initialAppContext.profile)

  return (
    <AppContext.Provider
      value={{
        profile,
        setProfile
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
