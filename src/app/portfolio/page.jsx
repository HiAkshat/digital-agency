import Img1 from "public/illustration.png"
import Img2 from "public/websites.jpg"
import Img3 from "public/apps.jpg"
import Image from "next/image"
import GalleryBox from "@/components/galleryBox/galleryBox"

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-6">
      <span className="text-xl font-bold">Choose a gallery</span>
      <div className="flex gap-6">
        <GalleryBox img={Img1} text="Illustrations" url="portfolio/illustrations"/>
        <GalleryBox img={Img2} text="Websites" url="portfolio/websites"/>
        <GalleryBox img={Img3} text="Applications" url="portfolio/applications"/>
      </div>
    </div>
  )
}
