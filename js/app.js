let globalController = (function() {

	let stringsDOM = controllerUI.getStringsDOM();
	let inputs = controllerUI.getAddInputs();

	let ingredientInput = document.querySelector(stringsDOM.ingredientInput);
	let directionsInput = document.querySelector(stringsDOM.directionsInput);
	let editModalIngredient = document.querySelector(stringsDOM.editModalIngredient);
	let editModalDirections = document.querySelector(stringsDOM.editModalDirections);
	
	let brAmountForIngredients = 1;
	let brAmountForEditIngredients = 1;
	let brAmountForDirections = 1;
	let brAmountForEditDirections = 1;

	const focusIngredientsArea = (type) => {  

		if (brAmountForIngredients == 1 && type == 'add') {
			let isFocused;
		
			brAmountForIngredients = brAmountForIngredients;

			ingredientInput.focus();
			isFocused = (document.activeElement == ingredientInput);

			ingredientInput.addEventListener('keypress', function(event) { 
				if ((isFocused == true && event.keyCode === 13) || (isFocused == true && event.which === 13)) {
					ingredientInput.value += '.</br>';
					brAmountForIngredients++;
				}
			})

			ingredientInput.addEventListener('click', function() { 
				brAmountForIngredients++; 
			})

			document.addEventListener('keydown', function(event) { 
				if ((event.keyCode === 9) || (event.which === 9)) {
					brAmountForIngredients++;
				}
			})
		} 

		else if (brAmountForEditIngredients == 1 && type == 'edit') {
			let isFocused;
					
			brAmountForEditIngredients = brAmountForEditIngredients;

			editModalIngredient.focus();
			isFocused = (document.activeElement == editModalIngredient);

			editModalIngredient.addEventListener('keypress', function(event) { 
				if ((isFocused == true && event.keyCode === 13) || (isFocused == true && event.which === 13)) {
					editModalIngredient.value += '.</br>';
					brAmountForEditIngredients++;
				}
			})

			editModalIngredient.addEventListener('click', function() { 
				brAmountForEditIngredients++; 
			})

			document.addEventListener('keydown', function(event) { 
				if ((event.keyCode === 9) || (event.which === 9)) {
					brAmountForEditIngredients++;
				}
			})
		}	
	}


	const focusDirectionsArea = (type) => {  

		if (brAmountForDirections == 1 && type == 'add') {  
			let isFocused;
		
			brAmountForDirections = brAmountForDirections;

			directionsInput.focus();
			isFocused = (document.activeElement == directionsInput);

			directionsInput.addEventListener('keypress', function(event) { 
				if ((isFocused == true && event.keyCode === 13) || (isFocused == true && event.which === 13)) {
					directionsInput.value += '.</br>';
					brAmountForDirections++;
				}
			})

			directionsInput.addEventListener('click', function() { 
				brAmountForDirections++; 
			})
	
			document.addEventListener('keydown', function(event) { 
				if ((event.keyCode === 9) || (event.which === 9)) {
					brAmountForDirections++;
				}
			})
		}	

		else if (brAmountForEditDirections == 1 && type == 'edit') {  
			let isFocused;
					
			brAmountForEditDirections = brAmountForEditDirections;

			editModalDirections.focus();
			isFocused = (document.activeElement == editModalDirections);

			editModalDirections.addEventListener('keypress', function(event) { 
				if ((isFocused == true && event.keyCode === 13) || (isFocused == true && event.which === 13)) {
					editModalDirections.value += '.</br>';
					brAmountForEditDirections++;
				}
			})

			editModalDirections.addEventListener('click', function() { 
				brAmountForEditDirections++; 
			})
				
			document.addEventListener('keydown', function(event) { 
				if ((event.keyCode === 9) || (event.which === 9)) {
					brAmountForEditDirections++;
				}
			})
		}	
	}

	const blurIngredientsArea = () => {  
		ingredientInput.blur();
	}

	const blurDirectionsArea = () => {
		directionsInput.blur();
	}

	const blurEditIngredientsArea = () => {  
		editModalIngredient.blur();
	}

	const blurEditDirectionsArea = () => {
		editModalDirections.blur();
	}

	const addRecipeValidator = () => {
		if (inputs.titleInput.value == '' || inputs.ingredientInput.value == '' || inputs.directionsInput.value == '') {
			controllerUI.addRecipeCheckTitle();
			controllerUI.addRecipeCheckIngredient();
			controllerUI.addRecipeCheckDirections();
			controllerUI.showModalInformation();	
		} else {
			controllerUI.hideModalInformation();
			recipeStatisticsController.addRecipe(inputs.titleInput.value, inputs.ingredientInput.value, inputs.directionsInput.value, inputs.urlInput.value, recipeStatisticsController.elementID);
			controllerUI.clearFields();
		}
	}

	window.onclick = function(event) {  

    	if (event.target !== ingredientInput) {
    		blurIngredientsArea();
    	} 
    	
    	else if (event.target !== directionsInput) {
    		blurDirectionsArea();
    	}
    	 
    	else if (event.target !== editModalIngredient) {
			blurEditIngredientsArea();
		} 
		
		else if (event.target !== editModalDirections) {
			blurEditDirectionsArea();
		}
	}

	document.querySelector(stringsDOM.ingredientInput).addEventListener('focus', function() {
		focusIngredientsArea('add');
	});  

	document.querySelector(stringsDOM.editModalIngredient).addEventListener('focus', function() {
		focusIngredientsArea('edit');
	});

	document.querySelector(stringsDOM.directionsInput).addEventListener('focus', function() {
		focusDirectionsArea('add');
	}); 

	document.querySelector(stringsDOM.editModalDirections).addEventListener('focus', function() {
		focusDirectionsArea('edit');
	}); 	

	document.querySelector(stringsDOM.modalAddSubmit).addEventListener('click', addRecipeValidator);
	document.querySelector(stringsDOM.shoppingListAdd).addEventListener('click', shoppingListController.shoppingListValidator);
	document.querySelector(stringsDOM.searchRecipe).addEventListener('keyup', searchEngine.searchRecipe);
	
})();
