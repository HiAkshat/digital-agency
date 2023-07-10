"use client"

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <div className="flex justify-between items-center h-[40px] text-xs opacity-80">
      <div>
        <span>© 2023 AkshatG. All rights reserved.</span>
      </div>
      <div className='flex items-center gap-4'>
        <div className='cursor-pointer hover:text-[#3bad75]'><FacebookIcon  style={{ fontSize: '18px' }}/></div>
        <div className='cursor-pointer hover:text-[#3bad75]'><InstagramIcon  style={{ fontSize: '18px' }}/></div>
        <div className='cursor-pointer hover:text-[#3bad75]'><TwitterIcon style={{ fontSize: '18px' }}/></div>
        <div className='cursor-pointer hover:text-[#3bad75]'><YouTubeIcon  style={{ fontSize: '18px' }}/></div>
      </div>
    </div>
  )
}
