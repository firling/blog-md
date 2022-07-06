import prisma from './prisma'

// READ
export const getAllPosts = async () => {
    const posts = await prisma.post.findMany({})
    return posts
}
  
export const getPostBy = async data => {
    const post = await prisma.post.findUnique({
      where: data
    })
    return post
}
  
  // CREATE
export const createPost = async (data) => {
    const post = await prisma.post.create({
      data
    })
    return post
}
  
  // UPDATE
export const updatePost = async (id, updateData) => {
    const post = await prisma.post.update({
      where: {
        id
      },
      data: {
        ...updateData
      }
    })
    return post
}
  
  // DELETE
export const deletePost = async id => {
    const post = await prisma.post.delete({
      where: {
        id
      }
    })
    return post
}