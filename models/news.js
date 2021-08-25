import mongoose from 'mongoose'

const Schema = mongoose.Schema

const NewSchema = new Schema({
  image: {
    type: String
  },
  title: {
    type: String,
    required: [true, '標題不能為空'],
    minlength: [1, '標題不能為空']
  },
  text: {
    type: String,
    required: [true, '內容不能為空'],
    minlength: [1, '內容不能為空']
  },
  post: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    required: [true, '日期不能為空']
  }
}, { versionKey: false })

export default mongoose.model('news', NewSchema)
