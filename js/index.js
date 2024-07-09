import { makeApiCall } from "/js/api/makeApiCall.mjs";
import { switchTheme } from "./ui/shared/switchTheme.mjs";
import { applySavedTheme } from "./ui/shared/switchTheme.mjs";

makeApiCall();

// Call applySavedTheme when the document is loaded
document.addEventListener("DOMContentLoaded", applySavedTheme);

applySavedTheme();

//add event listener for the theme switcher
document
	.querySelector("#theme-switcher")
	.addEventListener("click", switchTheme);

document.addEventListener("DOMContentLoaded", function () {
	var themeSwitcher = document.getElementById("theme-switcher");

	themeSwitcher.addEventListener("keydown", function (event) {
		//chech if enter or spaced is pressed
		if (event.key === "Enter" || event.key === " ") {
			//prevent the deafult action to avoid scrolling the page when pressing space
			event.preventDefault();
			//toggle the theme
			switchTheme();
		}
	});
});
