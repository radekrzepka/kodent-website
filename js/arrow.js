const arrowSide = document.querySelector(".arrow-image");
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
	if (this.pageYOffset > 300) {
		arrowSide.classList.remove("closed");
	} else arrowSide.classList.add("closed");
});

arrowSide.addEventListener("click", () => {
	nav.scrollIntoView();

	const scrollToTop = duration => {
		const totalScrollDistance = document.scrollingElement.scrollTop;
		let scrollY = totalScrollDistance;
		let oldTimestamp = null;

		const step = newTimestamp => {
			if (oldTimestamp !== null) {
				scrollY -=
					(totalScrollDistance * (newTimestamp - oldTimestamp)) / duration;
				if (scrollY <= 0) return (document.scrollingElement.scrollTop = 0);
				document.scrollingElement.scrollTop = scrollY;
			}
			oldTimestamp = newTimestamp;
			window.requestAnimationFrame(step);
		};
		window.requestAnimationFrame(step);
	};
	scrollToTop(50);
});
