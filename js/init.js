var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'primer-juego', {preload: preload, create: create, update: update, render: render });


function preload() {


    game.load.image('logo', 'assets/sprites/logo.png');
    game.load.image('estrella', 'assets/sprites/star.png');
    game.load.image('personajes', 'assets/sprites/dude.png');
    game.load.image('arboles','assets/sprites/arbolitos.png');

}

var per1;
var per2;
var per3;



function create() {

    game.stage.backgroundColor = '#2d2d2d';
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //Agregamos a los personajes

    game.add.sprite(game.world.centerX, game.world.centerY,'arboles');





    game.add.sprite(250,0,'logo');
    per2 = game.add.sprite(250,400,'personajes');
    per1 = game.add.sprite(400, 200, 'estrella');



    //Fisica
    game.physics.enable(per1, Phaser.Physics.ARCADE);
    per1.body.velocity.setTo(200, 200);
    per1.body.collideWorldBounds = true;
    per1.body.bounce.set(0.8);
    per1.body.gravity.set(0, 180);

    game.physics.enable(per2, Phaser.Physics.ARCADE);

    per2.body.immovable = true;

}

function update() {
    game.physics.arcade.collide(per1, per2, colisionaron, null, this);
}

function render() {
//debug helper

}

function colisionaron (obj1, obj2) {

    game.stage.backgroundColor = '#992d2d';
    per2.destroy();


}
