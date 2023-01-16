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
        type: String,
        required: true
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

export default mongoose.model('Document', Document);