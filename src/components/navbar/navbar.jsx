"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {  useEffect, useState } from "react"
import ThemeToggle from "../themeToggle/themeToggle"

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

  useEffect(() => {
    setPathname(currentPath)
  }, [currentPath])

  return (
    <div className="flex justify-between items-center h-[100px]">
      <div>
        <Link href="/">
          <span className="text-lg"><span className="font-bold">AkG</span>ENCY</span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
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
