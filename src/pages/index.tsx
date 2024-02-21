import { Copyright } from '@/components/Copyright/Copyright'
import { Profile } from '@/components/Profile/Profile'
import styles from '../styles/Home.module.scss'
import PostsPage from '@/components/PostPage/PostPage'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <header>
          <Profile />
        </header>
        <div>
          <PostsPage />
        </div>
        <footer>
          <Copyright />
        </footer>
      </main>
    </>
  )
}
