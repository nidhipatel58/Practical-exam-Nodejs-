let {recipeService}=require("../service");

let createRecipe = async (req, res) => {
    try {
        let body = req.body;
        let recipe = await recipeService.createRecipe(body);
        res.status(201).json({
            statusCode: 201,
            message: "Recipe created successfully!",
            recipe
        });
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }
}

let getRecipeById = async (req, res) => {
    try {
        let { id } = req.params;
        let recipe = await recipeService.getRecipeById(id);
        if (!recipe) {
            res.status(404).json({
                statusCode: 404,
                message: "Recipe not found"
            });
        } else {
            res.status(200).json({
                statusCode: 200,
                message: "Recipe retrieved successfully!",
                recipe
            });
        }
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }
}

let getAllRecipes = async (req, res) => {
    try {
        let recipes = await recipeService.getAllRecipes();
        res.status(200).json({
            statusCode: 200,
            message: "Recipes retrieved successfully!",
            recipes
        });
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }
}

let updateRecipe = async (req, res) => {
    try {
        let body = req.body;
        let { id } = req.params;
        let recipe = await recipeService.updateRecipe(body, id);
        if (!recipe) {
            res.status(404).json({
                statusCode: 404,
                message: "Recipe not found"
            });
        } else {
            res.status(200).json({
                statusCode: 200,
                message: "Recipe updated successfully!",
                recipe
            });
        }
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }
}

let deleteRecipe = async (req, res) => {
    try {
        let { id } = req.params;
        let recipe = await recipeService.deleteRecipe(id);
        if (!recipe) {
            res.status(404).json({
                statusCode: 404,
                message: "Recipe not found"
            });
        } else {
            res.status(200).json({
                statusCode: 200,
                message: "Recipe deleted successfully!",
                recipe
            });
        }
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }
}

module.exports = { createRecipe, getRecipeById, getAllRecipes, updateRecipe, deleteRecipe };
