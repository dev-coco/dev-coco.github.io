const title=document.getElementById("title");title.addEventListener("click",function(){const e=new SpeechSynthesisUtterance(title.outerText.toLowerCase());e.lang="en-US",speechSynthesis.speak(e)});
