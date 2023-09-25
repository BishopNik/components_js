/** @format */

import axios from 'axios';

const URL = 'https://tasty-treats-backend.p.goit.global/api/';

export async function fetchGet() {
	const response = await axios.get(URL);
	return response.data;
}

export async function fetchPost({ name, number }) {
	const response = await axios.post(URL, { name, number });
	return response.data;
}

export async function fetchPut({ id, name, number }) {
	const response = await axios.put(`${URL}${id}`, { name, number });
	return response.data;
}

export async function fetchDel(item) {
	const response = await axios.delete(`${URL}${item}`);
	return response.data;
}

// export const API = {
// 	fetchGet,
// fetchPost,
// fetchPut,
// fetchDel,
// };
