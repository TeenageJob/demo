$(function(){
	autoImg();
});

var interval;
function autoImg(){
	clearInterval(interval);
	interval=setInterval("nextImg()",3000);
}
function stopauto(){
	clearInterval(interval);
}

var ImgNow=1;
function nextImg(){
	var index;var src;var count=2;
	if(ImgNow==1){
		src=$('#head-img2').attr('src');
		index=parseInt(src.substring(src.indexOf("-")+1,src.indexOf(".jpg")));
		index=++index%(count);
		$('#head-img1').attr('src',"./imgs/head-"+index+".jpg");
		$('#head-img1').attr('class',"rightin");
		$('#head-img2').attr('class',"leftout");
		ImgNow=0;
	}
	else{
		src=$('#head-img1').attr('src');
		index=parseInt(src.substring(src.indexOf("-")+1,src.indexOf(".jpg")));
		index=++index%(count);
		$('#head-img2').attr('src',"./imgs/head-"+index+".jpg");
		$('#head-img2').attr('class',"rightin");
		$('#head-img1').attr('class',"leftout");
		ImgNow=1;
	}
	var li=document.getElementsByClassName("head-i")[0].getElementsByTagName("li");
	itretorclass(li,"");
	li[index].className="active";
}

function backImg(){
	var index;var src;var count=2;
	if(ImgNow==1){
		src=$('#head-img2').attr('src');
		index=parseInt(src.substring(src.indexOf("-")+1,src.indexOf(".jpg")));
		index=(--index<0)?count-1:index;
		$('#head-img1').attr('src',"./imgs/head-"+index+".jpg");
		$('#head-img1').attr('class',"leftin");
		$('#head-img2').attr('class',"rightout");
		ImgNow=0;
	}
	else{
		src=$('#head-img1').attr('src');
		index=parseInt(src.substring(src.indexOf("-")+1,src.indexOf(".jpg")));
		index=(--index<0)?count-1:index;
		$('#head-img2').attr('src',"./imgs/head-"+index+".jpg");
		$('#head-img2').attr('class',"leftin");
		$('#head-img1').attr('class',"rightout");
		ImgNow=1;
	}
	var li=document.getElementsByClassName("head-i")[0].getElementsByTagName("li");
	itretorclass(li,"");
	li[index].className="active";
}

function toImg(index){
	if(ImgNow==1){
		src=$('#head-img2').attr('src');
		if(index==parseInt(src.substring(src.indexOf("-")+1,src.indexOf(".jpg"))))return;
		$('#head-img1').attr('src',"./imgs/head-"+index+".jpg");
		$('#head-img2').attr('class','leftout');
		$('#head-img1').attr('class','rightin');
		ImgNow=0;
	}
	else{
		src=$('#head-img1').attr('src');
		if(index==parseInt(src.substring(src.indexOf("-")+1,src.indexOf(".jpg"))))return;
		$('#head-img2').attr('src',"./imgs/head-"+index+".jpg");
		$('#head-img1').attr('class','leftout');
		$('#head-img2').attr('class','rightin');
		ImgNow=1;
	}
	var li=document.getElementsByClassName("head-i")[0].getElementsByTagName("li");
	itretorclass(li,"");
	li[index].className="active";
}