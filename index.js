const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const submit = document.getElementById("submit")
var i = 1
form.addEventListener("submit", function(event) {
	event.preventDefault();

	const newText = document.createElement("li");
	const newA = document.createElement("a");
	newA.href = "#";
	newA.textContent = i + ". " + input.value;
	
	newText.appendChild(newA);
	list.appendChild(newText);

	const index = localStorage.length;
	localStorage.setItem(index, newA.textContent);

	newText.addEventListener("click", function() {
		newText.remove();
		localStorage.removeItem(index)
	});

	i++

	input.value = "";
});