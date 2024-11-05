import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { links } from "../const/const";

function Layout() {
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

export default Layout;
