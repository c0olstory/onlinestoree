let delay = 0;
let unlock = true;
/*--------------------*/
function ibg(){

   let ibg=document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
   if(ibg[i].querySelector('img')){
   ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
   }
   }
   }
   
   ibg();
/*--------------------*/
/*--------Реализация поиска------------*/
let search = document.querySelector('.header__search-icon') ;
search.addEventListener("click", function(e) {
   let searchField = document.querySelector('.header__search');
   searchField.classList.add('_active');
});

document.documentElement.addEventListener("click", function(e) {
   if(!e.target.closest('.header__search-body') && !e.target.closest('.header__search-icon')) {
      let removeActive = document.querySelector('.header__search');
      removeActive.classList.remove('_active');
   }
});
/*--------------------*/
/*--------Реализация меню------------*/
let menuIcon = document.querySelector('.header__menu-icon') ;
menuIcon.addEventListener("click", function(e) {
   let toggleActive = document.querySelector('.header__menu');
   toggleActive.classList.toggle('_active');
   body_lock(delay);
});

document.documentElement.addEventListener("click", function(e) {
   if(!e.target.closest('.main-menu__body') && !e.target.closest('.header__menu-icon')) {
      let removeActive = document.querySelector('.header__menu');
      removeActive.classList.remove('_active');
      // body_lock(delay);
      body_lock_remove(delay);
   }
});
/*--------Реализация close button------------*/
closeObject('.header__search-close', '.header__search');
closeObject('.main-menu__close', '.header__menu');

function closeObject(classObject, classSelect) {
   let closeButton = document.querySelector(classObject);
   closeButton.addEventListener("click", function(e) {
      let removeActive = document.querySelector(classSelect);
      removeActive.classList.remove('_active');
      body_lock(delay);
   });
};
/*--------------------*/

/*--------Bodylock------------*/
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
