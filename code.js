var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["398e9c9f-f41c-424c-86eb-f5db5cdd24af","fb101db6-3744-4356-a49f-6ae64ec88503","9a66661b-2008-4db5-8d04-a41d93c85730"],"propsByKey":{"398e9c9f-f41c-424c-86eb-f5db5cdd24af":{"name":"joao","sourceUrl":null,"frameSize":{"x":6,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"95QCk2luaWYF2_6Pg4wuVeVHAkhcE6xG","loadedFromSource":true,"saved":true,"sourceSize":{"x":6,"y":48},"rootRelativePath":"assets/398e9c9f-f41c-424c-86eb-f5db5cdd24af.png"},"fb101db6-3744-4356-a49f-6ae64ec88503":{"name":"caixa","sourceUrl":null,"frameSize":{"x":18,"y":43},"frameCount":1,"looping":true,"frameDelay":12,"version":"030MSzfToGviEwEa5UlKWL58Im1icioF","loadedFromSource":true,"saved":true,"sourceSize":{"x":18,"y":43},"rootRelativePath":"assets/fb101db6-3744-4356-a49f-6ae64ec88503.png"},"9a66661b-2008-4db5-8d04-a41d93c85730":{"name":"fim","sourceUrl":null,"frameSize":{"x":52,"y":82},"frameCount":1,"looping":true,"frameDelay":12,"version":".frLbUEESyHR_46R5BBExLRg6gA6shIK","loadedFromSource":true,"saved":true,"sourceSize":{"x":52,"y":82},"rootRelativePath":"assets/9a66661b-2008-4db5-8d04-a41d93c85730.png"}}};
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

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var gamestate = "serve";
var fim = createSprite(375,190,52,140);
fim.setAnimation("fim");
fim.scale=1.75;
  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.setAnimation("joao");
  
  car1 = createSprite(100,130,10,10);
  car1.setAnimation("caixa");
  car1.scale=0.45;
  
  car2 = createSprite(215,130,10,10);
  car2.setAnimation("caixa");
  car2.scale=0.45;
  
  car3 = createSprite(165,250,10,10);
  car3.setAnimation("caixa");
  car3.scale=0.45;
  
  car4 = createSprite(270,250,10,10);
  car4.setAnimation("caixa");
  car4.scale=0.45;
  
//adicione velocidade para fazer o carro se mover.
 
  car1.velocityY=6;
  car2.velocityY=6;
  car3.velocityY=-6;
  car4.velocityY=-6;
  
function draw() {
   background("white");
  text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);

  
// crie a função rebater, para fazer o carro rebater nos limites
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  
//Adicione a condição para fazer Sam se mover para a esquerda e para a direita


  
if (gamestate=="serve") {

  fill("BLACK");
  text("João é um palito de fósforo que não quer ser aceso",50,25);
  text("Ajude-o a chegar ao outro lado sem ser aceso",50,50);
  text("Pressione ESPAÇO para iniciar",100,325);
  if (keyDown("space")) {
    gamestate="play";
  }
  
}

if (gamestate=="play")
{
  
  if (keyDown("RIGHT_ARROW")) {
    sam.x=sam.x+2.5;
  }
  
  if (keyDown("LEFT_ARROW")) {
    sam.x=sam.x-2.5;
  }
}


//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.
 if (sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4)) {
     sam.x=20;
     sam.y=190;
     life=life+1;
     
  }
   if (sam.isTouching(fim)) {
  
  car1.velocityY=0;
  car2.velocityY=0;
  car3.velocityY=0;
  car4.velocityY=0;
  textSize(22);
  text("Você me surpreendeu, você é bem bom!",0,50);
  
   }
   
  
 drawSprites();
}

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
