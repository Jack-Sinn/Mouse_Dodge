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
        this.color="green";
        this.speed=20;
        this.maxspeed=20;
        this.horspd = 0;
        this.verspd = 0;
    }
    draw(ctx){
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x+4,this.y+4,this.width,this.height)
    }
    moveexact(targetx,targety){
        for(let i=0; i<this.speed;i++){
        if (targetx>this.x){this.x+=1;}
        if (targetx<this.x){this.x-=1;}
        if (targety>this.y){this.y+=1;}
        if (targety<this.y){this.y-=1;}}
    }
    moveslide(targetx,targety){
        if (targetx>this.x){this.horspd+=1;}
        if (targetx<this.x){this.horspd-=1;}
        if (targety>this.y){this.verspd+=1;}
        if (targety<this.y){this.verspd-=1;}

        if (this.horspd>this.maxspeed){this.horspd=this.maxspeed;}
        if (this.horspd<this.maxspeed*-1){this.horspd=this.maxspeed*-1;}
        if (this.verspd>this.maxspeed){this.verspd=this.maxspeed;}
        if (this.verspd<this.maxspeed*-1){this.verspd=this.maxspeed*-1;}
        this.x+=this.horspd;
        this.y+=this.verspd;
    }
    dodamage(other){
        if ((Math.abs(this.x-other.x)) < 36  &&  Math.abs(this.y-other.y) < 36){other.hp -= this.damage; console.log(other.hp)}
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
        this.x = mosPos.x;
        this.y = mosPos.y;
        ctx.beginPath();
        ctx.arc(mosPos.x+20,mosPos.y+20,this.radius,0,2*Math.PI,true);
        ctx.lineWidth=1;
        ctx.strokeStyle = 'red';
        ctx.stroke();
        ctx.closePath();
    }
}