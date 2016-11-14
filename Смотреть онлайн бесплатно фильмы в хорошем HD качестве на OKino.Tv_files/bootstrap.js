
 





  /* idTabs ~ Sean Catchpole - Version 2.2 - MIT/GPL */
(function(){var dep={"jQuery":"http://code.jquery.com/jquery-latest.min.js"};var init=function(){(function($){$.fn.idTabs=function(){var s={};for(var i=0;i<arguments.length;++i){var a=arguments[i];switch(a.constructor){case Object:$.extend(s,a);break;case Boolean:s.change=a;break;case Number:s.start=a;break;case Function:s.click=a;break;case String:if(a.charAt(0)=='.')s.selected=a;else if(a.charAt(0)=='!')s.event=a;else s.start=a;break;}}
if(typeof s['return']=="function")
s.change=s['return'];return this.each(function(){$.idTabs(this,s);});}
$.idTabs=function(tabs,options){var meta=($.metadata)?$(tabs).metadata():{};var s=$.extend({},$.idTabs.settings,meta,options);if(s.selected.charAt(0)=='.')s.selected=s.selected.substr(1);if(s.event.charAt(0)=='!')s.event=s.event.substr(1);if(s.start==null)s.start=-1;var showId=function(){if($(this).is('.'+s.selected))
return s.change;var id="#"+this.href.split('#')[1];var aList=[];var idList=[];$("a",tabs).each(function(){if(this.href.match(/#/)){aList.push(this);idList.push("#"+this.href.split('#')[1]);}});if(s.click&&!s.click.apply(this,[id,idList,tabs,s]))return s.change;for(i in aList)$(aList[i]).removeClass(s.selected);for(i in idList)$(idList[i]).hide();$(this).addClass(s.selected);$(id).show();return s.change;}
var list=$("a[href*='#']",tabs).unbind(s.event,showId).bind(s.event,showId);list.each(function(){$("#"+this.href.split('#')[1]).hide();});var test=false;if((test=list.filter('.'+s.selected)).length);else if(typeof s.start=="number"&&(test=list.eq(s.start)).length);else if(typeof s.start=="string"&&(test=list.filter("[href*='#"+s.start+"']")).length);if(test){test.removeClass(s.selected);test.trigger(s.event);}
return s;}
$.idTabs.settings={start:0,change:false,click:null,selected:".selected",event:"!click"};$.idTabs.version="2.2";$(function(){$(".idTabs").idTabs();});})(jQuery);}
var check=function(o,s){s=s.split('.');while(o&&s.length)o=o[s.shift()];return o;}
var head=document.getElementsByTagName("head")[0];var add=function(url){var s=document.createElement("script");s.type="text/javascript";s.src=url;head.appendChild(s);}
var s=document.getElementsByTagName('script');var src=s[s.length-1].src;var ok=true;for(d in dep){if(check(this,d))continue;ok=false;add(dep[d]);}if(ok)return init();add(src);})();





 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 













/*
* Placeholder plugin for jQuery
* ---
* Copyright 2010, Daniel Stocks (http://webcloud.se)
* Released under the MIT, BSD, and GPL Licenses.
*/

(function(b){function d(a){this.input=a;a.attr("type")=="password"&&this.handlePassword();b(a[0].form).submit(function(){if(a.hasClass("placeholder")&&a[0].value==a.attr("placeholder"))a[0].value=""})}d.prototype={show:function(a){if(this.input[0].value===""||a&&this.valueIsPlaceholder()){if(this.isPassword)try{this.input[0].setAttribute("type","text")}catch(b){this.input.before(this.fakePassword.show()).hide()}this.input.addClass("placeholder");this.input[0].value=this.input.attr("placeholder")}},
hide:function(){if(this.valueIsPlaceholder()&&this.input.hasClass("placeholder")&&(this.input.removeClass("placeholder"),this.input[0].value="",this.isPassword)){try{this.input[0].setAttribute("type","password")}catch(a){}this.input.show();this.input[0].focus()}},valueIsPlaceholder:function(){return this.input[0].value==this.input.attr("placeholder")},handlePassword:function(){var a=this.input;a.attr("realType","password");this.isPassword=!0;if(b.browser.msie&&a[0].outerHTML){var c=b(a[0].outerHTML.replace(/type=(['"])?password\1/gi,
"type=$1text$1"));this.fakePassword=c.val(a.attr("placeholder")).addClass("placeholder").focus(function(){a.trigger("focus");b(this).hide()});b(a[0].form).submit(function(){c.remove();a.show()})}}};var e=!!("placeholder"in document.createElement("input"));b.fn.placeholder=function(){return e?this:this.each(function(){var a=b(this),c=new d(a);c.show(!0);a.focus(function(){c.hide()});a.blur(function(){c.show(!1)});b.browser.msie&&(b(window).load(function(){a.val()&&a.removeClass("placeholder");c.show(!0)}),
a.focus(function(){if(this.value==""){var a=this.createTextRange();a.collapse(!0);a.moveStart("character",0);a.select()}}))})}})(jQuery);





























/*! Social Likes v3.0.3 by Artem Sapegin - http://sapegin.github.com/social-likes - Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a,b){"use strict";function c(a,b){this.container=a,this.options=b,this.init()}function d(b,c){this.widget=b,this.options=a.extend({},c),this.detectService(),this.service&&this.init()}function e(a){function b(a,b){return b.toUpper()}var c={},d=a.data();for(var e in d){var f=d[e];"yes"===f?f=!0:"no"===f&&(f=!1),c[e.replace(/-(\w)/g,b)]=f}return c}function f(a,b){return g(a,b,encodeURIComponent)}function g(a,b,c){return a.replace(/\{([^\}]+)\}/g,function(a,d){return d in b?c?c(b[d]):b[d]:a})}function h(a,b){var c=l+a;return c+" "+c+"_"+b}function i(b,c){function d(g){"keydown"===g.type&&27!==g.which||a(g.target).closest(b).length||(b.removeClass(m),e.off(f,d),a.isFunction(c)&&c())}var e=a(document),f="click touchstart keydown";e.on(f,d)}function j(a){var b=10;if(document.documentElement.getBoundingClientRect){var c=parseInt(a.css("left"),10),d=parseInt(a.css("top"),10),e=a[0].getBoundingClientRect();e.left<b?a.css("left",b-e.left+c):e.right>window.innerWidth-b&&a.css("left",window.innerWidth-e.right-b+c),e.top<b?a.css("top",b-e.top+d):e.bottom>window.innerHeight-b&&a.css("top",window.innerHeight-e.bottom-b+d)}a.addClass(m)}var k="social-likes",l=k+"__",m=k+"_opened",n="https:"===location.protocol?"https:":"http:",o={facebook:{counterUrl:"https://graph.facebook.com/fql?q=SELECT+total_count+FROM+link_stat+WHERE+url%3D%22{url}%22&callback=?",convertNumber:function(a){return a.data[0].total_count},popupUrl:"https://www.facebook.com/sharer/sharer.php?u={url}",popupWidth:600,popupHeight:500},twitter:{counterUrl:"https://cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?",convertNumber:function(a){return a.count},popupUrl:"https://twitter.com/intent/tweet?url={url}&text={title}",popupWidth:600,popupHeight:450,click:function(){return/[\.:\-��]\s*$/.test(this.options.title)||(this.options.title+=":"),!0}},mailru:{counterUrl:n+"//connect.mail.ru/share_count?url_list={url}&callback=1&func=?",convertNumber:function(a){for(var b in a)if(a.hasOwnProperty(b))return a[b].shares},popupUrl:n+"//connect.mail.ru/share?share_url={url}&title={title}",popupWidth:550,popupHeight:360},vkontakte:{counterUrl:n+"//vk.com/share.php?act=count&url={url}&index={index}",counter:function(b,c){var d=o.vkontakte;d._||(d._=[],window.VK||(window.VK={}),window.VK.Share={count:function(a,b){d._[a].resolve(b)}});var e=d._.length;d._.push(c),a.getScript(f(b,{index:e})).fail(c.reject)},popupUrl:n+"//vk.com/share.php?url={url}&title={title}",popupWidth:550,popupHeight:330},odnoklassniki:{counterUrl:n+"//www.odnoklassniki.ru/dk?st.cmd=shareData&ref={url}&cb=?",convertNumber:function(a){return a.count},popupUrl:n+"//www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl={url}",popupWidth:550,popupHeight:360},plusone:{counterUrl:"http:"===n?"http://share.yandex.ru/gpp.xml?url={url}":b,counter:function(b,c){var d=o.plusone;return d._?void c.reject():(window.services||(window.services={}),window.services.gplus={cb:function(a){d._.resolve(a)}},d._=c,void a.getScript(f(b)).fail(c.reject))},popupUrl:"https://plus.google.com/share?url={url}",popupWidth:700,popupHeight:500},pinterest:{counterUrl:n+"//api.pinterest.com/v1/urls/count.json?url={url}&callback=?",convertNumber:function(a){return a.count},popupUrl:n+"//pinterest.com/pin/create/button/?url={url}&description={title}",popupWidth:630,popupHeight:270}},p={promises:{},fetch:function(b,c,d){p.promises[b]||(p.promises[b]={});var e=p.promises[b];if(!d.forceUpdate&&e[c])return e[c];var g=a.extend({},o[b],d),h=a.Deferred(),i=g.counterUrl&&f(g.counterUrl,{url:c});return i&&a.isFunction(g.counter)?g.counter(i,h):g.counterUrl?a.getJSON(i).done(function(b){try{var c=b;a.isFunction(g.convertNumber)&&(c=g.convertNumber(b)),h.resolve(c)}catch(d){h.reject()}}).fail(h.reject):h.reject(),e[c]=h.promise(),e[c]}};a.fn.socialLikes=function(b){return this.each(function(){var d=a(this),f=d.data(k);f?a.isPlainObject(b)&&f.update(b):(f=new c(d,a.extend({},a.fn.socialLikes.defaults,b,e(d))),d.data(k,f))})},a.fn.socialLikes.defaults={url:window.location.href.replace(window.location.hash,""),title:document.title,counters:!0,zeroes:!1,wait:500,popupCheckInterval:500,singleTitle:"Share"},c.prototype={init:function(){this.container.addClass(k),this.single=this.container.hasClass(k+"_single"),this.initUserButtons(),this.number=0,this.container.on("counter."+k,a.proxy(this.updateCounter,this));var b=this.container.children();this.countersLeft=b.length,this.makeSingleButton(),this.buttons=[],b.each(a.proxy(function(b,c){this.buttons.push(new d(a(c),this.options))},this)),this.options.counters?this.timer=setTimeout(a.proxy(this.appear,this),this.options.wait):this.appear()},initUserButtons:function(){!this.userButtonInited&&window.socialLikesButtons&&a.extend(!0,o,socialLikesButtons),this.userButtonInited=!0},makeSingleButton:function(){if(this.single){var b=this.container;b.addClass(k+"_vertical"),b.wrap(a("<div>",{"class":k+"_single-w"})),b.wrapInner(a("<div>",{"class":k+"__single-container"}));var c=b.parent(),d=a("<div>",{"class":h("widget","single")}),e=a(g('<div class="{buttonCls}"><span class="{iconCls}"></span>{title}</div>',{buttonCls:h("button","single"),iconCls:h("icon","single"),title:this.options.singleTitle}));d.append(e),c.append(d),d.click(function(){var a=k+"__widget_active";return d.toggleClass(a),d.hasClass(a)?(b.css({left:-(b.width()-d.width())/2,top:-b.height()}),j(b),i(b,function(){d.removeClass(a)})):b.removeClass(m),!1}),this.widget=d}},update:function(b){if(b.forceUpdate||b.url!==this.options.url){this.number=0,this.countersLeft=this.buttons.length,this.widget&&this.widget.find("."+k+"__counter").remove(),a.extend(this.options,b);for(var c=0;c<this.buttons.length;c++)this.buttons[c].update(b)}},updateCounter:function(a,b,c){c&&(this.number+=c,this.single&&this.getCounterElem().text(this.number)),this.countersLeft--,0===this.countersLeft&&(this.appear(),this.container.addClass(k+"_ready"),this.container.trigger("ready."+k,this.number))},appear:function(){this.container.addClass(k+"_visible")},getCounterElem:function(){var b=this.widget.find("."+l+"counter_single");return b.length||(b=a("<span>",{"class":h("counter","single")}),this.widget.append(b)),b}},d.prototype={init:function(){this.detectParams(),this.initHtml(),this.initCounter()},update:function(b){a.extend(this.options,{forceUpdate:!1},b),this.widget.find("."+k+"__counter").remove(),this.initCounter()},detectService:function(){var b=this.widget.data("service");if(!b){for(var c=this.widget[0],d=c.classList||c.className.split(" "),e=0;e<d.length;e++){var f=d[e];if(o[f]){b=f;break}}if(!b)return}this.service=b,a.extend(this.options,o[b])},detectParams:function(){var a=this.widget.data();if(a.counter){var b=parseInt(a.counter,10);isNaN(b)?this.options.counterUrl=a.counter:this.options.counterNumber=b}a.title&&(this.options.title=a.title),a.url&&(this.options.url=a.url)},initHtml:function(){var b=this.options,c=this.widget,d=c.find("a");d.length&&this.cloneDataAttrs(d,c);var e=a("<span>",{"class":this.getElementClassNames("button"),text:c.text()});if(b.clickUrl){var g=f(b.clickUrl,{url:b.url,title:b.title}),h=a("<a>",{href:g});this.cloneDataAttrs(c,h),c.replaceWith(h),this.widget=c=h}else c.click(a.proxy(this.click,this));c.removeClass(this.service),c.addClass(this.getElementClassNames("widget")),e.prepend(a("<span>",{"class":this.getElementClassNames("icon")})),c.empty().append(e),this.button=e},initCounter:function(){if(this.options.counters)if(this.options.counterNumber)this.updateCounter(this.options.counterNumber);else{var b={counterUrl:this.options.counterUrl,forceUpdate:this.options.forceUpdate};p.fetch(this.service,this.options.url,b).always(a.proxy(this.updateCounter,this))}},cloneDataAttrs:function(a,b){var c=a.data();for(var d in c)c.hasOwnProperty(d)&&b.data(d,c[d])},getElementClassNames:function(a){return h(a,this.service)},updateCounter:function(b){b=parseInt(b,10)||0;var c={"class":this.getElementClassNames("counter"),text:b};b||this.options.zeroes||(c["class"]+=" "+k+"__counter_empty",c.text="");var d=a("<span>",c);this.widget.append(d),this.widget.trigger("counter."+k,[this.service,b])},click:function(b){var c=this.options,d=!0;if(a.isFunction(c.click)&&(d=c.click.call(this,b)),d){var e=f(c.popupUrl,{url:c.url,title:c.title});e=this.addAdditionalParamsToUrl(e),this.openPopup(e,{width:c.popupWidth,height:c.popupHeight})}return!1},addAdditionalParamsToUrl:function(b){var c=a.param(a.extend(this.widget.data(),this.options.data));if(a.isEmptyObject(c))return b;var d=-1===b.indexOf("?")?"?":"&";return b+d+c},openPopup:function(b,c){var d=Math.round(screen.width/2-c.width/2),e=0;screen.height>c.height&&(e=Math.round(screen.height/3-c.height/2));var f=window.open(b,"sl_"+this.service,"left="+d+",top="+e+",width="+c.width+",height="+c.height+",personalbar=0,toolbar=0,scrollbars=1,resizable=1");if(f){f.focus(),this.widget.trigger("popup_opened."+k,[this.service,f]);var g=setInterval(a.proxy(function(){f.closed&&(clearInterval(g),this.widget.trigger("popup_closed."+k,this.service))},this),this.options.popupCheckInterval)}else location.href=b}},a(function(){a("."+k).socialLikes()})});





























/*! jq.carousel / jQuery plugin - v2.4.3 - 2012-11-08 1:11:07
* http://5509.github.com/jq.carousel/
* Copyright (c) 2012 Kazunori Tokuda; Licensed MIT */
(function(a,b){function e(a,c){var d=0,e=b;/^\d+$/.test(a)&&(a=new Array(a)),e=a.length;for(;d<e;d=d+1)c.apply(a[d],[d].concat(arguments))}var c=function(a,b){return this.namespace="Carousel",this instanceof c?this.init(a,b):new c(a,b)};c.prototype={init:function(b,c){var d=this;return d.conf=a.extend({vertical:!1,loop:!0,easing:"swing",start:1,group:1,duration:.2,indicator:!1},c),d.$elem=b,d.$carousel_wrap=a("<div></div>"),d._build(),d._setIndicator(),d._eventify(),d},_build:function(){var b=this,c=b.conf,d=0,f=0;b.offset_prop=b.conf.vertical?"offsetHeight":"offsetWidth",b.float=c.vertical?"none":"left",b.position=c.vertical?"top":"left",b.prop=c.vertical?"height":"width",b.view_size=b.$elem[0][b.offset_prop],b.total_size=0,b.current=c.start,b.$items=b.$elem.children(),b.$items_original=b.$items.clone(),b.items_length=b.$items.length,b.items_len_hidden=0,b.$elem.html(b.$carousel_wrap.html(b.$items)),f=b.items_length*b.$items[0][b.offset_prop],b.$items.css({"float":b.float}),e(b.$items,function(c){var d=this;d.carousel_id=c,d.$elem=a(this),d.data_size=d[b.offset_prop],d.orig_size=d.$elem.css(b.prop);if(b.items_len_hidden>b.view_size)return;b.items_len_hidden=b.items_len_hidden+d.data_size}),b.item_size=b.$items.eq(0)[0].data_size,b.items_len_hidden=b.items_len_hidden/b.item_size,c.group!==1?(b._groupSetup(),c.loop&&b._cloneGroup()):c.loop&&b._cloneItem(),b.$elem.css({overflow:"hidden",position:"relative"}),c.loop?(d=b.items_len_hidden+b.current-1,b.current_pos=-d*b.item_size,b.default_pos=-b.items_len_hidden*b.item_size):(d=b.items_length<c.start?1:c.start,b.current_pos=-(d-1)*b.item_size,b.default_pos=0),b.$carousel_wrap.css({position:"relative"}).css(b.position,b.current_pos),b.vertical?b.$carousel_wrap.css("width",b.$items.eq(0)[0].offsetWidth):b.$carousel_wrap.css("height",b.$items.eq(0)[0].offsetHeight),b.max_point=b.default_pos-b.item_size*b.items_length,b.min_point=b.default_pos,b.move_size=b.item_size,c.group===1?b.$items=b.$carousel_wrap.children():b.$items=b.$carousel_wrap.find(".carousel_group_inner"),b._setSize(),b.$elem.trigger("carousel.ready")},_eventify:function(){var a=this,c=a.conf,d=b;if(!c.indicator)return;d=a.$indicator.data("indicator"),a.$elem.bind({"Carousel.prev":function(){d.active()},"Carousel.next":function(){d.active()}})},_groupSetup:function(){var b=this,c=0,d=0,e=b.items_length,f=b.conf,g=e/f.group,h=Math.ceil(g),i=new Array(h),j=b.item_size*f.group;for(;c<e;c++)c!==0&&c%f.group===0&&(d=d+1),i[d]||(i[d]=a('<div class="carousel_group_inner"></div>'),i[d].css("float",b.float).css(b.prop,j)),i[d].append(b.$items.eq(c));for(c=0;c<h;c++)b.$carousel_wrap.append(i[c]);b.$items=b.$carousel_wrap.find(".carousel_group_inner"),b.items_length=b.$items.length,b.items_len_hidden=1,b.item_size=b.item_size*f.group},_cloneItem:function(){var b=this,c=b.items_len_hidden,d=function(b,c){var d,e=this,f=[];for(d=0;d<c;d++){if(d===c)break;f.push(e.eq(b!=="<"?e.length-(1+d):d).clone())}return a(f)},f=function(){var b=[];return a.each(this,function(a,c){b.unshift(c.clone())}),a(b)},g=f.call(d.call(b.$items,"<",c)),h=f.call(d.call(b.$items,">",c));e(g,function(){b.$items.eq(b.$items.length-1).after(this)}),e(h,function(){b.$items.eq(0).before(this)})},_cloneGroup:function(){var a=this,b=a.items_len_hidden,c=a.$items.eq(0).clone(),d=a.$items.eq(a.items_length-1).clone();a.$items.eq(0).before(d),a.$items.eq(a.$items.length-1).after(c)},_getSize:function(a){var c=this,d=b;c.conf.group===1?d=c.$carousel_wrap.children():d=c.$elem.find(".carousel_group_inner"),c.total_size=0,e(d,function(a){var b=this;b.data_size=b[c.offset_prop],c.total_size=c.total_size+b.data_size})},_setSize:function(){var a=this;a._getSize(),a.$carousel_wrap.css(a.prop,a.total_size)},_moveState:function(){var a=this,b=a.view_size,c=a.items_length*a.item_size;return c<=b?!1:a.current===a.items_length?"max":a.current===1?"min":!0},_getNext:function(a){var b=this,c=b.conf;return a+1>b.items_length?a=1:a=a+1,a},_getPrev:function(a){var b=this,c=b.conf;return a-1===0?a=b.items_length:a=a-1,a},_setCurrent:function(a){var c=this,d=b,e=c.current;a?d=c._getNext(e):d=c._getPrev(e),c.current=d},_toNext:function(){var a=this,b=a.conf,c=a.items_len_hidden,d={};if(!a.conf.loop&&a.current===a.items_length)return;a._setCurrent(!0),a.current_pos=a.current_pos-a.move_size,a.current_pos<a.max_point&&(a.$carousel_wrap.css(a.position,a.default_pos),a.current_pos=a.default_pos-a.move_size),d[a.position]=a.current_pos,a.$carousel_wrap.animate(d,{queue:!1,easing:b.easing,duration:b.duration*1e3,complete:function(){a.$elem.trigger("Carousel.next")}})},_toPrev:function(){var a=this,b=a.conf,c=a.items_len_hidden,d=a.items_length+c,e=a.item_size*a.items_length,f={};if(!a.conf.loop&&a.current===1)return;a._setCurrent(!1),a.current_pos=a.current_pos+a.move_size,a.default_pos<a.current_pos&&(a.$carousel_wrap.css(a.position,-a.item_size*d),a.current_pos=a.default_pos-e+a.move_size),f[a.position]=a.current_pos,a.$carousel_wrap.animate(f,{queue:!1,easing:b.easing,duration:b.duration*1e3,complete:function(){a.$elem.trigger("Carousel.prev")}})},_getIndicator:function(b){var c=this,e=d(c,b),f=a('<div class="carousel_indicator"></div>');return f.data("indicator",e),f.append(e.$elems),f},_setIndicator:function(a){var c=this,d=b;if(!c.conf.indicator)return;c.$indicator?(d=c.$indicator.data("indicator"),c.$indicator.append(d.refresh())):(c.$indicator=c._getIndicator(a),c.$elem.after(c.$indicator))},_callAPI:function(a,b){var c=this;if(typeof c[a]!="function")throw a+" does not exist of Carousel methods.";if(/^_/.test(a)&&typeof c[a]=="function")throw"Method begins with an underscore are not exposed.";return c[a](b)},indicator:function(a){var b=this;return b._getIndicator(a)},getCurrent:function(){var a=this;return a.current-1},getMoveState:function(){var a=this;return a._moveState()},prev:function(){var a=this;return a._toPrev(),a.$elem},next:function(){var a=this;return a._toNext(),a.$elem},reset:function(b){var c=this;return c.$elem.empty().append(c.$items_original),b&&(c.conf=a.extend(c.conf,b)),c.$elem.trigger("Carousel.reset"),c.$elem},refresh:function(){var a=this;return a.total_size=0,a._build(),a._setIndicator(),a.$elem.trigger("Carousel.refresh"),a.$elem}};var d=function(a,b){return this.namespace="Indicator",this instanceof d?this.init(a,b):new d(a,b)};d.prototype={init:function(a,b){var c=this;c.carousel=a,c._build(b)},_build:function(b){var c=this,d=c.carousel,e=d.getCurrent(),f=0,g=d.items_length,h="",i="";for(;f<g;f++)f===e?i=' class="active"':i="",h=h+"<span"+i+">",h=h+(b?f:""),h=h+"</span>";c.$elems=a(h)},_setActive:function(){var a=this,b=a.carousel;a.$elems.removeClass("active"),a.$elems.eq(b.getCurrent()).addClass("active")},refresh:function(){var a=this;return a.$elems.remove(),a._build(),a.$elems},active:function(){var a=this;a._setActive()}},jQuery.fn.carousel=function(a,b){var d=this.data("carousel");return d?d._callAPI(a,b):(d=c(this,a),this.data("carousel",d),this)}})(jQuery);
















