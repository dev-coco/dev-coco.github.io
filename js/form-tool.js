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
        var user_id = getSheetName("selectName").match(/[0-9][0-9]/g);
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
        var fn_web_link = fn_web_link1.replace(/\?source.+/g, "");
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
        if (detect.length == 1) {
            if (fn_web_url.length == 0) {
                alert("请输入原链接!");
                return;
            }
            if (fb_article_place.length == 0) {
                alert("请输入发帖位置!");
                return;
            }
            if (fb_title.length == 0) {
                alert("请输入中文标题!");
                return;
            }
        } else {}
        var num = Math.floor(Math.random() * 10000000);
        if (user_id || "undefined" == typeof user_id || 0 == user_id) lastLink = fn_web_link + "?source=" + fb_article_place + user_id + "&num=" + num;
        else var lastLink = fn_web_link + "?source=" + fb_article_place + "&num=" + num;
        var res = lastLink.split(" ");
        res = res.join('');
        document.getElementsByClassName("track_link")[0].value = res;
        // 检测原链接是否包含关键词
        var reg = RegExp(/holyspiritspeaks/);
        if (fn_web_link.match(reg)) {
            var aa = '<a href="' + res + '" target = "_blank">' + res + '</a>';
        } else {
            var aa = "";
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
        google.script.run.userClicked(date, selectName, user_id, fb_name, fb_article_place, fb_post_type, fb_place_name, fb_group_status, fb_title, fb_image_name, fb_guide, fb_cn_guide, fn_image_origin, fn_web_link, fn_posting_status, fb_pose_link, track_link, fb_hyperlink, none, res);
    }
    //获取值
    function getValue2() {
        // 中文名字
        var selectName = getSheetName("selectName").match(/[\u4e00-\u9fa5][\u4e00-\u9fa5]/g);
        // 筛选后的名字
        var filter_name = getSheetName("selectName").replace(/[0-9].+/g, "");
        // 用户ID
        var user_id = getSheetName("selectName").match(/[0-9][0-9]/g);
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
        var fb_cn_guide = document.getElementsByClassName("cn_guide")[0].value;
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
        } else {
            if (selectName == null, selectName == undefined) {
                alert("请选择名字!");
                return;
            }
        }
        var fb_post_url = fb_pose_link.match(/facebook\.com/g);
        if (fb_pose_link.length == 0) {
            alert("请输入贴文链接!");
            return;
        } else if (fb_post_url != "facebook.com") {
            alert("请输入Facebook链接!");
            return;
        }
        var d = new Date();
        var a = d.getFullYear();
        var a2 = d.getMonth() + 1
        var a3 = d.getDate();
        var date = a + "-" + a2 + "-" + a3;
        var now_time = d.toLocaleTimeString();
        document.getElementById("demo2").innerHTML = '发帖成功  ' + now_time;
        google.script.run.userClicked2(date, selectName, filter_name, user_id, fb_name, fb_article_place, fb_post_type, fb_place_name, fb_group_status, fb_title, fb_image_name, fb_guide, fb_cn_guide, fn_image_origin, fn_web_link, fn_posting_status, fb_pose_link, track_link, fb_hyperlink, none);
        google.script.run.userClicked3(date, selectName, filter_name, user_id, fb_name, fb_article_place, fb_post_type, fb_place_name, fb_group_status, fb_title, fb_image_name, fb_guide, fb_cn_guide, fn_image_origin, fn_web_link, fn_posting_status, fb_pose_link, track_link, fb_hyperlink, none);
        google.script.run.cleaner();
        $(".post_link").val('');
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
