"use client"

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
        <div className="flex flex-col gap-20 md:gap-12">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-16 items-center">
              <Skeleton className="aspect-video w-full md:w-[400px]" />
              
              <div className="w-full md:flex-1 flex flex-col gap-8 md:gap-12">
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
