import $ from 'jquery';

var loadingBackground = require('./modules/LoadingBackground');
var introButtonSound = require('./modules/IntroButtonSound');
var introAnimation = require('./modules/IntroAnimation');
var diamondMove = require('./modules/DiamondMove');
var mainNav = require('./modules/MainNav');

//preloader function

$(window).load(function(){
    
    diamondMove.move();
    mainNav.show();
    introAnimation.startIntro();
    $('#loading-page').remove();
    introButtonSound.introButtonSound();
    
    
    
});