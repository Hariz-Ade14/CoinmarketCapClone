import Navbar from "../../Components/Nav/Navbar";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaGasPump } from "react-icons/fa";
import { PrimaryButton } from "../../Components/Button/Button";
import { Body } from "../../Components/Body/Body";
import { Pagination } from "../../Components/Pagination/Pagination";
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
    gasIcon: <FaGasPump />,
    text: "ETh gas",
    values: "4.9 Gwei",
    icon: <MdKeyboardArrowDown />,
  },
  {
    text: "Fear & Gas",
    values: "36/100",
  },
];

const Header = ({className}: any) => {
  return (
    <>
     <div className={className}>
      <div className="flex items-center gap-4 px-8 py-6">
        {headerProperties.map(({ text, values, icon, percent ,gasIcon}) => {
          return (
            <div className="flex items-center font-semibold text-[1.125rem] text-gray-500">
                <p className="me-2">{gasIcon}</p>
              <p>{text}</p>:<p className="ms-2 text-primary">{values}</p>
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
        })}
      </div>
      <div className="flex gap-5 me-8">
        <PrimaryButton type="button" icon={<MdKeyboardArrowDown className="text-gray-400" size={30}/>} text="Get listed" customStyles="!text-black px-4 !bg-gray-200 !flex !items-center"/>
        <PrimaryButton type="button" text="API" customStyles="!text-black px-4 !bg-gray-200 !flex !items-center"/>
           
      </div>
      </div>
      <hr />
    </>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <Header className="flex bg-green-300 mt-[140px] items-center justify-between"/>
      <Body/>
      <Pagination totalPages={10}/>
      <Footer/>
    </>
  );
};

export { Home };
