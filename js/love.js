try {
var para = document.createElement("a");
var element = document.querySelector("h1");
element.appendChild(para);
para.setAttribute("href", "https://dev-coco.github.io/blog/");
var para = document.createElement("img");
var element = document.querySelector("h1");
element.appendChild(para);
para.setAttribute("src", "https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fdev-coco.github.io&count_bg=%2310C1F9&title_bg=%23555555&icon=html5.svg&icon_color=%23E7E7E7&title=%E8%AE%BF%E9%97%AE%E4%BA%BA%E6%95%B0&edge_flat=false");
para.setAttribute("style", "float:right;width:180px;");
} catch {
  var httpRequest=new XMLHttpRequest;httpRequest.open("GET","https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fdev-coco.github.io&amp;count_bg=%2310C1F9&amp;title_bg=%23555555&amp;icon=html5.svg&amp;icon_color=%23E7E7E7&amp;title=%E8%AE%BF%E9%97%AE%E4%BA%BA%E6%95%B0&amp;edge_flat=false",!0),httpRequest.send();
  setTimeout(function() { console.clear() }, 1000);
}
