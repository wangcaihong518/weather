var cit;
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
	dataType:"jsonp",
	type:"get",
	success:function(obj){
		cit=city.data;
		console.log(cit);
	}
})

function city(){
	for(var i in cit){
		var iCit=document.createElement('li');
		var city_oUl=document.querySelector(".city");
		oUl.appendChild(iCit);
	}
	

}
window.onload=function(){
	city();
}