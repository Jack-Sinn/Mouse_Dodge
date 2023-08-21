import {canvas,ctx,mosPos} from './start.js'
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
boxes[0] = new boxen(randomX(),randomY())
const player = new playercircle(mosPos.x,mosPos.y);
//gameloop

//gameloop drawing and everything on the screen
function gameloop(){
    //boxes
    boxes[0].draw(ctx);
    boxes[0].moveexact(mosPos.x,mosPos.y,30);
    //circle
    player.draw(ctx);
    /*
    ctx.beginPath();
    ctx.arc(mosPos.x,mosPos.y,16,0,2*Math.PI,true);
    ctx.lineWidth=1;
    ctx.strokeStyle = 'red';
    ctx.stroke();
    ctx.closePath();*/
    requestAnimationFrame(gameloop)


}
gameloop();


//creat boxen over random intervals at random postions outside of canvas