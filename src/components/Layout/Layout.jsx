import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
      <footer>
        <p>2025</p>
      </footer>
    </>
  );
};

export default Layout;
