/** @format */
import axios from 'axios';

refSelect = document.querySelector('.box__select');
refMenu = document.querySelector('.menu__box');
refButtons = document.querySelector('.buttons');

refSelect.addEventListener('click', onOpenMenu);

function onOpenMenu(e) {
	e.preventDefault();
	if (refMenu.classList.contains('open')) {
		refMenu.classList.remove('open');
	} else {
		refMenu.classList.add('open');
	}

	if (e.currentTarget === e.target) {
		refMenu.classList.remove('open');
	}
}

const fetchGet = async () => {
	const response = await axios.get('https://tasty-treats-backend.p.goit.global/api/categories');
	return response.data;
};

fetchGet().then(data => {
	const buttons = data
		.map(({ name }) => {
			return `<li><button class="button">${name}</button></li>`;
		})
		.join('');
	refButtons.innerHTML = buttons;
});
