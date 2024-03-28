let degreeEle = document.getElementById("degreeInput");
let temperatureEle = document.getElementById("temperatureInput");
let convertEle = document.getElementById("convertBtn");
let errorMes = document.getElementById("errorMsg");
errorMes.classList.add("error");
let tempInUserWishEl1 = document.getElementById("tempInUserWish1");
let tempInUserWishEl2 = document.getElementById("tempInUserWish2");

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

function CelsiusToFahrenheitAndKelvin() {
    if (temperatureEle.value === "Celsius") {
        let cTemp = parseFloat(degreeEle.value);
        let fTemp = (cTemp * (9 / 5)) + 32;
        let kTemp = cTemp + 273.15;

        tempInUserWishEl1.textContent = roundNumber(fTemp) + "*F";
        tempInUserWishEl2.textContent = roundNumber(kTemp) + "*K";
        tempInUserWishEl1.classList.add("tempResult");
        tempInUserWishEl2.classList.add("tempResult");
    }
}

function FahrenheitToCelsiusAndKelvin() {
    if (temperatureEle.value === "Fahrenheit") {
        let fTemp = parseFloat(degreeEle.value);
        let cTemp = (fTemp - 32) * (5 / 9);
        let kTemp = (fTemp - 32) * (5 / 9) + 273.15;

        tempInUserWishEl1.textContent = roundNumber(cTemp) + "*C";
        tempInUserWishEl2.textContent = roundNumber(kTemp) + "*K";
        tempInUserWishEl1.classList.add("tempResult");
        tempInUserWishEl2.classList.add("tempResult");
    }
}

function KelvinToCelsiusAndFahrenheit() {
    if (temperatureEle.value === "Kelvin") {
        let kTemp = parseFloat(degreeEle.value);
        let cTemp = kTemp - 273.15;
        let fTemp = (kTemp - 273.15) * (9 / 5) + 32;

        tempInUserWishEl1.textContent = roundNumber(cTemp) + "*C";
        tempInUserWishEl2.textContent = roundNumber(fTemp) + "*K";
        tempInUserWishEl1.classList.add("tempResult");
        tempInUserWishEl2.classList.add("tempResult");
    }
}

convertEle.addEventListener("click", function buttonEle(event) {
    event.preventDefault();
    let degreeVal = degreeEle.value;
    let tempTypeVal = temperatureEle.value;
    if (degreeVal === "") {
        errorMes.textContent = "Please enter the number.";
        tempInUserWishEl1.textContent = "";
        tempInUserWishEl2.textContent = "";
        tempInUserWishEl1.classList.remove("tempResult");
        tempInUserWishEl2.classList.remove("tempResult");
    } else if (tempTypeVal === "") {
        errorMes.textContent = "Please select the temperature type.";
        tempInUserWishEl1.textContent = "";
        tempInUserWishEl2.textContent = "";
        tempInUserWishEl1.classList.remove("tempResult");
        tempInUserWishEl2.classList.remove("tempResult");
    } else {
        errorMes.textContent = null;
        CelsiusToFahrenheitAndKelvin();
        FahrenheitToCelsiusAndKelvin();
        KelvinToCelsiusAndFahrenheit();
    }
});