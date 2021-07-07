class Game {
    constructor(){
        


    }
    
    getState(){

      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         
        gameState = data.val();

      })
     
    }
  
    update(state){

      database.ref('/').update({
        
        gameState : state

      });

    }
  
    start(){

      if(page === 2){

        button2.destroy();
        player = new Player();
        player.getCount();
        form = new Form()
        form.display();
        
      }

    }

    play(){
      
      game.getState();

      if(gameState === 1){

        Player.getPlayerInfo();

        var index = 0;
        var highLuck;
        var plrluck = player.luck;
        var plrArray = [];
        var a, b;

        if(allPlayers !== undefined){

          for(var plr in allPlayers){

            index = index + 1;
            if(index !== player.index){

              plrArray.push(allPlayers[plr].luck);

            }
            
            console.log(plrluck);

          }

        

          for(var i = 0; i < plrArray.length; i++){

            
            console.log(plrArray);
            a = plrArray[i];

            console.log(a + " = a");
            

              if(plrluck > a){
                player.state = 1;
                player.update();
              }
              else if(plrluck < a){
                player.state = 2;
                player.update();
              }
            
          }

          

        }

      }

    }
    
  }
  
