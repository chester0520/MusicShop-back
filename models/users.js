import mongoose from 'mongoose'
import md5 from 'md5'
import validator from 'validator'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  account: {
    type: String,
    required: [true, '帳號不能為空'],
    unique: true,
    validate: {
      validator: (email) => {
        return validator.isEmail(email)
      },
      message: '帳號格式不正確'
    }
  },
  password: {
    type: String,
    minlength: [4, '密碼必須 4 個字以上'],
    maxlength: [10, '密碼不能超過 10 個字'],
    required: [true, '請輸入密碼']
  },
  name: {
    type: String,
    required: [true, '請輸入姓名']
  },
  phone: {
    type: String,
    required: [true, '請輸入電話'],
    minlength: [10, '電話格式不正確'],
    maxlength: [10, '電話格式不正確']
  },
  address: {
    type: String,
    required: [true, '請輸入地址']
  },
  role: {
    // 0 = 一般會員
    // 1 = 管理員
    type: Number,
    default: 0,
    required: [true, '沒有使用者分類']
  },
  tokens: {
    type: [String]
  },
  cart: {
    type: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'products',
          required: [true, '缺少商品 ID']
        },
        amount: {
          type: Number,
          required: [true, '缺少商品數量']
        }
      }
    ]
  },
  message: {
    type: String,
    required: [true, '缺少訊息內容']
  }
}, { versionKey: false })

UserSchema.pre('save', function (next) {
  const user = this
  if (user.isModified('password')) {
    user.password = md5(user.password)
  }
  next()
})

export default mongoose.model('users', UserSchema)
