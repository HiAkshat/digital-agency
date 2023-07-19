"use client"

import 'material-symbols';

export default function Loading() {
  return (
    <div className='flex gap-6 text-4xl items-center'>
      <span>Loading...</span>
      <span
        className="material-symbols-rounded animate-spin"
        style = {{fontSize: "36px"}}
      >progress_activity</span>
    </div>
  )
}