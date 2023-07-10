import Image from "next/image";
import styles from "./page.module.css"
import Hero from "public/hero.png";
import Button from "@/components/button/button";

export default function Home() {
  return (
    <div className="flex gap-32 items-center my-auto">
      <div className="flex flex-col flex-1 gap-8">
        <span className={styles.title}>Better design for your digital products.</span>
        <span className="text-xl">Turning your idea into reality. We bring together the teams from global tech industry.</span>
        <Button text="See Our Works" url="/portfolio" />
      </div>
      <div className="flex-1 w-full h-[500px] relative">
        <Image className="object-contain move" src={Hero} fill={true}/>
      </div>
    </div>
  )
}
