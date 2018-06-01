var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();

var h1 = document.querySelector('h1');

var colorDisplay = document.querySelector('#colorDisplay');
colorDisplay.textContent = pickedColor;

var messageDisplay = document.querySelector('#message');

var resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function(){
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	this.textContent = 'New Colors';
	messageDisplay.textContent = '';

	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = 'steelblue';
});

var easyButton = document.querySelector('#easyBtn');
var hardButton = document.querySelector('#hardBtn');

easyButton.addEventListener('click', function(){
	hardButton.classList.remove('selected');
	easyButton.classList.add('selected');
	
	numOfSquares = 3;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} 
		else {
			squares[i].style.display = 'none';
		}
	}
});

hardButton.addEventListener('click', function(){
	easyButton.classList.remove('selected');
	hardButton.classList.add('selected');

	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = 'block';
	}
});

for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener('click', function() {
		var clickedColor = this.style.backgroundColor;
		if(clickedColor !== pickedColor) {
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again!';
		}
		else{
			messageDisplay.textContent = 'Correct!';
			resetButton.textContent = 'Play Again?';
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
	});
}

function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];

	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
