var game = new Phaser.Game(1000, 600, Phaser.AUTO, '', {preload:preload, create:create, update:update});
var player;

var background_one;
var background_two;
var background_speed = -50;

var player_x_mod = 0;
var player_y_mod = 0;

function preload(){
    game.load.image('spaceShip', 'assets/images/spaceShip.png');
    game.load.image('space', 'assets/images/space.png');
}

function create(){
    background_one = game.add.sprite(0,0, 'space');
    background_two = game.add.sprite(1000,0, 'space');
    player = game.add.sprite(20,120, 'spaceShip');
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    game.physics.arcade.enable(player);
    game.physics.arcade.enable(background_one);
    game.physics.arcade.enable(background_two);
    
    
}

function update(){
    
    
    var cursors = game.input.keyboard.createCursorKeys();
    
    player.body.velocity.x = player_x_mod;
    player.body.velocity.y = player_y_mod;
    
    if(cursors.left.isDown){
       player_x_mod = -100;
    }else if(cursors.right.isDown){
        player_x_mod = 250
    }else{
        if(player.body.velocity.x > 0){
            player_x_mod -=10;            
        }else if(player.body.velocity.x < 0){
            player_x_mod +=5; 
        }
    }
    
    if(cursors.up.isDown){
        player_y_mod = -150;
    }else if(cursors.down.isDown){
        player_y_mod = 150;
    }else{
        if(player.body.velocity.y > 0){
            player_y_mod -=10;            
        }else if(player.body.velocity.y < 0){
            player_y_mod +=10; 
        }
    }
    
    moveBackground();
}

function moveBackground(){
    background_one.body.velocity.x = background_speed;
    background_two.body.velocity.x = background_speed;
    
    if(background_one.x < -1000){
        background_one.x = 1000;
    }
    
    if(background_two.x < -1000){
        background_two.x = 1000;
    }
}