$('.origami').origami({
  speed: 500
});

$(".coragem").hover(function(e) { 
    $(".tooltip").toggleClass("tooltip-on");        
});

$(".consideracao").hover(function(e) { 
    $(".tooltip_consideracao").toggleClass("tooltip-on");        
});

$(".info-button").click(function(e) { 
    $(".informacoes").toggleClass("informacoes-on");        
});