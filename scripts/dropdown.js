$(function() {
    
    //hide dropdown menu on start
    //display already set to none
    //$('#nav-drop').hide();
    
    /*
    $('#hamburg-menu').click(function() {
        //$('#nav-drop').slideUp(600);

        if ($('#nav-drop').css('display') == 'none' ) {
            $('#nav-drop').slideDown(600);
        }
        else {
            $('#nav-drop').slideUp();
        }
    });
    */
    
    $('#drop-menu').hide();
    
    $('#hamburg-menu').click(function() {
        
        if ($('#drop-menu').css('display') == 'none' ) {
            $('#drop-menu').slideDown({
                duration: 1000,
                easing: "easeInOutQuad"
            });
            $('#drop-menu').css('display', 'flex');
            navElColor.restart();
        }
        else {
            $('#drop-menu').slideUp({
                duration: 1000,
                easing: "easeInOutQuad"
            });
            navElColor.seek(201);
            navElColor.play();
        }
    });
    
    var navElColor = anime({
        autoplay: false,
        targets: '#nav-bar path',
        stroke: [
            { value: '#000', duration: 200, easing: 'easeInOutSine' },
            { value: '#fff', duration: 200, easing: 'easeInOutSine', delay: 800}
        ],
        update: function(anim) {
            //console.log(anim.currentTime);
            if (Math.floor(anim.currentTime) == 200) {
                navElColor.pause();
            }
        }
    }); 
})