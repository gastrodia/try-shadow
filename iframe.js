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
	var iframe = document.createElement("iframe");
	iframe.style.width = "100%";
	iframe.style.height = "100%";
	iframe.style.border = "none";
	iframe.src = url;
	area.appendChild(iframe);
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


