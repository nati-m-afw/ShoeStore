$(document).ready(function(){
    $(".selected").html(sessionStorage.getItem("item"));
    $(".selected > div > a").remove();
});