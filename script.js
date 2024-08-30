document.getElementById("colorPicker").addEventListener("input", function() {
    let hexValue = this.value;
    document.getElementById("hexValue").textContent = hexValue;

    let r = parseInt(hexValue.slice(1, 3), 16);
    let g = parseInt(hexValue.slice(3, 5), 16);
    let b = parseInt(hexValue.slice(5, 7), 16);

    let rgbValue = rgb(`${r}, ${g}, ${b}`);
    document.getElementById("rgbValue").textContent = rgbValue;
});