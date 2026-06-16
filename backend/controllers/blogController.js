const Blog = require("../models/Blog");

// Create Blog
exports.createBlog = async (req, res) => {
    try {
        const { title, date, description } = req.body;

        const blog = await Blog.create({
            title,
            date,
            description,
        });

        res.status(201).json({
            success: true,
            data: blog,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
        console.log("error to create user");
    }
};

// Get All Blogs
exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.findAll({
            order: [["id", "DESC"]],
        });

        res.json({
            success: true,
            data: blogs,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get Blog By Id
exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findByPk(req.params.id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }

        res.json({
            success: true,
            data: blog,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Update Blog
exports.updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByPk(req.params.id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }

        const { title, date, description } = req.body;

        await blog.update({
            title,
            date,
            description,
        });

        res.json({
            success: true,
            data: blog,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Delete Blog
exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByPk(req.params.id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }

        await blog.destroy();

        res.json({
            success: true,
            message: "Blog deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};