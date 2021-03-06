//iframe 自适应高度
function initIframeHeight(height){
    var userAgent = navigator.userAgent;
    var iframe = parent.document.getElementById("mainFraim");
    var subdoc = iframe.contentDocument || iframe.contentWindow.document;
    var subbody = subdoc.body;
    var realHeight;
    var sidebarHeight = document.getElementById("sidebar");
    //谷歌浏览器特殊处理
    if(userAgent.indexOf("Chrome") > -1){
        realHeight = subdoc.documentElement.scrollHeight;
    }
    else{
        realHeight = subbody.scrollHeight;
    }
    $(sidebarHeight).height(realHeight);
    if(realHeight < height){
        $(iframe).height(height);
    }
    else{
        $(iframe).height(realHeight);
    }
}