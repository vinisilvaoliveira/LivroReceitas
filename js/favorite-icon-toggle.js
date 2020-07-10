let favorite = document.querySelector('.icons__favorite');
let unfavorite = document.querySelector('.icons__unfavorite');
let unfavoriteIcon = document.querySelector('.icons__unfavorite img');
let informationNav = document.querySelector('.information__navbar');

favorite.addEventListener('click', function() {
	favorite.style.display = 'none';
	unfavorite.style.display = 'flex';
	informationNav.innerHTML = `Recipe Was Add To Favorite Recipes List`;
	informationNav.style.height = '50px';
	informationNav.style.display = 'flex';
	setTimeout(function() {
		informationNav.style.display = 'none';
	}, 1500);
})

unfavorite.addEventListener('click', function() {
	favorite.style.display = 'flex';
	unfavorite.style.display = 'none';
	informationNav.innerHTML = `Recipe Was Delete From Favorite Recipes List`;
	informationNav.style.display = 'flex';
	setTimeout(function() {
		informationNav.style.display = 'none';
	}, 1500);
})