import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex bg-fuchsia-100 border-width-[2px] items-center rounded-sm justify-between m-6 p-4  shawdow-md">
      <h1 className="text-2xl font-bold">Book Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home" className="text-xl underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="users" className="text-xl underline">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
