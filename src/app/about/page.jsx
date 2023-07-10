import Image from "next/image";
import Button from "@/components/button/button";
import AboutImg from "public/about.jpeg"

export default function About() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-full h-[300px] relative">
        <Image
          className="object-cover grayscale"
          src={AboutImg}
          fill={true}
          alt=""
        />
        <div className="absolute p-4 bottom-4 left-4 flex flex-col bg-[#53c28b] text-white">
          <span className="text-4xl font-bold">Digital Storytellers</span>
          <span className="text-xl font-semibold">Handcrafting award winning digital experiences</span>
        </div>
      </div>
      <div className="flex gap-24">
        <div className="flex flex-1 flex-col gap-4">
          <span className="text-3xl font-bold">Who Are We?</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque corporis eligendi nobis optio, fugit corrupti voluptates dolorem, nisi consequatur minima? Dolore repellat esse natus laudantium ducimus! Adipisci, in odio.
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <span className="text-3xl font-bold">What We Do?</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}
