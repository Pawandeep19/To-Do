//check-unckeck to-do
//we get the li inside of ul by passing li as 2nd argument
//we use on function strictly instead of click function because 
//it applies to future todo elements
//we select ul instead of li directly because on applies 
//its functionality to the parent(already exsisting element)
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
//delete a to-do
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
	//if pressed enter
	if(event.which===13){
		//get the value typed in the input box
		var newtodo = $(this).val();
		//clear the value in input box
		$(this).val("");
		//append the new todo in the ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+newtodo+"</li>");
	}
});
$(".fa-bars").click(function(){
	$("input[type='text']").fadeToggle()
});