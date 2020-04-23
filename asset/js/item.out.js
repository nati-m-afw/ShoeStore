$(document).ready(function(){
    $(".btn-primary").click(function(){
        sessionStorage.setItem("item", $(this).parent().parent().html());
        window.location.replace("buy.html");
    });
});