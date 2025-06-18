import express from 'express';
import multer from 'multer';
import article from '../models/postmodel.js';

const router = express.Router();

// File upload configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

// Route: Add new article
router.post('/add', upload.single('image'), async (req, res) => {
    const { title, content, subtitle, category } = req.body;
    const image = req.file ? req.file.path : null;

    try {
        const newArticle = new article({
            title,
            subtitle,
            content,
            category,
            image,
        });

        await newArticle.save();

        return res.status(201).send({
            message: 'Article saved successfully',
            article: newArticle,
        });
    } catch (error) {
        console.error('Error saving article:', error);
        return res.status(500).send({ message: 'Error saving article' });
    }
});


export default router;
