import { useForm } from "react-hook-form";

const BlogForm = ({ defaultValues, handleAddBlog}) => {
  const { register, handleSubmit,reset } = useForm();

  return (
    <form onSubmit={handleSubmit(handleAddBlog)}>
      <input
        className="form-control mb-3"
        placeholder="Title"
        {...register("title",{required : true})}
      />

      <input
        className="form-control mb-3"
        placeholder="Date"
        {...register("date",{required : true})}
      />

      <textarea
        className="form-control mb-3"
        rows="4"
        placeholder="Description"
        {...register("description",{ required : true})}
      />
      <button className="btn btn-primary w-100">Add Blog</button>
    </form>
  );
};

export default BlogForm;
