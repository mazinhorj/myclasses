var controlador = true;
var i = 0;
$(document).ready(function(){
	$("#Diagramador").css("display","none");
	$("#url").val(window.location.href);
	var mensagem = "";
	$(document).click(function() {
  		i++;
		$("#quantidadeCliques").text(i);
	});
  // Get the window displayed in the iframe.
  var receiver = document.getElementById('receiver').contentWindow;
function checkFocus() {
  if(document.activeElement == document.getElementById("receiver")) {
	if(controlador === true){
	mensagem = " ";
	mensagem +='<p>' +"@ Tipo do Produto: " + $("#restipodoProduto").text();
	mensagem += '<p>'+"@ Nome da Disciplina: " + $("#resnomedaDisciplina").text();
	mensagem += '<p>'+"@ Nivel Prioridade: " + $("#resnivelPrioridade").text();
	mensagem += '<p>'+"@ Nome do Produto: " + $("#resnomedoProduto").text();
	mensagem += '<p>'+"@ Semestre Producao: " + $("#ressemestreProducao").text();
	mensagem += '<p>'+"@ Midias Externas: " + $("#resmidiasExternas").text();
	mensagem += '<p>'+"@ URL: " + $("#url").val();
	mensagem += '<p>'+"@ Quantidade Cliques: " + $("#quantidadeCliques").text();
    //Send a message to the receiver window.
    receiver.postMessage( mensagem, 'https://dedmd.com.br/formularioFeedBack');
	controlador = false;
  } 
}else {
    console.log('iframe not focused');
  }
}
window.setInterval(checkFocus, 3000);
 	
});