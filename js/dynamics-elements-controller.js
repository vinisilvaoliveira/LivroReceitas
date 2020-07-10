let dynamicElementsController = (function() {

	const tasksOnDynamicsRecipes = (dishImage, elementID) => {
		elementID = elementID;

		let recipesData = recipeStatisticsController.getRecipesData();
		let inputs = controllerUI.getAddInputs();
		let stringsDOM = controllerUI.getStringsDOM();
		let recipesList = document.querySelector(stringsDOM.appRecipes); 

		let bodyRecipe = document.createElement('div');
		let recipeTitle = document.createElement('div');
		let recipeContent = document.createElement('div');
		let content = document.createElement('div');
		let contentImg = document.createElement('div');
		let contentText = document.createElement('div');
		let textIngredient = document.createElement('div');
		let ingredientsTitle = document.createElement('div');
		let ingredientsList = document.createElement('div');
		let textDirections = document.createElement('div');
		let directionsTitle = document.createElement('div');
		let directionsText = document.createElement('div');
		let contentIcons = document.createElement('div');
		let informationNavbar = document.createElement('div');
		let iconEdit = document.createElement('div');
		let edit = document.createElement('img');
		let iconDelete = document.createElement('div');
		let del = document.createElement('img');
		let iconFavorite = document.createElement('div');
		let favorite = document.createElement('img');
		let iconUnfavorite = document.createElement('div');
		let unfavorite = document.createElement('img');

		bodyRecipe.classList.add('body__recipe');
		bodyRecipe.setAttribute('id', `element${elementID}`);
		recipeTitle.classList.add('recipe__title');
		recipeContent.classList.add('recipe__content');
		content.classList.add('content');
		contentImg.classList.add('content__img');
		contentText.classList.add('content__text');
		textIngredient.classList.add('text__ingredients');
		ingredientsTitle.classList.add('ingredients__title');
		ingredientsList.classList.add('ingredients__list');
		textDirections.classList.add('text__directions');
		directionsTitle.classList.add('directions__title');
		directionsText.classList.add('directions__text');
		contentIcons.classList.add('content__icons');
		informationNavbar.classList.add('information__navbar');
		iconEdit.classList.add('icon')
		iconEdit.classList.add('icons__edit');
		edit.classList.add('icons__edit');
		iconDelete.classList.add('icon');
		iconDelete.classList.add('icons__delete');
		del.classList.add('icons__delete');
		iconFavorite.classList.add('icon'); 
		iconFavorite.classList.add('icons__favorite');
		favorite.classList.add('icons__favorite');
		iconUnfavorite.classList.add('icon');
		iconUnfavorite.classList.add('icons__unfavorite');
		unfavorite.classList.add('icon');
		unfavorite.classList.add('icons__unfavorite');

		iconEdit.setAttribute('id', `edit${elementID}`);
		edit.setAttribute('src', 'images/edit.svg');
		del.setAttribute('src', 'images/bin.svg');
		iconFavorite.setAttribute('id', `favorite${elementID}`);
		favorite.setAttribute('src','images/like.svg');
		iconUnfavorite.setAttribute('id', `unfavorite${elementID}`);
		unfavorite.setAttribute('src', 'images/unlike.svg');
		
		recipeTitle.innerHTML = inputs.titleInput.value;
		contentImg.style.backgroundImage = `url(${dishImage})`;
		ingredientsTitle.innerHTML = 'Ingredients:';
		ingredientsList.innerHTML = inputs.ingredientInput.value;
		directionsTitle.innerHTML = 'Directions:';
		directionsText.innerHTML = inputs.directionsInput.value;
		iconEdit.innerHTML += 'Edit';
		iconDelete.innerHTML += 'Delete';
		iconFavorite.innerHTML += 'Favorite';
		iconUnfavorite.innerHTML += 'Unfavorite';
		
		recipesList.appendChild(bodyRecipe);
		bodyRecipe.appendChild(recipeTitle);
		bodyRecipe.appendChild(recipeContent);
		recipeContent.appendChild(content);
		content.appendChild(contentImg);
		content.appendChild(contentText);
		contentText.appendChild(textIngredient);
		textIngredient.appendChild(ingredientsTitle);
		textIngredient.appendChild(ingredientsList);
		contentText.appendChild(textDirections);
		textDirections.appendChild(directionsTitle);
		textDirections.appendChild(directionsText);
		recipeContent.appendChild(contentIcons);
		contentIcons.appendChild(informationNavbar);
		contentIcons.appendChild(iconEdit);
		contentIcons.appendChild(iconDelete);
		contentIcons.appendChild(iconFavorite);
		contentIcons.appendChild(iconUnfavorite);
		iconEdit.appendChild(edit);
		iconDelete.appendChild(del);
		iconFavorite.appendChild(favorite);
		iconUnfavorite.appendChild(unfavorite);

		const deleteRecipe = () => {
			let ids, index, recipesData, string;
			recipesData = recipeStatisticsController.getRecipesData();

			ids = recipesData.recipe.map(function(currentElement) {
				return currentElement.id;
			})

			index = ids.indexOf(elementID);

			if (index !== -1) {
				recipesData.recipe.splice(index,1);
			}

			string = iconUnfavorite.id.split('e');

			appRecipes.removeChild(bodyRecipe);
			document.getElementById(`favoriteElement${string[1]}`).remove(); 
		}

		const isFavorite = () => {
			toggleFavorite(true);   
			favoriteController.addRecipeToFavorite(elementID);
		}

		const isNotFavorite = () => {
			toggleFavorite(false);
			deleteFromFavorites();
		}

		const toggleFavorite = (state) => {
			let toggle = state;

			if (toggle == true) {
				iconFavorite.style.display = 'none';
				iconUnfavorite.style.display = 'flex';
				informationNavbar.style.display = 'flex';
				informationNavbar.innerHTML = `Recipe Was Add To Favorite Recipes List`;
				setTimeout(function() {
					informationNavbar.style.display = 'none';
				}, 3000);

			} else { 
				iconFavorite.style.display = 'flex';
				iconUnfavorite.style.display = 'none';
				informationNavbar.style.display = 'flex';
				informationNavbar.innerHTML = `Recipe Was Delete From Favorite Recipes List`;
				setTimeout(function() {
					informationNavbar.style.display = 'none';
				}, 3000);
			}
		}

		const deleteFromFavorites = () => {   
			let string = iconUnfavorite.id.split('e');
			document.getElementById(`favoriteElement${string[1]}`).remove();
		}

		const editRecipeController = () => { 
			showEditModal();
			completeInputs();
		}

		const showEditModal = () => {
			let editModal, button, brAmountForIngredients, brAmountForDirections;

			document.querySelector(stringsDOM.editModal).style.display = 'block';
			
			editModal = document.querySelector('.container__edit-modal .content__footer');
			button = document.createElement('div');
			button.classList.add('content__edit-button');
			button.innerHTML = `Edit Recipe`;
			editModal.appendChild(button);
			brAmountForIngredients = 1;
			brAmountForDirections = 1;

			const showEditRecipe = () => {
				recipeTitle.innerHTML = document.querySelector(stringsDOM.editModalTitle).value;
				ingredientsList.innerHTML = document.querySelector(stringsDOM.editModalIngredient).value;
				directionsText.innerHTML = document.querySelector(stringsDOM.editModalDirections).value;
				contentImg.style.backgroundImage = `url(${document.querySelector(stringsDOM.editModalUrl).value})`;
				editModal.removeChild(button);

				favoriteController.editRecipe(bodyRecipe.id, recipeTitle.innerHTML, ingredientsList.innerHTML, directionsText.innerHTML, contentImg.style.backgroundImage);
			} 

			button.addEventListener('click', showEditRecipe);
			button.addEventListener('click', hideEditModal);
			document.querySelector(stringsDOM.editModalClose).addEventListener('click', hideEditModal);
		}

		const completeInputs = () => { 
			document.querySelector(stringsDOM.editModalTitle).value = recipeTitle.innerHTML;  
			document.querySelector(stringsDOM.editModalIngredient).value = ingredientsList.innerHTML;
			document.querySelector(stringsDOM.editModalDirections).value =	directionsText.innerHTML;
			document.querySelector(stringsDOM.editModalUrl).value = contentImg.style.backgroundImage;
		}

		const hideEditModal = () => {
			document.querySelector(stringsDOM.editModal).style.display = 'none';
			document.querySelector('.content__edit-button').remove();
		}

		iconDelete.addEventListener('click', deleteRecipe);
		iconFavorite.addEventListener('click', isFavorite);
		iconUnfavorite.addEventListener('click', isNotFavorite);
		iconEdit.addEventListener('click', editRecipeController);
	}

	const createShoppingListElements = () => {
		let stringsDOM = controllerUI.getStringsDOM();
		let inputs = controllerUI.getShoppingListInputs();

		let shoppingList = document.querySelector('.body__shopping-list');
		let listElement = document.createElement('div');
		let cartIcon = document.createElement('img');
		let elementData = document.createElement('div');
		let elementName = document.createElement('div');
		let elementAmount = document.createElement('div');
		let closeIcon = document.createElement('img');

		listElement.classList.add('shopping-list__element');
		elementData.classList.add('element__data');
		elementName.classList.add('element__name');
		elementAmount.classList.add('element__amount');
		closeIcon.classList.add('delete__element');

		cartIcon.setAttribute('src', 'images/cart.svg');
		closeIcon.setAttribute('src', 'images/close.svg');

		elementName.innerHTML = inputs.ingredientInput.value;
		elementAmount.innerHTML = `( ${inputs.amountInput.value} )`;

		shoppingList.appendChild(listElement);
		listElement.appendChild(cartIcon);
		listElement.appendChild(elementData);
		listElement.appendChild(closeIcon);
		elementData.appendChild(elementName);
		elementData.appendChild(elementAmount);

		const deleteItem = () => {
			shoppingList.removeChild(listElement);
		}

		closeIcon.addEventListener('click', deleteItem); 
	}

	const tasksOnFavoritesRecipes = (elementID) => { 
		let stringsDOM = controllerUI.getStringsDOM();

		let recipeElement = document.querySelector(`#element${elementID}`);
		let recipeString = `#element${elementID}`;	
		let elementTitle = document.querySelector(recipeString+stringsDOM.recipeTitle).textContent;
		let elementIngredientsList = document.querySelector(recipeString+stringsDOM.ingredientsList).textContent;
		let elementDirectionsText = document.querySelector(recipeString+stringsDOM.directionsText).textContent;	
		let imgUrl = document.querySelector(recipeString+stringsDOM.urlImg).style.backgroundImage;

		let appFavorites = document.querySelector('.app__favorites');
		let favoriteElement = document.createElement('div');
		let recipeTitle = document.createElement('div');
		let recipeContent = document.createElement('div');
		let content = document.createElement('div');
		let contentImg = document.createElement('div');
		let favoritesContent = document.createElement('div');
		let textIngredients = document.createElement('div');
		let ingredientsTitle = document.createElement('div');
		let ingredientsList = document.createElement('div');
		let textDirections = document.createElement('div');
		let directionsTitle = document.createElement('div');
		let directionsText = document.createElement('div');
		let contentIcons = document.createElement('div');
		let favoritesIcon = document.createElement('div');
		let iconUnfavorite = document.createElement('img');
		let favorite = document.createElement('div');

		favoriteElement.classList.add('favorites__recipe');
		recipeTitle.classList.add('recipe__title');
		recipeContent.classList.add('recipe__content');
		content.classList.add('content');
		contentImg.classList.add('content__img');
		favoritesContent.classList.add('favorites__content');
		textIngredients.classList.add('text__ingredients');
		ingredientsTitle.classList.add('ingredients__title');
		ingredientsList.classList.add('ingredients__list');
		textDirections.classList.add('text__directions');
		directionsTitle.classList.add('directions__title');
		directionsText.classList.add('directions__text');
		contentIcons.classList.add('content__icons');
		favoritesIcon.classList.add('favorites__icon');
		favoritesIcon.classList.add('icons__unfavorite');
		iconUnfavorite.classList.add('icons__unfavorite');
		
		favoriteElement.setAttribute('id', `favoriteElement${elementID}`);
		favoritesIcon.setAttribute('id', `unfavorite${elementID}`);
		iconUnfavorite.setAttribute('src', 'images/unlike.svg');
		favorite.setAttribute('id', `favorite${elementID}`);

		recipeTitle.innerHTML = elementTitle;
		contentImg.style.backgroundImage = imgUrl;
		ingredientsTitle.innerHTML = 'Ingredients:';
		ingredientsList.innerHTML = elementIngredientsList.split('.').join('</br>');
		directionsTitle.innerHTML = 'Directions:';
		directionsText.innerHTML = elementDirectionsText.split('.').join('</br>');
		favoritesIcon.innerHTML += 'Unfavorite';

		appFavorites.appendChild(favoriteElement);
		favoriteElement.appendChild(recipeTitle);
		favoriteElement.appendChild(recipeContent);
		recipeContent.appendChild(content);
		content.appendChild(contentImg);
		content.appendChild(favoritesContent);
		favoritesContent.appendChild(textIngredients);
		favoritesContent.appendChild(textDirections);
		textIngredients.appendChild(ingredientsTitle);
		textIngredients.appendChild(ingredientsList);
		textDirections.appendChild(directionsTitle);
		textDirections.appendChild(directionsText);
		recipeContent.appendChild(contentIcons);
		contentIcons.appendChild(favoritesIcon);
		favoritesIcon.appendChild(iconUnfavorite);

		const deleteFromFavorites = () => {
			document.getElementById(favoritesIcon.id).style.display = 'none';
			document.getElementById(favorite.id).style.display = 'flex';
			appFavorites.removeChild(favoriteElement);
		}

		favoritesIcon.addEventListener('click', deleteFromFavorites)
	}

	return {
		tasksOnDynamicsRecipes: tasksOnDynamicsRecipes,
		createShoppingListElements: createShoppingListElements,
		tasksOnFavoritesRecipes: tasksOnFavoritesRecipes
	}

})()
