var bird;
var pipes = [];

function setup() {
    createCanvas(window.innerWidth-20,window.innerHeight-20);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(255,255,0);
    bird.update();
    bird.draw();

    for (var i = 0; i<pipes.length;++i) {
        pipes[i].draw();
        pipes[i].update();
    }
}

function keyPressed() {
    if (key===' ') //spacebar
        bird.up();
}


