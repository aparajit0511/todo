

$("input").on("keypress",function(event){
	var text=$("input").val();
	if(event.which === 13)
	{
         $(this).val("");
		 $("#boss").append("<li><span><i class='fa fa-trash' ></i> </span> "+ text +"</li>");
	}

});



$("ul").on("click","li",function(){
	$(this).toggleClass("completed");

});

$("ul").on("click","span",function(){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();

	});
});

$(".fa-plus").click(function(){
	$("input").fadeToggle();
});