let shoppingListController = (function() {

	let stringsDOM = controllerUI.getStringsDOM();
	let inputs = controllerUI.getShoppingListInputs();

	const checkIngredient = () => {
		if (inputs.ingredientInput.value == '') {
			inputs.ingredientInput.style.borderColor = 'red';
			showShoppingListInformation();
		} else {
			inputs.ingredientInput.style.borderColor = 'green';
		}
	}

	const checkAmount = () => {
		if (inputs.amountInput.value == '') {
			inputs.amountInput.style.borderColor = 'red';
			showShoppingListInformation();
		} else {
			inputs.amountInput.style.borderColor = 'green';
		}
	}

	const showShoppingListInformation = () => {
		document.querySelector(stringsDOM.shoppinglistValidateInformation).style.display = 'flex';
	}

	const hideShoppingListInformation = () => {
		document.querySelector(stringsDOM.shoppinglistValidateInformation).style.display = 'none';
	} 

	const clearFields = () => {
		inputs.ingredientInput.value = '';
		inputs.amountInput.value = '';
	}

	const addElement = () => {
		if (inputs.ingredientInput.value !== '' && inputs.amountInput.value !== '') {
			dynamicElementsController.createShoppingListElements();
			hideShoppingListInformation();
			clearFields();
		}
	}

	const shoppingListValidator = () => {
		checkIngredient();
		checkAmount();
		addElement();
	}

	return {
		shoppingListValidator: shoppingListValidator
	}

})()