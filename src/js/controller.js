
import * as model from './model.js';
import recipeView from './recipeView.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function(){

  try{
    const id = window.location.hash.slice(1);
    if(!id) return;
    // Loading Recipe.
    await model.loadRecipe(id);
    
    // Rendering Recipe.
    recipeView.render(recipe.model.state);

  }catch(err){
    alert(err);
  }
};

['hashchange','load'].forEach(ev => window.addEventListener(ev, controlRecipes));

