import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Modal } from "bootstrap";
import { useNavigate } from "react-router-dom";

import BlogForm from "./BlogForm";
import { updateBlog } from "../services/blogService";

const BlogTable = ({ blogs, fetchBlogs, handleDelete }) => {
  const navigate = useNavigate();

  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleEdit = (blog) => {
    setSelectedBlog(blog);

    const modal = new Modal(document.getElementById("updateModal"));

    modal.show();
  };

  const handleUpdate = async (data) => {
      await updateBlog(selectedBlog.id,data);
      toast.success("Blog Updated");
      await fetchBlogs();
      const modal = Modal.getInstance(document.getElementById("updateModal"));
      modal.hide();
    
  };

  return (
    <>
      <div className="card shadow">
        <div className="card-body">
          <div className="d-flex justify-content-between mb-3">
            <h2>Blog Management</h2>

            <button
              className="btn btn-success"
              onClick={() => navigate("/add-blog")}
            >
              Add Blog
            </button>
          </div>
          <div className="row g-4">
            {blogs.map((blog) => (
              <div className="col-md-6 col-lg-4" key={blog.id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <img
                      src={`http://localhost:4000/${blog.image}`}
                      alt={blog.title}
                      className="card-img-top"
                      style={{
                        height: 220,
                        objectFit: "cover",
                      }}
                    />
                    <h5 className="card-title">{blog.title}</h5>

                    <p className="text-muted mb-2">
                      <strong>ID:</strong> {blog.id}
                    </p>

                    <p className="text-muted mb-2">
                      <strong>Date:</strong> {blog.date}
                    </p>

                    <p
                      className="card-text flex-grow-1"
                      style={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {blog.description}
                    </p>

                    

                    <div className="d-flex justify-content-between mt-auto pt-3">
                      <button
                        className="btn btn-warning w-50 me-2"
                        onClick={() => handleEdit(blog)}
                      >
                        Update
                      </button>

                      <button
                        className="btn btn-danger w-50"
                        onClick={() => handleDelete(blog.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="modal fade" id="updateModal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Update Blog</h5>

              <button className="btn-close" data-bs-dismiss="modal" />
            </div>

            <div className="modal-body">
              {selectedBlog && (
                <BlogForm
                  key={selectedBlog?.id}
                  defaultValues={selectedBlog}
                  onSubmit={handleUpdate}
                  buttonText="Update Blog"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogTable;
