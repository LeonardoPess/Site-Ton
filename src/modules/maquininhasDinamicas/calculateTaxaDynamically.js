export default function initCalculateTaxaDynamically() {
  const allPlansMenu = document.querySelectorAll('[data-plano]');
  const plansMenuHeader = document.querySelectorAll('.desktop-menu a');
  const taxaResultBox1 = document.querySelector('[data-dynamically="taxa-result1"]');
  const taxaResultBox2 = document.querySelector('[data-dynamically="taxa-result2"]');
  const taxaResultBox3 = document.querySelector('[data-dynamically="taxa-result3"]');
  const parcelamento = document.querySelector('[data-dynamically="taxa-parcelamento"]');
  const bandeira = document.querySelector('[data-dynamically="taxa-bandeira"]');
  const daysOptions2 = document.querySelector('[data-dynamically="taxa-days2"]');
  const daysOptions3 = document.querySelector('[data-dynamically="taxa-days3"]');
  const bandeiraMessage = document.querySelector('[data-dynamically="bandeira-message"]');

  // Taxa flag one   --   indice 0 == Débito
  const taxaGigaTonFlagOne = ['1.45', '2.90', '3.59', '3.93', '4.26', '4.59', '4.92', '5.83', '6.16', '6.48', '6.81', '7.13', '7.44'];
  const taxaMegaTonFlagOne = ['1.48', '2.96', '4.04', '4.58', '5.12', '5.66', '6.20', '6.74', '7.28', '7.82', '8.36', '8.90', '9.44'];
  const taxaTonBasicoFlagOne = ['1.99', '4.73', '8.96', '10.74', '12.01', '13.27', '14.51', '15.72', '16.92', '18.09', '19.23', '20.36', '21.46'];

  // One day flag two   --   indice 0 == Débito
  const taxaGigaTonFlagTwo = ['2.45', '4.09', '4.78', '5.11', '5.44', '5.77', '6.09', '6.90', '7.23', '7.55', '7.86', '8.18', '8.50'];
  const taxaMegaTonFlagTwo = ['2.48', '4.15', '5.23', '5.77', '6.31', '6.85', '7.39', '7.93', '8.47', '9.01', '9.55', '10.09', '10.63'];

  let taxa1; let taxa2; let taxa3;

  function insertTaxaOnHTML() {
    taxaResultBox1.innerHTML = `${taxa1.replace('.', ',')}%`;
    taxaResultBox2.innerHTML = `${taxa2.toString().replace('.', ',')}%`;
    taxaResultBox3.innerHTML = `${taxa3.toString().replace('.', ',')}%`;
  }

  function calculateTaxa(taxaArrayFlagOne, taxaArrayFlagTwo) {
    [taxa1] = taxaArrayFlagOne;
    if (bandeira.value === '2') { [taxa1] = taxaArrayFlagTwo; }

    [, taxa2] = taxaArrayFlagOne;
    if (bandeira.value === '2') { [, taxa2] = taxaArrayFlagTwo; }
    if (daysOptions2.value === '2') { taxa2 = Math.round((taxa2 - 0.01) * 100) / 100; }
    if (daysOptions2.value === '3') { taxa2 = Math.round((taxa2 - 0.02) * 100) / 100; }

    taxa3 = taxaArrayFlagOne[parcelamento.value];
    if (bandeira.value === '2') { taxa3 = taxaArrayFlagTwo[parcelamento.value]; }
    if (daysOptions3.value === '2') { taxa3 = Math.round((taxa3 - 0.01) * 100) / 100; }
    if (daysOptions3.value === '3') { taxa3 = Math.round((taxa3 - 0.02) * 100) / 100; }
  }

  function calculate(plano) {
    bandeiraMessage.innerHTML = 'Taxas para vendas das bandeiras';
    bandeira.classList.remove('hide');

    if (plano === '1' || null) {
      calculateTaxa(taxaGigaTonFlagOne, taxaGigaTonFlagTwo);
    }

    if (plano === '2') {
      calculateTaxa(taxaMegaTonFlagOne, taxaMegaTonFlagTwo);
    }

    if (plano === '3') {
      bandeiraMessage.innerHTML = 'Taxas para vendas em <b>todas as bandeiras</b>';
      bandeira.classList.add('hide');

      [taxa1] = taxaTonBasicoFlagOne;

      [, taxa2] = taxaTonBasicoFlagOne;
      if (daysOptions2.value === '2') { taxa2 = Math.round((taxa2 - 0.95) * 100) / 100; }
      if (daysOptions2.value === '3') { taxa2 = Math.round((taxa2 - 1.71) * 100) / 100; }

      taxa3 = taxaTonBasicoFlagOne[parcelamento.value];
      if (daysOptions3.value === '2') { taxa3 = Math.round((taxa3 - 1) * 100) / 100; }
      if (daysOptions3.value === '3') { taxa3 = Math.round((taxa3 - 1.49) * 100) / 100; }
    }
    insertTaxaOnHTML();
  }

  function handleClick(e) {
    const plano = e.currentTarget.getAttribute('data-plano');
    calculate(plano);
  }

  allPlansMenu.forEach((plan) => {
    plan.addEventListener('click', handleClick);
  });

  function init() {
    plansMenuHeader.forEach((plan) => {
      if (plan.classList.contains('selected')) {
        const plano = plan.getAttribute('data-plano');
        calculate(plano);
      }
    });
  }
  init();

  [parcelamento, bandeira, daysOptions2, daysOptions3].forEach((el) => {
    el.addEventListener('change', init);
  });
}
