var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var generateButton = document.querySelector(".generate");

function setGradient() {
	body.style.background = "linear-gradient( to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

// 2. Display the initial CSS linear gradient property on page load.
function onLoad() {
	setGradient();
}

function generateGradient() {
	var randomColor1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	var randomColor2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	color1.value  = randomColor1;
	color2.value = randomColor2;
}

window.onload = onLoad;

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.
generateButton.addEventListener("click", function(){
	generateGradient();
	setGradient();
})
