var weather;
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=吕梁",
	dataType:"jsonp",
	type:"get",
	success:function(obj){
		weather=obj.data.weather;
		console.log(weather);
	}
})
var city;
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
	dataType:"jsonp",
	type:"get",
	success:function(obj){
		city=obj.data;
		// console.log(city);
	}
})
function updata(){
	for(var m in city){
		// console.log(m);.//出现省
		// console.log(city[m]);//出现市
		var h2=document.createElement("h2");
		h2.className="title";
		h2.innerHTML=m;
		var senction=document.querySelector(".hot_city");
		senction.appendChild(h2);
		var oUl=document.createElement("ul");
		// var oUl=document.querySelector("#city");
		oUl.id="#city";
		for(var n in city[m]){
			// console.log(n);//出现市
			var li=document.createElement("li");
			li.innerHTML=n;
			oUl.appendChild(li);
			senction.appendChild(oUl);
		}
	}

	var cityName=document.querySelector(".header_city_txt");
	cityName.innerHTML=weather.city_name;
	var temperature=document.querySelector(".temperature");
	temperature.innerHTML=weather.current_temperature+"°";
	var state=document.querySelector(".state");
	state.innerHTML=weather.dat_condition;
	var introduce_main_box_T=document.querySelector(".introduce_main_box_T");
	introduce_main_box_T.innerHTML=weather.dat_high_temperature+'/'+weather.dat_low_temperature+'°';
	var introduce_main_box_T=document.querySelector("#introduce_main_box_T");
	introduce_main_box_T.innerHTML=weather.tomorrow_high_temperature+'/'+weather.tomorrow_low_temperature+'°';
	var introduce_main_box_T_wea=document.querySelector("#introduce_main_box_T_wea");
	introduce_main_box_T_wea.innerHTML=weather.day_condition;
	var Tintroduce_main_box_T_wea=document.querySelector("#Tintroduce_main_box_T_wea");
	Tintroduce_main_box_T_wea.innerHTML=weather.tomorrow_condition;
	var air_bottom=document.querySelector(".air_bottom");
	air_bottom.innerHTML=weather.quality_level;

	var pic=document.querySelector(".pic");
	pic.style=`background-image:url(img/${weather.dat_weather_icon_id}.png)`;
	// var dat_weather_icon_id=document.querySelector(".icon-shouye_taiyang_shijiantixing");
	// dat_weather_icon_id.style=`background-image:img/${weather.dat_weather_icon_id}.png`;
	var introduce_main_box_T_pic=document.querySelector(".introduce_main_box_T_pic");
	introduce_main_box_T_pic.style=`background-image:url(img/${weather.tomorrow_weather_icon_id}.png)`;	
	// for(var i in weather.hourly_forecast){
	// 	var oLi=document.createElement("li");
	// 	var oUl=document.querySelector(".ul");
	// 	oUl.appendChild(oLi);
	// 	var oDiv=document.createElement("div");
	// 	oDiv.className="definite_up";
	// 	oDiv.innerHTML=weather.hourly_forecast[i].hour+":00";
	// 	oLi.appendChild(oDiv);

	// 	var oDiv1=document.createElement("div");
	// 	oDiv1.className="definite_mid";
	// 	oDiv1.style=`background-image:ulr(img/${weather.hourly_forecast[i].weather_icon_id}.png)`;
	// 	oLi.appendChild(oDiv1);

	// 	var oDiv2=document.createElement("div");
	// 	oDiv2.className="definite_down";
	// 	oDiv2.innerHTML=weather.hourly_forecast[i].temperature+"°";
	// 	oLi.appendChild(oDiv2);
	// }
	var str="";
		weather.hourly_forecast.forEach((item,index)=>{
			// var oLi=document.createElement('li');
			str=str+`
				<li>
					<div class="definite_up">${item.hour}:00</div>
					<div class="definite_mid" stype="background-image:url(img/${item.weather_icon_id}.png)"> </div>
					<div class="definite_down">${item.temperature}°</div>
				</li>
			`
		})
		$(".ul").html(str);

		var str2="";
		weather.forecast_list.forEach((item,index)=>{
			console.log(item,index);
			str2=str2+`
				 <li>
								<div class="eve_date">
									${item.date.slice(5,7)}/${item.date.slice(8)}
									
								</div>
								<div class="eve_discription">多云</div>
								<div class="eve_picH"></div>
								<div  id="eve_temH">28°</div>
								<div  id="eve_temL">10°</div>
								<div class="eve_picL"></div>
								<div class="eve_discription">阴</div>
								<div class="wind">南风</div>
								<div class="level">3级</div>
							</li>
			`
			})
		$(".eveul").html(str2);
		
	// for(var j in weather.forecast_list){
	// 	var oLi=document.createElement("li");
	// 	var oUl=document.querySelector(".eveul");
	// 	oUl.appendChild(oLi);
	// 	var oDiv1=document.createElement("div");
	// 	oDiv1.className="eve_date";
	// 	oDiv1.innerHTML=weather.forecast_list[j].date.slice(5,7)+"/"+weather.forecast_list[j].date.slice(8);
	// 	oLi.appendChild(oDiv1);


		// 整体获取日期
		// var span1=document.createElement("span");
		// span1.id="dateM";
		// span1.innerHTML=weather.forecast_list[j].date.slice(5,7)+"/"+weather.forecast_list[j].date.slice(8);
		// oDiv1.appendChild(span1);

		// var span2=document.createElement("span");
		// span2.id="dateG";
		// span2.innerHTML="/";
		// oDiv1.appendChild(span2);
		// var span3=document.createElement("span");
		// span3.id="dateD";
		// span3.innerHTML=weather.forecast_list[j].date.slice(8);
		// oDiv1.appendChild(span3);


		// var oDiv2=document.createElement("div");
		// oDiv2.className="eve_discription";
		// oDiv2.innerHTML=weather.forecast_list[j].condition;
		// oLi.appendChild(oDiv2);


		// var oDiv3=document.createElement("div");
		// oDiv3.className="eve_picH";
		// oDiv3.style=`background-image:url(img/${weather.forecast_list[j].weather_icon_id}.png)`;
		// oLi.appendChild(oDiv3);

		// // 最高温度
		// var oDiv4=document.createElement("div");
		// oDiv4.id="eve_temH";
		// oDiv4.innerHTML=weather.forecast_list[j].high_temperature;
		// oLi.appendChild(oDiv4);

		// // 最低温度
		// var oDiv5=document.createElement("div");
		// oDiv5.id="eve_temL";
		// oDiv5.innerHTML=weather.forecast_list[j].low_temperature;
		// oLi.appendChild(oDiv5);

		// 低温的描述
		// var oDiv6=document.createElement("div");
		// oDiv6.className="eve_discription";
		// oDiv6.innerHTML

		// 风


		// var oDiv7=document.createElement("div");
		// oDiv7.className="wind";
		// oDiv7.innerHTML=weather.forecast_list[j].wind_direction;
		// oLi.appendChild(oDiv7);

		// // 风级
		// var oDiv8=document.createElement("div");
		// oDiv8.className="level";
		// oDiv8.innerHTML=weather.forecast_list[j].wind_level+"级";
		// oLi.appendChild(oDiv8);
		// }

	
		}

		

function AJAX(str){
	var url1=`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`;
	$.ajax({
		url:url1,
		dataType:"jsonp",
		type:"get",
		success:function(obj){
			weather=obj.data.weather;
			updata();
			$(".search").css({"display":"none"});
		}
	})
}

window.onload=function(){
	updata();
	$("li").on("click",function(){
		var cityh=this.innerHTML;
		AJAX(cityh);
	})
	$("input").on("focus",function(){

		$(".search_header_right").html("搜索");
	})
	var button=document.querySelector(".search_header_right");
	button.onclick=function(){
		var text=button.innerText;
		if(text=="取消"){
			$(".search").css({"display":"none"});
		}else{
			var str1=document.querySelector("input").value;
			for(var m in city){
				for(var n in city[m]){
					if(n==str1||n==str1.substring(0,2)){
						AJAX(str1);
						return;
					}
					
				}

			}
			alert("没在该城市");
		}

	}
}