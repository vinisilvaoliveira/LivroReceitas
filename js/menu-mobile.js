function init() {
	let stringsDOM = controllerUI.getStringsDOM();
	let toggle = false;
	let open = document.querySelector('.app__hamburger-menu');
	let openOverlay = document.querySelector('.menu-overlay');
	let recipes = document.querySelector('.overlay-content__add-recipes');
	let shoppingList = document.querySelector('.overlay-content__shopping-list');
	let favorites = document.querySelector('.overlay-content__favorites');
	let searchMobile = document.querySelector('.overlay-content__search-navbar');
	let searchMobileInput = document.querySelector('.overlay-content__search-navbar input');
	let searchButton = document.querySelector('.search-navbar__button');
	let searchMobileInformation = document.querySelector('.search-navbar__information');

	function showContent() {

		if (toggle == true) {
			document.querySelector(".app__hamburger-menu").src = "images/menu.png";
			openOverlay.style.display = 'none';	
		} else {
			document.querySelector(".app__hamburger-menu").src = "images/close.png";
			openOverlay.style.display = 'flex';	
		}

		toggle = !toggle; 

    }

   	open.addEventListener('click', showContent);

   	recipes.addEventListener('click', function() {
   		searchMobile.style.display = 'block';
   		document.querySelector('.app__recipes').style.display = 'block';
 		document.querySelector('.app__shopping-list').style.display = 'none';
 		document.querySelector('.app__favorites').style.display = 'none';
 		document.querySelector('.section-navbar__title').innerHTML = `Recipes`;
 		document.querySelector('.container__add').style.display = 'block';
 		document.querySelector('.menu-overlay').style.display = 'none';
 		searchMobileInformation.style.marginTop = '15px';
 		showContent();
   	});

   	shoppingList.addEventListener('click', function() {
   		searchMobile.style.display = 'none';
   		document.querySelector('.section-navbar__title').innerHTML = `Shopping List`;
   		document.querySelector('.app__recipes').style.display = 'none';
 		document.querySelector('.app__shopping-list').style.display = 'flex';
 		document.querySelector('.app__favorites').style.display = 'none';		
 		document.querySelector('.container__add').style.display = 'none';
 		document.querySelector('.menu-overlay').style.display = 'none';
 		showContent();
   	});

   	favorites.addEventListener('click', function() {
   		searchMobile.style.display = 'none';
   		document.querySelector('.section-navbar__title').innerHTML = `Favorites`;
   		document.querySelector('.app__recipes').style.display = 'none';
 		document.querySelector('.app__shopping-list').style.display = 'none';
 		document.querySelector('.app__favorites').style.display = 'block';
		document.querySelector('.container__add').style.display = 'none';
		document.querySelector('.menu-overlay').style.display = 'none';
 		showContent();
   	});

   	searchButton.addEventListener('click', function() {
   		showContent();
   	});

   	searchMobileInput.addEventListener('keyup', function() {
   		let bodyRecipe, recipeTitle;

		bodyRecipe = document.querySelectorAll(stringsDOM.bodyRecipe); 
		recipeTitle = document.querySelectorAll(stringsDOM.recipeTitle);
	
		for(let i = 0; i<bodyRecipe.length; i++) {
			if(recipeTitle[i].innerHTML.includes(searchMobileInput.value)) {
				bodyRecipe[i].style.display ='block';
			} else {
				bodyRecipe[i].style.display = 'none';
			}
		}
   	})

   	searchMobileInput.addEventListener('click', function() {
   		if (searchMobileInput.value != '') {			   		
   			searchMobileInformation.style.display = 'block';
   		}
   	})
}

document.addEventListener('DOMContentLoaded', init);