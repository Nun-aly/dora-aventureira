function setup() {
    createCanvas(600, 600);
  background("grey");
  }
  
  function draw() {
   
    
    stroke ("black")
    fill ("rgb(191,230,191)");
    
    //console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
      
      circle (mouseX, mouseY, 20, 35);
    }
    
  }