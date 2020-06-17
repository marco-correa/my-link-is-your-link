/* 
  GitHub: https://github.com/marco-correa/my-link-is-your-link 
  Authour: Marco Correa
*/
import './assets/styles.scss';

const $ = document.querySelector.bind(document);

const head = $('head');
head.innerHTML = `
    ${head.innerHTML}
    <link rel="stylesheet" href="https://mylinkisyourlink.herokuapp.com/assets/styles.css"></link>
    <link rel="stylesheet" href="https://use.typekit.net/aap5wjp.css"></link>
  `;

const widget = $('#mliyl-project');
const linkPortfolio = widget.dataset.linkPortfolio;

const languages = {
  pt: `⚠ <span style='text-decoration: line-through;'>Obrigado por acessar meu portfolio</span>. Eu doei meus acessos para o site de um profissional que está sem trabalho graças à crise do Covid-⓵⑨. e, nesse ℳomento, precisa mais do que eu. Quem sabe você não ©ontrata el☒? <a target='_blank' href='${linkPortfolio}'>☞ Clica aqui e vai na fé, que essx criativ☆ tem um puta portfolio.</a>`,
  en: `⚠ <span style='text-decoration: line-through;'> Thanks for popping by</span>. I donated my portfolio's views to the site of a creative who's lost his job because of the covid-⓵⑨ crisis. During these tough times, they need ℳore than just my help. Who knows you could hire them. <a target='_blank' href='${linkPortfolio}'>☞ Click here and go for it. Their portfolio is also very g☆od.</a>`
};

const languageSelected = widget.dataset.language || 'pt';
const textSelected = languages[languageSelected];

widget.innerHTML = `
    <div class='mliyl-overlay'></div>
    <div class='mliyl-content' style='display: none;'>
      <div class='mliyl-rblock'>
        <img src='https://mylinkisyourlink.herokuapp.com/assets/images/icon.png' class='mliyl-icon'>
      </div>
      <div class='mliyl-lblock'>
        <div class='mliyl-info'>
          <img src='https://mylinkisyourlink.herokuapp.com/assets/images/logo.png' class='mliyl-logo'>
          <img src='https://mylinkisyourlink.herokuapp.com/assets/images/close.png' class='mliyl-close'>
          <div class='mliyl-contact'>
            <a href='https://mylinkisyourlink.com/' target='_blank'>
              <img src='https://mylinkisyourlink.herokuapp.com/assets/images/site.png' class='mliyl-site'>
            </a>
            <a href='mailto:mylinkisyourlink@gmail.com'>
              <img src='https://mylinkisyourlink.herokuapp.com/assets/images/mail.png' class='mliyl-mail'>
            </a>
          </div>
        </div>
        <div class='mliyl-text ${languageSelected}'>${textSelected}</div>
      </div>
    </div>`;

function clearWidget() {
  $('#mliyl-project').remove();
}

$('.mliyl-overlay').addEventListener('click', clearWidget);
$('.mliyl-close').addEventListener('click', clearWidget);
