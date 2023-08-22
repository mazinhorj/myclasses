//Flip
$('.flip').on('click', function(){
        var $this = $(this);
        if($this.is('.flip')){
        $(this).removeClass('flip');        
    }else{
        $(this).addClass('flip');
    }
});

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

    $('a, p, h1, h2, h3, h4, h5, h6, img, figcaption, button, footer, span, ul, ol, li, code, dl, dt, pre, blockquote, dd, th, tbody, thead, tfoot, col table').each(function(index){
        $(this).attr('tabindex', ++index);
    });   
});

//Bloco de Codigo
hljs.initHighlightingOnLoad();
hljs.initLineNumbersOnLoad();

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//Controle print
document.getElementById('btn_print').onclick = function() {
  $("a, p, h1, h2, h3, h4, h5, h6, img, figcaption, figure, button, footer, span, div, ul, ol, li, code, dl, dt, pre, blockquote, dd, th, tbody, thead, tfoot, col, table, section").removeAttr("data-aos");
  window.print();
};

//Zoom fonte
var $btnAumentar = $("#btnAumentar");
var $btnReset = $("#btnReset");
var $btnDiminuir = $("#btnDiminuir");
var $elemento = $("body").find("*");
var fonts = [];
var reset = [];

(function obterTamanhoFonte() {
  for (var i = 0; i < $elemento.length; i++) {
    fonts.push(parseFloat($elemento.eq(i).css('font-size')));
    reset.push(parseFloat($elemento.eq(i).css('font-size')));
  }
})()

$btnAumentar.on('click', function() {
  for (var i = 0; i < $elemento.length; i++) {
    ++fonts[i];
    $elemento.eq(i).css('font-size', fonts[i]);
  }
});

$btnDiminuir.on('click', function() {
  for (var i = 0; i < $elemento.length; i++) {
    --fonts[i];
    $elemento.eq(i).css('font-size', fonts[i]);
  }
});

$btnReset.on('click', function() {
  for (var i = 0; i < $elemento.length; i++) {
    $elemento.eq(i).css('font-size', reset[i]);
    fonts[i] = reset[i];
  }
});

$('#myCollapsible').on('hidden.bs.collapse', function () {
  // do something…
})

