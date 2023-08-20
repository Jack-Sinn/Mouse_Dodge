import {sharetexttest} from './start.js'
const gameboard = document.createElement('canvas');
const ctx = gameboard.getContext('2d');
const mouseX = 
alert(sharetexttest);

const mousePosText = document.getElementById('mouse-pos');
let mousePos = {x:null,y:null};

window.addEventListener('mousemove',(event)=>{
    mousePos = { x:event.clientX, y:event.clientY};
    mousePosText.textContent=`(${mousePos.x},${mousePos.y})`;
})