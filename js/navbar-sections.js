let sectionTitle = document.querySelector('.section-navbar__title');
let recipesBtn = document.querySelector('.recipes-button');
let shoppingListBtn = document.querySelector('.shopping-list-button');
let favoritesBtn = document.querySelector('.favorites-button');
let appRecipes = document.querySelector('.app__recipes');
let containerAdd = document.querySelector('.container__add');
let appShoppingList = document.querySelector('.app__shopping-list');
let appFavorites = document.querySelector('.app__favorites');
let searchRecipe = document.querySelector('.app__search');

recipesBtn.addEventListener('click', function() {
	recipesBtn.style.borderColor = '#e1d4c8'; 
	shoppingListBtn.style.borderColor = 'white';
	favoritesBtn.style.borderColor = 'white';
	sectionTitle.innerHTML = 'Recipes';
	appRecipes.style.display = 'block';
	containerAdd.style.display = 'block';
	appShoppingList.style.display = 'none';
	appFavorites.style.display = 'none';
	searchRecipe.style.display = 'flex';
})

shoppingListBtn.addEventListener('click', function() {
	shoppingListBtn.style.borderColor = '#e1d4c8';
	recipesBtn.style.borderColor = 'white'; 
	favoritesBtn.style.borderColor = 'white'; 
	sectionTitle.innerHTML = 'Shopping List';
	appRecipes.style.display = 'none';
	containerAdd.style.display = 'none';
	appShoppingList.style.display = 'flex';
	appFavorites.style.display = 'none';
	searchRecipe.style.display = 'none';
})

favoritesBtn.addEventListener('click', function() {
	favoritesBtn.style.borderColor = '#e1d4c8';
	recipesBtn.style.borderColor = 'white';
	shoppingListBtn.style.borderColor = 'white'; 
	sectionTitle.innerHTML = 'Favorites';
	appRecipes.style.display = 'none';
	containerAdd.style.display = 'none';
	appShoppingList.style.display = 'none';
	appFavorites.style.display = 'flex';
	searchRecipe.style.display = 'none';
})