'use client'

import styles from './styles.module.scss'

interface FormPo {
  id: string
  user: string
  content: string
  coverUrl: string
  isPublic: boolean
}
interface PostCardProps {
  post: FormPo
}

const PostsPage: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className={styles.box}>
      <h1>Posts</h1>
      <h2>{post.user}</h2>
    </div>
  )
}
export default PostsPage
