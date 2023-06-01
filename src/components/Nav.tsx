import { NavLink } from "react-router-dom";

const Nav: React.FC<any> = ({ className, settingsClicked }) => {
  return (
    <>
      <ul
        className={`flex justify-around py-4 ${
          className ? className : "w-full text-gray-800"
        }`}
      >
        <li>
          <NavLink
            to="/"
            className=" hover:border-b-2 hover:text-primary p-2 border-primary [&.active]:text-primary [&.active]:border-b-2 "
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className=" hover:border-b-2 hover:text-primary p-2 border-primary [&.active]:text-primary [&.active]:border-b-2"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className=" hover:border-b-2 hover:text-primary p-2 border-primary [&.active]:text-primary [&.active]:border-b-2"
          >
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className=" hover:border-b-2 hover:text-primary p-2 border-primary [&.active]:text-primary [&.active]:border-b-2"
          >
            Login
          </NavLink>
        </li>
        <li>
          <a
            onClick={settingsClicked}
            className=" hover:border-b-2 hover:text-primary p-2 border-primary [&.active]:text-primary [&.active]:border-b-2 cursor-pointer duration-300 ease-linear"
          >
            Settings
          </a>
        </li>
      </ul>
    </>
  );
};

export default Nav;
