import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { getBlogs, deleteBlog } from "../services/blogService";

import BlogTable from "../components/BlogTable";

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const data = await getBlogs();
    setBlogs(data);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return;
      await deleteBlog(id);
      toast.success("Blog Deleted");
      fetchBlogs();
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
