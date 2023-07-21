import Image from "next/image"
import ContactImg from "public/contact.png"
import Button from "@/components/button/button"

export default function Contact() {
  return (
    <div className="flex gap-6 flex-col">
      <div className="flex justify-center">
        <span className="text-6xl font-bold">Let&apos;s Keep in Touch</span>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="w-full md:flex-1 relative h-[300px] md:h-[500px]">
          <Image className="object-contain move" src={ContactImg} fill={true} />
        </div>
        <form className="flex-1 flex w-[100%] flex-col gap-6" action="">
          <input className="p-4 bg-transparent border-2 border-[#bbb] rounded-xl outline-none" type="text" placeholder="Name"/>
          <input className="p-4 bg-transparent border-2 border-[#bbb] rounded-xl outline-none" type="email" placeholder="Email"/>
          <textarea className="p-4 bg-transparent border-2 border-[#bbb] rounded-xl outline-none" rows={8} cols={30} placeholder="Message" />
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}
