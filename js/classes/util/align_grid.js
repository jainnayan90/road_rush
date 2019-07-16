class AlignGrid{
	constructor(config){
		this.config = config;
		if (!config.scene){
			console.log("scene missing align_grid.js");
			return;
		}
		if (!this.config.rows){
			this.config.rows = 5;
		}
		if (!this.config.cols){
			this.config.cols = 5;
		}
		if (!this.config.height){
			this.config.height = game.config.height;
		}
		if (!this.config.width){
			this.config.width = game.config.width;
		}
		this.scene = config.scene;
		this.cw = this.config.width/this.config.cols;//cell width
		this.ch = this.config.height/this.config.rows;//cell height
	}
	show(){
		this.graphics = this.scene.add.graphics();
		this.graphics.lineStyle(2, 0xff0000);
		for(var i=0; i < this.config.width; i+=this.cw){
			this.graphics.moveTo(i, 0);
			this.graphics.lineTo(i, this.config.height);

		}
		for(var i=0; i < this.config.height; i+=this.ch){
			this.graphics.moveTo(0, i);
			this.graphics.lineTo(this.config.width, i);

		}
		this.graphics.strokePath();
	}
	placeAt(xx, yy, obj){
		//calc position based upon cellwidth and cell height
		var x2 = this.cw*xx;
		var y2 = this.ch*yy;
		obj.x = x2 + this.cw/2;
		obj.y = y2 + this.ch/2;
	}

	placeAtIndex(index, obj){
		var yy = Math.floor(index/this.config.cols);
		var xx = index - (yy * this.config.cols);
		this.placeAt(xx, yy, obj);
	}
	showNumbers(){
		this.show()
		var count = 0;
		for (var i=0; i<this.config.rows;i++){
			for (var j=0; j<this.config.cols;j++){
				var numText = this.scene.add.text(0 ,0, count, {color:"#ffff"});
				numText.setOrigin(0.5, 0.5);
				this.placeAtIndex(count, numText);
				count++;
			}
		}
	}
}