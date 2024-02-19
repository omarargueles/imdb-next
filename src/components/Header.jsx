import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFill0CircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-width-auto max-w-6xl">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome}></MenuItem>
        <MenuItem
          title="about"
          address="/about"
          Icon={BsFill0CircleFill}
        ></MenuItem>
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href={"/"} className=" flex gap-1 items-center">
          <span className="text2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMDB
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
}
