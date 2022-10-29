import axios from "axios";

const createPost = (body) => axios.post("/api/post/create", {body});

export default {
  createPost
};