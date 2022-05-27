const LIGHT_TARIFF_PREFERENTIAL = 3.61;
const LIGHT_TARIFF_NON_PREFERENTIAL = 4.25;
const LIGHT_TARIFF_LIMIT = 150;
const WATER_TARIFF_IN = 40.78;
const WATER_TARIFF_OUT = 28.8;

const documentElements = {
  light: document.querySelector('#light'),
  water: document.querySelector('#water'),
  gas: document.querySelector('#gas'),
  common: document.querySelector('#common'),

  lightCalculation: document.querySelector('.light .unit__calculation'),
  waterCalculation: document.querySelector('.water .unit__calculation'),

  lightResult: document.querySelector('.light .unit__result'),
  waterResult: document.querySelector('.water .unit__result'),

  total: document.querySelector('.total'),
};

const calcBtn = document.querySelector('.unit__gap');

calculateTotal();

calcBtn.addEventListener('click', calculateTotal);

function calculateLight(value) {
  let result;

  if (value > 150) {
    const overPreferential = value - LIGHT_TARIFF_LIMIT;
    const preferential = LIGHT_TARIFF_LIMIT * LIGHT_TARIFF_PREFERENTIAL;
    const nonPreferential = overPreferential * LIGHT_TARIFF_NON_PREFERENTIAL;
    result = preferential + nonPreferential;

    documentElements.lightCalculation.innerHTML = `${value} - ${LIGHT_TARIFF_LIMIT} =  ${overPreferential}<br>`;
    documentElements.lightCalculation.innerHTML += `${LIGHT_TARIFF_LIMIT} * ${LIGHT_TARIFF_PREFERENTIAL} = ${preferential}<br>`;
    documentElements.lightCalculation.innerHTML += `${overPreferential} * ${LIGHT_TARIFF_NON_PREFERENTIAL} = ${nonPreferential}<br>`;
    documentElements.lightCalculation.innerHTML += `${preferential} + ${nonPreferential} = ${result}`;
  } else {
    result = value * LIGHT_TARIFF_PREFERENTIAL;

    documentElements.lightCalculation.innerHTML = `${value} * ${LIGHT_TARIFF_PREFERENTIAL} = ${result}`;
  }

  documentElements.lightResult.innerHTML = result;

  return result;
}

function calculateWater(value) {
  const waterIn = value * WATER_TARIFF_IN;
  const waterOut = value * WATER_TARIFF_OUT;
  const result = waterIn + waterOut;

  documentElements.waterCalculation.innerHTML = `${value} * ${WATER_TARIFF_IN} = ${waterIn}<br>`;
  documentElements.waterCalculation.innerHTML += `${value} * ${WATER_TARIFF_OUT} = ${waterOut}<br>`;
  documentElements.waterCalculation.innerHTML += `${waterIn} + ${waterOut} = ${result}`;

  documentElements.waterResult.innerHTML = result;

  return result;
}

function calculateTotal() {
  let total = 0;

  total =
    calculateLight(documentElements.light.textContent) +
    calculateWater(documentElements.water.textContent) +
    +documentElements.gas.textContent +
    +documentElements.common.textContent;

  total = total.toFixed(2);

  documentElements.total.textContent = total + ' ₽';
  console.log(total);
}
