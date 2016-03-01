var Invader = function() {
	this.init(Invader.arguments)
}

Invader.prototype = {
	
	/**
	 * @param (Number) start_x 
	 * @param (Number) start_y 	 
	 */
	init = function(argv) {

		// Set default position		
		this.pos = [];
		this.pos["x"] = argv[0];
		this.pos["y"] = argv[1];
				
		// Score
		this.score = argv[2];
		this.backgroundOffSet = argv[3];
		
		this.backgroundIter = 0;

		// Make sprite
		this.sprite = glow.dom.create("<div class='invader'></div>");
		this.sprite.css("background-position",  "0px " + this.backgroundOffSet + "px");	
		this.move();

		
	},
	
	die  = function() {

		this.dead = true;

		this.sprite.css("background-position",  "-48px " + this.backgroundOffSet + "px");	
		
	    var myAnim = new glow.anim.Animation(0.5, {tween:glow.tweens.easeBoth()});
		glow.events.addListener(myAnim, "complete", function() {
				this.sprite.remove();
				glow.events.fire(this, 'dead');			
			},
			this);
			
		myAnim.start();
	    		
	},
	
	fire = function() {
		var x = parseInt(this.sprite.css("left"));
		var y = parseInt(this.sprite.css("top"));					
		
		bullet = new InvaderBullet(x + 15,y,1,1);
		Game.addBullet(bullet)
		bullet.fire();
	},
	
	/**
	 * Set new CSS position
	 */
	move = function() {
		this.sprite.css("left", this.pos["x"] + "px");
		this.sprite.css("top",  this.pos["y"] + "px");		

		if (!this.dead) {		
			if (this.backgroundIter == 0) {
				this.sprite.css("background-position",  "-24px " + this.backgroundOffSet + "px");				
				this.backgroundIter = 1;			
			} else {
				this.sprite.css("background-position",  "0px " + this.backgroundOffSet + "px");
				this.backgroundIter = 0;					
			}
		}
	},
	
	/**
	 * Updates invaders position values
	 */
	updatePosition = function(x, y) {
		this.pos["x"] = x;
		this.pos["y"] = y;
	}

}