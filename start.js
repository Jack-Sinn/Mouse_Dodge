//html element refrences
export const gamescript = document.createElement('script');
gamescript.src='./script.js';
gamescript.type='module';
export const htmlbody = document.body;
const canvas = document.getElementById('board');
export const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth*.9;
canvas.height = window.innerHeight*.7;
canvas.style.fontSize = "30px";
export const mosPos= {x:board.width/2,y:board.height/2,}
const startdiv = document.getElementById('start');
let centerstart = false;
let countdown = 500;


//box enemies
let boxes = [];
class boxen {
    constructor(startx,starty){
        this.width = 32;
        this.height = 32;
        this.x = startx;
        this.y = starty;
        this.class=0;
        this.damage=0;
        this.pathing="";
    }
    draw(){
        ctx.fillStyle='green'
        ctx.fillRect(this.x-16,this.y-16,this.width,this.height)
    }
    moveexact(targetx,targety,speed){
        for(let i=0; i<speed;i++){
        if (targetx>this.x){this.x+=1;}
        if (targetx<this.x){this.x-=1;}
        if (targety>this.y){this.y+=1;}
        if (targety<this.y){this.y-=1;}}
    }
    
}

function gamestart(){
    ctx.beginPath();
    ctx.arc(canvas.width/2,canvas.height/2,64,0,2*Math.PI,true);
    ctx.lineWidth=1;
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    ctx.closePath();
    requestAnimationFrame(gamestart);
}
gamestart();
boxes[0]=new boxen(400,400)

//gameloop drawing and everything on the screen
function gameloop(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,board.width,board.height)
    //boxes
    boxes[0].draw();
    boxes[0].moveexact(mosPos.x,mosPos.y,30);
    //circle
    ctx.beginPath();
    ctx.arc(mosPos.x,mosPos.y,16,0,2*Math.PI,true);
    ctx.lineWidth=1;
    ctx.strokeStyle = 'red';
    ctx.stroke();
    ctx.closePath();
    requestAnimationFrame(gameloop)
    //text
    ctx.font="2vw Arial";
    ctx.textAlign="center"; 
    ctx.fillStyle='white';
    ctx.fillText("Move the curser in the center to start!",canvas.width/2,canvas.height*.35)
    ctx.fillText("Move the curser in the center to start!",canvas.width/2,canvas.height*.65)
    ctx.fillText(`${countdown}`,canvas.width/2,canvas.height*.75)


}
gameloop();
gamestart();
//listeners
window.addEventListener('resize',()=> {canvas.width = window.innerWidth*.9; canvas.height = window.innerHeight*.7;})
canvas.addEventListener('mousemove',(event)=>{ //bounding needed for mouse tracking in canvas as the canvas will change size during game play 
    const rect = canvas.getBoundingClientRect();
    mosPos.x= Math.round(event.clientX - rect.left-42);
    mosPos.y= Math.round(event.clientY - rect.top-38);
    ctx.font="2vw Arial";
}) 
window.addEventListener('mousemove',(event)=>{
    if ((mosPos.x > (canvas.width/2)-32 )&& (mosPos.x < (canvas.width/2)+32)){centerstart=true;countdown-=10}else{centerstart=false;countdown=500};
    if (countdown<=0){

        countdown = 9999;
    }

})
/* For initiating game - Remember to remove menu elements before appending
div.remove()
htmlbody.appendChild(gamescript);
*/