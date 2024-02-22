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
      <h2>{post.user}</h2>
      <img src={post.coverUrl} alt="love" width={400} height={250} />
      <p>{post.content}</p>
    </div>
  )
}
export default PostsPage
