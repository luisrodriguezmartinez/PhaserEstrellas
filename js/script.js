//CREAMOS EL MUNDO PHASER
var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'Juego-Colisiones', {preload: preload, create: create, update: update, render: render});

function preload() {

    game.load.image('logo', 'assets/sprites/logo.png');
    game.load.image('estrella', 'assets/sprites/star.png');
    game.load.image('boton', 'assets/sprites/boton.png');
}

var milogo;
var miestrella;
var miboton;

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    agregarGraficaDecorativa();

    //Esto nos permite hacer click sobre el logo de freekimedia
    miboton.inputEnabled = true;
    miboton.events.onInputDown.add(listener, this);
}

function render() {

}
function update() {

}

function agregarGraficaDecorativa() {
    milogo = game.add.sprite(game.world.centerX, 0, 'logo');
    milogo.anchor.set(0.5, 0);

    miboton = game.add.sprite(game.world.centerX, game.world.centerY, 'boton');
    miboton.anchor.set(0.5, 0.5);

}

function listener() {
    console.log('agregando estrellas');

    miestrella = game.add.sprite(0, 0, 'estrella');
    game.physics.enable(miestrella, Phaser.Physics.ARCADE);
    miestrella.body.velocity.setTo(200, 200);
    miestrella.body.collideWorldBounds = true;
    miestrella.body.bounce.set(0.8);
    miestrella.body.gravity.set(0, 190);

}