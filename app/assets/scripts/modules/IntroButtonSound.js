import $ from 'jquery';

const action = function(){
    
    var sound = document.getElementById('button-sound');
    
    $( document ).ready(function() {
	   var audio = $("#button-sound");
	
	   $("#hnoss-trigger").mouseup(function() {
           console.log('KLIK');
	       sound.play();
	   });
});

}

module.exports.introButtonSound = action;