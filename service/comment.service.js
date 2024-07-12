let { commentSchema } = require("../models");

let createComment = (body) => {
    console.log(body, "res");
    return commentSchema.create(body);
}

let getCommentById = (id) => {
    return commentSchema.findById(id);
}


let deleteComment = (id) => {
    return commentSchema.findByIdAndDelete(id);
}

let updateComment = (body, id) => {
    return commentSchema.findByIdAndUpdate(id, body);
}

module.exports = { createComment, getCommentById, deleteComment, updateComment };