import React, { useState } from "react";
import './RecipeCreate.css'

function RecipeCreate({ recipes, setRecipes }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  //Creating states for required fields
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  //Handlers for setting the value from the event
  const nameHandler = (event) => setName(event.target.value);
  const cuisineHandler = (event) => setCuisine(event.target.value);
  const photoHandler = (event) => setPhoto(event.target.value);
  const ingredientsHandler = (event) => setIngredients(event.target.value);
  const preparationHandler = (event) => setPreparation(event.target.value);

  //On Submit set the recipes to contain all the previous recipes
  const submitHandler = (event) => {
    event.preventDefault();
    setRecipes([
      ...recipes,
      { name, cuisine, photo, ingredients, preparation },
    ]);
    setName("Name");
    setCuisine("Cuisine");
    setPhoto("URL");
    setIngredients("Ingredients");
    setPreparation("Preparation");
  };

  return (
    <form name="create" onSubmit={submitHandler}>
      <table className="table-color">

        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={nameHandler}
                placeholder="Name"
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                value={cuisine}
                onChange={cuisineHandler}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="url"
                value={photo}
                onChange={photoHandler}
                placeholder="Photo"
              />
            </td>
            <td>
              <textarea
                id="Ingredients"
                name="Ingredients"
                type="text"
                value={ingredients}
                onChange={ingredientsHandler}
                placeholder="Ingredients"
              />
            </td>
            <td>
              <textarea
                id="Preparation"
                name="Preparation"
                type="content"
                value={preparation}
                onChange={preparationHandler}
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
