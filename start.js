//import { gameend } from "./script";
//import scripts
export const gamescript = document.createElement('script');
gamescript.src='./script.js';
gamescript.type='module';
export const gamepieces = document.createElement('script');
gamepieces.src='./gamepieces.js';
gamepieces.type='module';
export const gamestartseq = document.createElement('script');
gamestartseq.src='./startseq.js';
gamestartseq.type='module';
//html element refrences
export const htmlbody = document.body;
export const canvas = document.getElementById('board');
export const ctx = canvas.getContext('2d');
export const canvasst = document.getElementById('status')
export const ctxst = canvasst.getContext('2d');
canvas.width = window.innerWidth*.9;
canvas.height = window.innerHeight*.7;
canvas.style.marginTop = "1vh";
canvasst.width = window.innerWidth*.4;
canvasst.height = window.innerHeight*.20;
canvasst.style.marginTop = "1vh";
export const mosPos= {x:board.width/2,y:board.height/2,}
export const startdiv = document.getElementById('start');



//attach gamestart mechanism
startdiv.appendChild(gamestartseq);

function gamestart(){
    //draw black canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,board.width,board.height);
    requestAnimationFrame(gamestart);//looping method
}
gamestart();

//listeners
window.addEventListener('resize',()=> {canvas.width = window.innerWidth*.9; canvas.height = window.innerHeight*.7;})
canvas.addEventListener('mousemove',(event)=>{ //bounding needed for mouse tracking in canvas as the canvas will change size during game play 
    const rect = canvas.getBoundingClientRect();
    //if (gameend == 0){
    mosPos.x= Math.round(event.clientX - rect.left-42);
    mosPos.y= Math.round(event.clientY - rect.top-38);
//}
    ctx.font="2vw Arial";
}) 
