"use client"

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';

export default function Layout({ children, params }) {
  return (
    <div className='flex flex-col gap-8'>
      <Link href="/portfolio">
        <div className='flex gap-2 items-center text-[#3bad75]'>
          <div><ArrowBackIosNewIcon /></div>
          <span className="capitalize font-bold text-2xl">{params.category}</span>
        </div>
      </Link>
      {children}
    </div>
  )
}
