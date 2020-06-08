(function() {
  var head = document.querySelector('head');
  head.innerHTML = head.innerHTML + ('<link rel="stylesheet" href="mliyl-project.css"></link>');
  head.innerHTML = head.innerHTML + ('<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>');
  

  var widget = document.querySelector('#mliyl-project');
  var linkPortfolio = widget.dataset.linkPortfolio;


  widget.innerHTML = ""
  +"<div class='mliyl-overlay'></div>"
    +"<div class='mliyl-content'>"

    +"<div class='mliyl-rblock'></div>"

    +"<div class='mliyl-lblock'>"
      +"<div class='mliyl-info'>"
        +"my link is your link"
        +"<div class='mliyl-close'>x</div>"
      +"</div>"
      +"<div class='mliyl-text'>Obrigado por acessar meu portfolio. Nesse momento, eu tenho emprego, então doei o meu link pra um profissional vítima da crise do Covid-19 e que está precisando de uma vaga. Quem sabe você não contrata ele? Ele é muito bom. Pode ir lá, <a target='_blank' href='" + linkPortfolio + "'>clique aqui</a>. <br>Espero que goste. :)</div>"
    +"</div>"    
  +"</div>";
  

  function clearWidget(){
    document.querySelector('#mliyl-project').innerHTML = '';
  }

  document.querySelector(".mliyl-overlay").addEventListener("click", clearWidget);  
  document.querySelector(".mliyl-close").addEventListener("click", clearWidget);  
})();