const express = require('express');
const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/:recipe_id', (req, res, next) => {
    Recipes.getRecipeById(req.params.recipe_id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(next)
})

router.use((error, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the recipes router',
        message: error.message,
        stack: error.stack
    })
})

module.exports = router