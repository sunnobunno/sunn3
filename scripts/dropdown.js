$(function() {
    
    $('#drop-menu').hide();
    
    $('#hamburg-menu').click(function() {
        
        if ($('#drop-menu').css('display') == 'none' ) {
            $('#drop-menu').slideDown({
                duration: 1000,
                easing: "easeInOutQuad"
            });
            $('#drop-menu').css('display', 'flex');
            $('#nav-bar path').css({'stroke': 'black', 'transition': 'stroke 1s'});
        }
        else {
            $('#drop-menu').slideUp({
                duration: 1000,
                easing: "easeInOutQuad"
            });
            var delayedFade1 = window.setTimeout(fadeToWhite, 500);
        }
    });
    
    function fadeToWhite() {
        $('#nav-bar path').css({'stroke': 'white', 'transition': 'stroke 1s'});
    }

})