function get_printf_info() {
    var token = document.getElementById("printf_info_token").value;
    var get_id = document.getElementById("printf_info_url").value;
    var get_delay_time = document.getElementById("printf_info_delay_time").value;
    var facebookID = get_id.match(/[0-9].+/g);
    new_page = window.open('');
    for (var k = 0; k < facebookID.length; k++) {
        (function(k) {
            setTimeout(async function() {
                let response1 = await fetch(`https://graph.facebook.com/` + facebookID[k] + `?fields=location,hometown,name,languages,religion,education,birthday,gender,updated_time&access_token=` + token + `&pretty=0`)
                if (response1.status == "400") {
                    new_page.document.write('<table><tbody><tr><td></td><td>' + [k + 1] + '</td><td><a href="https://www.facebook.com/' + facebookID[k] + '" target="_blank">' + facebookID[k] + '</a></td><td>请求受限</td></tr></tbody></table>');
                } else {
                    let text1 = await response1.text()
                    try {
                        try {
                            var city = text1.match(/(?<=location":{"id":".*?","name":").*?(?="},"hometown)/g)[0];
                        } catch {
                            try {
                                var city = text1.match(/(?<=location":{"id":".*?","name":").*?(?="},"name)/g)[0];
                            } catch {
                                var city = "未知";
                            }
                        }
                        var city_str = eval(`"` + city + `"`);
                        try {
                            var hometown = text1.match(/(?<=hometown":{"id":".*?","name":").*?(?="},"name)/g)[0];
                        } catch {
                            var hometown = "未知";
                        }
                        var hometown_str = eval(`"` + hometown + `"`);
                        try {
                            var language = text1.match(/(?<=languages":\[).*?(?=])/g)[0].replace(/id":".*?"|,|name|"|:/g, "");
                        } catch {
                            var language = "未知";
                        }
                        var language_str = eval(`"` + language + `"`);
                        try {
                            var religion = text1.match(/(?<=religion":").*?(?=")/g)[0];
                        } catch {
                            var religion = "未知";
                        }
                        var religion_str = eval(`"` + religion + `"`);

                        try {
                            var college = text1.match(/(?<=education":\[).+(?="type":"College")/g)[0].replace(/^{|id":".*?"|,|name|:|"school"|"year"|,|"|type":".*?"|concentration":\[.*?\]/g, "").replace(/}{|{[0-9].*?[0-9]}|classes\[.*?\]|}\]|degree/g, "");
                        } catch {
                            var college = "未知";
                        }
                        var college_str = eval(`"` + college + `"`);
                        try {
                            var birthday = text1.match(/(?<=birthday":").*?(?=")/g)[0].replace(/\\/g, "");
                        } catch {
                            var birthday = "未知";
                        }

                        try {
                            var update_time = text1.match(/(?<=updated_time":").*?(?=T)/g)[0];
                        } catch {
                            var update_time = "未知";
                        }
                        try {
                            var gender = text1.match(/(?<=gender":").*?(?=")/g)[0];
                            if (gender == "female") {
                                var gender_str = "女";
                            } else if (gender == "male") {
                                var gender_str = "男";
                            } else {
                                var gender_str = "未知";
                            }
                        } catch {
                            var gender_str = "未知";
                        }
                    } catch {}
                    new_page.document.write('<table><tbody><tr><td><img src="https://graph.facebook.com/' + facebookID[k] + '/picture?width=999&access_token=' + token + '" style="width:200;"></td><td>' + [k + 1] + '</td><td><a href="https://www.facebook.com/' + facebookID[k] + '" target="_blank">' + facebookID[k] + '</a></td><td>所在地：' + city_str + '</td><td>家乡：' + hometown_str + '</td><td>信仰：' + religion_str + '</td><td>语言：' + language_str + '</td><td>大学：' + college_str + '</td><td>性别：' + gender_str + '</td><td>生日：' + birthday + '</td><td>活跃时间：' + update_time + '</td></tr></tbody></table>');
                }
            }, get_delay_time * k);
        })(k);
    }
}

function get_avatar() {
    // var token = document.getElementById("avatar_token").value;
    var get_id = document.getElementById("avatar_url").value;
    var get_delay_time = document.getElementById("avatar_delay_time").value;
    var facebookID = get_id.match(/.+/g);
    new_page = window.open('');
    for (var k = 0; k < facebookID.length; k++) {
        (function(k) {
            setTimeout(async function() {
                let response = await fetch(`https://graph.facebook.com/` + facebookID[k] + `/picture?width=9999&access_token=2712477385668128|b429aeb53369951d411e1cae8e810640`)
                if (response.status == "400") {
                    new_page.document.write('<table><tbody><tr><td>' + [k + 1] + '</td><td>请求受限</td></tr></tbody></table>');
                } else {
                    let text = await response.url
                    new_page.document.write('<table><tbody><tr><td>' + [k + 1] + '</td><td>=IMAGE("' + response.url + '")</td></tr></tbody></table>');
                }
            }, get_delay_time * k);
        })(k);
    }
}

function printf_friends() {
    var token = document.getElementById("printf_all_friends_token").value;
    var get_id = document.getElementById("printf_all_friends").value;
    var get_delay_time = document.getElementById("printf_all_friends_delay_time").value;
    var facebookID = get_id.match(/.+/g);
    if (token.length == 0) {
        alert("请输入token");
        return;
    }
    new_page = window.open('');
    for (var k = 0; k < facebookID.length; k++) {
        (function(k) {
            setTimeout(async function() {
                let response1 = await fetch('https://graph.facebook.com/v8.0/' + facebookID[k] + '/friends?access_token=' + token + '&pretty=0&limit=99999');
                if (response1.status == "400") {
                    new_page.document.write('<table><tbody><tr><td></td><td>' + [k + 1] + '</td><td>' + facebookID[k] + '</td><td>请求受限</td></tr></tbody></table>');
                } else {
                    let getdata = await response1.text();
                    var username = getdata.match(/(?<=name":").*?(?=")/g);
                        var userid = getdata.match(/(?<=id":").*?(?=")/g);
                        for (var i = 0; i < userid.length; i++) {
                            var result = eval('`' + username[i] + '`');
                            new_page.document.write('<table><tbody><tr><td><img src="https://graph.facebook.com/' + userid[i] + '/picture?width=100&access_token=2712477385668128|b429aeb53369951d411e1cae8e810640" style="width:100;height:100px;"></td><td style="font-size:0px;">=IMAGE("https://graph.facebook.com/' + userid[i] + '/picture?width=100&access_token=2712477385668128|b429aeb53369951d411e1cae8e810640")</td><td>' + [i + 1] + '</td><td>' + result + '</td><td>' + userid[i] + '</td><td><a href="https://www.facebook.com/' + userid[i] + '" target="_blank;">https://www.facebook.com/' + userid[i] + '</a></td></tr></tbody></table>');
                        }
                }
            }, get_delay_time * k);
        })(k);
    }
}

function printf_friends_semi() {
    var token = document.getElementById("printf_all_friends_token").value;
    var get_id = document.getElementById("printf_all_friends").value;
    var facebookID = get_id.match(/.+/g);
    window.open('https://graph.facebook.com/v8.0/' + facebookID[0] + '/friends?access_token=' + token + '&pretty=0&limit=99999')
}
