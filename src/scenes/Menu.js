class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    create(){
        //at location 20x, 20y
        //this.add.text(20,20,"Rocket Patrol Menu");
        //this.scene.start("playScene");

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(game.config.width/2, game.config.height/2 - borderUISize -
        borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'use <- -> arrows to move and (F) to fire',
        menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize +
        borderPadding, 'Press <- for Novice or -> for Expert', menuConfig).setOrigin(.5);
    }

    
}