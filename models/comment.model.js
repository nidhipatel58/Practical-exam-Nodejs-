let mongoose = require("mongoose");


let commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, ref: "User",
        required: true
    },
    recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

let comment = mongoose.model("Comment", commentSchema);
module.exports=comment