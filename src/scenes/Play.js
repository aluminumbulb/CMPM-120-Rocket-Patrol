class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
        console.log("playscene created");
    }
    // phaser contained function
    preload(){
        this.load.image('starfield','assets/starfield.png');
    }

    create(){
        //layers are important
        this.starfield = this.add.tileSprite(
            0,0,640,480, 'starfield'
        ).setOrigin(0,0);

        //this.add.text(20,20,"Playing Scene");
        //green bar
        this.add.rectangle(0,borderUISize+borderPadding, game.config.width, borderUISize *2, 0x00FF00).setOrigin(0,0);
        //white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
	    this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
	    this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
	    this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
    }
    update(){
        this.starfield.tilePositionX -= 4;
    }
}