const { Schema, model } = require('mongoose')

const noticeSchema = Schema(
  {
    category: {
      type: String,
      enum: ['lost-found', 'in-good-hands', 'sell'],
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Set title for notice'],
    },
    name: {
      type: String,
      default: 'no name',
    },
    birthday: {
      type: String,
      default: '',
    },
    breed: {
      type: String,
      default: '',
    },
    sex: {
      type: String,
      enum: ['male', 'female', ''],
      default: '',
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
    },
    price: {
      type: Number,
      default: 0,
    },
    imageURL: {
      type: String,
      default: '',
    },
    comments: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
)

const Notice = model('notice', noticeSchema)

module.exports = Notice
