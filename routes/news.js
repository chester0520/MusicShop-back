import express from 'express'
import auth from '../middleware/auth.js'
import upload from '../middleware/upload.js'

import {
  newNews,
  getNews,
  getAllNews,
  editNews
} from '../controllers/news.js'

const router = express.Router()

router.post('/', auth, upload, newNews)
router.get('/', getNews)
router.get('/all', auth, getAllNews)
router.patch('/:id', auth, upload, editNews)

export default router
