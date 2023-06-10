const redSlider = document.getElementById("red-slider");
const greenSlider = document.getElementById("green-slider");
const blueSlider = document.getElementById("blue-slider");
const colorPreview = document.getElementById("color-preview");
const redValue = document.getElementById("red-value");
const greenValue = document.getElementById("green-value");
const blueValue = document.getElementById("blue-value");
const hexValue = document.getElementById("hex-value");

function updatePreview() {
    const red = parseInt(redSlider.value);
    const green = parseInt(greenSlider.value);
    const blue = parseInt(blueSlider.value);
    colorPreview.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    redValue.innerText = red;
    greenValue.innerText = green;
    blueValue.innerText = blue;

    const hexColor = [
        red.toString(16).padStart(2, '0'),
        green.toString(16).padStart(2, '0'),
        blue.toString(16).padStart(2, '0')
    ].join('');
    hexValue.innerText = hexColor.toUpperCase();
}

redSlider.addEventListener("input", updatePreview);
greenSlider.addEventListener("input", updatePreview);
blueSlider.addEventListener("input", updatePreview);

updatePreview();