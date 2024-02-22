import { Copyright } from '@/components/Copyright/Copyright'
import { Profile } from '@/components/Profile/Profile'
import styles from '../styles/Home.module.scss'
import PostsPage from '@/components/PostPage/PostPage'
import { FormPosts } from '@/services/types/create-post.types'
import { useState, useEffect } from 'react'
import { getPost } from '../services/api'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Home = () => {
  const [posts, setPosts] = useState<FormPosts[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getPost()
        setPosts(postsData)
      } catch (error) {
        console.error('Erro ao carregar posts:', error)
      }
    }

    fetchPosts()
  }, [])
  console.log(posts)
  return (
    <>
      <main className={styles.main}>
        <header>
          <Profile />
        </header>
        <div>
          <Slider dots infinite speed={500}>
            {posts.map((post) => (
              <PostsPage key={post.id} post={post} />
            ))}
          </Slider>
        </div>
        <footer>
          <Copyright />
        </footer>
      </main>
    </>
  )
}
export default Home
