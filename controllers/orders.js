import orders from '../models/orders.js'

export const getOrders = async (req, res) => {
  try {
    const result = await orders.find({ user: req.user._id }).populate('products.product')
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getAllOrders = async (req, res) => {
  if (req.user.role !== 1) {
    res.status(403).send({ success: false, message: '沒有權限' })
    return
  }
  try {
    const result = await orders.find().populate('user', 'name').populate('products.product', 'name price').lean()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: true, message: '伺服器錯誤' })
  }
}
