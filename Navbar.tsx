import { useState } from "react";

const NavBar = () => {
  const [active, setActive] = useState<boolean>();

  return (
    <div
      className="
      antialiased
      bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400
    "
    >
      <header>
        <nav
          className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
        >
          <div className="uppercase font-bold">Logo</div>

          <div
            className="hidden w-full md:flex md:items-center md:w-auto"
            id="menu"
          >
            <ul
              className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
            >
              <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                  Customers
                </a>
              </li>
              <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                  href="#"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setActive(!active)}
            className="md:hidden absolute z-30 right-2"
          >
            <div>
              <button className="relative group">
                <div
                  className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200`}
                >
                  <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center text-black overflow-hidden">
                    <div
                      className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${
                        active && "rotate-[42deg]"
                      }`}
                    ></div>
                    <div
                      className={`bg-black h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                        active && "translate-x-10"
                      }`}
                    ></div>
                    <div
                      className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${
                        active && "rotate-[-42deg]"
                      }`}
                    ></div>
                  </div>
                </div>
              </button>
            </div>
          </button>
          <div
            className={`${
              active
                ? " opacity-100 pointer-events-auto"
                : "pointer-events-none opacity-0 "
            } w-full md:hidden md:items-center md:w-auto transition-all ease-in-out duration-300  absolute  top-0 left-0 right-0 bottom-0  bg-gray-50 flex z-10 flex-col p-5`}
          >
            <hr className="h-[1px] mt-12 w-full bg-black mb-4" />
            <div className="h-full  flex flex-col justify-center">
              <ul
                className="
                 text-gray-700
                md:flex
                md:justify-between
                md:pt-0  flex flex-col items-center gap-10 text-2xl font-medium"
                onClick={() => setActive(false)}
              >
                <li>
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400"
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400"
                    href="#"
                  >
                    Customers
                  </a>
                </li>
                <li>
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                    href="#"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
