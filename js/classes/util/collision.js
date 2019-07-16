class Collision
{
	static checkCollide(obj1, obj2){
		var distX = Math.abs(obj1.x - obj2.x);
		var distY = Math.abs(obj1.y - obj2.y);
		//console.log(obj1.x, obj1.y, obj2.x, obj2.y, obj1.width, obj1.height);
		if(distX<obj1.width/2){
			if(distY<obj1.height/2){
				return true;
			}
		}
		return false;
	}
}