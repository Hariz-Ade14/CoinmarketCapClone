import { IoMdArrowDropdown } from "react-icons/io";
import { BsUnlock } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { RiNftLine } from "react-icons/ri";
import { FaGripfire } from "react-icons/fa";
import { PrimaryButton } from "../Button/Button";
import { RiEqualizer2Line } from "react-icons/ri";
import { BiCoinStack } from "react-icons/bi";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdAlert } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { MdOutlineSsidChart } from "react-icons/md";
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { RiBnbLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

type props = {
  text: string;
  icon: JSX.Element;
};
const lists: props[] = [
  {
    text: "Rehypothected",
    icon: <FaGripfire size={30} className="text-orange-500" />,
  },
  {
    text: "Memes",
    icon: <FaGripfire size={30} className="text-orange-500" />,
  },
  {
    text: "Solana Eco",
    icon: <FaGripfire size={30} className="text-orange-500" />,
  },
  {
    text: "AI",
    icon: <FaGripfire size={30} className="text-orange-500" />,
  },
  {
    text: "Gaming",
    icon: <FaGripfire size={30} className="text-orange-500" />,
  },
  {
    text: "RWA",
    icon: <FaGripfire size={30} className="text-orange-500" />,
  },
  {
    text: "DePIN",
    icon: <FaGripfire size={30} className="text-orange-500" />,
  },
];

type coinsProps = {
  star: JSX.Element;
  index: number;
  img: JSX.Element | string;
  name: string;
  ticker: string;
  price: string;
  oneHr: number;
  twentyfourHr: number;
  sevenDay: number;
  marketCap: string;
  Vol: string;
  subVol: string;
  supply: string;
  days: React.ReactNode;
};

const coinData: coinsProps[] = [
  {
    star: <CiStar size={20} />,
    index: 1,
    img: <FaBitcoin size={40} className="text-orange-500" />,
    name: "Bitcoin",
    ticker: "BTC",
    price: "60,555.54",
    oneHr: 0.32,
    twentyfourHr: 0.52,
    sevenDay: 4.56,
    marketCap: "1,999,992,999,547",
    Vol: "58,362,344,636",
    subVol: "845,455",
    supply: "4,677,629,503",
    days: <MdOutlineSsidChart size={100} className="text-red"/>,
  },
  {
    star: <CiStar size={20} />,
    index: 2,
    img: <FaEthereum size={40} className="text-black" />,
    name: "Ethereum",
    ticker: "ETH",
    price: "2,300.54",
    oneHr: 0.62,
    twentyfourHr: 0.62,
    sevenDay: 4.56,
    marketCap: "1,999,992,999,547",
    Vol: "58,362,344,636",
    subVol: "845,455",
    supply: "4,677,629,503",
    days: <MdOutlineSsidChart size={100} className="text-green-500"/>,
  },
  {
    star: <CiStar size={20} />,
    index: 3,
    img: <SiTether size={40} className="text-green-700" />,
    name: "Tether",
    ticker: "USDT",
    price: "1",
    oneHr: 4.32,
    twentyfourHr: 4.52,
    sevenDay: 4.56,
    marketCap: "992,999,547",
    Vol: "5,844,636",
    subVol: "8,455",
    supply: "4,677,503",
    days: <MdOutlineSsidChart size={100} className="text-red"/>,
  },
  {
    star: <CiStar size={20} />,
    index: 4,
    img: <RiBnbLine size={40} className="bg-yellow-500 p-1 text-white rounded-[50%]" />,
    name: "BNB",
    ticker: "BNB",
    price: "539.6",
    oneHr: 4.32,
    twentyfourHr: 4.52,
    sevenDay: 4.56,
    marketCap: "992,999,547",
    Vol: "5,844,636",
    subVol: "8,455",
    supply: "4,677,503",
    days: <MdOutlineSsidChart size={90} className="text-green-500"/>,
  },
  {
    star: <CiStar size={20} />,
    index: 4,
    img: <RiBnbLine size={40} className="bg-yellow-500 p-1 text-white rounded-[50%]" />,
    name: "BNB",
    ticker: "BNB",
    price: "539.6",
    oneHr: 4.32,
    twentyfourHr: 4.52,
    sevenDay: 4.56,
    marketCap: "992,999,547",
    Vol: "5,844,636",
    subVol: "8,455",
    supply: "4,677,503",
    days: <MdOutlineSsidChart size={90} className="text-green-500"/>,
  },
  {
    star: <CiStar size={20} />,
    index: 4,
    img: <RiBnbLine size={40} className="bg-yellow-500 p-1 text-white rounded-[50%]" />,
    name: "BNB",
    ticker: "BNB",
    price: "539.6",
    oneHr: 4.32,
    twentyfourHr: 4.52,
    sevenDay: 4.56,
    marketCap: "992,999,547",
    Vol: "5,844,636",
    subVol: "8,455",
    supply: "4,677,503",
    days: <MdOutlineSsidChart size={90} className="text-green-500"/>,
  },
  {
    star: <CiStar size={20} />,
    index: 4,
    img: <RiBnbLine size={40} className="bg-yellow-500 p-1 text-white rounded-[50%]" />,
    name: "BNB",
    ticker: "BNB",
    price: "539.6",
    oneHr: 4.32,
    twentyfourHr: 4.52,
    sevenDay: 4.56,
    marketCap: "992,999,547",
    Vol: "5,844,636",
    subVol: "8,455",
    supply: "4,677,503",
    days: <MdOutlineSsidChart size={90} className="text-green-500"/>,
  },
  {
    star: <CiStar size={20} />,
    index: 4,
    img: <RiBnbLine size={40} className="bg-yellow-500 p-1 text-white rounded-[50%]" />,
    name: "BNB",
    ticker: "BNB",
    price: "539.6",
    oneHr: 4.32,
    twentyfourHr: 4.52,
    sevenDay: 4.56,
    marketCap: "992,999,547",
    Vol: "5,844,636",
    subVol: "8,455",
    supply: "4,677,503",
    days: <MdOutlineSsidChart size={90} className="text-green-500"/>,
  },
  {
    star: <CiStar size={20} />,
    index: 4,
    img: <RiBnbLine size={40} className="bg-yellow-500 p-1 text-white rounded-[50%]" />,
    name: "BNB",
    ticker: "BNB",
    price: "539.6",
    oneHr: 4.32,
    twentyfourHr: 4.52,
    sevenDay: 4.56,
    marketCap: "992,999,547",
    Vol: "5,844,636",
    subVol: "8,455",
    supply: "4,677,503",
    days: <MdOutlineSsidChart size={90} className="text-green-500"/>,
  },
  {
    star: <CiStar size={20} />,
    index: 4,
    img: <RiBnbLine size={40} className="bg-yellow-500 p-1 text-white rounded-[50%]" />,
    name: "BNB",
    ticker: "BNB",
    price: "539.6",
    oneHr: 4.32,
    twentyfourHr: 4.52,
    sevenDay: 4.56,
    marketCap: "992,999,547",
    Vol: "5,844,636",
    subVol: "8,455",
    supply: "4,677,503",
    days: <MdOutlineSsidChart size={90} className="text-green-500"/>,
  },
  {
    star: <CiStar size={20} />,
    index: 4,
    img: <RiBnbLine size={40} className="bg-yellow-500 p-1 text-white rounded-[50%]" />,
    name: "BNB",
    ticker: "BNB",
    price: "539.6",
    oneHr: 4.32,
    twentyfourHr: 4.52,
    sevenDay: 4.56,
    marketCap: "992,999,547",
    Vol: "5,844,636",
    subVol: "8,455",
    supply: "4,677,503",
    days: <MdOutlineSsidChart size={90} className="text-green-500"/>,
  },
  {
    star: <CiStar size={20} />,
    index: 4,
    img: <RiBnbLine size={40} className="bg-yellow-500 p-1 text-white rounded-[50%]" />,
    name: "BNB",
    ticker: "BNB",
    price: "539.6",
    oneHr: 4.32,
    twentyfourHr: 4.52,
    sevenDay: 4.56,
    marketCap: "992,999,547",
    Vol: "5,844,636",
    subVol: "8,455",
    supply: "4,677,503",
    days: <MdOutlineSsidChart size={90} className="text-green-500"/>,
  },
  {
    star: <CiStar size={20} />,
    index: 4,
    img: <RiBnbLine size={40} className="bg-yellow-500 p-1 text-white rounded-[50%]" />,
    name: "BNB",
    ticker: "BNB",
    price: "539.6",
    oneHr: 4.32,
    twentyfourHr: 4.52,
    sevenDay: 4.56,
    marketCap: "992,999,547",
    Vol: "5,844,636",
    subVol: "8,455",
    supply: "4,677,503",
    days: <MdOutlineSsidChart size={90} className="text-green-500"/>,
  },
];

const CoinData = () => {
  return (
    <>
      <div className="px-8 py-4 text-[22px] font-semibold">
        {coinData.map(
          ({
            star,
            index,
            img,
            name,
            ticker,
            price,
            oneHr,
            twentyfourHr,
            sevenDay,
            marketCap,
            Vol,
            subVol,
            supply,
            days,
          }) => {
            return (
              <>
                <div className="">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center  w-[24%]">
                      <p>{star}</p>
                      <p className="mx-12">{index}</p>
                      <div className="flex items-center gap-3">
                        <p>{img}</p>
                        <p className="font-bold text-[25px]">{name}</p>
                        <p className="text-gray-500 m-0">{ticker}</p>
                      </div>
                    </div>

                

                    <div className="flex items-center py-1 w-[23.2%] px-0 justify-evenly font-semibold">
                      <p className="text-green-500 w-[23%] text-right">${price}</p>
                      <p className="flex justify-end w-[18%] items-center">
                        {" "}
                        <IoMdArrowDropdown className="text-red" size={30} />
                        {oneHr}%
                      </p>
                      <p className="flex justify-end w-[24%] items-center">
                        {" "}
                        <IoMdArrowDropdown className="text-red" size={30} />
                        {twentyfourHr}%
                      </p>
                      <p className="flex w-[19%]  items-center justify-end">
                        {" "}
                        <IoMdArrowDropdown className="text-red" size={30} />
                        {sevenDay}%
                      </p>
                    </div>

                    
                    <div className="flex items-center justify-start px-4 w-[52%]">
                      <div className="flex items-center w-[20%] justify-end">
                        <p className="font-semibold">${marketCap}</p>
                      </div>
                      <div className="w-[25%] flex items-center justify-end">
                        <div className="flex items-center justify-end flex-col">
                          <p>${Vol}</p>
                          <small className=" w-full text-right">
                            {subVol}
                            <span className="ms-2">{ticker}</span>
                          </small>
                        </div>
                      </div>
                      <div className="flex w-[30%] items-center text-right justify-end">
                          <p>${supply}<span className="ms-2">{ticker}</span></p>
                        </div>
                      <div className="flex w-[19%] items-center text-right justify-end">
                            <p>{days}</p>
                        </div>
                     
                     
                    </div>
                  </div>
                </div>
                <hr />
              </>
            );
          }
        )}
      </div>
    </>
  );
};
export const Body = () => {
  return (
    <div className="">
      
      <div className="px-8 pt-5">
        <h1 className="text-[40px] font-bold">
          Today's Cryptocurrency Prices by Market Cap
        </h1>
        <p className="flex items-center gap-2 font mt-2 text-gray-400 text-2xl">
          The global crypto market cap is $2.13T, a
          <span className="flex items-center text-red">
            <IoMdArrowDropdown className="mt-1" size={25} /> 1.28%
          </span>
          decrease over the last day.
          <a href="#" className="underline">
            Read More
          </a>
        </p>
      </div>
      <div className="flex items-center justify-between text-[19px] px-8 mt-20">
        <div className="flex items-center gap-8 font-semibold">
          <p className="bg-blue-100 rounded-xl px-7 py-2">All</p>
          <div className="flex gap-2 text-gray-400 items-center">
            <RiNftLine size={20} /> <p className="">NFTs</p>
          </div>
          <div className="flex gap-2 text-gray-400 items-center">
            <AiOutlineBars size={25} /> <p className="">Categories</p>
          </div>
          <div className="flex gap-2 text-gray-400 items-center">
            <BsUnlock size={20} /> <p className="">Token Unlocks</p>
          </div>
        </div>
        <p>|</p>
        <div className="flex flex items-center gap-8 font-semibold">
          {lists.map(({ text, icon }) => {
            return (
              <>
                <div className="flex text-gray-400 gap-2">
                  <p>{icon}</p>
                  <p>{text}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex bg-red-500 gap-3 ms-12">
          <PrimaryButton
            type="button"
            icon={<RiEqualizer2Line className="text-gray-400 ms-2" size={30} />}
            text="Filters"
            customStyles="!text-black px-4 !py-2 !bg-gray-200 !flex !items-center"
          />
          <PrimaryButton
            type="button"
            icon={<BiCoinStack className="text-gray-400" size={30} />}
            text="Customize"
            customStyles="!text-black px-4 !bg-gray-200 !flex !items-center"
          />
          <PrimaryButton
            type="button"
            icon={<IoMenuSharp className="text-gray-400" size={30} />}
            text=""
            customStyles="!text-black px-4 !bg-gray-200 !flex !items-center"
          />
        </div>
      </div>
      <hr className="mt-4" />
      <div className="flex items-center bg-white w-full text-[22px] px-8 mt-3">
        <div className="flex items-center w-[27%] gap-8 font-semibold">
          <p className="px-7">
            <span className="mx-10">#</span>Name
          </p>
        </div>

        <div className="flex items-center py-1 px-3 justify-start gap-14 font-semibold">
          <p className="font-semibold">Price</p>
          <p className="font-semibold">1hr %</p>
          <p className="font-semibold">24hr %</p>
          <p className="font-semibold">9d %</p>
        </div>

        <div className="flex justify-around px-10 w-[52%]">
          <div className="flex items-center">
            <p className="font-semibold">Market Cap</p>
            <IoMdAlert className="rotate-180 ms-1" size={25} />
          </div>
          <div className="flex items-center">
            <p className="font-semibold">Volume (24h)</p>
            <IoMdAlert className="rotate-180 ms-1" size={25} />
          </div>
          <div className="flex items-center">
            <p className="font-semibold">Circulating Supply</p>
            <IoMdAlert className="rotate-180 ms-1" size={25} />
          </div>
          <div className="flex items-center">
            <p className="font-semibold">Last 7 days</p>
          </div>
        </div>
      </div>
      <hr className="mt-3" />
      <CoinData />
    </div>
  );
};
