"use client"

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';
import { Skeleton } from "@/components/ui/skeleton"


export default function BlogPost({params}) {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-8'>
        <Link href="/blog">
          <div className='flex gap-2 items-center text-[#3bad75]'>
            <div><ArrowBackIosNewIcon /></div>
            <span className="capitalize font-bold text-2xl">Blog Posts</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col-reverse lg:flex-row gap-6 items-center">
          <div className="flex-1 flex flex-col gap-6 w-[100%]">
            <div className='flex flex-col gap-4'>
              <Skeleton className="w-[100%] lg:w-[400px] xl:w-[450px] h-[40px] rounded-full" />
              <Skeleton className="w-[90%] lg:w-[400px] h-[40px] rounded-full" />
              <Skeleton className="w-[90%] lg:w-[400px] h-[40px] rounded-full" />
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="w-[40px] h-[40px] rounded-full"/>
              <Skeleton className="w-[100px] h-[40px] rounded-full"/>
            </div>
          </div>

          <div className=''>
            <Skeleton className="aspect-video h-[180px] md:min-h-[300px]"/>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <Skeleton className="w-full h-[30px] rounded-full" />
          <Skeleton className="w-[95%] h-[30px] rounded-full" />
          <Skeleton className="w-[95%] h-[30px] rounded-full" />
          <Skeleton className="w-[95%] h-[30px] rounded-full" />
          <Skeleton className="w-[95%] h-[30px] rounded-full" />
        </div>

      </div>
    </div>
  )

}
