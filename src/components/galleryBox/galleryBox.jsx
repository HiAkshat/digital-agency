"use client"

import Image from "next/image"
import Link from "next/link"
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

export default function GalleryBox({img, text, url}) {
  const {mode} = useContext(ThemeContext);
  
  return (
    <Link href={url}>
      <div
        className="group w-[300px] h-[400px] relative border-4 cursor-pointer hover:border-[#3bad75] transition-all duration-300 ease-out"
        style={mode==="light" ? {borderColor: '#111'} : {borderColor: '#bbb'}}
      >
        <Image className="object-cover" src={img} fill={true} />
        <span className="absolute bottom-4 right-4 text-4xl text-white font-bold group-hover:text-[#3bad75] transition-all duration-300 ease-out">{text}</span>
      </div>
    </Link>
  )
}
