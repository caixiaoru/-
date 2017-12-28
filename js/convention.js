/**
 * Created by admin on 2017/12/25.
 */
$(document).ready(function(){
    //热门企业  更多
    $(".row-fluid .con_more").click(function(){
        $(this).next().toggleClass("con_body-close");
    });
    //合作申请
    var line = 0;
    $(".time-line .row").each(function(){
        $(this).children(".center-point").addClass("text-point" + (line + 1));
        $(this).children(".time-line-body").children(".img").addClass("text-color" + (line + 1));
        $(this).children(".time-line-body").children(".text-point").addClass("text-point" + (line + 1));
        line += 1;
        line = line % 11;
    });
});
//热门企业 更多 使用 addClass() 和 removeClass() 来移除一个类，并添加一个新的类
$(function(){
    $(".con_body-close_one li").click(function(){
        $(this).addClass("con_active").siblings().removeClass("con_active");
    })
    $(".con_body-close_two li").click(function(){
        $(this).addClass("con_active").siblings().removeClass("con_active");
    })
    $(".con_body-close_three li").click(function(){
        $(this).addClass("con_active").siblings().removeClass("con_active");
    });
    $(".con_body-close_four li").click(function(){
        $(this).addClass("con_active").siblings().removeClass("con_active");
    })
    $(".con_control div").click(function(){
        $(this).addClass("con_active8").siblings().removeClass("con_active8");
    })
})
