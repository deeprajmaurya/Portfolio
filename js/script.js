$(document).ready(function(){

    $('#slides').superslides({

        animation:'fade',
        play:4000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Software Engineer ", "Full Stack Developer."],
        typeSpeed:70,
        loop:true,
        startDelay:900,
        showCursor:false
    });



    $('.owl-carousel').owlCarousel({
        items:4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

   


        var skillsTopOffset = $(".skills_section").offset().top;
        $(window).scroll(function(){
            console.log(window.pageYOffset);

            if(window.pageYOffset > skillsTopOffset- $(window).height() +200)
            {
                $('.chart').easyPieChart({
                    easing: 'easeInOut',
                    barColor: '#fff',
                    trackColor:false,
                    scaleColor:false,
                    lineWidth:4,
                    size:152,
                    onStep:function(from,to,percent){
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
            }
        });




});