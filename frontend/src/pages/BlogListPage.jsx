import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import BlogTable from "../components/BlogTable";

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/blogs");
      setBlogs(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return;

    try {
      await axios.delete(`http://localhost:4000/api/blogs/${id}`);
      toast.success("Blog deleted successfully");
      fetchBlogs();
    } catch (error) {
      toast.error("Failed to delete blog");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="container py-5">
      <BlogTable
        blogs={blogs}
        fetchBlogs={fetchBlogs}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default BlogListPage;