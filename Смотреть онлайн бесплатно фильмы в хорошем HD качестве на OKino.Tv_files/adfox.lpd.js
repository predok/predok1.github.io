(function(){
	var AdFoxLPD = function()
	{
		this.cookieDomain = "adv.gpm-digital.com";
	};
	AdFoxLPD.prototype.prepareLink = function(url, callback)
	{
		this.getID(function(err, id)
		{
			if(err)
				callback(err, url.replace('getCode', 'getCodeTest'));
			else
				callback(false, url + "&lpdid=" + id);
		});
	};
	AdFoxLPD.prototype.getID = function(callback)
	{
		var cookie, ls;
		try {
			cookie = (cookie = document.cookie.match(new RegExp("(?:^|; )lpdid=([^;]*)"))) ? decodeURIComponent(cookie[1]) : null;
		}catch(err){}
		try {
			ls = window.localStorage.getItem("lpdid") ? window.localStorage.getItem("lpdid") : null;
		}catch(err){}
		if(ls || cookie)
		{
			callback(null, ls || cookie);
		}
		else
		{
			var xhr = new XHR();
			xhr.open("GET", "//"+this.cookieDomain+"/getid?pr="+Math.round(Math.random()*10000000)+"&t=json", true);
			xhr.onload = function()
			{
				try
				{
					var lpdid = JSON.parse(xhr.responseText).lpd_id;
					if(lpdid)
					{
						callback(false, lpdid);
						
						var b = new Date();
						b.setDate(b.getDate() + 365);
						document.cookie = 'lpdid=' + lpdid + ";expires=" + b.toUTCString() + ";path=/";
						window.localStorage.setItem("lpdid", lpdid);
					}
					else
					{
						callback(true, null);
					}
				}catch(err){callback(err, null);}
			}
			xhr.onerror = function()
			{
				callback(true, null);
			};
			xhr.withCredentials = true;
			xhr.send(null);
		}
	};
	var JSON = JSON || {};
	JSON.parse = JSON.parse || function (str)
	{
		if (str === "")
		{
			str = '""';
		}
		var jsp = {};
		eval("jsp=" + str + ";");
		return jsp;
	};
	var XHR = window.XDomainRequest || window.XMLHttpRequest;
	window.adfoxLPD = new AdFoxLPD();
})();