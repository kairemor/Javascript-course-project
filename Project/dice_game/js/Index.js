var current_player = 0;
var game_running ;
var dado = document.querySelector('.roll_dice');
var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');
var new_game = document.querySelector('.new_game');
var hold = document.querySelector('.hold');
var current = 0;
var score1 = 0;
var score2 = 0; 
var rand1 ; 
var rand2 ;
var rand ; 

function initiate(){
    current_player = 1 ; 
    game_running = 1 ;
    document.querySelector('.current_score1').textContent = 0;     
    document.querySelector('.current_score2').textContent = 0;     
    document.querySelector('.score1').textContent = 0;     
    document.querySelector('.score2').textContent = 0 ;   
    score1 = 0 ;   
    score2 = 0 ;   
}
initiate(); 

dado.addEventListener('click', () => {
    if (game_running == 1){
        rand1 = Math.floor(6*Math.random() + 1) ;
        rand2 = Math.floor(6*Math.random() + 1) ;
        img1.src = "images/dado0" + rand1 + '.gif';
        img2.src = "images/dado0" + rand2 + '.gif';
        current += rand1 + rand2  ; 
        if (rand1 == 1 ){
            current = 0 ;
            document.querySelector('.current_score' + current_player).textContent = 0  ;
            document.querySelector('.panelplayer'+current_player).classList.remove('active'); 
            current_player = current_player == 1 ? 2 : 1 ;
            document.querySelector('.panelplayer'+current_player).classList.add('active');
        }
        if ((rand2 == rand  &&  rand == 6) || (rand1 == 6 && rand1==rand2) ){
            score1 = current_player ==1 ? 0 : score1 ; 
            score2 = current_player ==2 ? 0 : score2 ; 
            current = 0 ;
            document.querySelector('.score'+ current_player).textContent = 0 ; 
            document.querySelector('.current_score' + current_player).textContent = 0  ;
            document.querySelector('.panelplayer'+current_player).classList.remove('active'); 
            current_player = current_player == 1 ? 2 : 1 ;
            document.querySelector('.panelplayer'+current_player).classList.add('active');
        }
        document.querySelector('.current_score' + current_player).textContent = current  ; 
        // console.log(rand) ; 
        rand = rand2 ; 
        // console.log(rand) ;
    }
}) ;

hold.addEventListener('click' , () => {
    if (game_running == 1){
        document.querySelector('.current_score' + current_player).textContent = 0 ; 
        document.querySelector('.panelplayer'+current_player).classList.remove('active');
        
        img1.src = "images/dado00.gif";
        img2.src = "images/dado00.gif";

    
        if (current_player == 1){
            score1 += current ; 
            document.querySelector('.score1').textContent = score1 ;
            if(score1 >=  100){
                document.querySelector('.panelplayer'+current_player + ' h2' ).textContent = "Winner"; 
                game_running = 0 ;    
            }
            current_player += 1 ; 
        }else {
            score2 += current ; 
            document.querySelector('.score2').textContent = score2 ; 
            
            if(score2 >= 100){
                document.querySelector('.panelplayer'+current_player + ' h2').textContent = "Winner"; 
                game_running = 0 ;    
            }
            current_player -= 1 ;
            
        }
        document.querySelector('.panelplayer'+current_player).classList.add('active');
        current = 0 ; 
        // var score ; 
        // score  = score1 >= score2 score  = score1 >= score2 ? score1 : score2 ; ? score1 : score2 ;  

    }
});

new_game.addEventListener('click', initiate); 