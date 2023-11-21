const express = require('express');
const { userBlogController,  deleteBlogController, getBlogById, updateBlogController, createBlogController, getAllBlogsController } = require('../controllers/blogController');



const router = express.Router();

//routes:
router.get('/all-blog', getAllBlogsController);

router.post('/create-blog', createBlogController);

router.put('/update-blog/:id', updateBlogController);

router.get('/get-blog/:id', getBlogById);

router.delete('/delete-blog/:id', deleteBlogController);


//get user blog:
router.get("/user-blog/:id", userBlogController);

module.exports = router;