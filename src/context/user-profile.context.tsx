import { createContext, ReactNode, useState } from "react";
import { loadData } from "../helpers/functions";

export type UserProfileContextProviderProps = {
  children: ReactNode;
}

export type UserProfile = {
  name: string;
  isLogged: boolean;
}

export type MyContexType = {
  users: UserProfile[] | ((key: string) => void);
  addUser: (item: UserProfile) => void;
  changeUsers: (item: UserProfile[]) => void;
}

export const UserProfileContext = createContext<MyContexType | undefined>(undefined);

export const UserProfileContextProvider = ({ children }: UserProfileContextProviderProps) => {
  const initialState = loadData<UserProfile[]>('user-profile');
  const [users, setUsers] = useState<UserProfile[]>(initialState as UserProfile[]);

  function addUser(item: UserProfile) {
    setUsers((prevState) => [...prevState, item]);
  };

  function changeUsers(item: UserProfile[]) {
    setUsers(item);
  };
  return (
    <UserProfileContext.Provider value={{ users, addUser, changeUsers }}>
      {children}
    </UserProfileContext.Provider>
  );
};
