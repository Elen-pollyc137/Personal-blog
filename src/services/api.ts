import axios, { AxiosResponse } from 'axios'
import { FormPosts } from './types/create-post.types'

// Defina a URL da sua API
const apiUrl = 'http://localhost:3333/posts'

export const getPost = async (): Promise<FormPosts[]> => {
  try {
    const response: AxiosResponse<FormPosts[]> = await axios.get(`${apiUrl}`)
    return response.data
    console.log(response.status)
  } catch (error) {
    throw new Error('Erro ao obter post')
  }
}
