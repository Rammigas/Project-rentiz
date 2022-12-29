const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.burger__btn')
const body = document.body

if (menu && menuBtn) {
	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active')
		menu.classList.toggle('active')
		body.classList.toggle('lock')
	})
}
// Filter	
const filter = document.querySelector('.filter')
if (filter) {
	const items = document.querySelectorAll('.block-filter')
	items.forEach(item => {
		item.addEventListener('click', event => {
			item.querySelector('.block-filter__dropdown').classList.toggle('active')
			item.querySelector('.block-filter__icon').classList.toggle('active')

			if (event.target.classList.contains('block-filter__item')) {
				item.querySelector('.block-filter__value').textContent = event.target.textContent
			}
		})
	})
}

// SWIPER-Popular
const popularSlider = new Swiper('.popular-slider', {
	spaceBetween: 20,
	slidesPerView: 1,
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.popular-slider-next',
		prevEl: '.popular-slider-prev',
	},
	breakpoints: {
		992: {
			slidesPerView: 3
		},
		662: {
			slidesPerView: 2
		}
	}

});

// SWIPER-quotes
const reviewsSlider = new Swiper('.slider-reviews', {
	spaceBetween: 20,
	slidesPerView: 1,
	autoHeight: true,
	// Navigation arrows
	navigation: {
		nextEl: '.slider-reviews-next',
		prevEl: '.slider-reviews-prev',
	},

});
// GALERY

const galeryItems = document.querySelectorAll('.galery__item')

if (galeryItems.length > 0) {
	galeryItems.forEach(item => {
		new Swiper(
			item, {
			slidesPerView: 1,
			autoplay: {
				delay: 5000,
			},
			effect: 'fade',
		}

		)
	})
}

//  CHANGING THEME_COLOR
const colors = {
	1: "1AA090",
	2: "525252",
	3: "662a2a",
	4: "ce4141",
	5: "8B0000",
	6: "FFA500",
	7: "FF6347",
	8: "FFD700",
	9: "00FF00",
	10: "00FF7F",
	11: "008B8B",
	12: "008080",
	13: "6495ED",
	14: "D2B48C",
	15: "BDB76B",
	16: "9370DB",
	17: "4B0082",
	18: "00FF7F",
	19: "00FFFF",
	20: "708090",

}
const colorChangeBtn = document.querySelector(".header__logo")

getComputedStyle(document.documentElement)
	.getPropertyValue('--accent-colour');

if (colorChangeBtn) {
	colorChangeBtn.addEventListener('click', changeTheme)
}

function changeTheme() {
	let colorsArr = Object.values(colors)
	document.documentElement.style
		.setProperty('--accent-colour', `${'#' + colorsArr[Math.floor(Math.random() * colorsArr.length)]}`);
}