function updateCanvasLocation () {
	canvas.style.left = (window.innerWidth - canvas.width) / 2;
	canvas.style.top = (window.innerHeight - canvas.height) / 2;
}

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

function floor (value, floor) {
	return Math.floor(value / floor) * floor;
}

function clamp (value, min, max) {
	return Math.max(Math.min(value, max), min);
}

function getCenter (object) {
	return new Vec2(object.Position.X + object.Image.Width / 2, object.Position.Y + object.Image.Height / 2);
}

function computeDot (left, right) {
	return left.X * right.X + left.Y * right.Y;
}

function computeRadian (left, right) {
	var plusMinus = (right.X >= left.X) ? 1 : -1;
	return Math.acos(computeDot(left, right)) * plusMinus;
}

function radianToDegree (radian) {
	return radian * 57.2957795;
}

function degreeToRadian (degree) {
	return degree * Math.PI / 180;
}

function rotate (point, center, degree) {
	var radian = degreeToRadian(degree);
	var sin = Math.sin(radian);
	var cos = Math.cos(radian);
	var x = center.X + (point.X - center.X) * cos - (point.Y - center.Y) * sin;
	var y = center.Y + (point.X - center.X) * sin + (point.Y - center.Y) * cos;
	return new Vec2(x, y);
}