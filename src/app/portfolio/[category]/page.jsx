"use client"

import { notFound } from "next/navigation.js"
import {items} from "./data.js"
import WorkFeature from "@/components/workFeature/workFeature.jsx"

const getData = (category) => {
  const data = items[category]
  if (data) return data
  else return notFound()
}

export default function Category({params}) {
  const data = getData(params.category)

  return (
    <div className="flex flex-col gap-16">
      {data.map(item => (
        <WorkFeature classes='flex items-center gap-16 even:flex-row-reverse' key={item.id} title={item.title} desc={item.desc} image={item.image} />
      ))}
    </div>
  )
}
