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

const content = {
  pt: {
    portfolios: 'Conheça mais <br>profissionais disponíveis.',
    text: `⚠ <span style='text-decoration: line-through;'>Obrigado por acessar meu portfolio</span>. Eu doei meus acessos para o site de um profissional que está sem trabalho graças à crise do Covid-⓵⑨. e, nesse ℳomento, precisa mais do que eu. Quem sabe você não ©ontrata el☒? <a target='_blank' href='${linkPortfolio}'>☞ Clica aqui e vai na fé, que essx criativ☆ tem um puta portfolio.</a>`
  },
  en: {
    portfolios: 'More available <br>creatives.',
    text: `⚠ <span style='text-decoration: line-through;'> Thanks for popping by</span>. I donated my portfolio's views to the site of a creative who's lost his job because of the covid-⓵⑨ crisis. During these tough times, they need ℳore than just my help. Who knows you could hire them. <a target='_blank' href='${linkPortfolio}'>☞ Click here and go for it. Their portfolio is also very g☆od.</a>`
  }
};

const language = widget.dataset.language || 'pt';
const { text, portfolios } = content[language];

widget.innerHTML = `
    <div class='mliyl-overlay'></div>
    <div class='mliyl-content' style='display: none;'>
      <div class='mliyl-rblock'>
        <img src='https://mylinkisyourlink.herokuapp.com/assets/images/icon.png' class='mliyl-icon'>
      </div>
      <div class='mliyl-lblock'>
        <div class='wrapper-mobile'>
          <div class='mliyl-icon-mobile'>
            <img src='https://mylinkisyourlink.herokuapp.com/assets/images/icon.png' class='mliyl-icon'>
          </div>
          
          <div class='mliyl-info'>
            <img src='https://mylinkisyourlink.herokuapp.com/assets/images/logo.png' class='mliyl-logo'>
            <img src='https://mylinkisyourlink.herokuapp.com/assets/images/close.png' class='mliyl-close'>
            <div class='mliyl-contact'>
              <p class="mliyl-text-more">☆ ${portfolios}</p>
              <a href='https://docs.google.com/spreadsheets/u/2/d/1Ajf8vT-g5Z77ZK__LcF1pzJb-SqQKhL7e5pAGQTuNgE/edit' target='_blank'>
                <img src='https://mylinkisyourlink.herokuapp.com/assets/images/folder.png' class='mliyl-folder' alt='Portfolios'>
              </a>
              <a href='https://mylinkisyourlink.com/' target='_blank'>
                <img src='https://mylinkisyourlink.herokuapp.com/assets/images/site.png' class='mliyl-site' alt='Site'>
              </a>
              <a href='mailto:mylinkisyourlink@gmail.com'>
                <img src='https://mylinkisyourlink.herokuapp.com/assets/images/mail.png' class='mliyl-mail' alt='Email'>
              </a>
            </div>
          </div>
        </div>

        <div class='wrapper-text'>
          <div class='wrapper-options'>
            <div classs='wrapper-contact'>
              <a href='https://mylinkisyourlink.com/' target='_blank'>
                <img src='https://mylinkisyourlink.herokuapp.com/assets/images/site-m.png' class='mliyl-site-mobile' alt='Site'>
              </a>
              <a href='mailto:mylinkisyourlink@gmail.com'>
                <img src='https://mylinkisyourlink.herokuapp.com/assets/images/mail-m.png' class='mliyl-mail-mobile' alt='Email'>
              </a>
              <a href='https://docs.google.com/spreadsheets/u/2/d/1Ajf8vT-g5Z77ZK__LcF1pzJb-SqQKhL7e5pAGQTuNgE/edit' target='_blank'>
                <img src='https://mylinkisyourlink.herokuapp.com/assets/images/folder-m.png' class='mliyl-folder-mobile' alt='Portfolios'>
              </a>              
            </div>          
            <img src='https://mylinkisyourlink.herokuapp.com/assets/images/close-m.png' class='mliyl-close-mobile'>
          </div>
          <div class='mliyl-text ${language}'>${text}</div>
        </div>
      </div>
    </div>`;

function clearWidget() {
  $('#mliyl-project').remove();
}

$('.mliyl-overlay').addEventListener('click', clearWidget);
$('.mliyl-close').addEventListener('click', clearWidget);
$('.mliyl-close-mobile').addEventListener('click', clearWidget);

$('.mliyl-folder').addEventListener('mouseenter', () => {
  $('.mliyl-text-more').classList.add('visible');
});
$('.mliyl-folder').addEventListener('mouseleave', () => {
  $('.mliyl-text-more').classList.remove('visible');
});

(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  (i[r] =
    i[r] ||
    function () {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(
  window,
  document,
  'script',
  'https://www.google-analytics.com/analytics.js',
  'ga'
);

ga('create', 'UA-170740676-1', 'auto', 'widgetMLIYL');
ga('widgetMLIYL.send', 'pageview');
