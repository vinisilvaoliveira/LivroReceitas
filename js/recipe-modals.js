const showAddModal = () => {
	controllerUI.clearFields();
	document.querySelector('.container__add-modal').style.display = 'block';
}
	
const hideAddModal = () => {
	document.querySelector('.container__add-modal').style.display = 'none';
	controllerUI.clearFields();
}

document.querySelector('.container__add').addEventListener('click', showAddModal);
document.querySelector('.recipe-close').addEventListener('click', hideAddModal);
