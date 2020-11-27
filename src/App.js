  import React, {useEffect, useState} from 'react';
  import Recipe from './Recipe';
  import './App.css';
  
  
  const App = () => {
  
    const appID = "778adfac";
    const appKey = "8341a3c9d1723ee0a18f020f1feca40d";
    // https://api.edamam.com/search?q=chicken&app_id=778adfac&app_key=8341a3c9d1723ee0a18f020f1feca40d

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
  
    useEffect(() => {
      getRecipes();
    }, [query]);

    const updateSearch = e => {
      setSearch(e.target.value);
      console.log(search);
    }

    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch("");
    }

    const url = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}`;
  
    const getRecipes = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    }
  
    return (
      <div className="App">
        <div className="heading">FOOD FOOD</div>
        <form onSubmit={getSearch} className="searchForm">
          <input className="searchBar" type="text" value={search} onChange={updateSearch} />
          <button className="searchButton" type="submit">
            Search
          </button>
        </form>
        <div className="container">
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label} calories={recipe.recipe.calories.toFixed(2)}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              recipeText={recipe.recipe.url}
            />
          ))}
        </div>
      </div>
        </div>
    );
  }
  
  export default App;  