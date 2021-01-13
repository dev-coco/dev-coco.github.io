
function get_printf_info() {
        var token = document.getElementById("printf_info_token").value;
        var get_id = document.getElementById("printf_info_url").value;
        var facebookID = get_id.match(/[0-9].+/g);
        new_page = window.open('');
        for (var k = 0; k < facebookID.length; k++) {
            (function(k) {
                setTimeout(async function() {
                    let response1 = await fetch(`https://graph.facebook.com/` + facebookID[k] + `?fields=location,hometown,name,languages,religion,education&access_token=` + token + `&pretty=0`)
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
                    } catch {}
                    new_page.document.write('<table><tbody><tr><td><img src="https://graph.facebook.com/' + facebookID[k] + '/picture?width=999&access_token=' + token + '" style="width:200;"></td><td>' + [k + 1] + '</td><td><a href="https://www.facebook.com/' + facebookID[k] + '" target="_blank">' + facebookID[k] + '</a></td><td>所在地：' + city_str + '</td><td>家乡：' + hometown_str + '</td><td>信仰：' + religion_str + '</td><td>语言：' + language_str + '</td><td>大学：' + college_str + '</td></tr></tbody></table>');

                }, 1500 * k);
            })(k);
        }
}

function get_printf_info_fast() {
    var token = document.getElementById("printf_info_token").value;
    var get_id = document.getElementById("printf_info_url").value;
    var facebookID = get_id.match(/[0-9].+/g);
    new_page = window.open('');
    for (var k = 0; k < facebookID.length; k++) {
        (function(k) {
            setTimeout(async function() {
                let response1 = await fetch(`https://graph.facebook.com/` + facebookID[k] + `?fields=location,hometown,name,languages,religion,education&access_token=` + token + `&pretty=0`)
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
                } catch {}
                new_page.document.write('<table><tbody><tr><td><img src="https://graph.facebook.com/' + facebookID[k] + '/picture?width=999&access_token=' + token + '" style="width:200;"></td><td>' + [k + 1] + '</td><td><a href="https://www.facebook.com/' + facebookID[k] + '" target="_blank">' + facebookID[k] + '</a></td><td>所在地：' + city_str + '</td><td>家乡：' + hometown_str + '</td><td>信仰：' + religion_str + '</td><td>语言：' + language_str + '</td><td>大学：' + college_str + '</td></tr></tbody></table>');

            }, 50 * k);
        })(k);
}

function get_avatar() {
        var token = document.getElementById("avatar_token").value;
        var get_id = document.getElementById("avatar_url").value;
        var facebookID = get_id.match(/.+/g);
        new_page = window.open('');
        for (var k = 0; k < facebookID.length; k++) {
            (function(k) {
                setTimeout(async function() {
                    let response = await fetch(`https://graph.facebook.com/` + facebookID[k] + `/picture?width=999&access_token=` + token)
                    let text = await response.url
                    new_page.document.write('<table><tbody><tr><td>' + [k + 1] + '</td><td>=IMAGE("' + response.url + '")</td></tr></tbody></table>');
                }, 1500 * k);
            })(k);
        }
}

function get_avatar_fast(e) {
    var token = document.getElementById("avatar_token").value;
    var get_id = document.getElementById("avatar_url").value;
    var facebookID = get_id.match(/.+/g);
    new_page = window.open('');
    for (var k = 0; k < facebookID.length; k++) {
        (function(k) {
            setTimeout(async function() {
                let response = await fetch(`https://graph.facebook.com/` + facebookID[k] + `/picture?width=999&access_token=` + token)
                let text = await response.url
                new_page.document.write('<table><tbody><tr><td>' + [k + 1] + '</td><td>=IMAGE("' + response.url + '")</td></tr></tbody></table>');
            }, 50 * k);
        })(k);
}

async function printf_all_friends() {
    var token = document.getElementById("printf_all_friends_token").value;
    let response = await fetch('https://graph.facebook.com/v8.0/me/friends?access_token=' + token + '&pretty=0&limit=99999');
    let getdata = await response.text()
    var username = getdata.match(/(?<=name":").*?(?=")/g);
    var userid = getdata.match(/(?<=id":").*?(?=")/g);
    new_page = window.open('');
    new_page.document.write('<table><tbody>');
    for (var i = 0; i < userid.length; i++) {
        var result = eval('`' + username[i] + '`');
        new_page.document.write('<tr><td><img src="https://graph.facebook.com/' + userid[i] + '/picture?width=100&access_token=' + token + '" style="width:100;height:100px;"></td><td>' + [i + 1] + '</td><td><a href="https://www.facebook.com/' + userid[i] + '">' + result + '</td><td>' + userid[i] + '</td></tr>');
    }
}
