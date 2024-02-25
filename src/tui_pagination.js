/** @format */

import Pagination from 'tui-pagination';

let page = 1;
const box_array = [];
let view_box_array = [];
const card_view = window.innerWidth > 375 ? 3 : 4;
const btn = window.innerWidth > 375 ? 3 : 2;

const tui_container = document.querySelector('.tui-container');
const tui_pagination = document.getElementById('tui-pagination-container');
const pagination = new Pagination(tui_pagination, {
	totalItems: 100,
	itemsPerPage: card_view,
	visiblePages: btn,
	centerAlign: true,
});

Array.from({ length: 100 }, (_, index) =>
	box_array.push(`<div class="box">Item_${index + 1}</div>`)
);

//First run
view_box_array = box_array.slice(0, 3);
tui_container.innerHTML = view_box_array.join('');

//Paganation
pagination.on('afterMove', event => {
	page = event.page;
	view_box_array = box_array.slice((page - 1) * card_view, card_view * page);
	tui_container.innerHTML = view_box_array.join('');
});
