var li = document.getElementsByTagName("li");

// for (i = 0; i < li.length; i++){
// 	li[i].addEventListener("mouseover", function(){
// 		this.style.color = "navy";
// 		this.style.fontWeight = "bold";
		
// 	});
// 	li[i].addEventListener("mouseout", function(){
// 		this.style.color = "black";
// 		this.style.fontWeight = "normal";
		
// 	});
// 	li[i].addEventListener("click", function(){
// 		li[i].addEventListener("click", function(){
	// 	this.classList.toggle("done");
	// });
// }



//OR
for (i = 0; i < li.length; i++){
	li[i].addEventListener("mouseover", function(){
		this.classList.add("hovered");
		
	});
	li[i].addEventListener("mouseout", function(){
		this.classList.remove("hovered");
		
	});
	li[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});
}


