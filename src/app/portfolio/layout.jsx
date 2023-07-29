"use client"

import styles from "./layout.module.css"
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";


export default function Layout({ children }) {
  const {mode} = useContext(ThemeContext);
  const workTitleClasses = mode==="light" ?
    `${styles.light} work-title text-8xl font-bold` :
    `${styles.dark} work-title text-8xl font-bold`

  return (
    <div className='flex flex-col gap-4'>
      <span
        className={workTitleClasses}
      >Our Works</span>
      {children}
    </div>
  )
}
