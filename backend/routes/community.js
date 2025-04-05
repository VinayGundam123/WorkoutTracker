const express = require('express');
const router = express.Router();

const communityController=require('../controllers/community');

router
    .get('/',communityController.getAllPosts)
    .post('/',communityController.createPost)
    .get('/:id',communityController.getPost)
    .patch('/:id',communityController.updatePost)
    .delete('/:id',communityController.deletePost)
    .get('/like/:id',communityController.likeGetPost)
    .post('/like/:id',communityController.likeUpdatePost)
    .post('/comment/:id',communityController.commentUpdatePost);

exports.router=router;