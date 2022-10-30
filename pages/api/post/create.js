import { createPost } from "../../../prisma/post"


export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }
    const { slug, title, description, body } = req.body
    createPost({
        slug,
        title,
        description,
        body,
    })
    res.status(200).send({ success: true, message: 'Post has been created' })
  }
  