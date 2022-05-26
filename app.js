const LIGHT_TARIFF_PREFERENTIAL = 3.61;
const LIGHT_TARIFF_NON_PREFERENTIAL = 4.25;
const LIGHT_TARIFF_LIMIT = 150;
const WATER_TARIFF_IN = 40.78;
const WATER_TARIFF_OUT = 28.8;

const light = document.querySelector('#light');
const water = document.querySelector('#water');
const def = document.querySelector('#common');
const gas = document.querySelector('#gas');
const total = document.querySelector('.total');

const foock = document.querySelector('.light .unit__calculation');
const phuck = document.querySelector('.water .unit__calculation');

const calcBtn = document.querySelector('.unit__gap');

calcBtn.addEventListener('click', () => {
  let sum = 0;

  sum += +gas.textContent;
  sum += +def.textContent;

  sum += waterCalculation(water.textContent);

  sum += lightCalculation(light.textContent);

  sum = sum.toFixed(2);

  total.textContent = sum;
  console.log(sum);
});

function lightCalculation(value) {
  let result;

  if (value > 150) {
    const overPreferential = value - LIGHT_TARIFF_LIMIT;
    const preferential = LIGHT_TARIFF_LIMIT * LIGHT_TARIFF_PREFERENTIAL;
    const nonPreferential = overPreferential * LIGHT_TARIFF_NON_PREFERENTIAL;
    result = preferential + nonPreferential;

    foock.innerHTML = `${value} - ${LIGHT_TARIFF_LIMIT} =  ${overPreferential}<br>`;
    foock.innerHTML += `${LIGHT_TARIFF_LIMIT} * ${LIGHT_TARIFF_PREFERENTIAL} = ${preferential}<br>`;
    foock.innerHTML += `${overPreferential} * ${LIGHT_TARIFF_NON_PREFERENTIAL} = ${nonPreferential}<br>`;
    foock.innerHTML += `${preferential} + ${nonPreferential} = ${result}`;
  } else {
    result = value * LIGHT_TARIFF_PREFERENTIAL;

    foock.innerHTML = `${value} * ${LIGHT_TARIFF_PREFERENTIAL} = ${result}`;
  }

  return result;
}

function waterCalculation(value) {
  const waterIn = value * WATER_TARIFF_IN;
  const waterOut = value * WATER_TARIFF_OUT;
  const result = waterIn + waterOut;

  phuck.innerHTML = `${value} * ${WATER_TARIFF_IN} = ${waterIn}<br>`;
  phuck.innerHTML += `${value} * ${WATER_TARIFF_OUT} = ${waterOut}<br>`;
  phuck.innerHTML += `${waterIn} * ${waterOut} = ${result}`;

  return result;
}
