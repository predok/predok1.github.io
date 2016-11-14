/*##########################################################
UBERPLAYER FOR SITE o-nline.ws #############################
############################################################
POWERED BY UBERCHEL ########################################
(c) 2013 UBERSOFT LTD. ALL RIGHTS RESERVED. ################
E-MAIL: UBERSOFT@I.UA ######################################
SITE: HTTP://UBERMEDIA.RU AND HTTP://UBERSOFT.RU ###########
##########################################################*/

var pos = 0;
var poz = 0;
var sea = null;
var width = 603;
var uvk = new Object();

(uvk = {
	 init: function () {
	 	   document.write("<div id=\"uber-vk-write\" align=\"center\">\
	 	                   <ul id=\"uber-vk-season\"><li id=\"seasons\"></li></ul>\
	 	                   <div id=\"uber-vk-player\"></div>\
	 	                   <ul id=\"uber-vk-serial\"></ul>\
	 	                   <a href=\"javascript://\" class=\"prev\" onclick=\"uvk.move(1);\">prev</a>\
	                       <a href=\"javascript://\" class=\"next\" onclick=\"uvk.move(0);\">next</a>\
	                       <a href=\"javascript://\" class=\"prev1\" onclick=\"uvk.move1(1);\">prev</a>\
	                       <a href=\"javascript://\" class=\"next1\" onclick=\"uvk.move1(0);\">next</a>\
	                       <\/div>");
	},
	player: function (a, b) {
		document.getElementById("uber-vk-player").innerHTML = "";
	 	var vk = document.createElement("iframe");
	 	    vk.src = String(a);
	 	    vk.width = "100%";
	 	    vk.height = "360";
	 	    vk.setAttribute("border","0");
	 	    vk.setAttribute("frameborder", "0");
	 	    document.getElementById("uber-vk-player").appendChild(vk);
		 if (document.getElementById("uber-vk-serial")) {
			  c = document.getElementById("uber-vk-serial").getElementsByTagName("span");
			    for (var i=0; i<c.length; i++) {
				   c[i].removeAttribute("class")
				}
		   }
	 b.setAttribute("class", "active")
   },
   season : function (a, b) {
     if (document.getElementById("uber-vk-season")) {
	 c = document.getElementById("uber-vk-season").getElementsByTagName("span");
			 for (var i=0; i<c.length; i++) {
			  document.getElementById("season"+i).style.display = "none";
			c[i].removeAttribute("class")
		  }
		  document.getElementById("season"+a).style.display = "";
		  sea = a;
	   }
	 b.setAttribute("class", "active")
   },
   show: function (a, b) {
   	   for(var i=0; i<a.length; i++) {
   	   	   document.getElementById("uber-vk-season").getElementsByTagName("li")[0].innerHTML += "<span onclick=\"uvk.season("+i+", this)\">"+a[i]+"</span>";
   	   	   document.getElementById("uber-vk-serial").innerHTML += "<li id=\"season" + i + "\" style=\"display:none;\"></li>";
   	   	   }
   	   	   for(var i=0; i<a.length; i++) {
   	   	   for(var j=0; j<b[i].length; j++) {
   	   	   document.getElementById("season" + i).innerHTML += "<span onclick=\"uvk.player('"+b[i][j]+"', this);\">Серия " + (j+1) + "</span>";
   	      }
       }
       document.getElementById("uber-vk-season").getElementsByTagName("span")[0].setAttribute("class", "active");
       document.getElementById("uber-vk-season").getElementsByTagName("span")[0].click();
       document.getElementById("season0").getElementsByTagName("span")[0].click();
       document.getElementById("season0").style.display = "";
      
   },
   move: function (d) {
   	    var a, b;
		var butt = document.getElementById("seasons");
		var widt = butt.offsetWidth;
		var left = butt.offsetLeft;
		if (d == 0) {
			clearTimeout(a);
			b = setInterval(function () {
			  pos = pos - 10;
		  if (pos >= (left-width) && pos >= -(widt-width)) {
			  butt.style.left = pos + "px";
			} else clearTimeout(b);
			}, 15);
		}
		
		if (d == 1) {
			clearTimeout(b);
			b = setInterval(function () {
			  pos = pos + 10;
		  if (pos <= (left+width) && pos <= 0) {
			  butt.style.left = pos + "px";
			} else clearTimeout(b);
			}, 15);
		}
   },
   move1: function (d) {
   	    var a, b;
		var butt = document.getElementById("season" + sea);
		var widt = butt.offsetWidth;
		var left = butt.offsetLeft;

		if (d == 0) {
			clearTimeout(a);
			b = setInterval(function () {
			  poz = poz - 10;
		  if (poz >= (left-width) && poz >= -(widt-width)) {
			  butt.style.left = poz + "px";
			} else clearTimeout(b);
			}, 15);
		}
		
		if (d == 1) {
			clearTimeout(b);
			b = setInterval(function () {
			  poz = poz + 10;
		  if (poz <= (left+width) && poz <= 0) {
			  butt.style.left = poz + "px";
			} else clearTimeout(b);
			}, 15);
		}
	}
});

$(document).ready(function() {

	////////////////////////////
	var handleMatchMedia = function (mediaQuery) {
		if (mediaQuery.matches) {
			$('#nav, .block-menu').clone().appendTo('.resp-menu');
			var shortHeight = $('.shorts-img').height();
			$('.shorts-img').css({height:shortHeight});
			var shortHeight2 = $('.article-film-image').height();
			$('.article-film-image').css({height:shortHeight2});
			$(window).resize(function(){
				$('.article-film-image, .shorts-img').removeAttr('style');
				var shortHeight = $('.shorts-img').height();
				$('.shorts-img').css({height:shortHeight});
				var shortHeight2 = $('.article-film-image').height();
				$('.article-film-image').css({height:shortHeight2});
			});
		} else {
			$('.resp-menu').empty();
			$('.article-film-image, .shorts-img').removeAttr('style');
		}
	}
	mql = window.matchMedia('all and (max-width: 1048px)');

	handleMatchMedia(mql);
	mql.addListener(handleMatchMedia); 
	
	$('.mob-menu').click(function(){
		$('.resp-menu').slideToggle();
	});

});   