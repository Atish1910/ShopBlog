const express = require("express");

const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const upload = require("../middleware/upload");

const router = express.Router();

router.post("/", upload.single("image"), createBlog); // middleware work upload image 
router.get("/:id", getBlogById);
router.get("/", getBlogs);
router.put("/:id", upload.single("image"), updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
