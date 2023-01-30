import mongoose, { mongo } from "mongoose";

const User = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  position: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Position",
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
User.pre(/^find/, function (next) {
  this.populate({
    path: "position",
    select: "name level",
  });
  next();
});
export default mongoose.model("Users", User);
