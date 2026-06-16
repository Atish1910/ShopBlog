import { useForm } from "react-hook-form";

const BlogForm = ({
  defaultValues,
  onSubmit,
  buttonText,
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input
        className="form-control mb-3"
        placeholder="Title"
        {...register("title")}
      />

      <textarea
        className="form-control mb-3"
        rows="4"
        placeholder="Date"
        {...register("date")}
      />

      <textarea
        className="form-control mb-3"
        rows="4"
        placeholder="Description"
        {...register("description")}
      />

      <button
        className="btn btn-primary w-100"
      >
        {buttonText}
      </button>

    </form>
  );
};

export default BlogForm;