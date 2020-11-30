function generate_code() {
// 选择项目
var check_selectName = document.getElementById("selectName").checked;
var check_account_name = document.getElementById("account_name").checked;
var check_article_place = document.getElementById("article_place").checked;
var check_post_type = document.getElementById("post_type").checked;
var check_group_name = document.getElementById("group_name").checked;
var check_group_status = document.getElementById("group_status").checked;
var check_cn_title = document.getElementById("cn_title").checked;
var check_image_name = document.getElementById("image_name").checked;
var check_posting_status = document.getElementById("posting_status").checked;
var check_guide = document.getElementById("guide").checked;
var check_cn_guide = document.getElementById("cn_guide").checked;
var check_original_link = document.getElementById("original_link").checked;
var check_is_review = document.getElementById("is_review").checked;
var check_materialize_textarea = document.getElementById("materialize_textarea").checked;
var check_post_link = document.getElementById("post_link").checked;
// 必填项目
var check_required_selectName = document.getElementById("required_selectName").checked;
var check_required_account_name = document.getElementById("required_account_name").checked;
var check_required_article_place = document.getElementById("required_article_place").checked;
var check_required_post_type = document.getElementById("required_post_type").checked;
var check_required_group_name = document.getElementById("required_group_name").checked;
var check_required_group_status = document.getElementById("required_group_status").checked;
var check_required_cn_title = document.getElementById("required_cn_title").checked;
var check_required_image_name = document.getElementById("required_image_name").checked;
var check_required_posting_status = document.getElementById("required_posting_status").checked;
var check_required_guide = document.getElementById("required_guide").checked;
var check_required_cn_guide = document.getElementById("required_cn_guide").checked;
var check_required_original_link = document.getElementById("required_original_link").checked;
var check_required_is_review = document.getElementById("required_is_review").checked;
var check_required_materialize_textarea = document.getElementById("required_materialize_textarea").checked;
var check_required_post_link = document.getElementById("required_post_link").checked;
// 其他项目
var check_other_close_alert = document.getElementById("other_close_alert").checked;
var check_other_auto_complete = document.getElementById("other_auto_complete").checked;
var check_other_update = document.getElementById("other_update").checked;

if (check_other_close_alert == true || check_other_auto_complete == true || check_other_update == true) {
    var other_code = `&lt;?!= include(&quot;main-js&quot;); ?&gt;`;
}
else {
    var other_code = ``;
}
// 检测选择项目
if (check_selectName == true) {
var hide_selectName = ``;
var hide_class_selectName = `input-field col s6`;
}
else {
var hide_selectName = `style=&quot;visibility: hidden;height:0px;&quot;`;
var hide_class_selectName = ``;
}
if (check_account_name == true) {
var hide_account_name = ``;
var hide_class_account_name = `input-field col s6`;
}
else {
var hide_account_name = `style=&quot;visibility: hidden;height:0px;&quot;`;
var hide_class_account_name = ``;
}
if (check_article_place == true) {
var hide_article_place = ``;
var hide_class_article_place = `input-field col s6`;
}
else {
var hide_article_place = `style=&quot;visibility: hidden;height:0px;&quot;`;
var hide_class_article_place = ``;
}
if (check_post_type == true) {
var hide_post_type = ``;
var hide_class_post_type = `input-field col s6`;
}
else {
var hide_post_type = `style=&quot;visibility: hidden;height:0px;&quot;`;
var hide_class_post_type = ``;
}
if (check_group_name == true) {
var hide_group_name = ``;
var hide_class_group_name = `input-field col s6`;
}
else {
var hide_group_name = `style=&quot;visibility: hidden;height:0px;&quot;`;
var hide_class_group_name = ``;
}
if (check_group_status == true) {
var hide_group_status = ``;
var hide_class_group_status = `input-field col s6`;
}
else {
var hide_group_status = `style=&quot;visibility: hidden;height:0px;&quot;`;
var hide_class_group_status = ``;
}
if (check_cn_title == true) {
var hide_cn_title = ``;
var hide_class_cn_title = `input-field col s6`;
}
else {
var hide_cn_title = `style=&quot;visibility: hidden;height:0px;&quot;`;
var hide_class_cn_title = ``;
}
if (check_image_name == true) {
var hide_image_name = ``;
var hide_class_image_name = `input-field col s6`;
}
else {
var hide_image_name = `style=&quot;visibility: hidden;height:0px;&quot;`;
var hide_class_image_name = ``;
}
if (check_posting_status == true) {
var hide_posting_status = ``;
var hide_class_posting_status = `input-field col s6`;
}
else {
var hide_posting_status = `style=&quot;visibility: hidden;height:0px;&quot;`;
var hide_class_posting_status = ``;
}
if (check_guide == true) {
var hide_guide = ``;
var hide_class_guide = `input-field col s6`;
}
else {
var hide_guide = `style=&quot;visibility: hidden;height:0px;&quot;`;
var hide_class_guide = ``;
}
if (check_cn_guide == true) {
var hide_cn_guide = ``;
var hide_class_cn_guide = `input-field col s6`;
}
else {
var hide_cn_guide = `style=&quot;visibility: hidden;height:0px;&quot;`;
var hide_class_cn_guide = ``;
}
if (check_original_link == true) {
var hide_original_link = ``;
var hide_class_original_link = `input-field col s6`;
}
else {
var hide_original_link = `style=&quot;visibility: hidden;height:0px;&quot;`;
var hide_class_original_link = ``;
}
if (check_is_review == true) {
var hide_is_review = ``;
var hide_class_is_review = `input-field col s6`;
}
else {
var hide_is_review = `style=&quot;visibility: hidden;height:0px;&quot;`;
var hide_class_is_review = ``;
}
if (check_materialize_textarea == true) {
var hide_materialize_textarea = ``;
var hide_class_materialize_textarea = `input-field col s6`;
}
else {
var hide_materialize_textarea = `style=&quot;visibility: hidden;height:0px;&quot;`;
var hide_class_materialize_textarea = ``;
}
if (check_post_link == true) {
var hide_post_link = ``;
var hide_class_post_link = `input-field col s6`;
}
else {
var hide_post_link = `style=&quot;visibility: hidden;height:0px;&quot;`;
var hide_class_post_link = ``;
}
// 检测必填项目
if (check_required_selectName == true) {
var show_required_selectName = `&lt;span style=&quot;color:red;&quot;&gt;* &lt;/span&gt;`;
}
else {
var show_required_selectName = ``;
}
if (check_required_account_name == true) {
var show_required_account_name = `&lt;span style=&quot;color:red;&quot;&gt;* &lt;/span&gt;`;
}
else {
var show_required_account_name = ``;
}
if (check_required_article_place == true) {
var show_required_article_place = `&lt;span style=&quot;color:red;&quot;&gt;* &lt;/span&gt;`;
}
else {
var show_required_article_place = ``;
}
if (check_required_post_type == true) {
var show_required_post_type = `&lt;span style=&quot;color:red;&quot;&gt;* &lt;/span&gt;`;
}
else {
var show_required_post_type = ``;
}
if (check_required_group_name == true) {
var show_required_group_name = `&lt;span style=&quot;color:red;&quot;&gt;* &lt;/span&gt;`;
}
else {
var show_required_group_name = ``;
}
if (check_required_group_status == true) {
var show_required_group_status = `&lt;span style=&quot;color:red;&quot;&gt;* &lt;/span&gt;`;
}
else {
var show_required_group_status = ``;
}
if (check_required_cn_title == true) {
var show_required_cn_title = `&lt;span style=&quot;color:red;&quot;&gt;* &lt;/span&gt;`;
}
else {
var show_required_cn_title = ``;
}
if (check_required_image_name == true) {
var show_required_image_name = `&lt;span style=&quot;color:red;&quot;&gt;* &lt;/span&gt;`;
}
else {
var show_required_image_name = ``;
}
if (check_required_posting_status == true) {
var show_required_posting_status = `&lt;span style=&quot;color:red;&quot;&gt;* &lt;/span&gt;`;
}
else {
var show_required_posting_status = ``;
}
if (check_required_guide == true) {
var show_required_guide = `&lt;span style=&quot;color:red;&quot;&gt;* &lt;/span&gt;`;
}
else {
var show_required_guide = ``;
}
if (check_required_cn_guide == true) {
var show_required_cn_guide = `&lt;span style=&quot;color:red;&quot;&gt;* &lt;/span&gt;`;
}
else {
var show_required_cn_guide = ``;
}
if (check_required_original_link == true) {
var show_required_original_link = `&lt;span style=&quot;color:red;&quot;&gt;* &lt;/span&gt;`;
}
else {
var show_required_original_link = ``;
}
if (check_required_is_review == true) {
var show_required_is_review = `&lt;span style=&quot;color:red;&quot;&gt;* &lt;/span&gt;`;
}
else {
var show_required_is_review = ``;
}
if (check_required_materialize_textarea == true) {
var show_required_materialize_textarea = `&lt;span style=&quot;color:red;&quot;&gt;* &lt;/span&gt;`;
}
else {
var show_required_materialize_textarea = ``;
}
if (check_required_post_link == true) {
var show_required_post_link = `&lt;span style=&quot;color:red;&quot;&gt;* &lt;/span&gt;`;
}
else {
var show_required_post_link = ``;
}
document.getElementById("generate_form_code").innerHTML = `<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;/&gt;
      &lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css&quot;&gt;
      &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js&quot;&gt;&lt;/script&gt;
      &lt;script src=&quot;https://dev-coco.github.io/js/form-tool.js&quot;&gt;&lt;/script&gt;
      &lt;link rel=&quot;stylesheet&quot; href=&quot;https://dev-coco.github.io/css/form-tool.css&quot;&gt;
      &lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css&quot;&gt;
      &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js&quot;&gt;&lt;/script&gt;
      &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js&quot;&gt;&lt;/script&gt;
      `+other_code+`
   &lt;/head&gt;
   &lt;body class=&quot;night-mode&quot; background = &quot;&quot;&gt;
      &lt;div  class=&quot;night-dark&quot; style=&quot; width:950px;margin:0 auto;border:solid 1px ;padding:5px;&quot;&gt;
         &lt;h3 style=&quot;text-align:center;&quot; class=&quot;title&quot;&gt;发帖登记工具&lt;/h3&gt;
         &lt;div class = &quot;row&quot;&gt;
            &lt;!-- 选择名字 --&gt;
            &lt;div class=&quot;`+hide_class_selectName+`&quot; `+hide_selectName+`&gt;
               &lt;select class='headSelect' id='selectName' onchange=&quot;getSheetName(selectName);&quot;&gt;
                  &lt;option value='' &gt;=请选择你的名字=&lt;/option&gt;
                  &lt;?!= namelist ?&gt;
               &lt;/select&gt;
               &lt;label style=&quot;font-size:15px;&quot; class=&quot;title&quot; &gt;`+show_required_selectName+`请选择你的名字&lt;/label&gt;
            &lt;/div&gt;
            &lt;!-- 帐号名称 --&gt;
            &lt;div class=&quot;`+hide_class_account_name+`&quot; `+hide_account_name+`&gt;
               &lt;input placeholder=&quot;请输入帐号名称&quot; id=&quot;username&quot; type=&quot;text&quot; class=&quot;account_name&quot;&gt;
               &lt;label style=&quot;font-size:18px;&quot;&gt;`+show_required_account_name+`帐号名称&lt;/label&gt;
            &lt;/div&gt;
            &lt;!-- 发帖位置 --&gt;
            &lt;div class=&quot;`+hide_class_article_place+`&quot; `+hide_article_place+`&gt;
               &lt;select class='headSelect' id='article_place' onchange = &quot;getSheetName(article_place);&quot; &gt;
                  &lt;option value=''&gt;=请选择发帖位置=&lt;/option&gt;
                  &lt;?!= article_place ?&gt;
               &lt;/select&gt;
               &lt;label style=&quot;font-size:15px;&quot;&gt;
                  `+show_required_article_place+`请选择发帖位置
                  &lt;div class=&quot;dropdown1&quot; style=&quot;float:right;&quot;&gt;
                     &lt;svg width=&quot;1em&quot; height=&quot;1em&quot; viewBox=&quot;0 0 16 16&quot; class=&quot;bi bi-question-circle-fill&quot; fill=&quot;currentColor&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;
                        &lt;path fill-rule=&quot;evenodd&quot; d=&quot;M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z&quot;/&gt;
                     &lt;/svg&gt;
                     &lt;div class=&quot;dropdown1-content&quot;&gt;
                        &lt;table class=&quot;striped&quot; style=&quot;color:black;background-color:pink;&quot;&gt;
                           &lt;tbody&gt;
                              &lt;tr&gt;
                                 &lt;td&gt;gr&lt;/td&gt;
                                 &lt;td&gt;小组 &amp; 专页&lt;/td&gt;
                              &lt;/tr&gt;
                              &lt;tr&gt;
                                 &lt;td&gt;sjx&lt;/td&gt;
                                 &lt;td&gt;时间线&lt;/td&gt;
                              &lt;/tr&gt;
                              &lt;tr&gt;
                                 &lt;td&gt;mes&lt;/td&gt;
                                 &lt;td&gt;Messenger&lt;/td&gt;
                              &lt;/tr&gt;
                              &lt;tr&gt;
                                 &lt;td&gt;hy&lt;/td&gt;
                                 &lt;td&gt;好友时间线&lt;/td&gt;
                              &lt;/tr&gt;
                              &lt;tr&gt;
                                 &lt;td&gt;ly&lt;/td&gt;
                                 &lt;td&gt;留言&lt;/td&gt;
                              &lt;/tr&gt;
                           &lt;/tbody&gt;
                        &lt;/table&gt;
                     &lt;/div&gt;
                  &lt;/div&gt;
               &lt;/label&gt;
            &lt;/div&gt;
            &lt;!-- 发帖类型 --&gt;
            &lt;div class=&quot;`+hide_class_post_type+`&quot; `+hide_post_type+`&gt;
               &lt;select id='post_type' onchange=&quot;getSheetName(post_type);&quot;&gt;
                  &lt;option value='' &gt;=请选择发帖类型=&lt;/option&gt;
                  &lt;?!= post_type ?&gt;
               &lt;/select&gt;
               &lt;label style=&quot;font-size:15px;&quot;&gt;`+show_required_post_type+`请选择发帖类型&lt;/label&gt;
            &lt;/div&gt;
            &lt;!-- 小组名称 --&gt;
            &lt;div class=&quot;`+hide_class_group_name+`&quot; `+hide_group_name+`&gt;
               &lt;input placeholder=&quot;请输入发帖位置(小组)名称&quot; type=&quot;text&quot; class=&quot;group_name&quot;&gt;
               &lt;label style=&quot;font-size:18px;&quot;&gt;`+show_required_group_name+`小组名称&lt;/label&gt;
            &lt;/div&gt;
            &lt;!-- 小组状态 --&gt;
            &lt;div class=&quot;`+hide_class_group_status+`&quot; `+hide_group_status+`&gt;
               &lt;select id='group_status' onchange=&quot;getSheetName(group_status);&quot;&gt;
                  &lt;option value='' &gt;=请选择小组状态=&lt;/option&gt;
                  &lt;?!= group_status ?&gt;
               &lt;/select&gt;
               &lt;label style=&quot;font-size:15px;&quot;&gt;`+show_required_group_status+`请选择小组状态&lt;/label&gt;
            &lt;/div&gt;
            &lt;!-- 图片名称 --&gt;
            &lt;div class=&quot;`+hide_class_image_name+`&quot; `+hide_image_name+`&gt;
               &lt;input placeholder=&quot;请输入图片名称&quot; type=&quot;text&quot; class=&quot;image_name&quot;&gt;
               &lt;label style=&quot;font-size:18px;&quot;&gt;`+show_required_image_name+`图片名称&lt;/label&gt;
            &lt;/div&gt;
            &lt;!-- 图片来源 --&gt;
            &lt;div class=&quot;`+hide_class_posting_status+`&quot; `+hide_posting_status+`&gt;
               &lt;select class='headSelect' id='posting_status' onchange=&quot;getSheetName(posting_status);&quot;&gt;
                  &lt;option value='' &gt;=请选择图片来源=&lt;/option&gt;
                  &lt;?!= posting_status ?&gt;
               &lt;/select&gt;
               &lt;label style=&quot;font-size:15px;&quot;&gt;`+show_required_posting_status+`请选择图片来源&lt;/label&gt;
            &lt;/div&gt;
            &lt;!-- 引导语 --&gt;
            &lt;div class=&quot;`+hide_class_guide+`&quot; `+hide_guide+`&gt;
               &lt;input placeholder=&quot;请输入引导语&quot; type=&quot;text&quot; class=&quot;guide&quot;&gt;
               &lt;label style=&quot;font-size:18px;&quot;&gt;`+show_required_guide+`引导语&lt;/label&gt;
            &lt;/div&gt;
            &lt;!-- 中文引导语 --&gt;
            &lt;div class=&quot;`+hide_class_cn_guide+`&quot; `+hide_cn_guide+`&gt;
               &lt;input placeholder=&quot;请输入中文引导语&quot; type=&quot;text&quot; class=&quot;cn_guide&quot;&gt;
               &lt;label style=&quot;font-size:18px;&quot;&gt;`+show_required_cn_guide+`中文引导语&lt;/label&gt;
            &lt;/div&gt;
            &lt;!-- 标题 --&gt;
            &lt;div class=&quot;`+hide_class_cn_title+`&quot; `+hide_cn_title+`&gt;
               &lt;input placeholder=&quot;请输入标题&quot; type=&quot;text&quot; class=&quot;cn_title&quot;&gt;
               &lt;label style=&quot;font-size:18px;&quot;&gt;`+show_required_cn_title+`标题&lt;/label&gt;
            &lt;/div&gt;
            &lt;!-- 发帖状态 --&gt;
            &lt;div class=&quot;`+hide_class_is_review+`&quot; `+hide_is_review+`&gt;
               &lt;select class='headSelect' id='is_review' onchange = &quot;getSheetName(is_review);&quot;&gt;
                  &lt;option value='' &gt;=请选择发帖状态=&lt;/option&gt;
                  &lt;?!= is_review ?&gt;
               &lt;/select&gt;
               &lt;label style=&quot;font-size:15px;&quot; class=&quot;title&quot;&gt;`+show_required_is_review+`请选择发帖状态&lt;/label&gt;
            &lt;/div&gt;
            &lt;!-- 网站原链接--&gt;
            &lt;div class=&quot;`+hide_class_original_link+`&quot; `+hide_original_link+`&gt;
               &lt;input placeholder=&quot;请输入原链接&quot; type=&quot;text&quot; class=&quot;original_link&quot;&gt;
               &lt;label style=&quot;font-size:18px;&quot;&gt;`+show_required_original_link+`原链接（网站链接）&lt;/label&gt;
            &lt;/div&gt;
            &lt;!-- 超文本链接 --&gt;
            &lt;div class=&quot;`+hide_class_materialize_textarea+`&quot; `+hide_materialize_textarea+`&gt;
               &lt;textarea placeholder=&quot;请输入内容&quot; type=&quot;text&quot; class=&quot;materialize-textarea&quot;&gt;&lt;/textarea&gt;
               &lt;label style=&quot;font-size:18px;&quot;&gt;`+show_required_materialize_textarea+`超文本链接&lt;/label&gt;
            &lt;/div&gt;
            &lt;!-- 追踪链接 --&gt;
            &lt;div class=&quot;row&quot;&gt;
            &lt;div class=&quot;input-field col&quot;&gt;
                &lt;a  onClick=&quot;getValue1();&quot; class=&quot;btn waves-effect waves-teal&quot;&gt;生成追踪链接&lt;/a&gt;&amp;nbsp; &amp;nbsp;
                &lt;span id=&quot;show_track_link&quot; class=&quot;track_link&quot;&gt;&lt;/span&gt;
                &lt;span id=&quot;show_hyperlink&quot;&gt;&lt;/span&gt;
                &lt;textarea style=&quot;width:0px;height:0px;opacity: 0;float:right;&quot; id=&quot;input&quot;&gt;&lt;/textarea&gt;
            &lt;/div&gt;
            &lt;/div&gt;
            &lt;!--  贴文链接 --&gt;
          &lt;div class=&quot;row&quot;&gt;
               &lt;div class=&quot;`+hide_class_post_link+`&quot; `+hide_post_link+`&gt;
                  &lt;input placeholder=&quot;请输入贴文链接&quot; id=&quot;first_name&quot; type=&quot;text&quot; data-length=&quot;6&quot; class=&quot;post_link&quot;&gt;
                  &lt;label style=&quot;font-size:18px;&quot; for=&quot;first_name2&quot;&gt;`+show_required_post_link+`请输入FB贴文链接&lt;/label&gt;
               &lt;/div&gt;
            &lt;/div&gt;
            &lt;a id=&quot;sheet1&quot; onClick=&quot;getValue2();&quot; class=&quot;btn waves-effect waves-teal&quot;&gt;点击填表&lt;/a&gt;&amp;nbsp; &amp;nbsp;
            &lt;span id=&quot;demo2&quot;&gt;&lt;/span&gt;
         &lt;/div&gt;
      &lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;
</code></pre>
`;
    }
function generate_form_code() {
    // 填表项目
    var check_fill_new_Date = document.getElementById("fill_new_Date").checked;
    var check_fill_date = document.getElementById("fill_date").checked;
    var check_fill_filter_name = document.getElementById("fill_filter_name").checked;
    var check_fill_fb_name = document.getElementById("fill_fb_name").checked;
    var check_fill_fb_article_place = document.getElementById("fill_fb_article_place").checked;
    var check_fill_fb_post_type = document.getElementById("fill_fb_post_type").checked;
    var check_fill_fb_place_name = document.getElementById("fill_fb_place_name").checked;
    var check_fill_fb_group_status = document.getElementById("fill_fb_group_status").checked;
    var check_fill_fb_title = document.getElementById("fill_fb_title").checked;
    var check_fill_fb_image_name = document.getElementById("fill_fb_image_name").checked;
    var check_fill_fb_guide = document.getElementById("fill_fb_guide").checked;
    var check_fill_fb_cn_guide = document.getElementById("fill_fb_cn_guide").checked;
    var check_fill_fn_image_origin = document.getElementById("fill_fn_image_origin").checked;
    var check_fill_fn_web_link = document.getElementById("fill_fn_web_link").checked;
    var check_fill_fn_posting_status = document.getElementById("fill_fn_posting_status").checked;
    var check_fill_fb_pose_link = document.getElementById("fill_fb_pose_link").checked;
    var check_fill_track_link = document.getElementById("fill_track_link").checked;
    var check_fill_fb_hyperlink = document.getElementById("fill_fb_hyperlink").checked;
    var check_fill_split_sheet = document.getElementById("fill_split_sheet").checked;
    var check_fill_detect_group_status = document.getElementById("fill_detect_group_status").checked;
    var check_fill_detect_post_status = document.getElementById("fill_detect_post_status").checked;
    var check_fill_detect_group_name = document.getElementById("fill_detect_group_name").checked;
    var check_fill_detect_link_type = document.getElementById("fill_detect_link_type").checked;

    // 检测填表项目
    if (check_fill_new_Date == true) {
    var form_fill_new_Date = `new Date(),`;
    var desc_form_fill_new_Date = `详细日期new Date(),`;
    }
    else {
    var form_fill_new_Date = ``;
    var desc_form_fill_new_Date = ``;
    }
    if (check_fill_date == true) {
    var form_fill_date = `date,`;
    var desc_form_fill_date = `日期date,`;
    }
    else {
    var form_fill_date = ``;
    var desc_form_fill_date = ``;
    }
    if (check_fill_filter_name == true) {
    var form_fill_filter_name = `filter_name,`;
    var desc_form_fill_filter_name = `名字filter_name,`;
    }
    else {
    var form_fill_filter_name = ``;
    var desc_form_fill_filter_name = ``;
    }
    if (check_fill_fb_name == true) {
    var form_fill_fb_name = `fb_name,`;
    var desc_form_fill_fb_name = `账号名称fb_name,`;
    }
    else {
    var form_fill_fb_name = ``;
    var desc_form_fill_fb_name = ``;
    }
    if (check_fill_fb_article_place == true) {
    var form_fill_fb_article_place = `fb_article_place,`;
    var desc_form_fill_fb_article_place = `发帖位置fb_article_place,`;
    }
    else {
    var form_fill_fb_article_place = ``;
    var desc_form_fill_fb_article_place = ``;
    }
    if (check_fill_fb_post_type == true) {
    var form_fill_fb_post_type = `fb_post_type,`;
    var desc_form_fill_fb_post_type = `发帖类型fb_post_type,`;
    }
    else {
    var form_fill_fb_post_type = ``;
    var desc_form_fill_fb_post_type = ``;
    }
    if (check_fill_fb_place_name == true) {
    var form_fill_fb_place_name = `fb_place_name,`;
    var desc_form_fill_fb_place_name = `小组名称fb_place_name,`;
    }
    else {
    var form_fill_fb_place_name = ``;
    var desc_form_fill_fb_place_name = ``;
    }
    if (check_fill_fb_group_status == true) {
    var form_fill_fb_group_status = `fb_group_status,`;
    var desc_form_fill_fb_group_status = `小组状态fb_group_status,`;
    }
    else {
    var form_fill_fb_group_status = ``;
    var desc_form_fill_fb_group_status = ``;
    }
    if (check_fill_fb_title == true) {
    var form_fill_fb_title = `fb_title,`;
    var desc_form_fill_fb_title = `中文标题fb_title,`;
    }
    else {
    var form_fill_fb_title = ``;
    var desc_form_fill_fb_title = ``;
    }
    if (check_fill_fb_image_name == true) {
    var form_fill_fb_image_name = `fb_image_name,`;
    var desc_form_fill_fb_image_name = `图片名称fb_image_name,`;
    }
    else {
    var form_fill_fb_image_name = ``;
    var desc_form_fill_fb_image_name = ``;
    }
    if (check_fill_fb_guide == true) {
    var form_fill_fb_guide = `fb_guide,`;
    var desc_form_fill_fb_guide = `引导语fb_guide,`;
    }
    else {
    var form_fill_fb_guide = ``;
    var desc_form_fill_fb_guide = ``;
    }
    if (check_fill_fb_cn_guide == true) {
    var form_fill_fb_cn_guide = `fb_cn_guide,`;
    var desc_form_fill_fb_cn_guide = `中文引导语fb_cn_guide,`;
    }
    else {
    var form_fill_fb_cn_guide = ``;
    var desc_form_fill_fb_cn_guide = ``;
    }
    if (check_fill_fn_image_origin == true) {
    var form_fill_fn_image_origin = `fn_image_origin,`;
    var desc_form_fill_fn_image_origin = `图片来源fn_image_origin,`;
    }
    else {
    var form_fill_fn_image_origin = ``;
    var desc_form_fill_fn_image_origin = ``;
    }
    if (check_fill_fn_web_link == true) {
    var form_fill_fn_web_link = `fn_web_link,`;
    var desc_form_fill_fn_web_link = `网站原链接fn_web_link,`;
    }
    else {
    var form_fill_fn_web_link = ``;
    var desc_form_fill_fn_web_link = ``;
    }
    if (check_fill_fn_posting_status == true) {
    var form_fill_fn_posting_status = `fn_posting_status,`;
    var desc_form_fill_fn_posting_status = `发帖状态fn_posting_status,`;
    }
    else {
    var form_fill_fn_posting_status = ``;
    var desc_form_fill_fn_posting_status = ``;
    }
    if (check_fill_fb_pose_link == true) {
    var form_fill_fb_pose_link = `fb_pose_link,`;
    var desc_form_fill_fb_pose_link = `贴文链接fb_pose_link,`;
    }
    else {
    var form_fill_fb_pose_link = ``;
    var desc_form_fill_fb_pose_link = ``;
    }
    if (check_fill_track_link == true) {
    var form_fill_track_link = `track_link,`;
    var desc_form_fill_track_link = `追踪链接track_link,`;
    }
    else {
    var form_fill_track_link = ``;
    var desc_form_fill_track_link = ``;
    }
    if (check_fill_fb_hyperlink == true) {
    var form_fill_fb_hyperlink = `fb_hyperlink,`;
    var desc_form_fill_fb_hyperlink = `超文本链接fb_hyperlink,`;
    }
    else {
    var form_fill_fb_hyperlink = ``;
    var desc_form_fill_fb_hyperlink = ``;
    }
    if (check_fill_detect_group_status == true) {
    var form_check_fill_detect_group_status = `auto_detect_group_status,`;
    var desc_form_check_fill_detect_group_status = `识别小组状态auto_detect_group_status,`;
    }
    else {
    var form_check_fill_detect_group_status = ``;
    var desc_form_check_fill_detect_group_status = ``;
    }
    if (check_fill_detect_post_status == true) {
    var form_check_fill_detect_post_status = `auto_detect_posting_status,`;
    var desc_form_check_fill_detect_post_status = `识别发帖状态auto_detect_posting_status,`;
    }
    else {
    var form_check_fill_detect_post_status = ``;
    var desc_form_check_fill_detect_post_status = ``;
    }
    if (check_fill_detect_group_name == true) {
    var form_check_fill_detect_group_name = `auto_detect_place_name,`;
    var desc_form_check_fill_detect_group_name = `识别小组名字auto_detect_place_name,`;
    }
    else {
    var form_check_fill_detect_group_name = ``;
    var desc_form_check_fill_detect_group_name = ``;
    }
    if (check_fill_detect_link_type == true) {
    var form_check_fill_detect_link_type = `auto_detect_pose_link,`;
    var desc_form_check_fill_detect_link_type = `识别链接类型auto_detect_pose_link,`;
    }
    else {
    var form_check_fill_detect_link_type = ``;
    var desc_form_check_fill_detect_link_type = ``;
    }
    if (check_fill_split_sheet == true) {
    var form_fill_split_sheet = `filter_name`;
    var desc_form_fill_split_sheet = `分表filter_name`;
    }
    else {
    var form_fill_split_sheet = `"总数据"`;
    var desc_form_fill_split_sheet = ``;
    }
    
    document.getElementById("generate_form_code").innerHTML = `<pre><code>// 说明：`+desc_form_fill_new_Date+``+desc_form_fill_date+``+desc_form_fill_filter_name+``+desc_form_fill_fb_name+``+desc_form_fill_fb_article_place+``+desc_form_fill_fb_post_type+``+desc_form_fill_fb_place_name+``+desc_form_fill_fb_group_status+``+desc_form_fill_fb_title+``+desc_form_fill_fb_image_name+``+desc_form_fill_fn_image_origin+``+desc_form_fill_fb_guide+``+desc_form_fill_fb_cn_guide+``+desc_form_fill_fn_web_link+``+desc_form_fill_fn_posting_status+``+desc_form_fill_fb_pose_link+``+desc_form_fill_track_link+``+desc_form_fill_fb_hyperlink+``+desc_form_check_fill_detect_group_status+``+desc_form_check_fill_detect_post_status+``+desc_form_check_fill_detect_group_name+``+desc_form_check_fill_detect_link_type+`空值none
function userClicked2(date,selectName,filter_name,user_id,fb_name,fb_article_place,fb_post_type,fb_place_name,fb_group_status,fb_title,fb_image_name,fb_guide,fb_cn_guide,fn_image_origin,fn_web_link,fn_posting_status,fb_pose_link,track_link,fb_hyperlink,auto_detect_group_statusA,auto_detect_group_statusB,auto_detect_group_statusC,auto_detect_group_statusD,auto_detect_group_statusE,auto_detect_group_statusF,auto_detect_group_statusG,auto_detect_group_statusH,auto_detect_group_statusI,auto_detect_group_statusJ,auto_detect_group_statusK,auto_detect_group_statusL,auto_detect_group_statusM,auto_detect_group_statusN,auto_detect_group_statusO,auto_detect_group_statusP,auto_detect_group_statusQ,auto_detect_group_statusR,auto_detect_group_statusS,auto_detect_group_statusT,auto_detect_group_statusU,auto_detect_group_statusV,auto_detect_group_statusW,auto_detect_group_statusX,auto_detect_group_statusY,auto_detect_group_statusZ,auto_detect_posting_statusA,auto_detect_posting_statusB,auto_detect_posting_statusC,auto_detect_posting_statusD,auto_detect_posting_statusE,auto_detect_posting_statusF,auto_detect_posting_statusG,auto_detect_posting_statusH,auto_detect_posting_statusI,auto_detect_posting_statusJ,auto_detect_posting_statusK,auto_detect_posting_statusL,auto_detect_posting_statusM,auto_detect_posting_statusN,auto_detect_posting_statusO,auto_detect_posting_statusP,auto_detect_posting_statusQ,auto_detect_posting_statusR,auto_detect_posting_statusS,auto_detect_posting_statusT,auto_detect_posting_statusU,auto_detect_posting_statusV,auto_detect_posting_statusW,auto_detect_posting_statusX,auto_detect_posting_statusY,auto_detect_posting_statusZ,auto_detect_place_nameA,auto_detect_place_nameB,auto_detect_place_nameC,auto_detect_place_nameD,auto_detect_place_nameE,auto_detect_place_nameF,auto_detect_place_nameG,auto_detect_place_nameH,auto_detect_place_nameI,auto_detect_place_nameJ,auto_detect_place_nameK,auto_detect_place_nameL,auto_detect_place_nameM,auto_detect_place_nameN,auto_detect_place_nameO,auto_detect_place_nameP,auto_detect_place_nameQ,auto_detect_place_nameR,auto_detect_place_nameS,auto_detect_place_nameT,auto_detect_place_nameU,auto_detect_place_nameV,auto_detect_place_nameW,auto_detect_place_nameX,auto_detect_place_nameY,auto_detect_place_nameZ,auto_detect_pose_linkA,auto_detect_pose_linkB,auto_detect_pose_linkC,auto_detect_pose_linkD,auto_detect_pose_linkE,auto_detect_pose_linkF,auto_detect_pose_linkG,auto_detect_pose_linkH,auto_detect_pose_linkI,auto_detect_pose_linkJ,auto_detect_pose_linkK,auto_detect_pose_linkL,auto_detect_pose_linkM,auto_detect_pose_linkN,auto_detect_pose_linkO,auto_detect_pose_linkP,auto_detect_pose_linkQ,auto_detect_pose_linkR,auto_detect_pose_linkS,auto_detect_pose_linkT,auto_detect_pose_linkU,auto_detect_pose_linkV,auto_detect_pose_linkW,auto_detect_pose_linkX,auto_detect_pose_linkY,auto_detect_pose_linkZ,none){
      var ss = SpreadsheetApp.openById(sheetID);
      var ws = ss.getSheetByName(`+form_fill_split_sheet+`);
      ws.appendRow([`+form_fill_new_Date+``+form_fill_date+``+form_fill_filter_name+``+form_fill_fb_name+``+form_fill_fb_article_place+``+form_fill_fb_post_type+``+form_fill_fb_place_name+``+form_fill_fb_group_status+``+form_fill_fb_title+``+form_fill_fb_image_name+``+form_fill_fn_image_origin+``+form_fill_fb_guide+``+form_fill_fb_cn_guide+``+form_fill_fn_web_link+``+form_fill_fn_posting_status+``+form_fill_fb_pose_link+``+form_fill_track_link+``+form_fill_fb_hyperlink+``+form_check_fill_detect_group_status+``+form_check_fill_detect_post_status+``+form_check_fill_detect_group_name+``+form_check_fill_detect_link_type+`none]);
}
    </code></pre>
    `;
}

function generate_other_code() {
    // 其他项目
    var check_other_close_alert = document.getElementById("other_close_alert").checked;
    var check_other_auto_complete = document.getElementById("other_auto_complete").checked;
    var check_other_update = document.getElementById("other_update").checked;
    
    // 检测其他项目
    if (check_other_close_alert == true) {
    var fill_other_close_alert = `// 关闭提示
    window.onbeforeunload = function (n) {
        (n = window.event || n).returnValue = &quot;&quot;
    };
    `;
    }
    else {
    var fill_other_close_alert = ``;
    }
    if (check_other_auto_complete == true) {
    var fill_other_auto_complete = `// 账号名称自动填充
    $(function () {
        $(&quot;#username&quot;).autocomplete({
            source: [&quot;aaa&quot;,&quot;bbb&quot;,&quot;ccc&quot;]
        })
    });
    `;
    }
    else {
    var fill_other_auto_complete = ``;
    }
    if (check_other_update == true) {
    var fill_other_update = `// 维护升级
    setInterval(function () {
        alert(&quot;正在维护升级中，请稍后查看&quot;);
    }, 1000);
    `;
    }
    else {
    var fill_other_update = ``;
    }
    document.getElementById("generate_form_code").innerHTML = `<pre><code>&lt;script&gt;
    `+fill_other_close_alert+`
    `+fill_other_auto_complete+`
    `+fill_other_update+`
&lt;/script&gt;
    </code></pre>
    `;
}
