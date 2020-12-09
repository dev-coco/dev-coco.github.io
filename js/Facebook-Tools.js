// 邀请在线好友1-3s
function invite_online_fast() {
    var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
    var online = iframeDocument.getElementsByClassName('_71ua');
    var inputs = iframeDocument.getElementsByClassName('_71u9 _4jy0 _4jy3 _517h _51sy _42ft');
        function getRandom (n, m) {
        var num = Math.floor(Math.random() * (m - n + 1) + n)
        return num
    }
    var ramdom_number = getRandom(1000, 3000)
    alert("在线用户："+online.length);
    for (var i=0;i<online.length;i++){
            (function(i) {
            setTimeout(function() {
            inputs[i].click();
            }, ramdom_number * i);
        })(i);
    }
}
// 邀请在线好友5-8s
function invite_online_normal() {
    var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
    var online = iframeDocument.getElementsByClassName('_71ua');
    var inputs = iframeDocument.getElementsByClassName('_71u9 _4jy0 _4jy3 _517h _51sy _42ft');
        function getRandom (n, m) {
        var num = Math.floor(Math.random() * (m - n + 1) + n)
        return num
    }
    var ramdom_number = getRandom(5000, 8000)
    alert("在线用户："+online.length);
    for (var i=0;i<online.length;i++){
            (function(i) {
            setTimeout(function() {
            inputs[i].click();
            }, ramdom_number * i);
        })(i);
    }
}
// 邀请成员1-3s
function invite_fast() {
    var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
    var inputs = iframeDocument.getElementsByClassName('_71u9 _4jy0 _4jy3 _517h _51sy _42ft');
        function getRandom (n, m) {
        var num = Math.floor(Math.random() * (m - n + 1) + n)
        return num
    }
    var ramdom_number = getRandom(1000, 3000)
    for (var i=0;i<inputs.length;i++){
            (function(i) {
            setTimeout(function() {
            inputs[i].click();
            }, ramdom_number * i);
        })(i);
    }
}
// 邀请成员5-8s
function invite_normal() {
    var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
    var inputs = iframeDocument.getElementsByClassName('_71u9 _4jy0 _4jy3 _517h _51sy _42ft');
        function getRandom (n, m) {
        var num = Math.floor(Math.random() * (m - n + 1) + n)
        return num
    }
    var ramdom_number = getRandom(5000, 8000)
    for (var i=0;i<inputs.length;i++){
            (function(i) {
            setTimeout(function() {
            inputs[i].click();
            }, ramdom_number * i);
        })(i);
    }
}
// 开包厢节省CPU
function CPU_save() {
    var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
    var video_iframe = iframeDocument.getElementsByClassName("_1gm- _114e")[0];
    try {
        var status = video_iframe.style.display;
    } catch {
        video_iframe.style.display = "none";
    }
    if (status == "none") {
        video_iframe.style.display = "block";
        document.getElementById("CPU_save").innerHTML="性能优化(开启)";
    } else {
        video_iframe.style.display = "none";
        document.getElementById("CPU_save").innerHTML="性能优化(关闭)";
    }
}
// 统计留言数
function comment_count() {
    var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
    var comment = iframeDocument.getElementsByClassName("_3b-9");
    var comment_num = comment.length-1;
    document.getElementById("comment_count").innerHTML="当前评论："+comment_num;
}
