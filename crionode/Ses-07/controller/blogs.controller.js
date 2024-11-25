const BlogService = require('../services/blogs.services');

const IBlogService = new BlogService
const createBlog = async (req, res) => {
    try {
        const newBlog = await IBlogService.create(req.body)
        console.log("post new blog", newBlog)
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
        const blogs = await IBlogService.getAll()
        res.status(200).json(blogs);
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
        const updatedBlog = await IBlogService.updateById(blogId, req.body);
        res.status(200).send(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: 'Error updating blog', error });
    }
}


const deleteBlogById = async (req, res) => {
    try {
        const { blogId } = req.params;
        await IBlogService.deleteById(blogId);
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({ message: 'Error deleting blog', error });
    }
}

// const searchBlogs = async (req, res) => {
//     const { title, author } = req.query;
//     try {
//         const result = await searchByTitleAndAuthor(title, author);

//         if (!result) {
//             return res.status(400).json({ message: `One of the 'title' or 'author' must be passed` })
//         }
//         res.status(200).send(result)
//     } catch (error) {
//         res.status(500).json({ message: 'Error searching blogs', error });
//     }

// }

const searchBlogs = async (req, res) => {
    const { title, author } = req.query;
    try {
        const result = await IBlogService.searchByTitleAndAuthor(title, author);

        if (result.length === 0) {
            return res.status(404).json({ message: `No blogs found for the provided 'title' or 'author'` });
        }
        res.status(200).send(result);
    } catch (error) {
        console.error('Error in searchBlogs controller:', error);  // Log the error for debugging
        res.status(500).json({ message: 'Error searching blogs', error: error.message });
    }
}



module.exports = { createBlog, getBlogs, getBlogById, updateBlogById, deleteBlogById, searchBlogs };