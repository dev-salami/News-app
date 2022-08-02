import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [Open, setOpen] = useState(false);
  const HandleClick = function () {
    setOpen(!Open);
  };
  return (
    <div className="fixed top-0 left-0 right-0">
      <div className="bg-black  px-4">
        <div className="flex flex-row h-[90px] justify-between items-center ">
          <span className="text-[#00d8ff] text-4xl font-bold ">NEY-NEWS</span>
          <div>
            <ul className="text-white text-base  font-medium hidden sm:flex space-x-6">
              <NavLink
                to="/"
                activeclassName="text-orange-400"
                className="hover:text-[#00d8ff] transition-all duration-300 px-2 py-1 cursor-pointer"
              >
                Politics
              </NavLink>
              <NavLink
                to="/Business"
                activeclassname="text-orange-400"
                className="hover:text-[#00d8ff] transition-all duration-300 px-2 py-1 cursor-pointer"
              >
                Business
              </NavLink>
              <NavLink
                to="/Football"
                activeclassname="text-orange-400"
                className="hover:text-[#00d8ff] transition-all duration-300 px-2 py-1 cursor-pointer"
              >
                Football
              </NavLink>
              <NavLink
                to="/Technology"
                activeclassname="text-orange-400"
                className="hover:text-[#00d8ff] transition-all duration-300 px-2 py-1 cursor-pointer"
              >
                Technology
              </NavLink>
              <NavLink
                to="/World"
                activeclassname="text-orange-400"
                className="hover:text-[#00d8ff] transition-all duration-300 px-2 py-1 cursor-pointer"
              >
                World{" "}
              </NavLink>
            </ul>
            <span
              onClick={HandleClick}
              className="block hover:cursor-pointer p-1  text-white sm:hidden"
            >
              {!Open ? <FaBars size={25} /> : <FaTimes size={25} />}
            </span>
          </div>
          {!Open ? null : (
            <div className="absolute left-0 right-0 top-[90px] ">
              <ul className="text-white text-base justify-center items-center pb-6 bg-black sm:hidden duration-400 transition-all  font-medium flex-col flex space-y-6">
                <NavLink
                  to="/"
                  activeclassname="text-orange-400"
                  className="hover:text-[#00d8ff] transition-all duration-300 px-2 py-1 cursor-pointer"
                >
                  Politics
                </NavLink>
                <NavLink
                  to="/Business"
                  activeclassname="text-orange-400"
                  className="hover:text-[#00d8ff] transition-all duration-300 px-2 py-1 cursor-pointer"
                >
                  Business
                </NavLink>
                <NavLink
                  to="/Football"
                  activeclassname="text-orange-400"
                  className="hover:text-[#00d8ff] transition-all duration-300 px-2 py-1 cursor-pointer"
                >
                  Football
                </NavLink>
                <NavLink
                  to="/Technology"
                  activeclassname="text-orange-400"
                  className="hover:text-[#00d8ff] transition-all duration-300 px-2 py-1 cursor-pointer"
                >
                  Technology
                </NavLink>
                <NavLink
                  to="/World"
                  activeclassname="text-orange-400"
                  className="hover:text-[#00d8ff] transition-all duration-300 px-2 py-1 cursor-pointer"
                >
                  World{" "}
                </NavLink>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
