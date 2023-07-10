"use client"

import {items} from "./data.js"
import WorkFeature from "@/components/workFeature/workFeature.jsx"

export default function Category({params}) {
  const getData = (category) => {
    const data = items[category]
    if (data){
      return data
    }
  }

  const data = getData(params.category)

  return (
    <div className="flex flex-col gap-16">
      {data.map(item => (
        <WorkFeature classes='flex items-center gap-16 even:flex-row-reverse' key={item.id} title={item.title} desc={item.desc} image={item.image} />
      ))}
    </div>
  )
}
