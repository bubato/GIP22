import mongoose from "mongoose";

const Document = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Users'
    },
    thumbnailLink: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    createAt: {
        type: Date,
        required: false
    },
    updateAt: {
        type: Date,
        required: false
    },
});
Document.pre(/^find/, function (next) {
    this.populate({
      path: "owner",
      select: "fullName",
    });
    next();
  });
export default mongoose.model('Document', Document);