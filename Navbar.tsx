import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [active, setActive] = useState<boolean>();

  return (
    <div
      className="
      
     bg-white  md:backdrop-blur-lg	
     md:bg-[transparent]  md:fixed w-full"
    >
      <header>
        <nav
          className="
          flex flex-wrap
          max-w-[1140px]
          items-center
          justify-between
          w-full
          md:py-0
          px-5
          mx-auto
          bg-white
          
          fixed
          md:static
          md:backdrop-blur-lg	
          md:bg-[transparent]
          py-3
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
              <li className="flex items-center cursor-pointer">
                <Link href="/signup">
                  <div className="bg-black px-4 py-2 text-white rounded-lg">
                    Get Started
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setActive(!active)}
            className="md:hidden fixed z-30 right-2"
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
            } w-full md:hidden md:items-center md:w-auto transition-all ease-in-out duration-300  fixed  top-0 left-0 right-0 bottom-0  bg-white flex z-10 flex-col p-5`}
          >
            <span>LOGO</span>
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
                  <div className="bg-black p-4 text-white rounded-lg">
                    <Link href="/signup">Get Started</Link>
                  </div>
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
