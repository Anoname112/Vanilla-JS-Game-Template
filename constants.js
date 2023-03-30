const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const isPortrait = window.innerWidth < window.innerHeight;

const interval = 15;
const scaling = 1.5;
const gravity = 10;
const upVec2 = new Vec2(0, -1);

// Body
const bodyMargin = "0";
const bodyBackColor = "#1F1F1F";
const bodyFontColor = "#FFFFFF";
const bodyFont = "15px Segoe UI";

// Canvas
const canvasBorderRadius = 0;
const canvasPosition = "fixed";

// Message
const msgPad = 15;
const msgFontColor = "#000";
const msgFontSize = 15 * scaling;
const msgSpacing = (isMobile || isPortrait) ? 5 + scaling * 5 : 4 + scaling * 6;
const msgFont = msgFontSize + "px Consolas";

// Control
const controlPadding = 10;
const controlSize = 80;

// Sound
const audioVisibility = "hidden";
const bgmPath = "resources/music_bgm.mp3";

// Background
const backgroundZIndex = 1.5;

// Images
const images = [];
const backgroundImg = newImg("resources/Background2.png");
const mochiWalkImg1 = newImg("resources/playerWalk1.png");
const mochiWalkImg2 = newImg("resources/playerWalk2.png");
const mochiAttackImg1 = newImg("resources/playerAttack1.png");
const mochiAttackImg2 = newImg("resources/playerAttack2.png");
const mochiAttackImg3 = newImg("resources/playerAttack3.png");

/*
// Animation
const invinTime = 30;
const healDelay = 50;
const jumpTime = 21;
const attackTime = 13;

// Player
const playerHealth = 5;
const playerAttack = 5;
const playerSpeed = 5;  // Must be smaller than 15
const stepCounter = 15;

// Heart
const animSpeed = 0.1;
const animMax = 3;

// Enemy
const enemyHealth = 20;
const enemyAttack = 1;
const enemySpeed = 1;
const enemyHpColor = "#5D0F0D";

// Platform
const platThick = 50;
const platColor = "#F9A965";    // SandyBrown

// HP bar
const hpBarWidth = 100;
//const hpBarBack = "#F0F0F0";
//const hpBarGreen = "#00FF00";
//const hpBarYellow = "#FFFF00";
//const hpBarRed = "#FF0000";
*/
