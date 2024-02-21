'use cliente'
import { useEffect, useState } from 'react'
import { getPost, FormPosts } from '../../services/api'
import Image from 'next/image'
import styles from './styles.module.scss'

export default function PostsPage() {
  const [posts, setPosts] = useState<FormPosts[]>([])

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPost()
        setPosts((prevPosts) => [...prevPosts, data])
        console.log(data)
      } catch (error) {
        console.error('Erro ao obter posts:', error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className={styles.box}>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.user}</h2>
            <p>{post.content}</p>
            <Image src={post.coverUrl} alt="Capa do post" />
          </li>
        ))}
      </ul>
    </div>
  )
}
