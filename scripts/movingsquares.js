$(function() {
    
    //mouse position vars
    var mouseX;
    var mouseY;
    
    $(document).mousemove(function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        
        moveElements();
    });
    
    function moveElements() {
        $('#square1').css('top', 100 + (mouseY*0.2) + 'px');
        $('#square1').css('left', 100 + (mouseX*0.2) + 'px');
        
        $('#background').css('top', (-10 + mouseY*0.001) + '%');
        $('#background').css('left', (-10 + mouseX*0.001) + '%');
    }
});