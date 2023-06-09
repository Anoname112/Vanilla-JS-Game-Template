var canvas;
var ctx;
var fireSvg;
var hidden;
var bgm;

var intervalId;
var gState;		// 0: Paused, 1: Playing, 2: Win, 3: Lose
var level;
var message;

var player;
var backgrounds;

window.onload = function () {
	window.oncontextmenu = onContextMenu;
	window.onresize = updateCanvasLocation;
	window.onkeydown = onKeyDown;
	window.onkeyup = onKeyUp;
	window.onblur = function () {
		if (gState < 2) pause();
	};
	
	initDocument();
	initGame();
	
	var contentLoaded = false;
	while (!contentLoaded) {
		contentLoaded = true;
		for (var i = 0; i < images.length; i++) {
			if (!images[i].complete) contentLoaded = false;
		}
		if (contentLoaded) intervalId = setInterval(timerTick, interval);
	}
}

function initDocument () {
	// Prepare body
	document.body.style.margin = bodyMargin;
	document.body.style.background = bodyBackColor;
	document.body.style.color = bodyFontColor;
	document.body.style.font = bodyFont;
	
	// Prepare canvas
	canvas = getElement("myCanvas");
	canvas.addEventListener("touchstart", onMouseDown, false);
	canvas.addEventListener("touchend", onMouseUp, false);
	canvas.onmousedown = onMouseDown;
	canvas.onmouseup = onMouseUp;
	canvas.style.position = canvasPosition;
	canvas.style.borderRadius = canvasBorderRadius;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	updateCanvasLocation();
	ctx = canvas.getContext("2d");
	
	// Prepare hidden area
	hidden = getElement("hidden");
	hidden.style.visibility = "hidden";
	
	// Prepare audio
	hidden.innerHTML += "<audio id=\"bgm\"><source src=\"" + bgmPath + "\" /></audio>";
	bgm = getElement("bgm");
	bgm.style.visibility = audioVisibility;
	bgm.addEventListener('ended', function () {
		this.currentTime = 0;
		this.play();
	}, false);
	
	// Prepare controls
	fireSvg = getElement("fireSvg");
	fireSvg.addEventListener("touchstart", fireTouchStart, false);
	fireSvg.addEventListener("touchend", fireTouchEnd, false);
	fireSvg.onmousedown = fireTouchStart;
	fireSvg.onmouseup = fireTouchEnd;
	fireSvg.style.position = "fixed";
	fireSvg.style.bottom = controlPadding;
	fireSvg.style.left = controlPadding;
	fireSvg.style.width = controlSize;
	fireSvg.style.height = controlSize;
}

function initGame () {
	level = 1;
	
	initLevel();
}

function initLevel () {
	backgrounds = [];
	
	generateLevel(level);
	
	// Init background
	var topBound = 0;
	var rightBound = canvas.width;
	var bottomBound = canvas.height;
	var leftBound = 0;
	topBound -= canvas.height;
	rightBound += canvas.width;
	bottomBound += canvas.height;
	leftBound -= canvas.width;
	for (var i = leftBound; i < rightBound; i += backgroundImg.width) {
		for (var j = topBound; j < bottomBound; j += backgroundImg.height) {
			backgrounds.push(new Background(backgroundImg, new Vec2(i, j), backgroundZIndex));
		}
	}
	
	// Init player
	player = new LifeBeing.Mochi;
	player.Position = new Vec2((canvas.width - player.Image.width) / 2, (canvas.height - player.Image.height) / 2);
	
	if (level == 1) gState = 0;
	else gState = 1;
}

function generateLevel (level) {
	switch(level) {
		case 1:
			break;
		default:
			break;
	}
}

function onContextMenu (e) {
	e.preventDefault();
}

function onKeyDown (e) {
	var key = e.keyCode;
	switch (key) {
		case 13:	// Enter
		case 32:	// Space
		case 90:	// Z
			if (gState == 0) resume();
			else if (gState == 1) pause();
			if (gState == 2) {
				if (level == finalLevel) initGame();
				else {
					level++;
					initLevel();
				}
			}
			if (gState == 3) initLevel();
			break;
		case 37:	// Left
			break;
		case 39:	// Right
			break;
		case 67:	// C
			break;
		case 88:	// X
			break;
		default:
			break;
	}
}

function onKeyUp (e) {
	var key = e.keyCode;
	switch (key) {
		case 37:	// Left
			break;
		case 39:	// Right
			break;
		case 67:	// C
			break;
		case 88:	// X
			break;
		default:
			break;
	}
}

function onMouseDown (e) {
	//var controlCanvasX = e.touches[0].pageX;
	//var controlCanvasY = e.touches[0].pageY;
	if (gState == 2) {
		if (level == finalLevel) initGame();
		else {
			level++;
			initLevel();
		}
	}
	if (gState == 3) initLevel();
}

function onMouseUp (e) {
	if (gState == 0) resume();
}

function fireTouchStart (e) {
	if (gState == 1) {
		
	}
}

function fireTouchEnd (e) {
	console.log('from icons.getbootstrap.com');
}

function timerTick () {
	if (gState == 1) {
		// Animate
	}
	
	// Invalidate
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	padX = padY = 0;
	
	// Draw background
	for (i = 0; i < backgrounds.length; i++) {
		var backgroundX = padX + (backgrounds[i].Position.X - player.Position.X / 1.5) * scaling;
		var backgroundY = padY + (backgrounds[i].Position.Y - player.Position.Y / 1.5) * scaling;
		var backgroundWidth = (backgrounds[i].Image.width + 10) * scaling;
		var backgroundHeight = (backgrounds[i].Image.height + 10) * scaling;
		drawImage(backgrounds[i].Image, backgroundX, backgroundY, backgroundWidth, backgroundHeight);
	}
	
	// Draw items
	
	// Draw enemies
	
	// Draw player
	drawLifeBeing(player.Image, player.Position, player.Rotation++);
	
	// Draw platforms
	
	// Draw weapons
	
	// Draw enemies HP bar
	
	// Draw player HP bar
	
	// Draw projectiles
	
	// Draw messages
}
