import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Our App</h1>
      <p>
        Please <Link to="/login">Login</Link> or{" "}
        <Link to="/register">Register</Link> to continue.
      </p>
    </div>
  );
};

export default Home;
