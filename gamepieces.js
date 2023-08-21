import {canvas,ctx,mosPos} from './start.js'
//box enemies
export class boxen {
    constructor(startx,starty){
        this.width = 32;
        this.height = 32;
        this.x = startx;
        this.y = starty;
        this.class=0;
        this.damage=1;
        this.pathing="";
    }
    draw(ctx){
        ctx.fillStyle='green';
        ctx.fillRect(this.x+4,this.y+4,this.width,this.height)
    }
    moveexact(targetx,targety,speed){
        for(let i=0; i<speed;i++){
        if (targetx>this.x){this.x+=1;}
        if (targetx<this.x){this.x-=1;}
        if (targety>this.y){this.y+=1;}
        if (targety<this.y){this.y-=1;}}
    }
    combine(){}
    damage(target){
        if



    }
    
}
export class playercircle{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.radius = 16;
        this.hp = 1000;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(mosPos.x+20,mosPos.y+20,this.radius,0,2*Math.PI,true);
        ctx.lineWidth=1;
        ctx.strokeStyle = 'red';
        ctx.stroke();
        ctx.closePath();
    }
}