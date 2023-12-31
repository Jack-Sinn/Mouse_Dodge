

export const gamescript = document.createElement('script');
gamescript.src='./script.js';
gamescript.type='module';
export const gamepieces = document.createElement('script');
gamepieces.src='./gamepieces.js';
gamepieces.type='module';
export const gamestartseq = document.createElement('script');
gamestartseq.src='./startseq.js';
gamestartseq.type='module';

export let distancerun = 0;
class soundlib{
    constructor(){
    this.sounds = {
        bee:'../Resources/bee.mp3',
        bot:'../Resources/bot.mp3',
        gameend:'../Resources/gameend.mp3',
        knife:'../Resources/knife.mp3',
        load:'../Resources/loadin.mp3',
        squish:'../Resources/squish.mp3'};
    }
    load(sound){let wav = new Audio(sound);}
}

export const soundlibc = new soundlib;
//html element refrences
export const htmlbody = document.body;
export const canvas = document.getElementById('board');
export const ctx = canvas.getContext('2d');
export const canvasst = document.getElementById('status')
export const ctxst = canvasst.getContext('2d');
canvas.width = window.innerWidth*.9;
canvas.height = window.innerHeight*.7;
canvas.style.minWidth = "1728px";
canvas.style.minHeight = "756px";

canvas.style.marginTop = "1vh";
canvasst.width = window.innerWidth*.4;
canvasst.height = window.innerHeight*.2;

canvasst.style.marginTop = "1vh";
export const mosPos= {x:0,y:0}
export const startdiv = document.getElementById('start');



//attach gamestart mechanism
startdiv.appendChild(gamestartseq);

function gamestart(){
    //draw black canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,board.width,board.height);
    ctxst.fillRect(0,0,board.width,board.height);
    requestAnimationFrame(gamestart);//looping method
}
gamestart();

//listeners
window.addEventListener('resize',()=> {canvas.width = window.innerWidth*.9; canvas.height = window.innerHeight*.7;})
canvas.addEventListener('mousemove',(event)=>{ //bounding needed for mouse tracking in canvas as the canvas will change size during game play 
    const rect = canvas.getBoundingClientRect(); distancerun +=1;
    mosPos.x= Math.round(event.clientX - rect.left-42);
    mosPos.y= Math.round(event.clientY - rect.top-38);
    ctx.font="2vw Arial";
}) 
