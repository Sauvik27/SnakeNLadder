

let nplayer = 3;

let droll1;
let droll2;
let droll3;


let drhis1 = [];
let drhis2 = [];
let drhis3 = [];


let phis1 = [];
let phis2 = [];
let phis3 = [];

let flag = 0;
let temp = 1;
let i = 1;
function start(){
    let gridSize = parseInt(document.getElementById("grid").value);
    while(temp === 1){
        console.log("fist iteration");
        droll1 = Math.floor(Math.random()*6)+1;
        document.querySelector('.d1').innerHTML = droll1;
        if(phis1[i-2]+droll1 < gridSize*gridSize || flag === 0){
            drhis1.push(droll1);
            document.querySelector('.r1').innerHTML = drhis1;
        }
        droll2 = Math.floor(Math.random()*6)+1;
        document.querySelector('.d2').innerHTML = droll2;
        if(phis1[i-2]+droll1 < gridSize*gridSize || flag === 0){
            drhis2.push(droll2);   
            document.querySelector('.r2').innerHTML = drhis2;
        }
        droll3 = Math.floor(Math.random()*6)+1;
        document.querySelector('.d3').innerHTML = droll3;
        if(phis1[i-2]+droll1 < gridSize*gridSize || flag === 0){
            drhis3.push(droll3);   
            document.querySelector('.r3').innerHTML = drhis3;
        }
    
        if(flag === 0){
            phis1.push(droll1);
            document.querySelector('.p1').innerHTML = phis1;
            phis2.push(droll2);
            document.querySelector('.p2').innerHTML = phis2;
            phis3.push(droll3);
            document.querySelector('.p3').innerHTML = phis3;
            flag = 1;
        }
        else{
            if(phis1[i-2]+droll1 <= gridSize*gridSize){
                phis1.push(phis1[i-2]+droll1);
                document.querySelector('.p1').innerHTML = phis1;
                if(phis1[i-1] === gridSize*gridSize){
                    document.querySelector('.winner').innerHTML = "Winner is Player 1";
                    console.log("Winner is Player 1");
                    temp = 0;
                    break;
                }
            }
            console.log(phis1);
            if(phis2[i-2]+droll2 <= gridSize*gridSize){
                phis2.push(phis2[i-2]+droll2);
                document.querySelector('.p2').innerHTML = phis2;
                if(phis2[i-1] === gridSize*gridSize){
                    document.querySelector('.winner').innerHTML = "Winner is Player 2";
                    console.log("Winner is Player 2");
                    temp = 0;
                    break;
                }
            }
            console.log(phis2);
            if(phis3[i-2]+droll3 <= gridSize*gridSize){
                phis3.push(phis3[i-2]+droll3);
                document.querySelector('.p3').innerHTML = phis3;
                if(phis3[i-1] === gridSize*gridSize){
                    document.querySelector('.winner').innerHTML = "Winner is Player 3";
                    console.log("Winner is Player 3");
                    temp = 0;
                    break;
                }
            }
            console.log(phis3);
        }
        i++;
    }
}

console.log(phis3);
console.log(phis2);
console.log(phis1);
