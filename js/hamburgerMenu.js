const hamburgerIcon = document.querySelector(".hamburger-menu");
const navigation = document.querySelector(".nav");

hamburgerIcon.addEventListener("click", () => {
	hamburgerIcon.classList.toggle("is-active");
	navigation.classList.toggle("is-active");
});
