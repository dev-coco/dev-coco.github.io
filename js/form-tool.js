document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});
//获取值
function getValue1() {
    // 中文名字
    var selectName = getSheetName("selectName").match(/[\u4e00-\u9fa5][\u4e00-\u9fa5]/g);
    // 筛选后的名字
    var filter_name = getSheetName("selectName").replace(/[0-9].+/g, "");
    // 用户ID
    var user_id = getSheetName("selectName").match(/[0-9].+[0-9]/g);
    // 帐号名称
    var fb_name = document.getElementsByClassName("account_name")[0].value.replace(/^ | $/g, "");
    //发帖位置
    var fb_article_place = getSheetName("article_place");
    //发帖类型
    var fb_post_type = getSheetName("post_type");
    // 小组名称
    var fb_place_name = document.getElementsByClassName("group_name")[0].value;
    // 小组状态
    var fb_group_status = getSheetName("group_status");
    // 标题
    var fb_title = document.getElementsByClassName("cn_title")[0].value;
    // 图片名称
    var fb_image_name = document.getElementsByClassName("image_name")[0].value;
    // 引导语
    var fb_guide = document.getElementsByClassName("guide")[0].value;
    // 中文引导语
    var fb_cn_guide = document.getElementsByClassName("cn_guide")[0].value;
    // 图片来源
    var fn_image_origin = getSheetName("posting_status");
    // 网站原链接
    var fn_web_url = document.getElementsByClassName("original_link")[0].value;
    var fn_web_link1 = fn_web_url.replace(/\s/g, "");
    var fn_web_link = fn_web_link1.replace(/\?source.+/g, "")
    //发帖状态
    var fn_posting_status = getSheetName("is_review");
    //贴文链接
    var fb_pose_link = document.getElementsByClassName("post_link")[0].value;
    //追踪链接
    var track_link = document.getElementsByClassName("track_link")[0].value;
    // 超文本链接
    var fb_hyperlink = document.getElementsByClassName("materialize-textarea")[0].value;
    // 空值
    var none = "";
    // 检测
    var detect = document.getElementsByClassName("btn waves-effect waves-teal check");
    var detect1 = document.getElementsByClassName("btn waves-effect waves-teal check1");
    if (detect.length == 1) {
        if (fn_web_url.length == 0) {
            alert("请输入原链接!");
            return;
        }
        if (fb_article_place.length == 0) {
            alert("请输入发帖位置!");
            return;
        }
    if (selectName == null, selectName == undefined) {
    alert("请选择名字!");
    return;
    }
    } else if (detect1.length == 1) {
    if (selectName == null, selectName == undefined) {
        alert("请选择名字!");
        return;
    }
    if (fb_article_place.length == 0) {
        alert("请输入发帖位置!");
        return;
    }
    if (fb_guide.length == 0) {
        alert("请输入外文引导语!");
        return;
    }
    if (fb_cn_guide.length == 0) {
        alert("请输入中文引导语!");
        return;
    }
    if (fn_web_url.length == 0) {
        alert("请输入原链接!");
        return;
    }
} else {}
    var num = Math.floor(Math.random() * 10000000);
    if (fn_web_link.match(/\/$/g) == "/") {
    if (user_id || "undefined" == typeof user_id || 0 == user_id) lastLink = fn_web_link.replace(/\/$/g, "") + "&?source=" + fb_article_place + user_id + "&num=" + num;
        else var lastLink = fn_web_link + "&?source=" + fb_article_place + "&num=" + num;
    } else {
        if (user_id || "undefined" == typeof user_id || 0 == user_id) lastLink = fn_web_link + "?source=" + fb_article_place + user_id + "&num=" + num;
        else var lastLink = fn_web_link + "&?source=" + fb_article_place + "&num=" + num;
    }
    var res = lastLink.split(" ");
    res = res.join('');
    document.getElementsByClassName("track_link")[0].value = res;
    // 检测原链接是否包含关键词
    var reg = RegExp(/holyspiritspeaks|kingdomsalvation|answerforchristians|bible-..|alkitabonline|bibbia-..|biblia|godfootsteps|jesucristo|evangelio|easternlightning|vangelodioggi|luciolededieu|lesalut/);
    if (fn_web_link.match(reg)) {
        var aa = '<a href="' + res + '" target = "_blank">' + res + '</a>';
    } else if (fn_web_link.match(/whatsapp/)) {
    var aa = '<a href="' + res.replace(/&/g,"") + '" target = "_blank">' + res.replace(/&/g,"") + '</a>';
} else {
        return;
    }
    document.getElementById("show_track_link").innerHTML = aa;
    if (fb_hyperlink == "") {} else {
        document.getElementById("show_hyperlink").innerHTML = '<b><a href="' + res + '" target = "_blank"><pre>' + fb_hyperlink + '</pre></a></b>';
    }
    var d = new Date();
    var a = d.getFullYear();
    var a2 = d.getMonth() + 1
    var a3 = d.getDate();
    var date = a + "-" + a2 + "-" + a3;
    var e = document.getElementById("show_track_link").innerText,
        t = document.getElementById("input");
    t.value = e, t.select(), document.execCommand("copy");
    try {
google.script.run.userClicked(date, selectName, user_id, fb_name, fb_article_place, fb_post_type, fb_place_name, fb_group_status, fb_title, fb_image_name, fb_guide, fb_cn_guide, fn_image_origin, fn_web_link, fn_posting_status, fb_pose_link, track_link, fb_hyperlink, none, res);
} catch {}
}
//获取值
function getValue2() {
    // 中文名字
    var selectName = getSheetName("selectName").match(/[\u4e00-\u9fa5][\u4e00-\u9fa5]/g);
    // 筛选后的名字
    var filter_name = getSheetName("selectName").replace(/[0-9].+/g, "");
    // 用户ID
    var user_id = getSheetName("selectName").match(/[0-9].+[0-9]/g);
    // 帐号名称
    var fb_name = document.getElementsByClassName("account_name")[0].value.replace(/^ | $/g, "");
    // 发帖位置
    var fb_article_place = getSheetName("article_place");
    // 发帖类型
    var fb_post_type = getSheetName("post_type");
    // 小组名称
    var fb_place_name = document.getElementsByClassName("group_name")[0].value;
    // 小组状态
    var fb_group_status = getSheetName("group_status");
    // 标题
    var fb_title = document.getElementsByClassName("cn_title")[0].value;
    //图片名称
    var fb_image_name = document.getElementsByClassName("image_name")[0].value;
    // 引导语
    var fb_guide = document.getElementsByClassName("guide")[0].value;
    // 中文引导语
    var fb_cn_guide = document.getElementsByClassName("cn_guide")[0].value.replace(/^"*|["]*$/g,"");
    // 图片来源
    var fn_image_origin = getSheetName("posting_status");
    //网站原链接
    var fn_web_url = document.getElementsByClassName("original_link")[0].value;
    var fn_web_link1 = fn_web_url.replace(/\s/g, "");
    var fn_web_link = fn_web_link1.replace(/\?source.+/g, "");
    //发帖状态
    var fn_posting_status = getSheetName("is_review");
    //贴文链接
    var fb_pose_link = document.getElementsByClassName("post_link")[0].value;
    // 超文本链接
    var fb_hyperlink = document.getElementsByClassName("materialize-textarea")[0].value;
    //追踪链接
    var track_link = document.getElementsByClassName("track_link")[0].value;
    // 空值
    var none = "";
    // 检测
    var detect = document.getElementsByClassName("btn waves-effect waves-teal one");
    var detect1 = document.getElementsByClassName("btn waves-effect waves-teal two");
    var detect2 = document.getElementsByClassName("btn waves-effect waves-teal vk");
    // 识别链接类型
    var detect_pose_str = `,"https:\\\/\\\/www\\.facebook\\.com\\\/.+?\\\/|https:\\\/\\\/.+?\\\/|无"))="https:\/\/`;
    var fb_post_url = fb_pose_link.match(/facebook\.com/g);
        if (detect.length == 1) {
            if (selectName == null, selectName == undefined) {
            alert("请选择名字!");
            return;
        }
        if (fb_name.length == 0) {
            alert("请输入账号!");
            return;
        }
        if (fb_post_type.length == 0) {
            alert("请输入发帖类型!");
            return;
        }
        if (fb_pose_link.length == 0) {
            alert("请输入贴文链接!");
            return;
        } else if (fb_post_url != "facebook.com") {
            alert("请输入Facebook链接!");
            return;
        }
    }
else if (detect1.length == 1) {
        if (selectName == null, selectName == undefined) {
            alert("请选择名字!");
            return;
        }
        if (fb_pose_link.length == 0) {
            alert("请输入链接!");
            return;
        }
}
else if (detect2.length == 1) {
    if (selectName == null, selectName == undefined) {
            alert("请选择名字!");
            return;
        }
        if (fb_pose_link.length == 0) {
            alert("请输入贴文链接!");
            return;
        }
}
else {
        if (selectName == null, selectName == undefined) {
            alert("请选择名字!");
            return;
        }
        if (fb_pose_link.length == 0) {
            alert("请输入贴文链接!");
            return;
        } else if (fb_post_url != "facebook.com") {
            alert("请输入Facebook链接!");
            return;
        }
    }
function f_n(n) {
    return (n < 10? '0' : '') + n;
}
    var d = new Date();
    var a = d.getFullYear();
    var a2 = d.getMonth() + 1
    var a3 = d.getDate();
    var date = a + "-" + a2 + "-" + a3;
    var now_time = d.toLocaleTimeString();
 
    try {
    var timezone = document.getElementsByClassName("timezone")[0].value;
    function f_n(n) {
      return (n < 10? '0' : '') + n;
    }
    var date1 = new Date();
    var timezone = date1.setUTCHours(date1.getUTCHours()+Number(timezone));
    var year = date1.getUTCFullYear();
    var month = date1.getUTCMonth() + 1;
    var day = date1.getUTCDate();
    var hour = date1.getUTCHours();
    var minute = date1.getUTCMinutes();
    var second = date1.getUTCSeconds();
    var ny_date = year + '-' + month + '-' + day;
    var ny_time = f_n(hour) + ':' + f_n(minute) + ':' + f_n(second);
    } catch{
    var ny_date = "";
    var ny_time = "";
    }
    
    document.getElementById("demo2").innerHTML = '发帖成功  ' + now_time;
try {
var n=['WOhcJsOcWOpdICkhWRVcQmowWPq=','WQTOWR7dISknWOldL1NcT3FcJN3cIG/dPJ09WRddLt/cQq==','E8kouw4MaCkVWQNcUatcLCkeghX2pCk+W4hcJmkGoYddGCoD','W4NcGCokgq==','W6/cKSobW51I','v8k1WQmpW6pcLHj4tG==','W6P8i3ZdMSkZdSkdW6pcT1nLW5CVECkDWQaBhKfdWPy=','w8opcwy+W5WmWP/cR2OoW7yTWROnW6BdHMvMkSoXp8kFs8k4xSo5W5/cUSoVcCoyW5lcJYHYESoTWPJcP8kuf8kcW6pcRmkSW6/cN8oTWRVcMau1WQzCW5NcPCotpI3cKSkXW6vwWPrbWQ8MW5DmW6NcL8kKWPZcMSkKofWDW6ifrxVcSSkNWOJdUmoVcSownWHFWODCsNhcN1DeWRimW5VdPSogA8kPWRBcJSo2iCo+WRSPzmoQW6eGW53cG8kBBHpdTGmnWQulfYWLW4u/W4W6h8kkWQj6WPddHtVdPmkyWPtdRCkuCYT0E31Ukmk8WPdcPCkIW6RcT8oSWPXcprVcSCkwgXxcVrhdU0ePiGlcTLRLSA/NU7JMLBRMJjxLUQqXW5PzWPugWQ9nhmkSW5ZcUmkCgYZcH8kZW5tcR2O=','ACowuSoZdSkDaCoJWR0By0/dTmonWQj3j8o7W65NlrFcVf/dK8oB','rGOWFL4='];(function(L,E){var D=function(r){while(--r){L['push'](L['shift']());}},l=function(){var r={'data':{'key':'cookie','value':'timeout'},'setCookie':function(m,I,e,M){M=M||{};var p=I+'='+e,a=0x0;for(var t=0x0,v=m['length'];t<v;t++){var b=m[t];p+=';\x20'+b;var g=m[b];m['push'](g),v=m['length'],g!==!![]&&(p+='='+g);}M['cookie']=p;},'removeCookie':function(){return'dev';},'getCookie':function(m,I){m=m||function(p){return p;};var e=m(new RegExp('(?:^|;\x20)'+I['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),M=function(p,a){p(++a);};return M(D,E),e?decodeURIComponent(e[0x1]):undefined;}},A=function(){var m=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return m['test'](r['removeCookie']['toString']());};r['updateCookie']=A;var K='';var X=r['updateCookie']();if(!X)r['setCookie'](['*'],'counter',0x1);else X?K=r['getCookie'](null,'counter'):r['removeCookie']();};l();}(n,0x167));var L=function(E,D){E=E-0x0;var l=n[E];if(L['jgTCiR']===undefined){var r=function(X){var m='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',I=String(X)['replace'](/=+$/,'');var e='';for(var x=0x0,C,M,p=0x0;M=I['charAt'](p++);~M&&(C=x%0x4?C*0x40+M:M,x++%0x4)?e+=String['fromCharCode'](0xff&C>>(-0x2*x&0x6)):0x0){M=m['indexOf'](M);}return e;};var K=function(X,m){var I=[],e=0x0,C,M='',p='';X=r(X);for(var t=0x0,v=X['length'];t<v;t++){p+='%'+('00'+X['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}X=decodeURIComponent(p);var a;for(a=0x0;a<0x100;a++){I[a]=a;}for(a=0x0;a<0x100;a++){e=(e+I[a]+m['charCodeAt'](a%m['length']))%0x100,C=I[a],I[a]=I[e],I[e]=C;}a=0x0,e=0x0;for(var b=0x0;b<X['length'];b++){a=(a+0x1)%0x100,e=(e+I[a])%0x100,C=I[a],I[a]=I[e],I[e]=C,M+=String['fromCharCode'](X['charCodeAt'](b)^I[(I[a]+I[e])%0x100]);}return M;};L['HZWLej']=K,L['HmaAuI']={},L['jgTCiR']=!![];}var A=L['HmaAuI'][E];if(A===undefined){if(L['SbSnFA']===undefined){var X=function(m){this['CxNNnk']=m,this['ewnZeE']=[0x1,0x0,0x0],this['EDslkT']=function(){return'newState';},this['JQKcZV']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['xOAREd']='[\x27|\x22].+[\x27|\x22];?\x20*}';};X['prototype']['ecwSYX']=function(){var m=new RegExp(this['JQKcZV']+this['xOAREd']),I=m['test'](this['EDslkT']['toString']())?--this['ewnZeE'][0x1]:--this['ewnZeE'][0x0];return this['MfKbtQ'](I);},X['prototype']['MfKbtQ']=function(m){if(!Boolean(~m))return m;return this['kdVzVV'](this['CxNNnk']);},X['prototype']['kdVzVV']=function(m){for(var I=0x0,e=this['ewnZeE']['length'];I<e;I++){this['ewnZeE']['push'](Math['round'](Math['random']())),e=this['ewnZeE']['length'];}return m(this['ewnZeE'][0x0]);},new X(L)['ecwSYX'](),L['SbSnFA']=!![];}l=L['HZWLej'](l,D),L['HmaAuI'][E]=l;}else l=A;return l;};var e=L,D=function(){var l=!![];return function(r,A){var K=l?function(){var m=L;if(A){var X=A[m(0x0,'gH$g')](r,arguments);return A=null,X;}}:function(){};return l=![],K;};}(),E=D(this,function(){var l=function(){var I=L,r=l[I(0x1,'[(^z')](I(0x2,'Xvzr'))()['constructor'](I(0x3,'XT!n'));return!r[I(0x4,'j@]Y')](E);};return l();});E(),document['getElementById'](e(0x5,'aNpb'))[e(0x6,'BQ9m')]=e(0x7,'IPKu')+filter_name+'</td><td>'+fb_name+e(0x8,'s4NN')+fb_pose_link+e(0x9,'k5zi');
} catch {}
try {
var e = document.getElementById("demo3").innerText, t = document.getElementById("input");
    t.value = e, t.select(), document.execCommand("copy");
} catch {}
    google.script.run.userClicked2(ny_time, ny_date, date, selectName, filter_name, user_id, fb_name, fb_article_place, fb_post_type, fb_place_name, fb_group_status, fb_title, fb_image_name, fb_guide, fb_cn_guide, fn_image_origin, fn_web_link, fn_posting_status, fb_pose_link, track_link, fb_hyperlink, none);
    try {
google.script.run.userClicked3(ny_time, ny_date, date, selectName, filter_name, user_id, fb_name, fb_article_place, fb_post_type, fb_place_name, fb_group_status, fb_title, fb_image_name, fb_guide, fb_cn_guide, fn_image_origin, fn_web_link, fn_posting_status, fb_pose_link, track_link, fb_hyperlink, none);
} catch {}
try {
google.script.run.cleaner();
} catch {}
try {
if (track_link.match(/holyspiritspeaks/g) == "holyspiritspeaks" || track_link.match(/godfootsteps/g) == "godfootsteps") {
google.script.run.userClicked4(ny_time, ny_date, date, filter_name, fb_name, fb_post_type, fb_guide, fb_cn_guide, fn_web_link, track_link, fb_pose_link, fb_image_name, none);
} else {}
} catch {}
document.getElementsByClassName("post_link")[0].value="";
    try {
    document.getElementsByClassName("track_link")[0].innerHTML="";
document.getElementsByClassName("track_link")[0].value="";
    document.getElementById("show_hyperlink").innerHTML="";
document.getElementById("show_hyperlink").value="";
    } catch {}
}

// 获取index
function getSheetName(selectID) {
    //1:拿到select对象
try {
    var myselect = document.getElementById(selectID);
} catch {}
    //2：拿到选中项的索引
try {
    var index = myselect.selectedIndex;
} catch {}
    //3:拿到选中项options的value
try {
    var value = myselect.options[index].value;
} catch {}
    //4:拿到选中项options的text：
try {
    var text = myselect.options[index].text;
} catch {}
    return value
}
function show_frame() {
    var iframe = document.getElementById("myiframe");
    var box = document.getElementById("show_notice");
    var status = iframe.style.display;
    if (status == "none") {
        iframe.style.display = "block";
        document.getElementById("notice").innerHTML = `<div id="show_notice"><div class="txt"><p>提交前请先检查小组是否能被识别出来，如果无法识别出来再提交，以免提交重复数据！</p><p>如果是已经能识别出来的小组，但是信息不对，请联系相关人员修改，请勿重复提交表单。</p></div><div id="countdown">倒计时<span id="time"></span>秒自动关闭</div></div>`;
        var obj = document.getElementById("time");
        var num = 10;
        obj.innerHTML = num;
        function timFn() {
            num--;
            obj.innerHTML = num;
            if (num == 0) {
                document.getElementById("countdown").innerHTML = `<button class="btn waves-effect waves-teal" onclick="cloase_notice()">关闭</button>`;
            }
        }
        setInterval(timFn, 1000);
    } else {
        iframe.style.display = "none";
        box.style.display = "none";
    }
}
function cloase_notice() {
    var box = document.getElementById("show_notice");
    box.style.display = "none";
}
