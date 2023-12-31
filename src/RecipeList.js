import React from "react";
import RecipeView from "./RecipeView";
import './RecipeList.css'

function RecipeList({ recipes, deleteRecipes }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table className="recipe-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeView
              key={index}
              recipe={recipe}
              recipePhoto={recipe.photo}
              deleteRecipes={() => deleteRecipes(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
