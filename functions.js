function pause () {
	gState = 0;
	bgm.pause();
}

function resume () {
	gState = 1;
	bgm.play();
}

function playAudio (audio) {
	audio.currentTime = 0;
	audio.play();
}

function stopAudio (audio) {
	audio.pause();
	audio.currentTime = 0;
}

function newImg (path) {
	tempImg = new Image();
	tempImg.src = path;
	images.push(tempImg);
	return tempImg;
}

function drawImage (img, x, y, w, h) {
	w = (w == null) ? img.width : w;
	h = (h == null) ? img.height : h;
	context.drawImage(img, x, y, w, h);
}

function fillRect (x, y, w, h, s) {
	context.fillStyle = s == null ? "#000" : s;
	context.fillRect(x, y, w, h);
}

function drawLine (x1, y1, x2, y2, s) {
	context.strokeStyle = (s == null) ? "#000" : s;
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.closePath();
	context.stroke();
}

function drawRect (x, y, w, h, s) {
	context.strokeStyle = (s == null) ? "#000" : s;
	context.lineWidth = scaling;
	context.beginPath();
	context.strokeRect(x, y, w, h);
	context.closePath();
	context.stroke();
}

function drawMessage (msg, x, y) {
	context.font = msgFont;
	context.fillStyle = msgTextColor;
	context.fillText(msg, x, y + 12);
}

function lose () {
	gState = 3;
	//player.CurHealth = 0;
	//player.Image = deathImage;
}

function updateCanvasLocation () {
	canvas.style.left = (window.innerWidth - canvas.width) / 2;
	canvas.style.top = (window.innerHeight - canvas.height) / 2;
}

function floor (value, floor) {
	return Math.floor(value / floor) * floor;
}