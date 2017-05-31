var initialSpeed = 4; //viteza initiala de deplasare a pipe-urilor
var distance1=200;
var distance2=400;

function Pipe () {
    this.top = Math.random()*distance1; //generam lungimile pipe-urilor
    this.bottom = Math.random()*distance2;

    var aux=distance1; //alteram distanta sus jos pe fiecare nou pipe fata de precedentul
    distance1=distance2;
    distance2=aux;

    this.x = window.innerWidth - 50;
    this.speed=initialSpeed;

    while (this.top+this.bottom<580) {  // ne asiguram ca gaura pentru pasare este suficient de mica
        this.top+=10;
        this.bottom+=10;
    }

    this.draw = function () {
        fill(0,255,0);

        rect(this.x,0,40,this.top);
        rect(this.x,window.innerHeight-this.bottom-20,40,this.bottom);
    };

    this.update = function () {
        this.x-=this.speed;

        if (frameCount%800==0) {  // viteza de deplasare a pipe-urilor devine mai mare cand avansam in joc
            if (initialSpeed<=25) initialSpeed+=Math.random()*2/3;
        }
    };

    this.hits = function (bird) {
        if (bird.positionY < this.top+10 || bird.positionY > window.innerHeight-40-this.bottom) {   // se intersecteaza cu un pipe pe verticala
            //alert(bird.positionX + ' '+this.x);
            if (bird.positionX >= this.x - 20 && bird.positionX <= this.x + 20)  //verificam sa fie in dreptul pipe-ului respectiv
            {
               // console.log('lovit');
                return true;
            }
        }
        //console.log('nelovit');
        return false;
    };

}