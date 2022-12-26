const listElements = document.querySelectorAll(".price-list .list-element");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close");
const modalHeader = document.querySelector(".modal-header");
const modalParagraph = document.querySelector(".modal-paragraph");

const data = [
	{
		header: "Diagnostyka",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, provident obcaecati libero commodi recusandae ipsam error iure velit rerum asperiores ipsum expedita praesentium nulla totam culpa laboriosam? Tempore, praesentium incidunt?",
	},
	{
		header: "Narkoza",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, provident obcaecati libero commodi recusandae ipsam error iure velit rerum asperiores ipsum expedita praesentium nulla totam culpa laboriosam? Tempore, praesentium incidunt?",
	},
	{
		header: "Zachowawcza",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, provident obcaecati libero commodi recusandae ipsam error iure velit rerum asperiores ipsum expedita praesentium nulla totam culpa laboriosam? Tempore, praesentium incidunt?",
	},
	{
		header: "Endodonacja",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, provident obcaecati libero commodi recusandae ipsam error iure velit rerum asperiores ipsum expedita praesentium nulla totam culpa laboriosam? Tempore, praesentium incidunt?",
	},
	{
		header: "Ortodoncja",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, provident obcaecati libero commodi recusandae ipsam error iure velit rerum asperiores ipsum expedita praesentium nulla totam culpa laboriosam? Tempore, praesentium incidunt?",
	},
	{
		header: "Periodontologia",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, provident obcaecati libero commodi recusandae ipsam error iure velit rerum asperiores ipsum expedita praesentium nulla totam culpa laboriosam? Tempore, praesentium incidunt?",
	},
	{
		header: "Chirurgia",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, provident obcaecati libero commodi recusandae ipsam error iure velit rerum asperiores ipsum expedita praesentium nulla totam culpa laboriosam? Tempore, praesentium incidunt?",
	},
	{
		header: "Implantologia",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, provident obcaecati libero commodi recusandae ipsam error iure velit rerum asperiores ipsum expedita praesentium nulla totam culpa laboriosam? Tempore, praesentium incidunt?",
	},
];

listElements.forEach((element, index) => {
	element.addEventListener("click", () => {
		modal.style.display = "block";
		modalHeader.textContent = data[index].header;
		modalParagraph.textContent = data[index].text;
	});
});

closeButton.addEventListener("click", () => {
	modal.style.display = "none";
});

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
