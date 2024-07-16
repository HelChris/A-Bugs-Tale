import { switchTheme } from "./ui/shared/switchTheme.mjs";
import { applySavedTheme } from "./ui/shared/switchTheme.mjs";

import { fetchBlogPostInfo } from "/js/events/fetchBlogPostInfo.mjs";
import { createBlogPostCard } from "/js/events/createBlogPostCard.mjs";

document.addEventListener("DOMContentLoaded", async () => {
	// Apply saved theme
	applySavedTheme();

	// Fetch and display blog posts
	const url = "/wp-json/wp/v2/posts?per_page=13&_embed"; // Your API endpoint
	const blogPosts = await fetchBlogPostInfo(url);
	const postsContainer = document.getElementById("posts-container"); 
	if (postsContainer) {
		blogPosts.forEach((post) => {
			const card = createBlogPostCard(post);
			postsContainer.appendChild(card);
		});
	}

	// Add event listener for the theme switcher
	const themeSwitcher = document.querySelector("#theme-switcher");
	if (themeSwitcher) {
		themeSwitcher.addEventListener("click", switchTheme);

		themeSwitcher.addEventListener("keydown", function (event) {
			// Check if Enter or Space is pressed
			if (event.key === "Enter" || event.key === " ") {
				// Prevent the default action to avoid scrolling the page when pressing Space
				event.preventDefault();
				// Toggle the theme
				switchTheme();
			}
		});
	}
});