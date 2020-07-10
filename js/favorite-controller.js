let favoriteController = (function() {

	const addRecipeToFavorite = (elementID) => {
		dynamicElementsController.tasksOnFavoritesRecipes(elementID);
	}

	const editRecipe = (recipeNumber, recipeTitle, ingredientsList, directionsText, contentImg) => {
		let favoriteID;

		recipeNumber = recipeNumber.split('t');
		favoriteID = `favoriteElement${recipeNumber[1]}`;

		document.querySelector(`#${favoriteID} .recipe__title`).innerHTML = recipeTitle;
		document.querySelector(`#${favoriteID} .ingredients__list`).innerHTML = ingredientsList;
		document.querySelector(`#${favoriteID} .directions__text`).innerHTML = directionsText;
		document.querySelector(`#${favoriteID} .content__img`).style.backgroundImage = contentImg;
	}
	
	return {
		addRecipeToFavorite: addRecipeToFavorite,
		editRecipe: editRecipe
	}

})()