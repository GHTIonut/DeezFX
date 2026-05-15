import logo from "../assets/logo.svg";
import "../02-Style/Navbar.css";

export function Navbar() {
  return (
    <nav className="myNavbar navbar navbar-expand-sm  w-100 pt-3 pb-0 container bg-light border-2 border-bottom border-dark">
      <ul className="container d-flex list-unstyled justify-content-center align-items-center flex-row gap-2 ">
        <li className="">
          <img src={logo} alt="logo" />
        </li>
        <li>
          <input
            type="text"
            placeholder="e.g.: Animation"
            className="bg-dark text-white border-2 border-black rounded-2"
          />
        </li>
        <li>
          <button className="btn text-black border-2 border-black">
            Search
          </button>
        </li>
        <li className="ms-auto">
          <button className="btn text-black border-2 border-black">Home</button>
        </li>
        <li>
          <button className="btn text-black border-2 border-black">
            About
          </button>
        </li>
        <li>
          <button className="btn btn-secondary">Sign up</button>
        </li>
        <li>
          <button className="btn text-white bg-black">Log in</button>
        </li>
      </ul>
    </nav>
  );
}
