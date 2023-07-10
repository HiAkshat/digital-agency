import styles from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <div className='flex flex-col gap-4'>
      <span className={`${styles.workTitle} work-title text-8xl font-bold`}>Our Works</span>
      {children}
    </div>
  )
}
