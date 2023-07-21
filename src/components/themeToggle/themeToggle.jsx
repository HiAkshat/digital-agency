"use client"

import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import styles from "./themeToggle.module.css"

export default function ThemeToggle(){
  const {toggle, mode} = useContext(ThemeContext);
  const toggleClasses = mode==="light" ?
  `${styles.light} right-1 absolute h-[17px] w-[17px] rounded-full bg-[#3bad75] transition-all duration-300 ease-in-out` :
  `${styles.darkd} right-1 absolute h-[17px] w-[17px] rounded-full bg-[#3bad75] transition-all duration-300 ease-in-out`  

  return (
    <div onClick={toggle} 
      className="cursor-pointer relative flex justify-between min-w-[50px] p-[4px] md:p-[2px] items-center border rounded-full"
      style={mode==="light" ? {borderColor: '#111'} : {borderColor: '#bbb'}}
    >
      <span className="text-xs md:text-sm">🌙</span>
      <span className="text-xs md:text-sm">🌞</span>
      <div
        className={toggleClasses}
        // style={mode==="light" ? {left: '4px'} : {right: '4px'}}
      ></div>
    </div>
  )
}