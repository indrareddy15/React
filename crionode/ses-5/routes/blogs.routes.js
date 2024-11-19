const Router = require('express');
const { createBlog, getBlogs, getBlogById } = require('../controller/blogs.controller');

const router = Router();

router.post("/new", createBlog);
router.get("/", getBlogs);
router.get("/:blogId", getBlogById);

module.exports = router;