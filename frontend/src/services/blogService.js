import axios from "axios";

const API_URL = "http://localhost:4000/api/blogs";

export const getBlogs = async () => {
  const res = await axios.get(API_URL);
  return res.data.data;
};

export const getBlogById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data.data;
};

export const createBlog = async (data) => {
  const res = await axios.post(API_URL, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

export const updateBlog = async (id, data) => {
  const res = await axios.put(`${API_URL}/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

export const deleteBlog = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
