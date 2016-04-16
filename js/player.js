function getPlayerMovement(){
    if(cursors.left.isDown){
       if(player_x_mod > -150){
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