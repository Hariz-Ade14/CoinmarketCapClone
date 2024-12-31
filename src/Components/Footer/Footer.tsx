import { PrimaryButton } from "../Button/Button";
import { BiSolidDollarCircle } from "react-icons/bi";
import { IoLanguageOutline } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <hr className="mt-10"/>
      <div className="flex items-start lg:flex-row flex-col gap-8 justify-between px-8 py-16">
        <div className="w-[50%]">
          <p className="font-bold text-xl lg:text-4xl">CoinMarketCap</p>
          <div className="flex gap-4 mt-12">
            <PrimaryButton
              type="button"
              text="English"
              icon={<IoLanguageOutline size={20} className="mx-2" />}
              customStyles="!text-black px-4 !bg-gray-200 !flex !items-center"
            />
            <PrimaryButton
              type="button"
              text="USD"
              icon={
                <BiSolidDollarCircle
                  size={20}
                  className="mx-2 text-green-600"
                />
              }
              customStyles="!text-black !px-6 !py-2 !bg-gray-200 !flex !items-center"
            />
          </div>
        </div>
        <div className="flex items-start lg:flex-row flex-col gap-14 justify-between w-[60%] cursor-pointer">
          {" "}
          <div className="">
            <p className="font-bold">Product</p>
            <div className="font-semibold whitespace-nowrap flex flex-col gap-5 mt-10 text-gray-500">
              <p>Products</p>
              <p>Product Updates</p>
              <p>CMC Labs</p>
              <p>Crypto API</p>
              <p>Doodles</p>
              <p>Sitemap</p>
              <p>Advertise</p>
            </div>
          </div>
          <div className="">
            <p className="font-bold">Company</p>
            <div className="font-semibold whitespace-nowrap flex flex-col gap-5 mt-10 text-gray-500">
              <p>About us
              </p>
              <p>Terms of use
              </p>
              <p>Privacy Policy</p>
              <p>Cookie preferences</p>
              <p>Cookie policy</p>
              <p>Community Rules</p>
              <p>Disclaimer
              </p>
              <p>Methodology</p>
              <p>Careers We’re</p>
            </div>
          </div>
          <div className="">
            <p className="font-bold">Support</p>
            <div className="font-semibold whitespace-nowrap flex flex-col gap-5 mt-10 text-gray-500">
              <p>Get Listed</p>
              <p>Request Form</p>
              <p>Contact Support</p>
              <p>Crypto API</p>
              <p>FAQ</p>
              <p>Glossary</p>
            </div>
          </div>
          <div className="">
            <p className="font-bold">Socials</p>
            <div className="font-semibold whitespace-nowrap flex flex-col gap-5 mt-10 text-gray-500">
              <p>Products</p>
              <p>Product Updates</p>
              <p>CMC Labs</p>
              <p>Crypto API</p>
              <p>Doodles</p>
              <p>Sitemap</p>
              <p>Advertise</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex m-8 items-center gap-2">
          <FaRegCopyright size={20} />
          <p>CoinMarketCapClone. All rights reserved</p>
      </div>
    </div>

    
  );
};

export default Footer;
