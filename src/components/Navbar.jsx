import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Local Community Events</h1>
      <Link to="/create-event" className="nav-btn">
        Host Event
      </Link>
    </nav>
  );
}

