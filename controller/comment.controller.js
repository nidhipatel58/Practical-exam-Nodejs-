let { commentService } = require("../service");


let createComment = async (req, res) => {
    try {
        const body = req.body;
        const comment = await commentService.createComment(body);
        res.status(201).json({
            statusCode: 201,
            message: "Comment created successfully!",
            comment
        });
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }
};

let getCommentById = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await commentService.getCommentById(id);
        if (!comment) {
            res.status(404).json({
                statusCode: 404,
                message: "Comment not found"
            });
        } else {
            res.status(200).json({
                statusCode: 200,
                message: "Comment retrieved successfully!",
                comment
            });
        }
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }
};


let deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedComment = await commentService.deleteComment(id);
        if (!deletedComment) {
            res.status(404).json({
                statusCode: 404,
                message: "Comment not found"
            });
        } else {
            res.status(200).json({
                statusCode: 200,
                message: "Comment deleted successfully!",
                deletedComment
            });
        }
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }
};


let updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const updatedComment = await commentService.updateComment(id, body);
        if (!updatedComment) {
            res.status(404).json({
                statusCode: 404,
                message: "Comment not found"
            });
        } else {
            res.status(200).json({
                statusCode: 200,
                message: "Comment updated successfully!",
                updatedComment
            });
        }
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }
};

module.exports = { createComment, getCommentById, deleteComment, updateComment };
