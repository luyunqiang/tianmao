window.onload=function(){
	var banner_btns=document.getElementsByClassName("dian")
	var banner_imgs=document.getElementsByClassName("tu")
	var banner_bgcl=document.getElementsByClassName("banner")[0];
	var banner_color=["#e8e8e8","#e8e8e8","#e8e8e8","#2CB1F6","#e8e8e8"];

	for (var i = 0; i < banner_btns.length; i++) {
		banner_btns[i].index=i;
		banner_btns[i].onmouseover=function(){
			for (var i = 0; i < banner_btns.length; i++) {
				banner_imgs[i].style.zIndex=1;
				banner_btns[i].style.background="#a2a2a2";
				
			};
			banner_bgcl.style.background=banner_color[this.index];
			banner_imgs[this.index].style.zIndex=2;
			this.style.background="#fff";

		}
	};


	var num=0;
	setInterval(function(){
		num++;
		if(num==5){
			num=0;
		}
		for (var i = 0; i < banner_btns.length; i++) {
			banner_imgs[i].style.zIndex=1;
			banner_btns[i].style.background="#a2a2a2"
		};
		banner_bgcl.style.background=banner_color[num];
	    banner_imgs[num].style.zIndex=2;
		banner_btns[num].style.background="#fff";
	},3000)
	// banner_bgcl.onmouseover=function(){
		
	// }
	
}
