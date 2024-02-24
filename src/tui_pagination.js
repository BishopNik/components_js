/** @format */

import Pagination from 'tui-pagination';

const pagination = new Pagination(document.getElementById('tui-pagination-container'), {
	totalItems: 500,
	itemsPerPage: 7,
	visiblePages: 5,
	centerAlign: true,
});

document.addEventListener('click', onClick);

function onClick(e) {
	if (e.target && e.target.classList.contains('tui-page-btn')) {
		console.log(pagination.getCurrentPage());
	}
}
