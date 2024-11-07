import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/header/Header";
import { links } from "../const/const";
import { RootState } from "../store/store";

function Layout() {
  const profile = useSelector((state: RootState) => state.profile.isLogged);
  // const [isLogged, setIsLogged] = useState<boolean>(true);

  const onLogoutHandler = () => {
    // setIsLogged(false);
  };

  return (
    <div className="container">
      <Header
        links={links}
        logout={onLogoutHandler}
        isLogged={profile}
      />

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;
