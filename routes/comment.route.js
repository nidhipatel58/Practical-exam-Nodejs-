let express = require("express");
let route = express.Router();
let { commentController } = require("../controller");

route.post("/create", commentController.createComment);
route.get("/get/:id", commentController.getCommentById);
route.delete("/delete/:id", commentController.deleteComment);
route.put("/update/:id", commentController.updateComment);

module.exports = route;