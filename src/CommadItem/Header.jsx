import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiTeamLine } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../Componets/Redux/Slices/SearchSlice";

function Header() {
  const dispatch = useDispatch();
  const playerQty = useSelector((state) => state.player.player.length);

  return (
    <>
      <div className="header flex justify-between items-center w-full h-[60px] shadow-md px-16 fixed z-20 bg-white">
        <div className="flex items-center w-[90px] h-[90px]">
          <img src="/public/media/image/logo2.png" className="object-cover" />
        </div>

        <div className="navBar flex gap-10 text-lg font-medium ml-[190px]">
          <NavLink to={"/"}>
            <span>Home</span>
          </NavLink>
          <NavLink to={"/about"}>
            <span>About</span>
          </NavLink>
        </div>

        <div className="iconBar flex items-center gap-5">
          <NavLink>
            <div className="flex items-center py-1 px-3 border rounded-3xl">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none"
                onChange={(e) => dispatch(setSearch(e.target.value))}
              />
            </div>
          </NavLink>

          <NavLink to={"/addTeam"} className="relative">
            <span className="border rounded-full flex justify-center items-center shadow-md">
              <RiTeamLine size={20} className="m-2" />
            </span>
            {playerQty > 0 && (
              <div className="absolute top-0 right-0 h-5 w-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">
                {playerQty}
              </div>
            )}
          </NavLink>
          <NavLink>
            <MdDarkMode size={22} />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
