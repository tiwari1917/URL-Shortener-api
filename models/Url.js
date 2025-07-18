const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortCode: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiryDate: {
    type: Date,
    default: null, // optional but stored when sent
  },
  clickCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Url', urlSchema);
