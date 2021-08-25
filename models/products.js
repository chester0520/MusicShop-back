import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, '商品名不能為空'],
    minlength: [1, '商品名不能為空']
  },
  price: {
    type: Number,
    min: [0, '價格格式不正確'],
    required: [true, '價格不能為空']
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    enum: ['樂器', '音響', '效果器', '週邊耗材']
  }
}, { versionKey: false })

export default mongoose.model('products', ProductSchema)
