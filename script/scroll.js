const sections = document.querySelectorAll(".main-section");

const observer = new IntersectionObserver((entries) => {
	entries.forEach(
		(entry) => {
			if (!entry.isIntersecting) return;
			entry.target.classList.toggle("active");
			observer.unobserve(entry.target);
		},
		{
			threshold: 0.1,
		}
	);
});

sections.forEach((section) => {
	observer.observe(section);
});
