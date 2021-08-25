import express from 'express'
import auth from '../middleware/auth.js'
import {
  getOrders,
  getAllOrders
} from '../controllers/orders.js'

const router = express.Router()

router.get('/', auth, getOrders)
router.get('/all', auth, getAllOrders)

export default router
