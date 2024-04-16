
// Generate random color
function generateRandomColor() {
	const r = Math.floor(Math.random() * 256)
	const g = Math.floor(Math.random() * 256)
	const b = Math.floor(Math.random() * 256)

	const colorCode = `rgb(${r}, ${g}, ${b})`
	return colorCode
}

// Set background color and display color code
function setBackgroundColor(color) {
	const colorBox = document.querySelector('.color-box')
	colorBox.style.backgroundColor = color

	const colorCode = document.querySelector('.color-code')
	colorCode.textContent = color
}

// Add event listener to generate button
const generateBtn = document.getElementById('generateBtn')

generateBtn.addEventListener('click', function () {
	const randomColor = generateRandomColor()
	setBackgroundColor(randomColor)
})

// Add event listener to set color button
setColorBtn.addEventListener('click', function () {
	const selectedColor = colorPicker.value
	setBackgroundColor(selectedColor)
})

// Set initial background color on page load
setBackgroundColor('#FFFFFF')
