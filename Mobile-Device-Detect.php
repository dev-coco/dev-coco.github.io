<?php
if(strpos($_SERVER['HTTP_USER_AGENT'], 'iPhone')||strpos($_SERVER['HTTP_USER_AGENT'], 'iPad')){
    Header("Location:https://www.google.com");
}else{
    Header("Location:https://www.duckduckgo.com");
}
?>
