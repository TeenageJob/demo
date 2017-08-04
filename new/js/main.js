

function gotoHtml(id){
$('html,body').animate({
	scrollTop:$(id).offset().top},500
	);
}

$('.menu-2').parent().on('mouseover',function(){
	$(this).find('div').show();
});
$('.menu-2').parent().on('mouseout',function(){
	$(this).find('div').hide();
});

$('.float-right-child').parent().on('mouseover',function(){
	$(this).find('div').show();
});
$('.float-right-child').parent().on('mouseout',function(){
	$(this).find('div').hide();
});

$('#login li').on('click',function(){
	itretorclass($(this).parent().find('li'),"");
	this.className="login-active";
	$(this).parent().find('form').hide();
	$(this).find('form').show();
})



function itretorclass(obj,classname){
	for(var i=obj.length-1;i>=0;i--){
		obj[i].className=classname;
	}
}