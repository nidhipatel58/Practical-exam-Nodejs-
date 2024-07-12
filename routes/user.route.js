let express = require("express");
let route = express.Router();
let { userController } = require("../controller");



route.post("/register", userController.register);
route.get("/get", userController.getUserById);
route.delete("/delete/:id", userController.deleteUser);
route.put("/update/:id", userController.updateUser)

//Login:-

route.post("/login",userController.login)


module.exports = route;