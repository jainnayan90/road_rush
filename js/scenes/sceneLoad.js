class SceneLoad extends Phaser.Scene {
	constructor(config){
		super('SceneLoad');
	}
	preload(){
		this.bar = new Bar({scene:this, x:game.config.width/2, y:game.config.height/2});
		// bar.setPercent(0.5);
		this.progText = this.add.text(game.config.width/2, game.config.height/2, "0 %", {color:'#ffffff', 
		 							fontSize:game.config.width/20});
		this.progText.setOrigin(0.5, 0.5);
		this.load.on('progress', this.onProgress, this);

		this.load.image("road", "images/road.jpg");
        this.load.spritesheet("cars", "images/cars.png", {frameWidth:60, frameHeight:126});
        this.load.image("line", "images/line.png");
        this.load.image("pcar1", "images/pcar1.png");
        this.load.image("pcar2", "images/pcar2.png");
        this.load.image("cone", "images/cone.png");
        this.load.image("barrier", "images/barrier.png");
        this.load.image("button1", "images/ui/buttons/1/1.png");
        this.load.image("button2", "images/ui/buttons/2/4.png");


        this.load.audio("backgroundMusic1", ["audio/random-race.ogg", "audio/random-race.mp3"]);
        this.load.audio("boom", ["audio/boom.ogg", "audio/boom.mp3"]);
        this.load.audio("whoosh", ["audio/whoosh.ogg", "audio/whoosh.mp3"]);
        
        this.load.image("toggleBack", "images/ui/toggles/1.png");
        this.load.image("sfxOff", "images/ui/icons/sfx_off.png");
        this.load.image("sfxOn", "images/ui/icons/sfx_on.png");
        this.load.image("musicOn", "images/ui/icons/music_on.png");
        this.load.image("musicOff", "images/ui/icons/music_off.png");

        this.load.image("title", "images/title.png");
        this.load.image("button1", "images/ui/buttons/1/1.png");
        //this.load.audio('cat', ['audio/meow.ogg', 'audio/meow.mp3']);
        this.load.audio("backgroundMusic", ["audio/background.ogg", "audio/background.mp3"]);
        
        this.load.image("titleBack", "images/titleBack.jpg")
	}
	create(){

		this.scene.start('SceneTitle');
	}
	onProgress(value){
		//console.log(value);
		this.bar.setPercent(value);
		this.progText.setText(Math.floor(value*100).toString() + " %");
	}
}