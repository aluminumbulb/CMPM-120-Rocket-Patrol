class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
        console.log("playscene created");
    }
    // phaser contained function
    preload(){
        this.load.image('starfield','assets/starfield.png');
        this.load.image('rocket', 'assets/rocket.png');
        this.load.image('ship', 'assets/spaceship.png');
    }

    create(){
        //layers are important
        this.starfield = this.add.tileSprite(
            0,0,640,480, 'starfield'
        ).setOrigin(0,0);

        this.p1Rocket = new Rocket(
            this,
            game.config.width/2,
            game.config.height - borderUISize - borderPadding,
            'rocket'
        ).setOrigin(0.5,0);

        this.ship1 = new Ships(
            this,
            100,
            200,
            'ship'
        );

        this.ship2 = new Ships(
            this,
            300,
            240,
            'ship'
        );

        this.ship3 = new Ships(
            this,
            380,
            300,
            'ship'
        );


        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

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
        this.p1Rocket.update();
        this.ship1.update();
        this.ship2.update();
        this.ship3.update();

        this.checkCollision(this.p1Rocket, this.ship1);
        this.checkCollision(this.p1Rocket, this.ship2);
        this.checkCollision(this.p1Rocket, this.ship3);
    }

    checkCollision(rocket, ship){
        if(rocket.x + rocket.width > ship.x && 
           rocket.x < ship.x + ship.width &&
           rocket.y > ship.y &&
           rocket.y < ship.y + ship.height){
               rocket.reset();
               ship.reset();
           }
            
    }
}