const { Phaser } = require("../lib/phaser");

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu],
    scene: [Play]
}

let game = new Phaser.Game(config);

let borderUISize;
let borderPadding;
