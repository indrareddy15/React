const blogModel = require("../models/blogs.model")

class BlogService {
    create = (payload) => blogModel.create(payload)

    getAll = () => blogModel.find()

    getBlogById = (blogId) => blogModel.findById(blogId)

    updateById = (blogId, payload) => blogModel.findByIdAndUpdate(blogId, payload, { new: true });

    deleteById = (blogId) => blogModel.findByIdAndDelete(blogId);

    // const searchByTitleAndAuthor = (title, author) => {
    //     const titleQuery = { title: { $regex: new RegExp(title, "i") } }
    //     const authorQuery = { authors: { $elemMatch: { email: author } } }

    //     if (title && author) {
    //         return res.send(Blog.find({ $and: [titleQuery, authorQuery] }))
    //     } else if (title) {
    //         return res.send(Blog.find(titleQuery))
    //     } else if (author) {
    //         return res.send(Blog.find(authorQuery))
    //     } else {
    //         return null;
    //     }
    // }

    searchByTitleAndAuthor = async (title, author) => {
        const titleQuery = title ? { title: { $regex: new RegExp(title, "i") } } : {};
        const authorQuery = author ? { authors: { $elemMatch: { email: author } } } : {};

        // Ensure that at least one query is passed
        if (!title && !author) {
            throw new Error('One of "title" or "author" must be passed');
        }

        try {
            // Searching blogs based on title and/or author
            const result = await blogModel.find({ $and: [titleQuery, authorQuery] });
            return result;
        } catch (error) {
            console.error('Error searching blogs:', error);  // Log the error for debugging
            throw new Error('Error searching blogs');
        }
    }
}





module.exports = BlogService