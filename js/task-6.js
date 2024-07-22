function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
    const input = document.querySelector('#controls input');
    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const boxesContainer = document.querySelector('#boxes');
    createButton.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);
    if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
    } else {
    alert('Please enter a number between 1 and 100.');
    }
  });
     destroyButton.addEventListener('click', destroyBoxes);
    function createBoxes(amount) {
    boxesContainer.innerHTML = '';
    const boxes = [];
    for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    boxes.push(`<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}">${size}</div>`);
  }
    boxesContainer.innerHTML = boxes.join('');
  }
    function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }