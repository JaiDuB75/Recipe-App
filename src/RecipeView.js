//import React, {useState} from "react";
import './RecipeView.css'; 

function RecipeView({ recipe, deleteRecipes }) {
  return (
    <tr>
      <td className='recipe-text'>{recipe.name}</td>
      <td className='recipe-text'>{recipe.cuisine}</td>
      <td>
        <img className='recipe-photo' src={recipe.photo} alt=''/>
      </td>
      <td className='content_td'><p>{recipe.ingredients}</p></td>
      <td className='content_td'><p>{recipe.preparation}</p></td>
      <td>
        <button name="delete" onClick={deleteRecipes}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeView;
