import axios from "axios";

const API_URL = "http://localhost:4000/api/blogs";

export const getBlogs = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data.data;
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch Blogs",
    };
  }
};

export const getBlogById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data.data;
    
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch perticular Blog",
    };
  }
};

export const createBlog = async (data) => {
  try {
    const res = await axios.post(API_URL, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  
    return res.data;
    
  } catch (error) {
    return {
      success: false,
      message: "Failed to Create a new blog",
    };
  }
};

export const updateBlog = async (id, data) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  
    return res.data;
    
  }catch (error) {
    return {
      success: false,
      message: "Failed to Create a Update blog",
    };
  }
};

export const deleteBlog = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
    
  } catch (error) {
    return {
      success: false,
      message: "Failed to Delete a blog",
    };
  }
};
