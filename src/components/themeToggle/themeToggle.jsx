"use client"

import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useState } from "react";

export default function ThemeToggle(){
  const {toggle, mode} = useContext(ThemeContext);
  console.log(toggle, mode)

  return (
    <div onClick={toggle} className="cursor-pointer relative flex p-[2px] items-center border border-[#bbb] rounded-full">
      <span className="text-sm">🌙</span>
      <span className="text-sm">🌞</span>
      <div
        className="absolute h-[17px] w-[17px] rounded-full bg-[#3bad75] transition-all duration-300 ease-in-out"
        style={mode==="light" ? {left: '4px'} : {right: '4px'}}
      ></div>
    </div>
  )
}