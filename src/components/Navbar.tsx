import { useState } from "react";
import Logo from "../assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import navItems from "../utils/NavItems";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobile, setMobile] = useState<boolean>(false);

  const getCurrentPage = () => {
    return window.location.pathname;
  };
  const isActivePage = (page: string) => {
    return getCurrentPage() === page ? "font-extrabold" : "";
  };

  return (
    <nav className="flex flex-wrap justify-between items-center px-8 py-4 bg-gray-950">
      <Link to="https://www.asus.com" className="h-fit">
        <img className="w-32 h-auto" src={Logo} alt="logo" />
      </Link>

      <button
        onClick={() => setMobile(!isMobile)}
        className="btn-anim p-2 rounded-lg hover:bg-gray-600 lg:hidden"
      >
        <RxHamburgerMenu size={25} className="text-white" />
      </button>

      <div className={`${!isMobile && "hidden"} w-full lg:w-auto lg:block`}>
        <ul className="flex flex-col p-4 text-lg text-white lg:flex-row lg:space-x-10">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="p-1 hover:bg-gray-600 hover:rounded-lg lg:hover:bg-transparent"
            >
              <Link
                to={item.path}
                className={`hover:text-blue-500 ${isActivePage(item.path)}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
