import Navbar from "../../Components/Nav/Navbar";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaGasPump } from "react-icons/fa";
import { PrimaryButton } from "../../Components/Button/Button";
import { Body } from "../../Components/Body/Body";
import Footer from "../../Components/Footer/Footer";

type headerProps = {
  text: string;
  values: string | number;
  icon?: JSX.Element;
  percent?: string;
  gasIcon?: JSX.Element;
};

const headerProperties: headerProps[] = [
  {
    text: "Cryptos",
    values: "2.4M+",
  },
  {
    text: "Exchanges",
    values: "751",
  },
  {
    text: "Market Cap",
    values: "$2.11T",
    icon: <IoMdArrowDropdown />,
    percent: "1.44%",
  },
  {
    text: "24h Vol",
    values: "$92.11B",
    icon: <IoMdArrowDropdown />,
    percent: "19.44%",
  },
  {
    text: "Dominance",
    values: "BTC: 56.8% ETH: 50%",
  },
  {
    gasIcon: <FaGasPump className="me-1"/>,
    text: "ETh gas",
    values: "4.9 Gwei",
    icon: <MdKeyboardArrowDown />,
  },
  {
    text: "Fear & Gas",
    values: "36/100",
  },
];

const Header = ({ className }: {className: string}) => {
  return (
    <>
      <div className={className}>
        <div className="flex px-4 items-center py-2 w-full justify-between">
          <div className="hidden lg:flex items-center gap-4">
            {headerProperties.map(
              ({ text, values, icon, percent, gasIcon }) => {
                return (
                  <div className="flex items-center font-semibold text-[10px] text-gray-500">
                    {gasIcon}
                    <p className="flex gap-1">
                      <span>{text}</span>:<span className="text-primary">{values}</span>
                    </p>
                    <div
                      className={`flex ${
                        percent ? "text-red" : "text-primary"
                      } items-center`}
                    >
                      <p className="mx-[2px]">{icon}</p>
                      <p>{percent}</p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <div className="hidden w- lg:flex items-center gap-5">
            <PrimaryButton
              type="button"
              icon={<MdKeyboardArrowDown className="text-gray-400" size={20} />}
              text="Get listed"
              customStyles="!text-black px-2 gap-1 !bg-gray-200 !flex !items-center"
            />
            <PrimaryButton
              type="button"
              text="API"
              customStyles="!text-black px-3 !bg-gray-200 !flex !items-center"
            />
          </div>{" "}
        </div>
      </div>
      <hr className="hidden lg:block"/>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <Header className="flex mt-[50px] lg:mt-[80px] items-center justify-between" />
      <Body />
      <Footer />
    </>
  );
};

export { Home };
