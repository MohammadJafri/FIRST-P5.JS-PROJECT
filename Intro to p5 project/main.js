function setup()
{
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();
}

function draw()
{
    image(video, 230, 150, 220, 200);


    fill(25, 0, 0);
    stroke(25, 0, 0);
    circle(50, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);


    rect(90, 40, 460, 20);

}