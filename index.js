let flag = 0;
let temp = 1;
let i = 1;
function start(){
    let gridSize = parseInt(document.getElementById("grid").value);
    let nPlayers = parseInt(document.getElementById("nPlayers").value)+1;
    let droll = [nPlayers];
    let drhis = [nPlayers];
    let phis =  [nPlayers];
    let prev = [nPlayers];
    while(temp === 1){
        for(let i=0;i<nPlayers;i++){
            droll[i] = Math.floor(Math.random()*6)+1;
            if(flag === 0 || prev[i] === undefined){
                drhis[i] =  droll[i];
            }
            else{
                if(prev[i] < gridSize*gridSize){
                    drhis[i] = drhis[i] + " , " + droll[i];
                }
            }
            if(flag === 0){
                phis[i] = droll[i];
                prev[i] = parseInt(droll[i]);
                
            }
            else{
                if(prev[i] + parseInt(droll[i]) <= gridSize*gridSize){
                    phis[i] = phis[i] + " , " + (prev[i] + parseInt(droll[i]));
                    prev[i] = prev[i] + parseInt(droll[i]);
                    if(prev[i] === gridSize*gridSize){
                        document.querySelector('.winner').innerHTML = `Winner is Player ${i}`;
                        temp = 0;
                        break;
                    }
                }
            }
        }
        flag = 1;
        console.log(prev);

    }
    for(var i=1;i<=nPlayers;i++){
        document.querySelector(`.p${i}`).innerHTML = phis[i];
    }
    for(var i=1;i<=nPlayers;i++){
        document.querySelector(`.d${i}`).innerHTML = droll[i];
    }
    for(var i=1;i<=nPlayers;i++){
        document.querySelector(`.r${i}`).innerHTML = drhis[i];
    }
    
}
