class Road extends Phaser.GameObjects.Container{
	constructor(config){
		super(config.scene);
		this.scene = config.scene;
		this.back = this.scene.add.image(0,0, "road");//setting road image as background
		this.add(this.back);// adding backgroune to scene
		this.scene.add.existing(this);//adding scene

		//this.back.displayWidth = game.config.width/2;
		//this.back.scaleY = this.back.scaleX;
		Align.scaleToGameW(this.back, 0.5);
		this.setSize(this.back.displayWidth, game.config.height);

		this.lineGroup = this.scene.add.group();
		//this.makeLines();
		this.count = 0;

		//adding car
		this.car = this.scene.add.sprite(-this.displayWidth/4, game.config.height * 0.9, "cars");
		Align.scaleToGameW(this.car, 0.10);
		this.add(this.car);

		//adding click
		this.back.setInteractive();
		this.back.on('pointerdown', this.changeLanes, this);

		//add obstacles
		this.addObject();
	}
	addObject(){
		var objs = [{key:'pcar1', speed:10, scale:10}, {key:'pcar2', speed:10, scale:10}, 
					{key:'cone', speed:20, scale:5}, {key:'barrier', speed:10, scale:8}];
		var index = Math.floor(Math.random() * objs.length)
		var lane = Math.random() * 100;
		var key = objs[index].key;
		var speed = objs[index].speed;
		var scale = objs[index].scale/100;
		if (lane < 50){
			this.object = this.scene.add.sprite(-this.displayWidth/4, 0, key);	
		}else{
			this.object = this.scene.add.sprite(this.displayWidth/4, 0, key);
		}
		this.object.speed = speed;
		Align.scaleToGameW(this.object, scale);
		this.add(this.object);
	}
	goGameOver(){
		this.scene.start('SceneOver');
	}
	moveObject(){
		if (model.gameOver){
			return;
		}
		this.object.y += this.vSpace/this.object.speed * model.speed;
		if(Collision.checkCollide(this.car, this.object) == true){
			this.car.alpha = 0.5
			model.gameOver = true;
			emitter.emit(GC.PLAY_SOUND, "boom");
			this.scene.tweens.add({targets: this.car,duration: 1000,y:game.config.height, angle:-270});
			this.scene.time.addEvent({ delay: 2500, callback: this.goGameOver, callbackScope: this.scene, loop: false});
			//this.scene.scene.start('SceneOver	');
		}else{
			this.car.alpha = 1;
		}
		if(this.object.y > game.config.height){
			emitter.emit(GC.UP_POINTS, 10);
			this.object.destroy();
			this.addObject();
		}
	}
	changeLanes(){
		if (model.gameOver){
			return;
		}
		emitter.emit(GC.PLAY_SOUND, "whoosh");
		this.car.x = -1 * this.car.x; 
		
	}
	makeLines(){
		this.vSpace = this.displayHeight/10;
		for(var i=0; i<20; i++){
			var line = this.scene.add.image(this.x, this.vSpace * i, "line");
			line.oy = line.y;
			this.lineGroup.add(line);

		}
	}
	moveLines(){
		if (model.gameOver){
			return;
		}
		this.lineGroup.children.iterate(function(child){
			child.y += this.vSpace/20;
		}.bind(this));
		this.count++;
		if(this.count == 20){
			this.count = 0;
			this.lineGroup.children.iterate(function(child){
				child.y = child.oy;
			}.bind(this));
		}
	}
}