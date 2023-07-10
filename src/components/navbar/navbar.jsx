import Link from "next/link"

const links = [
  {
    id: 1,
    name: "Home",
    route: "/"
  },
  {
    id: 2,
    name: "Portfolio",
    route: "/portfolio"
  },
  {
    id: 3,
    name: "Blog",
    route: "/blog"
  },
  {
    id: 4,
    name: "About",
    route: "/about"
  },
  {
    id: 5,
    name: "Contact",
    route: "/contact"
  },
  {
    id: 6,
    name: "Dashboard",
    route: "/dashboard"
  },
]

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-[100px]">
      <div>
        <span className="text-lg"><span className="font-bold">AkG</span>ENCY</span>
      </div>
      <div className="flex items-center gap-4">
        {links.map(link => (
          <Link key={link.id} href={link.route}>
            {link.name}
          </Link>
        ))}

        <button className="py-1 px-2 bg-[#3bad75] rounded-md text-white min-w-max">Log Out</button>
      </div>
    </div>
  )
}
