const { getBlogById } = require('../services/blogs.services');

const findBlogWithId = async (req, res, next) => {
    try {
        const { blogId } = req.params;

        if (!blogId) {
            return res.status(400).json({ message: 'Blog ID is required' });
        }

        const reqBlog = await getBlogById(blogId);
        if (!reqBlog) {
            return res.status(404).json({ message: `Blog with id: ${blogId} could not be found` });
        }
        req.blog = reqBlog;
        next()
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(422).json({ message: 'Invalid blogId!' });
        }
        res.status(500).json({ message: 'Error getting blog by id', error });
    }
}

module.exports = findBlogWithId;