import axios from "axios";

const createPost = (data) => axios.post("/api/post/create", data);

export default {
  createPost
};