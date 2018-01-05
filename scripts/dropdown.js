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
    
    $('#hamburg-menu').click(function() {
        
        if ($('#drop-menu').css('display') == 'none' ) {
            $('#drop-menu').slideDown(500);
            
            navElColor.restart();
        }
        else {
            $('#drop-menu').slideUp(500);
            navElColor.seek(201);
            navElColor.play();
        }
    });
    
    var navElColor = anime({
        autoplay: false,
        targets: '#nav-bar path',
        stroke: [
            { value: '#fff', duration: 200, easing: 'easeInOutSine' },
            { value: '#000', duration: 200, easing: 'easeInOutSine', delay: 350}
        ],
        update: function(anim) {
            //console.log(anim.currentTime);
            if (Math.floor(anim.currentTime) == 200) {
                navElColor.pause();
            }
        }
    }); 
})