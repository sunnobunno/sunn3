$(function() {
    
    
    
    $.fn.extend({
        animateCss: function (animationName, callback) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
                if (callback) {
                  callback();
                }
            });
            return this;
        }
    });
    
    $('#site-body').hide();
    //$('.splash').hide();
    
    var phaseNul = anime({
        targets: '#phase-nul path',
        strokeWidth: [
            { value: '40px', duration: 1000, elasticity: 600 }
        ],
        strokeOpacity: [
            { value: 0.0, duration: 1, delay: 700 }
        ]
    });
    
    /*
    var zeroLength = $('#zero').get(0).getTotalLength();
    var zeroLength = zeroLength * -1;
    console.log(zeroLength);
    */
    
    var phaseZero = anime({
        targets: '#phase-zero path',
        
        strokeDashoffset: [
            { value: 290.0, duration: 1000, delay: 700, easing: 'easeInOutQuart' },
        ],
        
        strokeOpacity: [
            { value: 1.0, duration: 1, delay: 700 },
            { value: 0.0, duration: 1, delay: 1700 }
        ]
        
    });
    
    var phaseOne = anime({
        targets: '#phase-one path',
        strokeWidth: '40px',
        delay: 1400,
        duration: 1000,
        elasticity: 600
    });
    
    var phaseTwo = anime({
        targets: '#phase-two path',
        strokeOpacity: [
            { value: 1.0, duration: 1, delay: 1700 }
        ],
        strokeDashoffset: [
            { value: 0, duration: 2000, easing: 'easeInOutQuart', delay: 1700 }
        ],
    });
    
    var phaseThree = anime({
        targets: '#phase-three path',
        strokeOpacity: [
            { value: 1.0, duration: 1, delay: 2000 }
        ],
        strokeDashoffset: [
            { value: 0, duration: 2000, easing: 'easeInOutQuart', delay: 2000 }
        ],
    });
    
    var phaseFour = anime({
        targets: '#phase-four path',
        strokeOpacity: [
            { value: 1.0, duration: 1, delay: 2600 }
        ],
        strokeDashoffset: [
            { value: 0, duration: 700, easing: 'easeInOutQuart', delay: 2600 }
        ],
    });
    
    var loadingBgWipe = anime({
        targets: '#splash-logo .splash-bg',
        autoplay: false,
        translateY: function(el, i) {
            if (i == 0) {
                return '-100%';
            }
            else {
                return '100%';
            }
        },
        easing: 'easeInOutCubic'
    });
    
    var fadeoutPromise = phaseThree.finished.then(fadeoutLogo);
    
    function fadeoutLogo() {
        console.log('fade');
        $('#splash').animateCss('fadeOut', function() {
            $('#splash').hide();
            loadingBgWipe.play();
            $('#site-body').show();
            $('#site-body').animateCss('fadeIn');
        });
    }
    
});