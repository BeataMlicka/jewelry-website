import $ from 'jquery';

const startIntro = function(){
    
    var introMusic = document.getElementById('intro-music');
        
    $('.intro--background').addClass('intro--background--show');
    $('.intro--animation').addClass('intro--animation--show');
    
    setTimeout(function(){ 
        introMusic.play();      
    }, 1200);
    
    setTimeout(function(){ 
        $('.intro--animation').addClass('intro--animation--hide'); 
    }, 7200);
    
    setTimeout(function(){ 
        $('.intro--animation').remove();
        $('.intro--background').addClass('intro--background--transform');
    }, 8700);
    
    setTimeout(function(){ 
        $('.intro--main').addClass('intro--main--active');
    }, 9200);
    
}

module.exports.startIntro = startIntro;