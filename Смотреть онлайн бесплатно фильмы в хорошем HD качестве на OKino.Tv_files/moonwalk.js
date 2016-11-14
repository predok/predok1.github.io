// ms tabs
(function($){
    jQuery.fn.lightTabs = function(options){

        var createTabs = function(){
            tabsms = this;
            i = 0;

            showPage = function(i){
                $(tabsms).children("div").children("div").hide().text('');
                $(tabsms).children("div").children("div").eq(i).show();
                $(tabsms).children("ul").children("li").removeClass("active");
                $(tabsms).children("ul").children("li").eq(i).addClass("active");
            }

            showPage(0);

            $(tabsms).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;
            });

            $(tabsms).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
                var urlll0 = $(".ms-content").eq(parseInt($(this).attr("data-page"))).attr("data-show_player");
                var ifrm0 = '<iframe src=\"' + urlll0 + '\" frameborder=\"0\" scrolling=\"no\" width=\"607\" height=\"360\" allowfullscreen=\"\"></iframe';
                $(".ms-content").eq(parseInt($(this).attr("data-page"))).html(ifrm0);
            });
        };
        return this.each(createTabs);
    };
})(jQuery);

$(document).ready(function(){
    $(".tabsms").lightTabs();
    var urlll = $(".ms-content").first().attr("data-show_player");
    var ifrm = '<iframe src=\"' + urlll + '\" frameborder=\"0\" scrolling=\"no\" width=\"607\" height=\"360\" allowfullscreen=\"\"></iframe>';
    $(".ms-content").first().html(ifrm);
});
// moonserials