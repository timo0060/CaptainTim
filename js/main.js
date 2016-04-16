var game = new Phaser.Game(1000, 600, Phaser.AUTO, '', {preload:preload, create:create, update:update});
var player;
var asteroid;
var cursors;

var background_one;
var background_two;
var background_speed = -50;

var player_x_mod = 0;
var player_y_mod = 0;

var asteroid_x = 1000;
var asteroid_y = 250;
var asteroid_speed;
var asteroid_num = 8;

function preload(){
    game.load.spritesheet('spaceShip', 'assets/images/spaceShip_sprites.png', 136, 57);
    game.load.image('space', 'assets/images/space.png');
    game.load.image('asteroid', 'assets/images/asteroid.png');
}

function create(){
    background_one = game.add.sprite(0,0, 'space');
    background_two = game.add.sprite(1000,0, 'space');
    player = game.add.sprite(20,120, 'spaceShip');
    player.animations.add('flying', [0,1,2,3,4]);
    
    asteroids = game.add.group();
    asteroids.enableBody = true;
    asteroids.physicsBodyType = Phaser.Physics.ARCADE;
    
    createAsteroids(asteroid_num);
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    game.physics.arcade.enable(player);
    game.physics.arcade.enable(background_one);
    game.physics.arcade.enable(background_two);
    
    cursors = game.input.keyboard.createCursorKeys();
}

function update(){
    player.animations.play('flying', 50, true);
    moveBackground();
    
    getPlayerMovement();    
    player.body.velocity.x = player_x_mod;
    player.body.velocity.y = player_y_mod;
    
    asteroids.forEach(function(asteroid){
        checkAsteroidsPos(asteroid);
    });
    
    //checkAsteroidsPos();
    
    checkPlayerBoundries();
    
}