const Blog = require('../models/blogs.model');

const createBlog = async (req, res) => {
    try {
        const { title, author, content, publishDate } = req.body;

        if (!title) {
            return res.status(400).json({ message: 'Title and content are required' });
        }
        const newBlog = new Blog(req.body);
        // const newBlog = await Blog.create(req.body);
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
    try {
        const { blogId } = req.params;
        const reqBlog = await Blog.findById(blogId);
        if (!reqBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(reqBlog);
    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(422).json({ message: 'Invalid blogId!' });
        }
        res.status(500).json({ message: 'Error getting blog by id', error });
    }
}

const deleteBlog = async (req, res) => {
    
 }

module.exports = { createBlog, getBlogs, getBlogById };