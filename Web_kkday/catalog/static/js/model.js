new WOW().init();

// 把 JSON 物件，轉換為 陣列(Array)
var obj = Object.keys(web).map(function(_) { return web[_]; });
// console.log(web)

//記得把所有原來的""換成''
 var web_html ="<img src='{{img}}' alt=''><div class='box-word'><p>交易日期：{{date}}<br>訂購商品：<br>{{product}}<br>訂購人數：{{person}}<br>總金額：{{price}}<br>3D驗證通過：{{secure}}<br></p></div>";


//隨機排列順序
var arr=[];
var arr_2 = [];
//額外宣告一個陣列儲存目前的順序
var answer=[];
//重跑
var reload=0;

$(document).ready(function (){
	questions();
});

function questions(){
	if(reload==0){
    	
		//清空陣列和div內容
		arr=[];
		arr_2 = [];
		answer=[];
		$("#q-box0").empty();
		$("#q-box1").empty();
		$("#q-box2").empty();

		//隨機排列0-web.length之間數字
		for(var i=0;i<web.length;i++){//一個從0到web.length的陣列
			arr.push(i);
		}
		arr.sort(function(){//隨機打亂這個陣列
			return Math.random()-0.5;
		})
		arr.length=3;//改寫長度
		// console.log(arr);//控制檯會輸出web.length個不同的數
		for(var i=0;i<imgs.length;i++){//一個從0到web.length的陣列
			arr_2.push(i);
		}
		arr_2.sort(function(){//隨機打亂這個陣列
			return Math.random()-0.5;
		})
		arr_2.length=3;//改寫長度

		for(var j=0;j<3;j++){
			var item=web[arr[j]];
			var item_img = imgs[arr_2[j]];
			//放現在的排序進去
			answer.push(web[arr[j]]);
			//放內容
			var current_item_html=
				web_html.replace("{{img}}",item_img.img)
				.replace("{{date}}",item.date)
				.replace("{{product}}",item.product)
				.replace("{{person}}",item.person)
				.replace("{{price}}",item.price)
				.replace("{{secure}}",item.secure)
			$("#q-box"+j).append(current_item_html);
		}
		reload=1;//設定先不重載
	}
}


//取得使用者的答案
var char;
$('.gobtn').click(function(event) {
	//開啟解答視窗
	$('body').addClass('removescroll');
	$(".answer-modal-window ").css("visibility","visible");
	$(".answer-modal-window ").css("opacity","1");
	$(".answer-modal-window ").css("pointer-events","auto");
	//取得使用者所選擇的答案
	char=$("input[type=radio][name='who']:checked").val();
	//比對
	//如果使用者沒選擇答案就按按鈕
	if(char==null){
		$('.answer-modal-text').text('請選擇一名');
	}
	//使用者選擇了答案
	else{
		//如果選擇的是盜刷
		if(answer[char].bad=="1")
		{
			$('.answer-modal-text').text('是盜刷');
			//$location.reload(true);
		}
		//如果選擇的不是盜刷	
		else{
			$('.answer-modal-text').text('不是盜刷');
		}
	}
});



$('#close').click(function(event) {
	// 關閉解答視窗
	$('body').removeClass('removescroll');
	$(".answer-modal-window").css("visibility","hidden");
	$(".answer-modal-window ").css("opacity","0");
	$(".answer-modal-window").css("pointer-events","none");
    
	//如果有勾選的情況
	if(char!=null){
		//勾選為正確，重新載入
		if(answer[char].bad=="1")
			{
    			//$('# d-flex align-items-center justify-content-around').load(document.URL +  '# d-flex align-items-center justify-content-around ');
    			//location.reload(true);
        		//reloaded();
				reload=0;
				window.location.reload();
				//updateDiv();
				questions();
				
				// console.log("bingo");
			} 
	
	}
	// if(char==null){

	// }
	document.all("who")[char].checked =false; //取消所有勾選
});



//資訊視窗
$('.btn').click(function(event) {
	/* 開啟資訊視窗 */
	$('body').addClass('removescroll');

	$(".modal-window ").css("visibility","visible");
	$(".modal-window ").css("opacity","1");
	$(".modal-window ").css("pointer-events","auto");

});

$('.modal-close').click(function(event) {
	/* 關閉資訊視窗 */
	$('body').removeClass('removescroll');
	$(".modal-window ").css("visibility","hidden");
	$(".modal-window ").css("opacity","0");
	$(".modal-window ").css("pointer-events","none");
});




