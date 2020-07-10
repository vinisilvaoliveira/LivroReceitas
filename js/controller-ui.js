let controllerUI = (function() {

	let stringsDOM = {
		containerAdd: '.container__add',
		addModal: '.container__add-modal',
		appRecipes: '.app__recipes',
		appFavorites: '.favorites__recipe',
		editModal: '.container__edit-modal',
		editModalClose: '.edit-modal__close',
		searchRecipe: '.search__input',
		titleInput: '.title__input',
		editModalTitle: '.edit-title__input',
		ingredientInput: '.ingredient__input',
		editModalIngredient: '.edit-ingredient__input',
		directionsInput: '.directions__input',
		editModalDirections: '.edit-directions__input',
		urlInput: '.url__input',
		editModalUrl: '.edit-url__input',
		modalAddSubmit: '.content__button',
		modalEditSubmit: '.content__edit-button',
		modalInformation: '.modal__information',
		bodyRecipe: '.body__recipe',
		recipeTitle: ' .recipe__title',
		ingredientsList: ' .ingredients__list',
		directionsText: ' .directions__text',
		urlImg: ' .content__img',
		shoppinglistIngredient: '.ingredient__shop-list',
		shoppinglistAmount: '.amount__shop-list',
		shoppingListAdd: '.form__button',
		shoppinglistValidateInformation: '.validate-information'
	}

	const getStringsDOM = () => {
		return stringsDOM;
	}

	const getAddInputs = () => {
		return {
			titleInput: document.querySelector(stringsDOM.titleInput),
			ingredientInput: document.querySelector(stringsDOM.ingredientInput),
			directionsInput: document.querySelector(stringsDOM.directionsInput),
			urlInput: document.querySelector(stringsDOM.urlInput)
		}
	}

	const getShoppingListInputs = () => {
		return {
			ingredientInput: document.querySelector(stringsDOM.shoppinglistIngredient),
			amountInput: document.querySelector(stringsDOM.shoppinglistAmount)
		}
	}

	const addRecipeCheckTitle = () => {
		let inputs = getAddInputs(); 

		if (inputs.titleInput.value == '') {
			inputs.titleInput.style.borderColor = 'red';
		} else {
			inputs.titleInput.style.borderColor = 'green';
		}
	}

	const addRecipeCheckIngredient = () => {
		let inputs = getAddInputs(); 

		if (inputs.ingredientInput.value == '') {
			inputs.ingredientInput.style.borderColor = 'red';
		} else {
			inputs.ingredientInput.style.borderColor = 'green';
		}
	}

	const addRecipeCheckDirections = () => {
		let inputs = getAddInputs();

		if (inputs.directionsInput.value == '') {
			inputs.directionsInput.style.borderColor = 'red';
		} else {
			inputs.directionsInput.style.borderColor = 'green';
		}
	}

	const showModalInformation = () => {
		document.querySelector(stringsDOM.modalInformation).style.display = 'block';		
	}

	const hideModalInformation = () => {
		document.querySelector(stringsDOM.addModal).style.display = 'none';
	}

	const clearFields = () => {
		document.querySelector(stringsDOM.titleInput).value = '';    	
		document.querySelector(stringsDOM.ingredientInput).value = '';		
		document.querySelector(stringsDOM.directionsInput).value = '';
		document.querySelector(stringsDOM.urlInput).innerHTML.value = '';
	}

	return {
		getStringsDOM: getStringsDOM,
		getAddInputs: getAddInputs,
		getShoppingListInputs: getShoppingListInputs,
		addRecipeCheckTitle: addRecipeCheckTitle,
		addRecipeCheckIngredient: addRecipeCheckIngredient,
		addRecipeCheckDirections: addRecipeCheckDirections,
		showModalInformation: showModalInformation,
		hideModalInformation: hideModalInformation,
		clearFields: clearFields
	}

})();