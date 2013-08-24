/*
A simple circle component. Keep in mind this is extending the default circle in the
game engine.

A circle can be created on of two ways:

re.e('circle');

or through a factory:

re.circle(10, "#00CCFF");

*/
re.c('circle')
.factory(function(radius, color, keytype){
	//this is called when using re.circle()
	this.radius = radius;
	this.color = color;
	this.keytype = keytype;
})
.requires('align update')
.defines({
	//define properties
  speed:15,
  color:'#ff0000',
  keytype:"arrow"
})
.events({

	//adds a listener for updates
	update:function(){

		//move for arrows
		if(this.keytype == "arrow")
		{
			if(re.pressed('left')) this.posX -= this.speed;
	    if(re.pressed('right')) this.posX += this.speed;
	    
	    if(re.pressed('up')) this.posY -= this.speed;
	    if(re.pressed('down')) this.posY += this.speed;
		}

		//move for wasd
		if(this.keytype == "wasd")
		{
	    if(re.pressed('a')) this.posX -= this.speed;
	    if(re.pressed('d')) this.posX += this.speed;
	    
	    if(re.pressed('w')) this.posY -= this.speed;
	    if(re.pressed('s')) this.posY += this.speed;			
		}
		



    
	}

});