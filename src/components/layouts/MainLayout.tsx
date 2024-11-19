import { Outlet } from "react-router-dom";
import "../main.scss";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <header>Main App</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
