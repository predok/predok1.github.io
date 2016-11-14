
var forceShow = 'no';
var country_iso = 'RU';
var wCountries = ['RU','KZ','BY','UA','DE','EE','UK','LV','LT','TJ'];
var our_elem;
var proto = location.protocol;
var sky_uuid = '7b4f7241-f5f5-413f-a90d-c7f2adb59b9b';
var sky_key = 'e225aa8e9c1a68539730f11001490407';
var audit_incr = 0;
var isMobile = false;
(function(){
	window.addEventListener("message", function(event){
		console.log('MSG:', event);
		if (event.origin == proto+'//www.planeta-online.tv' && event.data == 'ad_impression') {
			console.log('imp');
			setTimeout(function(){
				console.log('audit triggered');
				var pw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
				var ph = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
				var rect = our_elem.getBoundingClientRect();
				var b = rect.bottom;
				var t = rect.top;
				var r = rect.right;
				var l = rect.left;
				var w = rect.width;
				var h = rect.height;

				var tImg = new Image(1,1);
				tImg.id = 'audit'+audit_incr;
				audit_incr++;

				tImg.src = proto+'//code.skyadvideo.ru/audit.php?b='+b+'&t='+t+'&r='+r+'&l='+l+'&w='+w+'&h='+h+'&pw='+pw+'&ph='+ph+'&v='+sky_key+'&digest='+tImg.id;
				document.body.appendChild(tImg);
			}, 2000);
		}
	}, false);
	var link = proto+"//www.planeta-online.tv/advvp/e225aa8e9c1a68539730f11001490407.html";
	setTimeout(function(){
		our_elem = document.getElementById('sky_video');
		//our_elem.style.position = 'relative';
		//our_elem.style.zIndex = '99999';

		if (wCountries.indexOf(country_iso) != -1 || forceShow == 'yes') {
			our_elem.style.background = "#29291f url('data:image/gif;base64,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') no-repeat center center";
			our_elem.style.height = "330px";
		}

		var ifrm = document.createElement("iframe");
		
		var ibp = document.createElement("iframe");
		ibp.setAttribute("id", "sky_1");

		ifrm.setAttribute("src", link);
		ifrm.setAttribute("id", "sky_frame");
		ifrm.setAttribute("scrolling", "no");
		ifrm.setAttribute("frameborder", "0");
		ifrm.setAttribute("marginheight", "0px");
		ifrm.setAttribute("marginwidth", "0px");
		ifrm.setAttribute("webkitallowfullscreen", "true");
		ifrm.setAttribute("allowfullscreen", "true");
		ifrm.setAttribute("mozallowfullscreen", "true");
                
		ifrm.style.width = "600px";
		ifrm.style.height = "330px";
		ifrm.style.border = "0px #FFFFFF none";
		ifrm.onload = function(){
			var rect = our_elem.getBoundingClientRect();
			if (rect.width < 500 && !isMobile) {
				our_elem.removeChild(ifrm);
			} else {
				our_elem.style.background = '';
								document.body.scrollTop = document.documentElement.scrollTop = 0;
				disableScroll();
				setTimeout(function(){
					enableScroll();
				}, 5000);
							}
		};

		if (wCountries.indexOf(country_iso) != -1 || forceShow == 'yes') {
			our_elem.appendChild(ifrm);
		}
	}, 500);
})();

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}
