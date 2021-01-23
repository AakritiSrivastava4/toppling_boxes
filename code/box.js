// templates
class Box{
    constructor (x,y,width,height){
        // constructor is a function 
        // constructor get automatically called when i create an object
        //console.log("HI i am box class constructor")
        this.width= width;
        this.height= height;
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:false});
        World.add(world,this.body);


    }
    //methods or functions 
    display (){
        // draw rectangles
        var pos =this.body.position;  // nameSpacing 
        var angle=this.body.angle
        rectMode(CENTER)
        // dp changes
        push ()
        translate (pos.x,pos.y)
        rotate(angle)
        rect (0,0,this.width,this.height)
        // undo changes
        pop ()
    }
}