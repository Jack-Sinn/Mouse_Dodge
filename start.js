export const gamescript = document.createElement('script');
gamescript.src='./script.js';
gamescript.type='module';
const htmlbody = document.body;
export const sharetexttest = 'goober john';
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth*.9;
canvas.height = window.innerHeight*.9;
const mosPos= {x:board.width/2,y:board.height/2,}

let midtext = document.getElementById('midtext');
midtext.innerHTML = `${mosPos.x}`;

function gameloop(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,board.width,board.height)



    ctx.beginPath();
    ctx.arc(mosPos.x,mosPos.y,16,0,2*Math.PI,false);
    ctx.lineWidth=1;
    ctx.strokeStyle = 'red'
    ctx.stroke();
    ctx.closePath();
}

setInterval(gameloop,100)


window.addEventListener('resize',()=> {canvas.width = window.innerWidth*.9; canvas.height = window.innerHeight*.9;})
/*window.addEventListener('mousemove',(event)=>{
    mosPos.x=(event.pageX);
    mosPos.y=(event.pageY);
    midtext.innerHTML = `${mosPos.x}, ${event.offsetX}`
})*/
canvas.addEventListener('mousemove',(event)=>{
    const rect = canvas.getBoundingClientRect();
    mosPos.x=event.clientX - rect.left -20;
    mosPos.y=event.clientY - rect.top-18;
    midtext.innerHTML = `${event.clientX}, ${event.clientX - rect.left}`
})    

//window.addEventListener('mousemove,'(event){

//})
/* For initiating game - Remember to remove menu elements before appending
div.remove()
htmlbody.appendChild(gamescript);
*/