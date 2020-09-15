const mongoose = require('mongoose');
 
const messageSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      unique: false,
      required: true,
    },
  },
);
 
module.exports = mongoose.model('Message', messageSchema);