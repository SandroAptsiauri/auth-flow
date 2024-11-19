import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-page">
      <h1>Welcome to the Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
