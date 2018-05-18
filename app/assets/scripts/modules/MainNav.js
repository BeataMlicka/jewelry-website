import $ from 'jquery';

const show = function() {
        
    var open = false;
    var black = true;
                
    var el = document.getElementById('menu');
    
    console.log('JESTEM!');
    
    console.log(el);
    
    if(el) {
       
    el.addEventListener('click', function(){
    
        console.log('click');
        
        if($(this).attr("class").indexOf('menu--white') != -1){
            black = false;
        } else {
            black = true;
        }
        
        console.log('Status - ' + open);
                
        if(!open){
            $('.mobile-nav').addClass('mobile-nav--open');
            $('.menu').addClass('menu--open');
            $('.menu').addClass('menu--close-x');
//            $(".top-bar").removeClass("top-bar--white-background");
            
            open = true;
            
            
//            if(black){
//                $('.menu').addClass('menu-icon--white');
//                $('.logo').addClass('logo--white');
//            }
            
        } else {
            $('.mobile-nav').removeClass('mobile-nav--open');
            $('.menu').removeClass('menu--open');
            $('.menu').removeClass('menu--close-x');
            open = false;
            
//            if(black){
//                $(".top-bar").addClass("top-bar--white-background");
//                $('.menu-icon').removeClass('menu-icon--white');
//                $('.logo').removeClass('logo--white');
//            }
        }
    });
    }
}

module.exports.show = show;