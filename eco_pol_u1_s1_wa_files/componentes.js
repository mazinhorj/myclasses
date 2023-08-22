//flip
$(".cardFlip").flip();

$('.nav-tabs, .nav-pills').scrollingTabs({
  bootstrapVersion: 4,
  enableSwiping: true,
  scrollToTabEdge: true
});

// Scroll Voltar ao topo
$(document).ready(function () {
    $('.scroll-home').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});

//Impede que o evento padrão ocorra.
$('[data-toggle="popover"]').click(function (e) {
        e.preventDefault();
});

$(function(){    
    $('[data-toggle="popover"]').popover({trigger: 'focus', html: true});

    $('a, p, h1, h2, h3, h4, h5, h6, img, figcaption, button, footer').each(function(index){
        $(this).attr('tabindex', ++index);
    });   
});

hljs.initHighlightingOnLoad();
hljs.initLineNumbersOnLoad();

//Controle de fonte
  $(document).ready(function() {
      $.textResize('#content', {
        'variation': 2,
        'animation' : true,
        'containerInsert' : '.myContainer',
        'reduceText'    : 'A-',
        'resetText'     : 'A',
        'enlargeText'   : 'A+',
        'classReduce'   : 'diminuir',
        'classReset'    : 'normal',
        'classEnlarge'  : 'aumentar',
        'optionInterface' : 'button',
        'clicks'      : 3,
        'cookie'      : 'tamanho',
        'animation' : true,
        'imageAnimation' : true
      });
    });