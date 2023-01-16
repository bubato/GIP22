import mongoose from "mongoose";

const Position = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    level: {
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

export default mongoose.model('Position', Position);