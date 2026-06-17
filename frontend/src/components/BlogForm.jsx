import { useEffect } from "react";
import { useForm } from "react-hook-form";

const BlogForm = ({ defaultValues, onSubmit, buttonText = "Add Blog" }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const handleFormSubmit = (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("date", data.date);
    formData.append("description", data.description);

    if (data.image?.length > 0) {
      formData.append("image", data.image[0]);
    }

    if (typeof onSubmit === "function") {
      onSubmit(formData);
    } else {
      console.error("onSubmit prop is missing");
    }
  };

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <input
        className="form-control mb-3"
        placeholder="Title"
        {...register("title", { required: true })}
      />

      <input
        className="form-control mb-3"
        placeholder="Date"
        {...register("date", { required: true })}
      />

      <textarea
        className="form-control mb-3"
        rows="4"
        placeholder="Description"
        {...register("description", { required: true })}
      />
      <input
        type="file"
        className="form-control mb-3"
        accept="image/*"
        {...register("image")}
      />

      <button className="btn btn-primary w-100">{buttonText}</button>
    </form>
  );
};

export default BlogForm;
