let searchEngine = (function(){

	let stringsDOM = controllerUI.getStringsDOM();

	const searchRecipe = () => {
		let searchRecipe, bodyRecipe, recipeTitle;

		searchRecipe = document.querySelector(stringsDOM.searchRecipe);
		bodyRecipe = document.querySelectorAll(stringsDOM.bodyRecipe); 
		recipeTitle = document.querySelectorAll(stringsDOM.recipeTitle);
	
		for(let i = 0; i<bodyRecipe.length; i++) {
			if(recipeTitle[i].innerHTML.includes(searchRecipe.value)) { 
				bodyRecipe[i].style.display ='block';
			} else {
				bodyRecipe[i].style.display = 'none';
			}
		}
	}

	return {
		searchRecipe: searchRecipe
	}

})()
