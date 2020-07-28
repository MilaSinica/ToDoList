//turn toDo inactive/active after click by toggling class
//we use on() not simple "click", because it can work ether with elements which still not exist when the page is loaded
//however, we need to choose as a targen an element which is already on the page: it means - when li is clicked inside ul
$("ul").on("click", "li", function(){
	//console.log($(this).css("color"));
	$(this).toggleClass("inactive");
});

//click on "x" to delete toDo + adds fadeout effect
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	//this method stops events bubbling from child to parent elements
	event.stopPropagation();
});

//create new toDo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clear input field
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-eraser'></i></span>" + todoText + "</li>")
	}
});

$(".fa-pencil-alt").click(function(){
	$("input[type='text']").fadeToggle(600);
})
