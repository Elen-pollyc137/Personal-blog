import { CopyrightIcon } from 'lucide-react'
import styles from './styles.module.scss'
export function Copyright() {
  return (
    <main className={styles.container}>
      <div className={styles.box}>
        <p>
          <CopyrightIcon />
          <span>2024</span>
        </p>
        <a href="https://github.com/Elen-pollyc137">Github</a>
        <a href="https://www.linkedin.com/in/elen-batista-594299129/">
          LinkedIn
        </a>
        <a title="E-mail: poliana_elen@hotmail.com">Email</a>
        <a href="https://github.com/Elen-pollyc137">Add to Feedly</a>
      </div>
    </main>
  )
}
