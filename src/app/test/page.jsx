"use client"

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';
import { Skeleton } from "@/components/ui/skeleton"
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import styles from "./loading.module.css"


export default function BlogPost({params}) {
  const {mode} = useContext(ThemeContext);
  const workTitleClasses = mode==="light" ?
  `${styles.light} work-title text-8xl font-bold py-2` :
  `${styles.dark} work-title text-8xl font-bold py-2`

  return (
    <div className='flex flex-col gap-6'>
      <span className={workTitleClasses}>Blog Posts</span>
        <div className="flex flex-col gap-12">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex gap-16 items-center">
              <div className="w-[400px] relative h-[240px]">
                <Skeleton className="w-[full h-full" />
              </div>
              
              <div className="flex-1 flex flex-col gap-12">
                <div className='flex flex-col gap-6'>
                  <Skeleton className="w-full h-[40px] rounded-full" />
                  <Skeleton className="w-[90%] h-[40px] rounded-full" />
                </div>
                <div className='flex flex-col gap-6'>
                  <Skeleton className="w-full h-[20px] rounded-full" />
                  <Skeleton className="w-[70%] h-[20px] rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )

}
