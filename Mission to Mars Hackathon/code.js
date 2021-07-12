var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1db8aaa9-04bd-43b7-a968-b67b64481c3b","7756880a-f1d7-4862-a55d-536ac98bec1e","d0a9ed9c-26b9-4ec1-a286-f20123654c64","3edc2d30-f8ff-4f59-87e6-5a49a49e6df9","c8c253dd-0163-443b-8512-f0e9e377fc7a","783aff6f-d51c-4b21-bd9b-8017fd2c11ac"],"propsByKey":{"1db8aaa9-04bd-43b7-a968-b67b64481c3b":{"name":"bg1.png","sourceUrl":"assets/v3/animations/IPKnGiLe9d70KdB_tW1BNYeLq3oPdwB9TY0LPraPhR4/1db8aaa9-04bd-43b7-a968-b67b64481c3b.png","frameSize":{"x":402,"y":403},"frameCount":1,"looping":true,"frameDelay":4,"version":"yJBmF.Wv_iVfqLpSSn6P4lKOchEPuh3a","loadedFromSource":true,"saved":true,"sourceSize":{"x":402,"y":403},"rootRelativePath":"assets/v3/animations/IPKnGiLe9d70KdB_tW1BNYeLq3oPdwB9TY0LPraPhR4/1db8aaa9-04bd-43b7-a968-b67b64481c3b.png"},"7756880a-f1d7-4862-a55d-536ac98bec1e":{"name":"bg2.png","sourceUrl":"assets/v3/animations/IPKnGiLe9d70KdB_tW1BNYeLq3oPdwB9TY0LPraPhR4/7756880a-f1d7-4862-a55d-536ac98bec1e.png","frameSize":{"x":402,"y":402},"frameCount":1,"looping":true,"frameDelay":4,"version":"FlbCqJGnjQfJmzyrwDyJeKlbAPe3gvlz","loadedFromSource":true,"saved":true,"sourceSize":{"x":402,"y":402},"rootRelativePath":"assets/v3/animations/IPKnGiLe9d70KdB_tW1BNYeLq3oPdwB9TY0LPraPhR4/7756880a-f1d7-4862-a55d-536ac98bec1e.png"},"d0a9ed9c-26b9-4ec1-a286-f20123654c64":{"name":"rover1.png","sourceUrl":null,"frameSize":{"x":103,"y":75},"frameCount":3,"looping":true,"frameDelay":12,"version":"9lR9MLlXkGXbVQbA7D1mn3p9zcwg3MVL","loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":225},"rootRelativePath":"assets/d0a9ed9c-26b9-4ec1-a286-f20123654c64.png"},"3edc2d30-f8ff-4f59-87e6-5a49a49e6df9":{"name":"rover2.png","sourceUrl":null,"frameSize":{"x":84,"y":87},"frameCount":3,"looping":true,"frameDelay":12,"version":"jkbTf7Nv2Cl2lDeAYe2m_x3.iD_PZZ2H","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":174},"rootRelativePath":"assets/3edc2d30-f8ff-4f59-87e6-5a49a49e6df9.png"},"c8c253dd-0163-443b-8512-f0e9e377fc7a":{"name":"rover3.png","sourceUrl":null,"frameSize":{"x":113,"y":102},"frameCount":3,"looping":true,"frameDelay":12,"version":"sjFJgSN3ISWaJE3PPnYOuj6MQM3UnjRO","loadedFromSource":true,"saved":true,"sourceSize":{"x":226,"y":204},"rootRelativePath":"assets/c8c253dd-0163-443b-8512-f0e9e377fc7a.png"},"783aff6f-d51c-4b21-bd9b-8017fd2c11ac":{"name":"rover4.png","sourceUrl":null,"frameSize":{"x":145,"y":75},"frameCount":2,"looping":true,"frameDelay":12,"version":"ai697ZWfg0lVSORrIaNaqAiQFUJjqson","loadedFromSource":true,"saved":true,"sourceSize":{"x":145,"y":150},"rootRelativePath":"assets/783aff6f-d51c-4b21-bd9b-8017fd2c11ac.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Mission: You are on the MISSION MARS. Make your Signature by creating trace using your ROVER  //

//Create a sprite for the background and adding image
var bg= createSprite(200,200,10,10);
bg.setAnimation("bg1.png");

//Create a rover to make traces and adding image to the rover.
var rover = createSprite(200,200,10,10);
rover.setAnimation("rover2.png");
rover.scale=0.75;


//other variables
var lines = [];
var timeCalled = 0;
var penDown = true;

//Adding color to the trace created using the rover 
stroke(rgb(61,43,31));
strokeWeight(10);

function draw() {
  background("white");
  
  drawSprites();
  
  //To display the trace you created using your rover. 
  for(var x = 0; x < lines.length; x++){
    line(lines[x][0], lines[x][1],
         lines[x][2], lines[x][3]);
  }
}



//       *******     sample code for reference      ********//

// SYNTAX : functionname (input)
// forward function moves front with the distance given as input. eg: forward(20) will move front by 20 steps.
// backward function moves backward with the distance given as input. eg: backward(20) will move backward by 20 steps.
// turnRight function rotates in clockwise with a certain degree . eg: turnRight(20) will rotate right side by 20 degrees.
// turnLeft function rotates in anti-clockwise with a certain degree . eg: turnLeft(20) will rotate left side by 20 degrees.
// lift up function will not make traces on the Mars.
//lift down will not make traces on the Mars.




//       *******     sample code for reference      ********//

// ROVER INSTRUCTIONS TO MARK YOUR TRACE -- START //

// enter your code here!

//rover goes to top left corner
liftUp();
backward(145);
turnRight(90);
backward(150);

//all functions could be found at bottom
drawFlagPole();

drawOuterRec();

drawInnerMiniRec();

//runs for-loop
drawLines();

//for-loops down below within function
drawLetterU();
drawLetterS();


// ROVER INSTRUCTIONS TO MARK YOUR TRACE -- END //


//Function to control the steps and directions of the rover. 
//rover.rotation is used for rotating the rover in a particular angle.
//x1 - start position in x direction
//y1- start position in y direction
//x2 -  position in x direction after travelling a certain distance
//y2 - position in y direction after travelling a certain distance
//one degree is equivalent to pi/180 radians. 
//Math.cos(),Math.sin() method returns a numeric value between -1 and 1.

function move(angle,distance){
  timeCalled +=1;
  setTimeout(function(){
    rover.rotation = rover.rotation + angle;
    var radian = rover.rotation * Math.PI / 180;
    var x1 = rover.x;
    var y1 = rover.y;
    var x2 = rover.x + (distance * Math.cos(radian));
    var y2 = rover.y + (distance * Math.sin(radian));
    rover.x = x2;
    rover.y = y2;
    if(penDown === true){
      lines.push([x1,y1,x2,y2]);
    }
  },timeCalled * 250);
}

// To move the rove in forward direction
function forward(distance){
 move(0,distance);
}

//To move the rover in backward riection
function backward(distance){
 move(0,-distance);
}

// To rotate the rover in clockwise directiopn
function turnRight(angle){
 move(angle,0);
}

// To move the rover in anticlockwise direction
function turnLeft(angle){
  move(-angle,0);
}

// Lift the rover up to avoid making traces on the ground
function liftUp(){
  timeCalled += 1;
  setTimeout(function() {
    penDown = false;
  }, 250 * timeCalled);
}

// Make the rover touch the ground to draw traces on the ground
function liftDown(){
  timeCalled += 1;
  setTimeout(function() {
    penDown = true;
  }, 250 * timeCalled);
}

//Functions for Rover

//flagpole
function drawFlagPole() {
  liftDown();
  strokeWeight(20);
  forward(300);
}

//outer flag rectangle
function drawOuterRec() {
  backward(140);
  
  turnLeft(90);
  forward(285);
  
  turnLeft(90);
  forward(160);
  
  turnLeft(90);
  forward(285);
}

//inner mini rectangle
function drawInnerMiniRec() {
  turnLeft(90);
  forward(80);
  turnLeft(90);
  
  strokeWeight(13);
  forward(90);
  turnLeft(90);
  forward(80);
}

//flag lines
function drawLines() {
  turnRight(90);
  forward(195);
  
  //lines 1 & 2
  for(var i = 1;i < 3; i++) {
    if(i%2!=0) {
      turnRight(90);
      forward(40);
      turnRight(90);
      forward(195);
    }
    else {
      turnLeft(90);
      forward(40);
      turnLeft(90);
      forward(195);
    }
  }
  
  //lines 3 & 4
  for(var x = 1;x < 3; x++) {
    if(x%2!=0) {
      turnRight(90);
      forward(40);
      turnRight(90);
      forward(285);
    }
    else {
      turnLeft(90);
      forward(40);
      turnLeft(90);
      forward(285);
    }
  }
}

//US letters
function drawLetterU() {
  //letter U
  turnRight(90);
  liftUp();
  forward(50);
  turnRight(90);
  forward(200);
  turnLeft(90);
  liftDown();
  forward(75);
  
  for(var a = 0; a < 14; a++) {
    turnLeft(a*2);
    forward(a*0.8);
  }
  
  forward(65);
}

function drawLetterS() {
  //letter S
  liftUp();
  turnLeft(88);
  
  backward(60);
  liftDown();
  
  for(var b = 0; b < 14; b++) {
    turnLeft(b*2);
    forward(b*1.01);
  }
  
  for(var c = 0; c < 15; c++) {
    turnRight(c*2.175);
    forward(c*0.8);
  }
}
//FLAG MEASUREMENTS
//
//Flagpole Height - 300
//
//Outer Rectangle Length - 160
//Outer Rectangle Width - 285
//
//Inner Rectangle Length - 80
//Inner Rectangle Width - 90
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
