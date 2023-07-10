import Image from "next/image";
import styles from "./page.module.css"
import Hero from "public/hero.png";
import Button from "@/components/button/button";

export default function Home() {
  return (
    <div className="flex gap-32 items-center">
      <div className="flex flex-col flex-1 gap-8">
        <span className={styles.title}>Better design for your digital products.</span>
        <span className="text-xl">Turning your idea into reality. We bring together the teams from global tech industry.</span>
        <Button text="See Our Works" url="/portfolio" />
      </div>
      <div>
        <Image className={styles.img} src={Hero}/>
      </div>
    </div>
  )
}
