import Image from "next/image"
import Link from "next/link"

export default function GalleryBox({img, text, url}) {
  return (
    <Link href={url}>
      <div className="group w-[300px] h-[400px] relative border-4 cursor-pointer border-[#bbb] hover:border-[#3bad75] transition-all duration-300 ease-out">
        <Image className="object-cover" src={img} fill={true} />
        <span className="absolute bottom-4 right-4 text-4xl font-bold group-hover:text-[#3bad75] transition-all duration-300 ease-out">{text}</span>
      </div>
    </Link>
  )
}
