import Image from "next/image"
import ContactImg from "public/contact.png"
import Button from "@/components/button/button"

export default function Contact() {
  return (
    <div className="flex gap-6 flex-col">
      <div className="flex justify-center">
        <span className="text-6xl font-bold">Let's Keep in Touch</span>
      </div>
      <div className="flex items-center gap-16">
        <div className="flex-1 relative w-full h-[500px]">
          <Image className="object-contain" src={ContactImg} fill={true} />
        </div>
        <form className="flex-1 flex flex-col" action="">
          <input className="p-4 my-4 bg-[rgb(0,0,0,0)] border-2 border-white rounded-md outline-none" type="text" placeholder="Name"/>
          <input className="p-4 my-4 bg-[rgb(0,0,0,0)] border-2 border-white rounded-md outline-none" type="email" placeholder="Email"/>
          <textarea className="p-4 my-4 bg-[rgb(0,0,0,0)] border-2 border-white rounded-md outline-none" rows={8} cols={30} placeholder="Message" />
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}
