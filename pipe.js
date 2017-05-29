function Pipe () {
    this.top = Math.random()*400;
    this.bottom = Math.random()*400;
    this.x = window.innerWidth - 50;
    this.speed=3; //viteza de deplasare a dreptunghiurilor

    while (this.top+this.bottom<550) {  // ne asiguram ca gaura pentru pasare este suficient de mica
        this.top+=10;
        this.bottom+=10;
    }

    this.draw = function () {
        fill(255,255,255);
        rect(this.x,0,40,this.top);
        rect(this.x,window.innerHeight-this.bottom-20,40,this.bottom);
    };

    this.update = function () {
        this.x-=this.speed;
    }
}

