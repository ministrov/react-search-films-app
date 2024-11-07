import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header/Header";
import { links } from "../const/const";
import { AppDispatch, RootState } from "../store/store";
import { logout } from "../store/user.slice";

function Layout() {
  const isLogged = useSelector((state: RootState) => state.profile.isLogged);
  const dispatch = useDispatch<AppDispatch>();

  const onLogoutHandler = () => {
    dispatch(logout());
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
