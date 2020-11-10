document.addEventListener('DOMContentLoaded', function () {
	const modalBtn = document.querySelectorAll('.modal-btn');
	const modalEl = document.getElementById('modal');
	const modalBtnClose = document.getElementById('close');

	// Show modal
	modalBtn.forEach((modal) => {
		modal.addEventListener('click', () => modalEl.classList.add('show-modal'));
	});

	// Hide modal
	modalBtnClose.addEventListener('click', () =>
		modalEl.classList.remove('show-modal')
	);

	// Hide modal on outside click
	window.addEventListener('click', (e) =>
		e.target == modal ? modal.classList.remove('show-modal') : false
	);
});
