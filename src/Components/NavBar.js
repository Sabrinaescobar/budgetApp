import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-light ">
      <div >
      <h1>
        <Link className="nav-link" to="/transactions">Budget App</Link>
      </h1>
      </div>
      <div>
      <button className="btn btn-outline-dark">
        <Link className="nav-link" to="/transactions/new">New Transaction</Link>
      </button>
      </div>
    </nav>
  );
} 
