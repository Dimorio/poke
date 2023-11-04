import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <>
      <header className="min-h-[70px] bg-transparent relative h-[70px] top-[14px] left-0 right-0 z-[100] mb-[1rem]">
        <div className="container mx-auto  px-[15px]">
          <div className="row flex flex-wrap ">
            <div className="col-12 w-full ">
              <nav className="main-nav relative flex min-h-[80px] bg-transparent rounded-[50px] py-[15px] px-0">
                <Link
                  to="/"
                  className="logo mr-[5%] basis-[15%] border-r-none border-r-[#27292a] sm:border-r-none md:border-r-none lg:border-r-none xl:border-r-[3px] "
                >
                  <h1 className="text-[35px] text-amber-400">PokeSoap</h1>
                </Link>
                <div className="search-input hidden sm:hidden md:hidden lg:inline-flex xl:inline-flex">
                  <form action="#" id="search" className="relative">
                    <input
                      type="text"
                      className="bg-[#27292a] h-[46px] w-[400px] rounded-[24px] border-none text-[14px] text-[#666] pt-0 pr-[20px] pl-[50px] pb-0"
                      placeholder="Search anything Pokemon..."
                    />
                    <SearchIcon className=" absolute text-[#666] left-[20px] top-[12px] " />
                  </form>
                </div>
                <ul className="nav basis-[70%] justify-end flex-wrap z-[999] text-right mt-0 mr-0 relative align-middle hidden sm:hidden md:hidden lg:inline-flex xl:inline-flex">
                  <li className="px-[10px] inline-block list-none">
                    <Link
                      to="/"
                      className="block font-[400] capitalize text-[14px] border-transparent px-[10px] py-[13px] rounded-[18px] tracking-[.3px] text-[#666] "
                    >
                      Home
                    </Link>
                  </li>
                  <li className="px-[10px] inline-block list-none">
                    <Link
                      to="/browse"
                      className="block font-[400] capitalize text-[14px] border-transparent px-[10px] py-[13px] rounded-[18px] tracking-[.3px] text-[#666] "
                    >
                      Browse
                    </Link>
                  </li>
                  <li className="px-[10px] inline-block list-none">
                    <Link
                      to="/contact"
                      className="block font-[400] capitalize text-[14px] border-transparent px-[10px] py-[13px] rounded-[18px] tracking-[.3px] text-[#666] "
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                <a className="span-trigger block sm:block md:block lg:hidden xl:hidden absolute cursor-pointer top-[23px] z-[99] right-[20px]">
                  <span>
                    <MenuIcon style={{ fontSize: 40, color: "white" }} />
                  </span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
