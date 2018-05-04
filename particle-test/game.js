/*global Phaser*/
/*jslint sloppy:true, browser: true, devel: true, eqeq: true, vars: true, white: true*/
var game;
var emitter;
var emitter2;

var mainState = {
    // Here we add all the functions we need for our state
    // For this project we will just have 3 functions
    preload: preload,
    create: create,
    update: update
};

// Initialize Phaser
game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');

// And finally we tell Phaser to add and start our 'main' state
game.state.add('main', mainState);
game.state.start('main');


function preload(){
	game.load.image('spark', 'assets/images/particle3.png');
	game.load.image('smoke', 'assets/images/particle2.png');
}

function create(){

	game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = 0x000000;

    emitter = game.add.emitter(0, 0, 100);

    emitter.makeParticles('spark');
    emitter.gravity = 800;
    emitter.minParticleAlpha = 0.1;
    emitter.maxParticleAlpha = 0.8;

    emitter.minParticleScale = 0.5;
    emitter.minParticleScale = 2.0;
    emitter.minParticleSpeed = new Phaser.Point(-400, -400);
    emitter.maxParticleSpeed = new Phaser.Point(300, 300);


    emitter2 = game.add.emitter(0, 0, 100);
    emitter2.makeParticles('smoke');
    emitter2.gravity = -200;
    emitter2.minParticleAlpha = 0.1;
    emitter2.maxParticleAlpha = 0.5;
    emitter2.minParticleScale = 2.0;
    emitter2.minParticleScale = 5.0;

    game.input.onDown.add(particleBurst, this);
}

function update(){

}

function particleBurst(pointer){
  	emitter.x = pointer.x;
    emitter.y = pointer.y;
    emitter.start(true, 2000, null, 8000);

    // emitter2.x = pointer.x;
    // emitter2.y = pointer.y;
    // emitter2.start(true, 2000, null, 2000);
}