/************************************************
TheWaterCycle
  by Fiona Young
Overview – This is an interactive non-linear state machine with multiple user inputs utilized.

------------------------------------------------
Notes: 
(1) The functions drawn are all seperate features.
************************************************/


//Global variables
var images = [];
var drawFunction;

//Preload code
function preload() {
  images[0] = loadImage('assets/title.gif');
  images[1] = loadImage('assets/rain.gif');
  images[2] = loadImage('assets/river.gif');
  images[3] = loadImage('assets/snow.gif');
  images[4] = loadImage('assets/ground.gif');
  images[5] = loadImage('assets/ocean.gif');
  images[6] = loadImage('assets/evaporates.gif');
  images[7] = loadImage('assets/clouds.gif');
  images[8] = loadImage('assets/final.gif');
}

//Setup code
function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);
  textAlign(CENTER);

  drawFunction = drawTitle;
}

//Draw code
function draw() {
  background(245);
    
  drawFunction();
}

//Title
drawTitle = function() {
   image(images[0],width/2, height/2);
}

//Rain
drawRain = function() {
   image(images[1],width/2, height/2);
}

//River
drawRiver = function() {
   image(images[2],width/2, height/2);
}

//Snow
drawSnow = function() {
   image(images[3],width/2, height/2);
}

//Ground
drawGround = function() {
   image(images[4],width/2, height/2);
}

//Ocean
drawOcean = function() {
   image(images[5],width/2, height/2);
}

//Evaporates
drawEvaporates = function() {
   image(images[6],width/2, height/2);
}

//Clouds
drawClouds = function() {
   image(images[7],width/2, height/2);
}

//Final
drawFinal = function() {
   image(images[8],width/2, height/2);
}

function keyTyped() {
      if( drawFunction === drawTitle ) {
        return;
      }
    
      if( key === 'r' ) {
        drawFunction = drawTitle;
      }
    }

function mousePressed() {
  if( drawFunction === drawTitle ) {
    if( (mouseX > width/2 + 285.5) && (mouseX < width/2 + 385.5) && (mouseY > height/2 + 262) && (mouseY < height/2 + 283) ) {
        drawFunction = drawRain;
    }
  }
  else if( drawFunction === drawRain ) {
    if( (mouseX > width/2 - 383.5) && (mouseX < width/2 - 29.5) && (mouseY > height/2 + 125) && (mouseY < height/2 + 303) ) {
        drawFunction = drawRiver;
    }
    if( (mouseX > width/2 + 68.5) && (mouseX < width/2 + 282.5) && (mouseY > height/2 + 135) && (mouseY < height/2 + 291) ) {
        drawFunction = drawSnow;
    }
  }
  else if( drawFunction === drawRiver ) {
    if( (mouseX > width/2 - 102.5) && (mouseX < width/2 + 105.5) && (mouseY > height/2 + 151) && (mouseY < height/2 + 221) ) {
        drawFunction = drawGround;
    }
  }
  else if( drawFunction === drawSnow ) {
    if( (mouseX > width/2 + 308.5) && (mouseX < width/2 + 381.5) && (mouseY > height/2 + 263) && (mouseY < height/2 + 283) ) {
        drawFunction = drawGround;
    }
  }
  else if( drawFunction === drawGround ) {
    if( (mouseX > width/2 + 308.5) && (mouseX < width/2 + 381.5) && (mouseY > height/2 + 263) && (mouseY < height/2 + 283) ) {
        drawFunction = drawOcean;
    }
  }
  else if( drawFunction === drawOcean ) {
    if( (mouseX > width/2 + 198.5) && (mouseX < width/2 + 314.5) && (mouseY > height/2 + 164) && (mouseY < height/2 + 230) ) {
        drawFunction = drawEvaporates;
    }
  }
  else if( drawFunction === drawEvaporates ) {
    if( (mouseX > width/2 - 107.5) && (mouseX < width/2 + 301.5) && (mouseY > height/2 - 245) && (mouseY < height/2 + 1) ) {
        drawFunction = drawClouds;
    }
  }
  else if( drawFunction === drawClouds ) {
    if( (mouseX > width/2 - 300.5) && (mouseX < width/2 + 289.5) && (mouseY > height/2 - 276) && (mouseY < height/2 - 66) ) {
        drawFunction = drawFinal;
    }
  }
}