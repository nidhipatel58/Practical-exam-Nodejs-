let { recipeSchema } = require("../models");

let createRecipe = (body) => {
    console.log(body, "Creating Recipe");
    return recipeSchema.create(body);
}

let getRecipeById = (id) => {
    return recipeSchema.findById(id).populate('createdBy', 'username');
}

let getAllRecipes = () => {
    return recipeSchema.find().populate('createdBy', 'username');
}

let updateRecipe = (body, id) => {
    return recipeSchema.findByIdAndUpdate(id, body);
}

let deleteRecipe = (id) => {
    return recipeSchema.findByIdAndDelete(id);
}

module.exports = { createRecipe, getRecipeById, getAllRecipes, updateRecipe, deleteRecipe };