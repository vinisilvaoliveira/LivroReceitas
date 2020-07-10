let recipeStatisticsController = (function() {

	function Recipe(title, ingredients, directions, url, id) {
		this.title = title;
		this.ingredients = ingredients;
		this.directions = directions;
		this.url = url;
		this.id = id;
	}

	let recipesData = {
		recipe: []
	}

	const getRecipesData = () => {
		return recipesData;
	}

	const addRecipe = (title, ingredients, directions, url, id) => {
		let elementID, newRecipe;
		
		if (recipesData.recipe.length > 0) {
			elementID = recipesData.recipe[recipesData.recipe.length-1].id+1;
		} else {
			elementID = 0;
		}

		if (url == '') {
			url = 'images/default.jpg';
		} else {
			url = url;
		}

		newRecipe = new Recipe(title, ingredients, directions, url, elementID);
		recipesData.recipe.push(newRecipe);
		dynamicElementsController.tasksOnDynamicsRecipes(url, elementID);
	}

	return {
		addRecipe: addRecipe,
		getRecipesData: getRecipesData
	}

})();