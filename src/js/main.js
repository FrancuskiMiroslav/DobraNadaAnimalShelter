document.addEventListener('DOMContentLoaded', function () {
	window.addEventListener('load', (e) => {
		const preload = document.querySelector('.preload');

		preload.classList.add('preload-finished');
	});

	const btnScrollToTop = document.getElementById('btnScrollToTop');
	btnScrollToTop.addEventListener('click', (e) => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	});

	const expandsMore = document.querySelectorAll('.showMore');

	function expand() {
		const showContent = document.getElementById(this.dataset.target);

		console.log(showContent);

		if (showContent.classList.contains('active')) {
			this.innerHTML = this.dataset.showtext;
		} else {
			this.innerHTML = this.dataset.hidetext;
		}

		showContent.classList.toggle('active');
		if (showContent.classList.contains('active')) {
			showContent.style.maxHeight = showContent.scrollHeight + 'px';
		} else {
			showContent.style.maxHeight = `22px`;
		}
	}

	expandsMore.forEach((btn) => {
		const containerHeight =
			btn.parentElement.previousElementSibling.offsetHeight;

		const expandElementHeight =
			btn.parentElement.previousElementSibling.firstElementChild.offsetHeight;

		if (containerHeight >= expandElementHeight) {
			btn.style.visibility = 'hidden';
			btn.style.height = 0;
		}
		btn.addEventListener('click', expand);
	});
});
