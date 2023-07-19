"use client"

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';

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
        <div className="flex gap-6 items-center">
          <div className="flex-1 flex flex-col gap-4">
            <div className='flex flex-col gap-2'>
              <div className='w-52 h-10 bg-[#bbb]'></div>
              <div className='w-52 h-10 bg-[#bbb]'></div>
              <div className='w-52 h-10 bg-[#bbb]'></div>
            </div>
            <span className="">ijbj</span>
            <div className="flex items-center gap-4">
              <div className="relative w-8 h-8 rounded-full">
                {/* <Image className="object-cover rounded-full" src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=640&h=200&dpr=1" fill={true} /> */}
              </div>
              <span>Roman Roy</span>
            </div>
          </div>

          <div className="relative flex-1 min-h-[250px]">
            {/* <Image className="object-cover" src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" fill={true} /> */}
          </div>
        </div>

        <p>
          inn
        </p>
      </div>
    </div>
    )

}
