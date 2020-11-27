
import React from 'react';
import './App.css';

const Recipe = ({title, calories, image, ingredients, recipeText}) => {
  return (
    <div className="box">
      <h1 className="title">{title}</h1>
      <p className="calorie">Calories: {calories}</p>
      <img className="image" src={image} alt="" />
      <h3>Ingredients</h3>
      <ul className="ingredient">
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <a href={recipeText}>Recipe</a>
    </div>
  );
};

export default Recipe;