import { collectAssets } from "next/dist/build/webpack/plugins/middleware-plugin"
import Link from "next/link"
import styles from './main-header.module.css'

const MainHeader = () => {
  return (
    <header className={navigation.header}>
        <div className={navigation.logo}>
          <Link href="/">NextEvents</Link>
        </div>
        <nav className={styles.navigation}>
          <ul>
              <li>
                  <Link href="/events">Browse All Events</Link>
              </li>
          </ul>
        </nav>
    </header>
  )
}

export default MainHeader