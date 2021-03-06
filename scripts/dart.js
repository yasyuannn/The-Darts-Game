/* Class Dart. */

Dart.prototype = new Layer;			// define sub-class of Layer

Dart.prototype.constructor = Dart;
function Dart(name, playerId, dartId, boardWidth, boardHeight) {	// name - layer's name;
	this.WIDTH = 17;
	this.HEIGHT = 15;
	this.MARGIN = 5;
	this.MARGIN_BOTTOM = boardHeight - this.HEIGHT - this.MARGIN;

	this.IMAGES = new Array();
	this.IMAGES[0] = new Image(this.WIDTH, this.HEIGHT);
	this.IMAGES[0].src = 'images/dart0.gif';
	this.IMAGES[1] = new Image(this.WIDTH, this.HEIGHT);
	this.IMAGES[1].src = 'images/dart0.gif';

	this.playerId = playerId;		// player id
	this.dartId = dartId;			// dart id

	// call the super-class constructor
	Layer.call(this, name, 0, 0, this.WIDTH, this.HEIGHT);
}

// Set the dart layer image.
Dart.prototype.setImage = function(image) {	// image - the image to set
	this.setHTML(
		'<img border="0" src="' + this.IMAGES[image].src +
		'" width="' + this.WIDTH +
		'" height="' + this.HEIGHT +
		'" />'
	);
}

// Show the player dart in the game space footer.
Dart.prototype.showByPlayer = function(boardX, boardY) {
	var x = (this.playerId ? 418 : 16) + (this.dartId * 25);

	this.setImage(0);
	this.moveTo(boardX + x, boardY + this.MARGIN_BOTTOM);
	this.show();
}

// Returns The X and Y coordinates of the dart layer.
Dart.prototype.realX = function() {
	return this.x + Math.floor(this.WIDTH / 2) - 3;
}
Dart.prototype.realY = function() {
	return this.y + Math.floor(this.HEIGHT / 2) - 3;
}