import './App.css';
import {
  Link, Router
} from "react-router-dom";

function Nav() {
  return (
      <Router>
    <div className="Nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/faq">F.A.Q</Link>
        <Link to="/store">Store</Link>
        <Link to="/">App</Link>
    </div>
      </Router>
  );
}

export default Nav;
