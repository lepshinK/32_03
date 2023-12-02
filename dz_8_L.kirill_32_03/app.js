const square = document.getElementById('square');

function getRandomValue() {
    return Math.floor(Math.random() * 256);
}

function getRandomColor() {
    const red = getRandomValue();
    const green = getRandomValue();
    const blue = getRandomValue();
    return`rgb(${red}, ${green}, ${blue})`;
}

square.addEventListener('click', function() {
    const randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
    square.textContent = randomColor;
});