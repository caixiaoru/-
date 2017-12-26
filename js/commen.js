
$(function(){
    //$(".navbar-nav li").click(function(){
    //    $(this).addClass("active_nav").siblings().removeClass("active_nav");
    //})

    //road_content 图片切换
    $(".road_content_pay_left_imgSM img").click(function(){
        var img_src=$(this).attr("src");
        $(".road_content_pay_left_imgLG img").attr("src",img_src);
    });

//    热门行程——预订须知
    $(".travel_content_products_c div").click(function(){
        $(this).addClass("travel_content_know_now").siblings().removeClass("travel_content_know_now");
        $('.travel_content_products_d>div').eq($(this).index()).addClass('travel_content_know_show').siblings().removeClass('travel_content_know_show');
    });
    //热门行程---切换按钮
    $(".travel_content_change a").click(function(){
        $(this).addClass("travel_content_change_active").siblings().removeClass("travel_content_change_active");
    });

    // 二级页面选项
    $(".con_body-close_one li").click(function(){
        $(this).addClass("con_active").siblings().removeClass("con_active");
    });
    $(".con_body-close_two li").click(function(){
        $(this).addClass("con_active").siblings().removeClass("con_active");
    });
    $(".con_body-close_three li").click(function(){
        $(this).addClass("con_active").siblings().removeClass("con_active");
    });
    $(".con_body-close_four li").click(function(){
        $(this).addClass("con_active").siblings().removeClass("con_active");
    });

    //超链接
    $("a").attr("target","_blank");

    //禁用日历的点击事件
    $('.fc-day').unbind("mousedown");
    $('.fc-widget-content').unbind("mousedown");

//    会展中心切换按钮
    $(".exhibition_content_tab div").click(function(){
        $(this).addClass("exhibition_content_tab_active").siblings().removeClass("exhibition_content_tab_active");
        $('.exhibition_content_tab_a>div').eq($(this).index()).addClass('exhibition_content_tab_show').siblings().removeClass('exhibition_content_tab_show');
    })
});










