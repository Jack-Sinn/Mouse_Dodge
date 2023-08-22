import {canvas,ctx,canvasst,ctxst,mosPos} from './start.js'
import {boxen, playercircle} from './gamepieces.js'


//
function randomX(){
    let choice = Math.round(Math.random());let xx = 500;
    if (choice == 0){xx= (0 - (Math.round(Math.random()*500)));}
    if (choice == 1){xx=(canvas.width + (Math.round(Math.random()*500)));}
    console.log(xx);
    return xx;
}
function randomY(){
    let choice = Math.round(Math.random());let yy = 500;
    if (choice === 0){yy = (0 - (Math.round(Math.random()*500)));}
    if (choice === 1){yy=canvas.height + (Math.round(Math.random()*500));}
    console.log(yy)
    return yy;
}
//initialize
let boxes = [];
boxes[0] = new boxen(randomX(),randomY());
setInterval(boxes.push(new boxen(randomX(),randomY())),5000);
setInterval(boxes.push(new boxen(randomX(),randomY())),10000);

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
    boxes[i].moveslide(mosPos.x,mosPos.y,20);
    boxes[i].dodamage(player);
    }
    //circle
    player.draw(ctx);
    //hud
    ctxst.beginPath();
    ctxst.arc(canvasst.width/3.5,canvasst.height/2,100,0,2*Math.PI,true);
    ctxst.lineWidth=10;
    ctxst.strokeStyle = 'darkgrey';
    ctxst.stroke();
    ctxst.closePath();
    ctxst.beginPath();
    ctxst.arc(canvasst.width/3.5,canvasst.height/2,100,0,((6.2832)*(player.hp/1000)),false); //10/player.hp
    ctxst.lineWidth=8;
    ctxst.strokeStyle = 'green';
    ctxst.stroke();
    ctxst.closePath();
    //text
    ctxst.font="3em Arial";
    ctxst.textAlign="center";
    ctxst.fillStyle='darkgrey';
    ctxst.fillText("HP",canvasst.width/3.5,canvasst.height/1.8)
    //repeat
    requestAnimationFrame(gameloop);
}
gameloop();


//creat boxen over random intervals at random postions outside of canvas