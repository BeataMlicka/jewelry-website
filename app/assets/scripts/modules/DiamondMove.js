import $ from 'jquery';

const move = function(){
        
    //------------
    
    $('#second').mouseover(function(){
        $(".diamond").addClass("diamond--150");
    });
    
    $('#second').mouseleave(function(){
        if($(".diamond--150")) {
            $(".diamond").removeClass("diamond--150");
        }
    });
    
    //-------------
    
    $('#third').mouseover(function(){
        $(".diamond").addClass("diamond--300");
    });
    
    $('#third').mouseleave(function(){
        if($(".diamond--300")) {
            $(".diamond").removeClass("diamond--300");
        }
    });    
    
    //-------------
    
    $('#fourth').mouseover(function(){
        $(".diamond").addClass("diamond--450");
    });
    
    $('#fourth').mouseleave(function(){
        if($(".diamond--450")) {
            $(".diamond").removeClass("diamond--450");
        }
    });    
    
    //-------------
    
    $('#fifth').mouseover(function(){
        $(".diamond").addClass("diamond--600");
    });
    
    $('#fifth').mouseleave(function(){
        if($(".diamond--600")) {
            $(".diamond").removeClass("diamond--600");
        }
    });    

    //------------ removes unnecessary class    
    
    $('.diamond-nav').mouseleave(function(){
        
        if($(".diamond--150")) {
           $(".diamond").removeClass("diamond--150");
        }
        if(".diamond--300"){
            $(".diamond").removeClass("diamond--300");  
        }
        if(".diamond--450"){
            $(".diamond").removeClass("diamond--300");  
        }
        if(".diamond--600"){
            $(".diamond").removeClass("diamond--300");  
        }
    });
    
}

module.exports.move = move;














