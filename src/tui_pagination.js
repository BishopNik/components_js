/** @format */

import Pagination from 'tui-pagination';

const pagination = new Pagination(document.getElementById('tui-pagination-container'), {
	totalItems: 500,
	itemsPerPage: 7,
	visiblePages: 5,
	centerAlign: true,
});

console.log(pagination.getCurrentPage());
