import {canvas,ctx,mosPos,startdiv,gamescript,sounds} from './start.js';
var centerstart = false;
var countdown = 300;

function startloop(){
    ctx.beginPath();
    ctx.arc(canvas.width/2,canvas.height/2,64,0,2*Math.PI,true);
    ctx.lineWidth=1;
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    ctx.closePath();

    //text
    ctx.font="2vw Arial";
    ctx.textAlign="center"; 
    ctx.fillStyle='white';
    ctx.fillText("Move the curser in the center to start!",canvas.width/2,canvas.height*.35)
    ctx.fillText("Move the curser in the center to start!",canvas.width/2,canvas.height*.65)
    ctx.fillText(`${countdown}`,canvas.width/2,canvas.height*.75)
    if (document.querySelector("#start") !=null){requestAnimationFrame(startloop)}

}
function mosstartproximity(){
    if ((mosPos.x > (canvas.width/2)-64 )&& (mosPos.x < (canvas.width/2)+64) && (mosPos.y > (canvas.height/2)-64 )&& (mosPos.y < (canvas.height/2)+64)){
        centerstart=true;countdown--}else{centerstart=false;countdown=300}
    if (countdown<=0){
        window.removeEventListener('mousemove',mosstartproximity);
        document.body.appendChild(gamescript);
        startdiv.remove();
        //startdiv.remove();
        console.log('divremoved');
}
}
window.addEventListener('mousemove',mosstartproximity)
startloop();