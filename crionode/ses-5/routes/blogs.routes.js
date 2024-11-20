const Router = require('express');
const { createBlog, getBlogs, getBlogById, updateBlogById, deleteBlogById } = require('../controller/blogs.controller');
const findBlogWithId = require('../middlewares/findBlogById');

const router = Router();

router.post("/new", createBlog);
router.get("/", getBlogs);

router
    .route("/:blogId")
    .all(findBlogWithId) // .all method will run all common routes for the blogId route
    .get(getBlogById)
    .patch(updateBlogById)
    .delete(deleteBlogById)


// router
//     .route("/:blogId")
//     .get(findBlogWithId, getBlogById)
//     .patch(findBlogWithId, updateBlogById)
//     .delete(findBlogWithId, deleteBlogById)

// router.get("/:blogId", getBlogById);
// router.patch("/:blogId", updateBlogById)
// router.delete("/:blogId", deleteBlogById)

module.exports = router;