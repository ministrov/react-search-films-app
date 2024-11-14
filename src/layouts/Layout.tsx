import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "../components/header/Header";
import { AppDispatch } from "../store/store";
import { logout } from "../store/user.slice";

function Layout() {
  const dispatch = useDispatch<AppDispatch>();

  const onLogoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="container">
      <Header
        logout={onLogoutHandler}
      />

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;
