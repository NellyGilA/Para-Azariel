
function preload() {
  //  img = loadImage("https://www.anipedia.net/imagenes/peces-800x375.jpg");
}


function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  tint_color = "";
  
}


function draw() {
  image(video,0,0,300,300);
  tint(tint_color);
}

function take_snapshot(){
  save('myFilterImage.png');

}

function filter_tint(){
  tint_color = document.getElementById("color_name").value;
}