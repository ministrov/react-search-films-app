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
  // changeUsers: (item: UserProfile[]) => void;
}

export const UserProfileContext = createContext<MyContexType | undefined>(undefined);

export const UserProfileContextProvider = ({ children }: UserProfileContextProviderProps) => {
  const [users, setUsers] = useState<UserProfile[]>([{ name: "test", isLogged: true }]);

  function addUser(item: UserProfile) {
    setUsers((prevState) => [...prevState, { name: item.name, isLogged: item.isLogged }]);
  };

  // function changeUsers(item: UserProfile[]) {
  //   setUsers(item);
  // };
  return (
    <UserProfileContext.Provider value={{ users, addUser }}>
      {children}
    </UserProfileContext.Provider>
  );
};
