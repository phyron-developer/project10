
$(document).ready(function(){
    $('.content-left-box1').hover(
        function(){
            $(this).css({
                'transform': 'scale(1.01) translateY(-10px)',

            });
        },
        function(){
            $(this).css({
                'transform': 'scale(1) translateY(0)', // Reset to original state

            });
        }
    );
});
$(document).ready(function(){
    $('.about-des').hover(
        function(){
            $('.img1').css({
                'transform': 'scale(1.02)',
                'transition' : '0.3s ease-in-out',

            });
        },
        function(){
            $('.img1').css({
                'transform': 'scale(1)', 

            });
        }
    );
});
$(document).ready(function(){
    $('.accordion-content').hide();
    $('.accordion-header').click(function(){
        $(this).next('.accordion-content').slideToggle();
        $('.accordion-content').not($(this).next()).slideUp();

        $(this).find('i').toggleClass('fa-chevron-right fa-chevron-down');
        // Remove the down arrow from other headers
        $('.accordion-header i').not($(this).find('i')).removeClass('fa-chevron-down').addClass('fa-chevron-right');
    })
})
$(document).ready(function(){
    $('#login').click(function(){
        $('.login-form').show();
    }),
    $('#close-form').click(function(){
        $('.login-form').hide();
    })
})
$(document).ready(function(){
    $('.phyron').hide();
    $('#phyron1').show();

    $('.team-work ul li').click(function(){
        $('.team-work ul li').removeClass('active');
        $('.phyron').hide();

        const target = $(this).data('target');
        $(target).show();
    })
})
