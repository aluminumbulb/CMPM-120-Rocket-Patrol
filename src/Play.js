class Play extends Phaser.scene{
    constructor(){
        this.add.rectangle(0,borderUISize+borderPadding, game.config.width, borderUIZize *2, 0x00FF00)
    }
}