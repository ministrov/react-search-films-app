import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "../components/header/Header";
import { AppDispatch } from "../store/store";
import { logout } from "../store/user.slice";

function Layout() {
  return (
    <div className="container">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;
