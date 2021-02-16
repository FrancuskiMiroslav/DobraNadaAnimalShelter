document.addEventListener('DOMContentLoaded', function () {
	// carousel
	const carousel = document.getElementById('carousel');
	const carouselUrl = './js/carousel.json';
	const localCarouselJSON = require('./carousel.json');

	/* function getSlidesData() {
		return new Promise((resolve, reject) => {
			fetch(carouselUrl)
				.then((resp) => resp.json())
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		});
	} */

	async function displayCarousel() {
		/* const dataList = await getSlidesData(); */
		const slidesArray = localCarouselJSON.slides;

		slidesArray.forEach((slide, slideNumber) => {
			const { title, type, content, image, imageTab, imageMob } = slide;

			newSlide = document.createElement('div');
			newSlide.classList.add('carousel__slide');

			newSlide.innerHTML = `
						<div class="carousel__image-container">
						<picture class="carousel__image-picture">
							<source media="(max-width:599px)" srcset="${imageMob}">
                        	<source media="(min-width:600px)" srcset="${image}">							
							<img src="${
								window.innerWidth >= 600 ? image : imageMob
							}" loading="lazy" alt="${title}"/>
						</picture>
							
						</div>
						<div class="carousel__content">
							<h1 class="carousel__title">${title}</h1>
							<p class="carousel__desc">${content}</p>
						</div>
			`;

			carousel.appendChild(newSlide);

			if (slideNumber === 0) {
				firstSlide = newSlide;
				newSlide.classList.add('active');
			} else if (slideNumber + 1 === localCarouselJSON.slides.length) {
				lastSlide = newSlide;
			}
		});

		nextSlide();
		previousSlide();
	}

	function nextSlide() {
		const nextBtn = document.getElementById('next');

		nextBtn.addEventListener('click', (e) => {
			const activeSlide = document.querySelector('.carousel__slide.active');

			let nextSibling = activeSlide.nextElementSibling;

			if (nextSibling == null) {
				nextSibling = activeSlide;
			}

			if (nextSibling.classList.contains('carousel__slide')) {
				activeSlide.classList.remove('active');
				nextSibling.classList.add('active');
			}
		});
	}

	function previousSlide() {
		const prevBtn = document.getElementById('prev');

		prevBtn.addEventListener('click', (e) => {
			const activeSlide = document.querySelector('.carousel__slide.active');

			let nextSibling = activeSlide.previousElementSibling;

			if (nextSibling == null) {
				nextSibling = activeSlide;
			}

			if (nextSibling.classList.contains('carousel__slide')) {
				activeSlide.classList.remove('active');
				nextSibling.classList.add('active');
			}
		});
	}

	if (carousel !== null) {
		(function () {
			displayCarousel();
		})();
	}
});
