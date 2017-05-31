function Bird(){
    this.positionY = window.innerHeight/2-10;
    this.positionX = 200;
    this.gravity=3;
    //this.speed=Math.random();

    this.draw = function() {
        fill(255,0,0);
        ellipse(this.positionX, this.positionY, 40, 40);
    };

    this.update = function() {  //miscarea naturala a pasarii
        this.positionY+=this.gravity;
        this.positionX+=-1 + Math.random()*2; //oscileaza si pozitia pe orizontala fata-spate

        if (this.positionY>window.innerHeight-40 || this.positionY<=-20) {
            this.positionY = window.innerHeight/2-10;
            this.gravity=0;
            alert('Scor obtinut: ' +numberOfPipesScore +". Incercati din nou!");
            location.reload();
        }
    };

    this.up = function() { //apas pe space si pasarea urca
        this.positionY-=70;
    };

}
