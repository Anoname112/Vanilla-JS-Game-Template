function Background (image, position, z) {
	this.Image = image;
	this.Position = position;
	this.Z = (z == null) ? backgroundZIndex : z;
}

function Vec2 (x, y) {
	this.X = x;
	this.Y = y;
}

Vec2.prototype.length = function () {
	return Math.sqrt(this.X * this.X + this.Y * this.Y);
};

Vec2.prototype.normalize = function () {
	var length = this.length();
	return new Vec2(this.X / length, this.Y / length);
};

Vec2.prototype.add = function (vec) {
	return new Vec2(this.X + vec.X, this.Y + vec.Y);
};

Vec2.prototype.subtract = function (vec) {
	return new Vec2(this.X - vec.X, this.Y - vec.Y);
};

Vec2.prototype.scale = function (scale) {
	return new Vec2(this.X * scale, this.Y * scale);
};

Vec2.Zero = function () {
	return new Vec2(0, 0);
}

function LifeBeing (health, attack, range, attackDelay, missileSpeed, missileImage, sightRange, speed, stepCounter, walkImages, attackImages, party, position, rotation) {
	this.CurHealth = this.MaxHealth = health;
	this.Attack = attack;
	this.Range = range;
	this.CurAttackDelay = 0;
	this.MaxAttackDelay = attackDelay;
	this.MissileSpeed = missileSpeed;
	this.MissileImage = missileImage;
	this.SightRange = sightRange;
	this.Speed = speed;
	this.CurStep = 0;
	this.MaxStep = stepCounter;
	this.WalkImages = walkImages;
	this.AttackImages = attackImages;
	this.Image = this.walkImages[0];
	this.Party = party;
	this.Position = position;
	this.Rotation = rotation;
	
	this.stop();
}

LifeBeing.prototype.stop = function () {
	this.WalkTo = getCenter(this);
	this.Target = null;
	this.FindTarget = false;
}

LifeBeing.Mochi = function (party, position, rotation) {
	party = (party == null) ? 1 : party;
	position = (position == null) ? Vec2.Zero() : position;
	rotation = (rotation == null) ? 0 : rotation;
	var health = mochiHealth;
	var attack = mochiAttack;
	var range = mochiRange;
	var attackDelay = mochiAttackDelay;
	var missileSpeed = mochiMissileSpeed;
	var missileImage = fireBallImg;
	var sightRange = mochiSightRange;
	var speed = mochiSpeed;
	var stepCounter = mochiStepCounter;
	var walkImages = [mochiWalkImg1, mochiWalkImg2];
	var attackImages = [mochiAttackImg1, mochiAttackImg2, mochiAttackImg3];
	return new LifeBeing(health, attack, range, attackDelay, missileSpeed, missileImage, sightRange, speed, stepCounter, walkImages, attackImages, party, position, rotation);
}

LifeBeing.WhiteZombie = function (party, position, rotation) {
	party = (party == null) ? 0 : party;
	position = (position == null) ? Vec2.Zero() : position;
	rotation = (rotation == null) ? 0 : rotation;
	var health = whiteZombieHealth;
	var attack = whiteZombieAttack;
	var range = whiteZombieRange;
	var attackDelay = whiteZombieAttackDelay;
	var missileSpeed = whiteZombieMissileSpeed;
	var missileImage = scratchImg;
	var sightRange = whiteZombieSightRange;
	var speed = whiteZombieSpeed;
	var stepCounter = whiteZombieStepCounter;
	var walkImages = [whiteZombieImg];
	var attackImages = [whiteZombieImg];
	return new LifeBeing(health, attack, range, attackDelay, missileSpeed, missileImage, sightRange, speed, stepCounter, walkImages, attackImages, party, position, rotation);
}

LifeBeing.Tower = function (party, position, rotation) {
	party = (party == null) ? 0 : party;
	position = (position == null) ? Vec2.Zero() : position;
	rotation = (rotation == null) ? 0 : rotation;
	var health = towerHealth;
	var attack = towerAttack;
	var range = towerRange;
	var attackDelay = towerAttackDelay;
	var missileSpeed = towerMissileSpeed;
	var missileImage = bulletImg;
	var sightRange = towerSightRange;
	var speed = towerSpeed;
	var stepCounter = towerStepCounter;
	var walkImages = [towerImg];
	var attackImages = [towerImg];
	return new LifeBeing(health, attack, range, attackDelay, missileSpeed, missileImage, sightRange, speed, stepCounter, walkImages, attackImages, party, position, rotation);
}

function Projectile (target, attack, speed, image, position, rotation) {
	rotation = (rotation == null) ? 0 : rotation;
	this.Target = target;
	this.Attack = attack;
	this.Speed = speed;
	this.Image = image;
	this.Position = position;
	this.Rotation = rotation;
}