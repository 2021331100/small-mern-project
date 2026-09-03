const express = require('express');
const multer = require('multer');
const uploadImage = require('./services/storage.service');
const postModel=require('./models/post.model');
const app = express();
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() })  ; // Configure multer to store uploaded files in the 'uploads' directory

app.post('/create-post', upload.single('image'), async (req, res) => {
    

    const result = await uploadImage(req.file.buffer);
   const post =await postModel.create({
    image: result.url,
    caption: req.body.caption
   })
   return res.status(201).json({ message: 'Post created successfully', post });


});

app.get('/posts', async (req, res) => {
    const posts = await postModel.find();
    return res.status(200).json({ message: 'Posts retrieved successfully', posts });
});

module.exports = app;