import { createContext, ReactNode } from "react";

type UserProfileContextProviderProps = {
  children: ReactNode
}


export const UserProfileContext = createContext([{
  name: '',
  isLogged: true
}]);

export const UserProfileContextProvider = ({ children }: UserProfileContextProviderProps) => {
  // const [profiles, setProfiles] = useState<any>([]);

  return (
    <UserProfileContext.Provider value={[]}>
      {children}
    </UserProfileContext.Provider>
  );
};
