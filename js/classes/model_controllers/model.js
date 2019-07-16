class Model{
	constructor(){
		this._score = 0;
		this._soundOn = true;
		this._musicOn = true;
		this.gameOver = false;
	}
	set musicOn(val){
		this._musicOn = val;
		emitter.emit(GC.MUSIC_CHANGED);
	}
	get musicOn(){
		return this._musicOn;
	}
	set soundOn(val){
		this._soundOn = val;
		emitter.emit(GC.SOUND_CHANGED);
	}
	get soundOn(){
		return this._soundOn;
	}
	set score(val){
		this._score = val;
		emitter.emit(GC.SCORE_UPDATED);
	}
	get score(){
		return this._score;
	}
}