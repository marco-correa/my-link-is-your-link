(function() {
  var head = document.querySelector('head');
  head.innerHTML = head.innerHTML + ('<link rel="stylesheet" href="assets/styles.css"></link>');
  head.innerHTML = head.innerHTML + ('<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>');
  
  var widget = document.querySelector('#mliyl-project');
  var linkPortfolio = widget.dataset.linkPortfolio;

  widget.innerHTML = ""
  +"<div class='mliyl-overlay'></div>"
    +"<div class='mliyl-content'>"

    +"<div class='mliyl-rblock'>"
      +"<img src='assets/images/icon.png' class='mliyl-icon'>"
    +"</div>"

    +"<div class='mliyl-lblock'>"
      +"<div class='mliyl-info'>"
        +"<img src='assets/images/logo.png' class='mliyl-logo'>"
        +"<img src='assets/images/close.png' class='mliyl-close'>"
        +"<div class='mliyl-contact'>"
          +"<a href='https://mylinkisyourlink.com/' target='_blank'>"
            +"<img src='assets/images/site.png' class='mliyl-site'>"
          +"</a>"
          +"<a href='mailto:mylinkisyourlink@gmail.com'>"
            +"<img src='assets/images/mail.png' class='mliyl-mail'>"
          +"</a>"        
        +"</div>"        
      +"</div>"
      +"<div class='mliyl-text'>⚠ <span style='text-decoration: line-through;'>Obrigado por acessar meu portfolio</span>. Eu doei meus acessos para o site de um profissional que está sem trabalho graças à crise do Covid-⓵⑨. e, nesse ℳomento, precisa mais do que eu. Quem sabe você não ©ontrata el☒? <a target='_blank' href='" + linkPortfolio + "'>☞ Clica aqui e vai na fé, que essx criativ☆ tem um puta portfolio.</a></div>"
    +"</div>"    
  +"</div>";
  

  function clearWidget(){
    document.querySelector('#mliyl-project').innerHTML = '';
  }

  document.querySelector(".mliyl-overlay").addEventListener("click", clearWidget);  
  document.querySelector(".mliyl-close").addEventListener("click", clearWidget);  
})();