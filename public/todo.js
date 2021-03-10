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
		$("#var1").val($('strong',this).text());
		$("#form").submit();
		$(this).remove();
	});
	event.stopPropagation();
});

$(".fa-bars").on("click",function(){
	$("input[type='text']").fadeToggle()
});