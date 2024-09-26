import { createContext, useState } from "react";

export const UserProfileContext = createContext([{
  name: '',
  isLogged: true
}]);

export const UserProfileContextProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);

  return (
    <UserProfileContext.Provider value={{ profiles, setProfiles }}>
      {children}
    </UserProfileContext.Provider>
  );
};
