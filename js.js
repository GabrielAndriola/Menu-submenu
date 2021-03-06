
$(document).ready(function() 
{
 var botao = $('.bt1');
 var dropDown = $('.ul-noticias');    

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});
$(document).ready(function() 
{
 var botao = $('.bt2');
 var dropDown = $('.ul-etreti');    

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});
$(document).ready(function() 
{
 var botao = $('.bt3');
 var dropDown = $('.ul-falec');    

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});