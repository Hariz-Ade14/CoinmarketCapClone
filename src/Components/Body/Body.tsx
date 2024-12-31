import { IoMdArrowDropdown } from "react-icons/io";
import { FaGripfire } from "react-icons/fa";
import { PrimaryButton } from "../Button/Button";
import { BiCoinStack } from "react-icons/bi";
import { IoMenuSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
// import { MdOutlineSsidChart } from "react-icons/md";
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { RiBnbLine } from "react-icons/ri";
import { SiStellar } from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
import { SiSolana } from "react-icons/si";
import { SiDogecoin } from "react-icons/si";
import { LuGem } from "react-icons/lu";
import { BsDroplet } from "react-icons/bs";
import { SiPolygon } from "react-icons/si";
import { SiHelium } from "react-icons/si";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table.tsx";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";
import filter from "../../../public/assets/Filter.svg";

type props = {
  text: string;
  icon: JSX.Element;
};
const lists: props[] = [
  {
    text: "Rehypo",
    icon: <FaGripfire size={20} className="text-orange-500" />,
  },
  {
    text: "Memes",
    icon: <FaGripfire size={20} className="text-orange-500" />,
  },
  {
    text: "Solana Eco",
    icon: <FaGripfire size={20} className="text-orange-500" />,
  },
  {
    text: "AI",
    icon: <FaGripfire size={20} className="text-orange-500" />,
  },
  {
    text: "Gaming",
    icon: <FaGripfire size={20} className="text-orange-500" />,
  },
  {
    text: "RWA",
    icon: <FaGripfire size={20} className="text-orange-500" />,
  },
  {
    text: "DePIN",
    icon: <FaGripfire size={20} className="text-orange-500" />,
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
  // days: React.ReactNode;
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
    // days: <MdOutlineSsidChart size={100} className="text-red text-right" />,
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
    // days: <MdOutlineSsidChart size={100} className="text-green-500" />,
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
    // days: <MdOutlineSsidChart size={100} className="text-red" />,
  },
  {
    star: <CiStar size={20} />,
    index: 4,
    img: (
      <RiBnbLine
        size={40}
        className="bg-yellow-500 p-1 text-white rounded-[50%]"
      />
    ),
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
    // days: <MdOutlineSsidChart size={90} className="text-green-500" />,
  },
  {
    star: <CiStar size={20} />,
    index: 5,
    img: (
      <IoLogoElectron
        size={40}
        className="bg-red p-1 text-white rounded-[50%]"
      />
    ),
    name: "TRON",
    ticker: "TRX",
    price: "0.156",
    oneHr: 4.32,
    twentyfourHr: 4.52,
    sevenDay: 4.56,
    marketCap: "992,999,547",
    Vol: "5,844,636",
    subVol: "8,455",
    supply: "4,677,503",
    // days: <MdOutlineSsidChart size={90} className="text-green-500" />,
  },
  {
    star: <CiStar size={20} />,
    index: 6,
    img: (
      <SiSolana
        size={40}
        className="bg-black p-2 text-purple-500 text-white rounded-[50%]"
      />
    ),
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
    // days: <MdOutlineSsidChart size={90} className="text-green-500" />,
  },
  {
    star: <CiStar size={20} />,
    index: 7,
    img: (
      <SiDogecoin
        size={40}
        className="bg-yellow-600 p-1 text-white rounded-[50%]"
      />
    ),
    name: "Dogecoin",
    ticker: "DOGE",
    price: "539.6",
    oneHr: 4.32,
    twentyfourHr: 4.52,
    sevenDay: 4.56,
    marketCap: "992,999,547",
    Vol: "5,844,636",
    subVol: "8,455",
    supply: "4,677,503",
    // days: <MdOutlineSsidChart size={90} className="text-red" />,
  },
  {
    star: <CiStar size={20} />,
    index: 8,
    img: (
      <LuGem size={45} className="bg-blue-500 p-2 text-white rounded-[50%]" />
    ),
    name: "Toncoin",
    ticker: "TON",
    price: "539.6",
    oneHr: 4.32,
    twentyfourHr: 4.52,
    sevenDay: 4.56,
    marketCap: "992,999,547",
    Vol: "5,844,636",
    subVol: "8,455",
    supply: "4,677,503",
    // days: <MdOutlineSsidChart size={90} className="text-red" />,
  },
  {
    star: <CiStar size={20} />,
    index: 9,
    img: (
      <BsDroplet
        size={45}
        className="bg-blue-500 p-2 text-white rounded-[50%]"
      />
    ),
    name: "Sui",
    ticker: "SUI",
    price: "539.6",
    oneHr: 4.32,
    twentyfourHr: 4.52,
    sevenDay: 4.56,
    marketCap: "992,999,547",
    Vol: "5,844,636",
    subVol: "8,455",
    supply: "4,677,503",
    // days: <MdOutlineSsidChart size={90} className="text-green-500" />,
  },
  {
    star: <CiStar size={20} />,
    index: 10,
    img: (
      <SiPolygon
        size={45}
        className="bg-violet-500 p-2 text-white rounded-[50%]"
      />
    ),
    name: "Polygon",
    ticker: "POL",
    price: "539.6",
    oneHr: 4.32,
    twentyfourHr: 4.52,
    sevenDay: 4.56,
    marketCap: "992,999,547",
    Vol: "5,844,636",
    subVol: "8,455",
    supply: "4,677,503",
    // days: <MdOutlineSsidChart size={90} className="text-green-500" />,
  },
  {
    star: <CiStar size={20} />,
    index: 11,
    img: (
      <SiStellar size={45} className="bg-black p-2 text-white rounded-[50%]" />
    ),
    name: "Stellar",
    ticker: "XLM",
    price: "539.6",
    oneHr: 4.32,
    twentyfourHr: 4.52,
    sevenDay: 4.56,
    marketCap: "992,999,547",
    Vol: "5,844,636",
    subVol: "8,455",
    supply: "4,677,503",
    // days: <MdOutlineSsidChart size={90} className="text-green-500" />,
  },
  {
    star: <CiStar size={20} />,
    index: 12,
    img: (
      <SiHelium
        size={40}
        className="bg-yellow-500 p-1 text-white rounded-[50%]"
      />
    ),
    name: "Helium",
    ticker: "HNT",
    price: "539.6",
    oneHr: 4.32,
    twentyfourHr: 4.52,
    sevenDay: 4.56,
    marketCap: "992,999,547",
    Vol: "5,844,636",
    subVol: "8,455",
    supply: "4,677,503",
    // days: <MdOutlineSsidChart size={90} className="text-green-500" />,
  },
];
const reversedCoinData = [...coinData].reverse();

export const Body = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="px-5">
      <div className="mt-[60px] lg:mt-[10px]">
        <h1 className="font-bold lg:text-xl">
          Today's Cryptocurrency Prices by Market Cap
        </h1>
        <p className="lg:flex items-center gap-2 font mt-2 text-gray-400 lg:text-xl">
          The global crypto market cap is $2.13T, a
          <span className="flex items-center text-red">
            <IoMdArrowDropdown className="" size={25} /> 1.28%
          </span>
          decrease over the last day.
          <a href="#" className="underline ms-1">
            Read More
          </a>
        </p>
      </div>
      <div className="flex border-b border-solid border-gray-200 items-center text-[12px] pb-1 lg:overflow-x-none overflow-x-scroll no-scrollbar justify-between gap-6 mt-20">
        <div className="flex items-center gap-2 lg:gap-8 font-semibold">
          <p className="bg-blue-100 rounded-xl px-5 py-2">All</p>
          <p className="rounded-xl px-5 py-2">NFTs</p>
          <p className="rounded-xl px-5 py-2">Categories</p>
          <p className="rounded-xl px-5 py-2 w-[100px] whitespace-nowrap">
            Token Unlocks
          </p>
        </div>

        <div className="flex items-center gap-6 font-semibold">
          {lists.map(({ text, icon }) => {
            return (
              <>
                <div className="flex text-gray-400 gap-1 whitespace-nowrap items-center">
                  <p>{icon}</p>
                  <p>{text}</p>
                </div>
              </>
            );
          })}
        </div>

        <div className="flex gap-3 ps-">
          <PrimaryButton
            type="button"
            icon={<img src={filter} alt="filter" className="!me-2" />}
            text="Filters"
            customStyles="!text-black px-4 !py-0 !gap-2 !bg-gray-200 !flex !items-center"
          />
          <PrimaryButton
            type="button"
            icon={<BiCoinStack className="text-gray-400" size={20} />}
            text="Customize"
            customStyles="!text-black px-4 !bg-gray-200 !flex !items-center"
          />
          <PrimaryButton
            type="button"
            icon={<IoMenuSharp className="text-gray-400" size={20} />}
            text=""
            customStyles="!text-black px-4 !bg-gray-200 !flex !items-center"
          />
        </div>
      </div>
      <div className="flex items-center justify-between w-full lg:text-[22px] mt-3">
        <Table className="whitespace-nowrap w-full">
          <TableHeader>
            <TableRow>
              <TableHead className=""></TableHead>
              <TableHead className="text-right">#</TableHead>
              <TableHead className="">Name</TableHead>

              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">1hr %</TableHead>
              <TableHead className="text-right">24hr %</TableHead>
              <TableHead className="text-right">9d %</TableHead>

              <TableHead className="text-right">Market Cap</TableHead>
              <TableHead className="text-right">Volume (24h)</TableHead>
              <TableHead className="text-right">Circulating Supply</TableHead>
              {/* <TableHead className="text-right">Last 7 days</TableHead> */}
            </TableRow>
          </TableHeader>

          {page === 1 ? (
            <TableBody>
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
                }) => {
                  return (
                    <>
                      {/* Table Body */}

                      <TableRow>
                        <TableCell className="text-right bg-red-500">
                          {star}
                        </TableCell>
                        <TableCell className="text-right bg-red-500">
                          {index}
                        </TableCell>
                        <TableCell className="text-right flex items-center gap-2">
                          {img}
                          {name}
                          <span className="font-bold">{ticker}</span>
                        </TableCell>
                        <TableCell className="text-right">${price}</TableCell>
                        <TableCell className="text-right">{oneHr}%</TableCell>
                        <TableCell className="text-right">
                          {twentyfourHr} %
                        </TableCell>
                        <TableCell className="text-right">
                          {sevenDay}%
                        </TableCell>
                        <TableCell className="text-right">
                          ${marketCap}
                        </TableCell>
                        <TableCell className="text-right">
                          ${Vol}
                          <br />
                          <small className="text-[10px]">
                            {subVol} <span>{ticker}</span>
                          </small>
                        </TableCell>

                        <TableCell className="text-right">
                          {" "}
                          ${supply} <span>{ticker}</span>
                        </TableCell>

                      </TableRow>
                    </>
                  );
                }
              )}
            </TableBody>
          ) : page === 2 ? (
            <TableBody>
              {reversedCoinData.map(
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
                }) => {
                  return (
                    <>
                      <TableRow>
                        <TableCell className="text-right bg-red-500">
                          {star}
                        </TableCell>
                        <TableCell className="text-right bg-red-500">
                          {index}
                        </TableCell>
                        <TableCell className="text-right flex items-center gap-2">
                          {img}
                          {name}
                          <span className="font-bold">{ticker}</span>
                        </TableCell>
                        <TableCell className="text-right">${price}</TableCell>
                        <TableCell className="text-right">{oneHr}%</TableCell>
                        <TableCell className="text-right">
                          {twentyfourHr} %
                        </TableCell>
                        <TableCell className="text-right">
                          {sevenDay}%
                        </TableCell>
                        <TableCell className="text-right">
                          ${marketCap}
                        </TableCell>
                        <TableCell className="text-right">
                          ${Vol}
                          <br />
                          <small className="text-[10px]">
                            {subVol} <span>{ticker}</span>
                          </small>
                        </TableCell>

                        <TableCell className="text-right">
                          {" "}
                          ${supply} <span>{ticker}</span>
                        </TableCell>

                      </TableRow>
                    </>
                  );
                }
              )}
            </TableBody>
          ) : (
            
            ""
          )}
        </Table>
      </div>
      <hr className="mt-3" />
      <Pagination
        style="mt-5"
        currentPage={page}
        totalPages={3}
        onPageChange={(newpage) => setPage(newpage)}
      />
    </div>
  );
};
