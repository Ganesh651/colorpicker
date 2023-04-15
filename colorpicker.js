let colorPickerContainer = document.getElementById("colorPickerContainer");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let selectedColorHexCode = document.getElementById("selectedColorHexCode");

button1.addEventListener("click", function(event){
    colorPickerContainer.style.backgroundColor = "#e0e0e0"
    selectedColorHexCode.textContent = "#e0e0e0"
});
button2.addEventListener("click", function(event){
    colorPickerContainer.style.backgroundColor = "#6fcf97"
    selectedColorHexCode.textContent = "#6fcf97"
});
button3.addEventListener("click", function(event){
    colorPickerContainer.style.backgroundColor = "#56ccf2"
    selectedColorHexCode.textContent = "#56ccf2"
});
button4.addEventListener("click", function(event){
    colorPickerContainer.style.backgroundColor = "#bb6bd9"
    selectedColorHexCode.textContent = "#bb6bd9"
});