import mongoose from 'mongoose'
import shortId from 'shortid'

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate
  },
})

export default mongoose.model('ShortUrl', shortUrlSchema)