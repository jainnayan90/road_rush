class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
    	
    }
    create() {
        //var mediaManager = new MediaManager({scene:this});
        mediaManager.musicChanged();
        mediaManager.setBackgroundMusic('backgroundMusic1');
        
        model.gameOver = false;
        model.speed = 1;
        model.score = 0;
        

        this.sb = new ScoreBox({scene:this});
        this.sb.x = game.config.width - 50;
        this.sb.y = 50;
        

        

        var gridConfig = {rows:5, cols:5, scene:this};
        this.alignGrid = new AlignGrid(gridConfig);
        //this.alignGrid.showNumbers();
        this.alignGrid.placeAtIndex(4, this.sb);

        
        this.road = new Road({scene:this});
        this.road.x = game.config.width * .5;
        this.road.makeLines();


        // this.road2 = new Road({scene:this});
        // this.road2.x = game.config.width * .75;
        // this.road2.makeLines();

        // this.road2.car.setFrame(1);


        var soundButtons = new SoundButtons({scene:this});
        emitter.on(GC.SCORE_UPDATED, this.scoreUpdated, this);

    }
    scoreUpdated(){
        //console.log(model.score, model.score%50, model.speed);
        if(model.score % 50 ==0){
            model.speed += .25;
            if (model.speed >= 3.5){
                model.speed = 3.5;
            }  
        }
    }
    update() {
        this.road.moveLines();
        this.road.moveObject();

        // this.road2.moveLines();
        // this.road2.moveObject();
    }
}