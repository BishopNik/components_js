/** @format */

const body = document.querySelector('.search');

const textPhrase = [
	'Хочешь велосипед???',
	'А хочешь жигули???',
	'А хочешь виски???',
	'А хочешь стать ИТменом???',
];

let reklamaOn = true;

const markupPage = `<div class="input_container" style="text-align: center; margin-top: 100px;">
        <input type="text" class="input_search js-search" style="display: inline-block; width: 550px; padding: 20px 30px; font-size: 24px; border-radius: 12px; border: 0.5px solid rgba(0,0,0,0.5);" placeholder="Тут может быть ваша реклама!">
    </div>
    <div class="input_container" style="text-align: center; margin-top: 100px;">
      <button class="button_alarm" type="submit" style="width: 300px; height: 100px; cursor: pointer; border: 1px solid #000000; border-radius: 8px; box-shadow: 6px 5px 5px 0px rgba(0,0,0,0.75); font-size: 24px;" >Alarm</button>
    </div>`;
body.innerHTML = markupPage;

const refInput = document.querySelector('.js-search');
const refBtn = document.querySelector('.button_alarm');

refBtn.addEventListener('click', () => {
	alert('Стоп машина!');
	location.reload();
});
refInput.addEventListener('input', onChange);

function onChange(e) {
	if (!e.currentTarget.value) {
		reklamaOn = true;
		setTimeout(() => {
			enumerationTextPhrase();
		}, 3000);
	} else reklamaOn = false;
}

async function enumerationTextPhrase() {
	let indexTextPhrase = 0;
	while (reklamaOn) {
		let element = '';
		if (element.length !== textPhrase[indexTextPhrase]) {
			for (let i = 0; i < textPhrase[indexTextPhrase].length; i++) {
				element = element + textPhrase[indexTextPhrase][i];
				await promise(element);
			}
		}
		if (element.length === textPhrase[indexTextPhrase].length) {
			for (let i = textPhrase[indexTextPhrase].length - 1; i >= 0; i--) {
				const newElement = element.substring(0, i);
				await promise(newElement);
			}
		}
		indexTextPhrase += 1;
		if (indexTextPhrase === textPhrase.length) {
			indexTextPhrase = 0;
		}
	}
}

async function promise(elem) {
	await new Promise(resolve =>
		setTimeout(() => {
			changePlaceholder(elem);
			resolve();
		}, 120)
	);
}

function changePlaceholder(textPhrase) {
	refInput.placeholder = textPhrase;
}

setTimeout(() => {
	enumerationTextPhrase();
}, 5000);
