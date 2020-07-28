var todo = ["learn JS", "Cook Dinner", "Kiss Husband"];

function toDo(){
	while (true) {
		var answer = prompt("What would you like to do?");
		if (answer === "new") {
			addTodos();
		} else if (answer === "list") {
			listTodos();
		} else if (answer === "quit") {
			break;
		} else if (answer === "delete") {
			deleteTodos();
		}
		else {
			alert("Please choose one of suggested options!");
		};
	};
	alert("Thank you for using our app!");
};

function listTodos(){
	alert(todo);
	console.log("*******************");
	todo.forEach(function(todoItem, index){
		var indexTodo = 1 + index; 
		console.log(indexTodo + " " + todoItem);
	})
	console.log("*******************");
};

function deleteTodos(){
	var chooseTodo = prompt("Please type a number of a Todo you want to delete:");
	var indexChooseTodo = parseInt(chooseTodo) - 1;
	console.log("A todo `" + todo[indexChooseTodo] + "` was deleted");
	todo.splice(indexChooseTodo, 1);
};

function addTodos(){
	var newTodo = prompt("Add a new list item:");
	todo.push(newTodo);
	console.log("A new todo `" + newTodo + "` was added" )
};
