class MediaManager{
	constructor(config){
		this.scene = config.scene;
		emitter.on(GC.PLAY_SOUND, this.playsound, this);
		emitter.on(GC.MUSIC_CHANGED, this.musicChanged, this);
	}
	musicChanged(){
		if(this.background){
			console.log(model.musicOn);
			if(model.musicOn == false){
				this.background.play();
			}else{
				this.background.stop();
			}
		}
	}
	playsound(key){
		if (model.soundOn){
			//this.background.volume = 0;
			var sound = this.scene.sound.add(key, {volume: 0.8});
			sound.play();
			if (key == "boom"){
				this.background.stop();
			}
			//this.background.volume = 0.3;
		}
	}
	setBackgroundMusic(key){
		if (model.musicOn == true){
			this.background = this.scene.sound.add(key, {volume: 0.3, loop:true});
			this.background.play();	
		}
	}
}