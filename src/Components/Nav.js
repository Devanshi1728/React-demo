
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  
  const logout = () => {
    localStorage.clear();
    navigate("/register");
  };

  return (
    <div>
      {user ? (
        <ul className="nav-ul">
          <li>
            <Link to="/userlist">User List</Link>
          </li>
          <li>
            <Link to="/addtask">Add Task</Link>
          </li>
          <li>
            <Link onClick={logout} to="/register">
              Logout ({user.userName})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul">
          <li>
            <Link to="/register">Sign up</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
