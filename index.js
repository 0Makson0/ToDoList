const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const submit = document.getElementById("submit"); 

form.addEventListener("submit", function(event){
	event.preventDefault();

	const newText = document.createElement("li");
	newText.textContent = input.value;

	list.appendChild(newText);
	submit.addEventListener("click", function(){
		for(i = 1; i < i+1;){
			localStorage.setItem(i, newText.textContent)
			i += 1
		}

	})

	input.value = ""; 
});
