const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const OrderSchema = new Schema({
  color: {
    type: String,
    required: true,
  },
  fuse: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

OrderSchema.pre('save', async function (next) {
  try {
    if (this.isNew) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
    }
    next();
  } catch (error) {
    next(error);
  }
});

OrderSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model('user', OrderSchema);
module.exports = User;
