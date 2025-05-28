import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const handleNavIconClick = () => {
    setVisible(!visible);
  };

  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Products", link: "/products" },
    { id: 3, text: "Categories", link: "/categories" },
    { id: 4, text: "About", link: "/about" },
  ];

  return (
    <nav className="flex justify-between items-center h-24 mx-auto px-4 text-white">
      <NavLink to="/" className="flex">
        <svg
          width="40"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
        >
          <polygon
            points="20,5 35,15 35,35 20,45 5,35 5,15"
            transform="scale(0.7)"
          />
        </svg>
        <span className="w-full text-3xl font-bold">React CRUD Demo</span>
      </NavLink>

      <div className="hidden md:flex">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            className={({ isActive }) =>
              `p-6 text-lg hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black ${
                isActive ? "underline decoration-[#00df9a]" : ""
              }`
            }
            to={item.link}
          >
            {item.text}
          </NavLink>
        ))}
      </div>

      <div onClick={handleNavIconClick} className="block md:hidden">
        {visible ? <X size={24} /> : <Menu size={24} />}
      </div>

      <div
        className={
          visible
            ? "flex flex-col fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <NavLink to="/" className="flex py-6 px-2">
          <svg
            width="40"
            height="40"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
          >
            <polygon
              points="20,5 35,15 35,35 20,45 5,35 5,15"
              transform="scale(0.7)"
            />
          </svg>
          <span className="w-full text-3xl font-bold">React CRUD Demo</span>
        </NavLink>
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            onClick={handleNavIconClick}
            className={({ isActive }) =>
              `p-4 text-lg border-b hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 ${
                isActive ? "underline decoration-[#00df9a]" : ""
              }`
            }
            to={item.link}
          >
            {item.text}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
