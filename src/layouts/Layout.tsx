import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { links } from "../const/const";

export default function Layout() {
  // const { users } = useContext<MyContexType | any>(UserProfileContext);
  // const isLoggedIn = Boolean(users?.map((item: UserProfile) => item.isLogged.valueOf));
  // const isLoggedOut = Boolean(users?.map((item: UserProfile) => item.isLogged.valueOf));
  const [isLogged, setIsLogged] = useState<boolean>(true);

  const onLogoutHandler = () => {
    setIsLogged(false);
  };

  return (
    <div className="container">
      <Header
        links={links}
        logout={onLogoutHandler}
        isLogged={isLogged}
      />

      <main>
        <Outlet />
      </main>
    </div>
  )
}
