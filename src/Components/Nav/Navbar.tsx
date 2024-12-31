import { NavLink } from "react-router-dom";
import { TiStarFullOutline } from "react-icons/ti";
import { PrimaryButton } from "../Button/Button";
import { FaUserCircle } from "react-icons/fa";
import { Search } from "../Input/Inputs";
import { CiSearch } from "react-icons/ci";
import { CgFormatSlash } from "react-icons/cg";
import { ChangeEvent, useState } from "react";
import { AiFillPieChart, AiOutlineBars } from "react-icons/ai";
import { IoDiamondSharp } from "react-icons/io5";
import { IoMdClose, IoIosArrowDown } from "react-icons/io";
import { FaBarsStaggered, FaRankingStar } from "react-icons/fa6";
import {
  FaTwitter,
  FaFacebookSquare,
  FaTelegramPlane,
  FaLinkedin,
  FaInstagram,
  FaRedditAlien,
} from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/Components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { FaLockOpen } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";

type menuProps = {
  id: string;
  value: string;
  path: string;
  sm?: React.FC;
};

const menuLists: menuProps[] = [
  {
    id: "1",
    value: "Cryptocurrencies",
    path: "/",
    // sm: <subMenu/>
  },
  {
    id: "2",
    value: "Community",
    path: "/",
  },
  {
    id: "3",
    value: "Exchanges",
    path: "/",
  },
  {
    id: "4",
    value: "Products",
    path: "/",
  },
];

const Navbar = () => {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchvalue, setSearchValue] = useState("");

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);

    if (isMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  const closeMenu = () => {
    setMobileMenu(!isMobileMenu);
  };
  const navigate = useNavigate();

  const handleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <div>
      <div className="shadow-xl px-3 py-0 lg:p-4 flex justify-between bg-white z-10 fixed items-center top-0 mt-0 w-full">
        <div className="flex items-center lg-0 gap-2">
          <p className="font-bold lg:text-2xl">CoinMarketCap</p>
          <NavigationMenu className="hidden !justify-center lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>CryptoCurrencies</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3 flex gap-2 text-[13px] items-center">
                      <FaRankingStar
                        size={30}
                        className="bg-violet-800 p-2 text-white rounded-[50%]"
                      />
                      Ranking
                    </li>
                    <li className="row-span-3 flex gap-2 text-[13px] items-center">
                      <AiOutlineBars
                        size={30}
                        className="bg-yellow-600 p-2 text-white rounded-[50%]"
                      />
                      Categories
                    </li>
                    <li className="row-span-3 flex gap-2 text-[13px] items-center">
                      <AiFillPieChart
                        size={30}
                        className="bg-green-800 p-2 text-white rounded-[50%]"
                      />
                      Global Charts
                    </li>
                    <li className="row-span-3 flex gap-2 text-[13px] items-center">
                      <FaLockOpen
                        size={30}
                        className="bg-green-500 p-2 text-white rounded-[50%]"
                      />
                      Token Unlocks
                    </li>
                    <li className="row-span-3 flex gap-2 text-[13px] items-center">
                      <FaFireFlameCurved
                        size={30}
                        className="bg-orange-500 p-2 text-white rounded-[50%]"
                      />
                      Trending
                    </li>
                    <li className="row-span-3 flex gap-2 text-[13px] items-center">
                      <FaRankingStar
                        size={30}
                        className="bg-violet-800 p-2 text-white rounded-[50%]"
                      />
                      Ranking
                    </li>
                    <li className="row-span-3 flex gap-2 text-[13px] items-center">
                      <AiOutlineBars
                        size={30}
                        className="bg-yellow-600 p-2 text-white rounded-[50%]"
                      />
                      Categories
                    </li>
                    <li className="row-span-3 flex gap-2 text-[13px] items-center">
                      <AiFillPieChart
                        size={30}
                        className="bg-green-800 p-2 text-white rounded-[50%]"
                      />
                      Global Charts
                    </li>
                    <li className="row-span-3 flex gap-2 text-[13px] items-center">
                      <FaLockOpen
                        size={30}
                        className="bg-green-500 p-2 text-white rounded-[50%]"
                      />
                      Token Unlocks
                    </li>
                    <li className="row-span-3 flex gap-2 text-[13px] items-center">
                      <FaFireFlameCurved
                        size={30}
                        className="bg-orange-500 p-2 text-white rounded-[50%]"
                      />
                      Trending
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {menuLists.map(({ id, value, path }) => (
                      <Link to={path}>
                        <li key={id}>{value}</li>
                      </Link>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/docs">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Airdrops
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-3 p-5 lg-0 block lg:hidden">
          {!isSearchOpen ? (
            <CiSearch size={25} onClick={handleSearch} />
          ) : (
            <IoMdClose size={25} onClick={handleSearch} />
          )}
          <IoDiamondSharp size={20} className="text-blue-400" />
          <FaBarsStaggered
            onClick={handleMobileMenu}
            className="cursor-pointer"
            size={25}
          />
        </div>

        {isMobileMenu && (
          <div className="block lg:hidden bg-white top-0 z-30 bottom-0 fixed left-0 right-0 w-full">
            <div className="flex flex-col p-3 gap-4 w-full">
              <div className="flex items-center justify-between ">
                <p className="font-bold">CoinMarketCap</p>
                <IoMdClose
                  onClick={closeMenu}
                  size={"30px"}
                  className="text-black cursor-pointer font-bold"
                />
              </div>

              <div className="flex mt-0 flex-col gap-10">
                <div className="flex items-center justify-between w-full">
                  <p className="font ">Cryptocurrencies</p>
                  <p>
                    <IoIosArrowDown size={20} />
                  </p>
                </div>
                <div className="flex items-center justify-between w-full ">
                  <p className="font ">Exchanges</p>
                  <p>
                    <IoIosArrowDown size={20} />
                  </p>
                </div>
                <div className="flex items-center justify-between w-full">
                  <p className="font ">Community</p>
                  <p>
                    <IoIosArrowDown size={20} />
                  </p>
                </div>
                <div className="flex items-center justify-between w-full ">
                  <p className="font- ">Products</p>
                  <p>
                    <IoIosArrowDown size={20} />
                  </p>
                </div>
                <div className="flex gap-5 flex-col-reverse">
                  <div className="flex items-center gap-3">
                    <small>
                      <AiFillPieChart size={30} className="text-gray-300" />
                    </small>
                    <p className="">Portfolio</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <small>
                      <TiStarFullOutline size={30} className="text-gray-300" />
                    </small>
                    <p className="">Watchlist</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <p>
                    <IoDiamondSharp size={30} className="text-blue-300" />
                  </p>
                  <p className="">My Diamonds</p>
                </div>
                <div className="btn">
                  <Link to="/signup">
                    <PrimaryButton
                      type="button"
                      customStyles="w-full !bg-primary "
                      text="Create an account"
                    />
                  </Link>
                  <Link to="/login">
                    <PrimaryButton
                      type="button"
                      customStyles="w-full !bg-primary !mt-5"
                      text="Log in"
                    />
                  </Link>
                </div>
                <div className="socials flex gap-5 items-center justify-center">
                  <FaTwitter size={30} />
                  <FaFacebookSquare size={30} />
                  <FaTelegramPlane size={30} />
                  <FaLinkedin size={30} />
                  <FaInstagram size={30} />
                  <FaRedditAlien size={30} />
                </div>
              </div>
            </div>
          </div>
        )}

        {isSearchOpen && (
          <div className="absolute left-0 right-0 mt-28 px-8 lg:hidden bg-white py-5 shadow-xl text-black">
            <Search
              searchValue={searchvalue}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchValue(e.target.value)
              }
              type="text"
              icon1={<CiSearch />}
              icon2={<MdCancel onClick={() => setSearchValue("")} />}
              placeholder="Search"
              customStyles="!w-full !font-light !rounded"
            />
          </div>
        )}

        <div className="hidden lg:block">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <small>
                <AiFillPieChart size={20} className="text-gray-300" />
              </small>
              <p className="">Portfolio</p>
            </div>
            <div className="flex items-center gap-1">
              <small>
                <TiStarFullOutline size={20} className="text-gray-300" />
              </small>
              <p className="">Watchlist</p>
            </div>
            <Search
              type="text"
              icon1={<CiSearch size={20} />}
              icon2={
                <CgFormatSlash
                  className="bg-gray-400 text-white p-[0px] rounded font-semibold"
                  size={20}
                />
              }
              searchValue={searchvalue}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchValue(e.target.value)
              }
              placeholder="Search"
            />
            <PrimaryButton
              type="button"
              text="Sign Up"
              onClick={() => navigate("/signup")}
            />
            <NavLink to="/signup">
              <FaUserCircle size={20} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
