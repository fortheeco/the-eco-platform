import { styles } from '../../style'

export default function SplitLayout({children}) {
  return (
    <section className={`w-full gap-20 justify-between items-center text-black relative mt-10 grid grid-cols-1 lg:grid-cols-[55%_auto] ${styles.paddingX}`}>
        {children}
    </section>
  )
}
