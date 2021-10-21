export default function initMaskMoney() {
  const input = document.querySelector('#myInput');

  // configuration
  const args = {
    afterFormat() {},
    allowNegative: false,
    beforeFormat() {},
    negativeSignAfter: false,
    prefix: 'R$ ',
    suffix: '',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'end',
  };

  function startMaskMoney() {
    const inputMask = SimpleMaskMoney.setMask('#myInput', args);
    inputMask.formatToNumber();
  }

  input.addEventListener('click', startMaskMoney);
}
