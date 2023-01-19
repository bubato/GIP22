import mongoose from "mongoose";

const User = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  posision: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    required: false,
  },
  updateAt: {
    type: Date,
    required: false,
  },
});

export default mongoose.model("Users", User);
