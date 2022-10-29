import { createPost } from "../../../prisma/post"


export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }
    const { body } = req.body
    createPost({
        slug: "testAPI", 
        title: "API Test call",
        description : "Ceci est un post de test crée directement depuis l'API",
        body,
    })
    res.status(200).send({ success: true, message: 'Post has been created' })
  }
  