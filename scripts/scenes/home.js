re.scene('home')
.enter(function(){
  
  //stop the browser from moving around
  re.preventDefault('left right up down');
  
  var radius = 10;
  var red = '#FF0000';
  var blue = "#0000FF"

  //create new circle on canvas
  re.circle(radius, red, 'arrow')
  re.circle(radius, blue, 'wasd')
  //from align component
  .alignHor()
  .alignVer();

  //find circle and change speed
  re('circle').first().attr('speed', 15);
  re('circle')[1].attr('speed', 15);
  //add help text
  re.e('text align')
  .text('Use WASD to move blue and arrow keys to move red')
  .alignTop(5)
  .alignLeft(5);
  
});