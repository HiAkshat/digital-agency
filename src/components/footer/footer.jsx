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
        <div className='cursor-pointer'><FacebookIcon  style={{ fontSize: '18px' }}/></div>
        <div className='cursor-pointer'><InstagramIcon  style={{ fontSize: '18px' }}/></div>
        <div className='cursor-pointer'><TwitterIcon style={{ fontSize: '18px' }}/></div>
        <div className='cursor-pointer'><YouTubeIcon  style={{ fontSize: '18px' }}/></div>
      </div>
    </div>
  )
}
