console.log('loading theme js');

$(document).ready(function() {

    $(".has-subnav").hover(function(){
        $(this).find('.fas').toggleClass('fa-angle-up');
    });

    $('a[data-toggle="collapse"').click(function(){
        $(this).find('.fa-angle-down').toggleClass('fa-angle-up');
    });

    $('.primary-locations h3 > a').click(function(){
        $('#locationsModal').removeClass('in').hide();
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 140) {
            $('.primary-nav').addClass('fixed');
        } else {
            $('.primary-nav').removeClass('fixed');
        }
    });
    
    //Init Animate on Scroll
    AOS.init({
        easing: 'ease-in-out',
        duration: '1000'
    });

});