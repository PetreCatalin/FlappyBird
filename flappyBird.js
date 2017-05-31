var bird;
var pipes = [];
var numberOfPipesScore = 0;
var frequnceOfPipes =200;

function setup() {
    createCanvas(window.innerWidth-20,window.innerHeight-20);
    numberOfPipesScore = 0;
    pipes.length=0; //cand incepem jocul din nou stergem pipe-urile anterioare
    bird = new Bird();
    pipes.push(new Pipe()); // un pipe initial
}

function draw() {
    background(255,255,0);
    bird.update();
    bird.draw();

    if (frameCount%frequnceOfPipes==0) {
        pipes.push(new Pipe());  // la un numar de frame-uri adaugam un pipe nou
        if (frequnceOfPipes>=50) frequnceOfPipes-=2; // facem pipe-urile din ce in ce mai dese
        if (frequnceOfPipes<50) frequnceOfPipes+=50;
    }

    for (var i = pipes.length-1; i>=0 ;--i) {
        pipes[i].draw();
        pipes[i].update();

        if(pipes[i].hits(bird)) {      //pasarea a lovit un pipe
            alert('Scor obtinut: ' +numberOfPipesScore +". Incercati din nou!");
            location.reload();
        }

        if (pipes[i].x < 0) { //daca pipe-ul a iesit din ecran inseamna ca am trecut de el cu succes si il stergem
            pipes.splice(i,1);
            numberOfPipesScore++;
        }
    }
}

function keyPressed() {
    if (key===' ') //spacebar -> pasarea urca
        bird.up();
}