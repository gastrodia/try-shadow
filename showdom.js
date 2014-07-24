var controller = [
	{
		btn:"#dom1",
		page:"/dom1.html"
	},
	{
		btn:"#dom2",
		page:"/dom2.html"
	},
	{
		btn:"#dom3",
		page:"/dom3.html"
	}
];


for(var i in controller){
	var ctrl = controller[i];
	bind(ctrl);
}

function bind(ctrl){
	var area = Area(ctrl.page);
	var btn = document.querySelector(ctrl.btn);
	btn.addEventListener("click",function(){	
		area.trigger();
	});
}

var showing = null;

function Area(url){
	var area = document.createElement("div");
	area.style.display = "none";
	var dom = area.createShadowRoot();
	load(url,function(text){
		dom.innerHTML = text;
	});
	var body = document.querySelector("body");
	body.appendChild(area);
	area.trigger = function(){
		if(area.style.display == "none"){
			if(showing){
				showing.style.display = "none";
			}
			area.style.display = "";
			showing = area;
		}else{
			area.style.display = "none";
		}
	};
	return area;
}


function load(url,callback){
	var request = new XMLHttpRequest();
	request.open("GET",url)
	function process(){
		if (request.readyState == 4)  {
			callback(request.responseText);
		}
	}

	request.onreadystatechange = process;

	request.send();
}
