import { FlaskRound } from 'lucide-react'
import styles from './styles.module.scss'
export function Profile() {
  return (
    <main className={styles.container}>
      <div className={styles.box}>
        <FlaskRound color="#ffffff" />
        <h1>Projects</h1>
      </div>
    </main>
  )
}
