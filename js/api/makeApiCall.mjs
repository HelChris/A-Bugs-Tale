import { BASE_URL } from "/js/constants/api.mjs";

export async function makeApiCall() {
	try {
		const response = await fetch(BASE_URL);

		const results = await response.json();

		console.log(results);
	} catch (error) {
		console.log(error);
		resultsContainer.innerHTML = error;
	}
}
