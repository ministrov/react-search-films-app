import { createContext, ReactNode, useState } from "react";
import { INITIAL_STATE } from "../const/const";

type UserProfileContextProviderProps = {
  children: ReactNode;
}

export const UserProfileContext = createContext(INITIAL_STATE);

export const UserProfileContextProvider = ({ children }: UserProfileContextProviderProps) => {
  return (
    <UserProfileContext.Provider value={INITIAL_STATE}>
      {children}
    </UserProfileContext.Provider>
  );
};
