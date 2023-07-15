"use client"

import Image from "next/image"
import styles from "./page.module.css"
import Link from "next/link"
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import useSWR from 'swr'
import { notFound } from "next/navigation";
import Loading from "./loading";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Blog() {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  const {mode} = useContext(ThemeContext);
  const workTitleClasses = mode==="light" ?
  `${styles.light} work-title text-8xl font-bold py-2` :
  `${styles.dark} work-title text-8xl font-bold py-2`

  if (error) return notFound()
  if (isLoading) return <Loading />
  
  return (
    <div className='flex flex-col gap-6'>
      <span className={workTitleClasses}>Blog Posts</span>
      <div className="flex flex-col gap-12">
        {data.map(post => (
          <Link key={post.id} href={`blog/${post.id}`}>
            <div className="flex gap-16 items-center">
              <div className="w-[400px] relative h-[240px]">
                <Image className="object-cover" src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" fill={true} />
              </div>
              <div className="flex-1 flex flex-col gap-6">
                <span className="text-3xl font-bold">{post.title}</span>
                <span>{post.body}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
  </div>
  )
}
