class Controller{
	constructor(){
		emitter.on(GC.SET_SCORE, this.setScore);
		emitter.on(GC.UP_POINTS, this.upPoints);
		emitter.on(GC.TOGGLE_SOUND, this.toggleSound);
		emitter.on(GC.TOGGLE_MUSIC, this.toggleMusic);
		//emitter.on(GC.TOGGLE_MUSIC, this.toggleMusic);

	}
	setScore(score){
		model.score = score;
	}
	upPoints(points){
		var score = model.score;
		score += points;
		model.score = score;
	}
	toggleSound(val){
		model.soundOn = val;
	}
	toggleMusic(val){
		model.musicOn = val;
	}
}