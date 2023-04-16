document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

// 小于10补0
function f_n(n) {
    return (n < 10 ? '0' : '') + n;
}

// 识邮箱识别名字
function run() {
    var select_name = document.getElementById('select_name');
    var select_name_str = document.getElementById('select_name_str');
    var select_id = document.getElementsByClassName('select-wrapper')[0];
    try {
        var my_email = document.getElementById('my_email').outerText;
        var email_list = document.getElementById('email').outerText.split(',');
        var arrary = email_list.indexOf(my_email) + 1;
        var account_list = document.getElementById("account_list").outerText;
        var get_account_name = account_list.match(/.+/g)[arrary - 1];
        var set_aacount_name = get_account_name.split(',').map(function(r) {
            return '<option value="' + r + '">' + r + '</option>';
        }).join("");
        document.getElementById('account_name').innerHTML = '<option value="" >=请选择你的账号=</option>' + set_aacount_name;
        var my_name = document.getElementById('select_name').options[arrary].value;
        document.getElementById('select_name').innerHTML = '<option value="' + my_name + '"></option>'
        select_name_str.innerHTML = my_name;
        select_id.setAttribute("class", "hide");
        select_name_str.setAttribute("class", "show");
    } catch {}
}

// 切换类型
function switch_type() {
    var switch_type = document.getElementById("switch_control");
    var post_content = document.getElementById("post_content");
    var create_track_link = document.getElementById("create_track_link");
    var translate = document.getElementById("translate");
    var status = switch_type.className;
    if (status != "show") {
        translate.setAttribute("style", "float:right;");
        switch_type.setAttribute("class", "show");
        post_content.setAttribute("class", "hide");
        create_track_link.setAttribute("onclick", "create_link();");   
    } else {
        switch_type.setAttribute("class", "hide");
        post_content.setAttribute("class", "show");
        create_track_link.setAttribute("onclick", "create();");
        translate.setAttribute("style", "display:none;");
    }
}

// 设置时间
var d = new Date();
var a = d.getFullYear();
var a2 = d.getMonth() + 1
var a3 = d.getDate();
var a4 = d.getHours();
var a5 = d.getMinutes();
var a6 = d.getSeconds();

// 日期 (mm-dd)
var now_date = f_n(a2) + f_n(a3);

// 生成随机数
function getRandom(n, m) {
    var num = Math.floor(Math.random() * (m - n + 1) + n);
    return num;
}

let mes_url = ""
// Messenger链接
function copy_mes_url(x) {
    // 发帖位置
    var fb_post_place = getSheetName("post_place");
    // 个人代码
    var user_id = getSheetName("select_name").match(/[0-9]{3}/g);
    // 判断所需内容是否填全
    if (user_id == null) {
        alert("请选择名字!");
        return;
    }
    if (fb_post_place.length == 0) {
        alert("请输入发帖位置!");
        return;
    }
    var num = getRandom(0, 10000000);
    // 生成链接
    if (x == 1) {
      var mes_str = messenger_url + "?source=" + fb_post_place + user_id + "num=" + num;
    } else {
      var mes_str = messenger_url + fb_post_place + user_id + "-" + now_date;
    }
    // 复制
    copy(mes_str);
    document.getElementById("copy_status").innerHTML = "复制成功";
    // 3秒后清除复制状态
    setTimeout(function() {
        document.getElementById("copy_status").innerHTML = "";
    }, 3000);
    
    return mes_str
}

// 生成链接
function create_link() {
    // 名字
    var select_name = getSheetName("select_name").replace(/[0-9].+/g, "");
    // 发帖位置
    var fb_post_place = getSheetName("post_place");
    // 个人代码
    var user_id = getSheetName("select_name").match(/[0-9]{3}/g);
    try{
        var other_code = document.getElementById('other_code').value
    } catch {
        var other_code = ''
    }
    // 原链接
    var original_link = document.getElementsByClassName("original_link")[0].value.replace(/\s/g, "").replace(/\?source.+/g, "");
    // 随机数，给链接用
    var num = getRandom(0, 10000000);
    // 判断所需内容是否填全
    if (select_name == "") {
        alert("请选择名字!");
        return;
    }
    if (fb_post_place.length == 0) {
        alert("请输入发帖位置!");
        return;
    }
    if (original_link.length == 0) {
        alert("请输入原链接!");
        return;
    }
    var reg = RegExp(/holyspiritspeaks|kingdomsalvation|answerforchristians|bible-..|alkitabonline|bibbia-..|biblia|godfootsteps|jesucristo|evangelio|easternlightning|vangelodioggi|luciolededieu|lesalut|altervista|m\.me\//);
    if (original_link.match(reg)) {
    
    if(original_link.indexOf('m.me/') > -1) {
        var new_link = copy_mes_url(1);
        mes_url = new_link
    } else {
        var new_link = original_link + "?source=" + fb_post_place + user_id + "&num=" + num + other_code;
    }


        // 复制新链接
        copy(new_link);
        document.getElementById("copy_status").innerHTML = "复制成功";
        // 3秒后清除复制状态
        setTimeout(function() {
            document.getElementById("copy_status").innerHTML = "";
        }, 3000);
        // 追踪链接输出
        document.getElementsByClassName("track_link")[0].value = new_link;
        document.getElementsByClassName("track_link")[0].innerHTML = new_link;
    } else {
        alert("原链接错误，无法生成！");
        return;
    }   
}

// 翻译
function translate_to_cn() {
var guide = document.getElementsByClassName("guide")[0].value;
if (guide.length == 0) {
        alert("请输入外文引导语!");
        return;
    }
	var other_guide = guide.replace(/(ht)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?/g,"");
	var clean = document.getElementsByClassName("cn_guide")[0].value = "";
	var other_guide_arr = encodeURIComponent(other_guide).replace(/\.|,|!/g, "").match(/.{7932}/g);
	if (other_guide_arr == null) {
		var other_guide_arr = encodeURIComponent(other_guide).replace(/\.|,|!/g, "").match(/.+/g);
	}
	for (var i = 0; i < other_guide_arr.length; i++) {
		(async function(i) {
			let response = await fetch("https://translate.google.com/translate_a/single?client=gtx&dt=t&dj=1&ie=UTF-8&sl=auto&tl=zh_CN&q=" + other_guide_arr[0].replace(/%$/g, ""))
			let text = await response.text();
			var get_data = text.match(/(?<=trans\":\").*?(?=\",\"orig)/g);
			for (var i = 0; i < get_data.length; i++) {
				var cn_guide = document.getElementsByClassName("cn_guide")[0].value += get_data[i];
			}
		})(i);
	}
}

// 生成内容
function create(x) {
    try {
        // 发帖内容，处理掉前后引号
        var post_str = document.getElementById("post_content").value.replace(/^"|"$/g, "");
        // 名字
        var select_name = getSheetName("select_name").replace(/[0-9].+/g, "");
        // 发帖位置
        var fb_post_place = getSheetName("post_place");
        // 个人代码
        var user_id = getSheetName("select_name").match(/[0-9]{3}/g);
        try{
            var other_code = document.getElementById('other_code').value
        } catch {
            var other_code = ''
        }
        // 原链接
        try {
            var original_link = post_str.match(/https:.*?(?=@@@)/g)[0];
        } catch {
            var original_link = "";
        }
        // 随机数，给链接用
        var num = getRandom(0, 10000000);
        // 判断所需内容是否填全
        if (fb_post_place.length == 0) {
            alert("请输入发帖位置!");
            return;
        }
        if (select_name == "") {
            alert("请选择名字!");
            return;
        }
        // 加emoji
        post_str = post_str.replace(/#emoji#/g, emoji[getRandom(0, emoji.length)]);
        // 链接加代码
        post_str = post_str.replace(/@@@/g, "?source=" + fb_post_place + user_id + "&num=" + num + other_code);
        // 替换Messenger链接
        console.log('x',x)
        if (x == 1) {
          mes_url = messenger_url + "?source=" + fb_post_place + user_id + "num=" + num
          post_str = post_str.replace(/#Messenger#/i, mes_url);
          console.log('mes_url',mes_url)
        } else {
          post_str = post_str.replace(/#Messenger#/i, messenger_url + fb_post_place + user_id + "-" + now_date);
        }
        // 替换WhatsApp链接
        post_str = post_str.replace(/#WhatsApp#/i, whatsapp_url);
        // 中文引导语
        var fb_cn_guide = post_str.match(/(?<=###).*?(?=###)/g)[0];
        // 内容去掉中文引导语
        post_str = post_str.replace(/###.+/g, "");
        // 外文引导语
        var fb_guide = post_str.replace(/\n/g, "").match(/(?<=#\*#).*?(?=#\*#)/g)[0];
        post_str = post_str.replace(/#\*#/g, "");
        // 处理多个引号
        post_str = post_str.replace(/"{2,}/g, "\"");
        // 标签
        try {
            var tags1random = getRandom(0, tags1.length);
            var tag1 = tags1[tags1random];
        } catch {
            var tag1 = "";
        }
        try {
            var tags2random = getRandom(0, tags2.length);
            var tag2 = tags2[tags2random];
        } catch {
            var tag2 = "";
        }
        try {
            var tags3random = getRandom(0, tags3.length);
            var tag3 = tags3[tags3random];
        } catch {
            var tag3 = "";
        }
        post_str = post_str + tag1 + tag2 + tag3;
        // 复制
        copy(post_str);
        console.log(post_str);
        document.getElementById("copy_status").innerHTML = "复制成功";
        // 3秒后清除复制状态
        setTimeout(function() {
            document.getElementById("copy_status").innerHTML = "";
        }, 3000);
        // 原链接输出
        document.getElementsByClassName("original_link")[0].value = original_link;
        // 追踪链接输出
        document.getElementsByClassName("track_link")[0].value = original_link + "?source=" + fb_post_place + user_id + "&num=" + num + other_code;
        document.getElementsByClassName("track_link")[0].innerHTML = original_link + "?source=" + fb_post_place + user_id + "&num=" + num + other_code;
        // 中文引导语输出
        document.getElementsByClassName("cn_guide")[0].value = fb_cn_guide;
        // 引导语输出
        document.getElementsByClassName("guide")[0].value = fb_guide;
    } catch (err) {
        console.log(err);
        alert("似乎内容有问题，请检查内容");
    }
}

// 填表
function fill_form() {
    // 中文名字
    var select_name = getSheetName("select_name").replace(/[0-9].+/g, "");
    // 帐号名称
    var fb_name = document.getElementsByClassName("account_name")[0].value.replace(/^ | $/g, "");
    // 发帖位置
    var fb_post_place = getSheetName("post_place");
    // 发帖类型
    var fb_post_type = getSheetName("post_type");
    //图片名称
    var fb_image_name = document.getElementsByClassName("image_name")[0].value;
    // 引导语
    var fb_guide = document.getElementsByClassName("guide")[0].value;
    // 中文引导语
    var fb_cn_guide = document.getElementsByClassName("cn_guide")[0].value.replace(/^"*|"*$/g, "");
    // 图片来源
    var fn_image_origin = document.getElementById('posting_status').value;
    // 网站原链接
    var fn_web_url = document.getElementsByClassName("original_link")[0].value.replace(/\s/g, "").replace(/\?source.+/g, "");
    // 贴文链接
    var fb_pose_link = document.getElementsByClassName("post_link")[0].value.replace(/\?__.+/g,"");
    // 追踪链接
    var track_link = document.getElementsByClassName("track_link")[0].value;
    // 空值
    var none = "";
    // 检测
    var detect = document.getElementsByClassName("btn waves-effect waves-teal check");
    var detect1 = document.getElementsByClassName("btn waves-effect waves-teal check1");
    var detect_image_name = RegExp(/\u7f29\u7565|\u000d\u000a|\u7f8e\u5de5|\u000d\u000a|\u81ea\u5e26|\u000d\u000a|\u7f51\u7edc|\u000d\u000a|\u7f29\u7387|\u000d\u000a|\u62fc\u56fe|\u000d\u000a|\u8f6c\u53d1|\u000d\u000a|\u4e13\u4e1a|\u000d\u000a|\u4e13\u9875|\u000d\u000a|\u8f6c\u53d1|\u000d\u000a|\u56fe\u5e93|\u000d\u000a|\u000d\u000a|\u7e2e\u7565|\u000d\u000a|\u7f8e\u5de5|\u000d\u000a|\u81ea\u5e36|\u000d\u000a|\u7db2\u7d61|\u000d\u000a|\u7e2e\u7387|\u000d\u000a|\u62fc\u5716|\u000d\u000a|\u8f49\u767c|\u000d\u000a|\u5c08\u696d|\u000d\u000a|\u5c08\u9801|\u000d\u000a|\u8f49\u767c|\u000d\u000a|\u5716\u5eab|facebook|drive/);
    var url_reg = RegExp(/facebook\.com|vk\.com|ok\.ru/);
    if (detect.length == 1) {
        if (select_name == "") {
            alert("请选择名字!");
            return;
        }
        if (fb_name.length == 0) {
            alert("请选择账号!");
            return;
        }
        if (fb_post_type.length == 0) {
            alert("请输入发帖类型!");
            return;
        }
        var post_str = document.getElementById("post_content").value;
        if (post_str.length != 0) {
            if (!track_link) {
                alert("请生成追踪链接!");
                return;
            }
        }
        if (fb_pose_link.length == 0) {
            alert("请输入贴文链接!");
            return;
        } else if (fb_pose_link.match(url_reg)) {} else {
            alert("请输入正确帖文链接!");
            return;
        }
        if (fb_image_name) {
            if (fb_image_name.match(detect_image_name)) {
                alert("请输入正确的图片名称!");
                return;
            } else {}
        }
    }
    else if (detect1.length == 1) {
        if (select_name == "") {
            alert("请选择名字!");
            return;
        }
        if (fb_post_type.length == 0) {
            alert("请输入发帖类型!");
            return;
        }
        var post_str = document.getElementById("post_content").value;
        if (post_str.length != 0) {
            if (!track_link) {
                alert("请生成追踪链接!");
                return;
            }
        }
        if (fb_pose_link.length == 0) {
            alert("请输入小组名字!");
            return;
        }
        if (fb_image_name) {
            if (fb_image_name.match(detect_image_name)) {
                alert("请输入正确的图片名称!");
                return;
            } else {}
        }  
    }
	// 设置时间
var d = new Date();
var a = d.getFullYear();
var a2 = d.getMonth() + 1
var a3 = d.getDate();
var a4 = d.getHours();
var a5 = d.getMinutes();
var a6 = d.getSeconds();

// 日期 (mm-dd)
var now_date = f_n(a2) + f_n(a3);

    // 日期 (yyyy-m-d)
    var date = a + "-" + a2 + "-" + a3;
    // 时间 (hh:mm:ss)
    var now_time = f_n(a4) + ":" + f_n(a5) + ":" + f_n(a6);
    try {
        // 自定义时区
        var timezone = document.getElementsByClassName("timezone")[0].value;
        var timezone = d.setUTCHours(d.getUTCHours() + Number(timezone));
        var year = d.getUTCFullYear();
        var month = d.getUTCMonth() + 1;
        var day = d.getUTCDate();
        var hour = d.getUTCHours();
        var minute = d.getUTCMinutes();
        var second = d.getUTCSeconds();
        var tz_date = year + '-' + month + '-' + day;
        var tz_time = f_n(hour) + ':' + f_n(minute) + ':' + f_n(second);
    } catch {
        var tz_date = "";
        var tz_time = "";
    }
    document.getElementById("fill_form_status").innerHTML = '发帖成功  ' + now_time;
    google.script.run.userClicked2(tz_time, tz_date, now_time, date, select_name, fb_name, fb_post_place, fb_post_type, fb_image_name, fb_guide, fb_cn_guide, fn_image_origin, fn_web_url, fb_pose_link, track_link, none);
    try {
    google.script.run.userClickedX(tz_time, tz_date, now_time, date, select_name, fb_name, fb_post_place, fb_post_type, fb_image_name, fb_guide, fb_cn_guide, fn_image_origin, fn_web_url, fb_pose_link, track_link, mes_url, none);
    } catch{}
    try {
        google.script.run.userClicked3(tz_time, tz_date, now_time, date, select_name, fb_name, fb_post_place, fb_post_type, fb_image_name, fb_guide, fb_cn_guide, fn_image_origin, fn_web_url, fb_pose_link, track_link, none);
    } catch {}
    try {
        var reg = RegExp(/holyspiritspeaks|kingdomsalvation|answerforchristians|bible-..|alkitabonline|bibbia-..|biblia|godfootsteps|jesucristo|evangelio|easternlightning|vangelodioggi|luciolededieu|lesalut/);
        if (track_link.match(reg)) {
            google.script.run.userClicked4(tz_time, tz_date, now_time, date, select_name, fb_name, fb_post_place, fb_post_type, fb_image_name, fb_guide, fb_cn_guide, fn_image_origin, fn_web_url, fb_pose_link, track_link, none);
        } else {}
    } catch {}
	// test
	  try {
        var reg = RegExp(/altervista/);
        if (track_link.match(reg)) {
            google.script.run.userClicked5(tz_time, tz_date, now_time, date, select_name, fb_name, fb_post_place, fb_post_type, fb_image_name, fb_guide, fb_cn_guide, fn_image_origin, fn_web_url, fb_pose_link, track_link, none);
        } else {}
    } catch {}
    // 复制额外的字符串
    if (document.getElementById("extra_str")) {
        var extra_str = select_name + `\t` + fb_name + `\t` + `=VLOOKUP((REGEXEXTRACT(OFFSET(INDIRECT(SUBSTITUTE(ADDRESS(ROW(),COLUMN()),"$","")),0,+1),"groups\\/.*?\\/|messages\\/t\\/|\\/posts\\/|photo\\.php|permalink\\.php|watchparty")),'小组数据库'!B:D,2,0)\t` + fb_pose_link;
        copy(extra_str);
    }
    // 清空内容
    document.getElementsByClassName("post_link")[0].value = "";
    document.getElementsByClassName("track_link")[0].value = "";
    mes_url = "";
}

// 复制
function copy(str) {
    var t = document.getElementById("input");
    t.value = str, t.select(), document.execCommand("copy");
}

// 获取index
function getSheetName(selectID) {
    //1:拿到select对象
    var myselect = document.getElementById(selectID);
    //2：拿到选中项的索引
    var index = myselect.selectedIndex;
    //3:拿到选中项options的value
    var value = myselect.options[index].value;
    //4:拿到选中项options的text：
    var text = myselect.options[index].text;
    return value
}

// 根据名字获取账号
function get_account_name() {
    // 选中项索引
    var get_index = document.getElementById("select_name").selectedIndex;
    // 获取账号名字文本
    var account_list_str = document.getElementById("account_list").outerText;
    // 获取对应行的账号
    var get_data = account_list_str.match(/.+/g)[get_index - 1];
    // 遍历数组
    var result_array = get_data.split(',').map(function(r) {
        return '<option value="' + r + '">' + r + '</option>';
    }).join("");
    document.getElementById('account_name').innerHTML = '<option value="">=请选择你的账号=</option>' + result_array;
}

// 表单
function show_frame() {
    var iframe = document.getElementById("myiframe");
    var box = document.getElementById("show_notice");
    var status = iframe.style.display;
    if (status == "none") {
        iframe.style.display = "block";
        // 弹出窗口
        document.getElementById("notice").innerHTML = `<div id="show_notice"><div class="txt"><p>提交前请先检查小组是否能被识别出来，如果无法识别出来再提交，以免提交重复数据！</p><p>如果是已经能识别出来的小组，但是信息不对，请联系相关人员修改，请勿重复提交表单。</p></div><div id="countdown">倒计时<span id="time"></span>秒自动关闭</div></div>`;
        var obj = document.getElementById("time");
        var num = 10;
        obj.innerHTML = num;

        function timFn() {
            num--;
            obj.innerHTML = num;
            if (num == 0) {
                // 计时结束显示按钮
                document.getElementById("countdown").innerHTML = `<button class="btn waves-effect waves-teal" onclick="cloase_notice()">关闭</button>`;
            }
        }
        setInterval(timFn, 1000);
    } else {
        iframe.style.display = "none";
        box.style.display = "none";
    }
}

// 隐藏表单
function cloase_notice() {
    var box = document.getElementById("show_notice");
    box.style.display = "none";
}