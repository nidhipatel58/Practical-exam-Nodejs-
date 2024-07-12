let express = require("express");
let routes = express.Router();
let userRoute = require("./user.route");
let recipeRoute = require("./recipe.route");
let commentRoute=require("./comment.route")



routes.use("/user", userRoute);
routes.use("/recipe", recipeRoute);
routes.use("/comment",commentRoute)



module.exports = routes;