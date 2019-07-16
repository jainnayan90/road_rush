class SceneOver extends Phaser.Scene {
    constructor() {
        super('SceneOver');
    }
    preload()
    {
        
    }
    create() {
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();
        
        // var mediaManager = new MediaManager({scene:this});
        // mediaManager.setBackgroundMusic('backgroundMusic');

        this.alignGrid = new AlignGrid({rows:11, cols:11, scene:this});
        //this.alignGrid.showNumbers();

        this.backImage = this.add.image(game.config.width/2, game.config.height/2, "titleBack")
        
        var title = this.add.image(0, 0, "title");
        Align.scaleToGameW(title, 0.3);
        this.alignGrid.placeAtIndex(38, title);

        var btnStart = new FlatButton({scene:this, key:'button1', text:'Play Again!', event:'start_game'});
        this.alignGrid.placeAtIndex(93, btnStart);

        // var toggleButton = new ToggleButton({scene:this, backKey:'toggleBack', onIcon:'sfxOn', 
        //                                     offIcon:'sfxOff', event:GC.TOGGLE_SOUND, x:240, y:450});

        mediaManager = new MediaManager({scene:this});
        mediaManager.setBackgroundMusic('backgroundMusic');

        emitter.on('start_game', this.start_game, this);
    }
    update() {

    }
    start_game(){
        //model.musicOn = !model.musicOn;
        //emitter.emit(GC.PLAY_SOUND, 'cat');
        this.scene.start('SceneMain');
    }
}