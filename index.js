let flag = 0;
let temp = 1;
let i = 1;
function start(){
    let gridSize = parseInt(document.getElementById("grid").value);
    let nPlayers = parseInt(document.getElementById("nPlayers").value);
    let droll = [nPlayers];
    let drhis = new Array(nPlayers);
    let phis = new Array(nPlayers);

    for(let j=0;j<phis.length;j++){
        phis[i] = new Array();
    }
    for(let j=0;j<drhis.length;j++){
        drhis[i] = new Array();
    }
    while(temp === 1){
        for(var i=0;i<nPlayers;i++){
            droll.push(Math.floor(Math.random()*6)+1);
            if(phis[i][phis[i].length-1]+droll < gridSize*gridSize || flag === 0){
                drhis[i][drhis[i].length-1] = droll;
                document.querySelector(`.r${i+1}`).innerHTML = drhis;
            }
            if(flag === 0){
                phis[i][phis[i].length-1] = droll;
            }
            else{
                if(phis[i][phis[i].length-1] + droll <= gridSize*gridSize){
                    phis[i][phis[i].length-1] = phis[i][phis[i].length-2] + droll;
                    if(phis[i][phis[i].length-1] === gridSize*gridSize){
                        document.querySelector('.winner').innerHTML = `Winner is Player 1 ${i+1}`;
                        temp = 0;
                        break;
                    }
                }
            }
        }
        i++;
    }
}
