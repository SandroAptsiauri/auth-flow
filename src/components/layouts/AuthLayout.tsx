import { Outlet } from "react-router-dom";
import "../main.scss";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <header>Authentication</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
