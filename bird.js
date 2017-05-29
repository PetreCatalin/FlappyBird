function Bird(){
    this.positionY = window.innerHeight/2-10;
    this.positionX = 30;
    this.gravity=3;
    this.speed=1;

    this.draw = function() {
        fill(255,255,255);
        ellipse(this.positionX, this.positionY, 40, 40);
    };

    this.update = function() {
        this.positionY+=this.gravity;
        this.positionX+=this.speed;

        if (this.positionY>window.innerHeight-40 || this.positionY<=-20) {
            this.positionY = window.innerHeight/2-10;
            this.positionX = 30;
            this.speed=0;
            this.gravity=0;
            alert('Jocul s-a terminat!');
            setup();
        }
    };

    this.up = function() {
        this.positionY-=70;
        this.positionX-=2;
    };
}
