/* const light = document.querySelector('#light');
const water = document.querySelector('#water');
const def = document.querySelector('#default');
const gas = document.querySelector('#gas');
const total = document.querySelector('.total');

const calcBtn = document.querySelector('#calculate');

calcBtn.addEventListener('click', () => {
  let sum = 0;

  sum += +gas.value;
  sum += +def.value;
  sum += water.value * (40.78 + 28.8);

  const fixed = 150;
  let over = light.value - 150;
  sum += fixed * 3.61 + over * 4.25;

  total.textContent = sum;
  console.log(sum);
});
 */
