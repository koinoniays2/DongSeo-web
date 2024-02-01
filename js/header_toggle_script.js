// 토글 버튼
$(document).ready(function() {
    $("#toggle-on").click(function(event){
        $("#toggle-menu").slideToggle();
        event.stopPropagation(); 
    });
    $(document).click(function() {
        $("#toggle-menu").slideUp();
    });
    $(window).resize(function() {
        $("#toggle-menu").slideUp();
    });
});