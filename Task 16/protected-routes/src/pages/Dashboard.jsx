import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome, {user.username} </h1>
      <button
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
