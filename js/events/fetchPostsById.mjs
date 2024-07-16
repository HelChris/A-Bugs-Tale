// JS that fetches and displays only one post at the time (takes the user to the single post page when clicking on said image!)
// check out the gamehub JS!

import { BASE_URL } from "/js/constants/api.mjs";

export async function fetchPostById(id) {
	const url = `${BASE_URL}/${id}`;
	const response = await fetch(url);

	console.log(response);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	 const json = await response.json();
	 return json;
}
