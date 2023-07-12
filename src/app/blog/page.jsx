import Image from "next/image"
import styles from "./page.module.css"
import Link from "next/link"

export default function Blog() {
  return (
    <div className='flex flex-col gap-6'>
      <span className={`${styles.workTitle} work-title text-8xl font-bold py-2`}>Blog Posts</span>
      <div className="flex flex-col gap-12">
        <Link href="blog/test">
          <div className="flex gap-16 items-center">
            <div className="w-[400px] relative h-[240px]">
              <Image className="object-cover" src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" fill={true} />
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <span className="text-3xl font-bold">Lorit. Ex quia recusandae, vel earum similique, liquid, pariatur asperiores?</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nobis neque impedit placeat ad maiores aut saepe commodi? Id aperiam perspiciatis sapiente aut quisquam, quibusdam omnis adipisci ipsum repellendus provident.</span>
            </div>
          </div>
        </Link>
      </div>
  </div>
  )
}
