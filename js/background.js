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