import Image from "next/image"
import Button from "../button/button"

export default function WorkFeature({classes, title, desc, image}) {
  return (
    <div className={classes}>
      <div className="flex-1 flex flex-col gap-6">
        <span className="text-4xl font-bold">{title}</span>
        <span>{desc}</span>
        <Button url="/" text="See More" />
      </div>
      <div className="relative flex-1 h-[500px]">
        <Image className="object-cover" src={image} fill={true} />
      </div>
    </div>
  )
}
