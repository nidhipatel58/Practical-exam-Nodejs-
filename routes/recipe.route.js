let express = require("express");
let route = express.Router();
let  {recipeController } = require("../controller");

route.post("/create", recipeController.createRecipe);
route.get("/get/:id", recipeController.getRecipeById);
route.get("/getAll", recipeController.getAllRecipes);
route.put("/update/:id", recipeController.updateRecipe);
route.delete("/delete/:id", recipeController.deleteRecipe);

module.exports = route;