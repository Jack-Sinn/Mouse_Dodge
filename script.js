import {canvas,ctx,canvasst,ctxst,mosPos} from './start.js'
import {boxen, playercircle} from './gamepieces.js'
let restartbtn = document.getElementById('restartbtn');
restartbtn.addEventListener("click",gamerestart)

//
function randomX(){
    let choice = Math.round(Math.random());let xx = 500;
    if (choice == 0){xx= (0 - (Math.round(Math.random()*500)));}
    if (choice == 1){xx=(canvas.width + (Math.round(Math.random()*500)));}
    return xx;
}
function randomY(){
    let choice = Math.round(Math.random());let yy = 500;
    if (choice === 0){yy = (0 - (Math.round(Math.random()*500)));}
    if (choice === 1){yy=canvas.height + (Math.round(Math.random()*500));}
    return yy;
}
//initialize
let boxes = [];
boxes[0] = new boxen(randomX(),randomY());
export let gameend=0;
let gametimer = 0;
let diftime = 5000;
let genenemyInterval;

const player = new playercircle(mosPos.x,mosPos.y);
//gameloop

//gameloop drawing and everything on the screen
function gameloop(){
    //canvasst
    ctxst.fillStyle = "black";
    ctxst.fillRect(0,0,board.width,board.height);
    //boxes
    for(let i=0;i<boxes.length;i++){
    boxes[i].draw(ctx);
    boxes[i].move(mosPos.x,mosPos.y);
    if (gameend==0){boxes[i].dodamage(player)};
    }
    //circle
    player.draw(ctx);
    //hudlife
    ctxst.beginPath();
    ctxst.arc(canvasst.width/4.2,canvasst.height/2,80,0,2*Math.PI,true);
    ctxst.lineWidth=10;
    ctxst.strokeStyle = 'darkgrey';
    ctxst.stroke();
    ctxst.closePath();
    ctxst.beginPath();
    ctxst.arc(canvasst.width/4.2,canvasst.height/2,80,0,((6.2832)*(player.hp/500)),false);
    ctxst.lineWidth=8;
    ctxst.strokeStyle = 'green';
    ctxst.stroke();
    ctxst.closePath();
    //hudtext
    ctxst.font="3em Arial";
    ctxst.textAlign="center";
    ctxst.fillStyle='darkgrey';
    ctxst.fillText("HP",canvasst.width/4.2,canvasst.height/1.8)
    ctxst.textAlign="left";
    ctxst.fillText("Enemies:",canvasst.width/2,canvasst.height/2.5)
    ctxst.fillText(boxes.length,canvasst.width/1.25,canvasst.height/2.5)
    ctxst.fillText("Time:",canvasst.width/2,canvasst.height/1.3)
    ctxst.fillText((gametimer/10)+'s',canvasst.width/1.45,canvasst.height/1.3)
    //repeat
    requestAnimationFrame(gameloop);
    //game end
    if(player.hp<0){player.hp=0}
    if(player.hp==0){
        gameend=1;
    }
    if (gameend==1){restartbtn.style.display="block"}
    if(gametimer==200){
        diftime = (1000+(Math.random()*4000));
        console.log(diftime)
        genenedifplus(diftime);}
    if(gametimer==400){
        diftime = (1000+(Math.random()*2500));
        console.log(diftime)
        genenedifplus(diftime);}
    if(gametimer==600){
        diftime = (1000+(Math.random()*1000));
        console.log(diftime)
        genenedifplus(diftime);}
    if(gametimer==800){
        diftime = (1000);
        console.log(diftime)
        genenedifplus(diftime);}
    if(gametimer==1200){
        diftime = (500);
        console.log(diftime)
        genenedifplus(diftime);}
    if(gametimer==1800){
        diftime = (100);
        console.log(diftime)
        genenedifplus(diftime);}
}





function genenemy(){
    if(gameend==0){
    boxes.push(new boxen(randomX(),randomY(),Math.floor(Math.random()*4.99)))};
}
function genenedifplus(newtime){
    clearInterval(genenemyInterval);
    genenemyInterval = setInterval(genenemy,newtime);
}
function gametimeradd(){if(gameend==0){gametimer+=1}}
gameloop();
genenemyInterval = setInterval(genenemy,(1000+(Math.random()*diftime)));
setInterval(gametimeradd,100)

function gamerestart(){
    location.reload();
}
//creat boxen over random intervals at random postions outside of canvas