function createAsteroids(num){
    for(var i = 0; i < num; i++){
        var starting_x = Math.floor((Math.random() * 600) + 1100);
        var starting_y = Math.floor((Math.random()* 600) + -25);
        var asteroid = asteroids.create(starting_x, starting_y, 'asteroid');
        
        var asteroid_speed = Math.floor((Math.random()* -350) - 150);
        
        asteroid.body.velocity.x = asteroid_speed;
    }
}

function checkAsteroidsPos(asteroid){
    if(asteroid.x < -150){
        asteroid.x = Math.floor((Math.random() * 600) + 1100);
        var asteroid_speed = Math.floor((Math.random()* -350) - 150);        
        asteroid.body.velocity.x = asteroid_speed;
    }
}