import { NavLink } from "react-router-dom";
import { TiStarFullOutline } from "react-icons/ti";
import { PrimaryButton } from "../Button/Button";
import { FaUserCircle } from "react-icons/fa";
import { Search } from "../Input/Inputs";
import { CiSearch } from "react-icons/ci";
import { CgFormatSlash } from "react-icons/cg";
import { useState } from "react";
import { AiFillPieChart } from "react-icons/ai";
const Navbar = () => {
  const [subMenu, setSubMenu] = useState(false);
  const showMenu = () => {
    setSubMenu(!subMenu);
  };
  const hideMenu = () => {
    setSubMenu(subMenu);
  };
  const baseMenuClass = `text-2xl font-semibold hover:text-primary hover:${subMenu}`;

  return (
    <>
      <div className="shadow-xl p-8 flex justify-between bg-white z-10 fixed top-0 mt-0 w-full">
        <div className="flex items-center gap-14">
          <p className="font-bold text-4xl">CoinMarketCap</p>
          <div className="flex gap-10 items-center">
            <NavLink
              to="/om"
              // onMouseOver={showMenu}
              // onMouseOut={hideMenu}
              className={baseMenuClass}
            >
              Cryptocurrencies
            </NavLink>
            <NavLink
              to="/Communities"
              // onMouseEnter={showMenu}
              // onMouseLeave={hideMenu}
              className={baseMenuClass}
            >
              Community
            </NavLink>
            <NavLink
              to="/om"
              // onMouseEnter={showMenu}
              // onMouseLeave={hideMenu}
              className={baseMenuClass}
            >
              Exchanges
            </NavLink>
            <NavLink
              to="/om"
              // onMouseEnter={showMenu}
              // onMouseLeave={hideMenu}
              className={baseMenuClass}
            >
              Products
            </NavLink>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-3">
              <small>
                <AiFillPieChart size={30} className="text-gray-300" />
              </small>
              <p className="text-xl">Portfolio</p>
            </div>
            <div className="flex items-center gap-3">
              <small>
                <TiStarFullOutline size={30} className="text-gray-300" />
              </small>
              <p className="text-xl">Watchlist</p>
            </div>
            <Search
              type="text"
              icon1={<CiSearch size={26} />}
              icon2={
                <CgFormatSlash
                  className="bg-gray-400 text-white p-[0px] rounded font-semibold"
                  size={30}
                />
              }
              placeholder="Search"
            />
            <PrimaryButton type="button" text="Sign  Up" />{" "}
            <NavLink to="/">
              <FaUserCircle size={50} />
            </NavLink>
          </div>
        </div>
        {subMenu && (
          <div className="bg-white rounded p-10 absolute w-[50%] top-[130px] shadow-lg">
            <p className="text-2xl font-bold ">Crypto</p>
          </div>
        )}
      </div>
      {/* <hr className="bg-black h-2"/> */}
    </>
  );
};

export default Navbar;
