import Link from "next/link"

export default function Button({text, url}) {
  return (
    <Link href={url}>
      <button className="p-3 px-6 bg-[#3bad75] rounded-md text-white max-w-max">
        {text}
      </button>
    </Link>
  )
}
