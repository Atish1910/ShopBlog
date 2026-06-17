import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import BlogForm from "../components/BlogForm";

const AddNewBlog = () => {
  const navigate = useNavigate();


  const handleAddBlog = async (data) => {
    debugger
    try {
      await axios.post(
        "http://localhost:4000/api/blogs",
        data
      );

      toast.success("Blog Added Successfully");
      navigate("/blog");
    } catch (error) {
      toast.error("Failed to add blog");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow p-4">
            <h2 className="mb-4">
              Add New Blog
            </h2>

            <BlogForm
              handleAddBlog={handleAddBlog}
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewBlog;