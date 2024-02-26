/** @format */

import Pagination from 'tui-pagination';

let page = 1;
let total_card = 30;
let box_array = [];
let view_box_array = [];

const card_view = window.innerWidth > 375 ? 3 : 4;
const btn = window.innerWidth > 375 ? 3 : 2;
let pagination = null;

const tui_container = document.querySelector('.tui-container');
const tui_pagination = document.getElementById('tui-pagination-container');
const add_btn = document.querySelector('.btn_item_add');
const del_btn = document.querySelector('.btn_item_del');
const item_pag = document.querySelector('.item_pag');

add_btn.addEventListener('click', onClickAddBtn);
del_btn.addEventListener('click', onClickDelBtn);

item_pag.textContent = total_card;
main();

//First run
markup();

pagination = new Pagination(tui_pagination, {
	totalItems: total_card,
	itemsPerPage: card_view,
	visiblePages: btn,
	centerAlign: true,
});

//Paganation
pagination.on('afterMove', event => {
	page = event.page;
	markup();
	const tui_next = document.querySelector('.tui-next');
	const tui_last = document.querySelector('.tui-last');

	if (total_card / card_view <= page) {
		tui_next.style.display = 'none';
		tui_last.style.display = 'none';
	} else {
		tui_next.style.display = 'flex';
		tui_last.style.display = 'flex';
	}
});

function onClickAddBtn() {
	total_card++;
	item_pag.textContent = total_card;
	pagination.setTotalItems(total_card);
	main();
	updatePagination();
}

function onClickDelBtn() {
	if (total_card <= 0) return;
	total_card--;
	item_pag.textContent = total_card;
	pagination.setTotalItems(total_card);
	main();
	updatePagination();
}

function main() {
	box_array = Array.from(
		{ length: total_card },
		(_, index) => `<div class="box">Item_${index + 1}</div>`
	);

	if (total_card / card_view <= 1) {
		tui_pagination.style.display = 'none';
	} else {
		tui_pagination.style.display = 'flex';
	}
}

function updatePagination() {
	const curPage = pagination.getCurrentPage();
	pagination.reset(total_card);
	pagination.movePageTo(curPage);
	if (page === curPage) {
		markup();
	}
}

function markup() {
	view_box_array = box_array.slice((page - 1) * card_view, card_view * page);
	tui_container.innerHTML = view_box_array.join('');
}

// Обработчик события клика
function scrollToBottom() {
	window.scrollTo({
		top: document.body.scrollHeight,
		behavior: 'smooth',
	});
}

document.addEventListener('DOMContentLoaded', function () {
	add_btn.addEventListener('click', scrollToBottom);
});
