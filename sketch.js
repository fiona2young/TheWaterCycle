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
    if( (mouseX > 952) && (mouseX < 1038) && (mouseY > 621) && (mouseY < 640) ) {
        drawFunction = drawRain;
    }
  }
  else if( drawFunction === drawRain ) {
    if( (mouseX > 277) && (mouseX < 628) && (mouseY > 481) && (mouseY < 658) ) {
        drawFunction = drawRiver;
    }
    if( (mouseX > 730) && (mouseX < 940) && (mouseY > 492) && (mouseY < 648) ) {
        drawFunction = drawSnow;
    }
  }
  else if( drawFunction === drawRiver ) {
    if( (mouseX > 561) && (mouseX < 767) && (mouseY > 514) && (mouseY < 578) ) {
        drawFunction = drawGround;
    }
  }
  else if( drawFunction === drawSnow ) {
    if( (mouseX > 972) && (mouseX < 1040) && (mouseY > 624) && (mouseY < 638) ) {
        drawFunction = drawGround;
    }
  }
  else if( drawFunction === drawGround ) {
    if( (mouseX > 972) && (mouseX < 1040) && (mouseY > 624) && (mouseY < 638) ) {
        drawFunction = drawOcean;
    }
  }
  else if( drawFunction === drawOcean ) {
    if( (mouseX > 862) && (mouseX < 979) && (mouseY > 521) && (mouseY < 587) ) {
        drawFunction = drawEvaporates;
    }
  }
  else if( drawFunction === drawEvaporates ) {
    if( (mouseX > 553) && (mouseX < 967) && (mouseY > 112) && (mouseY < 358) ) {
        drawFunction = drawClouds;
    }
  }
  else if( drawFunction === drawClouds ) {
    if( (mouseX > 361) && (mouseX < 950) && (mouseY > 81) && (mouseY < 291) ) {
        drawFunction = drawFinal;
    }
  }
}