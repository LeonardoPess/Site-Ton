export default function initUpdateDynamically() {
  const allPlansMenu = document.querySelectorAll('[data-plano]');
  const plansMenuHeader = document.querySelectorAll('.desktop-menu a');
  const bannerGeneral = document.querySelector('.banner');
  const planNameElement = document.querySelector('[data-banner="plano"]');
  const taxaElement = document.querySelector('[data-banner="porcentagem"]');
  const descElement = document.querySelector('[data-banner="desc"]');
  const maquininhas = document.querySelectorAll('[data-banner="maquininha"]');
  const maquininhasImages = document.querySelectorAll('[data-dynamically="img"]');
  const maquininhasPrices1x = document.querySelectorAll('[data-dynamically="preco1x"]');
  const maquininhasPrices12x = document.querySelectorAll('[data-dynamically="preco12x"]');
  const maquininhasNames = document.querySelectorAll('[data-dynamically="maquininha"]');
  const planNameMaquininha = document.querySelector('[data-dynamically="plano"]');
  const sellButtons = document.querySelectorAll('[data-dynamically="sellButton"]');
  const regulamentoBox = document.querySelector('[data-dynamically="plano-regulamento"]');
  const planTitle = document.querySelector('[data-dynamically="plano-title"]');

  // LINKS DE VENDA PARA AS MAQUININHAS
  const sellLinksGiga = ['./', './', './'];
  const sellLinksMega = ['./', './', './'];
  const sellLinksBasico = ['./', './', './'];

  function updateBanner(classe, planName, taxa, desc) {
    bannerGeneral.classList.add(classe);
    planNameElement.innerHTML = planName;
    taxaElement.innerHTML = taxa;
    descElement.innerHTML = desc;
  }

  function removeBannerClass() {
    bannerGeneral.classList.remove('tonbasico-banner');
    bannerGeneral.classList.remove('gigaton-banner');
    bannerGeneral.classList.remove('megaton-banner');
  }

  function updateMaquininhaModels(model1, model2, model3) {
    maquininhas.forEach((maquininha, index) => {
      let maquininhaModel;

      if (index === 0) { maquininhaModel = model1; }
      if (index === 1) { maquininhaModel = model2; }
      if (index === 2) { maquininhaModel = model3; }

      maquininha.innerHTML = maquininhaModel;
    });
  }

  function updateMaquininhaImages(imageURL1, imageURL2, imageURL3) {
    maquininhasImages.forEach((imageBox, index) => {
      imageBox.classList.remove('ativo');
      let maquininhaImage;

      if (index === 0) { maquininhaImage = imageURL1; }
      if (index === 1) { maquininhaImage = imageURL2; }
      if (index === 2) { maquininhaImage = imageURL3; }

      imageBox.src = maquininhaImage;

      imageBox.classList.add('ativo');
      setTimeout(() => { imageBox.classList.remove('ativo'); }, 1000);
    });
  }

  function updateMaquininhasPrices1x(value1, value2, value3) {
    maquininhasPrices1x.forEach((maquininha, index) => {
      let maquininhaPrice;

      if (index === 0) { maquininhaPrice = value1; }
      if (index === 1) { maquininhaPrice = value2; }
      if (index === 2) { maquininhaPrice = value3; }

      maquininha.innerHTML = maquininhaPrice;
    });
  }

  function updateMaquininhasPrices12x(value1, value2, value3) {
    maquininhasPrices12x.forEach((maquininha, index) => {
      let maquininhaPrice;

      if (index === 0) { maquininhaPrice = value1; }
      if (index === 1) { maquininhaPrice = value2; }
      if (index === 2) { maquininhaPrice = value3; }

      maquininha.innerHTML = maquininhaPrice;
    });
  }

  function updateMaquininhasName(name1, name2, name3) {
    maquininhasNames.forEach((maquininha, index) => {
      let maquininhaName;

      if (index === 0) { maquininhaName = name1; }
      if (index === 1) { maquininhaName = name2; }
      if (index === 2) { maquininhaName = name3; }

      maquininha.innerHTML = maquininhaName;
    });
  }

  function updateSellButonsText(text1, text2, text3) {
    sellButtons.forEach((sellButton, index) => {
      let sellButtonsText;

      if (index === 0) { sellButtonsText = text1; }
      if (index === 1) { sellButtonsText = text2; }
      if (index === 2) { sellButtonsText = text3; }

      sellButton.innerHTML = sellButtonsText;
    });
  }

  function updateSellButonsLink(link1, link2, link3) {
    sellButtons.forEach((sellButton, index) => {
      let sellButtonsLink;

      if (index === 0) { sellButtonsLink = link1; }
      if (index === 1) { sellButtonsLink = link2; }
      if (index === 2) { sellButtonsLink = link3; }

      sellButton.setAttribute('href', sellButtonsLink);
    });
  }

  function update(plano) {
    removeBannerClass();

    if (plano === '1') {
      updateBanner('gigaton-banner', 'GigaTon', '7,44%', 'No crédito em 12x');
      planNameMaquininha.innerHTML = 'GigaTon';
      updateMaquininhaModels('T3 Giga', 'T2 Giga', 'T1 Giga');
      updateMaquininhaImages('./assets/maquininhas/t1giga.jpg', './assets/maquininhas/t2giga.png', './assets/maquininhas/t3giga.png');
      updateMaquininhasPrices1x('por: R$106,92', 'por: R$258,12', 'por: R$366,12');
      updateMaquininhasPrices12x('8,91', '21,51', '30,51');
      updateMaquininhasName('T1 Giga', 'T2+ Giga', 'T3 Giga');
      updateSellButonsText('PEDIR GIGATON', 'PEDIR T2+ GIGA', 'PEDIR T3 GIGA');
      updateSellButonsLink(...sellLinksGiga);
      regulamentoBox.innerHTML = '*Conheça o <a href="https://registon.api.ton.com.br/documents/regulamento-gigaton/latest?_ga=2.36063648.1260877289.1632585809-770312178.1632100683" target="_blank">Regulamento para o GigaTon</a>';
      planTitle.innerHTML = 'GigaTon';
    }

    if (plano === '2') {
      updateBanner('megaton-banner', 'MegaTon', '9,44%', 'No crédito em 12x');
      planNameMaquininha.innerHTML = 'Megaton';
      updateMaquininhaModels('T3 Mega', 'T2 Mega', 'T1 Mega');
      updateMaquininhaImages('./assets/maquininhas/t1mega.png', './assets/maquininhas/t2mega.png', './assets/maquininhas/t3mega.png');
      updateMaquininhasPrices1x('por: R$52,92', 'por: R$182,52', 'por: R$290,52');
      updateMaquininhasPrices12x('4,41', '15,21', '24,21');
      updateMaquininhasName('T1 Mega', 'T2+ Mega', 'T3 Mega');
      updateSellButonsText('PEDIR T1 MEGA', 'PEDIR T2+ MEGA', 'PEDIR T3 MEGA');
      updateSellButonsLink(...sellLinksMega);
      regulamentoBox.innerHTML = '*Conheça o <a href="https://registon.api.ton.com.br/documents/regulamento-megaton/latest?_ga=2.24012474.1260877289.1632585809-770312178.1632100683" target="_blank">Regulamento para o MegaTon</a>';
      planTitle.innerHTML = 'MegaTon';
    }

    if (plano === '3') {
      updateBanner('tonbasico-banner', 'Ton Básico', 'Menor preço', 'nas maquininhas');
      planNameMaquininha.innerHTML = 'Ton Básico';
      updateMaquininhaModels('T3', 'T2', 'T1');
      updateMaquininhaImages('./assets/maquininhas/t1basico.png', './assets/maquininhas/t2basico.png', './assets/maquininhas/t3basico.png');
      updateMaquininhasPrices1x('por: R$11,88', 'por: R$171,72', 'por: R$182,52');
      updateMaquininhasPrices12x('0,99', '14,31', '15,21');
      updateMaquininhasName('T1 Básico', 'T2+ Básico', 'T3 Básico');
      updateSellButonsText('PEDIR T1 BÁSICO', 'PEDIR T2+ BÁSICO', 'PEDIR T3 BÁSICO');
      updateSellButonsLink(...sellLinksBasico);
      regulamentoBox.innerHTML = '';
      planTitle.innerHTML = 'Ton Básico';
    }
  }

  function handleClick(e) {
    const planName = e.currentTarget.getAttribute('data-plano');
    update(planName);
  }

  allPlansMenu.forEach((plan) => {
    plan.addEventListener('click', handleClick);
  });

  plansMenuHeader.forEach((plan) => {
    if (plan.classList.contains('selected')) {
      const planName = plan.getAttribute('data-plano');
      update(planName);
    }
  });
}
