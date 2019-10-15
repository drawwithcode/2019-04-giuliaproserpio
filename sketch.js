var mySong; //variable mySong
var analyzer; //variable analyzer
var volume = 0; //set var volume

function preload() {
  mySong = loadSound("./assets/SOS.mp3"); //load the sound
  myImage = loadImage("./assets/DS.png"); //load the sound
}

function setup() {
  createCanvas(windowWidth, windowHeight); //create the canvas
  background("#0511f2"); //define color background

  rectMode(CENTER); //center of the rectangle

  analyzer = new p5.Amplitude(); //analyzer Amplitude
  analyzer.setInput(mySong); //analyzer mySong settings

  mySong.loop(); //loop song
}

function draw() {
  image(myImage, windowWidth * 9 / 10, windowHeight * 9 / 10, myImage.width / 10, myImage.height / 10); //draw image
  myImage.filter("invert"); //filter

  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height);

  var sosMorseO = "O"; //o
  textFont("VT323");
  textAlign(CENTER);
  textSize(170);
  fill(color("#ff00ff"));
  text(sosMorseO, windowWidth / 2, windowHeight / 2 - 100);

  var sosMorseO = "S"; //S S
  textFont("VT323");
  textAlign(CENTER);
  textSize(170);
  fill(color("#ff00ff"));
  text(sosMorseO, windowWidth / 2 + 250, windowHeight / 2 - 100);
  text(sosMorseO, windowWidth / 2 - 250, windowHeight / 2 - 100);


  if (volume > 0 && volume < 15) {
    noFill();
    stroke(lerpColor(color("#ff00ff"), color("lime"), frameCount / 120));

    rect(windowWidth / 2 - 200, windowHeight / 2, volume * 3, volume * 1.5); //small rect
    rect(windowWidth / 2 - 250, windowHeight / 2, volume * 3, volume * 1.5); //small rect
    rect(windowWidth / 2 - 300, windowHeight / 2, volume * 3, volume * 1.5); //small rect

    rect(windowWidth / 2 + 200, windowHeight / 2, volume * 3, volume * 1.5); //small rect
    rect(windowWidth / 2 + 250, windowHeight / 2, volume * 3, volume * 1.5); //small rect
    rect(windowWidth / 2 + 300, windowHeight / 2, volume * 3, volume * 1.5); //small rect

  } else {
    noFill();
    stroke(lerpColor(color("lime"), color("#ff00ff"), frameCount / 1000));
    rect(windowWidth / 2, windowHeight / 2, volume, volume);
    rect(windowWidth / 2 - 100, windowHeight / 2, volume, volume); // rect sx
    rect(windowWidth / 2 + 100, windowHeight / 2, volume, volume); //rect dx
  }

}
