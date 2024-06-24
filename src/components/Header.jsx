import React from "react";
import { images } from "../assets";

const Header = ({ setShowAuthTab, isLogin }) => {
  return (
    <>
      {/* desktop view */}
      <header className="hidden sm:flex justify-between items-center py-6 sm:px-[25px] md:px-[75px] lg:px-28">
        <div className="w-[163px]">
          <img src={images.logo} alt="logo" />
        </div>
        <div className="flex gap-2 items-center bg-[#F2F2F2] rounded-full pr-12 pl-5 py-4">
          <div>
            <img src={images.search_icon} alt="search_icon" />
          </div>
          <input
            className=" bg-[#F2F2F2] placeholder:text-[#5C5C5C] placeholder:font-[24px] outline-none sm:w-[100px] md:w-[150px] lg:w-[270px]"
            type="text"
            placeholder="Search for your favorite groups in ATG"
          />
        </div>
        {isLogin ? (
          <div
            onClick={() => setShowAuthTab(true)}
            className="cursor-pointer flex items-center gap-2"
          >
            <div>
              <img src={images.jg} alt="user_profile_icon" />
            </div>
            <div>Siddharth Goyal</div>
            <div>
              <img src={images.dropdown_icon} alt="dropdown_icon" />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div
              className="cursor-pointer"
              onClick={() => setShowAuthTab(true)}
            >
              Create account. <span className="text-[#2F6CE5]">It’s free!</span>
            </div>
            <div>
              <img src={images.dropdown_icon} alt="dropdown_icon" />
            </div>
          </div>
        )}
      </header>
      {/* mobile view */}
      <header className="flex justify-end sm:hidden h-[24px] py-[5px] px-[10px]">
        <img src={images.mobile_view_header} alt="header_img" />
      </header>
    </>
  );
};

export default Header;
