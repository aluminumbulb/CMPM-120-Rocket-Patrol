class Rocket extends Phaser.GameObjects.Sprite{
    
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture,frame)
        scene.add.existing(this);
        console.log("rocket created works");
        this.movementSpeed = 2;
        this.isFiring = false;
    }
    update(){
        if(this.isFiring){
            
            if(keyLEFT.isDown){
                this.x -= this.movementSpeed;
            }

            if(keyRIGHT.isDown){
                this.x += this.movementSpeed;
            }

            if(Phaser.Input.Keyboard.JustDown(keyF)){
                this.isFiring = true;
            }
        }
        this.x = Phaser.Math.Clamp(this.x, borderUISize+borderPadding, game.config.width-borderUISize-borderPadding)
    }
}
