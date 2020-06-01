

var angle1 = 0;
var angle2 = 0;
var slider4;

function setup() {
  createCanvas(400, 400);
  slider1 = createSlider(0, TWO_PI, PI / 4, 0.01);
  slider2 = createSlider(0, TWO_PI, PI / 4, 0.01);
  slider3 = createSlider(0, 200,50, 0.01);
  slider4 = createSlider(0, 255, 1);
  slider5 = createSlider(0, 255, 1);
  slider6 = createSlider(0, 255,255, 1);
  slider7 = createSlider(0, 255,255, 1);
  slider8 = createSlider(0, 255,50, 1);
  slider9 = createSlider(0, 30,10 ,1);
  slider10 = createSlider(0, 30,10, 1);
  slider11 = createSlider(0, 1,0.67, .001);
  slider12 = createSlider(0, 1,0.67, .001);
  slider13 = createSlider(0, 400,160, 1);
  slider14 = createSlider(0, 400,300, 1);
   slider15 = createSlider(0, 100,6, 1);
   slider16 = createSlider(0, 100,4, 1);
}

function draw() {
  background(slider8.value());
  angle1 = slider1.value();
  angle2 = slider2.value();
  var val =slider3.value();
  stroke(slider7.value());
  translate(slider13.value(), slider14.value());
  branch(val);

}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if( len < slider15.value() && len > slider16.value())
  {
   fill(slider5.value(),slider6.value(),slider4.value());
   ellipse(0,0,slider9.value(),slider10.value()); 
  }
  if (len > 4) {
    push();
    rotate(angle1);
    branch(len * slider11.value());
    pop();
    push();
    rotate(-angle2);
    branch(len * slider12.value());
    pop();
  }

  //line(0, 0, 0, -len * 0.67);
}