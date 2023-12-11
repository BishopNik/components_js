/** @format */

const containerForm = document.querySelector('.test_form');

const markupForm = `<form class="form">
				<input type='file' name='avatar' />
				<button type='submit'>Submit</button>
			</form>`;
containerForm.innerHTML = markupForm;

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
	e.preventDefault();
	try {
		let avatar;
		const file = e.target.avatar.files[0];
		if (file || file instanceof File || file.type.startsWith('image/')) {
			avatar = file;
		} else {
			console.log('Bad type file');
		}
		const formData = new FormData();

		console.log('before', formData, avatar);
		formData.append('avatar', avatar, avatar.name);
		console.log('after', Object.fromEntries(formData), avatar);
	} catch ({ message }) {
		console.log('Error change avatar:', message);
	}
}
