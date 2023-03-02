const db = require('../../data/db-config');

async function getRecipeById(recipe_id) {
    const recipeRows = await db('recipes as r')
        .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
        .leftJoin('step_ingredients as si', 'si.step_id', 's.step_id')
        .leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
        .select(
            'r.recipe_id',
            'r.recipe_name',
            's.step_id',
            's.step_number',
            's.step_instructions',
            'i.ingredient_id',
            'i.ingredient_name',
            'si.quantity'
        )
        .where('r.recipe_id', recipe_id)
        .orderBy('s.step_number')

        const recipes = {
            
            // {
            //     "recipe_id" : 1,
            //     "recipe_name": "Spaghetti Bolognese",
            //     "created_at": "2021-01-01 08:23:19.120",
            //     "steps": [
            //       {
            //         "step_id": 11,
            //         "step_number": 1,
            //         "step_instructions": "Put a large saucepan on a medium heat",
            //         "ingredients": []
            //       },
            //       {
            //         "step_id": 12,
            //         "step_number": 2,
            //         "step_instructions": "Add 1 tbsp olive oil",
            //         "ingredients": [
            //           { "ingredient_id": 27, "ingredient_name": "olive oil", "quantity": 0.014 }
            //         ]
            //       },
            //     ]
            //   }
        }
    return recipeRows
}

module.exports = {
    getRecipeById
}