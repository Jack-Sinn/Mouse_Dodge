import {canvas,ctx,mosPos,soundlib} from './start.js'
//box enemies
export class boxen {
    constructor(startx,starty,type){
        this.width = 32;
        this.height = 32;
        this.x = startx;
        this.y = starty;
        this.class=0;
        this.damage=1;
        this.pathing="";
        this.color="white";
        this.speed=30;
        this.maxspeed=20;
        this.horspd = 0;
        this.verspd = 0;
        this.move=this.moveslide;
        this.sound="";
        if(type==0 || type==4){this.color="green";this.move=this.moveslide; this.speed=40;this.sound=}
        if(type==1){this.color="blue";this.move=this.moveexact; this.speed=25;}
        if(type==2){this.color="rgb(6,6,6)";this.speed=20;this.damage=3}
        if(type==3){this.color="yellow"; this.move=this.moveeratic;this.speed=40;this.damage=1}

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
        //acceleration
        if (targetx>this.x){this.horspd+=1;}
        if (targetx<this.x){this.horspd-=1;}
        if (targety>this.y){this.verspd+=1;}
        if (targety<this.y){this.verspd-=1;}
        //speed cap
        if (this.horspd>this.speed){this.horspd=this.speed;}
        if (this.horspd<this.speed*-1){this.horspd=this.speed*-1;}
        if (this.verspd>this.speed){this.verspd=this.speed;}
        if (this.verspd<this.speed*-1){this.verspd=this.speed*-1;}
        //friction
        if (this.horspd>0){this.horspd-=.2}
        if (this.horspd<0){this.horspd+=.2}
        if (this.verspd>0){this.verspd-=.2}
        if (this.verspd<0){this.verspd+=.2}
        this.x+=this.horspd;
        this.y+=this.verspd;
    }
    moveeratic(targetx,targety){
        //acceleration
        if (targetx>this.x){this.horspd+=1;}
        if (targetx<this.x){this.horspd-=1;}
        if (targety>this.y){this.verspd+=1;}
        if (targety<this.y){this.verspd-=1;}
        //speed cap
        if (this.horspd>this.speed){this.horspd=this.speed;}
        if (this.horspd<this.speed*-1){this.horspd=this.speed*-1;}
        if (this.verspd>this.speed){this.verspd=this.speed;}
        if (this.verspd<this.speed*-1){this.verspd=this.speed*-1;}
        //friction
        if (this.horspd>0){this.horspd-=.2}
        if (this.horspd<0){this.horspd+=.2}
        if (this.verspd>0){this.verspd-=.2}
        if (this.verspd<0){this.verspd+=.2}
        this.x+=this.horspd;
        this.y+=this.verspd;
        //crazy
        if (targetx>this.x){this.x+=Math.round((Math.random()*100)+10);}
        if (targetx<this.x){this.x-=Math.round((Math.random()*100)+10);}
        if (targety>this.y){this.y+=Math.round((Math.random()*100)+10);}
        if (targety<this.y){this.y-=Math.round((Math.random()*100)+10);}
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
        this.hp = 500;
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