var game = new Phaser.Game(1000, 600, Phaser.AUTO, '', {preload:preload, create:create, update:update});
var player;
var cursors;

var background_one;
var background_two;
var background_speed = -50;

var player_x_mod = 0;
var player_y_mod = 0;

function preload(){
    game.load.spritesheet('spaceShip', 'assets/images/spaceShip_sprites.png', 136, 57);
    game.load.image('space', 'assets/images/space.png');
}

function create(){
    background_one = game.add.sprite(0,0, 'space');
    background_two = game.add.sprite(1000,0, 'space');
    player = game.add.sprite(20,120, 'spaceShip');
    player.animations.add('flying', [0,1,2,3,4]);
    
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
    checkPlayerBoundries();
    
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

function getPlayerMovement(){
    if(cursors.left.isDown){
       if(player_x_mod > -100){
            player_x_mod -= 25;
        }
    }else if(cursors.right.isDown){
        if(player_x_mod < 250){
            player_x_mod += 25;
        }
    }else{
        if(player.body.velocity.x > 0){
            player_x_mod -=5;            
        }else if(player.body.velocity.x < 0){
            player_x_mod +=2; 
        }
    }
    
    if(cursors.up.isDown){        
        if(player_y_mod > -150){
            player_y_mod -= 25;
        }
    }else if(cursors.down.isDown){
        if(player_y_mod < 150){
            player_y_mod += 25;
        }
    }else{
        if(player.body.velocity.y > 0){
            player_y_mod -=5;            
        }else if(player.body.velocity.y < 0){
            player_y_mod +=5; 
        }
    }
}

function checkPlayerBoundries(){
    
    if(player.x < -20){
        player.x = -20
    }else if((player.x + 126) > 1000){
        player.x = 874;
    }
    
    if(player.y < -5){
        player.y = -5;
    }else if((player.y + 48) > 600){
        player.y = 552;
    }
}