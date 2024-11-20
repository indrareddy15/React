const Blog = require('../models/blogs.model');

const createBlog = async (req, res) => {
    try {
        const { title, author, content, publishDate } = req.body;

        if (!title) {
            return res.status(400).json({ message: 'Title is required' });
        }
        // const newBlog = new Blog(req.body);
        const newBlog = await Blog.create(req.body);
        await newBlog.save();
        res.status(201).send(newBlog);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).send({ message: `Blog with this ${error.keyValue.title} already exist` });
        }
        res.status(500).json({ message: 'Error creating blog', error });
    }

}

const getBlogs = async (req, res) => {
    try {
        const findBlog = await Blog.find();
        res.status(200).json(findBlog);
    } catch (error) {
        res.status(500).json({ message: 'Error getting blogs', error });
    }
}

const getBlogById = async (req, res) => {
    res.send(req.blog);
}

const updateBlogById = async (req, res) => {
    try {
        const { blogId } = req.params;
        const updatedBlog = await Blog.findByIdAndUpdate(blogId, req.body, { returnDocument: 'after' });
        res.status(200).send(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: 'Error updating blog', error });
    }
}


const deleteBlogById = async (req, res) => {
    try {
        const { blogId } = req.params;
        await Blog.findByIdAndDelete(blogId);
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({ message: 'Error deleting blog', error });
    }
}

module.exports = { createBlog, getBlogs, getBlogById, updateBlogById, deleteBlogById };