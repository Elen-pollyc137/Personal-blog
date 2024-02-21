import axios, { AxiosResponse } from 'axios'

// Defina a URL da sua API
const apiUrl = 'http://localhost:3333'

export interface FormPosts {
  id: string
  user: string
  content: string
  coverUrl: string
  isPublic: boolean
}
export const getPost = async (): Promise<FormPosts> => {
  try {
    const response: AxiosResponse<FormPosts> = await axios.get(
      `${apiUrl}/posts`,
    )
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter post')
  }
}
