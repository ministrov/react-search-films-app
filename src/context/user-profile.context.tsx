import { createContext, ReactNode, useState } from "react";

export type UserProfileContextProviderProps = {
  children: ReactNode;
}

export type UserProfile = {
  name: string;
  isLogged: boolean;
}

export type MyContexType = {
  users: UserProfile[];
  addUser: (item: UserProfile) => void;
  changeUsers: (item: UserProfile[]) => void;
}

export const UserProfileContext = createContext<MyContexType | undefined>(undefined);

export const UserProfileContextProvider = ({ children }: UserProfileContextProviderProps) => {
  const [users, setUsers] = useState<UserProfile[]>([]);

  function addUser(item: UserProfile) {
    if (item.name) {
      setUsers((prevState) => [...prevState, item]);
    }
  };

  function changeUsers(item: UserProfile[]) {
    if (item.length !== 0) {
      setUsers(item);
    }
  };
  return (
    <UserProfileContext.Provider value={{ users, addUser, changeUsers }}>
      {children}
    </UserProfileContext.Provider>
  );
};
