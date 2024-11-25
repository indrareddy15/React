const Router = require('express');
const { createBlog, getBlogs, getBlogById, updateBlogById, deleteBlogById, searchBlogs } = require('../controller/blogs.controller');
const findBlogWithId = require('../middlewares/findBlogById');

const router = Router();

router.post("/new", createBlog);
router.get("/", getBlogs);
router.get("/search", searchBlogs);

router
    .route("/:blogId")
    .all(findBlogWithId) // .all method will run the middleware for all routes with :blogId
    .get(getBlogById)
    .patch(updateBlogById)
    .delete(deleteBlogById);

module.exports = router;