//Flip
$(".cardFlip").flip();

//Mudar as nav
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

//Acessibilidade
$(function(){    
    $('[data-toggle="popover"]').popover({trigger: 'focus', html: true});

    $('a, p, h1, h2, h3, h4, h5, h6, img, figcaption, button, footer, span, div, ul, ol, li, code, dl, dt, pre, blockquote, dd, th, tbody, thead, tfoot, col table').each(function(index){
        $(this).attr('tabindex', ++index);
    });   
});

//Bloco de Codigo
hljs.initHighlightingOnLoad();
hljs.initLineNumbersOnLoad();



$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



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

