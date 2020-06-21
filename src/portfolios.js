const portfolios = [
  {
    nome: 'Adriano Brodbeck',
    funcao: 'DA',
    genero: 'H',
    link: 'http://adrianobrodbeck.com/portfolio'
  },
  {
    nome: 'Bia Penha',
    funcao: 'Redatora',
    genero: 'M',
    link: 'https://readymag.com/u15416806/eutueabia/'
  },
  {
    nome: 'Mário Vinícius',
    funcao: 'Motion',
    genero: 'H',
    link: 'https://www.instagram.com/motionmariovfx/'
  }
];

const getPortfolio = () => {
  return portfolios[Math.floor(Math.random() * portfolios.length)];
};

export default getPortfolio;
