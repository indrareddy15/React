const Blog = require('../models/blogs.model');

const createBlog = async (req, res) => {
    try {
        const { title } = req.body;

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

const searchBlogs = async (req, res) => {
    try {
        const { title, author } = req.query;

        // if (!title) {
        //     return res.status(400).json({ message: 'Title  is required' });
        // }

        // if (!author) {
        //     return res.status(400).json({ message: 'Author is required' });
        // }

        // const titleRegax = new RegExp(title, 'i'); // i is for case insensitive
        // const findBlog = await Blog.find({ title: titleRegax, author });

        // const findBlog = await Blog.find({ title: { $regex: new RegExp(title), $options: 'i' }, author });
        //  const findBlog = await Blog.find({ title: { $regex: new RegExp(title, "i") } });

        // const findBlog = await Blog.find({ authors: { $elemMatch: { email: author } } });

        // const query = {}

        // if (title) {
        //     query.title = { $regex: new RegExp(title, "i") }
        // }

        // if (author) {
        //     query.author = { $elemMatch: { email: author } }
        // }

        // const findBlog = await Blog.find(query);

        // if (!findBlog || findBlog.length === 0) {
        //     return res.status(404).json({ message: 'No blogs found matching your criteria' })
        // }

        // res.status(200).json(findBlog);
        const titleQuery = { title: { $regex: new RegExp(title, "i") } }
        const authorQuery = { authors: { $elemMatch: { email: author } } }

        if (title && author) {
            return res.send(await Blog.find({ $and: [titleQuery, authorQuery] }))
        } else if (title) {
            return res.send(await Blog.find(titleQuery))
        } else if (author) {
            return res.send(await Blog.find(authorQuery))
        } else {
            res.status(200).send({ message: `One of the title or author is required` });
        }

    } catch (error) {
        res.status(500).json({ message: 'Error searching blogs', error });
    }

}


module.exports = { createBlog, getBlogs, getBlogById, updateBlogById, deleteBlogById, searchBlogs };