const rpsArr = ['rock', 'paper', 'scissor'];  
const num = Math.floor(Math.random() * 2);  
const player = prompt("Do you choose rock, paper or scissors?");  
function RpsGame(player, comp) {     
    if(player === comp) {return "The result is a tie!";}     
    if(player === "rock") {         
        if(comp === "scissors") {return "rock wins";         } 
        else {             return "paper wins";         }     }    
         if(player === "paper") {        
             if(comp === "rock") {return "paper wins";} else {             
                 if(comp === "scissors") { return "scissors wins";}     }     
                 if(player === "scissors") {         
                     if(comp === "rock") {return "rock wins";} 
                 else {             
                     if(comp === "paper") {return "scissors wins";}        
                    }     
                }     
            } 
        }  RpsGame(player,rpsArr[num]);