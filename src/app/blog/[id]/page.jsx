"use client"

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';

import Image from "next/image";

export default function BlogPost() {
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
            <span className="text-4xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
            <span className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus enim ex unde, corporis sunt magni explicabo aspernatur. Sit odit </span>
            <div className="flex items-center gap-4">
              <div className="relative w-8 h-8 rounded-full">
                <Image className="object-cover rounded-full" src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=640&h=200&dpr=1" fill={true} />
              </div>
              <span>Roman Roy</span>
            </div>
          </div>

          <div className="relative flex-1 min-h-[250px]">
            <Image className="object-cover" src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" fill={true} />
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
        </p>
      </div>
    </div>
  )
}
