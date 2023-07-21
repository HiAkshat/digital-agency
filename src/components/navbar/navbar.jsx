"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {  useEffect, useState, useRef } from "react"
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import ThemeToggle from "../themeToggle/themeToggle"
import MenuIcon from '@mui/icons-material/Menu';

const links = [
  {
    id: 1,
    name: "Home",
    route: "/"
  },
  {
    id: 2,
    name: "Portfolio",
    route: "/portfolio"
  },
  {
    id: 3,
    name: "Blog",
    route: "/blog"
  },
  {
    id: 4,
    name: "About",
    route: "/about"
  },
  {
    id: 5,
    name: "Contact",
    route: "/contact"
  },
  {
    id: 6,
    name: "Dashboard",
    route: "/dashboard"
  },
]

export default function Navbar() {
  const currentPath = usePathname()
  const [pathname, setPathname] = useState("")
  const [menuVisible, setMenuVisible] = useState(true)

  useEffect(() => {
    setPathname(currentPath)
  }, [currentPath])

  const menu = useRef(null)
  const handleMenuClick = () => {
    setMenuVisible(!menuVisible)
    if (menuVisible) menu.current.style.display = 'flex';
    if (!menuVisible) menu.current.style.display = 'none';
    console.log(menuVisible)
  }

  const {mode} = useContext(ThemeContext);
  const menuClasses = mode==="light" ?
  "hidden absolute z-[999] flex-col gap-3 top-[80px] right-0 p-4 border border-[#111] backdrop-blur-[10px] rounded-xl" :
  "hidden absolute z-[999] flex-col gap-3 top-[80px] right-0 p-4 border border-[#bbb] backdrop-blur-[10px] rounded-xl"

  return (
    <div className="relative flex justify-between items-center h-[100px] ">
      <div>
        <Link href="/">
          <span className="text-lg"><span className="font-bold">AkG</span>ENCY</span>
        </Link>
      </div>
      <div className="relative flex gap-3 md:hidden">
        <ThemeToggle />
        <div className="cursor-pointer" onClick={handleMenuClick}><MenuIcon /></div>
      </div>
    
      <div ref={menu} className={menuClasses}>
        {links.map(link => (
          <Link onClick={() => menu.current.style.display='none'} className={pathname === link.route ? 'text-[#3bad75] hover:text-[#3bad75]' : 'hover:text-[#3bad75]'} key={link.id} href={link.route}>
            {link.name}
          </Link>
        ))}
        <button className="py-1 px-2 bg-[#3bad75] hover:bg-[#369c78] rounded-md text-white min-w-max">Log Out</button>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <ThemeToggle />
        {links.map(link => (
          <Link className={pathname === link.route ? 'text-[#3bad75] hover:text-[#3bad75]' : 'hover:text-[#3bad75]'} key={link.id} href={link.route}>
            {link.name}
          </Link>
        ))}

        <button className="py-1 px-2 bg-[#3bad75] hover:bg-[#369c78] rounded-md text-white min-w-max">Log Out</button>
      </div>
    </div>
  )
}
