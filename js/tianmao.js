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
	





	 	var top=$(".box")[0];
	 	var floor=$(".twos")[0];
	 	var div1=$(".bt")[0];
	 	document.documentElement.scrollTop=1;
	 	if (document.documentElement.scrollTop=1) {
	 		var scrllobj=document.documentElement;
	 	}else{
	 		var scrllobj=document.body;
	 	}
	 	var flag=true;
	 	var flag2=true;
	 	window.onscroll=function(){
	 		var st=scrllobj.scrollTop;
	 		if (st>650){
	 			if (flag){
	 			flag=false;flag2=true;
	 			animate(top,{top:0})
	 			animate(floor,{width:36,height:370},200)
	 			};
	 		}else{if (flag2) {
	 			flag=true;flag2=false;
	 			animate(top,{top:-40})
	 			animate(floor,{width:0,height:0},200)
	 			};
	 		};
	 	}
	

 



	  	var items=$(".cea1-111");
	  	var names=$(".cea1-11");
	  	var t;
	  	for (var i = 0; i < items.length; i++) {
	  		items[i].index=i;
	  		hover(items[i],function(){
	  			var that=this;
	  			clearTimeout(t)
	  			t=setTimeout(function(){
              names[that.index].style.display="block";
              animate(names[that.index],{left:-90,opacity:1},300)
             },200) 
	  		},function(){
	  			clearTimeout(t)
	  			animate(names[this.index],{left:-140,opacity:0.6},300,function(){
	  				this.style.display="none";
	  			})
	  		})
	  	};


var top=$(".topbox")[0];
    var floor=$(".twos")[0];
    // var div1=$(".bt")[0];
    document.documentElement.scrollTop=1;
    if (document.documentElement.scrollTop==1) {
      var scrllobj=document.documentElement;
    }else{
      var scrllobj=document.body;
    }
    var flag=true;
    var flag2=true;
    window.onscroll=function(){
      var st=scrllobj.scrollTop;
      if (st>650){
        if (flag){
        flag=false;flag2=true;
        animate(top,{top:0})
        animate(floor,{width:36,height:370},200)
        };
      }else{if (flag2) {
        flag=true;flag2=false;
        animate(top,{top:-40})
        animate(floor,{width:0,height:0},200)
        };
      };
    }


var chaoliu=$(".chaoliu2-1");
var chaoliu3=$(".chaoliu3")[0];
var huan=$("img",chaoliu3);
for (var i = 0; i < chaoliu.length; i++){
	chaoliu[i].index=i;
      chaoliu[i].onmouseover=function(){
          for (var i = 0; i < huan.length; i++) {
          	animate(huan[this.index],{width:150,height:150,top:-7,left:-7},300)
          };
      }	
      chaoliu[i].onmouseout=function(){
          for (var i = 0; i <huan.length; i++) {
          	animate(huan[this.index],{width:136,height:136,top:0,left:0},300)
          };
      }	
};

      var obj=document.documentElement;
      var totop=$(".cea10")[0];
      var totop1=$(".cea20")[0];
      totop.onclick=function(){
          obj=document.body.scrollTop==0?document.documentElement:document.body;
        animate(obj,{scrollTop:0})
      }
      totop1.onclick=function(){
      	obj=document.body.scrollTop==0?document.documentElement:document.body;
        animate(obj,{scrollTop:0})
      }

var btns=$(".bt");
    var tents=$(".jipi11");
    for (var i = 0; i < btns.length; i++) {
      btns[i].index=i;
      btns[i].onclick=function(){
      var ot=tents[this.index].offsetTop;
      animate(scrllobj,{scrollTop:ot})
      }
    };



  var wode=$(".wode");
  var wodeXiala=$(".wode-xiala");
  for (var i = 0; i < wode.length; i++) { 
  wode[i].index=i;
  wode[i].onmouseover=function(){
  	wodeXiala[this.index].style.display="block";
  }
  wode[i].onmouseout=function(){
  	wodeXiala[this.index].style.display="none";
  }
  };

  var shoujiban=$(".shoujiban")[0];
  var erwei1=$(".erwei1")[0];
  shoujiban.onmouseover=function(){
  	erwei1.style.display="block";
  }
  shoujiban.onmouseout=function(){
  	erwei1.style.display="none";
  }

  var daohangXiala=$(".daohang-xiala")[0];
  var wangzhandaohang=$(".wangzhandaohang")[0];
  wangzhandaohang.onmouseover=function(){
  	daohangXiala.style.display="block";
  }
  wangzhandaohang.onmouseout=function(){
  	daohangXiala.style.display="none";
  }

}
