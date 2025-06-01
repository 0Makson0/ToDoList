const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
let i = 0;

form.addEventListener("submit", function(event){
	event.preventDefault();
	
	const newText = document.createElement("li");
	newText.textContent = input.value;

	list.appendChild(newText);

	localStorage.setItem(String(i), newText.textContent);
	i++;

	input.value = ""; 
});
